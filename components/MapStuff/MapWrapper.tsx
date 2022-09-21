export default function MapWrapper() {
  const setCoords = useUpdateAtom(coords);
  useQuery(
    ["issData"],
    async () => {
      const res = await fetch("/api/issData");
      return await res.json();
    },
    {
      refetchOnWindowFocus: false,
      refetchInterval: 1000,
      onSuccess: (data) => {
        if (data.latitude && data.longitude) {
          setCoords([data.latitude, data.longitude]);
        }
      },
    }
  );

  return <Cobe />;
}

import { useUpdateAtom } from "jotai/utils";
import { coords } from "../../lib/store";

import { useQuery } from "@tanstack/react-query";
import Cobe from "./Cobe";
