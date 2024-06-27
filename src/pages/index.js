import React from "react";
import Navbar from "./Main/Navbar/Navbar";
import HomeScreen from "./Main/HomeScreen/HomeScreen";
import HomeContent from "./Main/HomeContent/HomeContent";
import Footer from "./Main/Footer/Footer";
import "./styles/index.css";

export default function index() {
  return (
    <div className="index">
      <Navbar />
      <HomeScreen />
      <HomeContent />
      <Footer />
    </div>
  );
}
