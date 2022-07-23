import React from "react";
import Hero from "../components/Hero";
import Landmark from "../components/Landmark";
import Map from "../components/Map";
import Products from "../components/Products";

function Landing() {
  return (
    <div className="max-w-screen-2xl xl:max-w-screen-3xl mx-auto">
      <Hero />
      <Products />
      <Landmark />
      <Map />
    </div>
  );
}

export default Landing;
