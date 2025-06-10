import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../DrNavbar/DrNavbar.module.css';

import { IoArrowBack } from 'react-icons/io5';
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';

import avatar from '../../assets/images/drImages/image-dr.png';

const routeTitles = {
  "/doctor-chatbot": "Chat with MedScan",
  "/dr-dashboard": "Dashboard",
  "/dr-profile": "Profile Information",
  "/settings": "Settings",
};

const Navbar = ({ user }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [historyStack, setHistoryStack] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("Dashboard");

  useEffect(() => {
    setCurrentTitle(routeTitles[location.pathname] || "Dashboard");
    setHistoryStack((prev) => {
      // Only add to history if it's a new path and not the same as the last one
      if (prev.length === 0 || prev[prev.length - 1] !== location.pathname) {
        return [...prev, location.pathname];
      }
      return prev;
    });
  }, [location]);

  const handleBack = () => {
    setHistoryStack((prev) => {
      const newStack = [...prev];
      if (newStack.length > 1) { // لو فيه أكتر من صفحة في الـ history (يعني فيه صفحة ترجع لها)
        newStack.pop(); // Remove the current path
        const previousPath = newStack[newStack.length - 1]; // Get the path to navigate to
        if (previousPath) {
          navigate(previousPath);
        }
      } else {
        // لو مفيش تاريخ سابق للرجوع ليه (historyStack.length <= 1)
        // هنرجع لصفحة الداشبورد الافتراضية أو أي صفحة أساسية
        navigate('/dr-dashboard'); // أو navigate('/') حسب الصفحة الرئيسية بتاعتك
        // وممكن هنا نعمل reset للـ historyStack عشان يكون فيها صفحة الداشبورد بس
        return ['/dr-dashboard']; // دي هتخلي الـ history stack فيها عنصر واحد بس لما ترجع للداشبورد
      }
      return newStack;
    });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.titleWrapper}>
          {/* هنا شلنا الشرط historyStack.length > 1 عشان الأيقونة تفضل ظاهرة دايماً */}
          <IoArrowBack
            className={styles.backIcon}
            onClick={handleBack}
            size={20}
            color="#333"
          />
          <h1 className={styles.dashboardTitle}>{currentTitle}</h1>
        </div>
      </div>

      <div className={styles.centerSection}>
        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.notificationIcon}>
          <FaBell />
        </div>
        <div className={styles.userInfo}>
          <img
            src={user?.profileImage || avatar}
            alt="Doctor"
            className={styles.userAvatar}
          />
          <div className={styles.userDetails}>
            <span className={styles.userName}>{user?.name || "Doctor Name"}</span>
            <span className={styles.userRole}>{user?.role || "Doctor"}</span>
          </div>
          <FaChevronDown className={styles.dropdownIcon} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;