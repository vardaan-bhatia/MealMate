import React, { useEffect } from "react";
import "../CSS/Cart.css";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearcart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.items);

  const groupedCart = cart.reduce((acc, item) => {
    const itemId = item.card.info.id;
    if (!acc[itemId]) {
      acc[itemId] = { ...item, count: 1 };
    } else {
      acc[itemId].count += 1;
    }
    return acc;
  }, {});
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearcart());
  };

  const groupedCartItems = Object.values(groupedCart);

  return (
    <div className="help">
      {groupedCartItems.length > 0 ? (
        <center>
          <button onClick={handleClear}>Clear Cart</button>
          <h1>Cart Items: {cart.length}</h1>
          <div>
            <MenuList card={{ itemCards: groupedCartItems }} />
          </div>
        </center>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
