import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments
function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
    const { pathname } = useLocation();
    return (

        <div className="ms-0 d-none d-md-block" style={{width: "125px"}}>
            <ul className="wd-navigation">
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
                        <Link to={link}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CourseNavigation;