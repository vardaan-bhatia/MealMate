import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import "../SCSS/Navbar.scss";
import { useSelector } from "react-redux";
import Location from "./Location";
import { CityLabel, Visible } from "../utils/ContextLocation";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Navbar = ({ onSearch }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [SearchText, setSearchText] = useState("");
  const [msgState, setMsgState] = useState(true);
  const { showLocation, setShowLocation } = useContext(Visible);
  const { cityName } = useContext(CityLabel);
  const location = useLocation();
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const cart = useSelector((store) => store.cart.items);

  const Searchfunction = (value) => {
    onSearch(value);
  };

  useEffect(() => {
    let timer;
    if (msgState) {
      timer = setTimeout(() => {
        setMsgState(false);
      }, 10000); // Set msgState to false after 5 seconds
    }

    return () => clearTimeout(timer);
  }, [msgState]);

  const keypress = (e) => {
    if (e.key === "Enter") {
      Searchfunction();
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.location.reload();
    }
  };

  const handleLocationClick = () => {
    setShowLocation(!showLocation); // Toggle location on click
  };

  const handleCloseLocation = () => {
    setShowLocation(false); // Hide location on close button click
  };

  useEffect(() => {
    if (transcript) {
      setSearchText(transcript);
    }
  }, [transcript]);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: false });
  };

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition.</div>;
  }
  return (
    <>
      <div className="header">
        <div className="logo-box">
          <Link to="/" className="logo-link" onClick={handleLogoClick}>
            <img
              className="headerlogo"
              src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
              alt="logo"
            />
            <span className="name">MealMate</span>
          </Link>
        </div>
        <div onClick={handleLocationClick} className="location">
          <span className="city">{cityName.slice(0, 25)}</span>{" "}
          <span style={{ color: "#fc9037" }}>
            <i className="fa-solid fa-location-dot"></i>
          </span>
        </div>
        {showLocation && <Location onClose={handleCloseLocation} />}{" "}
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search for Restaurant, Food and Cuisine..."
            value={SearchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={keypress}
          />
          <button className="search-mic" onClick={startListening}>
            <i className="fa-solid fa-microphone"></i>
          </button>
          <button
            className="glass listhov"
            onClick={() => Searchfunction(SearchText)}
          >
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </button>
        </div>
        <div className="nav-items">
          <ul className="list">
            <li className="listhov">
              <Link to="/contact" className="listhov link">
                <i className="fa fa-envelope"></i> Contact Us
              </Link>
            </li>
            <li className="listhov">
              <Link to="/help" className="listhov link">
                <i className="fa-solid fa-comments"></i> AI-Help
              </Link>
            </li>
            <li className="listhov">
              <Link to="/cart" className="listhov link cart-count">
                <i className="fa-solid fa-cart-shopping">
                  {cart.length > 0 && (
                    <span className="badge">{cart.length}</span>
                  )}
                </i>
                Cart
              </Link>
            </li>
            <li
              onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
              className={isAuthenticated ? "user-profile listhov" : "signin"}
            >
              {isAuthenticated ? (
                <>
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="user-avatar"
                  />
                  <span className="user-name">
                    {msgState && "Welcome,"} {user.name}
                  </span>
                  <button className="logout">Logout</button>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-user"></i>
                  Sign In
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
