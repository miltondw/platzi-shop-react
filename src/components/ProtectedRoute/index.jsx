import { Navigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const login = useLocalStorage("login");
  if (!login.getItem()) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
