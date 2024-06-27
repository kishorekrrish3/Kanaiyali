import React from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";

const oviyam = () => {
  return (
    <div className="oviyam">
      <div className="oviyam-elements">
        <Navbar />
        <img src="assets/bg-oviyam.png" alt="bg-oviyam" className="oviyam-bg" />
        <div className="oviyam-title">ஓவியம்</div>
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default oviyam;
