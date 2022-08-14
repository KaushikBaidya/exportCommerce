import React from "react";
import { useTranslation } from "react-i18next";

function Landmark() {
  const { t } = useTranslation(["about"]);
  return (
    <section
      id="seeAbout"
      className="grid grid-cols-1 px-6 justify-items-center pt-20 h-full"
    >
      <h1 className="text-4xl font-bold mb-5">
        <span className="text-[#36B34B] uppercase">{t("title")} </span>
        <span className="text-[#F5921E] uppercase">{t("title1")}</span>
      </h1>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center md:gap-5 my-5">
        <img
          src="images/gallery/burning.jpg"
          className="h-56 rounded-lg"
          alt=""
        />
        <div className="col-span-2 flex flex-col text-xl lg:pr-10">
          <p className="text-justify my-2">{t("article1")}</p>
          <p className="text-justify mb-2">{t("article2")}</p>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center md:gap-5 my-5">
        <div className="col-span-2 flex flex-col text-xl lg:pl-10">
          <p className="text-justify my-2">{t("article3")}</p>
          <p className="text-justify mb-2">{t("article4")}</p>
        </div>
        <img
          src="images/gallery/woodpellets.jpg"
          className="h-56 rounded-lg"
          alt=""
        />
      </div>
      <p className="max-w-[1500px] text-justify text-lg mb-10 lg:px-10">
        {t("article5")}
      </p>
    </section>
  );
}

export default Landmark;
