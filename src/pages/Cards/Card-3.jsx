import React from "react";
import "../styles/cards.css";

const Card3 = () => {
  return (
    <div className="card-3">
      <div className="card-3-container-0">
        <div className="card-3-container-1">
          <img src="assets/pic-1.jpg" alt="pic-1" className="card-3-img" />
          <p className="card-3-name">கவின்மொழி</p>
        </div>

        <div className="card-3-container-2">
          <img
            src="assets/calendar.svg"
            alt="calendar"
            className="card-3-calendar-icon"
          />
          <p className="card-3-date">Jan 09, 2024</p>
        </div>
      </div>

      <div className="card-3-drawing-container">
        <img src="assets/pic-3.jpg" alt="drawing" className="card-3-drawing" />
      </div>

      <div className="card-3-container-3">
        <h1 className="card-3-title">ஒரு ஆணின் கற்பு</h1>
        <p className="card-3-subtitle">அவன் பேசிடும் பெண்ணியத்தில் அடங்கும்</p>
      </div>
    </div>
  );
};

export default Card3;
