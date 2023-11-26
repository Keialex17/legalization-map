import React from "react";
import WorldMap from "react-svg-worldmap"

const Map = () =>{

    const data = [
        { country: "cn", value: "si" }, // china
        { country: "in", value: "no" }, // india
        { country: "us", value: "si" }, // united states
        { country: "id", value: "no se" }, // indonesia
        { country: "pk", value: "si" }, // pakistan
        { country: "br", value: "no" }, // brazil
        { country: "ng", value: "no" }, // nigeria
        { country: "bd", value: "si" }, // bangladesh
        { country: "ru", value: "no" }, // russia
        { country: "mx", value: "no se" }, // mexico
        { country: "ve", value: "no" }, // venezuela
        { country: "ar", value: "si" }, // venezuela
      ];

    return (
        <>
        <div className="container">

        <WorldMap
   color="green"
   title="Top 10 Populous Countries"
   value-suffix="legal"
   size="xxl"
   data={data}
 /> 
         </div>
        </>
    )
}

export default Map