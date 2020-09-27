export const fetchQuickSearch = (search) => {
	return (dispatch) => {
		dispatch(fetchQuickSearchBegin());
		let url = `http://localhost:3001/products?name_like=${search}&_limit=4`;

		fetch(url)
			.then((res) => res.json())
			.then((result) => {
				dispatch(fetchQuickSearchSuccess(result));
			})
			.catch((error) => {
				dispatch(fetchQuickSearchFailure(error.toString()));
			});
	};
};

export const setSearch = (value) => {
	return {
		type: "SET_SEARCH",
		payload: value,
	};
};

export const fetchQuickSearchBegin = () => {
	return {
		type: "FETCH_QUICK_SEARCH_BEGIN",
	};
};

export const fetchQuickSearchSuccess = (value) => {
	return {
		type: "FETCH_QUICK_SEARCH_SUCCESS",
		payload: value,
	};
};

export const fetchQuickSearchFailure = (value) => {
	return {
		type: "FETCH_QUICK_SEARCH_FAILURE",
		payload: value,
	};
};
