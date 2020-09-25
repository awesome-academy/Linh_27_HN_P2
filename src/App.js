import React from "react";
import "./sass/style.sass"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="App">
				<Switch>
					<Route path="/login">
						<h1>Login</h1>
					</Route>
					<Route path="/signup">
						<h1>Signup</h1>
					</Route>
					<Route path="/checkout">
						<h1>Checkout</h1>
					</Route>
					<Route path="/browse">
						<BrowsePage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
