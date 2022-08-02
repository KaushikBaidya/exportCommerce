import React from "react";
import Buynow from "../../Buynow";
import data from "../../../Data/Data";

import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

function Products() {
  // const { t } = useTranslation(["project"]);

  return (
    <>
      <section id="seeProduct" className="border-b min-h-full bg-gray-100">
        <div
          id="seeProduct"
          className="mx-auto grid grid-cols-1 gap-10 lg:px-14 py-20 text-dark"
        >
          <div className="text-center font-semibold text-4xl text-[#ED1A37]">
            Our Products
          </div>

          <div className="px-5 lg:px-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                className=" w-full grid content-center justify-items-center"
              >
                <img src={item.img} className="h-72" alt="" />
                <div className="mt-2">
                  <Link to={item.id}>
                    <h1 className="text-base text-center font-semibold text-blue-600">
                      {item.title}
                    </h1>
                  </Link>
                  <p className="text-base text-center font-semibold">
                    {item.price}
                  </p>
                </div>
                <div className="px-2 py-1 bg-[#201A59] m-2 text-white text-sm rounded">
                  <Buynow title={item.title} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 content-center justify-items-center gap-x-2">
            <div className="w-full min-h-20 grid grid-cols-2 content-center justify-items-center bg-yellow-200 rounded-lg mt-2">
              <div>
                <img
                  src="https://fireplaceuniverse.com/wp-content/uploads/pellet-stove-pellets-burning.jpg"
                  className="rounded-lg w-5/6 p-5 mx-auto"
                  alt=""
                />
              </div>
              <div className="text-black grid content-center justify-items-center gap-y-2 mt-2 md:mt-0">
                <h1 className="text-base font-semibold">Biomass Wood Pellet</h1>
                <p className="text-base font-semibold">$12/ Kilogram</p>
              </div>
            </div>
            <div className="w-full min-h-20 grid grid-cols-2 content-center justify-items-center bg-blue-200 rounded-lg mt-2">
              <div>
                <img
                  src="https://fireplaceuniverse.com/wp-content/uploads/pellet-stove-pellets-burning.jpg"
                  className="rounded-lg w-5/6 p-5 mx-auto"
                  alt=""
                />
              </div>
              <div className="text-black grid content-center justify-items-center gap-y-2 mt-2 md:mt-0">
                <h1 className="text-base font-semibold">Biomass Wood Pellet</h1>
                <p className="text-base font-semibold">$12/ Kilogram</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
