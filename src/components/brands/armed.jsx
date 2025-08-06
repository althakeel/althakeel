import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BuyNow = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = isRTL
  ? 'آرمِد، علامة تجارية متميزة لمنتجات التجميل والعناية الشخصية للرجال، تجمع بين القوة والأناقة لتقديم حلول عناية راقية تمنح كل رجل الثقة ليبدو ويشعر بأفضل حالاته. منتجاتنا تمزج بين التركيبات المتطورة والتصميم الجريء والواثق—مصممة لمن لا يرضون بأقل من التميز.'
  : 'ARMED, A premium men’s beauty and personal care brand, combining strength and sophistication to deliver premium grooming solutions that empower every man to look and feel his best. Our products blend cutting-edge formulations with bold, confident design—crafted for those who settle for nothing less than excellence.';

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
            href="https://armed.com"
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
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748764715/A1_bsqias.webp"
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
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1754472844/Logo_White_1_poejuj.png"
            alt="Grahaam Logo"
            style={{ width: '120px', marginBottom: '30px' }}
          />
          <h3 style={{ fontWeight: '600', marginBottom: '16px', color: '#fff' }}>
          {isRTL ? 'اصنع إرثك' : 'Forge Your Legacy'}
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
