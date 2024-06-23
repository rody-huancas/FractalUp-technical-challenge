import classNames from "classnames";
import { Link } from "react-router-dom";

export const MenuItem = ({ item, pathname }) => {
  return (
    <li key={item.name} className="w-full">
      <Link
        to={item.path}
        className={classNames("p-3 text-lg font-medium flex rounded-lg", {
          "bg-white text-gray-900": pathname === item.path,
        })}
      >
        {item.name}
      </Link>
    </li>
  );
};
