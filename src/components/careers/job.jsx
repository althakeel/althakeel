import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const JobAlertBanner = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const containerStyle = {
    backgroundColor: '#021C35',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#fff',
    fontFamily: '"Segoe UI", sans-serif',
    maxWidth: '100%',
    margin: '20px auto',
    direction: isArabic ? 'rtl' : 'ltr',
  };

  const textStyle = {
    fontSize: '24px',
    fontWeight: '500',
    marginBottom: '30px',
    textAlign: isArabic ? 'center' : 'center',
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '18px',
    color: '#26578D',
    backgroundColor: '#fff',
    border: '2px solid #fff',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'inline-block',
  };

  const textContent = {
    en: 'Would you like to be notified about new job opportunities with Al Thakeel?',
    ar: 'هل ترغب في تلقي إشعارات عن فرص العمل الجديدة مع الثقيل؟',
  };

  const buttonText = {
    en: 'Set your job alerts here',
    ar: 'اضبط تنبيهات الوظائف هنا',
  };

  return (
    <div style={containerStyle} role="region" aria-label={isArabic ? 'تنبيه الوظائف' : 'Job Alert'}>
      <div style={textStyle}>{textContent[language] || textContent.en}</div>
      <a
        href="https://www.linkedin.com/company/al-thakeel/jobs/"
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        aria-label={buttonText[language] || buttonText.en}
      >
        {buttonText[language] || buttonText.en}
      </a>
    </div>
  );
};

export default JobAlertBanner;
