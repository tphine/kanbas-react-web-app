import KanbasNavigation from "./Navigation";
import NavigationHorizontal from "./Navigation/NavigationHorizontal";
import routes from "./routes";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
    return (
        <Provider store={store}>
            <div className="d-flex" style={{ overflow: "hidden" }}>
                <KanbasNavigation />
                <div style={{ width: "100%" }}>
                    <NavigationHorizontal />
                    {routes}
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;