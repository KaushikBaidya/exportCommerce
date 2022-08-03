import React from "react";
// import { useTranslation } from "react-i18next";

function Landmark() {
  // const { t } = useTranslation(["landmark"]);
  return (
    <section id="seeAbout" className="border-b py-20 h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-x-6 items-center">
        <div>
          <img
            src="https://fireplaceuniverse.com/wp-content/uploads/pellet-stove-pellets-burning.jpg"
            className="rounded-lg w-5/6 mx-auto"
            alt=""
          />
        </div>
        <div className="text-black grid md:text-xl gap-y-5 mt-2 md:mt-0">
          <h1 className="font-bold text-xl md:text-xl lg:text-4xl font-mono text-center">
            About{" "}
            <span className="md:text-2xl lg:text-5xl text-[#ED1A37]">TVC</span>
          </h1>
          <p className="text-left">
            The TVC VIETNAM online marketplace, which is a registered trademark
            and must register the terms and conditions of the site with the
            Patent and Trademark Office, was one of three sellers on market.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landmark;
