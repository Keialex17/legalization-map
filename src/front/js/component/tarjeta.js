import React from "react";
import { Card, CardDeck, Button, Container } from "bootstrap";
import status from "../../img/mapa_estados_unidos.jpg";
import countri from "../../img/banderas.jpg";

const Tarjeta = () => {
	return (
	// <div className="container mt-5">
	// 	<div className="row">
	// 		<div className="col-sm-6">
	// 		<div className="card">
	// 			<img src={status} className="card-img-top" alt="Legalisation Status"/>
	// 			<div className="card-body">
	// 			<h5 className="card-title">Legalisation Status by State</h5>
	// 			<a className="btn btn-primary btn-lg" role="button">Go to!</a>
	// 			</div>
	// 		</div>
	// 		</div>
	// 		<div className="col-sm-6">
	// 		<div className="card">
	// 			<img src={countri} className="card-img-top" alt="Legalisation by Country"/>
	// 			<div className="card-body">
	// 			<h5 className="card-title">Legalisation by Country</h5>
	// 			<a className="btn btn-primary btn-lg" href="/worldMap" role="button">Go to!</a>
	// 			</div>
	// 		</div>
	// 		</div>
	// 	</div>
	// </div>

	<div className="row justify-content-md-center grid gap-3">
		<div className="col-sm-6 mb-3 mb-sm-0 mt-3 my-5">
			<div className="card">
				<img src={status} className="card-img-top" alt="Legalisation Status"/>
				<div className="card-body">
					<h5 className="card-title">Legalisation Status by State</h5>
					<a href="#" className="btn btn-primary">Go to!</a>
				</div>
			</div>
		</div>
			<div className="col-sm-6 mt-3 my-3">
				<div className="card">
					<img src={countri} className="card-img-top" alt="Legalisation by Country"/>
					<div className="card-body">
						<h5 className="card-title">Legalisation by Country</h5>
						<a className="btn btn-primary" href="/worldMap" role="button">Go to!</a>
					</div>
				</div>
			</div>
	</div>





	);
};

export default Tarjeta