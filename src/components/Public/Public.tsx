import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
  const { auth } = useContext(AuthContext);

  if (auth?.token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default Public;
