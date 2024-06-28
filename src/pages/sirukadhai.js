import React, { useEffect, useState } from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card1 from "./Cards/Card-1";
import Link from "next/link";

const sirukadhai = () => {
  const [sirukadhai, setSirukadhai] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchSirukadhai() {
      try {
        const res = await fetch("/api/sirukadhai");
        if (!res.ok) {
          throw new Error("Failed to fetch sirukadhai");
        }
        const data = await res.json();
        setSirukadhai(data.sirukadhai);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching kavthai:", error);
        // Handle error state or notification here
      }
    }

    fetchSirukadhai();
  }, []);

  if (loading) {
    return <div className="loading-element">Loading...</div>; // Render loading text while data is being fetched
  }

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
      <div className="sirukadhai-content">
        {sirukadhai.map((sirukadhai) => (
          <Link key={sirukadhai.id} href={`/sirukadhai/${sirukadhai.id}`}>
            <Card1
              key={sirukadhai.id}
              title={sirukadhai.title}
              subtitle={sirukadhai.subtitle}
              name={sirukadhai.name}
              date={sirukadhai.date}
              nameImgSrc={sirukadhai.nameImgSrc}
            />
          </Link>
        ))}
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default sirukadhai;
