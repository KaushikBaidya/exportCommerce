import React from "react";
// import { useTranslation } from "react-i18next";

function Products() {
  // const { t } = useTranslation(["project"]);
  const data = [
    {
      id: "1",
      title: "Bougainvillea by OPL",
      img: "https://imageio.forbes.com/blogs-images/trevornace/files/2015/11/jeremejevite-1200x1068.jpg?height=632&width=711&fit=bounds",
    },
    {
      id: "2",
      title: "Lake House by OPL",
      img: "https://www.thepearlsource.com/blog/wp-content/uploads/2018/05/black-opal.jpg",
    },
    {
      id: "3",
      title: "Tulip by OPL",
      img: "https://images.squarespace-cdn.com/content/v1/545b0f35e4b08b58f1cd0145/1588836097724-DFRKWFJFS1O9LSITPA26/emerald.jpg?format=1000w",
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
                <div className="description-bk lg:w-[120%] xl:w-[110%]"></div>

                <div className="w-full absolute bottom-5 text-slate-100 px-5">
                  <p className="mb-2 text-xl text-center xl:text-2xl font-semibold">
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
