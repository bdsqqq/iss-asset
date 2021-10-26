const API_URL = `/api/issData`;

const Chart = dynamic(() => import("./Chart"), {
  loading: () => <></>,
});

export default function MapWrapper() {
  const { lat, lon, setLatLon } = useIssStore();
  // Getting data
  const { data } = useSWR(API_URL, {
    revalidateOnFocus: true,
    refreshInterval: 12 * 1000,
  });
  useEffect(() => {
    if (data) {
      setLatLon(data);
    }
  }, [data]);

  return <Chart lon={lon} lat={lat} />;
}

import { useEffect } from "react";
import useSWR from "swr";
import dynamic from "next/dynamic";

import { useIssStore } from "@/components/store/useIssStore";
