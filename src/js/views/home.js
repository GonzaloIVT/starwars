import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Personajes</h1>
			<div className="container horizontal-scrollable">
				<div className="row flex-nowrap">
					<ul className="list-group list-group-horizontal">
						{store.people.map((persona, posicion) => {
							return (
								<li className="list-group-item" key={posicion}>
									{" "}
									Usuario ID {persona.uid} de nombre {persona.name}{" "}
									<Link to={"/persona/" + persona.uid}>
										<button className="btn btn-info"> Ir a perfil</button>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>

			<h1>Planetas</h1>
			<div className="planeta mx-6 justify-content-center">
				<div className="container">
					<div
						className="row flex-nowrap
				">
						<ul className="list-group list-group-horizontal">
							{store.planets.map((planeta, posicion) => {
								return (
									<li className="list-group-item" key={posicion}>
										{" "}
										Usuario ID {planeta.uid} de nombre {planeta.name}{" "}
										<Link to={"/planeta/" + planeta.uid}>
											<button className="btn btn-info"> Ir a perfil</button>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>

			<div>
				<h1>Vehiculos</h1>
				<div className="container horizontal-scrollable">
					<div
						className="row flex-nowrap
				">
						<ul className="list-group list-group-horizontal">
							{store.vehicles.map((vehiculo, posicion) => {
								return (
									<li className="list-group-item" key={posicion}>
										{" "}
										Usuario ID {vehiculo.uid} de nombre {vehiculo.name}{" "}
										<Link to={"/vehiculo/" + posicion}>
											<button className="btn btn-info"> Ir a perfil</button>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>

			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
};
