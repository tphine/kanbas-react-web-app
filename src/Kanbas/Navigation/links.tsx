import { FaTachometerAlt, FaRegUserCircle, FaBook, FaCalendarAlt, FaInbox, FaHistory, FaTv, FaRegQuestionCircle } from 'react-icons/fa';
const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaHistory className="fs-2" /> },
    { label: "Studio", icon: <FaTv className="fs-2" /> },
    { label: "Help", icon: <FaRegQuestionCircle className="fs-2" /> },
];
export default links;