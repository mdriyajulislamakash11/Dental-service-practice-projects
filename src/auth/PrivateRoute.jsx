import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const locations = useLocation();
  console.log(locations);

  if (loading) {
    return <p>lodaing......</p>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={locations.pathname}></Navigate>;
};

export default PrivateRoute;
