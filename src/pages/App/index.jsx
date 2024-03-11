import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import Layout from "../../components/Layout";
import { ShoppingCartProvider } from "../../Context";
import AppRouts from "./app.router";
import CheckoutSideMenu from "../../components/CheckoutSideMenu";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRouts />
          <CheckoutSideMenu />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
