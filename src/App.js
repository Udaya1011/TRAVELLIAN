import React from "react";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Offers from "./components/Offers";
import Blog from "./components/Blog";
import TripPlanners from "./components/TripPlanners";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-wrapper">
      <Hero />
      <main>
        <Destinations />
        <Offers />
        <Blog />
        <TripPlanners />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
