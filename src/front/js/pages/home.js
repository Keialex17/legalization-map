import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Worldmap from "./worldmap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<Worldmap/>
	);
};

			{/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div> */}