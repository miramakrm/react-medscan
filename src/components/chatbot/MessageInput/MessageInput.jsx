import React, { useState } from 'react';
import styles from '../../ChatbotCss/Chatbot.module.css';
import { IoImageOutline } from 'react-icons/io5';
import { RiAttachment2 } from 'react-icons/ri';
import { TbEdit } from 'react-icons/tb';
import { LuSendHorizontal } from 'react-icons/lu';


const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inputContainer}>
        <IoImageOutline className={styles.leftIcon} />
        <input
          className={styles.input}
          type="text"
          placeholder="Type message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className={styles.rightIcons}>
          <RiAttachment2 className={styles.icon} />
          <LuSendHorizontal className={styles.icon} onClick={() => onSend(message)} />
        </div>
      </div>
      <TbEdit className={styles.editIcon} />
    </footer>
  );
};

export default MessageInput;
