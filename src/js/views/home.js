import React, { useState, useEffect, useContext } from "react";
import { CardPersona } from "../component/cardpersona";
import { Link } from "react-router-dom";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => (
	<>
		<div className="container-fluid text-center mt-5">
			<h1>Personas</h1>
			<div className="horizontal">
				<div className="row flex-nowrap col-2 mx-5">
					<CardPersona />
				</div>
			</div>
		</div>
	</>
);
