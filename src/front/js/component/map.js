import React, {useState, useEffect} from "react";
import WorldMap from "react-svg-worldmap"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import * as d3 from 'd3';
import "../component/map.css"

const Map = () =>{

  const [data, setData] = useState({});
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showLegendScroll, setShowLegendScroll] = useState(false);


  useEffect(() => {
    // Simula datos, reemplaza esto con tu lógica para obtener datos
    const simulatedData = {
      Albania: { value: 'Ilegal', usos: 'Ninguno' },
      Algeria: { value: 'Ilegal', usos: 'Ninguno' },
      Angola: { value: 'Ilegal', usos: 'Ninguno' },
      Antarctica: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Argentina: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Armenia: { value: 'Ilegal', usos: 'Ninguno' },
      Austria: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Azerbaijan: { value: 'Ilegal', usos: 'Ninguno' },
      Bahamas: { value: 'Parcial', usos: 'Medicos' },
      Belarus: { value: 'Ilegal', usos: 'Ninguno' },
      Belgium: { value: 'Legal', usos: 'Recreacional' },
      Belize: { value: 'Ilegal', usos: 'Ninguno' },
      Benin: { value: 'Ilegal', usos: 'Ninguno' },
      Brazil: { value: 'Ilegal', usos: 'Ninguno' },
      Bolivia: { value: 'Ilegal', usos: 'Ninguno' },
      Botswana: { value: 'Ilegal', usos: 'Ninguno' },
      'Bosnia and Herz.': { value: 'Ilegal', usos: 'Ninguno' },
      Bulgaria: { value: 'Ilegal', usos: 'Ninguno' },
      'Burkina Faso': { value: 'Ilegal', usos: 'Ninguno' },
      Burundi: { value: 'Ilegal', usos: 'Ninguno' },
      Cameroon: { value: 'Ilegal', usos: 'Ninguno' },
      Canada: { value: 'Legal', usos: 'Medicos y Recreacional' },
      'Central African Rep.': { value: 'Ilegal', usos: 'Ninguno' },
      Chad: { value: 'Ilegal', usos: 'Ninguno' },
      Chile: { value: 'Legal', usos: 'Medicos y Recreacional' },
      "Côte d'Ivoire": { value: 'Ilegal', usos: 'Ninguno' },
      Colombia: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Congo: { value: 'Ilegal', usos: 'Ninguno' },
      'Costa Rica': { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Croatia: { value: 'Parcial', usos: 'Medicos' },
      Cyprus: { value: 'Parcial', usos: 'Medicos' },
      Cuba: { value: 'Ilegal', usos: 'Ninguno' },
      Czechia: { value: 'Legal', usos: 'Recreacional' },
      'Dem. Rep. Congo': { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Denmark: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Djibouti: { value: 'Ilegal', usos: 'Ninguno' },
      'Dominican Rep.': { value: 'Ilegal', usos: 'Ninguno' },
      Ecuador: { value: 'Legal', usos: 'Recreacional' },
      Egypt: { value: 'Ilegal', usos: 'Ninguno' },
      'El Salvador' : { value: 'Ilegal', usos: 'Ninguno' },
      'Eq. Guinea': { value: 'Ilegal', usos: 'Ninguno' },
      Eritrea: { value: 'Parcial', usos: 'Medicos' },
      Estonia: { value: 'Legal', usos: 'Recreacional' },
      eSwatini: { value: 'Ilegal', usos: 'Ninguno' },
      Ethiopia: { value: 'Ilegal', usos: 'Ninguno' },
      'Falkland Is.': { value: 'Ilegal', usos: 'Ninguno' },
      Fiji: { value: 'Ilegal', usos: 'Ninguno' },
      Finland: { value: 'Parcial', usos: 'Medicos' },
      'Fr. S. Antarctic Lands': { value: 'Ilegal', usos: 'Ninguno' },
      France: { value: 'Ilegal', usos: 'Ninguno' },
      Gabon: { value: 'Ilegal', usos: 'Ninguno' },
      Gambia: { value: 'Ilegal', usos: 'Ninguno' },
      Germany: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Georgia: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Ghana: { value: 'Parcial', usos: 'Medicos' },
      Greece: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Greenland: { value: 'Ilegal', usos: 'Ninguno' },
      Guatemala: { value: 'Ilegal', usos: 'Ninguno' },
      Guinea: { value: 'Ilegal', usos: 'Ninguno' },
      'Guinea-Bissau': { value: 'Ilegal', usos: 'Ninguno' },
      Guyana: { value: 'Ilegal', usos: 'Ninguno' },
      Haiti: { value: 'Ilegal', usos: 'Ninguno' },
      Iceland: { value: 'Parcial', usos: 'Medicos' },
      Iran: { value: 'Ilegal', usos: 'Ninguno' },
      Iraq: { value: 'Ilegal', usos: 'Ninguno' },
      Ireland: { value: 'Parcial', usos: 'Medicos' },
      Israel: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Italy: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Honduras: { value: 'Ilegal', usos: 'Ninguno' },
      Hungary: { value: 'Ilegal', usos: 'Ninguno' },
      Jamaica: { value: 'Legal', usos: 'Medicos y recreacional' },
      Jordan: { value: 'Ilegal', usos: 'Ninguno' },
      Kenya: { value: 'Ilegal', usos: 'Ninguno' },
      Kosovo: { value: 'Ilegal', usos: 'Ninguno' },
      Kuwait: { value: 'Ilegal', usos: 'Ninguno' },
      Latvia: { value: 'Ilegal', usos: 'Ninguno' },
      Lebanon: { value: 'Parcial', usos: 'Medicos' },
      Lesotho: { value: 'Ilegal', usos: 'Ninguno' },
      Liberia: { value: 'Ilegal', usos: 'Ninguno' },
      Libya: { value: 'Ilegal', usos: 'Ninguno' },
      Lithuania: { value: 'Parcial', usos: 'Medicos' },
      Luxembourg: { value: 'Legal', usos: 'Medicos y recreacional' },
      Macedonia:{ value: 'Parcial', usos: 'Medicos y Recreacional' },
      Madagascar: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Malawi: { value: 'Parcial', usos: 'Medicos' },
      Mali: { value: 'Ilegal', usos: 'Ninguno' },
      Malta: { value: 'Legal', usos: 'Recreacional' }, //No esta en el mapa
      Mauritania: { value: 'Ilegal', usos: 'Ninguno' },
      Mexico: { value: 'Legal', usos: 'Medicos y recreacional' },
      Moldova: { value: 'Legal', usos: 'Recreacional' },
      Montenegro: { value: 'Ilegal', usos: 'Ninguno' },
      Morocco: { value: 'Parcial', usos: 'Medicos' },
      Mozambique: { value: 'Ilegal', usos: 'Ninguno' },
      'N. Cyprus': { value: 'Parcial', usos: 'Medicos' },
      Namibia: { value: 'Ilegal', usos: 'Ninguno' },
      Nicaragua: { value: 'Ilegal', usos: 'Ninguno' },
      Niger: { value: 'Ilegal', usos: 'Ninguno' },
      Nigeria: { value: 'Ilegal', usos: 'Ninguno' },
      Netherlands: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      'New Caledonia': { value: 'Ilegal', usos: 'Ninguno' },
      'New Zealand': { value: 'Parcial', usos: 'Medicos' },
      Norway: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Oman: { value: 'Ilegal', usos: 'Ninguno' },
      Panama : { value: 'Parcial', usos: 'Medicos' },
      Palestine: { value: 'Ilegal', usos: 'Ninguno' },
      'Papua New Guinea': { value: 'Ilegal', usos: 'Ninguno' },
      Paraguay: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Peru: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Poland: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Portugal: { value: 'Legal', usos: 'Recreacional' },
      'Puerto Rico': { value: 'Parcial', usos: 'Medicos' },
      Qatar: { value: 'Ilegal', usos: 'Ninguno' },
      Russia: { value: 'Ilegal', usos: 'Ninguno' },
      Romania: { value: 'Parcial', usos: 'Medicos' },
      Rwanda: { value: 'Ilegal', usos: 'Ninguno' },
      'S. Sudan': { value: 'Ilegal', usos: 'Ninguno' },
      'Saudi Arabia': { value: 'Ilegal', usos: 'Ninguno' },
      Serbia: { value: 'Ilegal', usos: 'Ninguno' },
      Senegal: { value: 'Ilegal', usos: 'Ninguno' },
      'Sierra Leone': { value: 'Ilegal', usos: 'Ninguno' },
      Spain: { value: 'Legal', usos: 'Medicos y recreacionales' },
      Slovakia: { value: 'Ilegal', usos: 'Ninguno' },
      Slovenia: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Somalia: { value: 'Ilegal', usos: 'Ninguno' },
      Somaliland: { value: 'Ilegal', usos: 'Ninguno' },
      'Solomon Is.': { value: 'Ilegal', usos: 'Ninguno' },
      'South Africa': { value: 'Legal', usos: 'Medicos y Recreacional' },
      Sudan: { value: 'Ilegal', usos: 'Ninguno' },
      Suriname: { value: 'Ilegal', usos: 'Ninguno' },
      Syria: { value: 'Ilegal', usos: 'Ninguno' },
      Sweden: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Switzerland: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Tanzania: { value: 'Ilegal', usos: 'Ninguno' },
      Togo: { value: 'Ilegal', usos: 'Ninguno' },
      'Trinidad and Tobago': { value: 'Ilegal', usos: 'Ninguno' },
      Tunisia: { value: 'Ilegal', usos: 'Ninguno' },
      Turkey: { value: 'Parcial', usos: 'Medicos' },
      Uganda: { value: 'Parcial', usos: 'Medicos y Recreacional' },
      Ukraine: { value: 'Parcial', usos: 'Medicos' },
      'United Arab Emirates': { value: 'Ilegal', usos: 'Ninguno' },
      'United Kingdom': { value: 'Parcial', usos: 'Medicos' },
      'United States of America': { value: 'Legal', usos: 'Medicos y recreacional' },
      Uruguay: { value: 'Legal', usos: 'Medicos y recreacional' },
      Vanuatu: { value: 'Parcial', usos: 'Medicos' },
      Venezuela: { value: 'Ilegal', usos: 'Ninguno' },
      'W. Sahara': { value: 'Ilegal', usos: 'Ninguno' },
      Yemen: { value: 'Ilegal', usos: 'Ninguno' },
      Zambia: { value: 'Legal', usos: 'Medicos y Recreacional' },
      Zimbabwe: { value: 'Parcial', usos: 'Medicos' },

      Thailand: { value: 'Legal', usos: 'Medicos y recreacional' },
      'South Korea': { value: 'Legal', usos: 'Medicos y recreacional' },
      Japan: { value: 'Legal', usos: 'Medicos y recreacional' },
      China: { value: 'Ilegal', usos: 'Ninguno' },
      Mongolia: { value: 'Ilegal', usos: 'Ninguno' },
      Australia: { value:'Legal', usos: 'Medicos y Recreacional'},
      'New Zealand': { value:'Legal', usos: 'Recreacional'},
      Philippines: { value:'Legal', usos: 'Medicinal'},
      'North Korea': { value: 'Ilegal', usos: 'Ninguno' },
      'Taiwan':  {value: 'Ilegal', usos: 'Ninguno' },
      'Malaysia':  {value: 'Ilegal', usos: 'Ninguno' },
      'Brunei':  {value: 'Ilegal', usos: 'Ninguno' },
      'Vietnam':  {value: 'Ilegal', usos: 'Ninguno' },
      'Cambodia':  {value: 'Ilegal', usos: 'Ninguno' },
      'Laos':  {value: 'Ilegal', usos: 'Ninguno' },
      'Myanmar':  {value: 'Ilegal', usos: 'Ninguno' },
      'India':  {value: 'Ilegal', usos: 'Ninguno' },
      'Iran':  {value: 'Ilegal', usos: 'Ninguno' },
      'Afghanistan':  {value: 'Ilegal', usos: 'Ninguno' },
      'Pakistan':  {value: 'Ilegal', usos: 'Ninguno' },
      'Uzbekistan':  {value: 'Ilegal', usos: 'Ninguno' },
      'Kazakhstan':  {value: 'Ilegal', usos: 'Ninguno' },
      'Turkmenistan':  {value: 'Ilegal', usos: 'Ninguno' },
      'Kyrgyzstan':  {value: 'Ilegal', usos: 'Ninguno' },
      'Tajikistan':  {value: 'Ilegal', usos: 'Ninguno' },
      'Nepal':  {value: 'Ilegal', usos: 'Ninguno' },
      'Bhutan':  {value: 'Ilegal', usos: 'Ninguno' },
      'Bangladesh':  {value: 'Ilegal', usos: 'Ninguno' },
      'Sri Lanka':  {value: 'Ilegal', usos: 'Ninguno' },
      'Timor-Leste':  {value: 'Ilegal', usos: 'Ninguno' },
      'Indonesia':  {value: 'Ilegal', usos: 'Ninguno' },
      'Norway':  {value: 'Ilegal', usos: 'Ninguno' },


      // ... Otros países con sus valores
    };

    setData(simulatedData);
  }, []);

  // Función para asignar colores específicos a países resaltados
  const getColor = (country) => {
    const colorMap = {
      Legal: '#17FF5D',
      Parcial: '#D3DD36',
      Ilegal: '#FF170C'
    };

    return colorMap[data[country]?.value] || '#ddd';
  };

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });

    // Verificar si la leyenda está cerca del borde y mostrar el scrollbar
    if (event.clientX > window.innerWidth - 300) {
      setShowLegendScroll(true);
    } else {
      setShowLegendScroll(false);
    }
  };

  function getStatusClass(status) {
    switch (status) {
      case 'Legal':
        return 'list-group-item-success';
      case 'Parcial':
        return 'list-group-item-warning';
      case 'Ilegal':
        return 'list-group-item-danger';
      default:
        return 'list-group-item-info';
    }
  }


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
        <div style={{ top: `${cursorPosition.y}px`,
        left: `${cursorPosition.x}px`,
        color: "white",
        position: "absolute",
        overflowY: showLegendScroll ? "auto" : "hidden", // Habilitar scroll si showLegendScroll es verdadero
        maxHeight: "60vh" }}>
                 <ul className="list-group">
          <li className="list-group-item">Status</li>
          <li className={`list-group-item ${getStatusClass(data[hoveredCountry]?.value)}`}>
            <i className="fa-solid fa-globe"></i>{` Country: ${hoveredCountry}`}
          </li>
          <li className={`list-group-item ${getStatusClass(data[hoveredCountry]?.value)}`}>
            <i className="fas fa-seedling"></i>{` Value: ${data[hoveredCountry]?.value}`}
          </li>
          <li className={`list-group-item ${getStatusClass(data[hoveredCountry]?.value)}`}>
            <i className="fas fa-capsules"></i>{` Usos: ${data[hoveredCountry]?.usos}`}
          </li>
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
                        fill: d3.color(color).darker(0.8),
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