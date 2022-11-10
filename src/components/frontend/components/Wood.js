import React from "react";
import Buynow from "../../Buynow";
import data from "../../../Data/wood";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Wood() {
  const { t } = useTranslation(["product"]);

  return (
    <>
      <section>
        <div className="text-left">
          <h1 className="font-medium text-2xl p-5 text-[#372948]">
            Wood Products
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col bg-[#FFECEF] border shadow-sm rounded-xl items-center mx-5"
              >
                <div className="p-3">
                  <img src={item.img} className="h-72 rounded-lg" alt="" />
                </div>

                <div className="p-4 md:p-5">
                  <Link to={item.id}>
                    <h3 className="text-base font-medium uppercase text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="px-2 mb-4 bg-[#F5921E] m-2 text-white text-sm rounded">
                    <Buynow title={item.title} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Wood;
