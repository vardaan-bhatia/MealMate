import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../CSS/Navbar.css";

const Navbar = ({ onsearch }) => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [SearchText, setSearchText] = useState("");

  const Searchfunction = () => {
    onsearch(SearchText);
  };
  const keypress = (e) => {
    if (e.key == "Enter") {
      Searchfunction();
    }
  };
  return (
    <div className="header">
      <div className="logo-box">
        <img
          className="headerlogo"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
          alt="logo"
        />
        <span className="name">MealMate</span>
      </div>

      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants and food..."
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
            <i className="fa-solid fa-tag"></i> Offer
          </li>
          <li className="listhov">
            <i className="fa-solid fa-comments"></i> Help
          </li>
          <li className="listhov">
            <i className="fa-solid fa-cart-shopping"></i> Cart
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
                <span className="user-name">Welcome, {user.name}</span>
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
  );
};

export default Navbar;
