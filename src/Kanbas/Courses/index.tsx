import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import "./index.css";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const { pathname } = useLocation();
    let pageName = pathname.split("/").at(-1)!;
    return (
        <div className="p-4 ms-3 col" style={{ width: "100%" }}>
            <div className="course-title ms-0 d-none d-md-block" style={{ width: "100%" }}>
                <span style={{ color: 'red' }}><HiMiniBars3 size={28} className="me-3" /> {course?.number} </span>
                <span style={{ color: 'rgb(70, 70, 70)' }}> {">"} {pageName}</span>
                <hr />
            </div>
            <div className="row">
                <CourseNavigation />
                <div
                    className="overflow-y-scroll col" >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home pageName={course?.number!}/>}/>
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" />
                        <Route path="Assignments" />
                        <Route path="Assignments/:assignmentId" />
                        <Route path="Grades" />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;