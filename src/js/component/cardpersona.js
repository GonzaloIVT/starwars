import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Cardpersona = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card justify-content-center mx-auto" style={{ width: "18rem" }}>
			<figure className="figure">
				<img src="" className="figure-img img-fluid rounded" alt="..." />
				<figcaption className="figure-caption" />
			</figure>
			<div className="card-body">
				<a href="#" className="btn btn-success">
					Like
				</a>
				<a href="#" className="btn btn-danger">
					Dislike
				</a>
			</div>
		</div>
	);
};
