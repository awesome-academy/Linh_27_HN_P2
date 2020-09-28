import { combineReducers } from "redux";
import discoverProductsReducer from "./discoverProducts";

const rootReducer = combineReducers({
	discoverProducts: discoverProductsReducer,
});

export default rootReducer;
