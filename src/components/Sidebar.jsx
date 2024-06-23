import classNames      from "classnames";
import { Link        } from "react-router-dom";
import { MenuItem    } from "./MenuItem";
import { useState    } from "react";
import { useLocation } from "react-router-dom";
// icons
import { MenuIcon  } from "./icons/MenuIcon";
import { CloseIcon } from "./icons/CloseIcon";
// components
// data
import { MENU_DATA } from "../data";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <aside
        className={classNames(
          "bg-zinc-900 text-white h-screen w-72 fixed top-0 p-10 flex flex-col gap-12 transition-all z-50",
          {
            "left-0 delay-300": showMenu,
            "-left-full md:left-0": !showMenu,
          }
        )}
      >
        <Link to={"/"} className="text-3xl uppercase font-black">
          Logo
        </Link>

        <nav className="w-full">
          <ul className="flex flex-col gap-2">
            {MENU_DATA.map((item) => (
              <MenuItem key={item.path} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>
      </aside>

      <button
        type="button"
        onClick={() => setShowMenu(!showMenu)}
        className="md:hidden absolute bottom-10 right-10 bg-zinc-900 text-white p-3 rounded-full z-40"
      >
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </button>

      <div
        role="button"
        onClick={() => setShowMenu(false)}
        className={classNames(
          "fixed bg-black/40 z-40 md:hidden transition-all",
          {
            "w-full h-full right-0 top-0": showMenu,
            "w-0 h-0 left-0 bottom-0 delay-300": !showMenu,
          }
        )}
      />
    </>
  );
};
