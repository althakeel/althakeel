import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const JobAlertBanner = () => {
  const { language } = useLanguage(); // 'en' or 'ar'

  const isArabic = language === 'ar';

  const wrapperStyle = {
    width: '100%',
    background: 'linear-gradient(135deg, #021C35 0%, #06385A 100%)',
    padding: '60px 20px',
    direction: isArabic ? 'rtl' : 'ltr',
  };

  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#fff',
    fontFamily: '"Montserrat", sans-serif',
    padding: '0 15px',
  };

  const textStyle = {
    fontSize: isArabic ? '26px' : '30px',
    fontWeight: '500',
    marginBottom: '35px',
    lineHeight: '1.4',
  };

  const buttonStyle = {
    padding: '16px 36px',
    fontSize: '18px',
    color: '#021C35',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    boxShadow: '0 5px 15px rgba(255, 255, 255, 0.2)',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    cursor: 'pointer',
    display: 'inline-block',
  };

  const buttonHoverStyle = {
    backgroundColor: '#c6a664',
    color: '#fff',
  };

  const handleMouseOver = e => Object.assign(e.target.style, buttonHoverStyle);
  const handleMouseOut = e => Object.assign(e.target.style, buttonStyle);

  // Text content based on selected language
  const content = {
    en: {
      message: 'Interested in partnering with Al Thakeel?',
      button: 'Connect With Us',
    },
    ar: {
      message: 'هل أنت مهتم بالشراكة مع الثقيل؟',
      button: 'تواصل معنا',
    },
  };

  const { message, button } = content[language];

  return (
    <div style={wrapperStyle}>
      <div style={containerStyle}>
        <div style={textStyle}>{message}</div>
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {button}
        </a>
      </div>
    </div>
  );
};

export default JobAlertBanner;
