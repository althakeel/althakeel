import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import BannerText from '../../Homepage/bannertext';
import { Link } from 'react-router-dom';

const videoSources = [
  "https://res.cloudinary.com/dm8z5zz5s/video/upload/v1749061794/8387356-uhd_4096_2160_25fps_dkhril_owxumi.mp4",
  "https://res.cloudinary.com/dm8z5zz5s/video/upload/v1749061790/6648422-uhd_4096_2160_25fps_hdh96e_wqiqhi.mp4",
  "https://res.cloudinary.com/dm8z5zz5s/video/upload/v1749061798/4750039-hd_1920_1080_30fps_wbadsu_kqqrjn.mp4"
];

const HomeBanner = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 1440) setCurrentIndex(0);
    else if (width > 768) setCurrentIndex(1);
    else setCurrentIndex(2);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? videoSources.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === videoSources.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{
      zIndex: '5',
      width: '100%',
      top: 0,
      // height: '66vh',
      overflow: 'hidden',
      direction: isArabic ? 'rtl' : 'ltr',
      fontFamily: 'Montserrat, sans-serif',
      paddingTop: '80px',
   height: '66vh',
maxHeight: '1000px',
minHeight: '400px',
    }}>
      {/* Background Video */}
      <video
        key={videoSources[currentIndex]}
        src={videoSources[currentIndex]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 2
      }} />

      {/* Centered Content */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: '#fff',
        zIndex: 3,
        padding: '0 20px',
        maxWidth: '100%',
      }}>
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 54px)',
          marginBottom: '16px',
          fontFamily: 'Montserrat, sans-serif',
          letterSpacing: '3.5px',

        }}>
          {isArabic ? 'بيت العلامات التجارية' : 'THE HOUSE OF BRANDS'}
        </h1>
        <p style={{
          fontSize: 'clamp(16px, 2vw, 24px)',
          marginBottom: '24px',
          fontFamily: 'Montserrat, sans-serif',

        }}>
          {isArabic ? 'بوابتك إلى العلامات التجارية الفاخرة' : 'Your gateway to premium brands'}
        </p>
        <Link to="/about">
          <button style={{
            fontSize: '16px',
            padding: '12px 28px',
            backgroundColor: '#C6A15B',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}>
            {isArabic ? 'اكتشف المزيد' : 'Explore More'}
          </button>
        </Link>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous video"
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          zIndex: 4,
          fontSize: '19px',
          color: '#fff',
          background: 'rgba(0, 0, 0, 0.7)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          padding: '10px 15px',
          lineHeight: 1,
        }}
      >
        ⟨
      </button>
      <button
        onClick={handleNext}
        aria-label="Next video"
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          zIndex: 4,
          fontSize: '19px',
          color: '#fff',
          background: 'rgba(0, 0, 0, 0.7)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          padding: '10px 15px',
          lineHeight: 1,
        }}
      >
        ⟩
      </button>

      {/* BannerText Section */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'Montserrat, sans-serif',
      }}>
        <BannerText />
      </div>
    </div>
  );
};

export default HomeBanner;
