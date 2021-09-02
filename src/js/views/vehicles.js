import React, { useState, useEffect, useContext } from "react";
//import { Cardpersona } from "../component/cardpersona";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehiculo = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
			<h1>
				Estamos en detalle de
				{store.vehicles[params.idvehicles - 1].name}
			</h1>

			<Link to="/">
				<button>Go back</button>
			</Link>
		</>
	);
};
