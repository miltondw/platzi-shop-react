import { useRoutes } from "react-router-dom";
import PagesApp from "../Pages";
const AppRouts = () => {
  const { Home, MyAccount, MyOrder, MyOrders, NotFound, SignIn } = PagesApp;
  const route = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return route;
};

export default AppRouts;
