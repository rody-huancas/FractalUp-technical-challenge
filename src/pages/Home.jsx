import { useEffect, useState } from "react";
// helpers
import { continents } from "../helpers";
// hooks
import { useCountries } from "../hooks/useCountries";
// store
import { useCountryStore } from "../store/useCountryStore";
// components
import { AsideCountryByCode, Countries, ErrorCountry, Loader, NoResultsFound, SearchForm } from "../components";

export const Home = () => {
  const searchParameter  = useCountryStore((state) => state.searchParameter);
  const filterContinents = useCountryStore((state) => state.filterContinents);

  const { data, loading, error } = useCountries();
  const [filteredCountry, setFilteredCountry] = useState([]);

  if (error) return <ErrorCountry />;

  useEffect(() => {
    if (searchParameter || searchParameter !== null) {
      const filteredCountries = data.countries.filter((country) =>
        country.name.toLowerCase().includes(searchParameter.toLowerCase())
      );
      setFilteredCountry(filteredCountries);
    } else {
      setFilteredCountry(data ? data.countries : []);
    }
  }, [searchParameter]);

  useEffect(() => {
    if (data && data.countries) setFilteredCountry(data.countries);
  }, [data]);

  const filteredByContinents = filteredCountry.filter((country) => {
    return filterContinents.length === 0 ? true : continents(country, filterContinents)
  });

  return (
    <section className="pb-10">
      <div className="bg-white sticky top-0 right-0 z-30 py-5 px-10">
        <SearchForm />
      </div>

      {filteredByContinents.length === 0 && searchParameter !== null && (
        <NoResultsFound searchParameter={searchParameter} />
      )}

      {loading ? <Loader /> : <Countries countries={filteredByContinents} />}

      <AsideCountryByCode />
    </section>
  );
};
