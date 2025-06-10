import React from "react";
import { IoArrowBack, IoNotificationsOutline } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import styles from "../PatientNav/PatientNav.module.css";
import { faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = ({ title, user, notificationsCount = 0 }) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
  <button className={styles.backButton} onClick={() => navigate(-1)}>
    <IoArrowBack className={styles.backIcon} />
  </button>


  <h1 className={styles.title}>{title}</h1>

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
