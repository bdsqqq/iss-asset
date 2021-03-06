interface ChartProps {
  lat?: number;
  lon?: number;
}

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Chart: React.FC<ChartProps> = ({ lon, lat }) => {
  return (
    <>
      {lat && lon && (
        <ComposableMap
          width={800}
          height={450}
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            scale: 300,
            rotate: [-lon, -lat, 0],
          }}
        >
          <Graticule className="stroke-current text-gray-600" />
          <Geographies
            className="fill-current text-gray-700"
            geography={geoUrl}
            stroke="#FFFFFF"
            strokeWidth={0.5}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>

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
        </ComposableMap>
      )}
    </>
  );
};

export default Chart;

import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from "react-simple-maps";
