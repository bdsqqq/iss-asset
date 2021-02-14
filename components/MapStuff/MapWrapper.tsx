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

  return <Chart lon={lon} lat={lat} />;
}

import { useEffect, useState } from "react";
import useSWR from "swr";
import Chart from "./Chart";

import B from "../Bold";
