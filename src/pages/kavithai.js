import React, { useEffect, useState } from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card1 from "./Cards/Card-1";
import Link from "next/link";

const Kavithai = () => {
  const [kavithai, setKavithai] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchKavithai() {
      try {
        const res = await fetch("/api/kavithai");
        if (!res.ok) {
          throw new Error("Failed to fetch kavithai");
        }
        const data = await res.json();
        setKavithai(data.kavithai);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching kavithai:", error);
        // Handle error state or notification here
        setLoading(false); // Set loading to false in case of error
      }
    }

    fetchKavithai();
  }, []);

  if (loading) {
    return <div className="loading-element">Loading...</div>; // Render loading text while data is being fetched
  }

  return (
    <div className="kavithai">
      <div className="kavithai-elements">
        <Navbar />
        <img
          src="assets/bg-kavithai.png"
          alt="bg-kavithai"
          className="kavithai-bg"
        />
        <div className="kavithai-header">
          <div className="kavithai-title">கவிதை</div>
          <div className="kavithai-nav">
            <Link href="/kavithai" className="kavithai-link ">
              கவிதை
            </Link>
            <Link href="/oviyam" className="kavithai-link ">
              ஓவியம்
            </Link>
            <Link href="/sirukadhai" className="kavithai-link ">
              சிறுகதை
            </Link>
            <Link href="/puthaga-vimarsanam" className="kavithai-link ">
              புத்தக விமர்சனம்
            </Link>
            <Link href="/vasanam" className="kavithai-link">
              வசனம்
            </Link>
            <Link href="/vidukadhai" className="kavithai-link">
              விடுகதை
            </Link>
            <Link href="/naatkurippu" className="kavithai-link ">
              நாட்குறிப்பு
            </Link>
          </div>
        </div>
      </div>
      <div className="kavithai-content">
        {kavithai.map((kavithai) => (
          <Link
            key={kavithai.id}
            href={`/kavithai/${kavithai.id}`}
            className="link-card-1"
          >
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

export default Kavithai;
