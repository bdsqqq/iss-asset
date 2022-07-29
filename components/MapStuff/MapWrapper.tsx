export default function MapWrapper() {
  const { data } = useQuery(
    ["issData"],
    () => {
      return fetch("/api/issData").then((res) => {
        console.log(res.headers);
        return res.json();
      });
    },
    {
      refetchOnWindowFocus: false,
      refetchInterval: 1000,
    }
  );

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (data) {
    return <Chart lon={data.latitude} lat={data.longitude} />;
  }

  return <></>;
}

import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";
import Chart from "./Chart";
