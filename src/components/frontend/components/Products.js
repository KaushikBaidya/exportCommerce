import React from "react";
import Minerels from "./Minerels";
import Wood from "./Wood";

function Products() {
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold  text-[#372948] md:text-5xl text-center max-w-7xl mx-auto">
          Our Products
        </h1>
        <Wood />
        <Minerels />
      </section>
    </>
  );
}

export default Products;
