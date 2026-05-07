import ReachUs from "../../../../Footer/ReachUs";
import { contactInfo } from "../../../../../constants/footerData";
import styles from "../ContactUsSection/ReachUsHome.module.scss";

export default function ReachUsHome() {
  return (
    <>
      <div className={styles.home_reach_us}>
        <h1>Reach Us</h1>
        <ReachUs
          contacts={contactInfo}
          showHeading={false}
          showLabel={true}
          className={styles.footer_section}
        />
      </div>
    </>
  );
}
