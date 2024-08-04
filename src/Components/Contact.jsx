import React, { useRef } from "react";
import "../SCSS/Contact.scss";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all the details.");
      return;
    }

    emailjs
      .sendForm("service_5ox9uez", "template_kuqtkq9", form.current, {
        publicKey: "O7zKidmjbxo__NgMj",
      })
      .then(
        () => {
          toast.success(`Hi, ${name} your message sent successfully!`);
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send email: " + error.text);
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
          <input type="text" name="from_name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="from_email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="submit" className="formsubmit_button">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={2200} />
    </div>
  );
};

export default Contact;
