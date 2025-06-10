import React from 'react';
import styles from '../MedicalAdvices/MedicalAdvices.module.css';
import PatientSidebar from "../../../components/patientsidebar/PatientSB";
import PatientNav from "../../../components/PatientNav/PatientNav";

const  Madvices  = ({ userName, advices }) => {
  return (
    <div style={{ display: "flex" }}>
      <PatientSidebar />
      <div style={{ flex: 1 }}>
        <PatientNav />
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Dear <strong>{userName}</strong>, these are some medical advices based on your health condition and the diseases you added.
        </p>
      </div>

      <div className={styles.advicesList}>
        {(advices || []).map((advice, index) => (

          <div key={index} className={styles.adviceCard}>
            <div className={styles.adviceHeader}>
              <h3>{index + 1}. {advice.title}</h3>
              <button className={styles.removeBtn} onClick={() => advice.onRemove?.(advice.id)}>✕</button>
            </div>
            <ul>
              {advice.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default  Madvices ;
