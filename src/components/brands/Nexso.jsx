import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BuyNow = () => {
  const { language } = useLanguage(); // 'en' or 'ar'
  const isRTL = language === 'ar';
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = isRTL
    ? 'نكْسو هي علامة تجارية متعددة الفئات تقدم منتجات عالية الجودة بأسعار مناسبة في مجالات المنزل، ونمط الحياة، والعناية الشخصية، والمستلزمات اليومية. تم تصميم منتجات نكْسو للارتقاء بتجربة المعيشة اليومية دون التنازل عن الجودة أو التصميم. جميع المجموعات مختارة بعناية لتوازن بين الأناقة، والمتانة، والقيمة لتلبية تطلعات المستهلك الإماراتي الباحث عن التميز بسعر معقول.'
    : 'NEXSO, A curated multi-category brand offering premium-quality yet affordable products across home, lifestyle, personal care & day in-out categories—designed to elevate everyday living without compromise. Each collection is carefully selected to balance style, durability, and value, ensuring customers in the UAE enjoy both excellence and affordability.';

  const shortText = fullText.split(' ').slice(0, 25).join(' ') + '...';
  const displayedText = isExpanded ? fullText : shortText;

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundColor: '#fff',
        padding: '40px 20px 0px',
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center',
      }}
      id='nexso'
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1200px',
          width: '100%',
          flexDirection: isRTL ? 'row-reverse' : 'row',
        }}
      >
        {/* Buy Now Button */}
        <div
          style={{
            flex: '1 1 150px',
            padding: '20px',
            textAlign: isRTL ? 'right' : 'left',
            order: isRTL ? 0 : 2,
          }}
        >
          <a
            href="http://www.nexso.com"
            target='blank'
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              borderBottom: '2px solid #1a2b44',
              color: '#1a2b44',
              fontWeight: '500',
              fontSize: '15px',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {isRTL ? 'اشتري الآن' : 'Buy Now'}
          </a>
        </div>

        {/* Middle Image */}
        <div
          style={{
            flex: '1 1 400px',
            maxWidth: '500px',
            padding: '20px',
            order: 1,
          }}
        >
          <img
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748760530/2_fwoloa.webp"
            alt="Nexso"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              fontFamily: 'Montserrat, sans-serif',
              borderRadius: '0',
            }}
          />
        </div>

        {/* Brand Content */}
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
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748769739/nexso_logo_green_and_black_plpbl7.png"
            alt="Nexso Logo"
            style={{ width: '120px', marginBottom: '5px' }}
          />
          <h3 style={{ fontWeight: '600', marginBottom: '16px' }}>
            {isRTL ? 'أسلوب حياة راقٍ بلمسة إماراتية' : 'Premium Living, Accessible Style.'}
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {displayedText}
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            style={{
              marginTop: '20px',
              display: 'inline-block',
              textDecoration: 'none',
              borderBottom: '2px solid #1a2b44',
              color: '#1a2b44',
              fontWeight: '500',
              fontSize: '15px',
              fontFamily: 'Montserrat, sans-serif',
              cursor: 'pointer',
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
