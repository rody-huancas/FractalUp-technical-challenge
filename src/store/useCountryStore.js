import { create } from "zustand";
import { devtools } from "zustand/middleware";

const storeApi = (set) => ({
  countryData: null,
  isLoadingCountry: false,
  showAsideCountry: false,
  searchParameter: null,

  setCountryData: (value) => set({ countryData: value }),
  setLoadingCountry: (value) => set({ isLoadingCountry: value }),
  setShowAsideCountry: (value) => set({ showAsideCountry: value }),
  setSearchParameter: (value) => set({ searchParameter: value }),
});

export const useCountryStore = create()(devtools(storeApi));
