import React from "react";
import { Cardpersona } from "../component/cardpersona";
import { Link } from "react-router-dom";

export const Persona = () => {
	return (
		<>
			<h1>ESTAMOS EN DETALLE DE PERSONALES (VISTA PERSONA)</h1>
			<div className="row">
				<Cardpersona />
				<Cardpersona />
				<Cardpersona />
			</div>
			<Link to="/">
				<button>Go back</button>
			</Link>
		</>
	);
};
