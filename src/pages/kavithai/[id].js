// pages/kavithai/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";
import Link from "next/link";

const KavithaiContent = () => {
  const router = useRouter();
  const { id } = router.query; // Use useRouter hook to access query parameters

  const [kavithai, setKavithai] = useState(null);
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
    return <div className="loading-element">Loading...</div>;
  }

  const person = people.find((p) => p.name === kavithai.name);

  return (
    <div className="kavithai-page">
      <Navbar />
      <div className="kavithai-page-header">
        <div className="kavithai-page-nav">
          <Link href="/kavithai" className="kavithai-page-link ">
            கவிதை
          </Link>
          <Link href="/oviyam" className="kavithai-page-link ">
            ஓவியம்
          </Link>
          <Link href="/sirukadhai" className="kavithai-page-link ">
            சிறுகதை
          </Link>
          <Link href="/puthaga-vimarsanam" className="kavithai-page-link ">
            புத்தக விமர்சனம்
          </Link>
          <Link href="/vasanam" className="kavithai-page-link">
            வசனம்
          </Link>
          <Link href="/vidukadhai" className="kavithai-page-link">
            விடுகதை
          </Link>
          <Link href="/naatkurippu" className="kavithai-page-link ">
            நாட்குறிப்பு
          </Link>
        </div>
      </div>

      <div className="kavithai-page-details">
        <div className="kavithai-page-info">
          <h1 className="kavithai-page-title">{kavithai.title}</h1>
          <p className="kavithai-page-subtitle">{kavithai.subtitle}</p>
          <div className="kavithai-page-name-date">
            <div className="kavithai-page-name-container">
              {person && person.nameImgSrc && (
                <img
                  src={person.nameImgSrc}
                  alt="person"
                  className="kavithai-page-person-img"
                />
              )}
              <p className="kavithai-page-name">{kavithai.name}</p>
            </div>
            <div className="kavithai-page-date-container">
              <img
                src="/assets/calendar.svg"
                alt="calendar"
                className="kavithai-page-calendar-icon"
              />
              <p className="kavithai-page-date">{kavithai.date}</p>
            </div>
          </div>
          <p className="kavithai-page-content">{kavithai.content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default KavithaiContent;
