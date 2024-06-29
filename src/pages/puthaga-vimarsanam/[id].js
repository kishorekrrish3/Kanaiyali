// pages/puthaga-vimarsanam/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";
import Link from "next/link";

const PuthagaVimarsanamContent = () => {
  const router = useRouter();
  const { id } = router.query;

  const [book, setBook] = useState(null);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchBook() {
      try {
        const res = await fetch(`/api/books/${id}`);
        if (!res.ok) {
          throw new Error("Failed to fetch book");
        }
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
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
      fetchBook();
      fetchPeople();
    }
  }, [id]);

  if (!book) {
    return <div className="loading">Loading...</div>;
  }

  const person = people.find((p) => p.name === book.name);

  return (
    <div className="puthaga-vimarsanam-page">
      <Navbar />
      <div className="puthaga-vimarsanam-page-header">
        <div className="puthaga-vimarsanam-page-nav">
          <Link href="/kavithai" className="puthaga-vimarsanam-page-link ">
            கவிதை
          </Link>
          <Link href="/oviyam" className="puthaga-vimarsanam-page-link ">
            ஓவியம்
          </Link>
          <Link href="/sirukadhai" className="puthaga-vimarsanam-page-link ">
            சிறுகதை
          </Link>
          <Link
            href="/puthaga-vimarsanam"
            className="puthaga-vimarsanam-page-link "
          >
            புத்தக விமர்சனம்
          </Link>
          <Link href="/vasanam" className="puthaga-vimarsanam-page-link">
            வசனம்
          </Link>
          <Link href="/vidukadhai" className="puthaga-vimarsanam-page-link">
            விடுகதை
          </Link>
          <Link href="/naatkurippu" className="puthaga-vimarsanam-page-link ">
            நாட்குறிப்பு
          </Link>
        </div>
      </div>

      <div className="book-page-details">
        <div className="book-page-img-container">
          <img
            src={`/assets/books/${book.title}.jpg`}
            alt="book"
            className="book-page-img"
          />
        </div>
        <div className="book-page-info-container">
          <div className="book-page-info">
            <div className="book-page-header">
              <h1 className="book-page-title">{book.title}</h1>
              <p className="book-page-subtitle">{book.subtitle}</p>
              <div className="book-page-name-date">
                <div className="book-page-name-container">
                  {person && person.nameImgSrc && (
                    <img
                      src={person.nameImgSrc}
                      alt="person"
                      className="book-page-person-img"
                    />
                  )}
                  <p className="book-page-name">{book.name}</p>
                </div>
                <div className="book-page-date-container">
                  <img
                    src="/assets/calendar.svg"
                    alt="calendar"
                    className="book-page-calendar-icon"
                  />
                  <p className="book-page-date">{book.date}</p>
                </div>
              </div>
            </div>
            <p className="book-page-content">{book.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PuthagaVimarsanamContent;
