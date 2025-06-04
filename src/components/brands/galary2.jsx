import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Galary1 = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

 
  const images = [
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748766941/G3_d21l9q.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749033507/G6_unlxdq.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749033507/G7_wi2f8l.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749033508/G8_vaerfh.webp',
  ];

  const heading = isRTL
    ? 'يقوم الفريق الإبداعي في زارا هوم بتصميم كل مجموعة وفقًا لأحدث صيحات الموضة.'
    : 'Our collections are carefully designed to reflect the latest fashion trends.';


  const subtext = isRTL
    ? ' نؤمن إن كل صورة لها حكاية. استمتع بالمنظر. '
    : 'We believe every image tells a story. Enjoy the view.';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} style={{ backgroundColor: '#000', padding: '40px 20px' }}>
      {/* Top Heading Section */}
      <div
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          alignItems: 'center', // ✅ horizontally center content
          textAlign: 'center',           color: '#fff',
          marginBottom: '40px',
          fontFamily:'Montserrat, sans-serif',
        }}
      >
        <h2 style={{ fontSize: '25px', marginBottom: '16px', fontWeight: 500 ,fontFamily:'Montserrat, sans-serif',}}>
          {heading}
        </h2>
        <p style={{ fontSize: '16px',fontFamily:'Montserrat, sans-serif', }}>
          {subtext}
        </p>
      </div>

      {/* Image Gallery Section */}
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <div style={{ ...styles.grid, direction: isRTL ? 'rtl' : 'ltr' }}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                style={styles.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingBottom: '60px',
    fontFamily:'Montserrat, sans-serif',
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
    maxHeight: '500px',
    objectFit: 'cover',
    borderRadius: '0px',
  },
};

export default Galary1;
