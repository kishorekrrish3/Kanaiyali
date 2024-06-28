import React, { useEffect, useState } from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card1 from "./Cards/Card-1";
import Link from "next/link";

const kavithai = () => {
  const [kavithai, setKavithai] = useState([]);

  useEffect(() => {
    async function fetchKavithai() {
      try {
        const res = await fetch("/api/kavithai");
        if (!res.ok) {
          throw new Error("Failed to fetch kavithai");
        }
        const data = await res.json();
        setKavithai(data.kavithai);
      } catch (error) {
        console.error("Error fetching kavthai:", error);
        // Handle error state or notification here
      }
    }

    fetchKavithai();
  }, []);

  return (
    <div className="kavithai">
      <div className="kavithai-elements">
        <Navbar />
        <img
          src="assets/bg-kavithai.png"
          alt="bg-kavithai"
          className="kavithai-bg"
        />
        <div className="kavithai-title">கவிதை</div>
      </div>
      <div className="kavithai-content">
        {kavithai.map((kavithai) => (
          <Link key={kavithai.id} href={`/kavithai/${kavithai.id}`}>
            <Card1
              key={kavithai.id}
              title={kavithai.title}
              subtitle={kavithai.subtitle}
              name={kavithai.name}
              date={kavithai.date}
              nameImgSrc={kavithai.nameImgSrc}
            />
          </Link>
        ))}
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default kavithai;
