import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-white bg-white antialiased">
        <div className="py-20 bg-banner bg-cover h-full bg-no-repeat bg-fixed">
          <div className="w-1/2 grid grid-cols-1 text-left gap-y-10 px-10 py-20 ">
            <p className="text-lg md:text-4xl px-3">
              Welcome to{" "}
              <span className="text-left text-[#F5921E] font-bold uppercase">
                tvc Vietnam
              </span>
            </p>
            <p className="text-left text-lg md:text-3xl px-3">
              Wood pellets can be used instead of charcoal, firewood, oil and
              gas in heating, cooking, boiler and power plants.
            </p>
            <p className="text-left text-lg px-3">
              An alternative use for wood pellets is animal bedding such as in
              horse stalls, and all of our pellets are excellent for this..
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
