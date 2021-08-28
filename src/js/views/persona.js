import React, { useState, useEffect, useContext } from "react";
import { Cardpersona } from "../component/cardpersona";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Persona = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<h1>
				Estamos en detalle de
				{store.people[params.idpersona - 1].name}
			</h1>
			<Cardpersona />

			<Link to="/">
				<button>Go back</button>
			</Link>
		</>
	);
};

/*<div className="row">
				<Cardpersona />
				<Cardpersona />
				<Cardpersona />
			</div>*/
