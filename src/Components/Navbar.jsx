import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/Navbar.css";
import { useSelector } from "react-redux";
import Location from "./Location";
import { Visible } from "../utils/ContextLocation";

const Navbar = ({ onSearch }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [SearchText, setSearchText] = useState("");
  const [msgState, setMsgState] = useState(true);
  const { showLocation, setShowLocation } = useContext(Visible);
  const location = useLocation();

  const cart = useSelector((store) => store.cart.items);

  const Searchfunction = () => {
    onSearch(SearchText);
  };

  useEffect(() => {
    let timer;
    if (msgState) {
      timer = setTimeout(() => {
        setMsgState(false);
      }, 5000); // Set msgState to false after 5 seconds
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
        <div>
          <span>other</span>
          <img
            src="https://www.svgrepo.com/show/409025/angle-down.svg"
            style={{ height: "40px", width: "40px", cursor: "pointer" }}
            alt=""
            onClick={handleLocationClick} // Toggle location on click
          />
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
          <button className="glass listhov" onClick={Searchfunction}>
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
