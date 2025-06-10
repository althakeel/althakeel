import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';
import OurExpertise from '../components/Homepage/expert';
import AboutUs from '../components/Homepage/aboutus';
import BannerText from '../components/Homepage/bannertext mobile';
import Brands from '../components/Homepage/brands';
import SubscriptionSection from '../components/subscription';
import News from '../components/Homepage/news';
import BrandManagement from '../components/Homepage/Brandmanagement';
import TopBar from '../components/common/topbar';
import Header from '../components/common/header-home';
import BannerVideo from '../components/common/banners/homebanner';

const Home = () => {
  return (
    <div>
     <Helmet>
  <title>Al Thakeel | Strategic Brand Holding Company</title>
  <meta
    name="description"
    content="Al Thakeel is a strategic brand holding company managing a diverse portfolio of e-commerce brands—Nexso, Grahaam, Store1920, Vellore Paris—and delivering quality products across markets."
  />
  <link rel="canonical" href="https://www.althakeel.com/" />
</Helmet>

      <TopBar />
      <Header />
      <BannerVideo />
      <BannerText />
      <AboutUs />
      <BrandManagement />
      <Brands />
      <OurExpertise />
      <News />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Home;
