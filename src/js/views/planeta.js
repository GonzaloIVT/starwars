import React, { useState, useEffect, useContext } from "react";
import { Cardpersona } from "../component/cardpersona";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planeta = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<h1>
				Estamos en detalle de
				{store.planets[params.idplaneta - 1].name}
			</h1>
			<Cardpersona />
			<Link to="/">
				<button>Go back</button>
			</Link>
		</>
	);
};
