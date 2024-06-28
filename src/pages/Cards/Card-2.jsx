// pages/Cards/Card-2.jsx
import React from "react";
import "../styles/cards.css";

const Card2 = ({ title, subtitle, name, date }) => {
  return (
    <div className="card-2">
      <div className="card-2-outer-1">
        <img
          src={`/assets/books/${title}.jpg`}
          alt="book"
          className="card-2-book"
        />
      </div>
      <div className="card-2-outer-2">
        <div className="card-2-container-0">
          <div className="card-2-container-1">
            <img src="assets/pic-1.jpg" alt="person" className="card-2-img" />
            <p className="card-2-name">{name}</p>
          </div>
          <div className="card-2-container-2">
            <img
              src="/assets/calendar.svg"
              alt="calendar"
              className="card-2-calendar-icon"
            />
            <p className="card-2-date">{date}</p>
          </div>
        </div>
        <div className="card-2-container-3">
          <h1 className="card-2-title">{title}</h1>
          <p className="card-2-subtitle">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
