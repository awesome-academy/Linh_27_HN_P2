const initialState = {
	loading: false,
	error: null,
	products: [],
	numOfPages: "",
	page: 1,
	sort: "id desc",
};

const browserProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_PRODUCTS_BEGIN": {
			return {
				...state,
				loading: true,
				error: null,
			};
		}
		case "FETCH_PRODUCTS_SUCCESS": {
			return {
				...state,
				loading: false,
				products: action.payload,
			};
		}
		case "FETCH_PRODUCTS_FAILURE": {
			return {
				...state,
				loading: false,
				error: action.payload,
				products: [],
			};
		}
		case "SET_SORT": {
			return {
				...state,
				sort: action.payload,
			};
		}
		case "SET_NUM_OF_PAGES": {
			return {
				...state,
				numOfPages: action.payload,
			};
		}
		case "SET_PAGE": {
			return {
				...state,
				page: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default browserProductsReducer;
