import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../PatientNav/PatientNav.module.css";
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import avatar from '../../assets/images/drImages/image-dr.png'; // Assuming you have an avatar image

const pageTitles = {
  "/patient-chatbot": "Chat with MedScan",
  "/madvices": "Medical Advices",
  "/medical-history": "Medical History",
  "/doctor-recommendation": "Doctor Recommendation",
  "/patient-scans": "Patient Scans",
  "/patient-profile": "Profile",
  "/patient-settings": "Settings"
};

const Navbar = ({ user, notificationsCount = 0 }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <nav className={styles.navbar}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <IoArrowBack className={styles.backIcon} />
      </button>

      <h1 className={styles.title}>{title}</h1>

   <div className={styles.rightSection}>
  <div className={styles.notificationLink}>
    <FontAwesomeIcon icon={faBell} className={styles.bellIcon} />
    {notificationsCount > 0 && (
      <span className={styles.badge}>{notificationsCount}</span>
    )}
  </div>

  <div className={styles.userSection}>
    <img
      src={user?.profileImage || avatar}
      alt="Doctor"
      className={styles.avatar}
    />
    <div className={styles.username}>
      <span>@{user?.name || "Doctor Name"}</span>
    </div>
  </div>
</div>

    </nav>
  );
};

export default Navbar;
