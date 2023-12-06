import React from "react";
import { Card, CardDeck, Button, Container } from "bootstrap";
import status from "../../img/status.jpg";
import countri from "../../img/countries.jpg";

const Tarjeta = () => {
	return (
	<div className="container mt-5">
		<div className="row">
			<div className="col-sm-6">
			<div className="card">
				<img src={status} className="card-img-top" alt="Legalisation Status"/>
				<div className="card-body">
				<h5 className="card-title">Legalisation Status by State</h5>
				</div>
			</div>
			</div>
			<div className="col-sm-6">
			<div className="card">
				<img src={countri} className="card-img-top" alt="Legalisation by Country"/>
				<div className="card-body">
				<h5 className="card-title">Legalisation by Country</h5>
				<a className="btn btn-primary btn-lg" href="/worldMap" role="button">Go to!</a>
				</div>
			</div>
			</div>
		</div>
	</div>
	);
};

export default Tarjeta