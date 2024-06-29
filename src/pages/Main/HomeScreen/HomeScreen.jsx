import React from "react";
import "./HomeScreen.css";
import Link from "next/link";

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <img src="assets/bg-1.png" alt="bg-1" className="home-screen-bg" />
      <div className="home-screen-elements">
        <div className="home-screen-title">
          அறிஞர் அண்ணா தமிழ் மன்றம்
          <div className="home-screen-nav">
            <Link href="/kavithai" className="home-screen-link ">
              கவிதை
            </Link>
            <Link href="/oviyam" className="home-screen-link ">
              ஓவியம்
            </Link>
            <Link href="/sirukadhai" className="home-screen-link ">
              சிறுகதை
            </Link>
            <Link href="/puthaga-vimarsanam" className="home-screen-link ">
              புத்தக விமர்சனம்
            </Link>
            <Link href="/vasanam" className="home-screen-link ">
              வசனம்
            </Link>
            <Link href="/vidukadhai" className="home-screen-link ">
              விடுகதை
            </Link>
            <Link href="/naatkurippu" className="home-screen-link ">
              நாட்குறிப்பு
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
