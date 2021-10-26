import create from "zustand";

export const useIssStore = create((set) => ({
  lat: 0,
  lon: 0,
  setLatLon: (data: any) =>
    set(() => ({ lat: data.latitude, lon: data.longitude })),
}));
