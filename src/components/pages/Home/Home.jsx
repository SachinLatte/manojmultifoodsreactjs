import home_video from "../../../assets/img/one.mp4";
import styles from "./Home.module.scss";
import BrandsCarousel from "./Sections/Brands/BrandsCarousel";
import ContactUsSection from "./Sections/ContactUsSection/ContactUsSection";
import HomeAboutUs from "./Sections/HomeAboutUs/HomeAboutUs";

import Homepagecarousel from "./Sections/HomeCarousel/Homepagecarousel";
import HomeReachUs from "./Sections/ReachUs/HomeReachUs";
import WhatWeDoBest from "./Sections/WhatWeDoBest/WhatWeDoBest";
import WhyChooseUs from "./Sections/WhyChooseUs/WhyChooseUs";
export default function Home() {
  return (
    <>
      <section className={styles.hero_section}>
        <video
          className={styles.home_video_background}
          data-value="1.2"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={home_video}></source>
        </video>
        <Homepagecarousel />
      </section>
      <HomeAboutUs />
      <WhatWeDoBest />
      <WhyChooseUs />
      <BrandsCarousel />
      <HomeReachUs />
      <ContactUsSection />
    </>
  );
}
