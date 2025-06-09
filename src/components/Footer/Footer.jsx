import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/landingPage/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className={styles.ctaSection}>
        <h2>
          You’re only one click away
          <br />
          from a life-changing journey
        </h2>
      <Link to="/patient-login">
  <button className={styles.ctaButton}>Try Medscan Now</button>
</Link>
        <div className={styles.ctaInfo}>
          <span>✔ 350+ renowned Doctors</span>
          <span>✔ Virtual health assistant powered by AI</span>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerBrand}>
            <img src={logo} alt="Medscan Logo" className={styles.logo} />
            <p>
              Improving human health through the combination of cutting-edge
              technologies and top medical expertise.
            </p>
            <div className={styles.socialIcons}>
              <button className={styles.iconButton}>
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </button>
              <button className={styles.iconButton}>
                <FontAwesomeIcon icon={faFacebook} />
              </button>
              <button className={styles.iconButton}>
                <FontAwesomeIcon icon={faLinkedin} />
              </button>
              <button className={styles.iconButton}>
                <FontAwesomeIcon icon={faInstagram} />
              </button>
            </div>
          </div>

          <div className={styles.footerColumns}>
            <div className={styles.column}>
              <h4>Company</h4>
              <ul>
                <li>About us</li>
                <li>Pricing</li>
                <li>Join as a Doctor</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Product</h4>
              <ul>
                <li>AI Health Assistant</li>
                <li>AI Doctor</li>
                <li>Supplements</li>
                <li>Lab Test Interpretation</li>
                <li>Symptom Checker</li>
                <li>Second Opinion</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Resources</h4>
              <ul>
                <li>Blog</li>
                <li>Knowledge Base</li>
                <li>Symptoms Guide</li>
                <li>Glossary</li>
                <li>All Articles</li>
                <li>All Doctors</li>
                <li>Use Cases</li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Trust</h4>
              <ul>
                <li>Terms of use</li>
                <li>Privacy policy</li>
                <li>Cookie policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className={styles.cookieBar}>
          <span>This site uses <a href="#">cookies</a> to enhance the quality of its services.</span>
          <button className={styles.cookieBtn}>Accept</button>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;
