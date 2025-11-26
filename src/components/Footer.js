import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer-wrapper">

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />

      <div className="newsletter-box">
        <h2 className="newsletter-title">Our Newsletter</h2>

        <div className="newsletter-right">
          <label>Email</label>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-content">

        <div className="footer-col brand-col">
          <h3 className="brand-name">Travellian</h3>
          <p>Copyright © Travellian 2023 All rights reserved</p>
        </div>

        <div className="footer-col">
          <h4>Menu</h4>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Travel</li>
            <li>Blog</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            <li>Destinations</li>
            <li>Supports</li>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>+123 456 789</p>
          <p>info@travellian.com</p>
          <p>1245, New York, USA</p>
        </div>

        <div className="footer-col social-col">
          <h4>Follow us on</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>
      </div>

      <style>
        {`
.footer-wrapper {
  background: #0d1b2a;
  padding: 0 20px 70px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.newsletter-box {
  background: #ffffff;
  margin-top: -50px;
  width: 90%;
  max-width: 900px;
  border-radius: 20px;
  padding: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.12);
}

.newsletter-title {
  font-size: 32px;
  font-weight: 500;
  color: #333;
}

.newsletter-right {
  display: flex;
  flex-direction: column;
}

.newsletter-form {
  margin-top: 6px;
  display: flex;
  gap: 10px;
}

.newsletter-form input {
  padding: 12px 16px;
  width: 260px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

.newsletter-form button {
  padding: 12px 22px;
  background: linear-gradient(90deg,#ffa97a,#ff7b5c);
  border: none;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}

.footer-content {
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-col {
  min-width: 160px;
}

.brand-col {
  flex: 1;
}

.brand-name {
  font-size: 28px;
  font-weight: bold;
}

.footer-col h4 {
  margin-bottom: 12px;
  font-size: 18px;
}

.footer-col ul {
  padding: 0;
  list-style: none;
}

.footer-col ul li {
  margin-bottom: 6px;
  font-size: 14px;
}

.social-icons {
  display: flex;
  gap: 15px;
  font-size: 20px;
  margin-top: 10px;
}

@media (max-width: 768px) {

  .newsletter-box {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  .newsletter-form {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .newsletter-form input {
    width: 100%;
  }

  .footer-content {
    flex-direction: column;
    gap: 35px;
  }

  .footer-col {
    width: 100%;
  }

  
}
        `}
      </style>
    </footer>
  );
};

export default Footer;
