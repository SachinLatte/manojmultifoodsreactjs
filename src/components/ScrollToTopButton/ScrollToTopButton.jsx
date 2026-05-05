import React, { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";
import styles from "./ScrollToTopButton.module.scss";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    isVisible && (
      <button className={styles.scrolltotopbtn} onClick={scrollToTop}>
        {<IoMdArrowUp />}
      </button>
    )
  );
};

export default ScrollToTopButton;
