export const continents = (country, filterContinents) => {
  return filterContinents.some((continent) =>
    country.continent.name.toLowerCase().includes(continent.toLowerCase())
  );
};
