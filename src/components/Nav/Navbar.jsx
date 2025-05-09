import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../assets/images/landingPage/logo.png';

const GuestNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="MedScan Logo" />
      </div>

      <div className={styles.navCenter}>
        <a href="#home">Home</a>
        <a href="#How-to-use">How to use</a>
        <a href="#Who-it’s-for">Who it’s for</a>
        <a href="#Top-articles">Top articles</a>
      </div>

      <div className={styles.navRight}>
        <Link to="/login" className={styles.ctaButton}>Sign in</Link>
        <Link to="/signup" className={styles.ctaButton}>Sign up</Link>
      </div>
    </nav>
  );
};

export default GuestNavbar;