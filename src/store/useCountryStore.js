import { create } from "zustand";
import { devtools } from "zustand/middleware";

const storeApi = (set) => ({
  countryData: null,
  isLoadingCountry: false,
  showAsideCountry: false,

  setCountryData: (value) => set({ countryData: value }),
  setLoadingCountry: (value) => set({ isLoadingCountry: value }),
  setShowAsideCountry: (value) => set({ showAsideCountry: value }),
});

export const useCountryStore = create()(devtools(storeApi));
