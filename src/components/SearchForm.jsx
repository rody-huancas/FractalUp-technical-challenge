import { useCountryStore } from "../store/useCountryStore";
import { SearchIcon } from "./icons/SearchIcon";

export const SearchForm = () => {
  const searchParameter = useCountryStore((state) => state.searchParameter);
  const setSearchParameter = useCountryStore((state) => state.setSearchParameter);

  return (
    <div className="mb-10 xl:w-3/4 mx-auto">
      <form className="flex items-center justify-between gap-5 border-2 shadow-lg rounded-full pl-10 pr-5 py-2">
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
            onChange={e => setSearchParameter(e.target.value)}
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
  );
};
