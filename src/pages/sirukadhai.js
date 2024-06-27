import React from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";

const sirukadhai = () => {
  return (
    <div className="sirukadhai">
      <div className="sirukadhai-elements">
        <Navbar />
        <img
          src="assets/bg-sirukadhai.png"
          alt="bg-sirukadhai"
          className="sirukadhai-bg"
        />
        <div className="sirukadhai-title">சிறுகதை</div>
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default sirukadhai;
