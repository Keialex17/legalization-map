import React, {useState, useEffect} from "react";
import WorldMap from "react-svg-worldmap"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import * as d3 from 'd3';

const Map = () =>{

  const [data, setData] = useState({}); // Puedes reemplazar esto con tus propios datos

  useEffect(() => {
    // Simula datos, reemplaza esto con tu lógica para obtener datos
    const simulatedData = {
      USA: 50,
      Canada: 30,
      Mexico: 20,
      Brazil: 75,
      India: 90,
      // ... Otros países con sus valores
    };

    setData(simulatedData);
  }, []);

  // Función para escalar el color según el valor
  const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, 100]);

  // Función para asignar colores específicos a países resaltados
  const getColor = (country) => {
    const highlightedCountries = ['USA', 'Canada', 'Mexico', 'Brazil', 'India'];
    if (highlightedCountries.includes(country)) {
      // Cambiar estos colores según tus preferencias
      const colorMap = {
        USA: 'red',
        Canada: 'green',
        Mexico: 'blue',
        Brazil: 'orange',
        India: 'purple',
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
                const country = geo.properties.NAME;
                console.log(country)
                const color = getColor(country);

                return (
                  <Geography
                    key={geo.rsmKey}
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