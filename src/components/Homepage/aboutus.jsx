import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import './about.css';

const AboutUs = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const navigate = useNavigate();

  const arabic = {
    tag: 'معلومات عنا',
    heading: 'دعونا نبني مستقبلنا معًا',
    paragraph:
      'لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم النص القياسي لهذه الصناعة منذ القرن الخامس عشر.',
    button: 'اكتشف المزيد',
  };

  return (
    <div className={`about-container ${isArabic ? 'ar' : 'en'}`}>
      <div className="video-wrapper">
        <video
          src="https://res.cloudinary.com/dm8z5zz5s/video/upload/v1749028907/Home_Page_Animation_Compressed_lfu4vx.mp4"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="about-content">
        <p className="about-tag">{isArabic ? arabic.tag : 'About Us'}</p>
        <h1 className="about-heading">
          {isArabic ? arabic.heading : 'The House of Brands – Al Thakeel'}
        </h1>
        <p className="about-text">
          {isArabic
            ? arabic.paragraph
            : 'Rooted in vision, built on innovation, and driven by excellence, Al Thakeel stands as a dynamic brand curator, bringing together a diverse portfolio of premium labels that shape trends and influence lifestyles. Our house unites creativity with commerce, tradition with modernity, and ambition with authenticity..'}
        </p>
        <button
          onClick={() => navigate('/about')}
          className="about-button"
        >
          {isArabic ? arabic.button : 'Find Out More'}
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
