import { useQuery } from "@apollo/client";
import { ALL_COUNTRIES } from "../graphql/queries";

export const useCountries = () => {
  const result = useQuery(ALL_COUNTRIES);
  return result;
};
