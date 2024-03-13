import { createContext, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "../hooks/useLocalStorage";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  const [count, setCount] = useState(0);
  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu · Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({});
  // Shopping Cart · Add products to cart
  const [cartProducts, setCartProducts] = useState([]);
  // Shopping Cart · Order
  const [order, setOrder] = useState([]);
  // Get products
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(null);
  const [itemsCategorys, setItemsCategorys] = useState(null);
  // Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);
  // Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);
  //storage
  const [userData, setUserData] = useState({});
  const [loginState, setLogin] = useState(false);
  const userStorage = useLocalStorage("user");
  const loginStorage = useLocalStorage("login");
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        const categorias = [...new Set(data.map((item) => item.category.name))];
        setItemsCategorys(categorias);
        setUserData(userStorage.items);
        setLogin(loginStorage.items);
        return setItems(data);
      });
  }, [loginStorage.items, userStorage.items]);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };
  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };
  const filterBy = useCallback(
    (searchType, items, searchByTitle, searchByCategory) => {
      if (searchType === "BY_TITLE") {
        return filteredItemsByTitle(items, searchByTitle);
      }

      if (searchType === "BY_CATEGORY") {
        return filteredItemsByCategory(items, searchByCategory);
      }

      if (searchType === "BY_TITLE_AND_CATEGORY") {
        console.log(searchByCategory, searchByTitle);

        return filteredItemsByCategory(items, searchByCategory).filter((item) =>
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        );
      }

      if (!searchType) {
        return items;
      }
    },
    []
  );
  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );
    if (searchByTitle && !searchByCategory) {
      console.log(
        searchByTitle,
        searchByCategory,
        "searchByTitle searchByCategory"
      );
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );
    }
    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );
    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory, filterBy]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
        itemsCategorys,
        userData,
        setUserData,
        loginState,
        setLogin,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
