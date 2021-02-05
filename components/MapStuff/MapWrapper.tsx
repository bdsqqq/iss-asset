const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function MapWrapper() {
  const { data, error } = useSWR(API_URL, {
    revalidateOnFocus: true,
    refreshInterval: 12000,
  });

  useEffect(() => {
    data && console.table(data);
    error && console.log(error, "error");
    if (data) {
      setLat(data.latitude);
      setLon(data.longitude);
    }
  }, [data, error]);

  const [lat, setLat] = useState<undefined | number>();
  const [lon, setLon] = useState<undefined | number>();

  return (
    <div>
      <MapChart lon={lon} lat={lat} />
      {lat && lon && (
        <>
          <button onClick={() => setLat(lat + 10)}>+10Lat</button>
          <button onClick={() => setLat(lat - 10)}>-10Lat</button>
          <br />
          <button onClick={() => setLon(lon + 10)}>+10Lon</button>
          <button onClick={() => setLon(lon - 10)}>-10Lon</button>
          <div className="bg-gray-800 font-mono leading-snug m-8 p-4 rounded-lg">
            <B>STAGING ONLY:</B>
            <br />
            You can change the lat and lon on the go with the buttons above.
            <br /> be aware that the Lat and Lon are being updated by an API
            every 12 seconds give or take so don't be scared if your manual
            changes are reverted out of nowhere
          </div>
        </>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import useSWR from "swr";
import MapChart from "./MapChart";

import B from "../Bold";
