import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import BannerText from '../../Homepage/bannertext';
import { Link } from 'react-router-dom';

// Desktop and mobile banner image URLs
const desktopBanner = "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748770239/Partner_Withu_Banner_nokfwc.webp";
const mobileBanner = "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748770239/Partner_Withu_Banner_nokfwc.webp";

const HomeBanner = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const [bannerImage, setBannerImage] = useState(desktopBanner);

  useEffect(() => {
    const updateBanner = () => {
      const width = window.innerWidth;
      setBannerImage(width <= 768 ? mobileBanner : desktopBanner);
    };

    updateBanner(); // Initial check
    window.addEventListener('resize', updateBanner);
    return () => window.removeEventListener('resize', updateBanner);
  }, []);

  return (
    <div
      style={{
        zIndex: '5',
        width: '100%',
        top: 0,
        height: '70vh',
        overflow: 'hidden',
        direction: isArabic ? 'rtl' : 'ltr',
        fontFamily: 'Montserrat, sans-serif',
        position: 'relative', // UNCOMMENT this!
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
                    objectFit: 'cover',

          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 2,
        }}
      />

      {/* Centered Content */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          zIndex: 3,
          padding: '0 20px',
          maxWidth: '100%',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(20px, 5vw, 38px)',
            marginBottom: '16px',
            letterSpacing: '3.5px',
            fontWeight:"500",
          }}
        >
{isArabic ? 'كن شريكًا معنا' : 'PARTNER WITH US'}
</h1>
        
      
      </div>

    </div>
  );
};

export default HomeBanner;
