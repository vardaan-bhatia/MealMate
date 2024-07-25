import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <center>
        <h1 style={{ marginBottom: "10px" }}>ORDER ACCEPTED! ✅🥳</h1>
        <iframe
          src="https://giphy.com/embed/gg8Q0J4HD2rFm5LTHe"
          width="450"
          height="400"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title="Success GIF"
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/woman-cooking-lady-gg8Q0J4HD2rFm5LTHe"></a>
        </p>
        <p style={{ margin: "20px" }}>
          Sit back and relax, we are preparing your order.
        </p>
        <Link to="/">
          <button type="button" className="empty-cart-button">
            GO TO HOME
          </button>
        </Link>
      </center>
    </div>
  );
};

export default SuccessPage;
