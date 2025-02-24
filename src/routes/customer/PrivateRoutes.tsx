import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { isAuthenticated } from '../utils/auth';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoutes: FC<PrivateRouteProps> = ({ children }) => {
  //   const auth = isAuthenticated();
  const location = useLocation();

  //   if (!auth) {
  //     return <Navigate to="/auth/login" state={{ from: location }} replace />;
  //   }

  return children;
};

export default PrivateRoutes;
