import { Link } from "react-router-dom";
import styles from "../Footer/Footer.module.scss";
const FollowUs = ({ socials }) => (
  <div className="footer-section">
    <h3 className="footer-heading">Follow Us</h3>
    <div className={styles.social_icons}>
      {socials.map(({ id, icon: Icon, href }) => (
        <Link key={id} to={href} target="_blank" className="social-btn">
          <Icon />
        </Link>
      ))}
    </div>
  </div>
);

export default FollowUs;
