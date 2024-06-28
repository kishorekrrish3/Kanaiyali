import React, { useEffect, useState } from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card1 from "./Cards/Card-1";
import Link from "next/link";

const naatkurippu = () => {
  const [naatkurippu, setNaatkurippu] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchNaatkurippu() {
      try {
        const res = await fetch("/api/naatkurippu");
        if (!res.ok) {
          throw new Error("Failed to fetch naatkurippu");
        }
        const data = await res.json();
        setNaatkurippu(data.naatkurippu);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching naatkurippu:", error);
        // Handle error state or notification here
      }
    }

    fetchNaatkurippu();
  }, []);

  if (loading) {
    return <div className="loading-element">Loading...</div>; // Render loading text while data is being fetched
  }

  return (
    <div className="naatkurippu">
      <div className="naatkurippu-elements">
        <Navbar />
        <img
          src="assets/bg-naatkurippu.png"
          alt="bg-naatkurippu"
          className="naatkurippu-bg"
        />
        <div className="naatkurippu-title">நாட்குறிப்பு</div>
      </div>
      <div className="naatkurippu-content">
        {naatkurippu.map((naatkurippu) => (
          <Link key={naatkurippu.id} href={`/naatkurippu/${naatkurippu.id}`}>
            <Card1
              key={naatkurippu.id}
              title={naatkurippu.title}
              subtitle={naatkurippu.subtitle}
              name={naatkurippu.name}
              date={naatkurippu.date}
              nameImgSrc={naatkurippu.nameImgSrc}
            />
          </Link>
        ))}
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default naatkurippu;
