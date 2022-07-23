import React from "react";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation(["service"]);
  return (
    <>
      <section className="border-b py-20 min-h-screen">
        <div className="w-full mx-auto h-72 bg-[url('https://images.unsplash.com/photo-1648160669303-c8e1c3f76bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU2fHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60')] bg-cover">
          <h1 className="text-4xl font-bold text-yellow-500 sm:mt-4 lg:text-6xl text-center px-5 py-20">
            {t("service")}
          </h1>
          {/* <hr className="border-b-2 border-orange-600" /> */}
        </div>
        <div className="container max-w-6xl mx-auto m-8 my-16">
          <div className="flex flex-wrap justify-around">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="w-full">
                <img
                  className="w-52 mx-auto m-2"
                  src="/images/undraw_under_construction.svg"
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  {t("title1")}
                </div>
                <p className="text-gray-700 text-base justify-center">
                  {t("article1")}
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="w-full">
                <img
                  className="w-40 mx-auto m-2"
                  src="/images/discussion.svg"
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  {t("title2")}
                </div>
                <p className="text-gray-700 text-base">{t("article2")}</p>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="w-full">
                <img
                  className="w-40 mx-auto m-2"
                  src="/images/manager.svg"
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">
                  {t("title3")}
                </div>
                <p className="text-gray-700 text-base">{t("article3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
