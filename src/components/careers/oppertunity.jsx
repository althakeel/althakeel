import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const EmiratiOpportunities = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
  }, [isArabic]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // keep fixed row, use order for mirroring
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBlock: '60px',
    paddingInline: '40px',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    textAlign: isArabic ? 'right' : 'left',
  };

  const imageContainerStyle = {
    flex: '1 1 500px',
    order: isArabic ? 2 : 1, // image second in RTL, first in LTR
  };

  const textContainerStyle = {
    flex: '1 1 500px',
    paddingInlineStart: isArabic ? undefined : '40px',
    paddingInlineEnd: isArabic ? '40px' : undefined,
    marginBlockEnd: '40px',
    order: isArabic ? 1 : 2, // text first in RTL, second in LTR
  };

  const headingStyle = {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 600,
    color: '#0B1F60',
    lineHeight: '1.2',
  };

  const paragraphStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#444',
    marginBlockStart: '20px',
  };

  const actionContainerStyle = {
    marginBlockStart: '40px',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    flexDirection: isArabic ? 'row-reverse' : 'row', // mirror button order
  };

  const actionTextStyle = {
    fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
    color: '#c6a664',
    fontWeight: 500,
    letterSpacing: '2px',
    background: 'none',
    border: 'none',
    padding: 0,
  };

  const circleButtonStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: '#FFF3EC',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginInlineStart: isArabic ? '15px' : undefined,
    marginInlineEnd: isArabic ? undefined : '15px',
    border: 'none',
  };

  const arrowStyle = {
    fontSize: '24px',
    color: '#c6a664',
    lineHeight: 1,
    transform: isArabic ? 'rotate(180deg)' : undefined, // flip arrow in RTL
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  return (
    <section style={containerStyle} dir={isArabic ? 'rtl' : 'ltr'}>
      <div style={imageContainerStyle}>
        <img
          src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774842/2_gaizou.webp"
          alt={isArabic ? 'فرص للمواطنين الإماراتيين' : 'Emirati Opportunities'}
          style={imageStyle}
        />
      </div>
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>
          {isArabic ? 'فرص للمواطنين الإماراتيين' : 'OPPORTUNITIES FOR EMIRATI NATIONALS'}
        </h1>
        <p style={paragraphStyle}>
          {isArabic
            ? 'اكتشف كيف تعمل مبادرات التوطين لدينا على تحقيق رؤية الإمارات 2021.'
            : "Explore how our Emiratisation initiatives are working towards bringing the UAE's Vision 2021 to fruition."}
        </p>
        <div style={actionContainerStyle}>
          <button style={actionTextStyle} onClick={handleContact}>
            {isArabic ? 'اتصل الآن' : 'CONTACT NOW'}
          </button>
          <button
            style={circleButtonStyle}
            onClick={handleContact}
            aria-label={isArabic ? 'اتصل الآن' : 'Contact Now'}
          >
            <span style={arrowStyle}>&#8250;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmiratiOpportunities;
