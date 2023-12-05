import React from "react";
import Map from "../component/map";
import Leyenda from "../component/leyenda";

const Worldmap = () =>{
    return(
        <div className="container-fluid text-center" id="fondo">
            <h1>Mapa de legalizacion mundial del Cannabis!!</h1>
    <div className="mt-5">
    <Map/>
    </div>
    <Leyenda/>
</div>
    )
}

export default WorldMap