import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links-container">
        <Link href="/kavithai" className="footer-link ">
          கவிதை
        </Link>
        <Link href="/oviyam" className="footer-link ">
          ஓவியம்
        </Link>
        <Link href="/sirukadhai" className="footer-link ">
          சிறுகதை
        </Link>
        <Link href="/puthaga-vimarsanam" className="footer-link ">
          புத்தக விமர்சனம்
        </Link>
        <Link href="/vasanam" className="footer-link ">
          வசனம்
        </Link>
        <Link href="/vidukadhai" className="footer-link ">
          விடுகதை
        </Link>
        <Link href="/naatkurippu" className="footer-link ">
          நாட்குறிப்பு
        </Link>
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
