import classNames from "classnames";
import { useState } from "react";

export const AsideCountryByCode = ({ country }) => {
  const [show, setShow] = useState(false);

  return (
    <aside
      className={classNames(
        "fixed top-32 bg-white/90 w-72 z-30 p-5 flex flex-col gap-5 rounded-l-lg transition-all",
        {
          "right-4": show,
          "-right-full": !show,
        }
      )}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setShow(false)}
          className="bg-blue-600 px-4 py-2 text-white font-bold uppercase rounded"
        >
          x
        </button>
      </div>
      AsideCountryByCode
    </aside>
  );
};
