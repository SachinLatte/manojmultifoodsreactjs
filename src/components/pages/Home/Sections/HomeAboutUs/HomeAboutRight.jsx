import React from "react";
import rightImg from "../../../../../assets/img/about-us-img.webp";
import styles from "./HomeAboutUs.module.scss";
export default function HomeAboutRight() {
  return (
    <>
      <div className={styles.img_div}>
        <img src={rightImg} alt="About Right Img" className="w-100 rounded" />
      </div>
    </>
  );
}
