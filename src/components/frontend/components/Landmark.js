import React from "react";
// import { useTranslation } from "react-i18next";

function Landmark() {
  // const { t } = useTranslation(["landmark"]);
  return (
    <section
      id="seeAbout"
      className="grid grid-cols-1 px-6 justify-items-center pt-20 h-full"
    >
      <h1 className="text-4xl font-bold mb-5">
        <span className="text-[#36B34B]">About </span>
        <span className="text-[#F5921E]">US</span>
      </h1>
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 my-5">
        <img
          src="https://fireplaceuniverse.com/wp-content/uploads/pellet-stove-pellets-burning.jpg"
          className="h-56 rounded-lg"
          alt=""
        />
        <div className="flex flex-col text-lg">
          <p className="text-justify my-2">
            Climate change is a global challenge and fighting it requires
            coordinated actions by all countries in the world. Bioenergy is a
            key strategy to reduce carbon emissions and limit dependence on
            fossil fuels.
          </p>
          <p className="text-justify mb-2">
            Since Vietnam has the advantage in large sustainably planted forest
            areas, it is a potential country to develop strong logging and
            biomass energy industry.{" "}
          </p>
        </div>
      </div>
      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 justify-items-center gap-5 my-5">
        <div className="flex flex-col text-lg">
          <p className="text-justify my-2">
            TVC VietNam is founded to play a key role in reducing the emissions
            that contribute to global warming and climate change by producing
            wood products such as wood pellets, rice husk briquette, sawdust
            briquette, bamboo sawdust briquette, and charcoal….
          </p>
          <p className="text-justify mb-2">
            We have a lot of experience in exporting products such as Wood
            pellets, charcoal, chip block, and rice husk briquettes….. to
            markets such as China, Korea, India, Japan, and fastidious markets.
            like Europe.
          </p>
        </div>
        <img
          src="https://fireplaceuniverse.com/wp-content/uploads/pellet-stove-pellets-burning.jpg"
          className="h-56 rounded-lg"
          alt=""
        />
      </div>
      <p className="max-w-5xl text-justify text-lg my-5">
        We wish all the citizens of the world have a lot of happiness and
        healthy, together with us fighting climate change by replacing coal and
        encouraging afforestation to protect the environment.
      </p>
    </section>
  );
}

export default Landmark;
