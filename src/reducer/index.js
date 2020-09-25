import { combineReducers } from "redux";
import browserProductsReducer from "./browseProducts";
import discoverProductsReducer from "./discoverProducts";
import navbarReducer from "./navbar";
import sidebarReducer from "./sidebar";

const rootReducer = combineReducers({
	discoverProducts: discoverProductsReducer,
	sidebar: sidebarReducer,
	browseProducts: browserProductsReducer,
	navbar: navbarReducer,
});

export default rootReducer;
