export const fetchProducts = (cate, feat, plat, page, search, sort) => {
	return (dispatch) => {
		dispatch(fetchProductsBegin());
		let sortDetail = sort.split(" ");
		let url = `http://localhost:3001/products?_page=${page}&_limit=12&_sort=${sortDetail[0]}&_order=${sortDetail[1]}`;

		if (cate.length > 0) {
			for (let i = 0; i < cate.length; i++) {
				url += `&category_like=${cate[i]}`;
			}
		}
		if (feat.length > 0) {
			for (let i = 0; i < feat.length; i++) {
				url += `&features_like=${feat[i]}`;
			}
		}
		if (plat.length > 0) {
			for (let i = 0; i < plat.length; i++) {
				url += `&platform_like=${plat[i]}`;
			}
		}
		if (search) {
			url += `&q=${search}`;
		}

		let urlForPages = url.replace(`_page=${page}&_limit=12`, "");

		Promise.all([
			fetch(url).then((res) => res.json()),
			fetch(urlForPages).then((res) => res.json()),
		])
			.then((allResults) => {
				dispatch(fetchProductsSuccess(allResults[0]));
				dispatch(setNumOfPages(Math.ceil(allResults[1].length / 12)));
			})
			.catch((error) => {
				dispatch(fetchProductsFailure(error.toString()));
			});
	};
};

export const fetchProductsBegin = () => {
	return {
		type: "FETCH_PRODUCTS_BEGIN",
	};
};

export const fetchProductsSuccess = (value) => {
	return {
		type: "FETCH_PRODUCTS_SUCCESS",
		payload: value,
	};
};

export const fetchProductsFailure = (value) => {
	return {
		type: "FETCH_PRODUCTS_FAILURE",
		payload: value,
	};
};

export const setSort = (value) => {
	return {
		type: "SET_SORT",
		payload: value,
	};
};

export const setNumOfPages = (value) => {
	return {
		type: "SET_NUM_OF_PAGES",
		payload: value,
	};
};

export const setPage = (value) => {
	return {
		type: "SET_PAGE",
		payload: value,
	};
};
