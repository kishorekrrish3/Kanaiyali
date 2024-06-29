import React, { useEffect, useState } from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card1 from "./Cards/Card-1";
import Link from "next/link";

const Vasanam = () => {
  const [vasanam, setVasanam] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchVasanam() {
      try {
        const res = await fetch("/api/vasanam");
        if (!res.ok) {
          throw new Error("Failed to fetch vasanam");
        }
        const data = await res.json();
        setVasanam(data.vasanam);
        setLoading(false); // Set loading to false in case of error
      } catch (error) {
        console.error("Error fetching kavthai:", error);
        // Handle error state or notification here
      }
    }

    fetchVasanam();
  }, []);

  if (loading) {
    return <div className="loading-element">Loading...</div>; // Render loading text while data is being fetched
  }

  return (
    <div className="vasanam">
      <div className="vasanam-elements">
        <Navbar />
        <img
          src="assets/bg-vasanam.png"
          alt="bg-vasanam"
          className="vasanam-bg"
        />
        <div className="vasanam-header">
          <div className="vasanam-title">வசனம்</div>
          <div className="vasanam-nav">
            <Link href="/kavithai" className="vasanam-link ">
              கவிதை
            </Link>
            <Link href="/oviyam" className="vasanam-link ">
              ஓவியம்
            </Link>
            <Link href="/sirukadhai" className="vasanam-link ">
              சிறுகதை
            </Link>
            <Link href="/puthaga-vimarsanam" className="vasanam-link ">
              புத்தக விமர்சனம்
            </Link>
            <Link href="/vasanam" className="vasanam-link">
              வசனம்
            </Link>
            <Link href="/vidukadhai" className="vasanam-link">
              விடுகதை
            </Link>
            <Link href="/naatkurippu" className="vasanam-link ">
              நாட்குறிப்பு
            </Link>
          </div>
        </div>
      </div>
      <div className="vasanam-content">
        {vasanam.map((vasanam) => (
          <Link
            key={vasanam.id}
            href={`/vasanam/${vasanam.id}`}
            className="link-card-1"
          >
            <Card1
              key={vasanam.id}
              title={vasanam.title}
              subtitle={vasanam.subtitle}
              name={vasanam.name}
              date={vasanam.date}
              nameImgSrc={vasanam.nameImgSrc}
            />
          </Link>
        ))}
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default Vasanam;
