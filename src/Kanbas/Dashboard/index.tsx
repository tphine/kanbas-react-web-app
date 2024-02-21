import React from "react";
import './index.css'
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
    return (
        <div className="p-4 ms-3 col" style={{overflow: "hidden"}}>
            <h1>Dashboard</h1>              <hr />
            <h2>Published Courses (7)</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4 mt-0">
                    {courses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 275 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 125 }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "rgb(177, 0, 86)", fontWeight: "bold" }}>
                                        {course.name} </Link>
                                    <p className="card-text">{course.number}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn pink-button">
                                        Go </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;