import React, { useState, useEffect, useContext } from "react";
import { CardPersona } from "../component/cardpersona";
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
	</>
);
