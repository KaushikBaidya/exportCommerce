import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation(["about"]);
  return (
    <>
      <section className="border-b py-20 min-h-screen">
        <div className="w-full mx-auto h-72 bg-[url('https://images.unsplash.com/photo-1622649396178-b56dfd532226?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=910&q=80')] bg-cover">
          <h1 className="text-4xl font-bold text-white sm:mt-4 lg:text-6xl text-center px-5 py-20">
            {t("title")}
            <br />
            {t("subTitle")}
          </h1>
        </div>
        <div className="h-full grid grid-cols-1 content-center">
          <p className="text-xl lg:text-lg sm:mt-4 text-justify px-15 pb-10 mx-10 lg:mx-20 justify-center font-mono">
            <span className="uppercase font-semibold">{t("article1")}</span>{" "}
            {t("article2")}
          </p>
          {/* <img src="https://flagicons.lipis.dev/flags/4x3/bd.svg" alt="" /> */}
          <div className="container max-w-7xl h-full mx-auto flex flex-wrap justify-around">
            <img
              src="/images/about_image_middle.jpg"
              className="max-w-2xl overflow-hidden"
              alt=""
            />
            <div className="max-w-2xl overflow-hidden">
              <p className="text-xl lg:text-lg sm:mt-4 text-justify px-10 pb-10 font-mono">
                {t("article3")}
              </p>
            </div>
          </div>

          <p className="text-xl lg:text-lg sm:mt-4 text-justify px-15 pb-10 mx-10 lg:mx-20 justify-center font-mono">
            {t("article4")}
          </p>
          <p className="text-xl lg:text-lg sm:mt-4 text-justify px-15 pb-10 mx-10 lg:mx-20 justify-center font-mono">
            {t("article5")}
          </p>
        </div>
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="text-2xl font-bold text-orange-600 sm:mt-4 sm:text-4xl lg:text-2xl text-center px-5 font-serif uppercase">
            {t("article6")}
          </h2>
        </div>
      </section>
    </>
  );
}

export default About;
