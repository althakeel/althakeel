import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Galary1 = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';


  const images = [
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760531/11_hrjrjd.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760531/9_dya0vb.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760531/10_ik8yvy.webp',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760531/6_bftrhq.webp',
  ];

  const heading = isRTL
    ? 'يتم تصميم مجموعاتنا بعناية لتواكب أحدث صيحات الموضة.'
    : 'Our collections are carefully designed to reflect the latest fashion trends.';

  const subtext = isRTL
    ? 'نحن نؤمن بأن كل صورة تروي قصة. استمتع بالعرض.'
    : 'We believe every image tells a story. Enjoy the view.';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} style={styles.wrapper}>
      <div style={styles.container}>
        {/* Top Heading Content */}
        <div style={{ 
          marginBottom: '40px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center' ,
          fontFamily:'Montserrat, sans-serif',
        }}>
          <h2 style={{ fontSize: '25px', marginBottom: '10px', fontWeight: 500, color: '#000',fontFamily:'Montserrat, sans-serif', }}>
            {heading}
          </h2>
          <p style={{ fontSize: '17px', color: '#444',fontFamily:'Montserrat, sans-serif', }}>
            {subtext}
          </p>
        </div>

        {/* Gallery Grid */}
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
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    backgroundColor: '#fff',
    padding: '20px 20px 80px 20px',
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
