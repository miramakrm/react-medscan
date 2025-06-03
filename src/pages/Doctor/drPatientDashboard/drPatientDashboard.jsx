import React from "react";
import styles from "../DrDashboard/DrDashboard.module.css";
import DrSidebar from "../../../components/drsidebar/DoctorSB";
import DrNavbar from "../../../components/DrNavbar/DrNavbar";
import { FaEdit} from "react-icons/fa";

const PatientDetails = () => {
  return (
    <div className={styles.container}>
      <DrNavbar />
      <div className={styles.dashboardContainer}>
        <DrSidebar />

        <div className={styles.content}>
          <div className={styles.profileCard}>
            <div className={styles.headerSection}>
              <div className={styles.profileInfo}>
                <img
                  src="https://via.placeholder.com/80"
                  alt="Profile"
                  className={styles.profileImage}
                />
                <div>
                  <h2 className={styles.name}>Ahmed Hassan</h2>
                  <p className={styles.info}>ahmed123@gmail.com</p>
                  <p className={styles.info}>+20123456789</p>
                  <p className={styles.info}>#P-6542</p>
                </div>
              </div>
              <div className={styles.actionButtons}>
                <button className={styles.editButton}><FaEdit /> Edit</button>
                <button className={styles.removeButton}>Remove Patient</button>
              </div>
            </div>

            <div className={styles.tabs}>
              <button className={styles.activeTab}>Overview</button>
              <button className={styles.tab}>Medical History</button>
            </div>

            <div className={styles.statsRow}>
              <div className={styles.statBox}><p>Kg</p><h3>65 kg</h3></div>
              <div className={styles.statBox}><p>Heart Rate</p><h3>70 bpm</h3></div>
              <div className={styles.statBox}><p>O₂ Saturation</p><h3>96%</h3></div>
              <div className={styles.statBox}><p>Blood Pressure</p><h3>120/80 mmHg</h3></div>
            </div>

            <div className={styles.sectionTitle}>Medications</div>
            <div className={styles.medicationBox}>
              <h4>Atorvastatin 20</h4>
              <p>Used to lower cholesterol levels and reduce the risk of heart disease.</p>
            </div>

            <div className={styles.sectionTitle}>Test Reports</div>
            <div className={styles.medicationBox}>
              <h4>Renal Function</h4>
              <p>A blood test to evaluate how well the kidneys are working. Kidney issues suspected.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
