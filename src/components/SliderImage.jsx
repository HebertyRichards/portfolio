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
            <img src="../html.png" alt="HTML" />
            <h2>HTML</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../css.png" alt="CSS" />
            <h2>CSS</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../typescript.png" alt="TypeScript" />
            <h2>TypeScript</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../javascript.png" alt="JavaScript" />
            <h2>JavaScript</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../react.png" alt="React.js" />
            <h2>React.js</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../vue.png" alt="Vue.js" />
            <h2>Vue.js</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../nextjs.png" alt="Next.js" />
            <h2>Next.js</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../node.png" alt="Node.js" />
            <h2>Node.js</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../php.png" alt="PHP" />
            <h2>PHP</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../python.png" alt="Python" />
            <h2>Python</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../mysql.png" alt="MySQL" />
            <h2>MySQL</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <img src="../mongodb.png" alt="MongoDB" />
            <h2>MongoDB</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderImage;
