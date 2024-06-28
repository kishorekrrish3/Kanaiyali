// pages/naatkurippu/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";

const NaatkurippuContent = () => {
  const router = useRouter();
  const { id } = router.query; // Use useRouter hook to access query parameters

  const [naatkurippu, setNaatkurippu] = useState(null);

  useEffect(() => {
    async function fetchNaatkurippu() {
      try {
        const res = await fetch(`/api/naatkurippu/${id}`); // Use API endpoint with book ID
        if (!res.ok) {
          throw new Error("Failed to fetch naatkurippu");
        }
        const data = await res.json();
        setNaatkurippu(data);
      } catch (error) {
        console.error("Error fetching book:", error);
        // Handle error state or notification here
      }
    }

    // Fetch book data based on the ID from URL
    if (id) {
      fetchNaatkurippu();
    }
  }, [id]); // Include id in the dependency array to fetch on route change

  if (!naatkurippu) {
    return <div>Loading...</div>;
  }

  return (
    <div className="naatkurippu-page">
      <Navbar />
      <div className="naatkurippu-details">
        <div className="naatkurippu-info">
          <h1>{naatkurippu.title}</h1>
          <p>{naatkurippu.subtitle}</p>
          <p>{naatkurippu.content}</p>
          <p>{naatkurippu.name}</p>
          <p>{naatkurippu.date}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NaatkurippuContent;
