import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Offer from "./Components/Offer";
import Help from "./Components/Help";
import Cart from "./Components/Cart";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/help" element={<Help />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
