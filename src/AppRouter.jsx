import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage";
import Navbar from "./Components/Navbar";
import RestaurantMenu from "./Components/RestaurantMenu";
import SuccessPage from "./Components/SuccessPage";
import { lazy, Suspense } from "react";
import Cart from "./Components/Cart";
import { Visible, LatandLng } from "./utils/ContextLocation";
import { useState } from "react";

const Contact = lazy(() => import("./Components/Contact"));
const Help = lazy(() => import("./Components/Help"));

const AppRouter = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [cordinates, setCordinates] = useState({
    lat: 30.733315,
    lng: 76.779419,
  });

  return (
    <Visible.Provider value={{ showLocation, setShowLocation }}>
      <LatandLng.Provider value={{ cordinates, setCordinates }}>
        <Router>
          <div></div>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/restaurant/:resid" element={<RestaurantMenu />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </Router>
      </LatandLng.Provider>
    </Visible.Provider>
  );
};

export default AppRouter;
