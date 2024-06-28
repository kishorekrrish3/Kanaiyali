// pages/vasanam/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";

const VasanamContent = () => {
  const router = useRouter();
  const { id } = router.query; // Use useRouter hook to access query parameters

  const [vasanam, setVasanam] = useState(null);

  useEffect(() => {
    async function fetchVasanam() {
      try {
        const res = await fetch(`/api/vasanam/${id}`); // Use API endpoint with book ID
        if (!res.ok) {
          throw new Error("Failed to fetch vasanam");
        }
        const data = await res.json();
        setVasanam(data);
      } catch (error) {
        console.error("Error fetching book:", error);
        // Handle error state or notification here
      }
    }

    // Fetch book data based on the ID from URL
    if (id) {
      fetchVasanam();
    }
  }, [id]); // Include id in the dependency array to fetch on route change

  if (!vasanam) {
    return <div>Loading...</div>;
  }

  return (
    <div className="vasanam-page">
      <Navbar />
      <div className="vasanam-details">
        <div className="vasanam-info">
          <h1>{vasanam.title}</h1>
          <p>{vasanam.subtitle}</p>
          <p>{vasanam.content}</p>
          <p>{vasanam.name}</p>
          <p>{vasanam.date}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VasanamContent;
