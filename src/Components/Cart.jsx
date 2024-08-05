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
    dispatch(clearcart());
    navigate("/success");
  };

  return (
    <div className="cart-container">
      {groupedCartItems.length > 0 ? (
        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-header">
              <button className="clear-cart-button" onClick={handleClear}>
                Clear Cart
              </button>
              <h1>Cart Items: {cart.length}</h1>
            </div>
            <div>
              <MenuList card={{ itemCards: groupedCartItems }} />
            </div>
          </div>
          <div className="cart-summary">
            <div className="bill-details">
              <h1 className="summary">BILL SUMMARY</h1>
              <div className="amt_details">
                <p>Amount: ₹{totalPrice.toFixed(2)}</p>
                <p>Delivery fee: ₹{deliveryFee.toFixed(2)}</p>
                <p>Total Amount: ₹{totalAmount.toFixed(2)}</p>
              </div>
            </div>
            <div className="payment-section">
              <Payment
                onPaymentSuccess={handlePaymentSuccess}
                amount={totalAmount}
              />
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
