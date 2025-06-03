import React from "react";
import { NavLink } from "react-router-dom";  // استبدال Link ب NavLink
import { TfiCommentAlt } from "react-icons/tfi";
import { FaUserFriends, FaUserMd } from "react-icons/fa";
import { IoSettingsOutline, IoExitOutline } from "react-icons/io5";
import drImg from "../../assets/images/drImages/profil.png";

import styles from "../drsidebar/DoctorSB.module.css";
import logo from "../../../public/logo.png";

const DrSidebar = ({ user = { avatar: '/default-avatar.png', name: 'Unknown User' } }) => {
  return (
    <aside className={styles.sidebar}>
      <img src={logo} alt="MedScan Logo" className={styles.logo} />
      <p className={styles.section}>Sessions</p>
      
      {/* استعمل NavLink واضبط الـ activeClassName */}
      <NavLink
        to="/doctor-chatbot"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.menuItemActive}` : styles.menuItem
        }
      >
        <TfiCommentAlt />
        <span>Chat with MedScan </span>
      </NavLink>
      
      <NavLink
        to="/dr-dashboard"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.menuItemActive}` : styles.menuItem
        }
      >
        <FaUserFriends />
        <span>Patients list</span>
      </NavLink>

      <hr className={styles.separator} />
      <p className={styles.section}>Other Options</p>

      <NavLink
        to="/dr-profile"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.menuItemActive}` : styles.menuItem
        }
      >
        <FaUserMd />
        <span>Profile</span>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? `${styles.menuItem} ${styles.menuItemActive}` : styles.menuItem
        }
      >
        <IoSettingsOutline />
        <span>Settings</span>
      </NavLink>

      <div className={styles.profile}>
        <img src={drImg} alt="Dr Image" className={styles.userAvatar} />
        <span>@{user.name}</span>

        <NavLink to="/logout">
          <IoExitOutline className={styles.exitIcon} />
        </NavLink>
      </div>
    </aside>
  );
};

export default DrSidebar;
