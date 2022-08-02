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
            <span className="text-left text-[#ED1A37] font-bold uppercase">
              tvc Vietnam
            </span>
          </p>
          <p className="text-left text-lg md:text-3xl px-3">
            Sed do eiusmod tempor incididunt ut labore et dol. Eiusmod tempor
            incididunt ut labore et dol.
          </p>
          <p className="text-left text-lg px-3">
            sed do eiusmod tempor incididunt ut labore et dol.
          </p>
          {/* <button
            class="btn2 w-96 mt-4 px-10 py-5 relative border border-red-500 uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-white"
            type="button"
          >
            <span class="absolute inset-0 bg-red-500"></span>
            <span class="absolute inset-0 flex justify-center items-center font-bold">
              Learn More
            </span>
            Learn More
          </button> */}
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
