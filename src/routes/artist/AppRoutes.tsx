import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";

import Home from "../../pages/customer/Home";
import Genres from "../../pages/customer/Genres";
import Artists from "../../pages/customer/Artists";
import Albums from "../../pages/customer/Albums";
import Favourates from "../../pages/customer/Favourates";
import RecentlyPlays from "../../pages/customer/RecentlyPlays";
import ArtistDetail from "../../pages/customer/ArtistDetail";
import PrivateRoutes from "../PrivateRoutes";

const ArtistAppRoutes: FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/auth/*' element={<AuthRoutes />} /> */}
        <Route
          path='/artist/*'
          element={
            <PrivateRoutes role='artist'>
              <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/genres' element={<Genres />} />
                <Route path='/artists' element={<Artists />} />
                <Route path='/artist-detail' element={<ArtistDetail />} />
                <Route path='/albums' element={<Albums />} />
                <Route path='/favorites' element={<Favourates />} />
                <Route path='/recent' element={<RecentlyPlays />} />
              </Routes>
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
};

export default ArtistAppRoutes;
