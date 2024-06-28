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

  const person = people.find((p) => p.name === vasanam.name);

  return (
    <div className="vasanam-page">
      <Navbar />
      <div className="vasanam-page-details">
        <div className="vasanam-page-info">
          <h1 className="vasanam-page-title">{vasanam.title}</h1>
          <p className="vasanam-page-subtitle">{vasanam.subtitle}</p>
          <div className="vasanam-page-name-date">
            <div className="vasanam-page-name-container">
              {person && person.nameImgSrc && (
                <img
                  src={person.nameImgSrc}
                  alt="person"
                  className="vasanam-page-person-img"
                />
              )}
              <p className="vasanam-page-name">{vasanam.name}</p>
            </div>
            <div className="vasanam-page-date-container">
              <img
                src="/assets/calendar.svg"
                alt="calendar"
                className="vasanam-page-calendar-icon"
              />
              <p className="vasanam-page-date">{vasanam.date}</p>
            </div>
          </div>
          <p className="vasanam-page-content">{vasanam.content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VasanamContent;
