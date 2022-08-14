import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation(["hero"]);
  return (
    <>
      <div id="seeHome" className="text-white bg-white antialiased">
        <div className="py-20 bg-banner bg-cover h-full bg-no-repeat bg-fixed">
          <div className="max-w-[1500px] mx-auto grid grid-cols-1 text-left gap-y-10 px-10 py-20 ">
            <div className="w-full lg:w-1/2 grid gap-y-5">
              <p className="text-2xl md:text-4xl px-3">
                {t("title")}{" "}
                <span className="text-left text-[#F5921E] font-bold uppercase">
                  {t("title1")}
                </span>
              </p>
              <p className="text-left text-lg md:text-3xl px-3">
                {t("subTitle")}
              </p>
              <p className="text-left text-lg px-3">{t("article")}</p>
              <a
                className="text-base lg:text-lg p-2 lg:p-3 m-2 lg:m-3 bg-[#F5921E] w-32 text-center rounded-lg"
                href="https://en.wikipedia.org/wiki/Pellet_fuel"
                target="_blank"
                rel="noreferrer"
              >
                {t("button")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
