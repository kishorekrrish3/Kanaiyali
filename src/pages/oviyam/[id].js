import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";
import Link from "next/link";

const OviyamContent = () => {
  const router = useRouter();
  const { id } = router.query;

  const [drawing, setDrawing] = useState(null);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchDrawing() {
      try {
        const res = await fetch(`/api/drawing/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch drawing");
        }
        const data = await res.json();
        setDrawing(data);
      } catch (error) {
        console.error("Error fetching drawing:", error);
      }
    }

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
      fetchDrawing();
      fetchPeople();
    }
  }, [id]);

  if (!drawing) {
    return <div className="loading-element">Loading...</div>;
  }

  const person = people.find((p) => p.name === drawing.name);

  return (
    <div className="oviyam-page">
      <Navbar />
      <div className="oviyam-page-header">
        <div className="oviyam-page-nav">
          <Link href="/kavithai" className="oviyam-page-link ">
            கவிதை
          </Link>
          <Link href="/oviyam" className="oviyam-page-link ">
            ஓவியம்
          </Link>
          <Link href="/sirukadhai" className="oviyam-page-link ">
            சிறுகதை
          </Link>
          <Link href="/puthaga-vimarsanam" className="oviyam-page-link ">
            புத்தக விமர்சனம்
          </Link>
          <Link href="/vasanam" className="oviyam-page-link">
            வசனம்
          </Link>
          <Link href="/vidukadhai" className="oviyam-page-link">
            விடுகதை
          </Link>
          <Link href="/naatkurippu" className="oviyam-page-link ">
            நாட்குறிப்பு
          </Link>
        </div>
      </div>

      <div className="drawing-page-details">
        <div className="drawing-page-info-container">
          <div className="drawing-page-info">
            <div className="drawing-page-img-container">
              <img
                src={`data:image/jpeg;base64,${drawing.drawing}`}
                alt="drawing"
                className="drawing-page-img"
              />
            </div>
            <div className="drawing-page-header">
              <h1 className="drawing-page-title">{drawing.title}</h1>
              <p className="drawing-page-subtitle">{drawing.subtitle}</p>
              <div className="drawing-page-name-date">
                <div className="drawing-page-name-container">
                  {person && person.nameImgSrc && (
                    <img
                      src={person.nameImgSrc}
                      alt="person"
                      className="drawing-page-person-img"
                    />
                  )}
                  <p className="drawing-page-name">{drawing.name}</p>
                </div>
                <div className="drawing-page-date-container">
                  <img
                    src="/assets/calendar.svg"
                    alt="calendar"
                    className="drawing-page-calendar-icon"
                  />
                  <p className="drawing-page-date">{drawing.date}</p>
                </div>
              </div>
            </div>
            <p className="drawing-page-content">{drawing.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OviyamContent;
