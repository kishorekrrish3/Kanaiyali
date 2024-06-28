import React, { useEffect, useState } from "react";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card3 from "./Cards/Card-3";

const Oviyam = () => {
  const [drawings, setDrawings] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchDrawings() {
      const res = await fetch("/api/drawing");
      const data = await res.json();
      setDrawings(data.drawings);
    }

    async function fetchPeople() {
      const res = await fetch("/api/people");
      const data = await res.json();
      setPeople(data.people);
    }

    fetchDrawings();
    fetchPeople();
  }, []);

  return (
    <div className="oviyam">
      <div className="oviyam-elements">
        <Navbar />
        <img src="assets/bg-oviyam.png" alt="bg-oviyam" className="oviyam-bg" />
        <div className="oviyam-title">ஓவியம்</div>
      </div>
      <div className="oviyam-content">
        {drawings.map((drawing) => {
          const person = people.find((p) => p.name === drawing.name);
          return (
            <Card3
              key={drawing.id}
              title={drawing.title}
              subtitle={drawing.subtitle}
              name={drawing.name}
              date={drawing.date}
              drawingSrc={drawing.drawing}
              nameImgSrc={person ? person.nameImgSrc : null}
            />
          );
        })}
      </div>
      <Footer className="footer-element" />
    </div>
  );
};

export default Oviyam;
