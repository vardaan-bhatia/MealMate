import React from "react";
import "../CSS/Cart.css";
import EmptyCart from "./EmptyCart";
import { useSelector } from "react-redux";
import MenuList from "./MenuList";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="help">
      {cart.length > 0 ? (
        <center>
          <h1>Cart Items:</h1>{" "}
          <div>
            <MenuList card={{ itemCards: cart }} />
          </div>
        </center>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
