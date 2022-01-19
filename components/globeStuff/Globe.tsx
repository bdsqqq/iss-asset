const API_URL = `/api/issData`;

export const Globe = () => {
  const { lat, lon, setLatLon } = useIssStore();

  const { data } = useSWR(API_URL, {
    revalidateOnFocus: true,
    refreshInterval: 1 * 1000,
  });
  useEffect(() => {
    if (data) {
      setLatLon(data);
    }
  }, [data]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // let phi = (lat / 180) * Math.PI * -1;
    let phi = 0;
    // let theta = lon * 1.5 * -1;

    let tempLat = lat;
    let tempLon = lon;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 300 * 2,
      height: 300 * 2,
      phi: phi, // 6.285 = 0 phi
      theta: 0,
      dark: 1,
      diffuse: 2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        // lat -90 is at 0 phi
        { location: [lon, lat - 90], size: 0.05 },
      ],
      onRender: (state: any) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.

        tempLat = lat;
        tempLon = lon;

        state.phi = phi;
        state.markers = [{ location: [tempLon, tempLat - 90], size: 0.05 }];
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: 300, height: 300 }} />;
};

import useSWR from "swr";
import { useEffect, useRef } from "react";
import { useIssStore } from "@/components/store/useIssStore";

import createGlobe from "cobe";
