import classNames from "classnames";
import { useState, useEffect } from "react";
// store
import { useCountryStore } from "../store/useCountryStore";
// icons
import { SearchIcon } from "./icons/SearchIcon";
// components
import { FilterContinents } from "./FilterContinents";

export const SearchForm = () => {
  const searchParameter = useCountryStore((state) => state.searchParameter);
  const filterContinents = useCountryStore((state) => state.filterContinents);
  const setSearchParameter = useCountryStore((state) => state.setSearchParameter);
  const setFilterContinents = useCountryStore((state) => state.setFilterContinents);

  const [isActive, setIsActive] = useState(false);

  const onSearchParameter = (evt) => {
    setSearchParameter(evt.target.value);
    setIsActive(true);
  };

  const onClickContinent = (name) => {
    if (filterContinents.includes(name)) setFilterContinents(filterContinents.filter((ct) => ct !== name));
    else setFilterContinents([...filterContinents, name]);
  };

  const onResetFilter = () => setFilterContinents([]);

  useEffect(() => {
    if (searchParameter !== "" && searchParameter !== null) setIsActive(false);
  }, [searchParameter]);
  
  return (
    <>
      <div className="relative">
        <div className="xl:w-3/4 mx-auto">
          <form className="flex items-center justify-between gap-5 border-2 shadow-lg rounded-full pl-10 pr-5 py-2 z-20">
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="input_search"
                className="font-bold text-lg text-gray-800/80"
              >
                País
              </label>
              <input
                id="input_search"
                type="text"
                placeholder="Escribe el país que deseas ver"
                className="border-b outline-none w-full focus:border-blue-600"
                defaultValue={searchParameter}
                onChange={onSearchParameter}
                onFocus={() => setIsActive(true)}
              />
            </div>
            <button
              type="button"
              className="flex items-center gap-2 bg-blue-600 px-5 lg:px-10 py-2 rounded-full text-white"
            >
              <SearchIcon />
              <span className="hidden sm:block md:hidden lg:block">Buscar</span>
            </button>
          </form>
        </div>

        {isActive && (
          <FilterContinents
            filterContinents={filterContinents}
            onClickContinent={onClickContinent}
            onResetFilter={onResetFilter}
          />
        )}
      </div>

      {isActive && (
        <div
          role="button"
          onClick={() => setIsActive(false)}
          className={classNames(
            "fixed -z-10 top-0 right-0 w-full h-[100dvh] cursor-auto"
          )}
        />
      )}
    </>
  );
};
