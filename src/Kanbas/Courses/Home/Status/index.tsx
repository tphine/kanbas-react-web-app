import "./index.css";
import { FaFileImport, FaArrowCircleRight, FaCrosshairs, FaChartBar, FaBullhorn, FaBell, FaCalendar } from "react-icons/fa";

function Status({pageName}: {pageName: string}) {
    return (
        <div className="col-3 d-none d-xl-block p-3" style={{ overflowY: "hidden", overflowX: "hidden" }}>
            <p className="mb-0">Course Status</p>
            <span className="publish-buttons">
                <button type="button"><i className="col"></i> Unpublish</button><button className="green-status-btn"
                    type="button"><i className="col" style={{ color: "white" }}></i> Published</button>
            </span>
            <br />
            <br />
            <ul className="list-unstyled status-list">
                <li>
                    <button className="status-btn"><a href="https://www.wikipedia.org/">
                        <FaFileImport /> Import Existing Content</a></button>
                </li>
                <li>
                    <button className="status-btn"><a href="https://www.wikipedia.org/">
                        <FaArrowCircleRight /> Import From Commons</a></button>
                </li>
                <li>
                    <button className="status-btn"><a href="https://www.wikipedia.org/">
                        <FaCrosshairs /> Choose Home Page</a></button>
                </li>
                <li>
                    <button className="status-btn"><a href="https://www.wikipedia.org/">
                        <FaChartBar /> View Course Stream</a></button>
                </li>
                <li>
                    <button className="status-btn"><a href="https://www.wikipedia.org/">
                        <FaBullhorn /> New Announcement</a></button>
                </li>
                <li>
                    <button className="status-btn"><a href="https://www.wikipedia.org/">
                        <FaChartBar /> New Analytics</a></button>
                </li>
                <li>
                    <button className="status-btn"><a href="https://www.wikipedia.org/">
                        <FaBell /> View Course Notifications</a></button>
                </li>
            </ul>
            <span className="row" style={{ width: "230px" }}>
                <p className="col">Coming Up</p><a className="col red-link mt-1 float-end" href="https://www.wikipedia.org/">
                    <FaCalendar /> View Calendar</a>
                <hr />
            </span>
            <ul style={{ width: "230px" }}>
                <li><a className="red-link" href="https://www.wikipedia.org/">Lecture {pageName}.12631.202410
                    <br />
                    <span>Sep 7 at 11:45am</span></a></li>
                <li><a className="red-link" href="https://www.wikipedia.org/">Lecture {pageName}.12631.202410
                    <br />
                    <span>Sep 11 at 11:45am</span></a></li>
                <li><a className="red-link" href="https://www.wikipedia.org/">Lecture {pageName} 06 SP23 Lecture
                    <br />
                    <span>Sep 11 at 6pm</span></a></li>
            </ul>
            <span className="row" style={{ width: "230px" }}>
                <p className="col">To Do</p><a className="col red-link mt-1 float-end" href="https://www.wikipedia.org/">
                    <FaCalendar /> View Calendar</a>
                <hr />
            </span>
            <p style={{fontSize: "11px"}}>Nothing for now</p>
        </div>
    );
}

export default Status;