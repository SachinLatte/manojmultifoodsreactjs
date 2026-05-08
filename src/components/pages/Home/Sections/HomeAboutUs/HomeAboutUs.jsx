import React from "react";
import HomeAboutLeft from "../HomeAboutUs/HomeAboutLeft";
import HomeAboutRight from "../HomeAboutUs/HomeAboutRight";
import styles from "./HomeAboutUs.module.scss";
export default function HomeAboutUs() {
  return (
    <>
      <div className={styles.home_about_main}>
        <div className="custom_container">
          <div className="row">
            <div className="col-md-6">
              <HomeAboutLeft />
            </div>
            <div className="col-md-6">
              <HomeAboutRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
