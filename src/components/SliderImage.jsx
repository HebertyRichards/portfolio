import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Navigation, Autoplay } from "swiper/modules";

const SliderImage = () => {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="slide">
            <img src="./src/assets/html.png" alt="HTML" />
            <h2>HTML</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="./src/assets/css.png" alt="CSS" />
            <h2>CSS</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="./src/assets/javascript.png" alt="JavaScript" />
            <h2>JavaScript</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="./src/assets/node.png" alt="Node.js" />
            <h2>Node.js</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="./src/assets/react.png" alt="React" />
            <h2>React.js</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="./src/assets/express.png" alt="Express" />
            <h2>Express.js</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="./src/assets/php.png" alt="PHP" />
            <h2>PHP</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="./src/assets/python.png" alt="Python" />
            <h2>Python</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="./src/assets/mysql.png" alt="MySQL" />
            <h2>MySQL</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderImage;
