import React from "react";
import { Link } from "react-router-dom";
import { FaHandHoldingMedical, FaUserFriends, FaRegUser } from "react-icons/fa";
import { LiaHistorySolid } from "react-icons/lia";
import { MdDocumentScanner } from "react-icons/md";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoSettingsOutline, IoExitOutline } from "react-icons/io5";

import styles from "../patientsidebar/PatientSB.module.css";
import logo from "../../../public/logo.png";

const PatientSidebar = ({ user }) => {
  return (
    <aside className={styles.sidebar}>
      <img src={logo} alt="MedScan Logo" className={styles.logo} />

      <p className={styles.section}>Sessions</p>
      <div className={styles.menuItemActive}>
        <TfiCommentAlt />
        <span>Chat with MedScan </span>
      </div>
      <div className={styles.menuItem}>
        <FaHandHoldingMedical />
        <span>Medical Advices</span>
      </div>
      <div className={styles.menuItem}>
        <LiaHistorySolid />
        <span>Medical History</span>
      </div>
      <div className={styles.menuItem}>
        <FaUserFriends />
        <span>Doctor Recommendation</span>
      </div>
      <div className={styles.menuItem}>
        <MdDocumentScanner />
        <span>Patient Scans</span>
      </div>

      <hr className={styles.separator} />
      <p className={styles.section}>Other Options</p>

      <div className={styles.menuItem}>
        <FaRegUser />
        <span>Profile</span>
      </div>
      <div className={styles.menuItem}>
        <IoSettingsOutline />
        <span>Settings</span>
      </div>

      <div className={styles.profile}>
        <img src={user.avatar} alt="Patient" className={styles.avatar} />
        <span>@{user.name}</span>

        <Link to="/profile">
          <IoExitOutline className={styles.exitIcon} />
        </Link>
      </div>
    </aside>
  );
};

export default PatientSidebar;
