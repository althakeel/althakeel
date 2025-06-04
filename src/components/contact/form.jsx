import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../../context/LanguageContext';

const ContactSection = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';
  const dir = isArabic ? 'rtl' : 'ltr';

  const t = {
    en: {
      title: 'Contact Us',
      subtitle: 'We’re happy to hear from you via the form or contact details below.',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'Enter your email',
      messageLabel: 'Message',
      messagePlaceholder: 'Write your message here',
      robotCheck: "I'm not a robot",
      send: 'Send',
      location: 'Location',
      map: '2nd floor Al Saqr Business Tower - Sheikh Zayed Rd - DIFC - Dubai',
      email: 'Email',
      emailInfo: 'info@althakeel.com',
      phone: 'Phone',
      phoneInfo: '+971 43882585',
      finalNote: 'For brand-specific enquiries or support, please use the links below to find the most relevant contact.',
      nearestStore: 'Locate your nearest store',
      mediaCentre: 'visit the Media Centre for press enquiries',
      careers: 'explore Careers for job opportunities',
      vendorContact: 'or contact',
      vendorEmail: 'info@althakeel.com',
      ifVendor: 'if you’re a supplier or vendor.',
    },
    ar: {
      title: 'تواصل معنا',
      subtitle: 'يسعدنا تواصلك معنا عبر النموذج أو معلومات الاتصال أدناه.',
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'ادخل اسمك الكامل',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'ادخل بريدك الإلكتروني',
      messageLabel: 'رسالتك',
      messagePlaceholder: 'اكتب رسالتك هنا',
      robotCheck: 'أنا لست روبوتاً',
      send: 'إرسال',
      location: 'الموقع',
      map: 'دبي، شارع الشيخ زايد',
      email: 'البريد الإلكتروني',
      emailInfo: 'info@example.com',
      phone: 'الهاتف',
      phoneInfo: '+971 50 123 4567',
      finalNote: 'للاستفسارات أو الدعم المتعلق بعلامة تجارية معينة، يُرجى استخدام الروابط أدناه للعثور على جهة الاتصال الأنسب.',
      nearestStore: 'اعثر على أقرب متجر إليك',
      mediaCentre: 'قم بزيارة المركز الإعلامي للاستفسارات الصحفية',
      careers: 'استعرض الوظائف المتاحة للانضمام إلينا',
      vendorContact: 'أو تواصل مع',
      vendorEmail: 'central.procurement@alshaya.com',
      ifVendor: 'إذا كنت مورداً أو شريكاً.',
    }
  };

  const contactItems = [
    {
      icon: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748956108/Location_zy3pxx.webp',
      label: t[language].location,
      info: t[language].map,
    },
    {
      icon: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748956108/MAil_g7fs2g.webp',
      label: t[language].email,
      info: t[language].emailInfo,
      link: `mailto:${t[language].emailInfo}`
    },
    {
      icon: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748956107/Call_ieohp8.webp',
      label: t[language].phone,
      info: t[language].phoneInfo,
      link: `tel:${t[language].phoneInfo.replace(/\s+/g, '')}`
    }
  ];

  const [state, handleSubmit] = useForm("xzzgbwzb");

  return (
    <section style={{ background: '#f9f9f9', padding: '4rem 0' }} dir={dir}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: isArabic ? 'right' : 'left' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{t[language].title}</h2>
          <p style={{ color: '#666' }}>{t[language].subtitle}</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between' }}>
          <div style={{ flex: '1', minWidth: '280px' }}>
            {contactItems.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                  cursor: item.link ? 'pointer' : 'default'
                }}
                onClick={() => item.link && window.open(item.link, '_blank')}
              >
                <img src={item.icon} alt={item.label} style={{ width: '40px', height: '40px' }} />
                <div>
                  <strong style={{ fontSize: '1.1rem' }}>{item.label}</strong>
                  <div style={{ fontSize: '0.95rem', color: '#444', marginTop: '4px' }}>{item.info}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ flex: '1', minWidth: '300px' }}>
            <form onSubmit={handleSubmit}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{t[language].nameLabel}</label>
              <input type="text" name="name" placeholder={t[language].namePlaceholder} required style={{ width: '100%', padding: '0.75rem 1rem', marginBottom: '1.2rem', borderRadius: '6px', border: '1px solid #ccc' }} />
              <ValidationError prefix="Name" field="name" errors={state.errors} />

              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{t[language].emailLabel}</label>
              <input type="email" name="email" placeholder={t[language].emailPlaceholder} required style={{ width: '100%', padding: '0.75rem 1rem', marginBottom: '1.2rem', borderRadius: '6px', border: '1px solid #ccc' }} />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>{t[language].messageLabel}</label>
              <textarea name="message" rows="5" placeholder={t[language].messagePlaceholder} required style={{ width: '100%', padding: '0.75rem 1rem', marginBottom: '1.2rem', borderRadius: '6px', border: '1px solid #ccc' }}></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <div style={{ marginBottom: '1.2rem' }}>
                <div style={{ border: '1px solid #d3d3d3', borderRadius: '6px', padding: '12px 16px', backgroundColor: '#f9f9f9', height: '78px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 0 5px rgba(0,0,0,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" required style={{ width: '20px', height: '20px', accentColor: '#4285f4' }} />
                    <label style={{ fontSize: '14px', color: '#202124' }}>{t[language].robotCheck}</label>
                  </div>
                  <div style={{ fontSize: '8px', color: '#70757a', textAlign: 'center' }}>
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" style={{ height: '30px', marginBottom: '2px' }} />
                    <div>
                      <span>reCAPTCHA</span><br />
                      <a href="./privacypolicy" style={{ color: '#70757a', textDecoration: 'underline' }}>Privacy</a> - <a href="./terms&condition" style={{ color: '#70757a', textDecoration: 'underline' }}>Terms</a>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={state.submitting} style={{ background: '#000', color: '#fff', border: 'none', padding: '0.9rem 2rem', borderRadius: '6px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}>{t[language].send}</button>
              {state.succeeded && <p style={{ color: 'green', marginTop: '1rem' }}>Message sent successfully!</p>}
            </form>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <p style={{ maxWidth: '1200px', fontSize: '12px', color: '#444', lineHeight: 1.6, textAlign:'left' }}>
            {t[language].finalNote} <br />
            {/* <a href="/locations" style={{ color: '#007bff', textDecoration: 'underline' }}>{t[language].nearestStore}</a>,{' '} */}
            {/* <a href="/media-centre" style={{ color: '#007bff', textDecoration: 'underline' }}>{t[language].mediaCentre}</a>,{' '} */}
            <a href="/careers" style={{ color: '#007bff', textDecoration: 'underline' }}>{t[language].careers}</a>,{' '}
            {t[language].vendorContact}{' '}
            <a href={`mailto:${t[language].vendorEmail}`} style={{ color: '#007bff', textDecoration: 'underline' }}>{t[language].vendorEmail}</a> {t[language].ifVendor}
          </p>
        </div>
          </div>
        </div>

        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <p style={{ maxWidth: '1200px', fontSize: '12px', color: '#444', lineHeight: 1.6, textAlign:'center' }}>
            {t[language].finalNote} <br />
            <a href="/locations" style={{ color: '#007bff', textDecoration: 'underline' }}>{t[language].nearestStore}</a>,{' '}
            <a href="/media-centre" style={{ color: '#007bff', textDecoration: 'underline' }}>{t[language].mediaCentre}</a>,{' '}
            <a href="/careers" style={{ color: '#007bff', textDecoration: 'underline' }}>{t[language].careers}</a>,{' '}
            {t[language].vendorContact}{' '}
            <a href={`mailto:${t[language].vendorEmail}`} style={{ color: '#007bff', textDecoration: 'underline' }}>{t[language].vendorEmail}</a> {t[language].ifVendor}
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default ContactSection;