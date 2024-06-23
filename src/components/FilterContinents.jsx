import classNames from "classnames";
import { CONTINENTS_DATA } from "../data";

export const FilterContinents = ({ filterContinents, onClickContinent, onResetFilter }) => {
    return (
    <div className="w-full flex justify-center z-30 pt-2">
      <div className="w-full lg:w-3/4 p-5 rounded-xl shadow-xl flex flex-col gap-5 absolute bg-white">
        <div className="flex items-center justify-between">
          <h3 className="lg:text-lg font-bold text-gray-800/80">
            Filtrar por continentes
          </h3>
          <button
            type="button"
            onClick={onResetFilter}
            className="bg-red-500 px-2 lg:px-5 py-2 rounded-lg text-white"
          >
            Limpiar
          </button>
        </div>
        <div className="grid grid-cols-3 gap-5 place-items-center">
          {CONTINENTS_DATA.map((continents, index) => {
            const existing_name = filterContinents.includes(continents.flag);
            return (
              <div
                key={index}
                className={"w-full cursor-pointer"}
                onClick={() => onClickContinent(continents.flag)}
              >
                <img
                  src={continents.image}
                  alt={continents.name}
                  className={classNames(
                    "w-full h-20 sm:h-28 lg:h-40 border-4 rounded-xl",
                    {
                      "border-blue-500": existing_name,
                      "border-transparent": !existing_name,
                    }
                  )}
                />
                <span>{continents.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
