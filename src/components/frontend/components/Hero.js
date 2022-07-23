import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-white lg:px-24 py-28 grid grid-cols-1 content-center justify-items-center gap-y-10 bg-banner bg-cover bg-no-repeat h-screen xl:h-[100vh] 3xl:h-[70vh]">
        <p className="text-center text-lg md:text-2xl px-3">
          welcome to sample
        </p>
        <p className="text-center text-3xl md:text-6xl px-3 leading-10  uppercase">
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-center text-lg md:text-3xl px-5">
          sed do eiusmod tempor incididunt ut labore et dol.
        </p>
        <button className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 px-4 py-2">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Hero;
