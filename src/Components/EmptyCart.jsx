import React from "react";
import noitems from "../utils/noitems.webp";
import { Link } from "react-router-dom";
import "../SCSS/Emptycart.scss";

const EmptyCart = () => {
  return (
    <div className="container">
      <img src={noitems} alt="No Items" className="empty-cart-image" />
      <h3 className="empty-cart-heading">Your cart is empty</h3>
      <p className="empty-cart-text">
        You can go to home page to view more restaurants
      </p>
      <Link to="/">
        <button type="button" className="empty-cart-button">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
