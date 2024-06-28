// pages/puthaga-vimarsanam/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../Main/Navbar/Navbar";
import Footer from "../Main/Footer/Footer";
import "../master.css";

const PuthagaVimarsanamContent = () => {
  const router = useRouter();
  const { id } = router.query; // Use useRouter hook to access query parameters

  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const res = await fetch(`/api/books/${id}`); // Use API endpoint with book ID
        if (!res.ok) {
          throw new Error("Failed to fetch book");
        }
        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error("Error fetching book:", error);
        // Handle error state or notification here
      }
    }

    // Fetch book data based on the ID from URL
    if (id) {
      fetchBook();
    }
  }, [id]); // Include id in the dependency array to fetch on route change

  if (!book) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="puthaga-vimarsanam-page">
      <Navbar />
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
            <h1 className="book-page-title">{book.title}</h1>
            <p className="book-page-subtitle">{book.subtitle}</p>
            <p className="book-page-name">{book.name}</p>
            <p className="book-page-date">{book.date}</p>
            <p className="book-page-content">{book.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PuthagaVimarsanamContent;
