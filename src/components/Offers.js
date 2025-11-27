import React, { useState } from "react";

export default function SpecialOffers() {
  const [index, setIndex] = useState(0);

  const totalSlides = 4; 

  const next = () => {
    const maxIndex =
      window.innerWidth > 768 ? totalSlides - 3 : totalSlides - 1;
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
          <div className="line11"></div>
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
          style={{ transform: `translateX(-${index * 340}px)` }}
        >
          <div className="offer-card">
            <img
              className="offer-img"
              src="https://lh3.googleusercontent.com/gps-cs-s/AG0ilSws5Yo_kI_X3beQ6b4RQQCsUPkJOE_z-2dWOq01NlYHJvJ6lzuULwepNHU6jjZbL9mh80rgkZlOziGHdBuhUSVYOWQ6_7OyGBhwHci0cdVC-EwziMUDcMeHrr_EBxnPxmE9bevkWg=w810-h468-n-k-no"
              alt="Lisbon"
            />
            <div className="offer-content">
              <h3>Lisbon, Portugal</h3>
              <div className="stars">⭐⭐⭐⭐</div>
              <p className="desc">
                5 nights and 4 days in 5 star hotel, breakfast and lunch
                included...
              </p>
              <div className="price-row">
                <span className="price">From €500</span>
                <button className="details-btn">DETAILS</button>
              </div>
            </div>
          </div>

          <div className="offer-card">
            <img
              className="offer-img"
              src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSa1YFgKQO681OqDihV4Pgp_YeqnxhddgQ8PuUwYbyRxr0PGZyfc4O1eSnjSq5cFcrpYYwaTnn-yJad2eTbwnNqsBs&s=19"
              alt="Athens"
            />
            <div className="offer-content">
              <h3>Athens, Greece</h3>
              <div className="stars">⭐⭐⭐⭐</div>
              <p className="desc">
                5 nights and 4 days in 5 star hotel, breakfast and lunch
                included...
              </p>
              <div className="price-row">
                <span className="price">From €800</span>
                <button className="details-btn">DETAILS</button>
              </div>
            </div>
          </div>

          <div className="offer-card">
            <img
              className="offer-img"
              src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQSkq0Z3ayJx4vsy3T_672xIF3Ak4v6KFwLEDg4qv_PBebQPyCwlPZ2A8T0TBF3UtqeG1Gr8PCYTtX7a0ElxnP57KA&s=19"
              alt="Rome"
            />
            <div className="offer-content">
              <h3>Rome, Italy</h3>
              <div className="stars">⭐⭐⭐⭐</div>
              <p className="desc">
                5 nights and 4 days in 5 star hotel, breakfast and lunch
                included...
              </p>
              <div className="price-row">
                <span className="price">From €750</span>
                <button className="details-btn">DETAILS</button>
              </div>
            </div>
          </div>

          <div className="offer-card">
            <img
              className="offer-img"
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
              alt="Paris"
            />
            <div className="offer-content">
              <h3>Paris, France</h3>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p className="desc">
                Luxurious stay in the heart of Paris with breakfast included...
              </p>
              <div className="price-row">
                <span className="price">From €900</span>
                <button className="details-btn">DETAILS</button>
              </div>
            </div>
          </div>
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
  padding: 160px 70px 0 70px;
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

.offers-header h2 { font-size: 32px; }
.line11 { width: 170px; height: 3px; background:#FF7757; margin: 8px 0; }

.slider-buttons { display: flex; gap: 15px; }
.slider-buttons.mobile { display:none; }

.btn { width:40px; height:40px; border-radius:6px; border:none; cursor:pointer; }
.btn.dark { background:#0d1b2a; color:#fff; }
.btn.orange { background:#ff7446; color:#fff; }

.carousel-wrapper { overflow:hidden; }
.carousel-track {
  display:flex;
  gap:20px;
  transition: transform .4s ease;
}

.offer-card {
  width:320px;
  flex-shrink:0;
  background:#FF77571A;
  border-radius:14px;
  overflow:hidden;
}

.offer-img { width:100%; height:280px; object-fit:cover; }

.offer-content { padding:15px; }
.price-row { display:flex; justify-content:space-between; }

.details-btn {
  background:#ff7446;
  padding:6px 12px;
  color:white;
  border:none;
  border-radius:6px;
}

@media(max-width:768px){
  .slider-buttons.desktop { display:none; }
  .slider-buttons.mobile { display:flex; justify-content:center; margin-top:20px; }
  .offers-container { padding:30px 15px; }
  .offer-card { width:90%; margin:auto; }
  .offer-img { height:200px; }
}
`}</style>
    </div>
  );
}
