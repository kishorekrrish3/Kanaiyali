import React from "react";
import "../styles/cards.css";

const Card2 = () => {
  return (
    <div className="card-2">
      <div className="card-2-outer-1">
        <img src="assets/pic-2.jpg" alt="book" className="card-2-book" />
      </div>
      <div className="card-2-outer-2">
        <div className="card-2-container-0">
          <div className="card-2-container-1">
            <img src="assets/pic-1.jpg" alt="pic-1" className="card-2-img" />
            <p className="card-2-name">கவின்மொழி</p>
          </div>

          <div className="card-2-container-2">
            <img
              src="assets/calendar.svg"
              alt="calendar"
              className="card-2-calendar-icon"
            />
            <p className="card-2-date">Jan 09, 2024</p>
          </div>
        </div>

        <div className="card-2-container-3">
          <h1 className="card-2-title">ஒரு ஆணின் கற்பு</h1>
          <p className="card-2-subtitle">
            அவன் பேசிடும் பெண்ணியத்தில் அடங்கும்
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card2;
