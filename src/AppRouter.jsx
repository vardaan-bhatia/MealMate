import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage";
import Navbar from "./Components/Navbar";
import RestaurantMenu from "./Components/RestaurantMenu";
import SuccessPage from "./Components/SuccessPage";
import { lazy, Suspense } from "react";
import Cart from "./Components/Cart";

const Contact = lazy(() => import("./Components/Contact"));
const Help = lazy(() => import("./Components/Help"));

const AppRouter = () => {
  return (
    <Router>
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
  );
};

export default AppRouter;
