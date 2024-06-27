import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="assets/logo.svg" alt="logo" className="navbar-logo" />
      <div className="navbar-links-container">
        <a href="#" className="navbar-link">
          கவிதை
        </a>
        <a href="#" className="navbar-link">
          ஓவியம்
        </a>
        <a href="#" className="navbar-link">
          சிறுகதை
        </a>
        <a href="#" className="navbar-link">
          புத்தக விமர்சனம்
        </a>
        <a href="#" className="navbar-link">
          வசனம்
        </a>
        <a href="#" className="navbar-link">
          விடுகதை
        </a>
        <a href="#" className="navbar-link">
          நாட்குறிப்பு
        </a>
      </div>
      <div className="navbar-btn-container">
        <button className="navbar-btn">பதிவேற்றவும்</button>
      </div>
    </div>
  );
};

export default Navbar;
