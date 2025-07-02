import React from 'react';
import { Helmet } from 'react-helmet';

import CareerForm from '../components/careers/careerform';
import Footer from '../components/Footer';
import Galary from '../components/careers/galary';
import SocialMedia from '../components/careers/slider';
import Job from '../components/careers/job';
import Oppertunity from '../components/careers/oppertunity';
import Career from '../components/careers/career';
import Banner from '../components/common/banners/careerbanner';
import Header from '../components/common/header-career';
import JobBoard from '../components/careers/JobBoard';

const Careers = () => {
  return (
    <div>
      <Helmet>
        <title>Careers at Al Thakeel | Join Our Growing Team</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Al Thakeel. Join our fast-growing team and help shape the future of e-commerce and consumer brands across the GCC."
        />
        <link rel="canonical" href="https://www.althakeel.com/careers" />
      </Helmet>

      <Header />
      <Banner />
    
      <Career />
 
      <Oppertunity />
             <JobBoard/>
      <Galary />
      <Job />
      <SocialMedia />
      {/* <Content /> */}
      <CareerForm />
      <Footer />
    </div>
  );
};

export default Careers;
