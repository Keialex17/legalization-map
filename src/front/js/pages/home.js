import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Map from "../component/map";
import Heading from "../component/heading";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center" id="fondo">
			<div className="mt-5 p-2">
			<h1>Mapa de legalizacion mundial del Cannabis!!</h1>
			</div>
			<div className="container">
				<Map/>
			</div>
				<Heading/>
		</div>
	);
};

			{/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}