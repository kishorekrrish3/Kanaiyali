import React from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card2 from "./Cards/Card-2";

const puthagaVimarsanam = () => {
  return (
    <div className="puthaga-vimarsanam">
      <div className="puthaga-vimarsanam-elements">
        <Navbar />
        <img
          src="assets/bg-puthaga-vimarsanam.png"
          alt="bg-puthaga-vimarsanam"
          className="puthaga-vimarsanam-bg"
        />
        <div className="puthaga-vimarsanam-title">புத்தக விமர்சனம்</div>
      </div>
      <div className="puthaga-vimarsanam-content">
        <Card2 />
        <Card2 />
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default puthagaVimarsanam;
