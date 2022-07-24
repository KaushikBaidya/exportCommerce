import React from "react";

const Hero = () => {
  return (
    <>
      <div
        id="seeHome"
        className="text-black lg:px-24 py-28 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-y-10 bg-gray-100 min-h-full"
      >
        <div className="grid grid-cols-1 text-left gap-y-10">
          <p className="text-lg md:text-4xl px-3">
            Welcome to{" "}
            <span className="text-left text-red-600 font-bold uppercase">
              tvc trading company
            </span>
          </p>
          <p className="text-left text-lg md:text-3xl px-3">
            Sed do eiusmod tempor incididunt ut labore et dol. Eiusmod tempor
            incididunt ut labore et dol.
          </p>
          <p className="text-left text-lg px-3">
            sed do eiusmod tempor incididunt ut labore et dol.
          </p>
          <button className="w-2/4 transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300 px-5 py-2 ml-3">
            Contact Us
          </button>
        </div>
        <div className="w-full grid grid-cols-1 content-center justify-items-center p-5">
          <img
            className="rounded-lg shadow-xl"
            src="https://images.wsj.net/im-95692/OR"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
