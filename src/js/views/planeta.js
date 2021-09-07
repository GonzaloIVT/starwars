import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Cardpersona } from "../component/cardpersona";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planeta = props => {
	const { store, actions } = useContext(Context);
	const { idplaneta } = useParams();

	useEffect(() => {
		actions.loadDetailPlanets(idplaneta);
	});

	return (
		<>
			<div className="container-fluid text-center mt-5">
				<h1>Planeta: {store.detailplanets.name}</h1>
				<div className="card varios text-dark bg-warning mb-3">
					<div className="card-header">Caracteristicas</div>
					<ul className="list-group list-group-flush bg-warning">
						<li className="list-group-item">Diametro: {store.detailplanets.diameter} m2 </li>
						<li className="list-group-item">Rotacion: {store.detailplanets.rotation_period} kg </li>
						<li className="list-group-item">Orbita: {store.detailplanets.orbital_period}</li>
						<li className="list-group-item">Gravedad: {store.detailplanets.gravityor}</li>
						<li className="list-group-item">Poblacion: {store.detailplanets.population}</li>
						<li className="list-group-item">Clima: {store.detailplanets.climate}</li>
						<li className="list-group-item">Terrain: {store.detailplanets.terrain}</li>
						<li className="list-group-item">Atmosfera: {store.detailplanets.surface_water}</li>
					</ul>
				</div>
				<Link to="/">
					<button>Go back</button>
				</Link>
			</div>
		</>
	);
};

Planeta.propTypes = {
	match: PropTypes.object
};
