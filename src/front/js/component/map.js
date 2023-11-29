import React, {useState, useEffect} from "react";
import WorldMap from "react-svg-worldmap"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import * as d3 from 'd3';
import "../component/map.css"

const Map = () =>{

  const [data, setData] = useState({});
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    // Simula datos, reemplaza esto con tu lógica para obtener datos
    const simulatedData = {
      Argentina: { value: 'resi', usos: 'Medicos y Recreacional' },
      Belgium: { value: 'si', usos: 'Recreacional' },
      Canada: { value: 'resi', usos: 'Medicos y Recreacional' },
      Chile: { value: 'resi', usos: 'Medicos y Recreacional' },
      Colombia: { value: 'resi', usos: 'Medicos y Recreacional' },
      Estonia: { value: 'si', usos: 'Recreacional' },
      Fiji: { value: 'si', usos: 'no se' },
      Germany: { value: 'si', usos: 'Recreacional' },
      Malta: { value: 'si', usos: 'Recreacional' }, //No esta en el mapa
      Mexico: { value: 'resi', usos: 'Medicos y recreacionales' },
      Moldova: { value: 'si', usos: 'Recreacional' },
      Netherlands: { value: 'si', usos: 'Recreacional' },
      Paraguay: { value: 'resi', usos: 'Medicos y Recreacional' },
      Peru: { value: 'resi', usos: 'Medicos y Recreacional' },
      Portugal: { value: 'si', usos: 'Recreacional' },
      Czechia: { value: 'si', usos: 'Recreacional' },
      Spain: { value: 'resi', usos: 'Medicos y recreacionales' },
      Switzerland: { value: 'si', usos: 'Recreacional' },
      Tanzania: { value: 'no', usos: 'no se' },
      'United States of America': { value: 'resi', usos: 'Medicos y recreacionales' },
      Uruguay: { value: 'resi', usos: 'Medicos y recreacionales' },
      'W. Sahara': { value: 'no', usos: 'no se' },
      // ... Otros países con sus valores
    };

    setData(simulatedData);
  }, []);

  // Función para asignar colores específicos a países resaltados
  const getColor = (country) => {
    const colorMap = {
      si: 'purple',
      resi: 'green',
      no: 'red',
    };

    return colorMap[data[country]?.value] || '#ddd';
  };

  const handleMouseMove = (event) => {
    // Actualiza la posición del cursor en el estado
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {hoveredCountry && (
        <div style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px`, color: 'white' }}>
          <p>{`Country: ${hoveredCountry}`}</p>
          <p>{`Value: ${data[hoveredCountry]?.value}`}</p>
          <p>{`Usos: ${data[hoveredCountry]?.usos}`}</p>
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