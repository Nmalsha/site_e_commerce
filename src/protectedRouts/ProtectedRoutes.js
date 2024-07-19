import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../component/userContext/UserContext";

const ProtectedRoute = ({ children, roles }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/client-space/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
