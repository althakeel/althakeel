import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BuyNow = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = isRTL
    ? 'فيلور باريس، أتيليه فاخر يقدم منتجات جلدية مصنوعة يدويًا بنسبة 100٪ — مصنوعة بخبرة في باريس باستخدام جلود كاملة الحبيبات لضمان الأناقة الدائمة والمتانة. كل قطعة يتم خياطتها وتشطيبها بدقة من قبل حرفيين مهرة لضمان جودة لا مثيل لها.'
    : 'Veloreparis is a luxury atelier offering 100% handmade leather goods—expertly crafted in Paris using premium full-grain hides to deliver timeless style and durability. Each piece is meticulously stitched and finished by master artisans, ensuring unparalleled quality from wardrobe staples to statement accessories.';

  const shortText = fullText.split(' ').slice(0, 25).join(' ') + '...';
  const displayedText = isExpanded ? fullText : shortText;

  return (
    <div
      id="vellore"
      dir={isRTL ? 'rtl' : 'ltr'}
      style={{
        backgroundColor: '#fff',
        padding: '40px 20px 0',
        fontFamily: 'Montserrat, sans-serif',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          width: '100%',
          flexDirection: isRTL ? 'row-reverse' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* CTA Button */}
        <div
          style={{
            flex: '1 1 150px',
            padding: '20px',
            textAlign: isRTL ? 'right' : 'left',
            order: isRTL ? 0 : 2,
          }}
        >
          <a
            href="https://velloreparis.com"
            style={{
              display: 'inline-block',
              textDecoration: 'none',
              borderBottom: '2px solid #1a2b44',
              color: '#1a2b44',
              fontWeight: 500,
              fontSize: '15px',
            }}
          >
            {isRTL ? 'اشتري الآن' : 'Buy Now'}
          </a>
        </div>

        {/* Product Image */}
        <div
          style={{
            flex: '1 1 400px',
            maxWidth: '500px',
            padding: '20px',
            order: 1,
          }}
        >
          <img
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748766982/V1_yrnmez.webp"
            alt={isRTL ? 'نموذج عرض أزياء' : 'Fashion Model'}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: 0,
            }}
          />
        </div>

        {/* Brand Description */}
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
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749030320/Logo-02_pv8f0p.png"
            alt="Vellore Paris Logo"
            style={{ width: '120px', marginBottom: '5px' }}
          />
          <h3 style={{ fontWeight: 600, marginBottom: '16px' }}>
            {isRTL ? 'حيث تلتقي الحِرَفية بالأناقة' : 'Where Craftsmanship Meets Elegance.'}
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
            {displayedText}
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded((prev) => !prev);
            }}
            style={{
              marginTop: '20px',
              display: 'inline-block',
              textDecoration: 'none',
              borderBottom: '2px solid #1a2b44',
              color: '#1a2b44',
              fontWeight: 500,
              fontSize: '15px',
            }}
          >
            {isExpanded
              ? isRTL ? 'إظهار أقل' : 'Show Less'
              : isRTL ? 'اقرأ المزيد' : 'Read More'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
