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
			planets: []
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const store = getStore();
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => {
						setStore({ people: result.results });
						console.log(store.people);
					})
					.catch(error => console.log("error", error));
			},

			loadPlanets: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result.results });
						console.log(store.planets);
					})
					.catch(error => console.log("error", error));
			},

			loadVehicles: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(result => {
						setStore({ vehicles: result.results });
						console.log(store.vehicles);
					})
					.catch(error => console.log("error", error));
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
