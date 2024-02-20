import { NavLink } from "react-router-dom";
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
      className: "",
    },
    {
      to: "/clothes",
      text: "clothes",
      className: "",
    },
    {
      to: "/electronics",
      text: "electronics",
      className: "",
    },
    {
      to: "/furnitures",
      text: "furnitures",
      className: "",
    },
    {
      to: "/toys",
      text: "toys",
      className: "",
    },
    {
      to: "/others",
      text: "others",
      className: "",
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
      className: "",
    },
    {
      to: "/my-account",
      text: "My account",
      className: "",
    },
    {
      to: "/sign-in",
      text: "Sign in",
      className: "",
    },
    {
      to: "/shoppcar",
      text: "🛒",
      className: "",
    },
  ];
  const activeStyle = " underline underline-offset-4";
  return (
    <nav className="flex w-full justify-between items-center fixed z-10 top-0 py-5 px-8 text-sm font-light ">
      <ul className="flex items-center gap-3">
        {menu1.map((item, i) => (
          <li key={i} className={i == 0 ? "font-semibold text-lg" : ""}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive && i>0 ? activeStyle : "")}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        {menu2.map((item, i) => (
          <li key={i} className={i==0?'text-black/60':''}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
