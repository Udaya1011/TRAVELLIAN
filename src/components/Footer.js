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
          <h3 className="brand-name">
            <svg
              width="51"
              height="26"
              viewBox="0 0 41 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.443 33.0515L20.3596 38.8842L26.2762 33.0515L20.3596 27.2189L14.443 33.0515ZM20.3596 4.74504V4.75381C18.6662 4.75381 16.9728 5.39116 15.6827 6.66293L15.6768 6.65709C14.3896 7.92886 13.7431 9.60117 13.7431 11.2735C13.7431 12.9487 14.3867 14.6181 15.6708 15.884H15.6797L20.3596 20.4946L25.0366 15.884H25.0455C26.3385 14.6093 26.985 12.9399 26.985 11.2735H26.9761C26.9761 9.6041 26.3296 7.93471 25.0395 6.66293C23.7405 5.38531 22.0471 4.74504 20.3596 4.74504ZM29.6868 36.4137L22.0649 43.9274L20.3596 45.6085L18.6543 43.9274L11.0325 36.4137L3.41057 43.9274L0 40.5652L16.952 23.8568L12.2751 19.2462L12.281 19.2404C10.0419 17.0359 8.92383 14.1503 8.92383 11.2735C8.92383 8.39372 10.0419 5.51103 12.2751 3.30954V3.30369C14.5083 1.10221 17.4354 0 20.3596 0V0.00877086C23.2898 0.00877086 26.2199 1.10805 28.4471 3.30369C30.6803 5.50518 31.7954 8.39079 31.7954 11.2764H31.7865C31.7865 14.1591 30.6714 17.0418 28.4412 19.2433L28.4471 19.2491L23.7702 23.8568L40.7193 40.5652L37.3087 43.9274L29.6868 36.4137Z"
                fill="white"
              />
            </svg>
            Travellian
          </h3>
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
