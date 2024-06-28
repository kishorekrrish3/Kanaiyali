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
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      try {
        const res = await fetch("/api/people");
        if (!res.ok) {
          throw new Error("Failed to fetch people");
        }
        const data = await res.json();
        setPeople(data.people);
      } catch (error) {
        console.error("Error fetching people:", error);
      }
    }

    if (id) {
      fetchPeople();
    }
  }, [id]);

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

  const person = people.find((p) => p.name === naatkurippu.name);

  return (
    <div className="naatkurippu-page">
      <Navbar />
      <div className="naatkurippu-page-details">
        <div className="naatkurippu-page-info">
          <h1 className="naatkurippu-page-title">{naatkurippu.title}</h1>
          <p className="naatkurippu-page-subtitle">{naatkurippu.subtitle}</p>
          <div className="naatkurippu-page-name-date">
            <div className="naatkurippu-page-name-container">
              {person && person.nameImgSrc && (
                <img
                  src={person.nameImgSrc}
                  alt="person"
                  className="naatkurippu-page-person-img"
                />
              )}
              <p className="naatkurippu-page-name">{naatkurippu.name}</p>
            </div>
            <div className="naatkurippu-page-date-container">
              <img
                src="/assets/calendar.svg"
                alt="calendar"
                className="naatkurippu-page-calendar-icon"
              />
              <p className="naatkurippu-page-date">{naatkurippu.date}</p>
            </div>
          </div>
          <p className="naatkurippu-page-content">{naatkurippu.content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NaatkurippuContent;
