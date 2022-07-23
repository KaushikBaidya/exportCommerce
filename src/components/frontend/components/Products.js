import React from "react";
// import { useTranslation } from "react-i18next";

function Products() {
  // const { t } = useTranslation(["project"]);
  const data = [
    {
      id: "1",
      title: "Calcium Carbonate Powder CaCO3 DD- A12",
      img: "http://www.gimexcomineral.com/images/1534499380-3.jpg",
    },
    {
      id: "2",
      title: "Calcium Carbonate Powder CaCO3 DD- A15",
      img: "http://www.gimexcomineral.com/images/1534499541-4.jpg",
    },
    {
      id: "3",
      title: "Dolomite Stone",
      img: "http://www.gimexcomineral.com/images/1530547187-dolomite-stone.png",
    },
    {
      id: "5",
      title: "Calcium Carbonate Powder CaCO3 DD- A12",
      img: "http://www.gimexcomineral.com/images/1534499380-3.jpg",
    },
    {
      id: "6",
      title: "Dolomite Stone",
      img: "http://www.gimexcomineral.com/images/1530547187-dolomite-stone.png",
    },
    {
      id: "4",
      title: "Calcium Carbonate Powder CaCO3 DD- A15",
      img: "http://www.gimexcomineral.com/images/1534499541-4.jpg",
    },
  ];
  return (
    <>
      <section className="border-b min-h-full">
        <div
          id="seeProduct"
          className="mx-auto grid grid-cols-1 gap-10 lg:px-14 py-14 text-dark"
        >
          <div className="text-center font-semibold text-4xl text-red-700">
            Our Products
          </div>

          <div className="px-5 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="inline-block relative w-full h-[400px] lg:h-[500] overflow-hidden shadow-md mr-2 lg:mr-5  rounded-lg"
              >
                <img
                  className="h-[85%] w-full rounded-lg"
                  src={item.img}
                  alt=""
                />
                <div className="description-bk lg:w-[110%]"></div>

                <div className="w-11/12 absolute bottom-5 text-slate-100 px-5">
                  <p className="mb-2 text-base text-center xl:text-lg font-semibold">
                    {item.title}
                  </p>
                  <p className="mb-4">{item.details}</p>

                  <p className="text-right text-lg">
                    <a href="#a" className="font-semibold border-b-2">
                      BUY NOW
                    </a>
                  </p>
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
