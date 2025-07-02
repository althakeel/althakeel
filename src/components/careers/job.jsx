import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const JobAlertBanner = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const textContent = {
    en: {
      heading: 'Never Miss a Job Opportunity!',
      subtext: 'Subscribe to receive alerts for new positions at Al Thakeel.',
      placeholder: 'Your email address',
      button: 'Subscribe',
      success: 'Thanks! You’ll be the first to know about new roles.',
    },
    ar: {
      heading: 'لا تفوّت أي فرصة عمل!',
      subtext: 'اشترك لتصلك تنبيهات عن وظائف جديدة في الثقيل.',
      placeholder: 'بريدك الإلكتروني',
      button: 'اشترك الآن',
      success: 'شكرًا! سيتم إعلامك بالوظائف الجديدة فور توفرها.',
    },
  };

  const t = textContent[language] || textContent.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubmitted(true);
      setEmail('');
      // Add backend submit logic (e.g., Firebase, EmailJS)
    }
  };

  return (
    <section
      style={{
        background: 'url(https://images.unsplash.com/photo-1603791440384-56cd371ee9a7) center/cover',
        padding: '100px 20px',
        fontFamily: "'Montserrat', sans-serif",
        direction: isArabic ? 'rtl' : 'ltr',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px)',
          borderRadius: '20px',
          padding: '40px 30px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '12px' }}>
          {t.heading}
        </h2>
        <p style={{ fontSize: '18px', marginBottom: '30px' }}>{t.subtext}</p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: isArabic ? 'row-reverse' : 'row',
              justifyContent: 'center',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.placeholder}
              required
              style={{
                padding: '14px 18px',
                borderRadius: '30px',
                border: 'none',
                fontSize: '15px',
                width: '240px',
                color: '#333',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 28px',
                borderRadius: '30px',
                backgroundColor: '#fff',
                color: '#021C35',
                border: 'none',
                fontWeight: '600',
                fontSize: '15px',
                cursor: 'pointer',
              }}
            >
              {t.button}
            </button>
          </form>
        ) : (
          <p
            style={{
              fontSize: '16px',
              marginTop: '20px',
              color: '#90ee90',
              fontWeight: '600',
            }}
          >
            {t.success}
          </p>
        )}
      </div>
    </section>
  );
};

export default JobAlertBanner;
