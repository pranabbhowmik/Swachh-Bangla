// PosterSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import poster1 from "../../assets/poster1.png";
import poster2 from "../../assets/poster2.jpg";
import poster3 from "../../assets/poster3.jpg";
import poster4 from "../../assets/poster4.jpg";
import poster5 from "../../assets/poster5.jpg";
import poster6 from "../../assets/poster7.png";
import "swiper/css/autoplay";

const posters = [poster1, poster2, poster3, poster4, poster5, poster6];

const PosterSlider = () => {
  return (
    <div className="w-full px-4 py-4">
      <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
        স্বচ্ছ বাংলা - Clean & Happy Village
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 4000 }}
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
        {posters.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Poster ${index + 1}`}
              className="rounded-xl w-full h-44 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PosterSlider;
