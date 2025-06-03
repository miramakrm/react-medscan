import React from 'react';
import styles from '../../ChatbotCss/Chatbot.module.css';
import { LiaCommentsSolid } from 'react-icons/lia';
import { VscSparkle } from 'react-icons/vsc';
import { PiShieldWarningLight } from 'react-icons/pi';

import only from "../../../assets/images/chatbot/only1.PNG";

const ChatbotMainContent = () => {
  return (
    <div className={styles.main}>
<div className={styles.brandContainer}>
  <img src={only} alt="MedScan Logo" className={styles.logo} />
  <h1 className={styles.brand}>MEDSCAN</h1>
</div>

      <div className={styles.infoGrid}>
        <div className={styles.infoBox}>
          <LiaCommentsSolid className={styles.infoIcon} />
          <h3>Examples</h3>
          <p>“Analyze this chest X-ray for potential issues”</p>
          <p>“What does a mild disc bulge mean?”</p>
          <p>“Suggest a specialist for my scan results”</p>
        </div>

        <div className={styles.infoBox}>
          <VscSparkle className={styles.infoIcon} />
          <h3>Capabilities</h3>
          <p>Processes medical scans and provides an initial diagnosis</p>
          <p>Suggests precautions before consulting a doctor</p>
          <p>Recommends top-rated doctors based on your location</p>
        </div>

        <div className={styles.infoBox}>
          <PiShieldWarningLight className={styles.infoIcon} />
          <h3>Limitations</h3>
          <p>Cannot replace professional medical advice</p>
          <p>Accuracy depends on scan quality and AI model training</p>
          <p>Does not support real-time emergency diagnosis</p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMainContent;
