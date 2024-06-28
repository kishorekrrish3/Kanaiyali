// pages/sirukadhai/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";

const SirukadhaiContent = () => {
  const router = useRouter();
  const { id } = router.query; // Use useRouter hook to access query parameters

  const [sirukadhai, setSirukadhai] = useState(null);

  useEffect(() => {
    async function fetchSirukadhai() {
      try {
        const res = await fetch(`/api/sirukadhai/${id}`); // Use API endpoint with book ID
        if (!res.ok) {
          throw new Error("Failed to fetch Sirukadhai");
        }
        const data = await res.json();
        setSirukadhai(data);
      } catch (error) {
        console.error("Error fetching sirukadhai:", error);
        // Handle error state or notification here
      }
    }

    // Fetch book data based on the ID from URL
    if (id) {
      fetchSirukadhai();
    }
  }, [id]); // Include id in the dependency array to fetch on route change

  if (!sirukadhai) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sirukadhai-page">
      <Navbar />
      <div className="sirukadhai-details">
        <div className="sirukadhai-info">
          <h1>{sirukadhai.title}</h1>
          <p>{sirukadhai.subtitle}</p>
          <p>{sirukadhai.content}</p>
          <p>{sirukadhai.name}</p>
          <p>{sirukadhai.date}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SirukadhaiContent;
