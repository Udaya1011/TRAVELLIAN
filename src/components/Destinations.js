import React, { useState } from "react";

export default function PopularDestinations() {
  const destinations = [
    {
      title: "TAJ MAHAL",
      location: "INDIA",
      img: "https://i.pinimg.com/1200x/fa/a7/7c/faa77c8d1a641c03332d173046bb847a.jpg"
    },
    {
      title: "The Collosseum",
      location: "Rome,Italy",
      img: "https://cdn.thecollector.com/wp-content/uploads/2021/12/colosseum-world-wonder-national-geographic.jpg?width=1200&quality=100&dpr=2"
    },
    {
      title: "The Great Wall",
      location: "China",
      img: "https://cdn.thecollector.com/wp-content/uploads/2021/12/great-wall-china-national-geographic.jpg?width=1200&quality=100&dpr=2"
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < destinations.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="popular-container">
      <h2 className="popular-title">Popular Destinations</h2>
      <h2 className="line"></h2>

      <p className="popular-subtitle">
        Most popular destinations around the world, from historical places to natural wonders.
      </p>

      <div className="carousel-buttons">
        <button className="carousel-button" onClick={prev}>‹</button>
        <button className="carousel-button orange" onClick={next}>›</button>
      </div>

      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 320}px)` }}
        >
          {destinations.map((d, i) => (
            <div key={i} className="destination-card">
              <img src={d.img} alt={d.title} />
              <div className="destination-content">
                <h3 className="destination-title">{d.title}</h3>
                <p className="destination-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "6px", verticalAlign: "middle" }}
                  >
                    <path d="M8 0a5 5 0 0 0-5 5c0 4.5 5 11 5 11s5-6.5 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                  </svg>
                  {d.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------- RESPONSIVE STYLES ------------------- */}
      <style>{`
        /* ===== DESKTOP VIEW ===== */
        .popular-container {
          max-width: 1920px;
          padding: 160px 180px 0 180px;
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
        }

        .popular-subtitle {
          font-size: 16px;
          color: #666;
          margin-bottom: 20px;
        }

        .carousel-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-bottom: 20px;
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

        .carousel-wrapper {
          overflow: hidden;
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
          width: 661px;
          height: 491px;
          object-fit: cover;
          border-radius: 14px;
        }

        .destination-content {
          position: absolute;
          bottom: 20px;
          left: 20px;
        }

        /* ===== MOBILE RESPONSIVE BELOW 768px ===== */
        @media (max-width: 768px) {
          .popular-container {
            padding: 40px 20px;
            text-align: center;
          }

          .popular-title {
            font-size: 36px;
          }

          .line {
            width: 180px;
            margin: 10px auto;
          }

          .popular-subtitle {
            font-size: 14px;
            padding: 0 10px;
          }

          .carousel-buttons {
            justify-content: center;
            margin: 20px 0;
          }

          .carousel-button {
            padding: 10px 16px;
            font-size: 22px;
          }

          .carousel-wrapper {
            width: 100%;
          }

          .carousel-track {
            gap: 0;
          }

          .destination-card {
            min-width: 100%;
          }

          .destination-card img {
            width: 100%;
            height: 260px;
          }

          .destination-title {
            font-size: 20px;
          }
        }
      `}
      </style>
    </div>
  );
}
