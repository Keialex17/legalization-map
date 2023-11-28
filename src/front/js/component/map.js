import React, {useState, useEffect} from "react";
import WorldMap from "react-svg-worldmap"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import * as d3 from 'd3';

const Map = () =>{

  const [data, setData] = useState({});

  useEffect(() => {
    // Simula datos, reemplaza esto con tu lógica para obtener datos
    const simulatedData = {
      Fiji: 50,
      Tanzania: 30,
      'W. Sahara': 20,
      Canada: 75,
      'United States of America': 90,
      // ... Otros países con sus valores
    };

    setData(simulatedData);
  }, []);

  // Función para escalar el color según el valor
  const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, 100]);

  // Función para asignar colores específicos a países resaltados
  const getColor = (country) => {
    const highlightedCountries = ['Fiji', 'Tanzania', 'W. Sahara', 'Canada', 'United States of America'];
    if (highlightedCountries.includes(country)) {
      const colorMap = {
        Fiji: 'red',
        Tanzania: 'green',
        'W. Sahara': 'blue',
        Canada: 'orange',
        'United States of America': 'purple',
      };
      return colorMap[country];
    } else {
      return colorScale(data[country]) || '#ddd';
    }
  };

  return (
    <div>
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

                return (
                  <Geography
                    key={geo.id}
                    geography={geo}
                    fill={color}
                    onMouseEnter={() => {
                      console.log(`Country: ${country}, Value: ${data[country]}`);
                    }}
                    style={{
                      hover: {
                        fill: '#F53',
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