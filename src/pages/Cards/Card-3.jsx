import React from "react";
import "../styles/cards.css";

const Card3 = ({ title, subtitle, name, date, drawingSrc, nameImgSrc }) => {
  return (
    <div className="card-3">
      <div className="card-3-container-0">
        <div className="card-3-container-1">
          {nameImgSrc && (
            <img src={nameImgSrc} alt="pic-1" className="card-3-img" />
          )}
          <p className="card-3-name">{name}</p>
        </div>

        <div className="card-3-container-2">
          <img
            src="assets/calendar.svg"
            alt="calendar"
            className="card-3-calendar-icon"
          />
          <p className="card-3-date">{date}</p>
        </div>
      </div>

      <div className="card-3-drawing-container">
        {drawingSrc && (
          <img
            src={`data:image/jpeg;base64,${drawingSrc}`}
            alt="drawing"
            className="card-3-drawing"
          />
        )}
      </div>

      <div className="card-3-container-3">
        <h1 className="card-3-title">{title}</h1>
        <p className="card-3-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card3;
