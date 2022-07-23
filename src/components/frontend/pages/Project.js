import React from "react";
import { useTranslation } from "react-i18next";
// import vBg from "../../../assets/Video.m4v";
import ReactPlayer from "react-player";

function Project() {
  const { t } = useTranslation(["project"]);
  return (
    <>
      <section className="w-full h-full border-b pb-20 min-h-screen">
        <div className="pt-20 h-[360px] md:h-[520px] lg:h-[720px]">
          <ReactPlayer
            url="http://www.youtube.com/watch?v=HVxakoe2ftk&t=14s"
            width=""
            height="100%"
            playing={true}
            loop={true}
            muted={true}
          />
        </div>
        <div className="pt-10">
          <h1 className="text-2xl font-bold text-black sm:mt-4 sm:text-4xl lg:text-4xl text-center px-5 pb-1">
            {t("title1")}
          </h1>
        </div>
        <div className="container max-w-6xl h-full border-b-2 mx-auto mt-10 flex flex-wrap justify-around">
          <img
            src="/images/detail1.jpg"
            className="w-[80%] lg:w-[30%] h-full overflow-hidden mt-5 lg:pl-5"
            alt=""
          />
          <div className="w-[80%] lg:w-[50%] text-sm lg:text-lg mt-4 lg:mt-0 mx-10 overflow-hidden">
            <p className="text-justify pb-5 font-mono">
              {t("p1a")}
              <br />
              {t("p1b")}
            </p>
            <p className="text-justify text-sm pb-5 font-mono">
              {t("p1c")}
              <br />
              ✔️{t("p1d")}
            </p>
            <p className="text-justify text-sm pb-5 font-mono">
              🔶{t("p1e")}
              <br />
              🔶{t("p1f")}
              <br />
              🔶{t("p1g")}
              <br />
              🔶{t("p1h")}
              <br />
              🔶{t("p1i")}
              <br />
              🔶{t("p1j")}
              <br />
              🔷{t("p1k")}
            </p>
            <p className="text-justify text-sm pb-5 font-mono">💠{t("p11")}</p>
            <p className="text-justify text-sm pb-5 font-mono">💠{t("p12")}</p>
          </div>
        </div>
        <br />
        <div className="container max-w-6xl h-full border-b-2 mx-auto mt-10 flex flex-wrap justify-around">
          <img
            src="/images/detail2.jpg"
            className="w-[80%] lg:w-[30%] h-full overflow-hidden mt-5 lg:pl-5"
            alt=""
          />
          <div className="w-[80%] lg:w-[50%] text-sm lg:text-lg mt-4 lg:mt-0 mx-10 overflow-hidden">
            <p className="text-justify pb-5 font-mono">
              {t("p2a")}
              <br />
              {t("p2b")}
            </p>
            <p className="text-justify text-sm pb-5 font-mono">
              {t("p2c")}
              <br />
              ✔️ {t("p2d")}
            </p>
            <p className="text-justify text-sm pb-5 font-mono">
              🔶{t("p2e")}
              <br />
              🔶{t("p2f")}
              <br />
              🔶{t("p2g")}
              <br />
              🔶{t("p2h")}
              <br />
              🔶{t("p2i")}
              <br />
              🔶{t("p2j")}
              <br />
              🔷 {t("p2k")}
            </p>
            <p className="text-justify text-sm pb-5 font-mono">💠{t("p2")}</p>
            <p className="text-justify text-sm pb-5 font-mono">💠{t("p22")}</p>
          </div>
        </div>
        <br />
        <div className="container max-w-6xl h-full border-b-2 mx-auto mt-10 flex flex-wrap justify-around">
          <img
            src="/images/detail3.jpg"
            className="w-[80%] lg:w-[30%] h-full overflow-hidden mt-5 lg:pl-5"
            alt=""
          />
          <div className="w-[80%] lg:w-[50%] text-sm lg:text-lg mt-4 lg:mt-0 mx-10 overflow-hidden">
            <p className="text-justify pb-5 font-mono">
              {t("p3a")}
              <br />
              {t("p3b")}
            </p>
            <p className="text-justify text-sm pb-5 font-mono">
              {t("p3c")}
              <br />
              ✔️ {t("p3d")}
            </p>
            <p className="text-justify text-sm pb-5 font-mono">
              🔶{t("p3e")}
              <br />
              🔶{t("p3f")}
              <br />
              {/* 🔶পার্কিং সংখ্যা: ৯ টি + ২ অতিথি পার্কিং
              <br /> */}
              🔶{t("p3g")}
              <br />
              🔶{t("p3h")}
              <br />
              🔶{t("p3i")}
              <br />
              🔷{t("p3j")}
            </p>
            <p className="text-justify text-sm pb-5 font-mono">💠{t("p3")}</p>
            <p className="text-justify text-sm pb-5 font-mono">💠{t("p33")}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
