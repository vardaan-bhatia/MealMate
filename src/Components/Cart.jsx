import React from "react";
import "../SCSS/Cart.scss";
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
      {groupedCartItems.length > 0 ? (
        <div>
          <div className="cart-header">
            <button className="clear-cart-button" onClick={handleClear}>
              Clear Cart
            </button>
            <h1>Cart Items: {cart.length}</h1>
          </div>
          <div>
            <MenuList card={{ itemCards: groupedCartItems }} />
          </div>
          <div className="bill-details">
            <h1>Bill: ₹{totalPrice.toFixed(2)}</h1>
            <h1>Delivery fee: ₹{deliveryFee.toFixed(2)}</h1>
            <h1>Total Amount: ₹{totalAmount.toFixed(2)}</h1>
          </div>
          <div className="payment-section">
            <Payment
              amount={totalAmount}
              onPaymentSuccess={handlePaymentSuccess}
            />
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
