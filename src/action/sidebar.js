export const fetchSidebar = () => {
	return (dispatch) => {
		dispatch(fetchSidebarBegin());
		let cate = `http://localhost:3001/category?_sort=name&_order=asc`;
		let feat = `http://localhost:3001/features?_sort=name&_order=asc`;
		let plat = `http://localhost:3001/platform?_sort=name&_order=asc`;

		Promise.all([
			fetch(cate).then((res) => res.json()),
			fetch(feat).then((res) => res.json()),
			fetch(plat).then((res) => res.json()),
		])
			.then((allResults) => {
				dispatch(fetchSidebarSuccess(allResults));
			})
			.catch((error) => {
				dispatch(fetchSidebarFailure(error.toString()));
			});
	};
};

export const fetchSidebarBegin = () => {
	return {
		type: "FETCH_SIDEBAR_BEGIN",
	};
};

export const fetchSidebarSuccess = (array) => {
	return {
		type: "FETCH_SIDEBAR_SUCCESS",
		categories: array[0],
		features: array[1],
		platforms: array[2],
	};
};

export const fetchSidebarFailure = (value) => {
	return {
		type: "FETCH_SIDEBAR_FAILURE",
		error: value,
	};
};

export const setCate = (value) => {
	return {
		type: "SET_CATE",
		payload: value,
	};
};

export const setFeat = (value) => {
	return {
		type: "SET_FEAT",
		payload: value,
	};
};

export const setPlat = (value) => {
	return {
		type: "SET_PLAT",
		payload: value,
	};
};

export const resetFilter = () => {
	return {
		type: "RESET_FILTER",
	};
};
