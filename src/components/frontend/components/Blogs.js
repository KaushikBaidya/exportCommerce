import React from "react";
// import { useTranslation } from "react-i18next";

function Blogs() {
  // const { t } = useTranslation(["project"]);
  const data = [
    {
      id: "1",
      title: "Blog Post One",
      price:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://st.depositphotos.com/1513934/2927/i/600/depositphotos_29277455-stock-photo-pelllets-biomass.jpg",
    },
    {
      id: "2",
      title: "Blog Post Two",
      price:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://st.depositphotos.com/1513934/2927/i/600/depositphotos_29277455-stock-photo-pelllets-biomass.jpg",
    },
    {
      id: "3",
      title: "Blog Post Three",
      price:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: "https://st.depositphotos.com/1513934/2927/i/600/depositphotos_29277455-stock-photo-pelllets-biomass.jpg",
    },
  ];
  return (
    <>
      <section id="seeBlog" className="border-b min-h-full ">
        <div
          id="seeProduct"
          className="mx-auto grid grid-cols-1 gap-10 lg:px-14 py-20 text-dark"
        >
          <div className="text-center font-semibold text-4xl text-red-700">
            Our Blogs
          </div>

          <div className="px-5 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.map((item) => (
              <div
                key={item.id}
                className=" w-full grid content-center justify-items-center"
              >
                <img src={item.img} className="w-72 rounded-lg" alt="" />
                <div className="px-2 my-2">
                  <h1 className="text-base text-center font-semibold">
                    {item.title}
                  </h1>
                  <p className="text-sm text-center font-thin">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
