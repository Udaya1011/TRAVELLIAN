import React from "react";

const TripPlanners = () => {
  const tours = [
    {
     img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      title: "Paris City Tour",
      price: "€99/Day",
      rating: 5,
      days: "7 Days tour",
      highlight: true,
    },
    {
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      title: "Paris City Tour",
      price: "€99/Day",
      rating: 5,
      days: "7 Days tour",
      highlight: true,
    },
    {
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      title: "Paris City Tour",
      price: "€99/Day",
      rating: 5,
      days: "7 Days tour",
      highlight: true,
    },
    {
     img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      title: "Paris City Tour",
      price: "€99/Day",
      rating: 5,
      days: "7 Days tour",
      highlight: true,
    },
  ];

  return (
    <div className="trip-container">
      <div className="text-section">
        <h1>Trip Planners</h1>
        <h2 className="line3"></h2>
        <p>
          20 years from now you will be more disappointed by the things that you
          didn’t do. Stop regretting and start travelling, start throwing off
          the bowlines.
        </p>

        <button className="view-btn">View all trip plans</button>
      </div>

      <div className="cards-section">
        {tours.map((tour, index) => (
          <div
            key={index}
            className={`tour-card ${tour.highlight ? "highlight" : ""}`}
          >
            <img src={tour.img} alt="tour" />

            {tour.highlight && (
              <div className="info">
                <span className="guided">GUIDED TOUR</span>
                <span className="price">{tour.price}</span>
                <h3>{tour.title}</h3>

                <div className="rating">
                  {"★".repeat(tour.rating)}
                  <span className="days">{tour.days}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* --- CSS Added --- */}
      <style>
        {`
        .trip-container {
          width: 100%;
          display: flex;
          padding: 60px;
          gap: 60px;
          align-items: center;
          font-family: "Poppins", sans-serif;
        }

        .text-section {
          width: 30%;
        }

        .text-section h1 {
          font-size: 36px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .text-section p {
          color: #555;
          font-size: 14px;
          width: 80%;
          line-height: 1.6;
        }

        .view-btn {
          margin-top: 20px;
          padding: 12px 25px;
          background: #ee6347;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }

        .cards-section {
          display: flex;
          gap: 25px;
        }

        .tour-card {
          width: 160px;
          height: 240px;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .tour-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .tour-card:hover img {
          transform: scale(1.15);
        }

        .highlight {
          width: 200px;
          height: 300px;
        }

        .info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 12px;
          background: rgba(0, 0, 0, 0.4);
          color: white;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .highlight:hover .info {
          opacity: 1;
          transform: translateY(0);
        }
 .line3{
  width: 265px;       
  height: 0;          
  border: 3px solid #FF7757; 
  opacity: 1;         
  margin: 0;
  }
        .guided {
          font-size: 10px;
          font-weight: bold;
          color: #eee;
        }

        .price {
          float: right;
          font-size: 12px;
        }

        .highlight h3 {
          margin-top: 5px;
          font-size: 16px;
          font-weight: 600;
        }

        .rating {
          margin-top: 5px;
          font-size: 14px;
          color: gold;
        }

        .days {
          color: #ddd;
          font-size: 12px;
          margin-left: 10px;
        }

        @media (max-width: 900px) {
          .trip-container {
            flex-direction: column;
            text-align: center;
          }

          .text-section {
            width: 100%;
          }

          .cards-section {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        `}
      </style>
    </div>
  );
};

export default TripPlanners;
