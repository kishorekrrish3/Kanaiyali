import React from "react";
import "../styles/cards.css";

const Card1 = () => {
  return (
    <div className="card-1">
      <div className="card-1-container-0">
        <div className="card-1-container-1">
          <img src="assets/pic-1.jpg" alt="pic-1" className="card-1-img" />
          <p className="card-1-name">கவின்மொழி</p>
        </div>

        <div className="card-1-container-2">
          <img
            src="assets/calendar.svg"
            alt="calendar"
            className="card-1-calendar-icon"
          />
          <p className="card-1-date">Jan 09, 2024</p>
        </div>
      </div>

      <div className="card-1-container-3">
        <h1 className="card-1-title">ஒரு ஆணின் கற்பு</h1>
        <p className="card-1-subtitle">அவன் பேசிடும் பெண்ணியத்தில் அடங்கும்</p>
      </div>
    </div>
  );
};

export default Card1;
