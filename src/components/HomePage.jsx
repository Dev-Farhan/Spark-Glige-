// components/HomePage.js

import React from "react";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.content}>
        <h1>The Electric Cycle</h1>
        <h2>Elevate Your Ride</h2>
        <h3>Empower Your Style!</h3>
        <button className={styles.bookNow}>Book Now</button>
        <p>
          Spyder Bikes has created a range of electric cycles for men and women.
          Our electric bikes are crafted with expertise for durability, safety,
          and to ignite the thrill of your e-ride.
        </p>
      </div>
      <div className={styles.image}>
        <img src="/assests/bicyle-one.png" alt="Electric Cycle" />
      </div>
    </section>
  );
};

export default HomePage;
