import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeReachUs.module.scss";
import map_img from "../../../../../assets/img/world-map.png";
export default function HomeReachUs() {
  return (
    <>
      <section className={styles.home_reach_us}>
        <div className="custom_container">
          <h1>Our Reach</h1>
          <p>Present in (18 Districts) across Mumbai & ROM</p>
          <div className="row">
            <div className="col-md-5">
              <img src={map_img} alt="Map Image" className="w-100" />
            </div>
            <div className="col-md-7">
              <div className={styles.network_content}>
                <p>
                  Having the right network is the key to success in any
                  industry, and more so in Indian Retail. At Manoj Multifoods,
                  we pride ourselves in being able to transform and optimise our
                  services to match the growth of your business needs.
                </p>
                <br />
                <p>
                  Our coverage stretches Mumbai & ROM across 18 Districts. We
                  have joined forces with 65 + Distributors, Who manage 25,000+
                  Retailers. We operate out of 1 Central Warehouse in Mumbai,
                  supplying all kinds of concerns that include 1800 +
                  SMT/Gourmet Stores/Key Accounts, 200+ Modern Trade Stores
                  (MT), 10 E-Com & Q-Com chains, and 3 Cash-n-Carry chains.
                </p>
                <button>
                  <Link to="/network">Know More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
