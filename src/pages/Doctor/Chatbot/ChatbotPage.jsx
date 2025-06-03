import React from "react";
import { Link } from "react-router-dom";

import styles from "../Chatbot/DoctorChatbot.module.css";
import ChatbotHeader from "../../../components/chatbot/chatbotHeader/Header";
import ChatbotMainContent from "../../../components/chatbot/ChatbotScreen/ChatbotScreen";
import MessageInput from "../../../components/chatbot/MessageInput/MessageInput";
import DrSidebar from "../../../components/drsidebar/DoctorSB";  // استيراد DrSidebar

const DoctorChatbot = () => {
  const user = {
    name: "DrAhmedAli",
    avatar: "https://i.pravatar.cc/40?u=dr.ahmed",
  };

  const handleSend = (msg) => {
    console.log("Message sent:", msg);
  };

  return (
    <div className={styles.container}>
      <DrSidebar user={user} /> {/* استخدام DrSidebar هنا */}
      
      <div className={styles.chatArea}>
        <ChatbotHeader user={user} />
        <ChatbotMainContent />
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default DoctorChatbot;
