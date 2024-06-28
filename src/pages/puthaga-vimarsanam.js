// pages/puthaga-vimarsanam.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "./styles/sections.css";
import "./Main/Navbar/Navbar.css";
import Navbar from "./Main/Navbar/Navbar";
import Footer from "./Main/Footer/Footer";
import Card2 from "./Cards/Card-2";

const PuthagaVimarsanam = () => {
  const [books, setBooks] = useState([]);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch("/api/books");
        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await res.json();
        setBooks(data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching books:", error);
        // Handle error state or notification here
      }
    }
    async function fetchPeople() {
      const res = await fetch("/api/people");
      const data = await res.json();
      setPeople(data.people);
      setLoading(false); // Set loading to false once data is fetched
    }

    fetchBooks();
    fetchPeople();
  }, []);

  if (loading) {
    return <div className="loading-element">Loading...</div>; // Render loading text while data is being fetched
  }

  return (
    <div className="puthaga-vimarsanam">
      <div className="puthaga-vimarsanam-elements">
        <Navbar />
        <img
          src="assets/bg-puthaga-vimarsanam.png"
          alt="bg-puthaga-vimarsanam"
          className="puthaga-vimarsanam-bg"
        />
        <div className="puthaga-vimarsanam-title">புத்தக விமர்சனம்</div>
      </div>
      <div className="puthaga-vimarsanam-content">
        {books.map((book) => {
          const person = people.find((p) => p.name === book.name);
          return (
            <Link key={book.id} href={`/puthaga-vimarsanam/${book.id}`}>
              <Card2
                title={book.title}
                subtitle={book.subtitle}
                name={book.name}
                date={book.date}
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

export default PuthagaVimarsanam;
