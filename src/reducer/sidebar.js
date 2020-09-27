const initialState = {
	loading: false,
	error: null,
	categories: [],
	features: [],
	platforms: [],
	cate: [],
	feat: [],
	plat: [],
};

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_SIDEBAR_BEGIN": {
			return {
				...state,
				loading: true,
				error: null,
			};
		}
		case "FETCH_SIDEBAR_SUCCESS": {
			return {
				...state,
				loading: false,
				categories: action.categories,
				features: action.features,
				platforms: action.platforms,
			};
		}
		case "FETCH_SIDEBAR_FAILURE": {
			return {
				...state,
				loading: false,
				error: action.error,
				categories: [],
				features: [],
				platforms: [],
			};
		}
		case "SET_CATE": {
			return {
				...state,
				cate: action.payload,
			};
		}
		case "SET_FEAT": {
			return {
				...state,
				feat: action.payload,
			};
		}
		case "SET_PLAT": {
			return {
				...state,
				plat: action.payload,
			};
		}
		case "RESET_FILTER": {
			return {
				...state,
				cate: [],
				feat: [],
				plat: [],
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default sidebarReducer;
