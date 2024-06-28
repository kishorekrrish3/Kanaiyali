// pages/kavithai/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";

const KavithaiContent = () => {
  const router = useRouter();
  const { id } = router.query; // Use useRouter hook to access query parameters

  const [kavithai, setKavithai] = useState(null);

  useEffect(() => {
    async function fetchKavithai() {
      try {
        const res = await fetch(`/api/kavithai/${id}`); // Use API endpoint with book ID
        if (!res.ok) {
          throw new Error("Failed to fetch kavithai");
        }
        const data = await res.json();
        setKavithai(data);
      } catch (error) {
        console.error("Error fetching book:", error);
        // Handle error state or notification here
      }
    }

    // Fetch book data based on the ID from URL
    if (id) {
      fetchKavithai();
    }
  }, [id]); // Include id in the dependency array to fetch on route change

  if (!kavithai) {
    return <div>Loading...</div>;
  }

  return (
    <div className="kavithai-page">
      <Navbar />
      <div className="kavithai-details">
        <div className="kavithai-info">
          <h1>{kavithai.title}</h1>
          <p>{kavithai.subtitle}</p>
          <p>{kavithai.content}</p>
          <p>{kavithai.name}</p>
          <p>{kavithai.date}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KavithaiContent;
