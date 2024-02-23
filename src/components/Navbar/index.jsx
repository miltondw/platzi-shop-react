import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
export const Navbar = () => {
  const menu1 = [
    {
      to: "/",
      text: "Shopi",
      className: "font-semibold text-lg",
    },
    {
      to: "/",
      text: "All",
    },
    {
      to: "/clothes",
      text: "clothes",
    },
    {
      to: "/electronics",
      text: "electronics",
    },
    {
      to: "/furnitures",
      text: "furnitures",
    },
    {
      to: "/toys",
      text: "toys",
    },
    {
      to: "/others",
      text: "others",
    },
  ];

  const menu2 = [
    {
      to: "/email",
      text: "juanmer382@gmail.com",
      className: "text-black/60",
    },
    {
      to: "/my-orders",
      text: "My orders",
    },
    {
      to: "/my-account",
      text: "My account",
    },
    {
      to: "/sign-in",
      text: "Sign in",
    },
    {
      to: "/shoppcar",
      text: <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>,
    },
  ];
  const carContext = useContext(ShoppingCartContext);
  const activeStyle = " underline underline-offset-4";
  return (
    <nav className="flex w-full justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm font-light bg-white/80">
      <ul className="flex items-center gap-3">
        {menu1.map((item, i) => (
          <li key={i} className={i == 0 ? "font-semibold text-lg" : ""}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive && i > 0 ? activeStyle : ""
              }
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {menu2.map((item, i) => (
          <li key={i} className={i == 0 ? "text-black/60" : ""}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              {item.to == "/shoppcar" ? (
                <div className="flex gap-2 items-center">
                  <ShoppingBagIcon className="h-6 w-6 text-black" />
                  {carContext.count}
                </div>
              ) : (
                item.text
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
