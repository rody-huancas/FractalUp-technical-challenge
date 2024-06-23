import { useEffect, useState } from "react";
// hooks
import { useCountries } from "../hooks/useCountries";
// store
import { useCountryStore } from "../store/useCountryStore";
// components
import { AsideCountryByCode, Countries, ErrorCountry, Loader, NoResultsFound, SearchForm } from "../components";

export const Home = () => {
  const searchParameter = useCountryStore((state) => state.searchParameter);
  const { data, loading, error } = useCountries();
  const [filteredCountry, setFilteredCountry] = useState([]);

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

  if (error) return <ErrorCountry />;

  return (
    <section className="p-10">
      <SearchForm />

      {filteredCountry.length === 0 && searchParameter !== null && (
        <NoResultsFound searchParameter={searchParameter} />
      )}

      {loading ? <Loader /> : <Countries countries={filteredCountry} />}

      <AsideCountryByCode />
    </section>
  );
};
