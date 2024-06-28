import React, { useEffect, useState } from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card1 from "./Cards/Card-1";
import Link from "next/link";

const vidukadhai = () => {
  const [vidukadhai, setVidukadhai] = useState([]);

  useEffect(() => {
    async function fetchVidukadhai() {
      try {
        const res = await fetch("/api/vidukadhai");
        if (!res.ok) {
          throw new Error("Failed to fetch vidukadhai");
        }
        const data = await res.json();
        setVidukadhai(data.vidukadhai);
      } catch (error) {
        console.error("Error fetching vidukadhai:", error);
        // Handle error state or notification here
      }
    }

    fetchVidukadhai();
  }, []);

  return (
    <div className="vidukadhai">
      <div className="vidhukadhai-elements">
        <Navbar />
        <img
          src="assets/bg-vidukadhai.png"
          alt="bg-vidukadhai"
          className="vidukadhai-bg"
        />
        <div className="vidukadhai-title">விடுகதை</div>
      </div>
      <div className="vidukadhai-content">
        {vidukadhai.map((vidukadhai) => (
          <Link key={vidukadhai.id} href={`/vidukadhai/${vidukadhai.id}`}>
            <Card1
              key={vidukadhai.id}
              title={vidukadhai.title}
              subtitle={vidukadhai.subtitle}
              name={vidukadhai.name}
              date={vidukadhai.date}
              nameImgSrc={vidukadhai.nameImgSrc}
            />
          </Link>
        ))}
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default vidukadhai;
