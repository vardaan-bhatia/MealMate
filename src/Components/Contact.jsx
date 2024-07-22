import React, { useRef } from "react";
import "../CSS/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5ox9uez", "template_kuqtkq9", form.current, {
        publicKey: "O7zKidmjbxo__NgMj",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <img
        src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?t=st=1721496055~exp=1721499655~hmac=d590399a95a72d70bdf879241984f1a4609ec23b39da4860f92fc7965023f595&w=740"
        alt="Customer Support"
        className="contact_img"
      />
      <div className="contact_form">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
