import React, { useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex(index === 0 ? 2 : index - 1);
  const handleNext = () => setIndex(index === 2 ? 0 : index + 1);

  return (
    <div className="test-container">
      <h2 className="test-title">Traveler’s Experiences</h2>
      <div className="line3"></div>
      <p className="test-subtitle">
        Here some awesome feedback from our travelers
      </p>

      <div className="scroll-wrapper">
        <div className="scroll-row">
          <div className="test-card">
            <img src="/images/user1.png" className="test-img" alt="" />
            <p className="test-text">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system...
            </p>
            <div className="test-stars">★★★★★</div>
            <h4 className="test-name">John Doe</h4>
            <p className="test-role">Accountant</p>
          </div>

          <div className="test-card">
            <img src="/images/user2.png" className="test-img" alt="" />
            <p className="test-text">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system...
            </p>
            <div className="test-stars">★★★★★</div>
            <h4 className="test-name">John Smith</h4>
            <p className="test-role">Journalist, HWO News</p>
          </div>

          <div className="test-card">
            <img src="/images/user3.png" className="test-img" alt="" />
            <p className="test-text">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system...
            </p>
            <div className="test-stars">★★★★★</div>
            <h4 className="test-name">Tamara Bellis</h4>
            <p className="test-role">Managing Director, JTH</p>
          </div>
        </div>
      </div>

      <div className="test-mobile">
        {index === 0 && (
          <div className="test-card mobile-card">
            <img src="/images/user1.png" className="test-img" alt="" />
            <p className="test-text">
              But I must explain to you how this mistaken idea began...
            </p>
            <div className="test-stars">★★★★★</div>
            <h4 className="test-name">John Doe</h4>
            <p className="test-role">Accountant</p>
          </div>
        )}

        {index === 1 && (
          <div className="test-card mobile-card">
            <img src="/images/user2.png" className="test-img" alt="" />
            <p className="test-text">
              But I must explain to you how this mistaken idea began...
            </p>
            <div className="test-stars">★★★★★</div>
            <h4 className="test-name">John Smith</h4>
            <p className="test-role">Journalist, HWO News</p>
          </div>
        )}

        {index === 2 && (
          <div className="test-card mobile-card">
            <img src="/images/user3.png" className="test-img" alt="" />
            <p className="test-text">
              But I must explain to you how this mistaken idea began...
            </p>
            <div className="test-stars">★★★★★</div>
            <h4 className="test-name">Tamara Bellis</h4>
            <p className="test-role">Managing Director, JTH</p>
          </div>
        )}

        <div className="slider-buttons">
          <button className="btn-prev" onClick={handlePrev}>
            ‹
          </button>
          <button className="btn-next" onClick={handleNext}>
            ›
          </button>
        </div>
      </div>

      <style>
        {`
.test-container {
  max-width: 1400px;
  width: 100%;
  padding: 160px 70px 0 70px;
  font-family: Poppins, sans-serif;
}

.test-title {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 10px;
}

.line3 {
  width: 250px;
  height: 3px;
  background-color: #FF7757;
  border-radius: 2px;
}

.test-subtitle {
  color: #666;
  margin-bottom: 35px;
  max-width: 500px;
}

.scroll-wrapper {
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 10%;
}

.scroll-row {
  display: flex;
  gap: 25px;
}

.test-card {
  min-width: 330px;
  background: #f4f6f8;
  padding: 25px;
  border-radius: 14px;
}

.test-img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 15px;
  object-fit: cover;
}

.test-text {
  font-size: 14px;
  color: #444;
  margin-bottom: 10px;
}

.test-stars {
  color: #ffb400;
  font-size: 18px;
  margin-bottom: 10px;
}

.test-name {
  font-size: 16px;
  font-weight: 600;
}

.test-role {
  font-size: 13px;
  color: gray;
}

.test-mobile {
  display: none;
}

@media (max-width: 768px) {
  .scroll-wrapper {
    display: none;
  }
  .test-mobile {
    display: block;
    width: 100%;
    padding-bottom: 20%;
  }
  .slider-buttons {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  .btn-prev, .btn-next {
    padding: 10px 18px;
    border-radius: 6px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    background: #e6e6e6;
    transition: 0.3s;
  }
  .btn-next {
    background: #ff7b2f;
    color: white;
  }
}
        `}
      </style>
    </div>
  );
}
