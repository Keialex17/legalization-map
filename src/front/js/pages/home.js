import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Worldmap from "./worldmap";
import { Link } from "react-router-dom";
import  Main  from "../component/main.js"
import  Tarjeta  from "../component/tarjeta.js"
import marii from "../../img/mata.jpg"


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div style={{ backgroundImage: `url(${marii})` }} className="container-fluid">

			{/* <Main /> */}
			<Tarjeta />
		</div>
	);
};

			{/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}