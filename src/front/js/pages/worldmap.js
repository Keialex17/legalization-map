import React from "react";
import Map from "../component/map";
import Leyenda from "../component/leyenda";
import "../pages/worldmap.css"
import { Navbar } from "../component/navbar";

const Worldmap = () =>{
    return(
        <>
        <div className="container-fluid text-center" id="fondo">
        <Navbar/>
        <div className="card p-2 m-2">
  <div className="card-body">
  <h1>Global cannabis legalization map <i className="fas fa-seedling"></i></h1>
  </div>
</div>
    <div className="mt-5">
    <Map/>
    </div>
    <Leyenda/>
</div>
        
        </>
    )
}

export default Worldmap