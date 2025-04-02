import { FC, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

type PrivateRouteProps = {
  role: "user" | "artist" | "admin";
  children: ReactNode;
};

export type JwtPayload = {
  userId: string;
  role: string;
};

export const PrivateRoutes: FC<PrivateRouteProps> = ({
  children,
  role,
}: PrivateRouteProps) => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (role == "user" && auth?.user?.role !== role) {
      navigate(-1);
    } else if (role == "artist" && auth?.user?.role !== role) {
      //artist login
      navigate("/artist/auth/login", { replace: true });
    } else if (role == "admin" && auth?.user?.role !== role) {
      //artist login
      navigate("/admin/login", { replace: true });
    }
  }, [navigate, auth]);

  return children;
};

export default PrivateRoutes;
