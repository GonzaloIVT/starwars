import React from "react";
import { Link } from "react-router-dom";
import { CardFav } from "./listafavoritos";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="row col-2">
				<Link to="/">
					<div className="row col-8">
						<img src="https://compass-ssl.xboxlive.com/assets/67/1c/671c739e-386a-4df3-9774-30e9e46eb53a.jpg?n=MSXC-StarWarsTitle-HeroAndImageCard-large-l-794x447-16x9-01.jpg" />
					</div>
				</Link>
			</div>

			<div className="row col-6 justify-content-center">
				<h1 id="titulo">STAR WARS</h1>
			</div>
			<div className="row col-2 ml-auto">
				<CardFav />
			</div>
		</nav>
	);
};
