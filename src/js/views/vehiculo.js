import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
//import { Cardpersona } from "../component/cardpersona";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehiculo = props => {
	const { store, actions } = useContext(Context);
	const { idvehiculo } = useParams();

	useEffect(() => {
		actions.loadDetailVehicles(idvehiculo);
	});

	return (
		<>
			<div className="container-fluid text-center mt-5">
				<h1>Vehiculo: {store.detailvehicles.name}</h1>
				<div className="card varios">
					<div className="card-header">Caracteristicas</div>
					<ul className="list-group list-group-flush bg-warning">
						<li className="list-group-item">Modelo: {store.detailvehicles.model} m2 </li>
						<li className="list-group-item">Clase: {store.detailvehicles.vehicle_class} kg </li>
						<li className="list-group-item">Manufactura: {store.detailvehicles.manufacturer}</li>
						<li className="list-group-item">Costo: {store.detailvehicles.cost_in_credits}</li>
						<li className="list-group-item">Largo: {store.detailvehicles.length}</li>
						<li className="list-group-item">Crew: {store.detailvehicles.crew}</li>
						<li className="list-group-item">Pasajeros: {store.detailvehicles.passengers}</li>
						<li className="list-group-item">Velocidad: {store.detailvehicles.max_atmosphering_speed}</li>
						<li className="list-group-item">Carga: {store.detailvehicles.cargo_capacity}</li>
						<li className="list-group-item">Combustible: {store.detailvehicles.consumables}</li>
					</ul>
				</div>

				<Link to="/">
					<button>Go back</button>
				</Link>
			</div>
		</>
	);
};

Vehiculo.propTypes = {
	match: PropTypes.object
};
