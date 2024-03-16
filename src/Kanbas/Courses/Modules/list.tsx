import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    return (
        <div className="col" style={{ overflow: "hidden" }}>
            <div className="right-align" style={{ overflow: "hidden" }}>
                <button className="default-btn">Collapse All</button>
                <button className="default-btn">View Progress</button>
                <select className="default-btn" id="publish-all">
                    <option value="PUBLISH">Publish All</option>
                </select>
                <button className="default-btn module-btn">+ Module</button>
            </div>
            <ul className="wd-modules" style={{ overflow: "hidden" }}>
                <li className="new-module">
                    <input value={module.name}
                        onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
                        className="module-input"
                    />
                    <button className="add-btn"
                        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                        Add</button>
                    <button
                        className="update-btn"
                        onClick={() => dispatch(updateModule(module))}>
                        Update
                    </button>

                    <br />
                    <textarea value={module.description}
                        onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
                        className="module-input"
                    />
                </li>

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li
                            className="list-group-item">
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}
                                <span className="float-end">
                                    <button
                                        onClick={() => dispatch(setModule(module))}
                                        className="edit-btn">
                                        Edit
                                    </button>

                                    <button
                                         onClick={() => dispatch(deleteModule(module._id))}
                                        className="delete-btn">
                                        Delete
                                    </button>
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div>
                            <ul className="list-group">
                                {module.lessons?.map((lesson: { _id: string, name: string, description: string, module: string }) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default ModuleList;