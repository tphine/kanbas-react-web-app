import './index.css';
import HamburgerNav from './Hamburger';
import DropDownMenu from './DropDown';
import { useLocation, useParams } from 'react-router-dom';

function NavigationHorizontal() {
    const { pathname } = useLocation();
    let pageName = pathname.split("/").at(-1)!;
    let courseNumber = pathname.split("/").at(-2)!;
    return (
        <div className="d-md-none" style={{ overflow: "hidden" }}>
            <div className="wd-navbar navbar flex">
                <HamburgerNav />
                <div className="col">
                    <p>
                        {courseNumber}
                        <br />
                        {pageName}
                    </p>
                </div>
                <DropDownMenu />
            </div >
        </div >
    );
}

export default NavigationHorizontal;