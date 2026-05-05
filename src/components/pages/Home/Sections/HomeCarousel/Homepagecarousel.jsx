import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Homepagecarousel.module.scss";

export default function Homepagecarousel() {
  return (
    <>
      <div className={styles.homepage_hero_carousel}>
        <Swiper
          className="mySwiper"
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          speed={800}
          direction="horizontal"
          allowTouchMove={false}
        >
          <SwiperSlide>
            <div className={styles.banner_content}>
              <h1>
                Taking Your <span>Brand</span> to <br /> Every
                <span>Household</span>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_content}>
              <h1>
                <span>22+ years</span> of experience <br /> The most reliable
                <span>infrastructure & network</span>
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banner_content}>
              <h1>
                <span>65+ </span> Distributors <br /> <span>25,000+</span>
                Retail Outlets <br /> <span>1800+ </span> SMT/Gourmet Stores
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
