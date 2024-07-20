import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./Components/Contact";
import Help from "./Components/Help";
import Cart from "./Components/Cart";
import ErrorPage from "./Components/ErrorPage";
import Navbar from "./Components/Navbar";
import RestaurantMenu from "./Components/RestaurantMenu";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/offer" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurant/:resid" element={<RestaurantMenu />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
