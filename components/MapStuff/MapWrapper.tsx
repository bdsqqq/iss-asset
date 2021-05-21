const API_URL = `/api/issData`;

const Chart = dynamic(() => import("./Chart"), {
  loading: () => <></>,
});

export default function MapWrapper() {
  const { data } = useSWR(API_URL, {
    revalidateOnFocus: true,
    refreshInterval: 3 * 1000,
  });

  useEffect(() => {
    if (data) {
      setLat(data.latitude);
      setLon(data.longitude);
    }
  }, [data]);

  const [lat, setLat] = useState<undefined | number>();
  const [lon, setLon] = useState<undefined | number>();

  return (
    <div className="relative w-full h-0 pb-16/9">
      <Chart lon={lon} lat={lat} />
    </div>
  );
}

import { useEffect, useState } from "react";
import useSWR from "swr";
//import Chart from "./Chart";

import dynamic from "next/dynamic";
