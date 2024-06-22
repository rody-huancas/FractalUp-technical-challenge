import "../styles/loader.css";

export const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};
