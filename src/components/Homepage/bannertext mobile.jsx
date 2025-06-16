import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const merchantLogos = [
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
  { name: 'Luxury Watch Deals', logo: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1750062135/Logo_2_l3h828.webp' }, 

];

const brandLogos = [
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

          // .fade-left {
          //   left: 0;
          //   background: linear-gradient(to right, #fff, transparent);
          // }

          // .fade-right {
          //   right: 0;
          //   background: linear-gradient(to left, #fff, transparent);
          // }

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
            height: clamp(55px, 6vw, 60px);
            width: auto;
            object-fit: contain;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          @media (max-width: 600px) {
            .logo-scroller {
              animation-duration: 10s !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BannerText;
