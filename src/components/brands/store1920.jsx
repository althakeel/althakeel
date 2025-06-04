import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BuyNow = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = isRTL
? ''
  : 'Store1920, An all-in-one online department store delivering unbeatable prices on everyday essentials—from home goods and electronics to fashion and beauty. With lightning-fast shipping and a user-friendly interface, store1920 makes budget-friendly shopping seamless for savvy shoppers. ';

  const shortText = fullText.split(' ').slice(0, 25).join(' ') + '...';
  const displayedText = isExpanded ? fullText : shortText;

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundColor: '#fff',
        padding: '40px 20px 0px',
        fontFamily: 'Montserrat, sans-serif',
        display: 'flex',
        justifyContent: 'center',
      }}
      id="armed"
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
            href="https://store1920.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              borderBottom: '2px solid #1a2b44',
              color: '#000',
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
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748764747/S1_v0vaq0.webp"
            alt="Store 1920"
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
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748438404/25_yvk1di.png"
            alt="Store 1920 Logo"
            style={{ width: '120px', marginBottom: '30px' }}
          />
          <h3 style={{ fontWeight: '600', marginBottom: '16px', color: '#000' }}>
          {isRTL ?'' : 'Shop More, Spend Less. '}
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#000',
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
              color: '#000',
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
