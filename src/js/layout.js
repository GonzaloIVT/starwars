import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Persona } from "./views/persona";
import { Vehiculo } from "./views/vehiculo";
import { Planeta } from "./views/planeta";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardPersona } from "./component/cardpersona";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route exact path="/persona/:idpersona">
							<Persona />
						</Route>
						<Route exact path="/planeta/:idplaneta">
							<Planeta />
						</Route>
						<Route exact path="/vehiculo/:idvehiculo">
							<Vehiculo />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

/*<Route exact path="/persona">
							<Persona />
						</Route>*/

/*<Route exact path="/persona/:idpersona">
							<Persona />
							
								<Route exact path="/persona">
							<Persona />
							
							*/
