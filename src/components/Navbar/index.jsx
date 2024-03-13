import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import {
  Bars3BottomLeftIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import useLocalStorage from "../../hooks/useLocalStorage";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const context = useContext(ShoppingCartContext);
  const login = useLocalStorage("login");
  const activeStyle = "underline underline-offset-4";
  const sinup = () => {
    login.saveItems(false);
    context.setLogin(false);
  };
  return (
    <>
      <button
      type="button"
        onClick={toggleMenu}
        className="text-black p-2 focus:outline-none fixed top-0 bg-white/80 z-10 w-full lg:hidden "
      >
        <Bars3BottomLeftIcon className="h-7 w-7 text-gray-500 active:scale-x-125 " />
      </button>
      <nav
        onClick={toggleMenu}
        className={`
      flex justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm font-light bg-white/80 
      mt-11 flex-col w-auto lg:w-full lg:flex-row lg:mt-0 lg:translate-x-0
      transition-transform duration-300 ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }
      `}
      >
        <ul className="flex items-center gap-3 capitalize flex-col lg:flex-row">
          {/* Menu 1 */}
          <li className="font-semibold text-lg">
            <NavLink to="/" onClick={() => context.setSearchByCategory("")}>
              Shopi
            </NavLink>
          </li>
          <li>
            <NavLink to="/" onClick={() => context.setSearchByCategory("")}>
              All
            </NavLink>
          </li>
          {/* Menu 2 */}
          {context.itemsCategorys?.map((item, i) => (
            <li key={i}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                onClick={() => context.setSearchByCategory(item)}
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-3 flex-col lg:flex-row">
          {/* Menu 3 */}
          {!context.loginState ? (
            <li>
              <NavLink to="/sign-in">
                {context.userData ? "Sign In" : "Sign Up"}
              </NavLink>
            </li>
          ) : (
            <>
              <li className="text-black/60">
                {context.userData?.email.split("@")[0]}
              </li>
              <li>
                <NavLink to="/my-orders">My orders</NavLink>
              </li>
              <li>
                <NavLink to="/my-account">My account</NavLink>
              </li>
              <li>
                <NavLink to="/sign-in" onClick={sinup}>
                  Sign Out
                </NavLink>
              </li>
              <li>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    context.openCheckoutSideMenu();
                    toggleMenu()
                  }}
                  className="flex gap-2 items-center"
                >
                  <ShoppingBagIcon className="h-6 w-6 text-black" />
                  {context.cartProducts.length}
                </div>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};