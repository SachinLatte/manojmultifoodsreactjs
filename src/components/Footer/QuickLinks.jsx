import { NavLink } from "react-router-dom";

const QuickLinks = ({ links }) => (
  <div className="footer-section">
    <h3 className="footer-heading">Quick Links</h3>
    <ul>
      {links.map((link) => (
        <li key={link.label}>
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? "footer-link active" : "footer-link"
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default QuickLinks;