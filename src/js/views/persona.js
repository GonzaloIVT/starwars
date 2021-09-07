import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { CardPersona } from "../component/cardpersona";
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
			<div className="container-fluid text-center mt-5">
				<h1>PERSONAJE: {store.detailpeople.name}</h1>
				<div className="card varios">
					<div className="card-header">Caracteristicas</div>
					<ul className="list-group list-group-flush bg-warning">
						<li className="list-group-item">Altura: {store.detailpeople.height} cm </li>
						<li className="list-group-item">Peso: {store.detailpeople.mass} kg </li>
						<li className="list-group-item">color del pelo: {store.detailpeople.hair_color}</li>
						<li className="list-group-item">color de piel: {store.detailpeople.skin_color}</li>
						<li className="list-group-item">color de ojos: {store.detailpeople.eye_color}</li>
						<li className="list-group-item">año de nacimiento: {store.detailpeople.birth_year}</li>
						<li className="list-group-item">genero: {store.detailpeople.gender}</li>
					</ul>
				</div>{" "}
				<Link to="/">
					<button>Go back</button>
				</Link>
			</div>
		</>
	);
};

Persona.propTypes = {
	match: PropTypes.object
};
