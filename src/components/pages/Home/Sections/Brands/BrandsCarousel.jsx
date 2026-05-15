import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./BrandsCarousel.module.scss";
import brand1 from "../../../../../assets/img/brands/brand1.webp";
import brand2 from "../../../../../assets/img/brands/brand2.webp";
import brand3 from "../../../../../assets/img/brands/brand3.webp";
import brand4 from "../../../../../assets/img/brands/brand4.webp";
import brand5 from "../../../../../assets/img/brands/brand5.webp";
import brand7 from "../../../../../assets/img/brands/brand7.webp";
import brand8 from "../../../../../assets/img/brands/brand8.webp";
import brand9 from "../../../../../assets/img/brands/brand9.webp";
import brand10 from "../../../../../assets/img/brands/brand10.webp";
import brand11 from "../../../../../assets/img/brands/brand11.webp";
import brand12 from "../../../../../assets/img/brands/allora-logo.webp";
import brand13 from "../../../../../assets/img/brands/daawat-cuppa-rice.webp";
import brand14 from "../../../../../assets/img/brands/makino-logo.webp";
import brand15 from "../../../../../assets/img/brands/pintola-logo.png";
import brand16 from "../../../../../assets/img/brands/prabhuji-logo.webp";
import brand17 from "../../../../../assets/img/brands/salsiloto-logo.webp";

const brandsRow1 = [
  { id: 1, img: brand1, alt: "Rentio" },
  { id: 2, img: brand2, alt: "One One" },
  { id: 3, img: brand3, alt: "R Proto" },
  { id: 4, img: brand4, alt: "Happilo" },
  { id: 5, img: brand5, alt: "Uniwraps" },
  { id: 6, img: brand7, alt: "Happilo" },
  { id: 7, img: brand8, alt: "Micks" },
  { id: 8, img: brand9, alt: "Allora" },
];

const brandsRow2 = [
  { id: 9, img: brand10, alt: "Jalani" },
  { id: 10, img: brand11, alt: "Kari Kari" },
  { id: 11, img: brand12, alt: "Allora" },
  { id: 12, img: brand13, alt: "Daawat Cuppa" },
  { id: 13, img: brand14, alt: "Makino" },
  { id: 14, img: brand15, alt: "Pintola" },
  { id: 15, img: brand16, alt: "Prabhuji" },
  { id: 16, img: brand17, alt: "Salsiloto" },
];

const swiperConfig = {
  modules: [Autoplay],
  slidesPerView: 6,
  loop: true,
  spaceBetween: 20,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: { slidesPerView: 2 },
    576: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 6 },
  },
};

export default function BrandsCarousel() {
  return (
    <div className={styles.brands_carousel}>
      <div className="custom_container">
        <h1>Trusted by Leading Brands</h1>
      </div>

      {/* Row 1 - left to right */}
      <div className={styles.mask}>
        <Swiper {...swiperConfig} className={styles.swiper_row}>
          {brandsRow1.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className={styles.brand_card}>
                <img src={brand.img} alt={brand.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Row 2 - right to left */}
      <div className={styles.mask}>
        <Swiper {...swiperConfig} dir="rtl" className={styles.swiper_row}>
          {brandsRow2.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className={styles.brand_card}>
                <img src={brand.img} alt={brand.alt} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
