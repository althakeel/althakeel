import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const merchantLogos = [
  { name: 'Amazon', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/1_sjxbyu.png' },
  { name: 'Noon', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/2_sp6yxe.png' },
  { name: 'Namshi', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/3_g9nm8p.png' },
  { name: 'Ounass', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/4_g4zgcg.png' },
  { name: 'Microless', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/5_uiu9ww.png' },
  { name: 'Mumzworld', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/6_msoyiz.png' },
  { name: 'FirstCry', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/7_wkyn10.png' },
  { name: 'Union Coop', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/8_xl7pzz.png' },
  { name: 'Carrefour', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/9_ugy0hr.png' },
  { name: 'Sharjah DG', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/10_ppew9g.png' },
  { name: 'Lulu', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/11_sy0brn.png' },
  { name: 'Kibson', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411526/19_f4k0vi.png' },
];

const brandLogos = [
  { name: 'Dyson', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/12_gfzr55.png' },
  { name: 'Apple', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/13_yogh1b.png' },
  { name: 'Joyroom', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/14_fmbqqe.png' },
  { name: 'Rasasi', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/15_e3p98i.png' },
  { name: 'Ajmal', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/16_ystjfb.png' },
  { name: 'Cosmos', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/17_zf2fr9.png' },
  { name: 'JBL', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411526/18_y2czi6.png' },
  { name: 'Samsung', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411526/20_ill4jl.png' },
  { name: 'Lenskart', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411529/21_yrarvl.png' },
  { name: 'Boat', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411540/22_ijiz06.png' },
];

// Combine all logos
const logos = [...merchantLogos, ...brandLogos];

const BannerText = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div
      className="banner-container"
      style={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'transparent',
        position: 'relative',
        padding: '20px 0',
        direction: isArabic ? 'rtl' : 'ltr',
        boxSizing: 'border-box',
      }}
    >
      {/* Gradient Fade Effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '60px',
          // background: 'linear-gradient(to right, #b68e40, transparent)',
          zIndex: 1,
          left: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '80px',
          // background: 'linear-gradient(to left, #b68e40, transparent)',
          zIndex: 1,
          right: 0,
        }}
      />

      <div
        style={{
          display: 'flex',
          width: '200%',
          animation: `scroll 40s linear infinite`,
          flexDirection: isArabic ? 'row-reverse' : 'row',
        }}
      >
        {[...logos, ...logos].map((item, index) => (
          <div
            key={index}
            style={{
              flex: '0 0 auto',
              padding: '0 15px',
              opacity: 0.6,
              transition: 'opacity 0.1s ease',
              // pointerEvents: 'auto',
            }}
          >
            <img
              src={item.logo}
              alt={item.name}
              title={item.name}
              style={{
                height: 'clamp(30px, 6vw, 60px)',
                width: 'auto',
                objectFit: 'contain',
                
                // filter: 'drop-shadow(0 0 3px rgba(0,0,0,0.2))',
              }}
            />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 600px) {
            .banner-container {
              display: none !important;
            }
            div[style*="width: 200%"] {
              animation-duration: 60s !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BannerText;
