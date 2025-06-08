import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Gallery = () => {
  const { direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Images data
  const images = isRTL
    ? [
        {
          label: 'اعمل معنا',
          text: 'اكتشف فرص العمل المثيرة وانضم إلى فريقنا.',
          src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774846/3_zrl3lq.webp',
        },
        {
          label: 'التوطين',
          text: 'ندعم المبادرات الوطنية للتوظيف في المنطقة.',
          src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774871/10_drhon5.webp',
        },
        {
          label: 'عملية التقديم',
          text: 'تعرف على كيفية التقديم وما يمكن توقعه عند الانضمام إلينا.',
          src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774866/9_dw2zxa.webp',
        },
      ]
    : [
        {
          label: 'Work with us',
          text: 'Explore exciting career opportunities and join our team.',
          src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774846/3_zrl3lq.webp',
        },
        {
          label: 'Nationalisation',
          text: 'We support national hiring initiatives in the region.',
          src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774871/10_drhon5.webp',
        },
        {
          label: 'Our application process',
          text: 'Learn how to apply and what to expect when you join us.',
          src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774866/9_dw2zxa.webp',
        },
      ];

  // Shared fontFamily for Arabic vs English
  const fontFamily = isRTL ? "'Cairo', 'Arial', sans-serif" : "'Arial', sans-serif";

  // Styles

  const mainContainer = {
    display: 'flex',
    gap: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 1200,
    margin: '50px auto',
    flexDirection: isRTL ? 'row-reverse' : 'row',
    direction: isRTL ? 'rtl' : 'ltr',
    fontFamily,
  };

  const leftColumn = {
    flex: 1,
    position: 'relative',
    height: 520,
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: isRTL ? '0 50px 0 50px' : '50px 0 50px 0',
  };

  const rightColumn = {
    flex: 1,
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gap: 20,
    height: 520,
    direction: isRTL ? 'rtl' : 'ltr',
  };

  const rightImageContainer = {
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    borderRadius: isRTL ? '50px 0 50px 0' : '0 50px 0 50px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s ease',
  };

  const imageZoomed = {
    ...imageStyle,
    transform: 'scale(1.05)',
  };

  const overlayBase = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 40, 80, 0.6)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
    fontFamily,
  };

  const overlayVisible = {
    ...overlayBase,
    opacity: 1,
    transform: 'translateY(0)',
  };

  const labelStyle = {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    direction: isRTL ? 'rtl' : 'ltr',
    textAlign: 'center',
    fontFamily,
  };

  const textStyle = {
    fontSize: 14,
    lineHeight: 1.5,
    maxWidth: 300,
    direction: isRTL ? 'rtl' : 'ltr',
    textAlign: 'center',
    fontFamily,
  };

  return (
    <div style={mainContainer}>
      {/* Left Column */}
      <div
        style={leftColumn}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <img
          src={images[0].src}
          alt={images[0].label}
          style={hoveredIndex === 0 ? imageZoomed : imageStyle}
          lang={isRTL ? 'ar' : 'en'}
        />
        <div style={hoveredIndex === 0 ? overlayVisible : overlayBase}>
          <div style={labelStyle} lang={isRTL ? 'ar' : 'en'}>
            {images[0].label}
          </div>
          <div style={textStyle} lang={isRTL ? 'ar' : 'en'}>
            {images[0].text}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div style={rightColumn}>
        {[1, 2].map((i) => (
          <div
            key={i}
            style={rightImageContainer}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={images[i].src}
              alt={images[i].label}
              style={hoveredIndex === i ? imageZoomed : imageStyle}
              lang={isRTL ? 'ar' : 'en'}
            />
            <div style={hoveredIndex === i ? overlayVisible : overlayBase}>
              <div style={labelStyle} lang={isRTL ? 'ar' : 'en'}>
                {images[i].label}
              </div>
              <div style={textStyle} lang={isRTL ? 'ar' : 'en'}>
                {images[i].text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
