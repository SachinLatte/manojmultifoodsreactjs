import React from "react";
import { services } from "../../../../../constants/services";
import { GoArrowUp } from "react-icons/go";
import styles from "./WhatWeDoBest.module.scss";
import { Link } from "react-router-dom";
export default function WhatWeDoBest() {
  return (
    <div className={styles.what_we_do_best}>
      <div className="custom_container">
        <h1 style={{ color: "white" }}>What we do Best</h1>
        <div className={styles.home_services_grid}>
          {services.map((item) => (
            <div key={item.id} className={styles.project_single}>
              <Link to="/services">
                <div className={styles.img_div}>
                  <img src={item.img} alt="Services Image" className="w-100" />
                  <div className={styles.project_heading}>
                    <h4>
                      {item.title.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < item.title.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h4>
                  </div>
                  <div className={styles.project_icon}>
                    <GoArrowUp />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
