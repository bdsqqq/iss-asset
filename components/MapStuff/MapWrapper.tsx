const API_URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function MapWrapper() {
  const { data, error } = useSWR(API_URL, {
    revalidateOnFocus: true,
    refreshInterval: 7000,
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
        </>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import useSWR from "swr";
import MapChart from "./MapChart";
