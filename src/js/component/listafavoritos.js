import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const CardFav = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);
	const { store, actions } = useContext(Context);

	return (
		<>
			<Dropdown isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret>Favoritos</DropdownToggle>
				<DropdownMenu>
					{store.favourites.map((favorito, position) => {
						return (
							<DropdownItem key={position}>
								<div className="row">
									<div className="col 10">{favorito}</div>
									<div className="col 2 justify-content-right">
										<i
											className="far fa-trash-alt"
											onClick={() => {
												actions.deleteFavourite(favorito);
											}}
										/>
									</div>
								</div>
							</DropdownItem>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		</>
	);
};
