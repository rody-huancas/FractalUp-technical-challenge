import { create } from "zustand";
import { devtools } from "zustand/middleware";

const storeApi = (set) => ({
  countryData        : null,
  isLoadingCountry   : false,
  showAsideCountry   : false,
  searchParameter    : null,
  filterContinents   : [],

  setCountryData     : (value) => set({ countryData: value }),
  setLoadingCountry  : (value) => set({ isLoadingCountry: value }),
  setShowAsideCountry: (value) => set({ showAsideCountry: value }),
  setSearchParameter : (value) => set({ searchParameter: value }),
  setFilterContinents: (value) => set({ filterContinents: value }),
});

export const useCountryStore = create()(devtools(storeApi));
