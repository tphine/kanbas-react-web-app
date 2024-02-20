import KanbasNavigation from "./Navigation";
import NavigationHorizontal from "./Navigation/NavigationHorizontal";
import routes from "./routes";

function Kanbas() {
    return (
        <div className="d-flex">
            <KanbasNavigation />
            <div style={{ width: "100%" }}>
                <NavigationHorizontal />
                {routes}
            </div>

        </div>
    );
}
export default Kanbas;