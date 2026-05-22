import React from "react";
import { Link } from "react-router-dom";
import styles from "./AboutBanner.module.scss";

export default function AboutBanner() {
  return (
    <div
      className={`${styles.common_top_section} ${styles.top_banner_who_we_are}`}
    >
      <div className="custom_container">
        <h1 data-aos="fade-down" data-aos-duration="1000">
          About Us
        </h1>
        <div className={styles.main_breadcrumbs}>
          <nav aria-label="breadcrumb">
            <ol className={styles.breadcrumb}>
              <li className={styles.breadcrumb_item}>
                <Link to="/">Home</Link>
              </li>
              <li
                className={`${styles.breadcrumb_item} ${styles.active}`}
                aria-current="page"
              >
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
