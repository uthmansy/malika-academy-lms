import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../../../store/auth";

interface Prop {
  element: React.ReactNode;
}

export const PrivateRoute = ({ element }: Prop) => {
  const { user } = useAuthStore();

  return user ? element : <Navigate to="/dashboard/login" />;
};

export default PrivateRoute;
