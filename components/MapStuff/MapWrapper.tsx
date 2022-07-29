export default function MapWrapper() {
  const setCoords = useUpdateAtom(coords);
  const { data } = useQuery(
    ["issData"],
    () => {
      return fetch("/api/issData").then((res) => {
        console.log(res.headers.get("x-vercel-cache"));
        return res.json();
      });
    },
    {
      refetchOnWindowFocus: false,
      refetchInterval: 1000,
      onSuccess: (data) => {
        setCoords([data.latitude, data.longitude]);
      },
    }
  );

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return <Cobe />;
}

import { useEffect } from "react";
import { useUpdateAtom } from "jotai/utils";
import { coords } from "../../lib/store";

import { useQuery } from "@tanstack/react-query";
import Cobe from "./Cobe";
