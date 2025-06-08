import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Career = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const isMobile = window.innerWidth < 768;


  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: isMobile ? '40px 16px' : '40px 20px',
    fontFamily: 'Segoe UI, sans-serif',
    direction: isArabic ? 'rtl' : 'ltr',
    textAlign: 'center',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: '500',
    color: '#222',
    marginBottom: '20px',
  };

  const subHeadingStyle = {
    fontSize: '17px',
    color: '#555',
    marginBottom: '40px',
    lineHeight: '1.6',
  };

  const highlightStyle = {
    color: '#007BFF',
    fontWeight: '600',
  };

  const boxWrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '40px',
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    flex: '1 1 300px',
    maxWidth: '360px',
    transition: 'transform 0.3s ease',
    textAlign: isArabic ? 'right' : 'left',
  };

  const boxTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  };

  const boxTextStyle = {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.5',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>
          {isArabic ? 'ابنِ مستقبلك المهني مع الثقيل' : 'Build Your Career at Al Thakeel'}
        </h2>
        <p style={subHeadingStyle}>
          {isArabic ? (
            <>
              نحن شركة إماراتية ديناميكية نشكّل مستقبل البيع بالتجزئة والتجارة الإلكترونية والابتكار.
              بالتعاون مع منصات عالمية مثل <span style={highlightStyle}>أمازون</span> و<span style={highlightStyle}>نون</span>، 
              ننمو باستمرار ونبحث عن عقول جريئة تنمو معنا.
            </>
          ) : (
            <>
              We are a dynamic UAE-based company shaping the future of retail, e-commerce, and innovation.
              Partnering with global platforms like <span style={highlightStyle}>Amazon</span> and <span style={highlightStyle}>Noon</span>,
              we’re constantly growing and looking for bold minds to grow with us.
            </>
          )}
        </p>

        <div style={boxWrapperStyle}>
          <div style={boxStyle}>
            <div style={boxTitleStyle}>
              {isArabic ? 'ثقافة الابتكار' : 'Innovative Culture'}
            </div>
            <p style={boxTextStyle}>
              {isArabic
                ? 'اعمل في بيئة سريعة الإيقاع تزدهر بالأفكار الجديدة والحلول المبتكرة.'
                : 'Work in a fast-paced environment that thrives on new ideas and breakthrough solutions.'}
            </p>
          </div>

          <div style={boxStyle}>
            <div style={boxTitleStyle}>
              {isArabic ? 'وصول عالمي' : 'Global Reach'}
            </div>
            <p style={boxTextStyle}>
              {isArabic
                ? 'انضم إلى فريق تصل منتجاته إلى العملاء عبر أهم الأسواق والمنصات الدولية.'
                : 'Join a team whose products reach customers across top marketplaces and international platforms.'}
            </p>
          </div>

          <div style={boxStyle}>
            <div style={boxTitleStyle}>
              {isArabic ? 'انمو معنا' : 'Grow With Us'}
            </div>
            <p style={boxTextStyle}>
              {isArabic
                ? 'سواء كنت تبدأ حياتك المهنية أو تطوّرها، نحن نقدم فرصاً لتشكيل مستقبلك معنا.'
                : 'Whether you\'re starting out or leveling up, we offer opportunities to shape your future with us.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
