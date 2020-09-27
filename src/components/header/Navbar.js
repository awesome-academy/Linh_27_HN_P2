import React from "react";
import { Link } from "react-router-dom";
import MyLink from "../MyLink";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="navbar__left">
				<Link to="/">
					<img
						className="navbar__left-logo"
						src="https://i.pinimg.com/originals/2b/7f/d8/2b7fd8a7df064d2303ebe4a42740a5a5.png"
						alt="error"
					/>
				</Link>
				<div className="navbar__left-links">
					<MyLink to="/" className="navbar__left-Mylinks--active">
						Store
					</MyLink>
					<MyLink to="/news">News</MyLink>
					<MyLink to="/faq">Faq</MyLink>
					<MyLink to="/help">Help</MyLink>
				</div>
			</div>
			<div className="navbar__right">
				<div className="navbar__right-signin">
					<Link to="/login">
						<PersonAddIcon />
						<p>Sign in</p>
					</Link>
				</div>
				<div className="navbar__right-download">
					<a href="/">Get epic games</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
