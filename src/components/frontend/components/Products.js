import React from "react";
// import { useTranslation } from "react-i18next";

function Products() {
  // const { t } = useTranslation(["project"]);
  const data = [
    {
      id: "1",
      title: "Biomass Wood Pellet",
      price: "$12/ Kilogram",
      img: "https://5.imimg.com/data5/HN/BH/ZC/SELLER-48250724/clean-solid-bio-fuel-wood-pellet-250x250.jpg",
    },
    {
      id: "2",
      title: "Biomass Wood Pellet",
      price: "$12/ Kilogram",
      img: "https://5.imimg.com/data5/HN/BH/ZC/SELLER-48250724/clean-solid-bio-fuel-wood-pellet-250x250.jpg",
    },
    {
      id: "3",
      title: "Biomass Wood Pellet",
      price: "$12/ Kilogram",
      img: "https://5.imimg.com/data5/HN/BH/ZC/SELLER-48250724/clean-solid-bio-fuel-wood-pellet-250x250.jpg",
    },
    {
      id: "4",
      title: "Biomass Wood Pellet",
      price: "$12/ Kilogram",
      img: "https://5.imimg.com/data5/HN/BH/ZC/SELLER-48250724/clean-solid-bio-fuel-wood-pellet-250x250.jpg",
    },
    {
      id: "5",
      title: "Biomass Wood Pellet",
      price: "$12/ Kilogram",
      img: "https://5.imimg.com/data5/HN/BH/ZC/SELLER-48250724/clean-solid-bio-fuel-wood-pellet-250x250.jpg",
    },
    {
      id: "6",
      title: "Biomass Wood Pellet",
      price: "$12/ Kilogram",
      img: "https://5.imimg.com/data5/HN/BH/ZC/SELLER-48250724/clean-solid-bio-fuel-wood-pellet-250x250.jpg",
    },
    {
      id: "7",
      title: "Biomass Wood Pellet",
      price: "$12/ Kilogram",
      img: "https://5.imimg.com/data5/HN/BH/ZC/SELLER-48250724/clean-solid-bio-fuel-wood-pellet-250x250.jpg",
    },
    {
      id: "8",
      title: "Biomass Wood Pellet",
      price: "$12/ Kilogram",
      img: "https://5.imimg.com/data5/HN/BH/ZC/SELLER-48250724/clean-solid-bio-fuel-wood-pellet-250x250.jpg",
    },
  ];
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
                <img src={item.img} className="w-80" alt="" />
                <div className="mt-2">
                  <h1 className="text-base font-semibold">{item.title}</h1>
                  <p className="text-base font-semibold">{item.price}</p>
                </div>
                <button
                  className="px-3 py-2 bg-[#201A59] m-2 text-white text-sm"
                  type=""
                >
                  BUY NOW
                </button>
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
