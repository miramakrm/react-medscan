import React from "react";
import { IoArrowBack, IoNotificationsOutline } from "react-icons/io5";
import { useNavigate, Link } from "react-router-dom";
import styles from "../PatientNav/PatientNav.module.css";

const Navbar = ({ title, user, notificationsCount = 0 }) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
  <button className={styles.backButton} onClick={() => navigate(-1)}>
    <IoArrowBack className={styles.backIcon} />
  </button>


  <h1 className={styles.title}>{title}</h1>

  <div className={styles.rightSection}>
        <Link to="/notifications" className={styles.notificationLink}>
          <div className={styles.bellWrapper}>
            <IoNotificationsOutline className={styles.bellIcon} />
            {notificationsCount > 0 && (
              <span className={styles.badge}>{notificationsCount}</span>
            )}
          </div>
        </Link>

        {user && (
          <div className={styles.userSection}>
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className={styles.avatar}
              />
            ) : (
              <div className={styles.placeholderAvatar}>
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            <span className={styles.username}>@{user.name}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
