import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";

const routes = <Routes>
    <Route path="/" element={<Navigate to="Dashboard" />} />
    <Route path="Account" element={<h1>Account</h1>} />
    <Route path="Dashboard" element={<Dashboard />} />
    <Route path="Courses/*" element={<Courses />} />
    <Route path="Courses/:courseId/*" element={<Courses />} />
</Routes>

export default routes;