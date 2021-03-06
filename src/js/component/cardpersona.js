import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import loadFavourites from "../store/flux";
import "../../styles/home.scss";

export const CardPersona = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.people.map((persona, posicion) => {
				return (
					<div className="container row mx-1 justify-content-center" key={posicion}>
						{" "}
						<div className="card mx-1">
							<div className="row col-1">
								<span> {persona.uid} </span>
							</div>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Retrato_del_Maestro_Yoda.jpg/245px-Retrato_del_Maestro_Yoda.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{persona.name}</h5>
								<div className="row">
									<div className="col col-6">
										<Link to={"/persona/" + persona.uid}>
											<button className="btn btn-secondary"> Ir a perfil</button>
										</Link>
									</div>
									<div className="col col-6">
										<button
											onClick={() => {
												actions.loadFavourites(persona.name);
												console.log(store.favourites);
											}}>
											<i className="fab fa-gratipay" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

/*
		
			return (
		<div classNameName="text-center mt-5">
			<h1>Personajes</h1>
			<div classNameName="container horizontal-scrollable">
				<div classNameName="row flex-nowrap">
					<ul classNameName="list-group list-group-horizontal">
						{store.people.map((persona, posicion) => {
							return (
								<li classNameName="list-group-item" key={posicion}>
									{" "}
									Usuario ID {persona.uid} de nombre {persona.name}{" "}
									<Link to={"/persona/" + persona.uid}>
										<button classNameName="btn btn-info"> Ir a perfil</button>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</div>

			<h1>Planetas</h1>
			<div classNameName="planeta mx-6 justify-content-center">
				<div classNameName="container">
					<div
						classNameName="row flex-nowrap
				">
						<ul classNameName="list-group list-group-horizontal">
							{store.planets.map((planeta, posicion) => {
								return (
									<li classNameName="list-group-item" key={posicion}>
										{" "}
										Usuario ID {planeta.uid} de nombre {planeta.name}{" "}
										<Link to={"/planeta/" + planeta.uid}>
											<button classNameName="btn btn-info"> Ir a perfil</button>
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
				<div classNameName="container horizontal-scrollable">
					<div
						classNameName="row flex-nowrap
				">
						<ul classNameName="list-group list-group-horizontal">
							{store.vehicles.map((vehiculo, posicion) => {
								return (
									<li classNameName="list-group-item" key={posicion}>
										{" "}
										Usuario ID {vehiculo.uid} de nombre {vehiculo.name}{" "}
										<Link to={"/vehiculo/" + posicion}>
											<button classNameName="btn btn-info"> Ir a perfil</button>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>

		
		
		
		
		
		*/
