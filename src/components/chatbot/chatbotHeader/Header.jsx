import React from 'react';
import styles from '../../ChatbotCss/Chatbot.module.css';
import { FaArrowLeft, FaBell } from 'react-icons/fa';
import avatar from '../../../assets/images/drImages/image-dr.png'; // Assuming you have a default avatar image

const ChatbotHeader = ({ user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleSection}>
  <FaArrowLeft className={styles.backIcon} />
  <span className={styles.title}>Chatbot</span>
</div>

      <div className={styles.userSection}>
        <FaBell className={styles.icon} />
 <img
  src={avatar}
  alt="User"
  className={styles.avatar}
/>


      </div>
    </header>
  );
};

export default ChatbotHeader;