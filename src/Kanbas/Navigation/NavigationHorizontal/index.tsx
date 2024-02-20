import './index.css';
import HamburgerNav from './Hamburger';

function NavigationHorizontal() {
    return (
        <div className="d-md-none">
            <div className="wd-navbar navbar">
                <HamburgerNav />
                <div className="col">
                    <p>
                        CS4550.30083.202430
                        <br />Modules
                    </p>
                </div>
                <div className="float-end">
                    Drop Down
                </div>
            </div >
        </div >
    );
}

export default NavigationHorizontal;