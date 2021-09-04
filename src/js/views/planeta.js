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
			<h1>Estamos en detalle de {store.detailplanets.name}</h1>
			<span>diametro: {store.detailplanets.diameter}</span>
			<span>rotacion: {store.detailplanets.rotation_period}</span>
			<span>periodo orbita: {store.detailplanets.orbital_period}</span>
			<span>gravedad: {store.detailplanets.gravity}</span>
			<span>poblacion: {store.detailplanets.population}</span>
			<span>clima: {store.detailplanets.climate}</span>
			<span>otros: {store.detailplanets.terrain}</span>
			<span>otros2: {store.detailplanets.surface_water}</span>

			<Link to="/">
				<button>Go back</button>
			</Link>
		</>
	);
};

Planeta.propTypes = {
	match: PropTypes.object
};
