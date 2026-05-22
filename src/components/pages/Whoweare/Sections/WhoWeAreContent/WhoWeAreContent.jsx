import React from "react";
import centerImg from "../../../../../assets/img/about-main-middle-img.webp";
import styles from "./WhoWeAreContent.module.scss";

export default function WhoWeAreContent() {
  return (
    <div className={styles.who_we_are_section}>
      <div className="custom_container">
        <div className={styles.content_wrapper}>
          <h2 data-aos="fade-left" data-aos-duration="1000">
            Who We Are
          </h2>
          <div className={styles.paragraphs}>
            <p data-aos="fade-left" data-aos-duration="1200">
              <span style={{ color: "#a6cf39" }}>Manoj Multifoods Pvt Ltd</span>{" "}
              is a trusted Super Stockist and Distribution Partner, specializing
              in General Trade (GT), HoReCa, Modern Trade (MT), E-Commerce
              (E-Com), Quick Commerce (Q-Com), Cash & Carry chains, Standalone
              Modern Trade (SMT) / Gourmet Stores / Key Accounts. With a strong
              supply chain backbone, financial strength, and a dedicated team,
              we ensure seamless product availability, efficient execution, and
              market expansion for our partner brands.
            </p>
            <p data-aos="fade-left" data-aos-duration="1200">
              We act as the central hub between brands and multiple sales
              channels, handling bulk procurement, warehousing, logistics, and
              market execution. By leveraging our multi-channel expertise, we
              enable brands to achieve faster penetration, consistent
              visibility, and sustainable growth.
            </p>
          </div>
          <div
            className={styles.center_img_wrapper}
            data-aos="zoom-in"
            data-aos-duration="1400"
          >
            <img src={centerImg} alt="Warehouse Operations" className="w-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
