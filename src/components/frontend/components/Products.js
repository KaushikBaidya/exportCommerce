import React from "react";
import Buynow from "../../Buynow";
import data from "../../../Data/Data";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Products() {
  const { t } = useTranslation(["product"]);

  return (
    <>
      <section id="seeProduct" className="min-h-full bg-gray-50 py-10">
        <div
          id="seeProduct"
          className="max-w-[1500px] mx-auto grid grid-cols-1 gap-10 lg:px-10 text-dark"
        >
          <div className="text-center font-semibold text-4xl text-[#36B34B]">
            {t("title")} <span className="text-[#F5921E] ">{t("title1")}</span>
          </div>

          <div className="px-5 lg:px-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full flex flex-col items-center justify-between rounded-xl shadow-lg gap-y-3 bg-white"
              >
                <img src={item.img} className="h-72 rounded-lg" alt="" />
                <div className="mt-2">
                  <Link to={item.id}>
                    <h1 className="text-lg text-center font-medium ext-black hover:text-[#36B34B] px-4">
                      {item.title}
                    </h1>
                  </Link>
                  <p className="text-base text-center font-semibold ">
                    {item.price}
                  </p>
                </div>
                <div className="px-2 mb-4 bg-[#F5921E] m-2 text-white text-sm rounded">
                  <Buynow title={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
