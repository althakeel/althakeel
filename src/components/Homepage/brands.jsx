import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const cardBaseStyle = {
  background: '#fff',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  borderRadius: '12px',
  padding: '10px 10px',
  minWidth: '100px',
  textAlign: 'center',
  transition: 'transform 0.2s, box-shadow 0.2s',
  cursor: 'pointer',
};

const specialCardStyle = {
  background: '#fff',
  borderRadius: '16px',
  padding: '14px',
};

const hoverEffect = {
  transform: 'translateY(-5px)',
  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
};

const BrandCard = ({ logo, alt, width = '140px', height = '80px', special }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...cardBaseStyle,
        ...(special ? specialCardStyle : {}),
        ...(isHovered ? hoverEffect : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={logo}
        alt={alt}
        style={{
          width,
          height,
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

const Brands = () => {
  const { language } = useLanguage(); // Get selected language

  const t = {
    en: {
      existIn: 'We Exist In',
      workWith: 'Brands We Work With',
    },
    ar: {
      existIn: 'نحن موجودون في',
      workWith: 'العلامات التجارية التي نعمل معها',
    },
  };

  const isArabic = language === 'ar';

  const existIn = [
    { name: 'Amazon', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342618/1-removebg-preview_e8pbbv.png' },
    { name: 'Noon', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342619/2-removebg-preview_fdp6ku.png' },
    { name: 'Namshi', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342647/9-removebg-preview_z32bqc.png' },
    { name: 'Ounass', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342654/3-removebg-preview_k6z8bn.png' },
    { name: 'Microless', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342623/4-removebg-preview_yxey38.png' },
    { name: 'Mumzworld', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342637/7-removebg-preview_sev0c3.png' },
    { name: 'FirstCry', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342635/6-removebg-preview_wgghr8.png' },
    { name: 'Union Coop', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342646/8-removebg-preview_x9lgxp.png' },
    { name: 'Carrefour', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342624/5-removebg-preview_ndw7e7.png' },
    { name: 'Sharjah DG', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748342652/Untitled_design-removebg-preview_mlwdhe.png' },
    { name: 'Lulu', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748334414/11_kgnbkw.png' },
    { name: 'Kibson', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339641/logo-horizontal-removebg-preview_yuzfpv.png' },
  ];

  const brandLogos = [
    { name: 'Dyson', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339173/5-removebg-preview_fuan0p.png' },
    { name: 'Apple', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339179/7-removebg-preview_jl3lm7.png' },
    { name: 'Joyroom', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339277/ec744cd6de3dd034388256af9917e235_b3uv5q.webp' },
    { name: 'Rasasi', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339171/3-removebg-preview_j3usje.png' },
    { name: 'Ajmal', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748335118/1_rrgtfc.png' },
    { name: 'Cosmos', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339246/cosmos_oemezv.webp' },
    { name: 'JBL', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339142/2-removebg-preview_zi48g1.png' },
    { name: 'Samsung', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339185/10-removebg-preview_adzkfe.png' },
    { name: 'Lenskart', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339184/9-removebg-preview_kxigb0.png' },
    { name: 'Boat', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748339181/8-removebg-preview_mbjx4a.png' },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 20px' }}>
      {/* We Exist In */}
      <section style={{ marginBottom: '50px' }}>
        <h2
          style={{
            fontSize: '35px',
            marginBottom: '30px',
            textAlign: 'center',
            direction: isArabic ? 'rtl' : 'ltr',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,
          }}
        >
          {t[language].existIn}
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            
          }}
        >
          {existIn.map((store, index) => (
            <BrandCard key={index} logo={store.logo} alt={store.name} />
          ))}
        </div>
      </section>

      {/* Brands We Work With */}
      <section>
        <h2
          style={{
            fontSize: '35px',
            marginBottom: '30px',
            textAlign: 'center',
            direction: isArabic ? 'rtl' : 'ltr',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 500,          }}
        >
          {t[language].workWith}
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '25px',
          }}
        >
          {brandLogos.map((brand, index) => (
            <BrandCard
              key={index}
              logo={brand.logo}
              alt={brand.name}
              width="130px"
              special
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Brands;
