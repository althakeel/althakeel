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
    { name: 'Amazon', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882230/1-removebg-preview_e8pbbv_ujxh4x.png' }, 
  { name: 'Noon', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882231/2-removebg-preview_fdp6ku_aohvld.png' },
  { name: 'Namshi', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882238/9-removebg-preview_z32bqc_ig9t8k.png' },
  { name: 'Ounass', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882231/3-removebg-preview_k6z8bn_zx4ncd.png' },
  { name: 'Microless', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882232/4-removebg-preview_yxey38_actmsc.png' },
  { name: 'Mumzworld', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882236/7-removebg-preview_sev0c3_wpphr8.png' },
  { name: 'FirstCry', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882234/6-removebg-preview_wgghr8_oyi7zb.png' },
  { name: 'Union Coop', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882237/8-removebg-preview_x9lgxp_uub2ky.png' },
  { name: 'Carrefour', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882233/5-removebg-preview_ndw7e7_i4tvzx.png' },
  { name: 'Sharjah DG', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882240/Untitled_design-removebg-preview_mlwdhe_ojdt85.png' },
  { name: 'Lulu', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882239/11_kgnbkw_neld7w.png' }, 
  { name: 'Kibson', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882239/logo-horizontal-removebg-preview_yuzfpv_wbtaju.png' }, 
];
  const brands = [
    { name: 'Dyson', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882233/5_kbwtcb_mjfe27.png' }, 
    { name: 'Apple', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882235/7_xvp2tv_ivh9he.png' }, 
    { name: 'Joyroom', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882231/4_ncda67_hs8hfs.png' }, 
    { name: 'Rasasi', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882231/3_occv32_eqx5hq.png' },
    { name: 'Ajmal', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882230/1_rrgtfc_uobuzl.png' }, 
    { name: 'Cosmos', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882234/6_skbg1d_ncaj9l.png' }, 
    { name: 'JBL', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749882230/2_yxwrcs_wzncfr.png' }, 
    { name: 'Samsung', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749883660/3_fbt96l.png' },
    { name: 'Lenskart', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749883128/9_rlhjlp.png' },
    { name: 'Boat', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1749883660/2_e9rhig.png' },
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
