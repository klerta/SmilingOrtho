import React from "react";

const Carousel = () => {
  const carouselItems = [
    { imageUrl: "assets/carousel/carousel1.png" },
    { imageUrl: "/assets/carousel/carousel2.jpeg" },
    { imageUrl: "/assets/carousel/carousel3.jpeg" },
  ];

  return (
    <div
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={item.imageUrl}
              className="d-block w-100 testWiem"
              alt="Carousel"
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target=".carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target=".carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
