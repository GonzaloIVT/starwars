import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardFav = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			{store.favourites.map((favorito, position) => {
				return (
					<div key={position}>
						<span>{favorito} </span>{" "}
					</div>
				);
			})}
		</>
	);
};
