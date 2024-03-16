import KanbasNavigation from "./Navigation";
import NavigationHorizontal from "./Navigation/NavigationHorizontal";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import courses from "./Database/courses.json";
import { useState } from "react";

function Kanbas() {
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
        <Provider store={store}>
            <div className="d-flex" style={{ overflow: "hidden" }}>
                <KanbasNavigation />
                <div style={{ width: "100%" }}>
                    <NavigationHorizontal />
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={<Dashboard
                            stateCourses={stateCourses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />} />
                        <Route path="Courses/*" element={<Courses stateCourses={stateCourses}/>} />
                        <Route path="Courses/:courseId/*" element={<Courses stateCourses={stateCourses}/>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;