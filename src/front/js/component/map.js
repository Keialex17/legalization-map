import React, {useState, useEffect} from "react";
import WorldMap from "react-svg-worldmap"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import * as d3 from 'd3';

const Map = () =>{

  const [data, setData] = useState({});
  const [hoveredCountry, setHoveredCountry] = useState(null);

  useEffect(() => {
    // Simula datos, reemplaza esto con tu lógica para obtener datos
    const simulatedData = {
      Fiji: { value: 'si', population: 900000 },
      Tanzania: { value: 'no', population: 59000000 },
      'W. Sahara': { value: 'no', population: 567000 },
      Canada: { value: 'si', population: 38000000 },
      'United States of America': { value: 'no', population: 331000000 },
      // ... Otros países con sus valores y población
    };

    setData(simulatedData);
  }, []);

  // Función para asignar colores específicos a países resaltados
  const getColor = (country) => {
    const colorMap = {
      si: 'green',
      no: 'red',
    };

    return colorMap[data[country]?.value] || '#ddd';
  };

  return (
    <div>
      {hoveredCountry && (
        <div>
          <p>{`Country: ${hoveredCountry}`}</p>
          <p>{`Value: ${data[hoveredCountry]?.value}`}</p>
          <p>{`Population: ${data[hoveredCountry]?.population}`}</p>
        </div>
      )}
      <ComposableMap
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 147,
        }}
      >
        <ZoomableGroup center={[0, 20]}>
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const country = geo.properties.name;
                const color = getColor(country);
                const isHovered = hoveredCountry === country;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={color}
                    onMouseEnter={() => {
                      setHoveredCountry(country);
                    }}
                    onMouseLeave={() => {
                      setHoveredCountry(null);
                    }}
                    style={{
                      default: {
                        fill: color,
                        outline: 'none',
                      },
                      hover: {
                        fill: d3.color(color).darker(0.5), // Oscurecer el color al pasar el cursor
                        outline: 'none',
                      },
                      pressed: {
                        fill: color,
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
    
    )
  }
  
  {/* <WorldMap
  color={(index) => getColor(data[index].value)}
  title="Top 10 Populous Countries"
  value-suffix="people"
  size="xxl"
  data={data}
/> */}
export default Map