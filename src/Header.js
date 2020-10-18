import React, { useState } from "react";
import "./Header.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { auth } from "./firebase";
import Login from "./Login";

function Header() {
  const { user } = useState();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Router>
        <Link to="/">
          <img
            className="header__logo"
            src="https://pngimage.net/wp-content/uploads/2018/06/jobs-logo-png-7.png"
            alt="Job logo"
          />
        </Link>

        <div className="header__nav">
          <Link to="/login">
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
                {/* user?.email || 'Guest'*/}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Post</span>
            <span className="header__optionLineTwo">Jobs</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Apply</span>
            <span className="header__optionLineTwo">Jobs</span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne">Expert</span>
            <span className="header__optionLineTwo">Support</span>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Header;
