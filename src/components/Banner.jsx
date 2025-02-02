import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css";
import slider1 from "../assets/images/slider/slider-img.jpg";
import slider2 from "../assets/images/slider/2148478182.jpg"
import slider3 from "../assets/images/slider/2148478183.jpg";
import slider4 from "../assets/images/slider/2148478197.jpg";
import slider5 from "../assets/images/slider/2149060406.jpg";
import slider6 from "../assets/images/slider/slider-img2.jpg";
import slider7 from "../assets/images/slider/2149141333.jpg";
import slider8 from "../assets/images/slider/2148460176.jpg";


const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);

  return (
    <div className="w-full">
      {/* Main slider */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="gallery-top"
      >
        <SwiperSlide>
          <img
            src={slider1}
            alt="Movie 1"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            alt="Movie 2"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            alt="Movie 3"
            className="w-full  h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider4}
            alt="Movie 3"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider5}
            alt="Movie 3"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider6}
            alt="Movie 3"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider7}
            alt="Movie 3"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider8}
            alt="Movie 8"
            className="w-full h-96 object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Thumbnail slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={10}
        spaceBetween={10}
        className="gallery-thumbs mt-4"
      >
        <SwiperSlide>
          <img
            src={slider1}
            alt="Thumbnail 1"
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            alt="Thumbnail 2"
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider3}
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider4}
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider5}
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider6}
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider7}
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider8}
            alt="Thumbnail 3"
            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
