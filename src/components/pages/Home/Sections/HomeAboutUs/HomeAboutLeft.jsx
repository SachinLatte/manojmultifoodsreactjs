import React from "react";
import styles from "./HomeAboutUs.module.scss";
import { Link } from "react-router-dom";
export default function HomeAboutLeft() {
  return (
    <>
      <div className={styles.home_about_left}>
        <h1>Taking Your Brand to Every Household</h1>
        <p>
          Welcome to <span>Manoj Multifoods Pvt. Ltd.</span> — your trusted
          Super Stockist and Integrated Logistics Partner for FMCG and Food
          Brands across Mumbai & Rest of Maharashtra. With
          <strong>22+ years</strong> of experience, strong infrastructure, and a
          network of
          <strong>
            65+ Distributors, 25,000+ Retailers, 1800+ SMT/Gourmet Stores, 200+
            Modern Trade Stores (MT), 10 E-Com & Q-Com chains
          </strong>
          and <strong>3 Cash-n-Carry chains.</strong> we bring speed, structure
          and scalability to your supply chain - across General Trade, HoReCa,
          Modern Trade, E-commerce, Quick Commerce & Cash & Carry.
        </p>
        <button>
          <Link to="/who-we-are">Know More</Link>
        </button>
      </div>
    </>
  );
}
