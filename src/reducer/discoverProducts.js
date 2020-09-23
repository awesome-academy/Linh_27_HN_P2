const initialState = {
	loading: false,
	error: null,
	newProducts: [],
	freeProduct: "",
	topSellerProducts: [],
	hotProduct: "",
	topRatedProducts: [],
};

const discoverProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_DISCOVER_PRODUCTS_BEGIN": {
			return {
				...state,
				loading: true,
				error: null,
			};
		}
		case "FETCH_DISCOVER_PRODUCTS_SUCCESS": {
			return {
				...state,
				loading: false,
				newProducts: action.newProducts,
				freeProduct: action.freeProduct,
				topSellerProducts: action.topSellerProducts,
				hotProduct: action.hotProduct,
				topRatedProducts: action.topRatedProducts,
			};
		}
		case "FETCH_DISCOVER_PRODUCTS_FAILURE": {
			return {
				...state,
				loading: false,
				error: action.error,
				newProducts: [],
				freeProduct: "",
				topSellerProducts: [],
				hotProduct: "",
				topRatedProducts: [],
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default discoverProductsReducer;
