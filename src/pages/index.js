import React from "react";
import Navbar from "./Main/Navbar/Navbar";
import HomeScreen from "./Main/HomeScreen/HomeScreen";
import HomeContent from "./Main/HomeContent/HomeContent";
import Footer from "./Main/Footer/Footer";
import "./styles/index.css";
import Head from "next/head";

export default function index() {
  return (
    <div className="index">
      <Head>
        <title>Kanaiyali</title>
        <meta name="description" content="By Arignar Anna Thamizh Mandram" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <HomeScreen />
      <HomeContent />
      <Footer />
    </div>
  );
}
