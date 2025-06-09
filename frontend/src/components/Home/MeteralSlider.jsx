import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import plastic from "../../assets/plastic1.jpg";
import ewast from "../../assets/e-wast.jpg";
import paper from "../../assets/papper.jpg";
import glass from "../../assets/glass.jpg";
import metal from "../../assets/metal.jpg";

const posters = [
  { src: plastic, name: "Plastic" },
  { src: ewast, name: "E-Waste" },
  { src: paper, name: "Paper" },
  { src: glass, name: "Glass" },
  { src: metal, name: "Metal" },
];

const MeteralSlider = () => {
  return (
    <div className="w-full px-4 py-4">
      <h2 className="text-xl font-semibold font-roboto mb-4 text-left">
        Materials
      </h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {posters.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-xl overflow-hidden w-full h-40">
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 text-center  w-full  bg-opacity-100  text-white text-xl font-bold px-2 py-1">
                {item.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MeteralSlider;
