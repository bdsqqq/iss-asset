const API_URL = `/api/issData`;

const Chart = dynamic(() => import("./Chart"), {
  loading: () => <></>,
});

export default function MapWrapper() {
  // Getting data
  const { data } = useSWR(API_URL, {
    revalidateOnFocus: true,
    refreshInterval: 12 * 1000,
  });
  useEffect(() => {
    if (data) {
      setLat(data.latitude);
      setLon(data.longitude);
    }
  }, [data]);
  const [lat, setLat] = useState<undefined | number>();
  const [lon, setLon] = useState<undefined | number>();

  return <Chart lon={lon} lat={lat} />;
}

import { useEffect, useState } from "react";
import useSWR from "swr";

import dynamic from "next/dynamic";
