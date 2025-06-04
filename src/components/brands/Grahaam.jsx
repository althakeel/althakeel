import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BuyNow = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = isRTL
    ? 'غرام، حل ذكي صديق للبيئة للمنزل، يدمج التقنيات الموفرة للطاقة مع مواد مستدامة، ويُمكّن السكان من تقليل بصمتهم الكربونية من غير ما يضحّون بالراحة. من حساسات تعمل بالطاقة الشمسية إلى تجهيزات ذكية قابلة للتحلل، منتجات غرام تجمع بين الابتكار والحفاظ على البيئة لأسلوب حياة أخضر ومريح في نفس الوقت.'
    : 'Gharaam, An eco-friendly smart-home solution that seamlessly integrate energy-saving technology with sustainable materials, empowering homeowners to reduce their carbon footprint without compromising comfort. From solar-powered sensors to biodegradable smart fixtures, Gharaam products blend innovation and environmental stewardship for a greener living experience.';

  const shortText = fullText.split(' ').slice(0, 25).join(' ') + '...';
  const displayedText = isExpanded ? fullText : shortText;

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundColor: '#000',
        padding: '40px 20px 0px',
        fontFamily: 'Montserrat, sans-serif',
        display: 'flex',
        justifyContent: 'center',
      }}
      id="grahaam"
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1200px',
          fontFamily: 'Montserrat, sans-serif',
          width: '100%',
          flexDirection: isRTL ? 'row-reverse' : 'row',
        }}
      >
        {/* Buy Now Button */}
        <div
          style={{
            flex: '1 1 150px',
            padding: '20px',
            fontFamily: 'Montserrat, sans-serif',
            textAlign: isRTL ? 'right' : 'left',
            order: isRTL ? 0 : 2,
          }}
        >
          <a
            href="https://grahaam.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              borderBottom: '2px solid #1a2b44',
              color: '#fff',
              fontWeight: '500',
              fontSize: '15px',
            }}
          >
            {isRTL ? 'اشترِ الآن' : 'Buy Now'}
          </a>
        </div>

        {/* Center Image */}
        <div
          style={{
            flex: '1 1 400px',
            maxWidth: '500px',
            padding: '20px',
            order: 1,
          }}
        >
          <img
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748766904/G1_rrhjk7.webp"
            alt="Grahaam"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: '0',
            }}
          />
        </div>

        {/* Brand Text */}
        <div
          style={{
            flex: '1 1 300px',
            maxWidth: '400px',
            padding: '20px',
            textAlign: isRTL ? 'right' : 'left',
            order: isRTL ? 2 : 0,
          }}
        >
          <img
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749030321/24_aaqxnn.png"
            alt="Grahaam Logo"
            style={{ width: '120px', marginBottom: '30px' }}
          />
          <h3 style={{ fontWeight: '600', marginBottom: '16px', color: '#fff' }}>
            {isRTL ? 'نرتقي بحياتك' : 'Elevating Lives.'}
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#fff',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {displayedText}
          </p>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: '20px',
              display: 'inline-block',
              textDecoration: 'none',
              borderBottom: '2px solid #1a2b44',
              color: '#fff',
              fontWeight: '500',
              fontSize: '15px',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {isExpanded
              ? isRTL
                ? 'إظهار أقل'
                : 'Show Less'
              : isRTL
              ? 'اقرأ المزيد'
              : 'Read More'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
