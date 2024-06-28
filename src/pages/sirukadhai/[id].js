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

  const person = people.find((p) => p.name === sirukadhai.name);

  return (
    <div className="sirukadhai-page">
      <Navbar />
      <div className="sirukadhai-page-details">
        <div className="sirukadhai-page-info">
          <h1 className="sirukadhai-page-title">{sirukadhai.title}</h1>
          <p className="sirukadhai-page-subtitle">{sirukadhai.subtitle}</p>
          <div className="sirukadhai-page-name-date">
            <div className="sirukadhai-page-name-container">
              {person && person.nameImgSrc && (
                <img
                  src={person.nameImgSrc}
                  alt="person"
                  className="sirukadhai-page-person-img"
                />
              )}
              <p className="sirukadhai-page-name">{sirukadhai.name}</p>
            </div>
            <div className="sirukadhai-page-date-container">
              <img
                src="/assets/calendar.svg"
                alt="calendar"
                className="sirukadhai-page-calendar-icon"
              />
              <p className="sirukadhai-page-date">{sirukadhai.date}</p>
            </div>
          </div>
          <p className="sirukadhai-page-content">{sirukadhai.content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SirukadhaiContent;
