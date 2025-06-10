import React, { useState } from 'react';
import styles from './PatientScans.module.css';
import PatientSidebar from "../../../components/patientsidebar/PatientSB";
import PatientNav from "../../../components/PatientNav/PatientNav";
import { BsCloudUpload } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";


const PatientScans = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [resultsReady, setResultsReady] = useState(false);

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleBrowseClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleUpload = () => {
    if (selectedFile) {
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
        setAnalyzing(true);
        setTimeout(() => {
          setAnalyzing(false);
          setResultsReady(true);
        }, 3000);
      }, 2000);
    }
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    setUploading(false);
    setAnalyzing(false);
    setResultsReady(false);
  };

  const handleDownloadResults = () => {
    alert('Downloading results...');
  };

  return (
    <div className={styles.pageWrapper}>
      <PatientSidebar />
      <div className={styles.mainContent}>
        <PatientNav />
        <div className={styles.patientScans}>
          <div className={styles.header}>
            <h2 className={styles.pageTitle}>My Scans</h2>
          </div>

          <div className={styles.cardsContainer}>
            {/* Step 1: Upload */}
            <div className={styles.card}>
              <div className={styles.cardNumber}>1</div>
              <div className={styles.cardContent}>
                <BsCloudUpload />

                <h3 className={styles.cardTitle}>Upload your scans</h3>
                <p className={styles.fileStatus}>
                  {selectedFile ? selectedFile.name : 'png, pdf, jpg accepted'}
                </p>
                {!selectedFile ? (
                  <>
                    <input
                      type="file"
                      id="fileInput"
                      className={styles.fileInput}
                      onChange={handleFileChange}
                      accept=".png,.pdf,.jpg"
                    />
                    <button className={styles.browseButton} onClick={handleBrowseClick}>
                      Browse
                    </button>
                  </>
                ) : (
                  <div className={styles.uploadActions}>
                    <button className={styles.cancelButton} onClick={handleCancelUpload}>Cancel</button>
                    <button
                      className={styles.uploadButton}
                      onClick={handleUpload}
                      disabled={uploading}
                    >
                      {uploading ? 'Uploading...' : 'Upload'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2: Analyze */}
            <div className={`${styles.card} ${analyzing ? styles.cardActive : ''}`}>
              <div className={styles.cardNumber}>2</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Analyze your scans</h3>
                <p className={styles.cardDescription}>
                  {analyzing ? 'Analyzing...' : 'Please wait to get accurate results'}
                </p>
              </div>
            </div>

            {/* Step 3: Download */}
            <div className={`${styles.card} ${resultsReady ? styles.cardActive : ''}`}>
              <div className={styles.cardNumber}>3</div>
              <div className={styles.cardContent}>
                <BsDownload />
                <h3 className={styles.cardTitle}>Download results</h3>
                <p className={styles.cardDescription}>You can download your scan results</p>
                <button
                  className={styles.downloadButton}
                  onClick={handleDownloadResults}
                  disabled={!resultsReady}
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientScans;
