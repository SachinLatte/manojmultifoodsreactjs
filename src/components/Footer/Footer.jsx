import QuickLinks from "./QuickLinks";
import ReachUs from "./ReachUs";
import FollowUs from "./FollowUs";
import { Link } from "react-router-dom";
import {
  quickLinks,
  contactInfo,
  socialLinks,
} from "../../constants/footerData";
import styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className="custom_container">
      <div className={styles.footer_grid}>
        <div className="row">
          <div className="col-md-4">
            <QuickLinks links={quickLinks} />
          </div>
          <div className="col-md-4">
            <ReachUs contacts={contactInfo} />
          </div>
          <div className="col-md-4">
            <FollowUs socials={socialLinks} />
          </div>
        </div>
      </div>
      <div className={`${styles.footer_bottom} d-flex`}>
        <p>
          Copyright © manoj multifoods {new Date().getFullYear()} All Rights
          Reserved.
        </p>
        <p>
          Designed By:{" "}
          <Link to="https://digitallatte.in/" target="_blank">
            Digital Latte.
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
