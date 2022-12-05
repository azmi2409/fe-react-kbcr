import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const Private = () => {
  const { auth } = useContext(AuthContext);

  if (!auth?.token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Private;
