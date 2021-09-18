import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import loadFavourites from "../store/flux";
import "../../styles/home.scss";

export const CardVehiculo = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.vehicles.map((vehiculo, posicion) => {
				return (
					<div className="container row mx-1 justify-content-center" key={posicion}>
						{" "}
						<div className="card mx-1">
							<div className="row col-1" />
							<img
								src="https://elcomercio.pe/resizer/_jenrsQckC0AT7Cn3_xrbfAaj8A=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VDBO46ZDFJANRILHPBPBKBULAA.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{vehiculo.name}</h5>
								<div className="row">
									<div className="col col-6">
										<Link to={"/vehiculo/" + vehiculo.uid}>
											<button className="btn btn-secondary"> Saber mas</button>
										</Link>
									</div>
									<div className="col col-6">
										<button
											onClick={() => {
												actions.loadFavourites(vehiculo.name);
												console.log(store.favourites);
											}}>
											<i className="fab fa-gratipay" />
										</button>
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
