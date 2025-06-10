import React from 'react';
import { Helmet } from 'react-helmet';

import Form from '../components/contact/form';
import Footer from '../components/Footer';
import Map from '../components/contact/map';
import Banner from '../components/common/banners/contactbanner';
import Header from '../components/common/header-contactus';

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Al Thakeel | Let’s Work Together</title>
        <meta
          name="description"
          content="Get in touch with Al Thakeel for business inquiries, customer support, or partnership opportunities. We'd love to hear from you."
        />
        <link rel="canonical" href="https://www.althakeel.com/contact" />
      </Helmet>

      <Header />
      <Banner />
      <Form />
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
