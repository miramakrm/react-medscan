import React, { useState } from "react";
import styles from "../MedicalAdvices/MedicalAdvices.module.css";
import PatientSidebar from "../../../components/patientsidebar/PatientSB";
import PatientNav from "../../../components/PatientNav/PatientNav";
import DiabetesImage from "../../../assets/images/patientImages/Diabetes.png";
import HypertensionImage from "../../../assets/images/patientImages/Hypertension.png";
import AsthmaImage from "../../../assets/images/patientImages/asthma.png";
import OtherImage from "../../../assets/images/patientImages/other.png";
import { useNavigate } from "react-router-dom";

const MedicalForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "No",
    age: "",
    weight: "",
    height: "",
    hasAllergies: "No",
    allergies: "",
    hasMedications: "No",
    medications: "",
    medicalConditions: "",
    otherCondition: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
const navigate = useNavigate();

  const conditionImages = {
    Diabetes: DiabetesImage,
    Hypertension: HypertensionImage,
    Asthma: AsthmaImage,
    Other: OtherImage,
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";
    return Object.keys(newErrors).length === 0 ? null : newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validateForm();
  if (!validationErrors) {
    console.log("Submitted:", formData);
    setIsSubmitted(true);

    // بعد ثواني أو فورًا انقلي المستخدم لصفحة جديدة:
    navigate("/recommendations"); // غيري المسار حسب صفحتك المطلوبة
  } else {
    setErrors(validationErrors);
  }
};


  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      gender: "No",
      age: "",
      weight: "",
      height: "",
      hasAllergies: "No",
      allergies: "",
      hasMedications: "No",
      medications: "",
      medicalConditions: "",
      otherCondition: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const renderToggle = (label, stateKey, inputName, inputPlaceholder) => (
    <div className={styles.formGroup}>
      <label>{label}</label>
      <div
        className={`${styles.toggleSwitch} ${
          formData[stateKey] === "Yes" ? styles.active : ""
        }`}
        onClick={() =>
          setFormData((prev) => ({
            ...prev,
            [stateKey]: prev[stateKey] === "Yes" ? "No" : "Yes",
            [inputName]: prev[stateKey] === "Yes" ? "" : prev[inputName],
          }))
        }
      >
        <div className={styles.toggleCircle}></div>
        <span className={styles.toggleLabel}>
          {formData[stateKey] === "Yes" ? "Yes" : "No"}
        </span>
      </div>
      {formData[stateKey] === "Yes" && (
        <input
          type="text"
          name={inputName}
          value={formData[inputName]}
          onChange={handleInputChange}
          placeholder={inputPlaceholder}
          className={styles.inputField}
        />
      )}
    </div>
  );

  if (isSubmitted) {
    return (
   <div className={styles.pageWrapper}>
  <PatientSidebar />
  <div className={styles.mainContent}>
    <PatientNav />
    <div className={styles.container}>
          <div className={styles.successContainer}>
            <h2>Thank you for submitting your medical information!</h2>
            <p>Your details have been received successfully.</p>
            <button onClick={resetForm} className={styles.submitButton}>
              Submit Another Form
            </button>
          </div>
        </div>
      </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex" }}>
      <PatientSidebar />
      <div style={{ flex: 1 }}>
        <PatientNav />
        <div className={styles.container}>
          <h1 className={styles.title}>
            Let's add your diseases to help us identify your medical condition
            to get accurate advice
          </h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>First Name</label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`${styles.inputField} ${
                    errors.firstName ? styles.error : ""
                  }`}
                />
                {errors.firstName && (
                  <span className={styles.errorMessage}>
                    {errors.firstName}
                  </span>
                )}
              </div>
              <div className={styles.formGroup}>
                <label>Last Name</label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`${styles.inputField} ${
                    errors.lastName ? styles.error : ""
                  }`}
                />
                {errors.lastName && (
                  <span className={styles.errorMessage}>
                    {errors.lastName}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className={styles.selectField}
                >
                  <option value="select gender">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Age</label>
                <input
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className={styles.inputField}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Weight</label>
                <input
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className={styles.inputField}
                 placeholder="kg"

                />
              </div>
              <div className={styles.formGroup}>
                <label>Height</label>
                <input
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className={styles.inputField}
                  placeholder="cm"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              {renderToggle(
                "Do you have any allergies?",
                "hasAllergies",
                "allergies",
                "If you have any allergies, mention it"
              )}
              {renderToggle(
                "Do you take medications on a regular basis?",
                "hasMedications",
                "medications",
                "If yes, mention it"
              )}
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroupFull}>
                <label>Do you have any medical conditions?</label>
               <div className={styles.conditionRow}>
  {["Diabetes", "Hypertension", "Asthma", "Other"].map((cond) => (
    <button
      key={cond}
      type="button"
      className={`${styles.conditionCard} ${
        formData.medicalConditions === cond ? styles.selected : ""
      }`}
      onClick={() =>
        setFormData((prev) => ({
          ...prev,
          medicalConditions: cond,
          otherCondition: cond === "Other" ? prev.otherCondition : "",
        }))
      }
    >
      <img
        src={conditionImages[cond]}
        alt={cond}
        className={styles.conditionImage}
      />
      <span className={styles.conditionTitle}>{cond}</span>
    </button>
  ))}


<div className={styles.otherInputGroup}>
  <label className={styles.otherLabel}>
    If you choose other mention it?
  </label>
  <input
    type="text"
    name="otherCondition"
    value={formData.otherCondition}
    onChange={handleInputChange}
    placeholder="ex: anti bodies"
    className={styles.inputFieldSmall}
  />
</div>

</div>

              </div>
            </div>

<div className={styles.buttonGroup}>
  <button
    type="button"
    className={styles.secondaryButton}
    onClick={resetForm}
  >
    Reset Form
  </button>
  <button
    type="button"
    className={styles.primaryButton}
    onClick={() => {
      const validationErrors = validateForm();
      if (!validationErrors) {
        console.log("Submitted:", formData);
        setIsSubmitted(true);
        navigate("/madvices"); // غيري المسار ده حسب ما تحبي
      } else {
        setErrors(validationErrors);
      }
    }}
  >
    Continue
  </button>
</div>


         

          </form>
        </div>
      </div>
    </div>
  );
};

export default MedicalForm;