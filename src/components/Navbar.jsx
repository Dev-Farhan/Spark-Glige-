// components/Navbar.js

import React from 'react';
import { Link } from 'react-scroll';
import styles from '../styles/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/assests/logo.png" alt="Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="e-cycles" smooth={true} duration={500}>
            E-cycles
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="shop" smooth={true} duration={500}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      <div className={styles.socailIcons}>
      <div className={styles.line}></div>
<img src="/assests/facebook.png" alt="Facebook logo" />
<img src="/assests/facebook.png" alt="Facebook logo" />
<img src="/assests/facebook.png" alt="Facebook logo" />
<img src="/assests/facebook.png" alt="Facebook logo" />
      <div className={styles.line}></div>
      </div>
    </nav>
  );
};

export default Navbar;
