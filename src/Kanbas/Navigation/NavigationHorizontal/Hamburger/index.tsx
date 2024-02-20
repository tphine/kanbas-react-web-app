import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import links from "../../links";
import { slide as Menu } from "react-burger-menu";
import { FaBars } from "react-icons/fa";
import './index.css';

function HamburgerNav() {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }

    const closeSideBar = () => {
        setOpen(false)
    }
    return (
        <Menu width={'100%'} customBurgerIcon={<FaBars />}  className="menu-box"
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}>

            {links.map((link, index) => (
                <Link onClick={closeSideBar} className="hamburger-menu-list-item" to={`/Kanbas/${link.label}`}> <span>{link.icon} {link.label}</span> </Link>
            ))}
        </Menu>
    );
}

export default HamburgerNav;