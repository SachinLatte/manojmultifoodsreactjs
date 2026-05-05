import { Link } from "react-router-dom";
import styles from "../Footer/Footer.module.scss";

const ReachUs = ({ contacts }) => (
  <div className="footer-section">
    <h3 className="footer-heading">Reach Us</h3>
    {contacts.map((item) => {
      const Icon = item.icon;
      return (
        <div
          key={item.id}
          className={`${styles.contact_item} d-flex align-items-center`}
        >
          <span>
            <Icon />
          </span>

          {item.href ? (
            <Link to={item.href}>{item.text}</Link>
          ) : (
            <p>{item.text}</p>
          )}
        </div>
      );
    })}
  </div>
);

export default ReachUs;
