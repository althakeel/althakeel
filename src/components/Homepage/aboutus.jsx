import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const navigate = useNavigate();

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 5%',
      minHeight: '40vh',
      // maxHeight:"400px", 
      background: '#fafafa',
      direction: isArabic ? 'rtl' : 'ltr',
      textAlign: isArabic ? 'right' : 'left',
      gap: '60px',
    },
    videoWrapper: {
      flex: '1 1 500px',
      borderRadius: '16px',
      overflow: 'hidden',
      minWidth: '300px',
      maxWidth: '700px',
      height: '100%',
    },
    video: {
      width: '100%',
      height: '100%',
      maxHeight: '500px', 
      objectFit: 'cover',
      borderRadius: '16px',
    },
    content: {
      flex: '1 1 400px',
      maxWidth: '650px',
 
      fontFamily:'Montserrat, sans-serif',
    },
    tag: {
      fontWeight: 'bold',
      fontSize: '17px',
      color: '#a08649',
      marginBottom: '10px',
      fontFamily:'Montserrat, sans-serif',

    },
    heading: {
      fontSize: '35px',
      fontWeight: '500',
      color: '#111',
      marginBottom: '15px',
      lineHeight: '1.2',
      fontFamily:'Montserrat, sans-serif',
    },
    text: {
      fontSize: '17px',
      color: '#444',
      lineHeight: '1.5',
      marginBottom: '25px',
    },
    button: {
      padding: '16px 32px',
      fontSize: '17px',
      backgroundColor: '#b79e62',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
  };

  const arabic = {
    tag: 'معلومات عنا',
    heading: 'دعونا نبني مستقبلنا معًا',
    paragraph:
      'لوريم إيبسوم هو ببساطة نص شكلي يستخدم في صناعة الطباعة والتنضيد. كان لوريم إيبسوم النص القياسي لهذه الصناعة منذ القرن الخامس عشر.',
    button: 'اكتشف المزيد',
  };

  return (
    <div style={styles.container}>
      <div style={styles.videoWrapper}>
        <video
          src="https://res.cloudinary.com/dm8z5zz5s/video/upload/v1749028907/Home_Page_Animation_Compressed_lfu4vx.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={styles.video}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={styles.content}>
        <p style={styles.tag}>{isArabic ? arabic.tag : 'About Us'}</p>
        <h1 style={styles.heading}>
          {isArabic ? arabic.heading : " The House of Brands – Al Thakeel"}
        </h1>
        <p style={styles.text}>
          {isArabic
            ? arabic.paragraph
            : "Rooted in vision, built on innovation, and driven by excellence, Al Thakeel stands as a dynamic brand curator, bringing together a diverse portfolio of premium labels that shape trends and influence lifestyles. Our house unites creativity with commerce, tradition with modernity, and ambition with authenticity.."}
        </p>
        <button
         onClick={() => navigate('/about')} 
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#8C7540')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#a08649')}
        >
          {isArabic ? arabic.button : 'Find Out More'}
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
