import React, { useEffect, useState } from "react";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["assets/img-1.png", "assets/img-2.jpg", "assets/img-3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="img-slideshow">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`img-${index + 1}`}
          className={`slide-img ${index === currentIndex ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
