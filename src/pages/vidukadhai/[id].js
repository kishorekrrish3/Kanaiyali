// pages/vidukadhai/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";

const VidukadhaiContent = () => {
  const router = useRouter();
  const { id } = router.query; // Use useRouter hook to access query parameters

  const [vidukadhai, setVidukadhai] = useState(null);

  useEffect(() => {
    async function fetchVidukadhai() {
      try {
        const res = await fetch(`/api/vidukadhai/${id}`); // Use API endpoint with book ID
        if (!res.ok) {
          throw new Error("Failed to fetch vidukadhai");
        }
        const data = await res.json();
        setVidukadhai(data);
      } catch (error) {
        console.error("Error fetching book:", error);
        // Handle error state or notification here
      }
    }

    // Fetch book data based on the ID from URL
    if (id) {
      fetchVidukadhai();
    }
  }, [id]); // Include id in the dependency array to fetch on route change

  if (!vidukadhai) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vidukadhai-page">
      <Navbar />
      <div className="vidukadhai-details">
        <div className="vidukadhai-info">
          <h1>{vidukadhai.title}</h1>
          <p>{vidukadhai.subtitle}</p>
          <p>{vidukadhai.content}</p>
          <p>{vidukadhai.name}</p>
          <p>{vidukadhai.date}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VidukadhaiContent;
