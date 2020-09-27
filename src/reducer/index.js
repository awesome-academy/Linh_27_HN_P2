import { combineReducers } from "redux";
import browserProductsReducer from "./browseProducts";
import discoverProductsReducer from "./discoverProducts";
import navbarReducer from "./navbar";
import productDetailReducer from "./productDetail";
import sidebarReducer from "./sidebar";
import authReducer from "./auth"

const rootReducer = combineReducers({
	discoverProducts: discoverProductsReducer,
	sidebar: sidebarReducer,
	browseProducts: browserProductsReducer,
	navbar: navbarReducer,
	productDetail: productDetailReducer,
	auth: authReducer,
});

export default rootReducer;
