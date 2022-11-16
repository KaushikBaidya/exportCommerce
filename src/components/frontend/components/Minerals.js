import React from 'react'
import data from '../../../Data/minerals'

import { Link } from 'react-router-dom'
import BuyNow from '../../Buynow'
// import { useTranslation } from "react-i18next";

function Minerals() {
  // const { t } = useTranslation(["product"]);
  const newData = data.slice(0, 4)

  return (
    <section className="max-w-screen-2xl mx-auto">
      <div className="text-left">
        <h1 className="font-semibold text-2xl pl-10 pb-5 text-[#36B34B] uppercase">
          Mineral Products
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
        {newData.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col bg-[#ecffed] justify-between border shadow-sm rounded-xl items-center mx-5"
            >
              <div className="p-3">
                <img src={item.img} className="rounded-lg w-44 h-44" alt="" />
              </div>

              <div className="p-4 md:p-5">
                <Link to={item.id}>
                  <h3 className="text-lg font-normal uppercase text-gray-800 ">
                    {item.title}
                  </h3>
                </Link>
              </div>
              <div className="px-2 mb-4 bg-[#F5921E] m-2 text-white text-sm rounded">
                <BuyNow title={item.title} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="max-w-lg mx-auto">
        <Link to="/mineralProducts">
          <p className="text-center my-5 text-lg uppercase text-green-700 hover:text-orange-600">
            ----- View All Mineral products -----
          </p>
        </Link>
      </div>
    </section>
  )
}

export default Minerals
