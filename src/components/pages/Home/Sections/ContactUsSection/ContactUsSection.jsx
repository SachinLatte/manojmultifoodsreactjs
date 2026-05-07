import React from "react";
import ContactForm from "./ContactForm";
import styles from "../ContactUsSection/ContactUsSection.module.scss";
import ReachUsHome from "./ReachUsHome";
export default function ContactUsSection() {
  return (
    <>
      <div className={styles.contact_us}>
        <div className="custom_container">
          <div className="row">
            <div className="col-md-6">
              <ContactForm />
            </div>
            <div className="col-md-6">
              <ReachUsHome />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
