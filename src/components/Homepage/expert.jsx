import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';


const ImageGrid = () => {
  const { language } = useLanguage();
  const brandRoutes = ['/brands/#armed', '/brands/#vellore', '/brands/#nexso', '/brands/#gharaam', '/brands/#store1920'];


  const containerStyle = {
    maxWidth: '1200px',
    margin: '40px auto',
    fontFamily: 'Montserrat, sans-serif',
    padding: '0 15px',
    fontWeight:'normal',
    fontFamily: 'Montserrat, sans-serif',

  };

  const boxStyle = {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '15px',
    cursor: 'pointer',
    fontFamily: 'Montserrat, sans-serif',

  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    pointerEvents: 'none',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',

  };

  const backgroundImages = [
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748437011/8_ykoe4v.jpg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748437012/9_crfdfz.jpg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748436737/6_qotxdq.jpg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748437016/7_iy2ehe.jpg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748437013/10_h7fzbo.jpg',
  ];

  const hoverLogos = [
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748438403/26_kjecc7.png',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748422261/23_qnvw4s.png',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748436936/nexso_logo_green_and_white_otlfte.png',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748438405/28_nai4xh.png',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748438404/25_yvk1di.png',
  ];

  const logos = [...hoverLogos];

  const titles = language === 'ar'
    ? ['خبرتنا', 'إبداعنا', 'مهاراتنا', 'شركاؤنا', 'نجاحاتنا']
    : ['Nexso', 'Our Creativity', 'Our Skills', 'Our Partners', 'Our Success'];

  const subtitles = language === 'ar'
    ? [
        '',
        '',
        '',
        '',
        '',
      ]
    : [
        'Forge Your Legacy',
        'Where Craftsmanship Meets Elegance. ',
        'Premium Living, Accessible Style.',
        'Elevating Lives.',
        'Shop More, Spend Less. ',
      ];

  const descriptions = language === 'ar'
  ? [
    'آرمِد – علامة راقية للعناية الشخصية والرجالية، تجمع بين القوة والأناقة لتقدّم حلول تجميل فاخرة تعزّز من ثقة كل رجل في مظهره وأسلوبه.',
    'ﭬيلور باريس – مشغل فاخر يقدم منتجات جلدية مصنوعة يدويًا 100% في باريس، باستخدام أفخر أنواع الجلود الطبيعية، بتصميم راقٍ يدوم لأعوام.',
    'نيكسو – علامة متعددة الفئات تقدّم منتجات مميزة وعالية الجودة بأسعار مناسبة، تشمل مستلزمات المنزل، وأسلوب الحياة، والعناية الشخصية، لتضيف لمسة رفاهية على روتينك اليومي.',
    'غرام – حل ذكي وصديق للبيئة للمنزل العصري، يدمج بين التكنولوجيا الموفّرة للطاقة والمواد المستدامة، ليساعدك على تقليل استهلاك الطاقة وأثر الكربون.',
    'ستور 1920 – متجر إلكتروني متكامل بأسعار منافسة على جميع الاحتياجات اليومية، من الإلكترونيات إلى مستلزمات المنزل والموضة والجمال، مع توصيل سريع وسهل في جميع أنحاء الإمارات.',
  ]
    : [
        'ARMED, A premium men’s beauty and personal care brand, combining strength and sophistication to deliver premium grooming solutions that empower every man to look and feel his best...',
        'Veloreparis, A luxury atelier offering 100% handmade leather goods—expertly crafted in Paris using premium full-grain hides to deliver timeless style and durability.  Each piece is meticulously ...',
        'NEXSO, A curated multi-category brand offering premium-quality yet affordable products across home, lifestyle, personal care & day in-out categories—designed to elevate everyday living without compromise...',
        'Gharaam, An eco-friendly smart-home solution that seamlessly integrate energy-saving technology with sustainable materials, empowering homeowners to reduce their carbon footprint without...',
        'Store1920, An all-in-one online department store delivering unbeatable prices on everyday essentials—from home goods and electronics to fashion and beauty. With lightning-fast shipping and ...',
      ];

  const buttonTexts = Array(5).fill(language === 'ar' ? 'اعرف المزيد' : 'Read More');

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '8px', color: '#000',fontWeight:'500',fontSize:'35px',fontFamily:'Montserrat, sans-serif',
 }}>
        {language === 'ar' ? 'خبراتنا' : 'Our Expertise'}
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666', fontSize: '17px',fontWeight:'500',fontFamily:'Montserrat, sans-serif',
 }}>
        {language === 'ar'
          ? 'اكتشف نقاط القوة والمهارات وراء علامتنا التجارية الناجحة.'
          : 'Discover the strengths and skills behind our successful brands.'}
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flexWrap: 'wrap',
          height: isMobile ? 'auto' : '600px',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '10px',
            width: isMobile ? '100%' : 'auto',
          }}
        >
          {[0, 1].map((i) => (
            <div key={i} style={{ height: isMobile ? '300px' : '50%' }}>
              <HoverBox
                imageSrc={backgroundImages[i]}
                logoSrc={logos[i]}
                hoverLogoSrc={hoverLogos[i]}
                title={titles[i]}
                subtitle={subtitles[i]}
                description={descriptions[i]}
                buttonText={buttonTexts[i]}
                buttonDirection="left"
                boxStyle={boxStyle}
                overlayStyle={overlayStyle}
                redirectTo={brandRoutes[i]}

              />
            </div>
          ))}
        </div>

        <div style={{ flex: 2, width: isMobile ? '100%' : 'auto', height: isMobile ? '300px' : '100%' }}>
          <HoverBox
            imageSrc={backgroundImages[2]}
            logoSrc={logos[2]}
            hoverLogoSrc={hoverLogos[2]}
            title={titles[2]}
            subtitle={subtitles[2]}
            description={descriptions[2]}
            buttonText={buttonTexts[2]}
            buttonDirection="center"
            boxStyle={boxStyle}
            overlayStyle={overlayStyle}
            redirectTo={brandRoutes[2]}
          />
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: '10px',
            width: isMobile ? '100%' : 'auto',
          }}
        >
          {[3, 4].map((i) => (
            <div key={i} style={{ height: isMobile ? '300px' : '50%' }}>
              <HoverBox
                imageSrc={backgroundImages[i]}
                logoSrc={logos[i]}
                hoverLogoSrc={hoverLogos[i]}
                title={titles[i]}
                subtitle={subtitles[i]}
                description={descriptions[i]}
                buttonText={buttonTexts[i]}
                buttonDirection="right"
                boxStyle={boxStyle}
                overlayStyle={overlayStyle}
                redirectTo={brandRoutes[2]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HoverBox = ({
  imageSrc,
  logoSrc,
  hoverLogoSrc,
  title,
  subtitle,
  description,
  buttonText,
  buttonDirection,
  boxStyle,
  overlayStyle,
  redirectTo, 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const getButtonTransform = () => {
    switch (buttonDirection) {
      case 'left':
        return isHovered ? 'translateX(0)' : 'translateX(-100%)';
      case 'right':
        return isHovered ? 'translateX(0)' : 'translateX(100%)';
      case 'center':
      default:
        return isHovered ? 'translateY(0)' : 'translateY(100%)';
    }
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imageSrc}
        alt="Background"
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          transition: 'opacity 0.4s ease',
        }}
      />

      <img
        src={logoSrc}
        alt="Logo"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: buttonDirection === 'center' ? '280px' : '150px',
          height: 'auto',
          transition: 'opacity 0.4s ease',
          opacity: isHovered ? 0 : 1,
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
          transform: isHovered ? 'translateX(250%)' : 'translateX(0)',
          transition: 'transform .8s ease-in-out',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {isHovered && (
        <div
          style={{
            ...overlayStyle,
            opacity: 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: 'auto',
            zIndex: 3,
          }}
        >
          <img
            src={hoverLogoSrc}
            alt="Hover Logo"
            style={{
              width: buttonDirection === 'center' ? '250px' : '70px',
              height: 'auto',
              marginBottom: '5px',
              transform: 'scale(1)',
              transition: 'all 0.4s ease',
             
            }}
          />
          <p style={{ color: '#fff', marginBottom: '5px', fontSize: '15px',fontFamily:'Montserrat, sans-serif' }}>{subtitle}</p>
          <p style={{ color: '#fff', marginBottom: '10px', fontSize: '13px' , fontFamily:'Montserrat, sans-serif'}}>{description}</p>
          <button
            onClick={() => navigate(redirectTo)}
            style={{
              padding: '8px 16px',
              fontSize: '15px',
              color: '#fff',
              background: 'linear-gradient(135deg, #A4813D, #d4b36b, #A4813D)',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer',
              transform: getButtonTransform(),
              transition: 'transform 0.4s ease',
            }}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
