import React from 'react';
import styles from '../DrNavbar/DrNavbar.module.css';
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { useNavigate, useLocation } from 'react-router-dom';

const SettingsNav = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  const getTitle = () => {
    const path = location.pathname;
    if (path.includes('settings')) return 'Settings';
    if (path.includes('patients')) return 'Patients';
    if (path.includes('doctor')) return 'Doctor Dashboard';
    if (path.includes('profile')) return 'Profile';
    return 'Dashboard';
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <button className={styles.backButton} onClick={handleBack}>
          <IoArrowBackOutline />
        </button>
        <span className={styles.pageTitle}>{getTitle()}</span>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.notificationIcon}>
          <FaRegBell />
          <span className={styles.notificationDot}></span>
        </div>
        <img
          src={user?.profileImage || 'https://via.placeholder.com/80'}
          alt="User"
          className={styles.userAvatar}
        />
      </div>
    </nav>
  );
};

export default SettingsNav;
