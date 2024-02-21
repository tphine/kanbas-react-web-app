import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { modules } from "../../../Database";
import { FaArrowDown, FaHome, FaNode, FaPlug, FaCopy, FaRocket, FaAddressBook, FaUserFriends } from "react-icons/fa";
import "./index.css";

function DropDownMenu() {
    const { pathname } = useLocation();
    let courseNumber = pathname.split("/").at(-2)!;
    const linksDropDown =
        [
            { label: "Home", icon: <FaHome /> },
            { label: "Modules", icon: <FaNode /> },
            { label: "Piazza", icon: <FaPlug /> },
            { label: "Zoom", icon: <FaPlug /> },
            { label: "Assignments", icon: <FaCopy /> },
            { label: "Quizzes", icon: <FaRocket /> },
            { label: "Grades", icon: <FaAddressBook /> },
            { label: "People", icon: <FaUserFriends /> },
        ]
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }
    return (
        <div className="col-1">
            <Menu right customBurgerIcon={<FaArrowDown color="white" />} className="wd-drop-down float-end"
                isOpen={isOpen}
                onOpen={handleIsOpen}
                onClose={handleIsOpen}>

                {linksDropDown.map((link, index) => (
                    <Link onClick={closeSideBar} className="list-item" to={`/Kanbas/Courses/${courseNumber}/${link.label}`}> <span>{link.icon} {link.label}</span> </Link>
                ))}
            </Menu>
        </div>
    );
}

export default DropDownMenu;