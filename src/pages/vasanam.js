import React from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";

const vasanam = () => {
  return (
    <div className="vasanam">
      <div className="vasanam-elements">
        <Navbar />
        <img
          src="assets/bg-vasanam.png"
          alt="bg-vasanam"
          className="vasanam-bg"
        />
        <div className="vasanam-title">வசனம்</div>
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default vasanam;
