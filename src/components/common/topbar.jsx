import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const containerStyle = {
    backgroundColor: '#141414',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    direction: isRTL ? 'rtl' : 'ltr',
    position: 'relative',  // required for zIndex
    zIndex: 15,
  };
  const socialStyle = {
    display: 'flex',
    gap: '15px',
    fontSize: '16px',
  };

  const responsiveStyle = {
    ...containerStyle,
    flexDirection: 'row',
    flexWrap: 'wrap',
  };

  return (
    <div style={responsiveStyle}>
      <div style={{ height: '1px' }} /> {/* Empty left space to balance layout */}
      <div style={socialStyle}>
        <a href="https://www.facebook.com/profile.php?id=61576855021977" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://x.com/ThakeelAl" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/al_thakeel/" style={{ color: 'white' }} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>
  );
};

export default TopBar;
