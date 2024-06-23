import { CardCountry } from "./CardCountry";

export const Countries = ({ countries }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {countries.map((country) => (
        <CardCountry key={country.code} country={country} />
      ))}
    </div>
  );
};
