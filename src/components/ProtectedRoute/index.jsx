import { Navigate } from 'react-router-dom';
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const context = useContext(ShoppingCartContext);
  if (!context.loginState) {
      console.log("redirect")
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;