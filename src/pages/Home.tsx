import React from "react";
import HeroSection from "../components/pages/home/HeroSection";

const Home: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <HeroSection />
      </div>
    </section>
  );
};

export default Home;
