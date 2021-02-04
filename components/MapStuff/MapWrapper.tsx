export default function MapWrapper() {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  return (
    <div>
      <MapChart lon={lon} lat={lat} />
      <button onClick={() => setLat(lat + 10)}>+10Lat</button>
      <button onClick={() => setLat(lat - 10)}>-10Lat</button>
      <br />
      <button onClick={() => setLon(lon + 10)}>+10Lon</button>
      <button onClick={() => setLon(lon - 10)}>-10Lon</button>
    </div>
  );
}

import { useState } from "react";
import MapChart from "./MapChart";
