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
			<h1>Estamos en detalle de {store.detailvehicles.name}</h1>
			<span>modelo: {store.detailvehicles.model}</span>
			<span>tipo: {store.detailvehicles.vehicle_class}</span>
			<span>manufactura: {store.detailvehicles.manufacturer}</span>
			<span>valor: {store.detailvehicles.cost_in_credits}</span>
			<span>largo: {store.detailvehicles.length}</span>
			<span>crew: {store.detailvehicles.crew}</span>
			<span>pasajeros: {store.detailvehicles.passengers}</span>
			<span>velocidad: {store.detailvehicles.max_atmosphering_speed}</span>
			<span>capacidad de carga: {store.detailvehicles.cargo_capacity}</span>
			<span>consumables: {store.detailvehicles.consumables}</span>

			<Link to="/">
				<button>Go back</button>
			</Link>
		</>
	);
};

Vehiculo.propTypes = {
	match: PropTypes.object
};
