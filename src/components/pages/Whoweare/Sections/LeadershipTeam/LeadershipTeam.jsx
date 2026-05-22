import React from "react";
import styles from "./LeadershipTeam.module.scss";

// Import generated premium team images
import manojImg from "../../../../../assets/img/team-manoj-satia.png";
import mahendraImg from "../../../../../assets/img/team-mahendra-jadhav.png";
import rasikImg from "../../../../../assets/img/team-rasik-bhanushali.png";
import vishalImg from "../../../../../assets/img/team-vishal-tickoo.png";

const leaders = [
  {
    name: "Mr. Manoj Satia",
    role: "Founder",
    img: manojImg,
    bio: "Before founding the company in 2002, Mr. Satia worked with LT Foods Ltd. (the makers of the 'Daawat' brand), where he gained extensive experience in sales, business development, and supply chain management. He is responsible for leading the business strategy and growth initiatives."
  },
  {
    name: "Mr. Mahendra Jadhav",
    role: "General Manager - Accounts & Finance",
    img: mahendraImg,
    bio: "Responsible for providing strategic direction and ensuring the financial integrity, accounts control, and effective resource management of the organization."
  },
  {
    name: "Mr. Rasik Bhanushali",
    role: "General Manager - Sales & Operations",
    img: rasikImg,
    bio: "Oversees logistics, procurement, inventory control, order fulfillment, and operational efficiency, ensuring seamless integration between sales and logistics functions."
  },
  {
    name: "Mr. Vishal Tickoo",
    role: "Vice President - Sales",
    img: vishalImg,
    bio: "Manages the sales team, develops modern growth strategies, and works to expand the company's market reach across all retail channels."
  }
];

export default function LeadershipTeam() {
  return (
    <div className={styles.leadership_section}>
      <div className="custom_container">
        <h2 data-aos="fade-left" data-aos-duration="1000">Our Leadership Team</h2>
        <div className={styles.leadership_grid}>
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className={styles.leader_card}
              data-aos="fade-up"
              data-aos-duration={1000 + index * 100}
            >
              <div className={styles.img_container}>
                <img src={leader.img} alt={leader.name} />
              </div>
              <div className={styles.leader_info}>
                <h3>{leader.name}</h3>
                <h4>{leader.role}</h4>
                <p>{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
