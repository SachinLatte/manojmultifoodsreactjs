import React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./WhyChooseUs.module.scss";

const counters = [
  { id: 1, target: 65, suffix: "+", label: "Distributors" },
  { id: 2, target: 22, suffix: "+", label: "Year's" },
  { id: 3, target: 25000, suffix: "+", label: "Retailers" },
  { id: 4, target: 1800, suffix: "+", label: "SMT Gourmet Stores" },
];

function CounterItem({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);
          setStarted(true);
        } else {
          setStarted(false);
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div className="col-md-6 mb-4" ref={ref}>
      <div className={styles.counter_box}>
        <span className={styles.count_number}>{count}</span>
        <span>{suffix}</span>
        <p>{label}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUsRight() {
  return (
    <div className={styles.main_counter}>
      <div className="row gutter-0">
        {counters.map((item) => (
          <CounterItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
