// src/Payment.jsx
import React from "react";

const Payment = ({ amount, onPaymentSuccess }) => {
  const handlePayment = () => {
    const amountInPaise = Math.round(amount * 100); // Convert amount to paise

    if (amountInPaise < 100) {
      alert("The minimum amount should be ₹1.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay key ID
      amount: amountInPaise, // Amount in paise (₹1 = 100 paise)
      currency: "INR",
      name: "MealMate",
      description: "Test Transaction",
      handler: function (response) {
        // You can send the response details to your server here
        console.log("Payment successful:", response);
        onPaymentSuccess();
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button onClick={handlePayment}>Pay ₹{amount.toFixed(2)}</button>
    </div>
  );
};

export default Payment;
