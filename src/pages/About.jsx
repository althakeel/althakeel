import React from 'react';
import { Helmet } from 'react-helmet';

import WhoWeAre from '../components/about/whoweare';
import WhatWeDo from '../components/about/whatwedo';
import Footer from '../components/Footer';
import Whychoodeus from '../components/about/whychooseus';
import Purpose from '../components/about/purpose';
import Values from '../components/about/values';
import Store from '../components/about/store';
import Story from '../components/about/story';
import Banner from '../components/common/banners/aboutbanner';
import Header from '../components/common/header-about';
import Topbar from '../components/common/topbar';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Al Thakeel | Our Vision, Brands & Values</title>
        <meta
          name="description"
          content="Discover the story behind Al Thakeel, our mission, values, and the powerful e-commerce brands we manage. Explore how we drive product excellence in the GCC and beyond."
        />
        <link rel="canonical" href="https://www.althakeel.com/about" />
      </Helmet>

      <Topbar />
      <Header />
      <Banner />
      <WhoWeAre />
      <Purpose />
      <Story />
      <Values />
      <Store />
      {/* <Whychoodeus /> */}
      {/* <WhatWeDo /> */}
      <Footer />
    </div>
  );
};

export default About;
