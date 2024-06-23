export const NoResultsFound = ({ searchParameter }) => {
  return (
    <>
      <p className="text-xl font-bold text-blue-500 text-center">
        No se encontraron resultados para{" "}
        <span className="uppercase text-left">{searchParameter}</span>
      </p>
    </>
  );
};
