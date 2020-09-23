import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login">
						<h1>Login</h1>
					</Route>
					<Route path="/">
						<h1>Homepage</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
