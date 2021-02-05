interface MapChartProps {
  lat?: number;
  lon?: number;
}

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart: React.FC<MapChartProps> = ({ lon, lat }) => {
  return (
    <ComposableMap projectionConfig={{ scale: 147 }}>
      <Graticule stroke="#d0d0d0" />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      {lat && lon && (
        <Marker coordinates={[lon, lat]}>
          <g
            className="text-red-500 stroke-current"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-24, -48) scale(2)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
        </Marker>
      )}
    </ComposableMap>
  );
};

export default MapChart;

import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from "react-simple-maps";
