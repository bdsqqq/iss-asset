interface ChartProps {
  lat?: number;
  lon?: number;
}

const Chart: React.FC<ChartProps> = ({ lon, lat }) => {
  const [ref, bounds] = useMeasure({ polyfill: ResizeObserver });
  useEffect(() => {
    console.log(bounds);
  }, [bounds]);

  return (
    <div className="w-full h-full" ref={ref}>
      {lat && lon && (
        <ComposableMap
          width={bounds.width}
          height={bounds.height}
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            scale: 300,
            rotate: [-lon, -lat, 0],
          }}
        >
          <Graticule className="stroke-current text-gray-600" />
          <Geographies
            className="fill-current text-gray-700"
            geography={geo}
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
    </div>
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
import { default as geo } from "./wolrd-110m";

import useMeasure from "react-use-measure";
import { ResizeObserver } from "@juggle/resize-observer";
import { useEffect } from "react";
