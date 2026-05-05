import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo_img_white from "../../assets/img/logo.webp";
import logo_img_black from "../../assets/img/logo-black.webp";
import styles from "./Navbar.module.scss";

// Navbar component with sticky behavior on scroll
export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to determine the class for active navigation links
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <div
      className={`${styles["main-navbar"]} ${isSticky ? styles["sticky"] : ""}`}
    >
      <div className="custom_container">
        <nav className="navbar navbar-expand-lg">
          <NavLink className="navbar-brand" to="/">
            <img src={isSticky ? logo_img_black : logo_img_white} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={getNavClass} aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={getNavClass} to="/who-we-are">
                  Who We Are
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={getNavClass} to="/services">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={getNavClass}
                  to="/technology-infrastructure"
                >
                  Technology & Infrastructure
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={getNavClass} to="/brands">
                  Brands
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={getNavClass} to="/network">
                  Network
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={getNavClass} to="/contact-us">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
