import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../../pages/customer/Home";

const AppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/auth/*' element={<AuthRoutes />} />
        <Route
          path='/app/*'
          element={
            <PrivateRoutes>
              <Routes>
                <Route index element={<Home />} />
              </Routes>
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
