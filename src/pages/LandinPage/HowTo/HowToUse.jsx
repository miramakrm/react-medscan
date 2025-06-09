import React from "react";
import styles from "../HowTo/HowToUse.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp, faCommentMedical, faNotesMedical } from '@fortawesome/free-solid-svg-icons';


function HowToUse() {
  return (
    <div className={styles.section} id="How-to-use">
      <h2 className={styles.title}>How to Use</h2>
      <p className={styles.subtitle}>
        Experience the ease and precision of Docus AI in just a few simple steps.
      </p>

      <div className={styles.container}>
        {[
          {
            icon: faFileArrowUp,
            title: "Upload Your Scans",
            desc: "Begin by uploading your scanning photos into the checker. Our AI technology is designed to understand a wide range of health indicators.",
          },
          {
            icon: faCommentMedical,
            title: "Answer Follow-Up Questions",
            desc: "The Symptom Checker may ask follow-up questions to better identify potential conditions, targeting specific health concerns.",
          },
          {
            icon: faNotesMedical,
            title: "Receive Your Results",
            desc: "Our AI analyzes your symptoms and instantly provides you with a comprehensive list of potential health conditions and insights.",
          },
        ].map((step, index) => (
          <div className={styles.box} key={index}>
            <FontAwesomeIcon icon={step.icon} className={styles.icon} />
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.description}>{step.desc}</p>
          </div>
        ))}
      </div>

      <a href="/patient-signup" className={styles.button}>Start Scan Assessment</a>

    </div>
  );
}

export default HowToUse;
