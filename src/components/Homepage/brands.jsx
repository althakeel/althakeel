import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const BrandCard = ({ logo, alt, width = '140px', height = '80px', special }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    background: '#fff',
    boxShadow: isHovered
      ? '0 8px 20px rgba(0,0,0,0.15)'
      : '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: special ? '16px' : '12px',
    padding: special ? '14px' : '10px',
    minWidth: '120px',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    transform: isHovered ? 'translateY(-5px)' : 'none',
  };

  const imageStyle = {
    width,
    height,
    objectFit: 'contain',
  };

  return (
    <div
      style={cardStyle}
      className="brand-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={logo} alt={alt} style={imageStyle} />
    </div>
  );
};

const Brands = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const translations = {
    en: {
      existIn: 'We Exist In',
      workWith: 'Brands We Work With',
    },
    ar: {
      existIn: 'نحن موجودون في',
      workWith: 'العلامات التجارية التي نعمل معها',
    },
  };

  const partners = [
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

  const brands = [
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
    <div className="brands-container">
      <style>{`
        .brands-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .section-title {
          font-size: 35px;
          margin-bottom: 30px;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
        }
        .brands-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }
        @media (max-width: 768px) {
          .brands-container { padding: 15px; }
          .section-title { font-size: 28px; }
          .brand-card img {
            width: 100px !important;
            height: 60px !important;
          }
        }
        @media (max-width: 480px) {
          .brands-container { padding: 10px; }
          .section-title { font-size: 22px; }
          .brand-card img {
            width: 90px !important;
            height: 50px !important;
          }
        }
      `}</style>

      <Section title={translations[language].existIn} isArabic={isArabic}>
        {partners.map((partner, index) => (
          <BrandCard key={index} logo={partner.logo} alt={partner.name} />
        ))}
      </Section>

      <Section title={translations[language].workWith} isArabic={isArabic}>
        {brands.map((brand, index) => (
          <BrandCard
            key={index}
            logo={brand.logo}
            alt={brand.name}
            width="160px"
            special
          />
        ))}
      </Section>
    </div>
  );
};

const Section = ({ title, isArabic, children }) => (
  <section style={{ marginBottom: '50px' }}>
    <h2
      className="section-title"
      style={{ direction: isArabic ? 'rtl' : 'ltr' }}
    >
      {title}
    </h2>
    <div className="brands-grid">{children}</div>
  </section>
);

export default Brands;
