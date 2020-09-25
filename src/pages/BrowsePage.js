import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setPage, setSort } from "../action/browseProducts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/product/ProductList";
import { LinearProgress } from "@material-ui/core";
import Sidebar from "../components/sidebar/Sidebar";
import { resetFilter } from "../action/sidebar";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import Pagination from "@material-ui/lab/Pagination";

function BrowsePage() {
	const loading = useSelector((state) => state.browseProducts.loading);
	const error = useSelector((state) => state.browseProducts.error);
	const products = useSelector((state) => state.browseProducts.products);
	const cate = useSelector((state) => state.sidebar.cate);
	const feat = useSelector((state) => state.sidebar.feat);
	const plat = useSelector((state) => state.sidebar.plat);
	const page = useSelector((state) => state.browseProducts.page);
	const search = useSelector((state) => state.navbar.search);
	const sort = useSelector((state) => state.browseProducts.sort);
	const numOfPages = useSelector((state) => state.browseProducts.numOfPages);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts(cate, feat, plat, page, search, sort));
	}, [dispatch, cate, feat, plat, page, search, sort]);

	const handlePageChange = (value) => {
		dispatch(setPage(value));
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	return (
		<div className="BrowsePage">
			<Header />
			<main className="container">
				<div className="products">
					<div className="products__head">
						<label>Sort by:</label>
						<select
							value={sort}
							onChange={(value) => {
								dispatch(setSort(value.target.value));
								dispatch(setPage(1))
							}}
						>
							<option value="id desc">Newest</option>
							<option value="id asc">Oldest</option>
							<option value="name asc">A - Z</option>
							<option value="name desc">Z - A</option>
							<option value="price asc">Price Asc</option>
							<option value="price desc">Price Desc</option>
							<option value="rating desc">Rating</option>
						</select>
					</div>
					{error ? (
						<div className="error">{error}</div>
					) : loading ? (
						<LinearProgress className="loadingbar" />
					) : products.length === 0 ? (
						<div className="noResult">
							<SentimentVeryDissatisfiedIcon />
							<p>No results found</p>
							<span>
								Unfortunately I could not find any results matching your search.
							</span>
						</div>
					) : (
						<div className="products__foot">
							<ProductList products={products} />
							<Pagination
								className="pagination"
								count={parseInt(numOfPages)}
								color="primary"
								defaultPage={page}
								shape="rounded"
								onChange={(event, value) => handlePageChange(value)}
							/>
						</div>
					)}
				</div>
				<div className="nav">
					<div className="nav__head">
						<div>Filter</div>
						{cate.length > 0 || feat.length > 0 || plat.length > 0 ? (
							<div
								className="nav__head-reset"
								onClick={() => dispatch(resetFilter())}
							>
								Reset
							</div>
						) : (
							""
						)}
					</div>
					<Sidebar />
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default BrowsePage;
