import React from "react";
import "./sass/style.sass"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BrowsePage from "./pages/BrowsePage";
import ScrollToTop from "./components/ScrollToTop";
import ProductDetail from "./pages/ProductDetail";

function App() {
	return (
		<Router>
			<ScrollToTop />
			<div className="App">
				<Switch>
					<Route exact path="/login">
						<h1>Login</h1>
					</Route>
					<Route exact path="/signup">
						<h1>Signup</h1>
					</Route>
					<Route exact path="/checkout">
						<h1>Checkout</h1>
					</Route>
					<Route exact path="/browse">
						<BrowsePage />
					</Route>
					<Route exact path="/products/:productId">
						<ProductDetail />
					</Route>
					<Route exact path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
