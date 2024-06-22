import { CardCountry } from "./CardCountry";

export const Countries = ({ countries }) => {
  return (
    <div className="grid grid-cols-3 gap-5 px-5 py-10">
      {countries.map((country) => (
        <CardCountry key={country.code} country={country} />
      ))}
    </div>
  );
};
