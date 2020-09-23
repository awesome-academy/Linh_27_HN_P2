import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckIcon from "@material-ui/icons/Check";
import { useDispatch, useSelector } from "react-redux";
import { setCate, setFeat, setPlat } from "../../action/sidebar";
import { setPage } from "../../action/browseProducts";

function SidebarList(props) {
	const cate = useSelector((state) => state.sidebar.cate);
	const feat = useSelector((state) => state.sidebar.feat);
	const plat = useSelector((state) => state.sidebar.plat);
	const selectedItems = useSelector((state) =>
		props.title === "Categories"
			? state.sidebar.cate
			: props.title === "Features"
			? state.sidebar.feat
			: state.sidebar.plat
	);
	const [show, setShow] = useState(true);
	const dispatch = useDispatch();

	const selectItem = (value, array, func) => {
		if (!array.includes(value, 0)) {
			dispatch(func(array.concat(value)));
		} else {
			dispatch(
				func(
					array.filter((name) => {
						return name !== value;
					})
				)
			);
		}
		dispatch(setPage(1))
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="sidebar__list">
			<div
				className="sidebar__list-title"
				onClick={() => {
					setShow(show ? false : true);
				}}
			>
				<p>{props.title}</p>
				<ExpandMoreIcon className={show ? "rolate down" : "rolate up"} />
			</div>
			{show
				? props.items.map((value, key) => (
						<div
							className="sidebar__list-item"
							key={key}
							onClick={() =>
								selectItem(
									value.name,
									props.title === "Categories"
										? cate
										: props.title === "Features"
										? feat
										: plat,
									props.title === "Categories"
										? setCate
										: props.title === "Features"
										? setFeat
										: setPlat
								)
							}
						>
							<span
								className={
									selectedItems.includes(value.name, 0) ? "active" : ""
								}
							>
								{value.name}
							</span>
							{selectedItems.includes(value.name, 0) ? <CheckIcon /> : ""}
						</div>
				  ))
				: ""}
		</div>
	);
}

export default SidebarList;
