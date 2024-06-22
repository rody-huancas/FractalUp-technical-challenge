import { useEffect, useState } from "react";
// component
import { LoaderCard } from "./LoaderCard";
// api
import { getAllFlagsByCountry, getSiteCountry } from "../api/api";
// store
import { useCountryStore } from "../store/useCountryStore";

export const CardCountry = ({ country }) => {
  const setCountryData = useCountryStore(state => state.setCountryData);
  const setShowAsideCountry = useCountryStore(state => state.setShowAsideCountry);

  const [loading, setLoading] = useState(true);
  const [flagData, setFlagData] = useState(null);
  const [countrySite, setCountrySite] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFlagsByCountry();
        setFlagData(response);
      } catch (error) {
        console.error("[ERROR]: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchCountrySite = async () => {
      try {
        if (country.name) {
          const countries = await getSiteCountry(country.name);
          setCountrySite(countries);
        }
      } catch (error) {
        console.log("[ERROR]:", error);
        setCountrySite(null);
      }
    };
    fetchCountrySite();
  }, []);

  if (loading || !flagData) return <LoaderCard />;

  const filtered_flag = flagData.find((flag) => flag.flag === country.emoji);

  const handleClick = () => {
    const dataToStore = {
      code: country.code,
      flagImage: filtered_flag.flags.svg,
      siteImage: countrySite ? countrySite : "/images/image-not-found.webp",
    };

    setCountryData(dataToStore);
    setShowAsideCountry(true);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full shadow-xl rounded-2xl flex flex-col overflow-hidden cursor-pointer card_country"
    >
      <div className="h-52 overflow-hidden">
        <img
          src={countrySite ? countrySite : "/images/image-not-found.webp"}
          alt={`Touristic image of ${country.name}`}
          className="rounded-t-2xl h-full w-full object-cover card_country_img"
        />
      </div>
      <div className="flex items-center gap-3 p-5">
        <img
          src={filtered_flag.flags.svg}
          alt={country.name}
          className="w-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-blue-600">{country.name}</h3>
          <p>{country.continent.name}</p>
        </div>
      </div>
    </div>
  );
};
