import React from "react";
import { useTranslation } from "react-i18next";

function Landmark() {
  const { t } = useTranslation(["landmark"]);
  return (
    <section className="border-b py-20 h-full">
      <div className="h-full grid grid-cols-1 content-center bg-[#2d2d2dc6] my-10">
        <h1 className="text-2xl text-white sm:mt-4 sm:text-4xl lg:text-5xl text-center px-5 pt-10 uppercase tracking-wide font-mono">
          Sample Group Limited
        </h1>
        <p className=" text-xl sm:mt-4 text-white text-center px-5 py-10 uppercase italic font-light font-sans">
          {t("subTitle")}
        </p>
        <p className="text-white text-sm lg:text-2xl sm:mt-4 pb-10 mx-5 lg:mx-16 justify-center font-mono">
          {t("article")}
        </p>
        <br />
        <div className="w-full flex align-middle">
          <button className="bg-red-600 hover:bg-red-700 text-white font-normal text-xl px-4 w-40 h-10 m-auto">
            {t("button")}
          </button>
        </div>
        <br />
      </div>
    </section>
  );
}

export default Landmark;
