
import React, { useState } from 'react';
import styles from '../PatientScans/PatientScans.module.css';
import PatientSidebar from "../../../components/patientsidebar/PatientSB";
import PatientNav from "../../../components/PatientNav/PatientNav";
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
      // Simulate file upload
      setTimeout(() => {
        setUploading(false);
        setAnalyzing(true);
        // Simulate analysis
        setTimeout(() => {
          setAnalyzing(false);
          setResultsReady(true);
        }, 3000); // Simulate analysis time
      }, 2000); // Simulate upload time
    }
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
    setUploading(false);
    setAnalyzing(false);
    setResultsReady(false);
  };

  const handleDownloadResults = () => {
    // Simulate download
    alert('Downloading results...');
  };

  return (
       <div style={{ display: "flex" }}>
      <PatientSidebar />
      <div style={{ flex: 1 }}>
        <PatientNav />
    <div className={styles.patientScansContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>My Scans</h2>
      </div>

      <div className={styles.contentGrid}>
        {/* Step 1: Upload your scans */}
        <div className={styles.card}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Upload your scans</h3>
            <p className={styles.fileStatus}>
              {selectedFile ? selectedFile.name : 'png,pdf,jpg accepted'}
            </p>
            {!selectedFile ? (
              <>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                  accept=".png,.pdf,.jpg"
                />
                <button className={styles.browseButton} onClick={handleBrowseClick}>
                  browse
                </button>
              </>
            ) : (
              <div className={styles.uploadActions}>
                <button className={styles.cancelButton} onClick={handleCancelUpload}>cancel</button>
                <button
                  className={styles.uploadButton}
                  onClick={handleUpload}
                  disabled={uploading}
                >
                  {uploading ? 'Uploading...' : 'upload'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Step 2: Analyze your scans */}
        <div className={`${styles.card} ${analyzing ? styles.cardActive : ''}`}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Analyze your scans</h3>
            <p className={styles.cardDescription}>
              {analyzing ? 'Analyzing...' : 'Please waiting to get accurate results'}
            </p>
          </div>
        </div>

        {/* Step 3: Download results */}
        <div className={`${styles.card} ${resultsReady ? styles.cardActive : ''}`}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>Download results</h3>
            <p className={styles.cardDescription}>
              You can download your scans results
            </p>
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
