import React from "react";
import "../CSS/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <img
        src="https://img.freepik.com/free-vector/organic-flat-man-customer-support_23-2148893295.jpg?t=st=1721496055~exp=1721499655~hmac=d590399a95a72d70bdf879241984f1a4609ec23b39da4860f92fc7965023f595&w=740"
        alt="Customer Support"
        className="contact_img"
      />
      <div className="contact_form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <input type="button" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
