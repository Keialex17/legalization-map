import React from "react";
import PropTypes from "prop-types";
import { Jumbotron, Button, Container } from "bootstrap";

const Main = () => {
	return (
	<div className="container container-fluid mt-5">
		<div className="jumbotron text-dark rounded" style={{ backgroundColor: '#A7A7A7'}}>
			<h1 className="display-4">Legalisation of Cannabis</h1>
			<p className="lead">
			The legality of cannabis differs by country. In many countries, cannabis is illegal for recreational use but legal for medicinal use. In other countries, cannabis is legal for both purposes.
			</p>
		</div>
	</div>
	);
};

export default Main