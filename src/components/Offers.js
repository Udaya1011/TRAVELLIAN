import React, { useState } from "react";

const offers = [
  {
    id: 1,
    city: "Lisbon, Portugal",
    price: 500,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSws5Yo_kI_X3beQ6b4RQQCsUPkJOE_z-2dWOq01NlYHJvJ6lzuULwepNHU6jjZbL9mh80rgkZlOziGHdBuhUSVYOWQ6_7OyGBhwHci0cdVC-EwziMUDcMeHrr_EBxnPxmE9bevkWg=w810-h468-n-k-no",
    rating: 4,
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included...",
  },
  {
    id: 2,
    city: "Athens, Greece",
    price: 800,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSa1YFgKQO681OqDihV4Pgp_YeqnxhddgQ8PuUwYbyRxr0PGZyfc4O1eSnjSq5cFcrpYYwaTnn-yJad2eTbwnNqsBs&s=19",
    rating: 4,
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included...",
  },
  {
    id: 3,
    city: "Rome, Italy",
    price: 750,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQSkq0Z3ayJx4vsy3T_672xIF3Ak4v6KFwLEDg4qv_PBebQPyCwlPZ2A8T0TBF3UtqeG1Gr8PCYTtX7a0ElxnP57KA&s=19",
    rating: 4,
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included...",
  },
  {
    id: 4,
    city: "Paris, France",
    price: 900,
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    rating: 5,
    description:
      "Luxurious stay in the heart of Paris with breakfast included...",
  },
];

export default function SpecialOffers() {
  const [index, setIndex] = useState(0);
  const visibleDesktop = 3;
  const visibleMobile = 1;

  const next = () => {
    const maxIndex =
      window.innerWidth > 768
        ? offers.length - visibleDesktop
        : offers.length - visibleMobile;
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="offers-container">
      <div className="header-row">
        <div className="offers-header">
          <h2>Special Offer</h2>
          <div className="line"></div>
          <p>Check out our special offers and discounts</p>
        </div>

        <div className="slider-buttons desktop">
          <button className="btn dark" onClick={prev}>
            ←
          </button>
          <button className="btn orange" onClick={next}>
            →
          </button>
        </div>
      </div>

      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * (320 + 20)}px)`,
          }}
        >
          {offers.map((offer) => (
            <div className="offer-card" key={offer.id}>
              <img src={offer.img} alt={offer.city} className="offer-img" />
              <div className="offer-content">
                <h3>{offer.city}</h3>
                <div className="stars">
                  {Array.from({ length: offer.rating }).map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                <p className="desc">{offer.description}</p>
                <div className="price-row">
                  <span className="price">From €{offer.price}</span>
                  <button className="details-btn">DETAILS</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="slider-buttons mobile">
        <button className="btn dark" onClick={prev}>
          ←
        </button>
        <button className="btn orange" onClick={next}>
          →
        </button>
      </div>

      <style>{`
        .offers-container {
          padding: 50px 20px;
          font-family: Poppins, sans-serif;
          max-width: 1400px;
          margin: auto;
        }

        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .offers-header {
          text-align: left;
        }

        .offers-header h2 {
          font-size: 32px;
          margin: 0;
        }

        .line {
          width: 120px;
          height: 3px;
          background-color: #FF7757;
          margin: 8px 0;
        }

        .offers-header p {
          font-size: 14px;
          color: #555;
          margin: 5px 0 0 0;
        }

        .slider-buttons {
          display: flex;
          gap: 15px;
        }
        .slider-buttons.desktop { display: flex; }
        .slider-buttons.mobile { display: none; justify-content: center; margin-top: 15px; }

        .btn {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-size: 18px;
        }
        .btn.dark { background:#0d1b2a; color:white; }
        .btn.orange { background:#ff7446; color:white; }

        .carousel-wrapper { overflow: hidden; }

        .carousel-track {
          display: flex;
          gap: 20px;
          transition: transform 0.4s ease;
        }

        .offer-card {
          width: 320px;
          flex-shrink: 0;
          background: #FF77571A;
          border-radius: 14px;
          overflow: hidden;
        }

        .offer-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }

        .offer-content { padding: 15px; }
        .offer-content h3 { margin-bottom: 5px; font-size: 18px; }
        .stars span { color: #ffbf00; font-size: 14px; }
        .desc { font-size: 13px; color: #555; margin: 10px 0; }

        .price-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price { color:#ff7446; font-weight:600; font-size: 14px; }

        .details-btn {
          background:#ff7446;
          border:none;
          padding:6px 12px;
          color:white;
          border-radius:6px;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .header-row { flex-direction: column; align-items: center; }
          .slider-buttons.desktop { display: none; }
          .slider-buttons.mobile { display: flex; }
          .offers-container { padding: 30px 15px; }
          .offer-card { width: 90%; margin: auto; }
          .offer-img { height: 200px; }
          .carousel-track { gap: 15px; }
        }
      `}</style>
    </div>
  );
}
