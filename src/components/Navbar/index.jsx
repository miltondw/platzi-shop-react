import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import useLocalStorage from "../../hooks/useLocalStorage";
export const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const login = useLocalStorage("login");

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
  ];

  const menu2 = [
    {
      to: "/email",
      text: context.userData?.email,
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
      text: "Sign Out",
      click: () => sinup(),
    },
    {
      to: "/shoppcar",
      text: <ShoppingBagIcon className="h-6 w-6 text-black"></ShoppingBagIcon>,
    },
  ];

  const menu3 = [
    {
      to: "/sign-in",
      text: !context.userData ? "Sign Up" : "Sign In",
    },
  ];
  const sinup = () => {
    login.saveItems(false);
    context.setLogin(false);
  };

  const activeStyle = " underline underline-offset-4";
  return (
    <nav className="flex w-full justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm font-light bg-white/80">
      <ul className="flex items-center gap-3 capitalize">
        {menu1.map((item, i) => (
          <li key={i} className={"font-semibold text-lg"}>
            <NavLink
              to={item.to}
              onClick={() => context.setSearchByCategory("")}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        {context.itemsCategorys?.map((item, i) => (
          <li key={i}>
            <NavLink
              to={`/${item}`}
              className={({ isActive }) => (isActive ? activeStyle : "")}
              onClick={() => context.setSearchByCategory(item)}
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {!context.loginState
          ? menu3.map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? activeStyle : "")}
                >
                  {item.to == "/shoppcar" ? (
                    <div className="flex gap-2 items-center">
                      <ShoppingBagIcon className="h-6 w-6 text-black" />
                      {context.cartProducts.length}
                    </div>
                  ) : (
                    item.text
                  )}
                </NavLink>
              </li>
            ))
          : menu2.map((item, i) => (
              <li key={i} className={i == 0 ? "text-black/60" : ""}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? activeStyle : "")}
                  onClick={item?.click}
                >
                  {item.to == "/shoppcar" ? (
                    <div className="flex gap-2 items-center">
                      <ShoppingBagIcon className="h-6 w-6 text-black" />
                      {context.cartProducts.length}
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
