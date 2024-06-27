import React from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card1 from "./Cards/Card-1";

const naatkurippu = () => {
  return (
    <div className="naatkurippu">
      <div className="naatkurippu-elements">
        <Navbar />
        <img
          src="assets/bg-naatkurippu.png"
          alt="bg-naatkurippu"
          className="naatkurippu-bg"
        />
        <div className="naatkurippu-title">நாட்குறிப்பு</div>
      </div>
      <div className="naatkurippu-content">
        <Card1 />
        <Card1 />
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default naatkurippu;
