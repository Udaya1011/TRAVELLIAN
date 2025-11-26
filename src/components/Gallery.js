import React, { useState } from "react";

export default function DestinationGallery() {
  const images = [
    "/gallery/g1.jpg",
    "/gallery/g2.jpg",
    "/gallery/g3.jpg",
    "/gallery/g4.jpg",
    
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <div>
          <h2 className="gallery-title">Destination Gallery</h2>
          <div className="line-left"></div>
          <p className="gallery-sub">Our photo gallery on trip</p>
        </div>
        <div className="gallery-arrows desktop-only">
          <button
            onClick={prev}
            className="arrow-btn dark"
            disabled={index === 0}
          >
            ‹
          </button>
          <button
            onClick={next}
            className="arrow-btn orange"
            disabled={index === images.length - 1}
          >
            ›
          </button>
        </div>
      </div>

      <div className="gallery-wrapper">
        <div
          className="gallery-track"
          style={{
            transform:
              window.innerWidth <= 768
                ? `translateY(-${index * 405}px)`
                : `translateX(-${index * 325}px)`,
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="gallery-card">
              <img src={img} alt={`destination ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-arrows mobile-only">
        <button
          onClick={prev}
          className="arrow-btn dark"
          disabled={index === 0}
        >
          ‹
        </button>
        <button
          onClick={next}
          className="arrow-btn orange"
          disabled={index === images.length - 1}
        >
          ›
        </button>
      </div>

      <style>{`
        .gallery-container {
        max-width:1400px;
          width: 100%;
          margin: 0 auto;
          font-family: 'Poppins', sans-serif;
        }

        .gallery-title {
          font-size: 36px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .line-left {
          width: 180px;
          height: 4px;
          background-color: #FF7757;
          margin-bottom: 15px;
        }

        .gallery-sub {
          font-size: 14px;
          color: #666;
          margin-bottom: 25px;
        }

        .gallery-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .gallery-arrows {
          display: flex;
          gap: 10px;
        }

        .arrow-btn {
          width: 35px;
          height: 35px;
          border-radius: 8px;
          background: #1f2937;
          color: white;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }

        .arrow-btn.orange {
          background: #f97316;
        }

        .arrow-btn:disabled {
          opacity: 0.6;
          cursor: default;
        }

        .gallery-wrapper {
          overflow: hidden;
          width: 100%;
        }

        .gallery-track {
          display: flex;
          gap: 25px;
          transition: transform 0.5s ease;
        }

        .gallery-card {
          min-width: 400px;
          height: 580px;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
        }

        .gallery-card img {
          width: 100%;
          height: 120%;
          object-fit: cover;
          transform: translateY(0);
          transition: transform 4s ease;
        }

        .gallery-card:hover img {
          transform: translateY(-30%);
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .gallery-container {
            padding: 40px 20px;
          }

          .gallery-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .gallery-card {
            min-width: 100%;
            height: 390px;
          }

          .gallery-track {
            flex-direction: column;
            gap: 20px;
            transition: transform 0.5s ease;
          }

          .gallery-card img {
            height: 100%;
            transform: translateY(0) !important;
          }

          .desktop-only {
            display: none;
          }

          .mobile-only {
            display: flex;
            justify-content: center;
            margin-top: 15px;
            margin-bottom: 10px;
          }
        }

        @media (min-width: 769px) {
          .mobile-only {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}



