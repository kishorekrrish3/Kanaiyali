import React from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card1 from "./Cards/Card-1";

const kavithai = () => {
  return (
    <div className="kavithai">
      <div className="kavithai-elements">
        <Navbar />
        <img
          src="assets/bg-kavithai.png"
          alt="bg-kavithai"
          className="kavithai-bg"
        />
        <div className="kavithai-title">கவிதை</div>
      </div>

      <div className="kavithai-content">
        <Card1 />
      </div>

      <Footer className="footer-element" />
    </div>
  );
};

export default kavithai;
