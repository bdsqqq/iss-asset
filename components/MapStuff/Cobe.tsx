import createGlobe from "cobe";
import { useAtomValue } from "jotai";
import { coords } from "lib/store";
import { useEffect, useRef } from "react";

// https://github.com/shuding/cobe

const Cobe = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const locationToAngles = (lat: number, long: number) => {
    return [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ];
  };
  const focusRef = useRef([0, 0]);
  const markerRef = useRef<[number, number]>([0, 0]);

  const data = useAtomValue(coords);

  if (data) {
    focusRef.current = locationToAngles(data[0], data[1]);
    markerRef.current = [data[0], data[1]];
  }

  useEffect(() => {
    let height = 0;
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;
    const onResize = () => {
      if (canvasRef.current) {
        height = canvasRef.current.offsetHeight;
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: height * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 3,
      mapSamples: 32000,
      mapBrightness: 1,
      baseColor: [1, 1, 1],
      markerColor: [229 / 255, 72 / 255, 77 / 255],
      glowColor: [0.3, 0.3, 0.3],
      markers: [{ location: markerRef.current, size: 0.1 }],
      scale: 1,
      offset: [width * 0.25, -height * 0.125],
      onRender: (state) => {
        state.width = width * 2;
        state.height = height * 2;

        state.markers = [{ location: markerRef.current, size: 0.1 }];

        // animated move
        state.phi = currentPhi;
        state.theta = currentTheta;
        const [focusPhi, focusTheta] = focusRef.current;
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi; // Control the speed
        if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08;
        } else {
          currentPhi -= distNegative * 0.08;
        }
        currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
      },
    });

    setTimeout(() => {
      if (!canvasRef.current) return;
      return (canvasRef.current.style.opacity = "1");
    });
    return () => globe.destroy();
  }, []);

  return (
    <div
      style={{
        aspectRatio: "1",
        margin: "auto",
        position: "absolute",
        inset: 0,
        minHeight: "100vh",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
};

export default Cobe;
