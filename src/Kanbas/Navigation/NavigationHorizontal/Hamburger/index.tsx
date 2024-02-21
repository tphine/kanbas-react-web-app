import { useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="col-1">
            <Menu customBurgerIcon={<FaBars />} className="menu-box"
                isOpen={isOpen}
                onOpen={handleIsOpen}
                onClose={handleIsOpen}>

                {links.map((link, index) => (
                    <Link onClick={closeSideBar} className="hamburger-menu-list-item" to={`/Kanbas/${link.label}`}> <span>{link.icon} {link.label}</span> </Link>
                ))}
            </Menu>
        </div>
    );
}

export default HamburgerNav;