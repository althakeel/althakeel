import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const ScrollUp = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolledEnough = window.scrollY > 300;
      const isNotMobile = window.innerWidth > 768; // Hide on devices <= 768px
      setIsVisible(scrolledEnough && isNotMobile);
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('resize', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '10px',
    right: isArabic ? 'auto' : '10px',  // right for LTR
    left: isArabic ? '10px' : 'auto',   // left for RTL
    padding: '13px',
    borderRadius: '25%',
    backgroundColor: '#a08649',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
    zIndex: 999,
  };

  const hoverStyle = {
    backgroundColor: '#1e40af',
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollUp;
