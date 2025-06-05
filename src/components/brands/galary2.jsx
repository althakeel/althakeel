import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Galary1 = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  const images = [
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748766941/G3_d21l9q.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749033507/G6_unlxdq.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749033507/G7_wi2f8l.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749033508/G8_vaerfh.webp',
  ];

  const mobileImage = 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749129080/M3_n9uolm.webp';

  const heading = isRTL
    ? 'يقوم الفريق الإبداعي في زارا هوم بتصميم كل مجموعة وفقًا لأحدث صيحات الموضة.'
    : 'Our collections are carefully designed to reflect the latest fashion trends.';

  const subtext = isRTL
    ? ' نؤمن إن كل صورة لها حكاية. استمتع بالمنظر. '
    : 'We believe every image tells a story. Enjoy the view.';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} style={styles.section}>
      {/* Heading */}
      <div style={styles.heading}>
        <h2 style={styles.title}>{heading}</h2>
        <p style={styles.subtext}>{subtext}</p>
      </div>

      {/* Image Gallery */}
      <div style={styles.wrapper}>
        <div style={styles.container}>
          {isMobile ? (
            <img
              src={mobileImage}
              alt="Mobile Gallery"
              style={{ ...styles.image, maxHeight: '500px' }}
            />
          ) : (
            <div style={{ ...styles.grid, direction: isRTL ? 'rtl' : 'ltr' }}>
              {images.map((src, index) => (
                <img key={index} src={src} alt={`Gallery ${index + 1}`} style={styles.image} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  section: {
    backgroundColor: '#000',
    padding: '40px 20px',
    fontFamily: 'Montserrat, sans-serif',
  },
  heading: {
    maxWidth: '1000px',
    margin: '0 auto 40px',
    textAlign: 'center',
    color: '#fff',
  },
  title: {
    fontSize: '25px',
    marginBottom: '16px',
    fontWeight: 500,
  },
  subtext: {
    fontSize: '16px',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingBottom: '60px',
  },
  container: {
    maxWidth: '1000px',
    width: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '0px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '0px',
  },
};

export default Galary1;
