import React, { useState } from "react";

const testimonials = [
  {
    img: "/images/user1.png",
    name: "John Doe",
    role: "Accountant",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth.",
  },
  {
    img: "/images/user2.png",
    name: "John Smith",
    role: "Journalist, HWO News",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth.",
  },
  {
    img: "/images/user3.png",
    name: "Tamara Bellis",
    role: "Managing Director, JTH",
    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  const handleNext = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <div className="test-container">
      <h2 className="test-title">Traveler’s Experiences</h2>
      <p className="test-subtitle">Here some awesome feedback from our travelers</p>

      <div className="scroll-wrapper">
        <div className="scroll-row">
          {testimonials.map((t, i) => (
            <div className="test-card" key={i}>
              <img src={t.img} alt="" className="test-img" />
              <p className="test-text">{t.text}</p>
              <div className="test-stars">★★★★★</div>
              <h4 className="test-name">{t.name}</h4>
              <p className="test-role">{t.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="test-mobile">
        <div className="test-card">
          <img src={testimonials[index].img} className="test-img" alt="" />
          <p className="test-text">{testimonials[index].text}</p>
          <div className="test-stars">★★★★★</div>
          <h4 className="test-name">{testimonials[index].name}</h4>
          <p className="test-role">{testimonials[index].role}</p>
        </div>

        <div className="slider-buttons">
          <button className="btn-prev" onClick={handlePrev}>‹</button>
          <button className="btn-next" onClick={handleNext}>›</button>
        </div>
      </div>
      <style>
        {`
        .test-container {
  width: 100%;
  padding: 60px 160px;
}

.test-title {
  font-size: 36px;
  font-weight: 600;
}

.test-subtitle {
  color: #666;
  margin-bottom: 40px;
}

.scroll-wrapper {
  overflow-x: auto;
  padding-right: 150px; 
  scroll-behavior: smooth; 
}

.scroll-row {
  display: flex;
  gap: 25px;
  padding-bottom: 20px;
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

.slider-buttons {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn-prev,
.btn-next {
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

@media (max-width: 768px) {
  .scroll-wrapper {
    display: none;
  }

  .test-mobile {
    display: block;
  }

  .test-card {
    min-width: 100%;
  }
}

        `}
      </style>
    </div>
  );
}
