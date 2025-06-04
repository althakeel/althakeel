import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SubscriptionSection = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState(null);
  const formRef = useRef();

  const content = {
    en: {
      title: "Let’s learn, explore, and thrive together!",
      description:
        "Join 100+ professionals and brand leaders who believe in collaboration, growth, and mutual success.",
      placeholder: "Add your e-mail",
      button: "SUBSCRIBE",
      success: "Thank you for subscribing!",
      error: "Something went wrong. Please try again.",
      invalid: "Please enter a valid email address.",
    },
    ar: {
      title: "دعونا نتعلم ونستكشف ونزدهر معًا!",
      description:
        "انضم إلى أكثر من 4000 متخصص وقائد علامة تجارية يؤمنون بالتعاون والنمو والنجاح المشترك.",
      placeholder: "أدخل بريدك الإلكتروني",
      button: "اشترك",
      success: "شكرًا لاشتراكك!",
      error: "حدث خطأ ما. حاول مرة أخرى.",
      invalid: "يرجى إدخال بريد إلكتروني صالح.",
    },
  };

  const t = content[language] || content.en;

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      setMessage({ type: 'error', text: t.invalid });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setEmail(trimmedEmail);

    emailjs
      .sendForm('service_t17w3cn', 'template_ez6rnvk', formRef.current, 'hdyktKryGbY7a9awj')
      .then(() => {
        setSubmitted(true);
        setEmail('');
        setMessage({ type: 'success', text: t.success });
        setTimeout(() => {
          setSubmitted(false);
          setMessage(null);
        }, 3000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setMessage({ type: 'error', text: t.error });
        setTimeout(() => setMessage(null), 3000);
      });
  };

  return (
    <div
      style={{
        width: '100%',
        background: 'linear-gradient(135deg, #000000 0%, #b79e62 100%)',
        color: '#fff',
        padding: '60px 30px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '40px',
          flexWrap: 'wrap',
          direction: language === 'ar' ? 'rtl' : 'ltr',
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontSize: '35px',
              fontWeight: 500,           
               fontFamily: 'Montserrat, sans-serif',
              margin: 0,
              color: '#fff',
              lineHeight: 1.4,
            }}
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ marginTop: '15px', fontSize: '15px', color: '#f2f2f2',fontFamily: 'Montserrat, sans-serif',
            }}
          >
            {t.description}
          </motion.p>
        </div>

        {/* Right Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            flex: 1,
            display: 'flex',
            gap: '10px',
            minWidth: '300px',
            flexWrap: 'wrap',
            justifyContent: language === 'ar' ? 'flex-start' : 'flex-end',
          }}
        >
          <input
            type="email"
            name="email"
            className="subscription-input"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            placeholder={t.placeholder}
            required
            style={{
              flex: '1 1 auto',
              padding: '12px 18px',
              fontSize: '15px',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              minWidth: '240px',
              borderRadius: '8px',
              outline: 'none',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              fontFamily: 'Montserrat, sans-serif',

            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            aria-hidden="true"
            style={{
              padding: '12px 26px',
              fontSize: '15px',
              background: 'linear-gradient(135deg, #b79e62 0%, #fff4d4 100%)',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              letterSpacing: '1px',
              borderRadius: '8px',
              minWidth: '130px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              fontFamily: 'Montserrat, sans-serif',

            }}
          >
            {t.button}
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Notification */}
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: message.type === 'success' ? '#4caf50' : '#f44336',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 9999,
            fontSize: '14px',
          }}
        >
          {message.text}
        </motion.div>
      )}

      {/* Style for placeholder */}
      <style>
        {`
          .subscription-input::placeholder {
            color: rgba(255, 255, 255, 0.7);
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default SubscriptionSection;
