const API_URL = `/api/issData`;

const Chart = dynamic(() => import("./Chart"), { loading: () => <p>...</p> });

export default function MapWrapper() {
  const { data } = useSWR(API_URL, {
    revalidateOnFocus: true,
    refreshInterval: 3 * 1000,
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
//import Chart from "./Chart";

import dynamic from "next/dynamic";
