import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandinPage/LandingPage";
import DoctorSignUp from "./pages/Doctor/signUp/Signup";
import DoctorLogin from "./pages/Doctor/Login/Login";
import PatientLogin from "./pages/Patient/PatientLogin/PatientLogin";
import PatientSignUp from "./pages/Patient/PatientSginUp/PatientSignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DrForgetPassword from "./pages/Doctor/ForgetPassword/ForgetPassword/DrForgetPassword";
import SetPassword from "./pages/Doctor/ForgetPassword/SetPassword/SetPassword";
import VerifyCode from "../src/pages/Doctor/ForgetPassword/VerifyCode/VerifyCode";
import PatientForgetPassword from "./pages/Patient/PatientForgetPassword/PatientForgetPassword";
import PatientSetPassword from "./pages/Patient/PatientSetPassword/PatientSetPassword";
import PatientVerifyCode from "./pages/Patient/VerifyCode/PatientVerifyCode";
import DoctorChatbot from "./pages/Doctor/Chatbot/ChatbotPage";
import PatientChatbot from "./pages/Patient/PatientChatbot/PatientChatbot";
import DrDashboard from "./pages/Doctor/DrDashboard/DrDashboard";
import PatientDetails from "./pages/Doctor/drPatientDashboard/drPatientDashboard";
import DoctorProfile from "./pages/Doctor/DrProfile/DrProfile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<DoctorLogin />} />
      <Route path="/signup" element={<DoctorSignUp />} />
      <Route path="/patient-login" element={<PatientLogin />} />
      <Route path="/patient-signup" element={<PatientSignUp />} />
      <Route path="/doctor-forgot-password" element={<DrForgetPassword />} />
      <Route path="/set-password" element={<SetPassword />} />
      <Route path="/verify-code" element={<VerifyCode />} />
      <Route
        path="/patient-forgot-password"
        element={<PatientForgetPassword />}
      />
      <Route path="/patient-set-password" element={<PatientSetPassword />} />
      <Route path="/patient-verify-code" element={<PatientVerifyCode />} />
      <Route path="/doctor-chatbot" element={<DoctorChatbot />} />
      <Route path="/patient-chatbot" element={<PatientChatbot />} />
      <Route path="/dr-dashboard" element={<DrDashboard />} />
      <Route
        path="/dr-patient-dashboard/:patientId"
        element={<PatientDetails />}
      />
      <Route path="/dr-profile" element={<DoctorProfile />} />
    </Routes>
  );
}

export default App;
