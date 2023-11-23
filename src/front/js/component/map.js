import React from "react";
import WorldMap from "react-svg-worldmap"
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

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
      ];

      const getColor = (value) => {
        if (value === "si") {
          return "green";
        } else if (value === "no") {
          return "red";
        } else {
          return "gray";
        }
      };

    return (
        <>
        <div className="container">

      <ComposableMap
        projectionConfig={{
          scale: 200,
        }}
      >
        <Geographies geography={"https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const { ISO_A2 } = geo.properties;
              console.log(ISO_A2)
              const countryData = data.find((d) => d.country === ISO_A2);
              console.log(countryData)
              const color = countryData ? getColor(countryData.value) : "blue";
              console.log(color)

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={color}
                  stroke="white"
                  strokeWidth={0.5}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

        </div>
        {/* <WorldMap
        color="green"
        title="Top 10 Populous Countries"
        value-suffix="legal"
        size="xxl"
        data={data}
      /> */}
        </>
    )
}

export default Map