import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links-container">
        <a href="#" className="footer-link">
          கவிதை
        </a>
        <a href="#" className="footer-link">
          ஓவியம்
        </a>
        <a href="#" className="footer-link">
          சிறுகதை
        </a>
        <a href="#" className="footer-link">
          புத்தக விமர்சனம்
        </a>
        <a href="#" className="footer-link">
          வசனம்
        </a>
        <a href="#" className="footer-link">
          விடுகதை
        </a>
        <a href="#" className="footer-link">
          நாட்குறிப்பு
        </a>
      </div>
      <div className="footer-icons">
        <img
          src="/assets/facebook.svg"
          alt="facebook"
          className="footer-icon"
        />
        <img
          src="/assets/instagram.svg"
          alt="instagram"
          className="footer-icon"
        />
        <img
          src="/assets/whatsapp.svg"
          alt="whatsapp"
          className="footer-icon"
        />
      </div>
      <p className="copyright">© 2024 Tamil Mandram. All rights reserved.</p>
    </div>
  );
};

export default Footer;
