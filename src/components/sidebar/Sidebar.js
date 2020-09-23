import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSidebar } from "../../action/sidebar";
import { LinearProgress } from "@material-ui/core";
import SidebarList from "./SidebarList";

function Sidebar() {
	const loading = useSelector((state) => state.sidebar.loading);
	const error = useSelector((state) => state.sidebar.error);
	const categories = useSelector((state) => state.sidebar.categories);
	const features = useSelector((state) => state.sidebar.features);
	const platforms = useSelector((state) => state.sidebar.platforms);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSidebar());
	}, [dispatch]);

	if (error) {
		return <div className="error">{error}</div>;
	} else if (loading) {
		return <LinearProgress className="loadingbar" />;
	} else {
		return (
			<div className="sidebar">
				<SidebarList items={categories} title="Categories" />
				<SidebarList items={features} title="Features" />
				<SidebarList items={platforms} title="Platforms" />
			</div>
		);
	}
}

export default Sidebar;
