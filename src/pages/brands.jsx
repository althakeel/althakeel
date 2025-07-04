import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import Brands from '../components/brands/brands';
import Footer from '../components/Footer';
import Marque from '../components/brands/marque';
import Nexso from '../components/brands/Nexso';
import Galary1 from '../components/brands/galary1';
import Galary2 from '../components/brands/galary2';
import Vellore from '../components/brands/vellore';
import Galary3 from '../components/brands/galary3';
import Grahaam1 from '../components/brands/Grahaam';
import Armed from '../components/brands/armed';
import Galary4 from '../components/brands/galary4';
import Store1920 from '../components/brands/store1920';
import Galary from '../components/brands/galary';
import Header from '../components/common/brands-header';
import Banner from '../components/common/banners/brandsbanner';

const Brand = () => {
  const location = useLocation();
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          hasScrolled.current = true;
        }, 300);
      }
    }
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Our Brands | Nexso, Grahaam, Vellore & More | Al Thakeel</title>
        <meta
          name="description"
          content="Explore Al Thakeel's diverse portfolio of brands including Nexso, Grahaam, Vellore Paris, Store1920, and more. Each brand delivers excellence in tech, fashion, and lifestyle."
        />
        <link rel="canonical" href="https://www.althakeel.com/brands" />
      </Helmet>

      <Header />
      <Banner />
      <Marque />

      <Nexso />
      <Galary1 />

      <Grahaam1 />
      <Galary2 />

      <Vellore />
      <Galary3 />

      <Armed />
      <Galary4 />

      <Store1920 />
      <Galary />

      <Footer />
    </div>
  );
};

export default Brand;
