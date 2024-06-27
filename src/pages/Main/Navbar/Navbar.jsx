import React from "react";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="assets/logo.svg" alt="logo" className="navbar-logo" />
      <div className="navbar-links-container">
        <Link href="/kavithai" className="navbar-link kavithai-nav">
          கவிதை
        </Link>
        <Link href="/oviyam" className="navbar-link oviyam-nav">
          ஓவியம்
        </Link>
        <Link href="/sirukadhai" className="navbar-link sirukadhai-nav">
          சிறுகதை
        </Link>
        <Link
          href="/puthaga-vimarsanam"
          className="navbar-link puthaga-vimarsanam-nav"
        >
          புத்தக விமர்சனம்
        </Link>
        <Link href="/vasanam" className="navbar-link vasanam-nav">
          வசனம்
        </Link>
        <Link href="/vidukadhai" className="navbar-link vidukadhai-nav">
          விடுகதை
        </Link>
        <Link href="/naatkurippu" className="navbar-link naatkurippu-nav">
          நாட்குறிப்பு
        </Link>
      </div>
      <div className="navbar-btn-container">
        <button className="navbar-btn">பதிவேற்றவும்</button>
      </div>
    </div>
  );
};

export default Navbar;
