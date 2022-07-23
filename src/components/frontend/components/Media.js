import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";
import { useTranslation } from "react-i18next";

SwiperCore.use([Pagination, Autoplay]);

const Media = () => {
  const { t } = useTranslation(["media"]);
  const data = [
    { id: "1", img: "/images/media1.jpg" },
    { id: "2", img: "/images/media2.jpg" },
    { id: "3", img: "/images/media3.jpg" },
    { id: "4", img: "/images/media4.jpg" },
    { id: "5", img: "/images/media5.jpg" },
  ];

  return (
    <>
      <section className="border-b min-h-full">
        <div className="h-full grid grid-cols-1 content-center pb-20">
          <div className="container max-w-5xl mx-auto m-8">
            <h2 className="text-2xl text-orange-600 sm:mt-4 sm:text-4xl lg:text-4xl text-center px-5 uppercase tracking-wide">
              {t("gallery")}
            </h2>
          </div>
          <div className="bg-orange-100 py-5">
            <div className="max-w-5xl mx-auto px-5">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  540: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img
                      className="w-full card-zoom-image"
                      src={item.img}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
