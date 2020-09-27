const initialState = {
	search: "",
	quickSearchLoading: false,
	quickSearchError: null,
	quickSearchResult: [],
};

const navbarReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_SEARCH": {
			return {
				...state,
				search: action.payload,
			};
		}
		case "FETCH_QUICK_SEARCH_BEGIN": {
			return {
				...state,
				quickSearchLoading: true,
				quickSearchError: null,
			};
		}
		case "FETCH_QUICK_SEARCH_SUCCESS": {
			return {
				...state,
				quickSearchLoading: false,
				quickSearchResult: action.payload,
			};
		}
		case "FETCH_QUICK_SEARCH_FAILURE": {
			return {
				...state,
				quickSearchLoading: false,
				quickSearchError: action.payload,
				quickSearchResult: [],
			}
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default navbarReducer;
