import React, { useEffect, useState } from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card1 from "./Cards/Card-1";
import Link from "next/link";

const vidukadhai = () => {
  const [vidukadhai, setVidukadhai] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchVidukadhai() {
      try {
        const res = await fetch("/api/vidukadhai");
        if (!res.ok) {
          throw new Error("Failed to fetch vidukadhai");
        }
        const data = await res.json();
        setVidukadhai(data.vidukadhai);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching vidukadhai:", error);
        // Handle error state or notification here
      }
    }

    fetchVidukadhai();
  }, []);

  if (loading) {
    return <div className="loading-element">Loading...</div>; // Render loading text while data is being fetched
  }

  return (
    <div className="vidukadhai">
      <div className="vidukadhai-elements">
        <Navbar />
        <img
          src="assets/bg-vidukadhai.png"
          alt="bg-vidukadhai"
          className="vidukadhai-bg"
        />
        <div className="vidukadhai-header">
          <div className="vidukadhai-title">விடுகதை</div>
          <div className="vidukadhai-nav">
            <Link href="/kavithai" className="vidukadhai-link ">
              கவிதை
            </Link>
            <Link href="/oviyam" className="vidukadhai-link ">
              ஓவியம்
            </Link>
            <Link href="/sirukadhai" className="vidukadhai-link ">
              சிறுகதை
            </Link>
            <Link href="/puthaga-vimarsanam" className="vidukadhai-link ">
              புத்தக விமர்சனம்
            </Link>
            <Link href="/vasanam" className="vidukadhai-link">
              வசனம்
            </Link>
            <Link href="/vidukadhai" className="vidukadhai-link">
              விடுகதை
            </Link>
            <Link href="/naatkurippu" className="vidukadhai-link ">
              நாட்குறிப்பு
            </Link>
          </div>
        </div>
      </div>
      <div className="vidukadhai-content">
        {vidukadhai.map((vidukadhai) => (
          <Link
            key={vidukadhai.id}
            href={`/vidukadhai/${vidukadhai.id}`}
            className="link-card-1"
          >
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
