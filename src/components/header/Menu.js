import React, { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MyLink from "../MyLink";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuickSearch, setSearch } from "../../action/navbar";
import { LinearProgress } from "@material-ui/core";

function Menu() {
	const search = useSelector((state) => state.navbar.search);
	const quickSearchLoading = useSelector(
		(state) => state.navbar.quickSearchLoading
	);
	const quickSearchError = useSelector(
		(state) => state.navbar.quickSearchError
	);
	const quickSearchResult = useSelector(
		(state) => state.navbar.quickSearchResult
	);
	const dispatch = useDispatch();
	const location = useLocation().pathname;

	useEffect(() => {
		if (search) {
			dispatch(fetchQuickSearch(search));
		}
    }, [dispatch, search]);
    
	return (
		<div className="menu container">
			<div className="menu__left">
				<MyLink to="/">Discover</MyLink>
				<MyLink to="/browse">Browse</MyLink>
			</div>
			<div className="menu__right">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
				>
					<button type="submit">
						<SearchIcon />
					</button>
					<input
						type="text"
						placeholder="Search"
						value={search}
						onChange={(value) => {
							dispatch(setSearch(value.target.value));
						}}
					/>
				</form>
				{search && location !== "/browse" ? (
					<div className="menu__right-result">
						{quickSearchError ? (
							<div className="error">{quickSearchError}</div>
						) : quickSearchLoading ? (
							<LinearProgress className="loadingbar" />
						) : (
							<div>
								{quickSearchResult.map((value, key) => (
									<Link key={key} to="/">
										{value.name}
									</Link>
								))}
								<Link to="/browse">Search all games</Link>
							</div>
						)}
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default Menu;
