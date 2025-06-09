import React, { useState, useEffect } from 'react';
import styles from '../DrRecommendation/DrRecommendation.module.css';
import PatientSidebar from "../../../components/patientsidebar/PatientSB";
import PatientNav from "../../../components/PatientNav/PatientNav";
import loubna from '../../../assets/images/patientImages/loubna.png';
import man from "../../../assets/images/patientImages/man.png";
import orthopedicIcon from '../../../assets/images/patientImages/orthopedic.png';
import dermatologyIcon from '../../../assets/images/patientImages/dermatology.png';
import dentistryIcon from '../../../assets/images/patientImages/dendist.png';
import pediatricsIcon from '../../../assets/images/patientImages/pediatrics.png';
import nephrologyIcon from '../../../assets/images/patientImages/urology.png';
import oncologyIcon from '../../../assets/images/patientImages/Cancer.png';
import neurosurgeryIcon from '../../../assets/images/patientImages/phycatry.png';
import cardiologyIcon from '../../../assets/images/patientImages/cardiology.png';
import gynecologyIcon from '../../../assets/images/patientImages/gynecology.png';
import internistIcon from '../../../assets/images/patientImages/gastrology.png';
import ophthalmologyIcon from '../../../assets/images/patientImages/Eye problem.png';

const doctorsData = [
  {
    id: 1,
    name: 'Mohamed Khalil',
    title: 'Professor of Neurology and Psychiatry, Faculty of Medicine',
    specialty: 'Neurology',
    overallRating: 4.5,
    visitors: 245,
    hygieneRating: 4,
    goodListenerRating: 5,
    subSpecialties: ['Pediatric Psychiatry', 'Adult Psychiatry'],
    location: 'New Cairo, Al Rehab 57',
    fees: 500,
    waitingTime: 25,
    callCost: 100,
    availability: '2/14/2025',
    imageUrl: man,
  },
  {
    id: 2,
    name: 'Loubna Nabil',
    title: 'Consultant of Neurology',
    specialty: 'Neurology',
    overallRating: 4.8,
    visitors: 25,
    subSpecialties: ['Adult Neurology'],
    location: 'New Cairo, City center',
    fees: 300,
    waitingTime: 30,
    callCost: 70,
    availability: '10/23/2025',
    imageUrl: loubna,
  },
];

// Data for hospitals based on city
const hospitalsByCity = {
  Cairo: [
    'Cleopatra Hospital',
    'Al Salam Hospital',
    'Dar Al Fouad Hospital',
    'As-Salam International Hospital'
  ],
  Alexandria: [
    'Alexandria University Hospital',
    'Pharos Hospital',
    'Andalusia Smouha Hospital'
  ],
  Giza: [
    'Agouza Hospital',
    'Giza International Hospital',
    'Al Mokattam Hospital'
  ],
  Luxor: [
    'Luxor International Hospital',
    'Luxor General Hospital'
  ],
  // Add more cities and their hospitals as needed
};

