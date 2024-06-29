import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card3 from "./Cards/Card-3";

const Oviyam = () => {
  const [drawings, setDrawings] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [drawingsRes, peopleRes] = await Promise.all([
          fetch("/api/drawing"),
          fetch("/api/people"),
        ]);
        const drawingsData = await drawingsRes.json();
        const peopleData = await peopleRes.json();
        setDrawings(drawingsData.drawings);
        setPeople(peopleData.people);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading-element">Loading...</div>;
  }

  return (
    <div className="oviyam">
      <div className="oviyam-elements">
        <Navbar />
        <img src="assets/bg-oviyam.png" alt="bg-oviyam" className="oviyam-bg" />

        <div className="oviyam-header">
          <div className="oviyam-title">ஓவியம்</div>
          <div className="oviyam-nav">
            <Link href="/kavithai" className="oviyam-link ">
              கவிதை
            </Link>
            <Link href="/oviyam" className="oviyam-link ">
              ஓவியம்
            </Link>
            <Link href="/sirukadhai" className="oviyam-link ">
              சிறுகதை
            </Link>
            <Link href="/puthaga-vimarsanam" className="oviyam-link ">
              புத்தக விமர்சனம்
            </Link>
            <Link href="/vasanam" className="oviyam-link">
              வசனம்
            </Link>
            <Link href="/vidukadhai" className="oviyam-link">
              விடுகதை
            </Link>
            <Link href="/naatkurippu" className="oviyam-link ">
              நாட்குறிப்பு
            </Link>
          </div>
        </div>
      </div>
      <div className="oviyam-content">
        {drawings.map((drawing) => {
          const person = people.find((p) => p.name === drawing.name);
          return (
            <Link
              key={drawing.id}
              href={`/oviyam/${drawing.id}`}
              className="link-card-3"
            >
              <Card3
                title={drawing.title}
                subtitle={drawing.subtitle}
                name={drawing.name}
                date={drawing.date}
                drawingSrc={drawing.drawing}
                nameImgSrc={person ? person.nameImgSrc : null}
              />
            </Link>
          );
        })}
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default Oviyam;
