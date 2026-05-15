import React from "react";
import styles from "./WhyChooseUs.module.scss";
import WhyChooseUsLeft from "./WhyChooseUsLeft";
import WhyChooseUsRight from "./WhyChooseUsRight";
export default function WhyChooseUs() {
  return (
    <>
      <section className={styles.why_choose_us}>
        <div className="custom_container">
          <div className="row">
            <div className="col-md-6">
              <WhyChooseUsLeft />
            </div>
            <div className="col-md-6">
              <WhyChooseUsRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
