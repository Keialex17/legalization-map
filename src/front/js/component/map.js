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
      Argentina: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Bahamas: { value: 'Parcial', usos: 'Medicos' },
      Belgium: { value: 'Legal', usos: 'Recreacional' },
      Belize: { value: 'Ilegal', usos: 'Ninguno' },
      Brazil: { value: 'Ilegal', usos: 'Ninguno' },
      Bolivia: { value: 'Ilegal', usos: 'Ninguno' },
      Canada: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Chile: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Colombia: { value: 'Legal', usos: 'Medicos y Recreacional' },
      'Costa Rica': { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Cuba: { value: 'Ilegal', usos: 'Ninguno' },
      Czechia: { value: 'Legal', usos: 'Recreacional' },
      'Dominican Rep.': { value: 'Ilegal', usos: 'Ninguno' },
      Ecuador: { value: 'Legal', usos: 'Recreacional' },
      'El Salvador' : { value: 'Ilegal', usos: 'Ninguno' },
      Estonia: { value: 'Legal', usos: 'Recreacional' },
      Fiji: { value: 'Ilegal', usos: 'Ninguno' },
      France: { value: 'Ilegal', usos: 'Ninguno' },
      Germany: { value: 'Legal', usos: 'Recreacional' },
      Greenland: { value: 'Ilegal', usos: 'Ninguno' },
      Guatemala: { value: 'Ilegal', usos: 'Ninguno' },
      Guyana: { value: 'Ilegal', usos: 'Ninguno' },
      Haiti: { value: 'Ilegal', usos: 'Ninguno' },
      Honduras: { value: 'Ilegal', usos: 'Ninguno' },
      Jamaica: { value: 'Legal', usos: 'Medicos y recreacional' },
      Malta: { value: 'Legal', usos: 'Recreacional' }, //No esta en el mapa
      Mexico: { value: 'Legal', usos: 'Medicos y recreacional' },
      Moldova: { value: 'Legal', usos: 'Recreacional' },
      Nicaragua: { value: 'Ilegal', usos: 'Ninguno' },
      Netherlands: { value: 'Parcial', usos: 'Recreacional' },
      Panama : { value: 'Parcial', usos: 'Medicos' },
      Paraguay: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Peru: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Portugal: { value: 'Legal', usos: 'Recreacional' },
      'Puerto Rico': { value: 'Parcial', usos: 'Medicos' },
      Russia: { value: 'Ilegal', usos: 'Ninguno' },
      Spain: { value: 'Legal', usos: 'Medicos y recreacionales' },
      Suriname: { value: 'Ilegal', usos: 'Ninguno' },
      Switzerland: { value: 'Legal', usos: 'Recreacional' },
      Tanzania: { value: 'Ilegal', usos: 'Ninguno' },
      'Trinidad and Tobago': { value: 'Ilegal', usos: 'Ninguno' },
      'United States of America': { value: 'Legal', usos: 'Medicos y recreacional' },
      Uruguay: { value: 'Legal', usos: 'Medicos y recreacional' },
      Venezuela: { value: 'Ilegal', usos: 'Ninguno' },
      'W. Sahara': { value: 'Ilegal', usos: 'Ninguno' },
      // ... Otros países con sus valores
    };

    setData(simulatedData);
  }, []);

  // Función para asignar colores específicos a países resaltados
  const getColor = (country) => {
    const colorMap = {
      Legal: 'green',
      Parcial: 'yellow',
      Ilegal: 'red'
    };

    return colorMap[data[country]?.value] || '#ddd';
  };

  const handleMouseMove = (event) => {
    // Actualiza la posición del cursor en el estado
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };


  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {hoveredCountry && (
        <div style={{ top: `${cursorPosition.y}px`, left: `${cursorPosition.x}px`, color: 'white', position: 'absolute' }}>
          <ul className="list-group">
  <li className="list-group-item">Status</li>
  <li className="list-group-item list-group-item-success"><i className="fa-solid fa-globe"></i>{` Country: ${hoveredCountry}`}</li>
  <li className="list-group-item list-group-item-success"><i className="fas fa-seedling"></i>{` Value: ${data[hoveredCountry]?.value}`}</li>
  <li className="list-group-item list-group-item-success"><i className="fas fa-capsules"></i>{` Usos: ${data[hoveredCountry]?.usos}`}</li>
</ul>
        </div>
      )}
      <div style={{ width: '100%', height: '100%' }}>
        <ComposableMap
          projectionConfig={{
            rotate: [5, 15, 0],
            scale: 230, // Ajusta según tus necesidades
          }}
          center={[0, 0]} // Ajusta según tus necesidades
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
            {({ geographies }) =>
              geographies.map((geo) => {
                const country = geo.properties.name;
                const color = getColor(country);

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
                        fill: d3.color(color).darker(0.5),
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
        </ComposableMap>
        
      </div>
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