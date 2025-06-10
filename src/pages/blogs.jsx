import React from 'react';
import { Helmet } from 'react-helmet';

import Footer from '../components/Footer';
import Blog from '../components/Blog/Blog';
import Banner from '../components/common/banners/blogbanner';
import Header from '../components/common/header-blogs';

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Al Thakeel Blogs | Insights on E-commerce, Brands & Innovation</title>
        <meta
          name="description"
          content="Stay updated with the latest news, tips, and insights on e-commerce, digital innovation, and our brands from Al Thakeel."
        />
        <link rel="canonical" href="https://www.althakeel.com/blogs" />
      </Helmet>

      <Header />
      <Banner />
      <Blog />
      <Footer />
    </div>
  );
};

export default Blogs;
