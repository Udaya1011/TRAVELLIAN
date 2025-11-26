import React, { useState } from "react";

const HERO_BG = "/home.png"; 

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="hero-container"
      style={{ backgroundImage: `url(${HERO_BG})` }}
    >
      <nav className="navbar">
        <div className="logo" >Travellian</div>

        <div style={{position:"sticky"}} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}> 
          <li className="active">Home</li>
          <li>Explore</li>
          <li>Travel</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>

        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign up</button>
        </div>
      </nav>

      <div className="hero-text">
        <h1>
          Start your unforgettable <br /> journey with us.
        </h1>
        <p>The best travel for your journey begins now</p>
      </div>

      <div className="booking-box">
        <div className="form-group">
          <label>DESTINATION</label>
          <select>
            <option>Dubai</option>
            <option>London</option>
            <option>India</option>
            <option>Russia</option>
            <option>America</option>
          </select>
        </div>

        <div className="form-group">
          <label>PERSON</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div className="form-group">
          <label>CHECK IN</label>
          <input type="date" placeholder="Select Date" />
        </div>

        <div className="form-group">
          <label>CHECK OUT</label>
          <input type="date" placeholder="Select Date" />
        </div>

        <button className="book-btn" onClick={() => alert("Thanks for booking!")}>
          Book Now →
        </button>
      </div>
      <div class="right-sidebar">
  <div class="dot">
    
  </div>
</div> 
    </header>
  );
}
