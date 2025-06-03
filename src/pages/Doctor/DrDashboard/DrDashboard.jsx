import React, { useState, useEffect } from "react";
import styles from "../DrDashboard/DrDashboard.module.css";
import DrSidebar from "../../../components/drsidebar/DoctorSB";
import DrNavbar from "../../../components/DrNavbar/DrNavbar";
import { HiOutlineAdjustments } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const [user, setUser] = useState({ name: "", role: "", profileImage: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 10;
  const [totalPatients, setTotalPatients] = useState(0);
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  // بيانات وهمية للمرضى
  const mockPatients = [
    {
      id: "P001",
      name: "Ahmed Hassan",
      joinedDate: "2024-05-01T14:30:00Z",
      location: "Cairo, Egypt",
    },
    {
      id: "P002",
      name: "Mona Elmasry",
      joinedDate: "2024-05-10T11:15:00Z",
      location: "Alexandria, Egypt",
    },
    {
      id: "P003",
      name: "Karim Fathy",
      joinedDate: "2024-05-12T09:45:00Z",
      location: "Giza, Egypt",
    },
  ];

  // جلب بيانات المستخدم
  useEffect(() => {
    fetch("/api/user") // غير الرابط حسب الـ API الخاص بك
      .then((res) => res.json())
      .then((data) => {
        setUser({
          name: data.name,
          role: data.role,
          profileImage: data.profileImage,
        });
      })
      .catch((err) => {
        console.error("Failed to fetch user data", err);
      });
  }, []);

  // استخدام بيانات وهمية فقط
  useEffect(() => {
    setPatients(mockPatients);
    setTotalPatients(mockPatients.length);
  }, []);

  const totalPages = Math.ceil(totalPatients / patientsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const getPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  return (
    <>
      <DrNavbar user={user} />

      <div className={styles.dashboardContainer}>
        <DrSidebar />
        <div className={styles.content}>
          <div className={styles.cardContainer}>
            <div className={styles.header}>
              <h3 className={styles.headerTitle}>
                Patients List
                <MdArrowOutward className={styles.arrowIcon} />
              </h3>

              <div className={styles.buttonGroup}>
                <button className={styles.addButton}> + Add Patient</button>
                <button className={styles.filterButton}>
                  <HiOutlineAdjustments
                    style={{ marginRight: "6px", verticalAlign: "middle" }}
                  />
                  Filter
                </button>
              </div>
            </div>

            <div className={styles.tableContainer}>
              <table className={styles.patientTable}>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>PATIENT NAME</th>
                    <th>JOINED DATE & TIME</th>
                    <th>LOCATION</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.length > 0 ? (
                    patients.map((patient) => (
                      <tr
                        key={patient.id}
                        onClick={() => navigate(`/dr-patient-dashboard/${patient.id}`)}
                        style={{ cursor: "pointer" }}
                      >
                        <td>{patient.id}</td>
                        <td>{patient.name}</td>
                        <td>{new Date(patient.joinedDate).toLocaleString()}</td>
                        <td>{patient.location}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No patients available.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                {getPageNumbers().map((number) => (
                  <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={currentPage === number ? styles.active : ""}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboard;
