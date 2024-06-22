import classNames from "classnames";
import { useState, useEffect } from "react";
import { useCountryStore } from "../store/useCountryStore";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY } from "../graphql/queries";
import { LoaderAside } from "./LoaderAside";

export const AsideCountryByCode = () => {
  const countryData = useCountryStore((state) => state.countryData);
  const showAsideCountry = useCountryStore((state) => state.showAsideCountry);
  const setShowAsideCountry = useCountryStore((state) => state.setShowAsideCountry);
  const setLoadingCountry = useCountryStore((state) => state.setLoadingCountry);
  const isLoadingCountry = useCountryStore((state) => state.isLoadingCountry);

  const [getCountry] = useLazyQuery(GET_COUNTRY);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (countryData) {
        setLoadingCountry(true);
        try {
          const response = await getCountry({ variables: { code: countryData.code } });
          setCountry(response.data.country);
        } catch (error) {
          console.error("[ERROR AL OBTENER EL PAÍS]: ", error);
          setCountry(null);
        } finally {
          setLoadingCountry(false);
        }
      }
    };

    fetchData();
  }, [countryData]);

  return (
    <>
      {countryData && (
        <aside
          className={classNames(
            "fixed top-32 bg-white shadow-lg w-80 z-30 p-5 flex flex-col gap-5 rounded-l-lg transition-all duration-500",
            {
              "right-4": showAsideCountry,
              "-right-full": !showAsideCountry,
            }
          )}
        >
          <div className="flex justify-end">
            <button
              onClick={() => setShowAsideCountry(false)}
              className="bg-blue-600 px-4 py-2 text-white font-bold uppercase rounded"
            >
              x
            </button>
          </div>
          {isLoadingCountry ? (
            <LoaderAside />
          ) : (
            <div className="flex flex-col gap-7">
              <img src={countryData.siteImage} alt={country?.name} className="w-full h-52 rounded-xl object-fill" />

              <div className="w-full flex items-center gap-3">
                <img src={countryData.flagImage} alt={country?.name} className="w-24 object-cover" />
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-blue-600">{country?.name}</span>
                  <span>{country?.continent?.name}</span>
                </div>
              </div>
            </div>
          )}
        </aside>
      )}
    </>
  );
};
