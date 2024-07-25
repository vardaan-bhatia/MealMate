import React from "react";
import "../CSS/Cart.css";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearcart } from "../utils/cartSlice";
import Payment from "./Payment"; // Import Payment component
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Cart = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

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
  const deliveryFee = totalPrice * 0.08;
  const totalAmount = totalPrice + deliveryFee;

  const handlePaymentSuccess = () => {
    dispatch(clearcart()); // Clear the cart upon successful payment
    navigate("/success"); // Redirect to /success page
  };

  return (
    <div className="help">
      {groupedCartItems.length > 0 ? (
        <center>
          <button onClick={handleClear}>Clear Cart</button>
          <h1>Cart Items: {cart.length}</h1>
          <div>
            <MenuList card={{ itemCards: groupedCartItems }} />
          </div>
          <h1>Bill: ₹{totalPrice.toFixed(2)}</h1>
          <h1>Delivery fee: ₹{deliveryFee.toFixed(2)}</h1>
          <h1>Total Amount: ₹{totalAmount.toFixed(2)}</h1>
          <Payment
            amount={totalAmount}
            onPaymentSuccess={handlePaymentSuccess}
          />
        </center>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
