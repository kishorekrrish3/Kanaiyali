import React from "react";
import "./Navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/" className="home-link">
        <img src="/assets/logo.svg" alt="logo" className="navbar-logo" />
      </Link>

      <div className="navbar-links-container">
        <Link href="/kavithai" className="navbar-link ">
          கவிதை
        </Link>
        <Link href="/oviyam" className="navbar-link ">
          ஓவியம்
        </Link>
        <Link href="/sirukadhai" className="navbar-link ">
          சிறுகதை
        </Link>
        <Link href="/puthaga-vimarsanam" className="navbar-link puthaga-">
          புத்தக விமர்சனம்
        </Link>
        <Link href="/vasanam" className="navbar-link ">
          வசனம்
        </Link>
        <Link href="/vidukadhai" className="navbar-link ">
          விடுகதை
        </Link>
        <Link href="/naatkurippu" className="navbar-link ">
          நாட்குறிப்பு
        </Link>
      </div>
      <div className="navbar-btn-container">
        <button
          className="navbar-btn"
          onClick={() =>
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSe9D9vwfHWbOAEmQRMd9HM7TkQbBhUG_tL_X8uDqVlukboi0A/viewform",
              "_blank"
            )
          }
        >
          பதிவேற்றவும்
        </button>
      </div>
    </div>
  );
};

export default Navbar;
