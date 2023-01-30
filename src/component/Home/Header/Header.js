import React from "react";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <HeroSection />
    </div>
  );
};

export default Header;
