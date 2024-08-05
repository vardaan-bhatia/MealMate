import React from "react";
import "../SCSS/Cart.scss";

const Payment = ({ amount, onPaymentSuccess }) => {
  const handlePayment = () => {
    const amountInPaise = Math.round(amount * 100);

    if (amountInPaise < 100) {
      alert("The minimum amount should be ₹1.");
      return;
    }

    const options = {
      key: "rzp_test_oUfbqC4lUeA9Sa",
      amount: amountInPaise,
      currency: "INR",
      name: "MealMate",
      description: "Test Transaction",
      image:
        "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png",
      handler: function (response) {
        console.log("Payment successful:", response);
        onPaymentSuccess();
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#2C7CC5",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button onClick={handlePayment} className="payment_button">
        Proceed to pay
      </button>
    </div>
  );
};

export default Payment;
