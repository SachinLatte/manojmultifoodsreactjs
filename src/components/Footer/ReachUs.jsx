import { Link } from "react-router-dom";
import styles from "../Footer/Footer.module.scss";

const ReachUs = ({
  contacts,
  showHeading = true,
  showLabel = false,
  className = "",
  disablePreLine = false,
}) => (
  <div className={className}>
    {showHeading && <h3 className="footer-heading">Reach Us</h3>}
    {contacts.map((item) => {
      const Icon = item.icon;
      return (
        <div
          key={item.id}
          className={`${styles.contact_item} d-flex align-items-center`}
        >
          <span className={showLabel ? styles.icon_circle : ""}>
            <Icon />
          </span>

          <div>
            {showLabel && item.label && (
              <h4 className={styles.contact_label}>{item.label}</h4>
            )}
            {item.href ? (
              <Link to={item.href}>{item.text}</Link>
            ) : !disablePreLine && item.preLine ? (
              <p style={{ whiteSpace: "pre-line" }}>
                {item.text.replace("Navi Mumbai,", "Navi Mumbai,\n")}
              </p>
            ) : (
              <p>{item.text}</p>
            )}
          </div>
        </div>
      );
    })}
  </div>
);

export default ReachUs;
