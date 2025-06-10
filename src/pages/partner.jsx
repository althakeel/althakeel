import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';
import Partnerwithus from '../components/partner/partnerwithus';
import PartnerForm from '../components/partner/form';
import SubscriptionSection from '../components/subscription';
import Partnergalary from '../components/partner/brandgalary';
import PartnerContent from '../components/partner/maincontent';
import FAQSection from '../components/partner/faq';
import Connect from '../components/partner/connect';
import Header from '../components/common/partner-header';
import Banner from '../components/common/banners/partnerbanner';

const Partner = () => {
  return (
    <div>
      <Helmet>
        <title>Partner with Al Thakeel | Business Growth & Collaboration</title>
        <meta
          name="description"
          content="Collaborate with Al Thakeel and grow your brand with strategic partnerships. Join our powerful e-commerce ecosystem spanning the GCC and beyond."
        />
        <link rel="canonical" href="https://www.althakeel.com/partner" />
      </Helmet>

      <Header />
      <Banner />
      <PartnerContent />
      {/* <Partnerwithus /> */}
      <Partnergalary />
      <Connect />
      <PartnerForm />
      <FAQSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Partner;
