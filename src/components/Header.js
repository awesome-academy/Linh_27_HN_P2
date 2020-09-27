import React from "react";
import Navbar from "./header/Navbar";
import Menu from "./header/Menu";

function Header(props) {
	return (
		<header>
			<Navbar />
			<Menu title={props.title} />
		</header>
	);
}

export default Header;
