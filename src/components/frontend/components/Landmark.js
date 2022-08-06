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
        <div className="text-black grid md:text-lg gap-y-5 mt-2 md:mt-0">
          <h1 className="font-bold text-xl md:text-xl lg:text-4xl font-mono text-center">
            About{" "}
            <span className="md:text-2xl lg:text-5xl text-[#ED1A37]">TVC</span>
          </h1>
          <p className="text-justify ">
            Climate change is a global challenge and fighting it requires
            coordinated actions by all countries in the world. Bioenergy is a
            key strategy to reduce carbon emissions and limit dependence on
            fossil fuels.
          </p>
          <p className="text-justify">
            Since Vietnam has the advantage in large sustainably planted forest
            areas, it is a potential country to develop strong logging and
            biomass energy industry.{" "}
          </p>
          <p className="text-justify">
            TVC VietNam is founded to play a key role in reducing the emissions
            that contribute to global warming and climate change by producing
            wood products such as wood pellets, rice husk briquette, sawdust
            briquette, bamboo sawdust briquette, and charcoal….
          </p>
          <p className="text-justify">
            We have a lot of experience in exporting products such as Wood
            pellets, charcoal, chip block, and rice husk briquettes….. to
            markets such as China, Korea, India, Japan, and fastidious markets.
            like Europe.
          </p>
          <p className="text-justify">
            We wish all the citizens of the world have a lot of happiness and
            healthy, together with us fighting climate change by replacing coal
            and encouraging afforestation to protect the environment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Landmark;
