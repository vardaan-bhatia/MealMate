import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo-box">
        <img
          className="headerlogo"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="logo"
        />
        <span className="name">MealMate</span>
      </div>

      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food..."
        />
        <span className="glass">
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </span>
      </div>

      <div className="nav-items">
        <ul className="list">
          <li>
            <i className="fa-solid fa-tag"></i> Offer
          </li>
          <li>
            <i className="fa-solid fa-comments"></i> Help
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i> Cart
          </li>
          <li>
            <i className="fa-solid fa-user"></i> Sign In
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
