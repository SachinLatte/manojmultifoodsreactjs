import React from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import styles from "./WhyChooseUs.module.scss";
export default function WhyChooseUsLeft() {
  const services_list = [
    "Multi-Channel Expertise",
    "Trusted By Premium Food Brands",
    "Wider Market Reach",
    "Efficient Supply Chain",
    "Bulk Handling Capacity",
    "Financial Strength",
    "Local Market Knowledge",
    "Relationship Network",
    "Operational Efficiency",
    "Scalable & Dependable Last-Mile Execution",
  ];
  return (
    <>
      <div className={styles.counter_content}>
        <h1>Why Choose Us</h1>
        <hr />
        <ul className={styles.services_list}>
          {services_list.map((services_data) => (
            <li>
              <RiCheckDoubleFill /> {services_data}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
