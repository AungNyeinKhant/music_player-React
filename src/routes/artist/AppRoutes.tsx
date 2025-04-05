import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";

import PrivateRoutes from "../PrivateRoutes";
import Home from "../../pages/artist/Home";

import Tracks from "../../pages/artist/Tracks";
import Albums from "../../pages/artist/Albums";
import CreateAlbum from "../../pages/artist/form/CreateAlbum";

const ArtistAppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/artist/auth/*' element={<AuthRoutes />} />
        <Route
          path='/artist/*'
          element={
            <PrivateRoutes role='artist'>
              <Routes>
                <Route index path='/' element={<Home />} />
                //Albums
                <Route path='/albums' element={<Albums />} />
                <Route path='/albums/create' element={<CreateAlbum />} />
                //Tracks
                <Route path='/tracks' element={<Tracks />} />
              </Routes>
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default ArtistAppRoutes;
