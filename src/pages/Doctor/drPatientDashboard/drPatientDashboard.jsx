import React, { useState } from "react";
import styles from "./drPatientDashboard.module.css";
import DrSidebar from "../../../components/drsidebar/DoctorSB";
import DrNavbar from "../../../components/DrNavbar/DrNavbar";
import { FaEdit, FaRegTrashAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoClipboardOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { CiClock2 } from "react-icons/ci";

const Dashboard = () => {
  const generateTimes = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      const hour = h % 12 || 12;
      const ampm = h < 12 ? "AM" : "PM";
      times.push(`${hour < 10 ? "0" + hour : hour}:00 ${ampm}`);
    }
    return times;
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  const goToPreviousDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const goToNextDate = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className={styles.container}>
      <DrNavbar />
      <div className={styles.dashboardWrapper}>
        <DrSidebar />
        <div className={styles.mainContent}>
          <div className={styles.header}></div>

          <div className={styles.patientCard}>
            <div className={styles.patientHeader}>
              <div className={styles.leftHeader}>
                <img
                  src="/path-to-image.jpg"
                  alt="Patient"
                  className={styles.patientImage}
                />
                <div className={styles.patientInfo}>
                  <h3>Ahmed Hassan</h3>
                  <p className={styles.patientDetails}>
                    Male - Age 32 <span className={styles.separator}>|</span>{" "}
                    ahmed9353@gmail.com <span className={styles.separator}>|</span>{" "}
                    +20 1525232123
                  </p>
                  <p>Hypertension, Diabetes and Nerve Disorders</p>
                </div>
              </div>

              <div className={styles.rightHeader}>
                <div className={styles.headerButtons}>
                  <button className={styles.editButton}>
                    <FaEdit /> Edit
                  </button>
                  <button className={styles.removeButton}>
                    <FaRegTrashAlt /> Remove Patient
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.button}>Send Alert</button>
              <button className={styles.button}>Save</button>
              <button className={styles.button}>Email</button>
            </div>

            <div className={styles.tabs}>
              <button className={`${styles.tab} ${styles.active}`}>Overview</button>
              <button className={styles.tab}>Medical History</button>
            </div>

            <div className={styles.contentSections}>
              {/* ✅ التاريخ الديناميكي */}
              <div className={styles.section}>
                <div className={styles.dateSection}>
                  <div className={styles.dateControls}>
                    <span className={styles.todayText}>Today</span>
                    <button className={styles.arrowButton} onClick={goToPreviousDate}>
                      <FaChevronLeft />
                    </button>
                    <span className={styles.dateText}>
                      {currentDate.toLocaleDateString("en-GB", {
                        weekday: "short",
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <button className={styles.arrowButton} onClick={goToNextDate}>
                      <FaChevronRight />
                    </button>

                    <div className={styles.timeRange}>
                      <label htmlFor="startTime"><CiClock2 /></label>
                      <select id="startTime" name="startTime" className={styles.timeSelect}>
                        {generateTimes().map((time, idx) => (
                          <option key={`start-${idx}`} value={time}>{time}</option>
                        ))}
                      </select>

                      <span className={styles.toText}>to</span>
                      <select id="endTime" name="endTime" className={styles.timeSelect}>
                        {generateTimes().map((time, idx) => (
                          <option key={`end-${idx}`} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vitals Card */}
              <div className={styles.section}>
                <div className={styles.card}>
                  <h4><IoIosHeartEmpty className={styles.icon} /> Vitals</h4>
                  <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                      <span className={styles.statValue}>120 mg/dt</span>
                      <span className={styles.statLabel}>Blood glucose level</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statValue}>55 kg</span>
                      <span className={styles.statLabel}>Weight</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statValue}>70 bpm</span>
                      <span className={styles.statLabel}>Heart rate</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statValue}>7%</span>
                      <span className={styles.statLabel}>Oxygen saturation</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statValue}>38.5°C</span>
                      <span className={styles.statLabel}>Body temperature</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statValue}>120/50 mm Hg</span>
                      <span className={styles.statLabel}>Blood pressure</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medications Card */}
              <div className={styles.section}>
                <div className={styles.card}>
                  <h4><IoClipboardOutline className={styles.icon} /> Medications</h4>
                  <ul className={styles.medicationList}>
                    <li>
                      <strong>Jardance 25</strong>
                      <p>2 Pills · Q2 : CO PM</p>
                    </li>
                    <li>
                      <strong>Routine Medicine</strong>
                      <p>No observations or notes</p>
                    </li>
                    <li>
                      <strong>Indicer 20</strong>
                      <p>1 Pill · Q2 : CO PM</p>
                    </li>
                    <li>
                      <strong>Emergency</strong>
                      <p>Patient observed to be having seizures. Indiver given to reduce blood pressure</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Test Reports Card */}
              <div className={styles.section}>
                <div className={styles.card}>
                  <h4><TbReportSearch className={styles.icon} /> Test Reports</h4>
                  <ul className={styles.testList}>
                    <li>
                      <p>UV Invasive Ultrasound</p>
                      <p>02 : CO PM</p>
                    </li>
                    <li>
                      <strong>Nerve Disorder</strong>
                      <p>A small rare-in the left-mid section of the neck has shown swollen properties. A brain scan is suggested</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
