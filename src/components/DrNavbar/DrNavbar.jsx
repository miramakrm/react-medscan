// Navbar.jsx
import React from 'react';
import styles from '../DrNavbar/DrNavbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
// import drImg from "../../assets/images/drImages/profil.png";

const Navbar = ({ user }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
        <p className={styles.patientsLink}>Patients</p>
      </div>

      <div className={styles.centerSection}>
        <div className={styles.searchBar}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.notificationIcon}>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className={styles.userInfo}>
<img src={user?.profileImage || "https://via.placeholder.com/80"} alt="Doctor" />
          <div className={styles.userDetails}>
            <span>@{user?.name || "Doctor Name"}</span>
<span>@{user?.role || "Doctor"}</span>
          </div>
          <FontAwesomeIcon icon={faChevronDown} className={styles.dropdownIcon} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
