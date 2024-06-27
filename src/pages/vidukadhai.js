import React from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";

const vidukadhai = () => {
  return (
    <div className="vidukadhai">
      <div className="vidhukadhai-elements">
        <Navbar />
        <img
          src="assets/bg-vidukadhai.png"
          alt="bg-vidukadhai"
          className="vidukadhai-bg"
        />
        <div className="vidukadhai-title">விடுகதை</div>
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default vidukadhai;
