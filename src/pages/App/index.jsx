import { useRoutes, BrowserRouter } from "react-router-dom";
import PagesApp from "../Pages";
import { Navbar } from "../../components/Navbar";
import Layout from "../../components/Layout";
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
      path: "/not-found",
      element: <NotFound />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
  ]);
  return route;
};
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Layout>
      <AppRouts />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
