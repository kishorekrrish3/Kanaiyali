// pages/vidukadhai/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";
import Link from "next/link";

const VidukadhaiContent = () => {
  const router = useRouter();
  const { id } = router.query; // Use useRouter hook to access query parameters

  const [vidukadhai, setVidukadhai] = useState(null);
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

  const person = people.find((p) => p.name === vidukadhai.name);

  return (
    <div className="vidukadhai-page">
      <Navbar />
      <div className="vidukadhai-page-header">
        <div className="vidukadhai-page-nav">
          <Link href="/kavithai" className="vidukadhai-page-link ">
            கவிதை
          </Link>
          <Link href="/oviyam" className="vidukadhai-page-link ">
            ஓவியம்
          </Link>
          <Link href="/sirukadhai" className="vidukadhai-page-link ">
            சிறுகதை
          </Link>
          <Link href="/puthaga-vimarsanam" className="vidukadhai-page-link ">
            புத்தக விமர்சனம்
          </Link>
          <Link href="/vasanam" className="vidukadhai-page-link">
            வசனம்
          </Link>
          <Link href="/vidukadhai" className="vidukadhai-page-link">
            விடுகதை
          </Link>
          <Link href="/naatkurippu" className="vidukadhai-page-link ">
            நாட்குறிப்பு
          </Link>
        </div>
      </div>

      <div className="vidukadhai-page-details">
        <div className="vidukadhai-page-info">
          <h1 className="vidukadhai-page-title">{vidukadhai.title}</h1>
          <p className="vidukadhai-page-subtitle">{vidukadhai.subtitle}</p>
          <div className="vidukadhai-page-name-date">
            <div className="vidukadhai-page-name-container">
              {person && person.nameImgSrc && (
                <img
                  src={person.nameImgSrc}
                  alt="person"
                  className="vidukadhai-page-person-img"
                />
              )}
              <p className="vidukadhai-page-name">{vidukadhai.name}</p>
            </div>
            <div className="vidukadhai-page-date-container">
              <img
                src="/assets/calendar.svg"
                alt="calendar"
                className="vidukadhai-page-calendar-icon"
              />
              <p className="vidukadhai-page-date">{vidukadhai.date}</p>
            </div>
          </div>
          <p className="vidukadhai-page-content">{vidukadhai.content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VidukadhaiContent;
