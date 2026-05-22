import React from "react";
import styles from "./ChannelExpertise.module.scss";

const channels = [
  {
    num: "01",
    title: "General Trade (GT)",
    desc: "Deep network of distributors, wholesalers, and retailers across urban & rural markets, ensuring last-mile reach."
  },
  {
    num: "02",
    title: "Modern Trade (MT)",
    desc: "Strong relationships with leading national & regional chains, ensuring timely listing, replenishment, and promotions."
  },
  {
    num: "03",
    title: "E-Commerce (E-Com)",
    desc: "Ensuring timely delivery to E-Com DC's as per PO & appointments."
  },
  {
    num: "04",
    title: "Quick Commerce (Q-Com)",
    desc: "Specialized in handling deliveries with precision and speed for platforms like Blinkit, Zepto, Swiggy Instamart."
  },
  {
    num: "05",
    title: "Standalone Modern Trade (SMT)",
    desc: "Presence in SMT & Gourmet stores, enabling premium product positioning and visibility."
  }
];

export default function ChannelExpertise() {
  return (
    <div className={styles.channel_expertise_section}>
      <div className="custom_container">
        <h2 data-aos="fade-left" data-aos-duration="1000">Channel Expertise</h2>
        <div className={styles.channels_grid}>
          {channels.map((ch, index) => (
            <div
              key={ch.num}
              className={styles.channel_card}
              data-aos="fade-up"
              data-aos-duration={1000 + index * 100}
            >
              <div className={styles.card_header}>
                <span className={styles.number}>{ch.num}</span>
                <h3>{ch.title}</h3>
              </div>
              <p>{ch.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
