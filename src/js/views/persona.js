import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Cardpersona } from "../component/cardpersona";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Persona = props => {
	const { store, actions } = useContext(Context);
	const { idpersona } = useParams();

	useEffect(() => {
		actions.loadDetailPeople(idpersona);
	});

	return (
		<>
			<h1>Estamos en detalle de {store.detailpeople.name}</h1>
			<span>altura: {store.detailpeople.height}</span>
			<span>peso: {store.detailpeople.mass}</span>
			<span>color del pelo: {store.detailpeople.hair_color}</span>
			<span>color de piel: {store.detailpeople.skin_color}</span>
			<span>color de ojos: {store.detailpeople.eye_color}</span>
			<span>año de nacimiento: {store.detailpeople.birth_year}</span>
			<span>genero: {store.detailpeople.gender}</span>

			<Link to="/">
				<button>Go back</button>
			</Link>
		</>
	);
};

Persona.propTypes = {
	match: PropTypes.object
};

/*<div className="row">
				<Cardpersona />
				<Cardpersona />
				<Cardpersona />
			</div>
			
			<h1>
				Estamos en detalle de
				{store.people[params.idpersona - 1].name}
			</h1>
			



			
			*/
