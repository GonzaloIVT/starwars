const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			people: [],
			vehicles: [],
			planets: [],
			detailpeople: [],
			detailplanets: [],
			detailvehicles: [],
			favourites: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			//FUNCION LAMAR PEOPLE (Se almacena people")
			loadSomeData: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => {
						setStore({ people: result.results });
						console.log(store.people);
					})
					.catch(error => console.log("error", error));
			},

			//FUNCION LLAMAR DETALLE PEOPLE (Se almacena en "detailpeople")
			loadDetailPeople: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ detailpeople: result.result.properties });
						console.log("detailpeople", store.detailpeople);
					})
					.catch(error => console.log("error", error));
			},

			//FUNCION LAMAR PLANETS (Se almacena en  planets)
			loadPlanets: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result.results });
						console.log(store.planets);
					})
					.catch(error => console.log("error", error));
			},

			//FUNCION LLAMAR DETALLE PLANETS  (Se almacena en "detailplanets")
			loadDetailPlanets: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ detailplanets: result.result.properties });
						console.log("detailplanets", store.detailplanets);
					})
					.catch(error => console.log("error", error));
			},

			//FUNCION LAMAR VEHICLES (Se almacena en vehicles)
			loadVehicles: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(result => {
						setStore({ vehicles: result.results });
						console.log(store.vehicles);
					})
					.catch(error => console.log("error", error));
			},

			//FUNCION LLAMAR DETALLE VEHICLES (Se almacena en "detailvehicles")
			loadDetailVehicles: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ detailvehicles: result.result.properties });
						console.log("detailvehicles", store.detailvehicles);
					})
					.catch(error => console.log("error", error));
			},

			loadFavourites: name => {
				const store = getStore();
				setStore({ favourites: [...store.favourites, name] });
				console.log(store.favourites);
			}
		}
	};
};

export default getState;
