import React from "react";

const Hero = () => {
  return (
    <>
      <div
        id="seeHome"
        className="text-black lg:px-24 pt-28 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-y-10 bg-gray-100 min-h-full"
      >
        <div className="grid grid-cols-1 text-left gap-y-10">
          <p className="text-lg md:text-4xl px-3">
            Welcome to{" "}
            <span className="text-left text-[#36B34B] font-bold uppercase">
              tvc Vietnam
            </span>
          </p>
          <p className="text-left text-lg md:text-3xl px-3">
            Wood pellets can be used instead of charcoal, firewood, oil and gas
            in heating, cooking, boiler and power plants.
          </p>
          <p className="text-left text-lg px-3">
            An alternative use for wood pellets is animal bedding such as in
            horse stalls, and all of our pellets are excellent for this..
          </p>
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
