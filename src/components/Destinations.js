import React, { useState } from "react";

export default function PopularDestinations() {
  const [index, setIndex] = useState(0);

  const totalSlides = 6; 

  const next = () => {
    if (index < totalSlides - 1) setIndex(index + 1);
  };
  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="popular-container">
      <h2 className="popular-title">Popular Destinations</h2>
      <div className="line"></div>
      <p className="popular-subtitle">
        Most popular destinations around the world, from historical places to
        natural wonders.
      </p>

      <div className="carousel-wrapper">
        <div className="carousel-buttons desktop">
          <button className="carousel-button" onClick={prev}>
            ‹
          </button>
          <button className="carousel-button orange" onClick={next}>
            ›
          </button>
        </div>

        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 320}px)` }}
        >
          <div className="destination-card">
            <img
              src="https://i.pinimg.com/1200x/fa/a7/7c/faa77c8d1a641c03332d173046bb847a.jpg"
              alt="Taj Mahal"
            />
            <div className="destination-content">
              <h3 className="destination-title">Taj Mahal</h3>
              <p className="destination-location">India</p>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://cdn.thecollector.com/wp-content/uploads/2021/12/colosseum-world-wonder-national-geographic.jpg?width=1200&quality=100&dpr=2"
              alt="Colosseum"
            />
            <div className="destination-content">
              <h3 className="destination-title">The Colosseum</h3>
              <p className="destination-location">Rome, Italy</p>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://cdn.thecollector.com/wp-content/uploads/2021/12/great-wall-china-national-geographic.jpg?width=1200&quality=100&dpr=2"
              alt="Great Wall"
            />
            <div className="destination-content">
              <h3 className="destination-title">The Great Wall</h3>
              <p className="destination-location">China</p>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://i.pinimg.com/1200x/fa/a7/7c/faa77c8d1a641c03332d173046bb847a.jpg"
              alt="Taj Mahal"
            />
            <div className="destination-content">
              <h3 className="destination-title">Taj Mahal</h3>
              <p className="destination-location">India</p>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://cdn.thecollector.com/wp-content/uploads/2021/12/colosseum-world-wonder-national-geographic.jpg?width=1200&quality=100&dpr=2"
              alt="Colosseum"
            />
            <div className="destination-content">
              <h3 className="destination-title">The Colosseum</h3>
              <p className="destination-location">Rome, Italy</p>
            </div>
          </div>

          <div className="destination-card">
            <img
              src="https://cdn.thecollector.com/wp-content/uploads/2021/12/great-wall-china-national-geographic.jpg?width=1200&quality=100&dpr=2"
              alt="Great Wall"
            />
            <div className="destination-content">
              <h3 className="destination-title">The Great Wall</h3>
              <p className="destination-location">China</p>
            </div>
          </div>
        </div>

        <div className="carousel-buttons mobile">
          <button className="carousel-button" onClick={prev}>
            ‹
          </button>
          <button className="carousel-button orange" onClick={next}>
            ›
          </button>
        </div>
      </div>
      <style>{`
.popular-container {
  max-width: 1920px;
  padding: 160px 70px 0 70px;
  color: #222;
  text-align: left;
}

.popular-title {
  font-size: 64px;
  font-family: 'Playfair Display', serif;
  margin-bottom: 10px;
}

.line {
  width: 365px;
  border: 3px solid #FF7757;
  margin-bottom: 20px;
}

.popular-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.carousel-wrapper {
  overflow: hidden;
  position: relative;
  padding-top: 60px; 
}

.carousel-track {
  display: flex;
  gap: 20px;
  transition: transform 0.3s ease;
}

.destination-card {
  min-width: 300px;
  border-radius: 14px;
  overflow: hidden;
  position: relative;
  color: white;
}

.destination-card img {
  width:700px;
  height: 591px;
  object-fit: cover;
  border-radius: 14px;
}

.destination-content {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.destination-title {
  font-size: 24px;
  margin-bottom: 5px;
}

.destination-location {
  font-size: 14px;
  color: #fff;
}

.carousel-buttons {
  display: flex;
  gap: 12px;
}

.carousel-buttons.desktop {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
}

.carousel-buttons.mobile {
  display: none;
  justify-content: center;
  margin-top: 15px;
}

.carousel-button {
  background: #1f2937;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 20px;
  cursor: pointer;
}

.carousel-button.orange {
  background: #FF6B4A;
}

@media (max-width: 768px) {
  .popular-container {
    padding: 40px 20px;
  }

  .popular-title {
    font-size: 36px;
  }

  .line {
    width: 20%;
    margin: 10px 0 20px 0;
  }

  .popular-subtitle {
    font-size: 14px;
  }

  .carousel-track {
    gap: 10px;
  }

  .destination-card {
    min-width: 95%;
  }

  .destination-card img {
    width: 100%;
    height: 460px;
  }

  .carousel-buttons.desktop {
    display: none;
  }

  .carousel-buttons.mobile {
    display: flex;
  }
}
      `}</style>
    </div>
  );
}
