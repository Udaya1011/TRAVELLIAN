import React, { useState } from "react";

const offers = [
  {
    id: 1,
    city: "Lisbon, Portugal",
    price: 500,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSws5Yo_kI_X3beQ6b4RQQCsUPkJOE_z-2dWOq01NlYHJvJ6lzuULwepNHU6jjZbL9mh80rgkZlOziGHdBuhUSVYOWQ6_7OyGBhwHci0cdVC-EwziMUDcMeHrr_EBxnPxmE9bevkWg=w810-h468-n-k-no",
    rating: 4,
    description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included..."
  },
  {
    id: 2,
    city: "Athens, Greece",
    price: 800,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSa1YFgKQO681OqDihV4Pgp_YeqnxhddgQ8PuUwYbyRxr0PGZyfc4O1eSnjSq5cFcrpYYwaTnn-yJad2eTbwnNqsBs&s=19",
    rating: 4,
    description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included..."
  },
  {
    id: 3,
    city: "Rome, Italy",
    price: 750,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQSkq0Z3ayJx4vsy3T_672xIF3Ak4v6KFwLEDg4qv_PBebQPyCwlPZ2A8T0TBF3UtqeG1Gr8PCYTtX7a0ElxnP57KA&s=19",
    rating: 4,
    description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included..."
  },{
    id: 1,
    city: "Lisbon, Portugal",
    price: 500,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSws5Yo_kI_X3beQ6b4RQQCsUPkJOE_z-2dWOq01NlYHJvJ6lzuULwepNHU6jjZbL9mh80rgkZlOziGHdBuhUSVYOWQ6_7OyGBhwHci0cdVC-EwziMUDcMeHrr_EBxnPxmE9bevkWg=w810-h468-n-k-no",
    rating: 4,
    description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included..."
  },
  {
    id: 2,
    city: "Athens, Greece",
    price: 800,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSa1YFgKQO681OqDihV4Pgp_YeqnxhddgQ8PuUwYbyRxr0PGZyfc4O1eSnjSq5cFcrpYYwaTnn-yJad2eTbwnNqsBs&s=19",
    rating: 4,
    description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included..."
  },
  {
    id: 3,
    city: "Rome, Italy",
    price: 750,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQSkq0Z3ayJx4vsy3T_672xIF3Ak4v6KFwLEDg4qv_PBebQPyCwlPZ2A8T0TBF3UtqeG1Gr8PCYTtX7a0ElxnP57KA&s=19",
    rating: 4,
    description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included..."
  },{
    id: 1,
    city: "Lisbon, Portugal",
    price: 500,
    img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSws5Yo_kI_X3beQ6b4RQQCsUPkJOE_z-2dWOq01NlYHJvJ6lzuULwepNHU6jjZbL9mh80rgkZlOziGHdBuhUSVYOWQ6_7OyGBhwHci0cdVC-EwziMUDcMeHrr_EBxnPxmE9bevkWg=w810-h468-n-k-no",
    rating: 4,
    description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included..."
  },
  {
    id: 2,
    city: "Athens, Greece",
    price: 800,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSa1YFgKQO681OqDihV4Pgp_YeqnxhddgQ8PuUwYbyRxr0PGZyfc4O1eSnjSq5cFcrpYYwaTnn-yJad2eTbwnNqsBs&s=19",
    rating: 4,
    description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included..."
  },
  {
    id: 3,
    city: "Rome, Italy",
    price: 750,
    img: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQSkq0Z3ayJx4vsy3T_672xIF3Ak4v6KFwLEDg4qv_PBebQPyCwlPZ2A8T0TBF3UtqeG1Gr8PCYTtX7a0ElxnP57KA&s=19",
    rating: 4,
    description: "5 nights and 4 days in 5 star hotel, breakfast and lunch included..."
  }
];

export default function SpecialOffers() {
  const cardWidth = 330; 
  const visibleCount = 3;

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < offers.length - visibleCount) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="offers-container" style={{paddingTop:"140px",paddingLeft:"182px",paddingRight:"182px" }}>

      <div className="header-row">
        <div className="slider-buttons">
          <button className="btn dark" onClick={prev}>←</button>
          <button className="btn orange" onClick={next}>→</button>
        </div>

        <div className="offers-header" >
          <h2>Special Offer</h2>
          <h2 className="line"></h2>
          <p>Check out our special offer and discounts</p>
        </div>
      </div>

      {/* SLIDER */}
      <div className="carousel-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * cardWidth}px)`
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

      <style>{`
        .offers-container { 
          padding: 50px; 
          font-family: Poppins;
        }

        /* ROW: Buttons Left + Text Right */
        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        /* Buttons on LEFT */
        .slider-buttons {
          display: flex;
          gap: 15px;
        }

        /* Header on RIGHT */
        .offers-header {
          text-align: right;
        }

        .offers-header h2 {
          font-size: 36px;
          font-weight: 600;
          margin: 0;
        }
        .offers-header p {
          color: #555;
          margin-top: 6px;
        }
          .line{
           width: 365px;       /* width of the line */
  height: 0;          /* line thickness is handled by border */
  border: 3px solid #FF7757; 
  opacity: 1;         /* fully visible */
  margin: 0;}

        .btn {
          width:40px; height:40px; border-radius:6px;
          border:none; cursor:pointer; font-size:18px;
        }
        .btn.dark { background:#0d1b2a; color:white; }
        .btn.orange { background:#ff7446; color:white; }

        /* Carousel wrapper */
        .carousel-wrapper {
          width:100%;
          overflow:hidden;
        }

        .carousel-track {
          display:flex;
          gap:30px;
          transition:transform 0.5s cubic-bezier(.25,.46,.45,.94);
        }

        /* Card */
        .offer-card {
          width:300px;
          flex-shrink:0;
          background:#FF77571A;
          border-radius:14px;
          overflow:hidden;
        }

        .offer-img {
          width:497px;
          height:286px;
          object-fit:cover;
        }

        .offer-content { padding:20px; }
        .offer-content h3 { margin-bottom:6px; }

        .stars span { color:#ffbf00; }

        .desc { font-size:13px; color:#555; margin:12px 0; }

        .price-row {
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .price { color:#ff7446; font-weight:600; }

        .details-btn {
          background:#ff7446; border:none;
          padding:8px 15px; color:white; border-radius:6px;
        }

      `}</style>
    </div>
  );
}
