import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const PartnerForm = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @media (max-width: 768px) {
        .partner-form-container {
          display: flex !important;
          flex-direction: column !important;
        }
        .left-panel, .right-panel {
          width: 100% !important;
          padding: 40px 20px !important;
        }
        .form-wrapper {
          padding: 40px 20px !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
  }, []);

  const content = {
    en: {
      title: "Partner with Al Thakeel",
      intro: "Al Thakeel is a forward-thinking business group headquartered in Dubai, dedicated to innovation, quality, and excellence.",
      listIntro: "By partnering with us, you gain access to:",
      listItems: [
        "Diverse markets across retail, tech, and lifestyle",
        "Established brands like Nexso, Store 1920, and Armed",
        "Innovative solutions powered by experienced teams",
        "A trusted network in the UAE and beyond"
      ],
      close: "We’re always looking for visionary partners — distributors, investors, or service providers — let’s grow together.",
      formTitle: "Start the Partnership",
      company: "Company Name",
      email: "Email",
      phone: "Phone",
      phonePlaceholder: "+971 50 123 4567",
      message: "Message",
      messagePlaceholder: "Tell us how you'd like to collaborate...",
      submit: "Submit"
    },
    ar: {
      title: "شارك مع الثقيل",
      intro: "الثقيل هي مجموعة أعمال مبتكرة مقرها دبي، تركز على الابتكار والجودة والتميز.",
      listIntro: "من خلال الشراكة معنا، ستحصل على:",
      listItems: [
        "أسواق متنوعة تشمل التجزئة والتكنولوجيا ونمط الحياة",
        "علامات تجارية راسخة مثل Nexso وStore 1920 وArmed",
        "حلول مبتكرة تدعمها فرق ذات خبرة",
        "شبكة موثوقة في الإمارات وخارجها"
      ],
      close: "نحن نبحث دائمًا عن شركاء طموحين — موزعين أو مستثمرين أو مقدمي خدمات — دعونا ننمو معًا.",
      formTitle: "ابدأ الشراكة",
      company: "اسم الشركة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      phonePlaceholder: "+٩٧١ ٥٠ ١٢٣ ٤٥٦٧",
      message: "رسالتك",
      messagePlaceholder: "أخبرنا كيف ترغب في التعاون...",
      submit: "إرسال"
    }
  };

  const t = content[language];

  return (
    <div style={{ ...styles.wrapper, direction: isArabic ? 'rtl' : 'ltr' }}>
      <div className="partner-form-container" style={styles.container}>
        {/* Left Panel */}
        <div className="left-panel" style={styles.leftPanel}>
          <div style={{ ...styles.overlay, textAlign: isArabic ? 'right' : 'left' }}>
            <h1 style={styles.title}>{t.title}</h1>
            <p style={styles.description}>
              {t.intro}
              <br /><br />
              {t.listIntro}
              <ul style={styles.list}>
                {t.listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {t.close}
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel form-wrapper" style={styles.rightPanel}>
          <form style={styles.form}>
            <h2 style={styles.formTitle}>{t.formTitle}</h2>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.company}</label>
              <input
                type="text"
                placeholder={t.company}
                style={styles.input}
                dir={isArabic ? 'rtl' : 'ltr'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.email}</label>
              <input
                type="email"
                placeholder="example@domain.com"
                style={styles.input}
                dir={isArabic ? 'rtl' : 'ltr'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.phone}</label>
              <input
                type="tel"
                placeholder={t.phonePlaceholder}
                style={styles.input}
                dir={isArabic ? 'rtl' : 'ltr'}
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>{t.message}</label>
              <textarea
                placeholder={t.messagePlaceholder}
                rows={4}
                style={styles.textarea}
                dir={isArabic ? 'rtl' : 'ltr'}
              />
            </div>

            <div style={styles.formGroup}>
              <button type="submit" style={styles.submitButton}>
                {t.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#f5f5f5',
    padding: '60px 20px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    maxWidth: '1400px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
  },
  leftPanel: {
    backgroundImage: 'url("https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748859360/10_xnlf0r.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '60px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: '#fff',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '420px',
    fontSize: '15px',
    lineHeight: '1.7',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.6',
  },
  list: {
    margin: '10px 0 20px',
    paddingLeft: '20px',
    fontSize: '15px',
    lineHeight: '1.5',
  },
  rightPanel: {
    padding: '60px 40px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formTitle: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '24px',
    color: '#222',
    textAlign: 'center',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#444',
  },
  input: {
    padding: '14px 18px',
    fontSize: '15px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #dcdcdc',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  textarea: {
    padding: '14px 18px',
    fontSize: '15px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #dcdcdc',
    resize: 'vertical',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  submitButton: {
    padding: '14px 18px',
    fontSize: '16px',
    background: 'linear-gradient(135deg, #000000 0%, #b79e62 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s ease',
  },
};

export default PartnerForm;
