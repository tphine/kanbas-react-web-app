import { Link, useLocation } from "react-router-dom";
import "./index.css";
import links from "./links";

function KanbasNavigation() {
    const { pathname } = useLocation();
    return (
        <div className="wd-nav-background col-1 d-none d-md-block" style={{overflow: "hidden"}}>
            <ul className="wd-kanbas-navigation">
                <li>
                    <Link to={`/Kanbas/Dashboard`}> <img className="logo" src="https://brand.northeastern.edu/wp-content/uploads/2022/05/red_monogram.png"></img> <br /></Link>
                </li>
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                        <Link to={`/Kanbas/${link.label}`}> {link.icon}<br />{link.label} </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default KanbasNavigation;