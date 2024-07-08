import React from "react";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";

const Footer = ({ Mumbai }) => {
  return (
    <div className="footermain">
      <div className="playstore">
        <h1>
          For better experience, download the <br />
          <span>MealMate app</span> now
        </h1>
        <div className="download">
          <a
            href="https://play.google.com/store/apps/details?id=in.swiggy.android"
            target="_blank"
          >
            <img
              className="playstore-img"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt="Download from Play Store"
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920"
            target="_blank"
          >
            <img
              className="playstore-img"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt="Download from App Store"
            />
          </a>
        </div>
      </div>
      <div className="end">
        <div className="enddiv">
          <div className="company-details">
            <div className="logo-text">
              <img
                style={{ width: "40px", marginRight: "10px" }}
                src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
                alt="MealMate Logo"
              />
              <strong>MealMate</strong>
            </div>
            <p>© 2024 Vardaan Bhatia made with ❤️</p>
            <div className="list-details">
              <div className="list-section">
                <strong>Company</strong>
                <Link to="/help" style={{ textDecoration: "none" }}>
                  <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>MealMate One</li>
                    <li>MealMate Instamart</li>
                    <li>MealMate Genie</li>
                  </ul>
                </Link>
                <div className="social">
                  <strong> Social :</strong>
                  <a
                    href="https://www.linkedin.com/in/vardaan-bhatia-028446203/"
                    target="_blank"
                  >
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-42-151143.png?f=webp&w=256"
                      alt="Loading..."
                      className="image_social"
                    />
                  </a>
                  <a href="https://github.com/vardaan-bhatia" target="_blank">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-github-40-432516.png?f=webp&w=256"
                      className="image_social"
                      alt="Loading..."
                    />
                  </a>
                  <a href="https://x.com/vardaanbhatia__" target="_blank">
                    <img
                      src=" https://cdn.iconscout.com/icon/free/png-512/free-twitter-9420781-7651211.png?f=webp&w=256"
                      alt="Loading..."
                      className="image_social"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/vardaanbhatia._/"
                    target="_blank"
                  >
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-512/free-instagram-52-151106.png?f=webp&w=256"
                      className="image_social"
                      alt="Loading..."
                    />
                  </a>
                </div>
              </div>
              <div className="list-section">
                <strong>Contact Us</strong>
                <Link to="/help" style={{ textDecoration: "none" }}>
                  <ul>
                    <li>Contact us</li>
                    <li>Help & Support</li>
                    <li>Partner with us</li>
                    <li>Ride with us</li>
                  </ul>
                </Link>
              </div>
              <div className="list-section">
                <strong>Legal</strong>
                <Link to="/help" style={{ textDecoration: "none" }}>
                  <ul>
                    <li>Terms & Conditions</li>
                    <li>Cookie Policy</li>
                    <li>Privacy Policy</li>
                    <li>Investor Relations</li>
                  </ul>
                </Link>
              </div>
              <div className="list-section">
                <strong>We deliver to</strong>
                <ul>
                  {Array.isArray(Mumbai) && Mumbai.length > 0 ? (
                    Mumbai.slice(0, 6).map((city, index) => (
                      <li key={index}>{city.text}</li>
                    ))
                  ) : (
                    <li>No cities available</li>
                  )}
                </ul>
                <select
                  name="cities"
                  id="cities-dropdown"
                  className="cities-dropdown"
                >
                  <option value="">More cities...</option>
                  {Array.isArray(Mumbai) && Mumbai.length > 0 ? (
                    Mumbai.slice(6).map((city, index) => (
                      <option key={index} value={city.text}>
                        {city.text}
                      </option>
                    ))
                  ) : (
                    <option value="">No cities available</option>
                  )}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
