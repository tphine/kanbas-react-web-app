import React, { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { courses } from "../Database";
function Dashboard() {
    const [stateCourses, setStateCourses] = useState(courses);
    const [course, setCourse] = useState({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg"
    });
    const addNewCourse = () => {
        const newCourse = {
            ...course,
            _id: new Date().getTime().toString()
        };
        setStateCourses([...courses, { ...course, ...newCourse }]);
    };
    const deleteCourse = (courseId: string) => {
        setStateCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setStateCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <div className="p-4 ms-3 col" style={{ overflow: "hidden" }}>
            <h1>Dashboard</h1>              <hr />
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                onChange={(e) => setCourse({ ...course, name: e.target.value })} />
            <input value={course.number} className="form-control"
                onChange={(e) => setCourse({ ...course, number: e.target.value })} />
            <input value={course.startDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
            <input value={course.endDate} className="form-control" type="date"
                onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
            <br />
            <button onClick={addNewCourse} className="btn pink-button">
                Add
            </button>
            <hr />
            <h2>Published Courses (7)</h2> <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4 mt-0">
                    {stateCourses.map((course) => (
                        <div key={course._id} className="col" style={{ width: 275 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top"
                                    style={{ height: 125 }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                                        style={{ textDecoration: "none", color: "rgb(177, 0, 86)", fontWeight: "bold" }}>
                                        {course.name}
                                    </Link>
                                    <p className="card-text">{course.number}</p>
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn pink-button">
                                        Go </Link>
                                    <button
                                        className="btn edit"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                        Edit
                                    </button>

                                    <button className="btn delete"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                        Delete
                                    </button>
                                    <button className="btn update"
                                        onClick={updateCourse} >
                                        Update
                                    </button>

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