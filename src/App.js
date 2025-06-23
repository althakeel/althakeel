import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/careers';
import Brands from './pages/brands';
import Partner from './pages/partner';
import Blogs from './pages/blogs';
import Contact from './pages/contact';
import TermsCondition from './pages/terms&condition';
import PrivacyPolicy from './pages/privacypolicy';
import ScrollUp from './components/scrollup';
import Preloader from './components/preloader/preloader';
// import CustomCursor from './components/Cursor';
import NotFound from './pages/404';

function App() {
  const [loading, setLoading] = useState(true);

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Inject Tidio chatbot script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/5mjlcy2oy2qrwakykgflr0lhpoejl1tw.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
  
    <LanguageProvider>
        <div className="page-wrapper">

      <Router>
        {/* <CustomCursor /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Terms&Condition" element={<TermsCondition />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollUp />
      </Router>
      </div>
    </LanguageProvider>
  );
}

export default App;
