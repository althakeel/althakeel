import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const merchantLogos = [
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
  { name: 'Lulu', logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748343170/lululul-removebg-preview_xnt7jl.png' },
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

const logos = [...merchantLogos, ...brandLogos];

const BannerText = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  return (
    <div className="banner-text-container">
      <div className="fade-left" />
      <div className="fade-right" />

      <div
        className="logo-scroller"
        style={{
          flexDirection: isArabic ? 'row-reverse' : 'row',
        }}
      >
        {[...logos, ...logos].map((item, index) => (
          <div key={index} className="logo-item">
            <img
              src={item.logo}
              alt={item.name}
              title={item.name}
              className="logo-image"
            />
          </div>
        ))}
      </div>

      <style>
        {`
          /* Hide on desktop by default */
          .banner-text-container {
            display: none;
            width: 100%;
            overflow: hidden;
            background-color: transparent;
            position: relative;
            padding: 20px 0;
            box-sizing: border-box;
          }

          /* Show only on mobile (≤768px) */
          @media (max-width: 768px) {
            .banner-text-container {
              display: block;
            }
          }

          .fade-left, .fade-right {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 60px;
            z-index: 1;
          }

          .fade-left {
            left: 0;
            background: linear-gradient(to right, #fff, transparent);
          }

          .fade-right {
            right: 0;
            background: linear-gradient(to left, #fff, transparent);
          }

          .logo-scroller {
            display: flex;
            width: 200%;
            animation: scroll 40s linear infinite;
          }

          .logo-item {
            flex: 0 0 auto;
            padding: 0 15px;
            opacity: 0.8;
            transition: opacity 0.1s ease;
          }

          .logo-image {
            height: clamp(30px, 6vw, 60px);
            width: auto;
            object-fit: contain;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 600px) {
            .logo-scroller {
              animation-duration: 60s !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BannerText;
