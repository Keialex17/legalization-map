import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Map from "../component/map";
import Leyenda from "../component/leyenda";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid text-center" id="fondo">
						<h1>Mapa de legalizacion mundial del Cannabis!!</h1>
			<div className="mt-5">
				<Map/>
			</div>
			<Leyenda/>
		</div>
	);
};

			{/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}