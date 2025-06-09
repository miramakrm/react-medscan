import React from "react";
import PatientSidebar from "../../../components/patientsidebar/PatientSB";
import PatientNav from "../../../components/PatientNav/PatientNav";
import styles from "./PatientChatbot.module.css";
import ChatbotMainContent from "../../../components/chatbot/ChatbotScreen/ChatbotScreen";
import MessageInput from "../../../components/chatbot/MessageInput/MessageInput";

const PatientChatbot = () => {
  const user = {
    name: "Sara123",
    avatar: "https://i.pravatar.cc/40?u=patient.sara",
  };

  const handleSend = (msg) => {
    console.log("Message sent:", msg);
  };

  return (
    <div style={{ display: "flex" }}>
      <PatientSidebar user={user} />
      <div style={{ flex: 1 }}>
        <PatientNav />
        <div className={styles.container}>
          <div className={styles.chatArea}>
            <ChatbotMainContent />
            <MessageInput onSend={handleSend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientChatbot;
