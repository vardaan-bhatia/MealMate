import React from "react";
import "../CSS/Cart.css";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearcart } from "../utils/cartSlice";
import Payment from "./Payment";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
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

  const calculateTotalPrice = () => {
    return groupedCartItems.reduce((total, item) => {
      const itemPrice = item.card.info.price || item.card.info.defaultPrice;
      return total + (itemPrice / 100) * item.count;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();
  const deliveryFee = Math.min(totalPrice * 0.05, 55);
  const totalAmount = totalPrice + deliveryFee;

  const handlePaymentSuccess = () => {
    dispatch(clearcart()); // Clear the cart upon successful payment
    navigate("/success"); // Redirect to /success page
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {groupedCartItems.length > 0 ? (
          <div>
            <button className="clear-cart-button" onClick={handleClear}>
              Clear Cart
            </button>
            <h1>Cart Items: {cart.length}</h1>
            <MenuList card={{ itemCards: groupedCartItems }} />
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
      {groupedCartItems.length > 0 && (
        <div className="cart-summary">
          <div className="bill-details">
            <h1>Bill</h1>
            <p className="amount">₹{totalPrice.toFixed(2)}</p>
            <h1>Delivery Fee</h1>
            <p className="amount">₹{deliveryFee.toFixed(2)}</p>
            <h1>Total Amount</h1>
            <p className="amount">₹{totalAmount.toFixed(2)}</p>
          </div>
          <button className="payment-button" onClick={handlePaymentSuccess}>
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
