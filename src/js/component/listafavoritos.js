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
								{favorito}
								<i
									className="far fa-trash-alt"
									onClick={() => {
										actions.deleteFavourite(favorito);
									}}
								/>
							</DropdownItem>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		</>
	);
};
