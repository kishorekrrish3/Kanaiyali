import React from "react";
import "../styles/cards.css";

const Card1 = ({ title, subtitle, name, date, nameImgSrc }) => {
  return (
    <div className="card-1">
      <div className="card-1-container-0">
        <div className="card-1-container-1">
          {nameImgSrc && (
            <img src={nameImgSrc} alt={name} className="card-1-img" />
          )}
          <p className="card-1-name">{name}</p>
        </div>

        <div className="card-1-container-2">
          <img
            src="assets/calendar.svg"
            alt="calendar"
            className="card-1-calendar-icon"
          />
          <p className="card-1-date">{date}</p>
        </div>
      </div>

      <div className="card-1-container-3">
        <h1 className="card-1-title">{title}</h1>
        <p className="card-1-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card1;
