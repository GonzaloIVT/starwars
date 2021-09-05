import React, { useState, useEffect, useContext } from "react";
import { CardPersona } from "../component/cardpersona";
import { CardPlaneta } from "../component/cardplaneta";
import { CardVehiculo } from "../component/cardvehiculo";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => (
	<>
		<div className="container-fluid text-center mt-5">
			<h1>Personajes</h1>
			<div className="horizontal">
				<div className="row flex-nowrap col-3 mx-3">
					<CardPersona />
				</div>
			</div>
		</div>

		<div className="container-fluid text-center mt-5">
			<h1>Planetas</h1>
			<div className="horizontal">
				<div className="row flex-nowrap col-3 mx-3">
					<CardPlaneta />
				</div>
			</div>
		</div>

		<div className="container-fluid text-center mt-5">
			<h1>Vehiculos</h1>
			<div className="horizontal">
				<div className="row flex-nowrap col-3 mx-3">
					<CardVehiculo />
				</div>
			</div>
		</div>
	</>
);
