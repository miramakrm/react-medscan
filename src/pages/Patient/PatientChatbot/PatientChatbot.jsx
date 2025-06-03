import React from "react";
import { Link } from "react-router-dom";

import styles from "../PatientChatbot/PatientChatbot.module.css";
import ChatbotHeader from "../../../components/chatbot/chatbotHeader/Header";
import ChatbotMainContent from "../../../components/chatbot/ChatbotScreen/ChatbotScreen";
import MessageInput from "../../../components/chatbot/MessageInput/MessageInput";
import PatientSidebar from "../../../components/patientsidebar/PatientSB";  // استيراد PatientSidebar

const PatientChatbot = () => {
  const user = {
    name: "Sara123",
    avatar: "https://i.pravatar.cc/40?u=patient.sara",
  };

  const handleSend = (msg) => {
    console.log("Message sent:", msg);
  };

  return (
    <div className={styles.container}>
      <PatientSidebar user={user} /> {/* استخدام PatientSidebar هنا */}
      
      <div className={styles.chatArea}>
        <ChatbotHeader user={user} />
        <ChatbotMainContent />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default PatientChatbot;
