import { useCountries } from "../hooks/useCountries";
import { Countries, Loader } from "../components";

export const Home = () => {
  const { data, loading, error } = useCountries();

  if (error)
    return <p className="text-xl font-bold text-red-700">Ocurrió un Error</p>;

  return (
    <section>
      {loading ? <Loader /> : <Countries countries={data.countries} />}
    </section>
  );
};