const DoctorRecommendation = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Neurology');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDoctorType, setSelectedDoctorType] = useState('All Doctors'); // Renamed to avoid conflict
  const [selectedCity, setSelectedCity] = useState('Cairo');
  const [selectedHospital, setSelectedHospital] = useState('Cleopatra Hospital');
  const [availableHospitals, setAvailableHospitals] = useState(hospitalsByCity['Cairo']); // State for dynamic hospitals

  // Effect to update available hospitals when selectedCity changes
  useEffect(() => {
    setAvailableHospitals(hospitalsByCity[selectedCity] || []);
    // Reset selected hospital if the current one is not in the new list
    if (selectedHospital && !hospitalsByCity[selectedCity]?.includes(selectedHospital)) {
      setSelectedHospital(hospitalsByCity[selectedCity]?.[0] || ''); // Select first available or empty
    } else if (!selectedHospital && hospitalsByCity[selectedCity]?.length > 0) {
        setSelectedHospital(hospitalsByCity[selectedCity][0]); // If no hospital is selected, set the first one
    } else if (hospitalsByCity[selectedCity]?.length === 0) {
        setSelectedHospital(''); // If no hospitals for the city, set to empty
    }
  }, [selectedCity]);


  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', {
      searchQuery,
      selectedDoctorType,
      selectedCity,
      selectedHospital
    });
    // Implement your actual search logic here, e.g., API call
  };

  const filteredDoctors = doctorsData.filter(doctor =>
    doctor.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase()) &&
    (doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className={styles.pageWrapper}>
      <PatientSidebar />
      <div className={styles.mainContent}>
        <PatientNav />
        <div className={styles.searchContainer}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <div className={styles.searchFieldsGroup}> {/* New div for the horizontal layout */}
              <div className={styles.inputGroupCompact}> {/* Use a new class for compact styling */}
                <label htmlFor="selectDoctorType" className={styles.labelCompact}>Select Doctor</label>
                <select
                  id="selectDoctorType"
                  className={styles.selectInputCompact}
                  value={selectedDoctorType}
                  onChange={(e) => setSelectedDoctorType(e.target.value)}
                >
                  <option value="All Doctors">All Doctors</option>
                  <option value="Cardiologists">Cardiologists</option>
                  <option value="Dermatologists">Dermatologists</option>
                  <option value="Neurologists">Neurologists</option>
                </select>
                
              </div>

              <div className={styles.separator}></div> {/* Vertical separator */}

              <div className={styles.inputGroupCompact}>
                <label htmlFor="selectCity" className={styles.labelCompact}>Select City</label>
                <select
                  id="selectCity"
                  className={styles.selectInputCompact}
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  {Object.keys(hospitalsByCity).map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
               
              </div>

              <div className={styles.separator}></div> {/* Vertical separator */}

              <div className={styles.inputGroupCompact}>
                <label htmlFor="selectHospital" className={styles.labelCompact}>Search Doctor, clinics, hospital, etc.</label>
                <select
                  id="selectHospital"
                  className={styles.selectInputCompact}
                  value={selectedHospital}
                  onChange={(e) => setSelectedHospital(e.target.value)}
                >
                  {availableHospitals.length > 0 ? (
                    availableHospitals.map(hospital => (
                      <option key={hospital} value={hospital}>{hospital}</option>
                    ))
                  ) : (
                    <option value="">No hospitals for this city</option>
                  )}
                </select>
              </div>

              <button type="submit" className={styles.searchButtonCompact}>
                Search
              </button>
            </div>
          </form>
        </div>

        <div className={styles.doctorRecommendation}>
          <div className={styles.specialtyFilters}>
            {[
              { name: 'Orthopedic Surgery', icon: orthopedicIcon },
              { name: 'Dermatology', icon: dermatologyIcon },
              { name: 'Dentistry', icon: dentistryIcon },
              { name: 'Pediatrics', icon: pediatricsIcon },
              { name: 'Nephrology', icon: nephrologyIcon },
              { name: 'Oncology', icon: oncologyIcon },
              { name: 'Neurosurgery', icon: neurosurgeryIcon },
              { name: 'Cardiology', icon: cardiologyIcon },
              { name: 'Obstetrics & Gynecology', icon: gynecologyIcon },
              { name: 'Internist', icon: internistIcon },
              { name: 'Ophthalmology', icon: ophthalmologyIcon },
            ].map((item, idx) => (
              <div
                key={idx}
                className={styles.specialtyItem}
                onClick={() => setSelectedSpecialty(item.name)}
              >
                <div
                  className={
                    item.name === selectedSpecialty
                      ? `${styles.iconContainer} ${styles.selectedSpecialty}`
                      : styles.iconContainer
                  }
                >
                  <img src={item.icon} alt={item.name} className={styles.filterIcon} />
                </div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.filterOptions}>
            <select className={styles.filterDropdown}>
              <option>Title</option>
              <option>Junior resident</option>
              <option>Senior resident</option>
              <option>Head of department</option>
              <option>Professor</option>
              <option>Consultant</option>
              <option>Specialist</option>
              <option>General Practitioner</option>
            </select>
            <select className={styles.filterDropdown}>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <select className={styles.filterDropdown}>
              <option>Rating</option>
              <option>1 Star ⭐</option>
              <option>2 Stars ⭐⭐</option>
              <option>3 Stars ⭐⭐⭐</option>
              <option>4 Stars ⭐⭐⭐⭐</option>
              <option>5 Stars ⭐⭐⭐⭐⭐</option>
            </select>
            <select className={styles.filterDropdown}>
              <option>Availability</option>
              <option>Today</option>
              <option>Tomorrow</option>
              <option>Next Week</option>
              <option>Next Month</option>
            </select>
            <select className={styles.filterDropdown}>
              <option>Fees</option>
              <option>Less than 100 EGP</option>
              <option>100 - 300 EGP</option>
              <option>300 - 500 EGP</option>
              <option>500 - 1000 EGP</option>
            </select>
          </div>

          <div className={styles.doctorList}>
            {filteredDoctors.map(doctor => (
              <div key={doctor.id} className={styles.doctorCard}>
                <div className={styles.doctorInfo}>
                  <img src={doctor.imageUrl} alt={doctor.name} className={styles.doctorImage} />
                  <div className={styles.details}>
                    <h3 className={styles.doctorName}>Dr. {doctor.name}</h3>
                    <p className={styles.doctorTitle}>{doctor.title}</p>
                    <div className={styles.rating}>
                      <span>{'⭐'.repeat(Math.floor(doctor.overallRating))}</span>
                      <span>{doctor.overallRating} Overall Rating from {doctor.visitors} Visitors</span>
                    </div>
                    <div className={styles.reviewRatings}>
                      {doctor.hygieneRating && <p>Hygiene: {'⭐'.repeat(doctor.hygieneRating)}</p>}
                      {doctor.goodListenerRating && <p>Good Listener: {'⭐'.repeat(doctor.goodListenerRating)}</p>}
                    </div>
                    <p className={styles.specialization}>
                      <span className={styles.boldText}>{doctor.specialty}</span> Specialization in{' '}
                      {doctor.subSpecialties.map((sub, index) => (
                        <span key={index}>{sub}{index < doctor.subSpecialties.length - 1 ? ', ' : ''}</span>
                      ))}
                    </p>
                    <p className={styles.location}>Non-Cairo, {doctor.location}</p>
                    <p className={styles.fees}>Fees: {doctor.fees} EGP</p>
                    <p className={styles.waitingTime}>Waiting Time: {doctor.waitingTime} Minutes</p>
                    <p className={styles.callCost}>{doctor.callCost} - Cost of regular call</p>
                  </div>
                </div>
                <div className={styles.availability}>
                  <p>Next Availability: {doctor.availability}</p>
                </div>
              </div>
            ))}
          </div>

          {/* The hospital info below might be redundant if the main search handles it */}
          {/* <div className={styles.hospitalInfo}>
            <p>Cleopatra Hospital</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorRecommendation;