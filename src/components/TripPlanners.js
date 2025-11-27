import React from "react";

const TripPlanners = () => {
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
        <div className="tour-card highlight">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            alt="tour"
          />
          <div className="info">
            <span className="guided">GUIDED TOUR</span>
            <span className="price">€99/Day</span>
            <h3>Paris City Tour</h3>
            <div className="rating">
              ★★★★★ <span className="days">7 Days tour</span>
            </div>
          </div>
        </div>

        <div className="tour-card highlight">
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
            alt="tour"
          />
          <div className="info">
            <span className="guided">GUIDED TOUR</span>
            <span className="price">€79/Day</span>
            <h3>Rome Coliseum Tour</h3>
            <div className="rating">
              ★★★★★ <span className="days">5 Days tour</span>
            </div>
          </div>
        </div>

        <div className="tour-card highlight">
          <img
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
            alt="tour"
          />
          <div className="info">
            <span className="guided">GUIDED TOUR</span>
            <span className="price">€120/Day</span>
            <h3>London City Tour</h3>
            <div className="rating">
              ★★★★☆ <span className="days">6 Days tour</span>
            </div>
          </div>
        </div>

        <div className="tour-card highlight">
          <img
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
            alt="tour"
          />
          <div className="info">
            <span className="guided">GUIDED TOUR</span>
            <span className="price">€109/Day</span>
            <h3>Swiss Mountains</h3>
            <div className="rating">
              ★★★★★ <span className="days">8 Days tour</span>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        .trip-container {
          width: 100%;
          display: flex;
          padding: 160px 70px 0 70px;
          gap: 60px;
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
          width: 180px;
          height: 260px;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .tour-card:hover {
          transform: translateY(-20px);
          box-shadow: 0px 18px 28px rgba(0,0,0,0.18);
        }

        .tour-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .highlight {
          width: 220px;
          height: 320px;
        }

        .highlight .info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 14px;
          background: white;
          transform: translateY(100%);
          transition: transform 0.35s ease;
        }

        .highlight:hover .info {
          transform: translateY(0);
        }

        .guided {
          font-size: 10px;
          font-weight: 600;
          color: #444;
        }
        .price {
          float: right;
          font-size: 12px;
        }
        .rating {
          color: gold;
          margin-top: 4px;
        }
        .days {
          font-size: 12px;
          margin-left: 10px;
          color: #666;
        }

        .line3 {
          width: 365px;
          border: 3px solid #FF7757;
          margin: 0;
        }

        @media (max-width: 900px) {
          .trip-container {
            flex-direction: column;
            padding: 0;
            gap: 30px;
          }

          .text-section {
            width: 100%;
            padding: 0 15px;
          }

          .line3 {
            width: 50%;
          }

          .cards-section {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
            gap: 15px;
          }

          .highlight {
            width: 45%;
            height: 230px;
          }
        }

        @media (max-width: 450px) {
          .highlight {
            width: 90%;
            height: 530px;
          }

          .line3 {
            width: 80%;
          }
        }
        `}
      </style>
    </div>
  );
};

export default TripPlanners;
