import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import loadFavourites from "../store/flux";
import "../../styles/home.scss";

export const CardPlaneta = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.planets.map((planeta, posicion) => {
				return (
					<div className="container row mx-1 justify-content-center" key={posicion}>
						{" "}
						<div className="card mx-1">
							<div className="row col-1">
								<span> {planeta.uid} </span>
							</div>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/2/23/DesertPlanet.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{planeta.name}</h5>
								<div className="row">
									<div className="col col-6">
										<Link to={"/planeta/" + planeta.uid}>
											<button className="btn btn-secondary"> Saber mas</button>
										</Link>
									</div>
									<div className="col col-6">
										<a href="#" className="btn btn-warning">
											<i className="fab fa-gratipay" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
