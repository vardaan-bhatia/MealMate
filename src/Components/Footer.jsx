import React from "react";

const Footer = () => {
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
                <ul>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Team</li>
                  <li>Swiggy One</li>
                  <li>Swiggy Instamart</li>
                  <li>Swiggy Genie</li>
                </ul>
              </div>
              <div className="list-section">
                <strong>Contact Us</strong>
                <ul>
                  <li>Contact us</li>
                  <li>Help & Support</li>
                  <li>Partner with us</li>
                  <li>Ride with us</li>
                </ul>
              </div>
              <div className="list-section">
                <strong>Legal</strong>
                <ul>
                  <li>Terms & Conditions</li>
                  <li>Cookie Policy</li>
                  <li>Privacy Policy</li>
                  <li>Investor Relations</li>
                </ul>
              </div>
              <div className="list-section">
                <strong>We deliver to:</strong>
                <ul>
                  <li>Banglore</li>
                  <li>Noida</li>
                  <li>Pune</li>
                  <li>Kolkata</li>
                  <li>Delhi</li>
                </ul>
                <select
                  name="cities"
                  id="cities-dropdown"
                  className="cities-dropdown"
                >
                  <option value="bangalore">Bangalore</option>
                  <option value="noida">Noida</option>
                  <option value="pune">Pune</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="delhi">Delhi</option>
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
