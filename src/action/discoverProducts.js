export const fetchDiscoverProducts = () => {
	return (dispatch) => {
		dispatch(fetchDiscoverProductsBegin());
		let newPd = `http://localhost:3001/products?_limit=5&_sort=id&_order=desc`;
		let freePd = `http://localhost:3001/products?_limit=1&price=0&_sort=id&_order=desc`;
		let topSellerPd = `http://localhost:3001/products?_limit=5&_sort=sold,id&_order=desc,desc`;
		let hotPd = `http://localhost:3001/products?_limit=1&_sort=rating,id&_order=desc,desc`;
		let topRatedPd = `http://localhost:3001/products?_limit=5&_sort=rating,id&_order=desc,desc`;

		Promise.all([
			fetch(newPd).then((res) => res.json()),
			fetch(freePd).then((res) => res.json()),
			fetch(topSellerPd).then((res) => res.json()),
			fetch(hotPd).then((res) => res.json()),
			fetch(topRatedPd).then((res) => res.json()),
		])
			.then((allResults) => {
				dispatch(fetchDiscoverProductsSuccess(allResults));
			})
			.catch((error) => {
				dispatch(fetchDiscoverProductsFailure(error.toString()));
			});
	};
};

export const fetchDiscoverProductsBegin = () => {
	return {
		type: "FETCH_DISCOVER_PRODUCTS_BEGIN",
	};
};

export const fetchDiscoverProductsSuccess = (array) => {
	return {
		type: "FETCH_DISCOVER_PRODUCTS_SUCCESS",
		newProducts: array[0],
		freeProduct: array[1],
		topSellerProducts: array[2],
		hotProduct: array[3],
		topRatedProducts: array[4],
	};
};

export const fetchDiscoverProductsFailure = (value) => {
	return {
		type: "FETCH_DISCOVER_PRODUCTS_FAILURE",
		error: value,
	};
};
