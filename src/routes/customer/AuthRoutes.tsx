import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../pages/customer/auth/Login";
import Register from "../../pages/customer/auth/Register";

const AuthRoutes: FC = () => {
  return (
    <Routes>
      <Route index path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
};

export default AuthRoutes;
