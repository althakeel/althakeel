import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const JobAlertBanner = () => {
  const { language } = useLanguage(); // 'en' or 'ar'
  const isArabic = language === 'ar';

  const [isHovered, setIsHovered] = useState(false);

  const styles = {
    wrapper: {
      width: '100%',
      boxSizing: 'border-box',
      background: 'linear-gradient(135deg, #021C35 0%, #06385A 100%)',
      padding: '60px 20px',
      direction: isArabic ? 'rtl' : 'ltr',
    },
    container: {
      maxWidth: '1000px',
      width: '100%',
      margin: '0 auto',
      textAlign: 'center',
      color: '#fff',
      fontFamily: '"Montserrat", sans-serif',
      padding: '0 15px',
      boxSizing: 'border-box',
    },
    text: {
      fontSize: isArabic ? '24px' : '28px',
      fontWeight: '500',
      marginBottom: '30px',
      lineHeight: '1.5',
    },
    button: {
      display: 'inline-block',
      padding: '14px 30px',
      fontSize: '16px',
      fontWeight: '600',
      color: isHovered ? '#fff' : '#021C35',
      backgroundColor: isHovered ? '#c6a664' : '#fff',
      border: 'none',
      borderRadius: '50px',
      textDecoration: 'none',
      boxShadow: '0 5px 15px rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      maxWidth: '100%',
    },
  };

  const content = {
    en: {
      message: 'Have you got any queries? We are here to help you.',
      button: 'Connect With Us',
    },
    ar: {
      message: 'عندك استفسار؟ نحن دايمًا حاضرين لمساعدتك.',
      button: 'تواصل ويانا',
    },
  };

  const { message, button } = content[language];

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.text}>{message}</div>
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {button}
        </a>
      </div>
    </div>
  );
};

export default JobAlertBanner;
