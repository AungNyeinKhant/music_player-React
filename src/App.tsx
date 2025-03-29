import { FC } from "react";

import AppRoutes from "./routes/customer/AppRoutes";
import ArtistAppRoutes from "./routes/artist/AppRoutes";
import AdminAppRoutes from "./routes/admin/AppRoutes";
import AuthProvider from "./context/AuthContext";

const App: FC = () => {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
        <ArtistAppRoutes />
        <AdminAppRoutes />
      </AuthProvider>
    </>
  );
};

export default App;
