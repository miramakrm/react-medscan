import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate
import styles from "../signUp/signup.module.css";
import doctorImg from "../../../assets/images/drImages/DR.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faUserInjured ,faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import google from "../../../assets/images/drImages/google.png";
import { Link } from "react-router-dom";

const DoctorSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
  
  const [selectedRole, setSelectedRole] = useState("doctor");
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // استخدام useNavigate للتوجيه

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      // send data to backend
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginSection}>
        <div className={styles.toggleContainer}>
          <div
            className={`${styles.toggleOption} ${
              selectedRole === "doctor" ? styles.selected : styles.unselected
            }`}
            onClick={() => setSelectedRole("doctor")}
          >
            Doctor
            <FontAwesomeIcon icon={faUserDoctor} style={{ marginLeft: "8px" }} />
          </div>
          <div
  className={`${styles.toggleOption} ${
    selectedRole === "patient" ? styles.selected : styles.unselected
  }`}
  onClick={() => {
    setSelectedRole("patient");
    setTimeout(() => navigate("/patient-signup"), 300); // delay للتأثير
  }}
>
  Patient
  <FontAwesomeIcon icon={faUserInjured} style={{ marginLeft: "8px" }} />
</div>


        </div>

        <h2 className={styles.welcomeText}>Welcome!</h2>
        <p className={styles.headline}>Check your sign up and start managing your account</p>

        <button className={styles.googleLoginButton}>
          <img src={google} alt="Google" />
          Sign up with Google
        </button>

        <div className={styles.divider}>
          <div className={styles.line}></div>
          <span className={styles.text}>Or use Email</span>
          <div className={styles.line}></div>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Username:</label>
          <div className={styles.inputField}>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <label htmlFor="email">Email:</label>
          <div className={styles.inputField}>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <label htmlFor="password">Password:</label>
        <div className={styles.inputField}>
  <div className={styles.passwordField}>
    <input
      id="password"
      type={showPassword ? "text" : "password"}
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
    />
    <span
      className={styles.toggleVisibility}
      onClick={() => setShowPassword((prev) => !prev)}
    >
      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
    </span>
  </div>
</div>

          {errors.password && <p className={styles.error}>{errors.password}</p>}

          <button type="submit" className={styles.continueButton}>
            START <span>→</span>
          </button>
        </form>

        <p className={styles.footerText}>
          By Signing up, you agree to our <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.
        </p>

        <div className={styles.loginRedirect}>
          <p>Already a Member?</p>
          {/* تعديل رابط تسجيل الدخول للتوجيه لصفحة login */}
         
<Link to="/login" className={styles.loginLink}>LOG IN</Link>
        </div>
      </div>

      <div className={styles.imageSection}>
        <img src={doctorImg} alt="Doctor Signup Visual" />
      </div>
    </div>
  );
};

export default DoctorSignUp;
