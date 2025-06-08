import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const statusOptions = {
  en: ['Employed', 'Unemployed', 'Self-Employed', 'Student'],
  ar: ['موظف', 'عاطل عن العمل', 'عامل حر', 'طالب'],
};

const positionOptions = {
  en: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Project Manager'],
  ar: ['مطوّر الواجهة الأمامية', 'مطوّر الواجهة الخلفية', 'مصمم UI/UX', 'مدير مشروع'],
};

const CareerForm = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    status: '',
    resume: null,
    coverLetter: null,
  });

  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z\u0600-\u06FF\s]+$/;
    if (!nameRegex.test(formData.firstName) || !nameRegex.test(formData.lastName)) {
      alert(language === 'ar' ? 'يرجى إدخال اسم صحيح' : 'Please enter valid names.');
      return;
    }

    const payload = new FormData();
    for (let key in formData) payload.append(key, formData[key]);

    try {
      const res = await fetch('https://getform.io/f/ayvyezxb', {
        method: 'POST',
        body: payload,
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          position: '',
          status: '',
          resume: null,
          coverLetter: null,
        });
        setTimeout(() => {
          setSuccess(false);
          setShowForm(false);
        }, 2500);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        @media (min-width: 768px) {
          .inline-group {
            flex-direction: row !important;
          }
        }
      `}</style>

      <div style={styles.infoSection}>
        <h2 style={styles.titleMain}>{language === 'ar' ? 'انضم إلى فريقنا' : 'Join Our Team'}</h2>
        <p style={styles.textMain}>
          {language === 'ar'
            ? 'نحن دائمًا نبحث عن أشخاص موهوبين للانضمام إلى فريقنا. هل تعتقد أنك الشخص المناسب؟ تواصل معنا!'
            : "We're always on the lookout for talented people. Think you’ve got what it takes? Let’s talk!"}
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          style={styles.button}
          onClick={() => setShowForm(true)}
        >
          {language === 'ar' ? 'قدّم الآن' : 'Apply Now'}
        </motion.button>
      </div>

      {showForm && (
        <div style={styles.modalOverlay}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ ...styles.modalCard, direction: isRTL ? 'rtl' : 'ltr' }}
          >
            <h2 style={styles.titlePopup}>{language === 'ar' ? 'طلب التوظيف' : 'Career Application'}</h2>
            <p style={styles.textPopup}>
              {language === 'ar'
                ? 'يرجى ملء التفاصيل أدناه وإرفاق سيرتك الذاتية.'
                : 'Please fill in the details below and upload your resume.'}
            </p>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={styles.successBox}
              >
                {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Your application has been submitted successfully!'}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={styles.form} encType="multipart/form-data">
              <div style={styles.inlineGroup} className="inline-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder={language === 'ar' ? 'الاسم الأول' : 'First Name'}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder={language === 'ar' ? 'اسم العائلة' : 'Last Name'}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <div style={styles.inlineGroup} className="inline-group">
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  style={styles.select}
                >
                  <option value="">{language === 'ar' ? 'الوظيفة المتقدم لها' : 'Position Applied For'}</option>
                  {positionOptions[language].map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  style={styles.select}
                >
                  <option value="">{language === 'ar' ? 'الحالة الوظيفية' : 'Employment Status'}</option>
                  {statusOptions[language].map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <label style={styles.label}>{language === 'ar' ? 'السيرة الذاتية' : 'Resume'}</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                style={styles.fileInput}
              />

              <label style={styles.label}>{language === 'ar' ? 'خطاب التقديم (اختياري)' : 'Cover Letter (Optional)'}</label>
              <input
                type="file"
                name="coverLetter"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                style={styles.fileInput}
              />

              <div style={styles.buttonRow}>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} type="submit" style={styles.button}>
                  {language === 'ar' ? 'إرسال' : 'Submit'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{ ...styles.button, backgroundColor: '#ccc', color: '#222' }}
                >
                  {language === 'ar' ? 'إلغاء' : 'Cancel'}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #000000 0%, #b79e62 100%)',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100vw', 
    flexDirection: 'column',



  },
  infoSection: {
    textAlign: 'center',
    maxWidth: 600,
    width: '100%',
    // padding: 30,
  },
  titleMain: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 12,
  },
  textMain: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
    lineHeight: 1.6,
  },
  button: {
    padding: '12px 24px',
    fontSize: 16,
    backgroundColor: '#021c35',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 600,
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    boxSizing: 'border-box',
  },
  modalCard: {
    background: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 600,
    maxHeight: '90vh',
    overflowY: 'auto',
    boxSizing: 'border-box',
  },
  titlePopup: {
    fontSize: 24,
    marginBottom: 10,
    color: '#021c35',
  },
  textPopup: {
    fontSize: 14,
    marginBottom: 20,
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  inlineGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: '100%',
  },
  input: {
    padding: 12,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 15,
    width: '100%',
  },
  select: {
    padding: 12,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 15,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    color: '#444',
  },
  fileInput: {
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 14,
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    marginTop: 10,
  },
  successBox: {
    background: '#d4edda',
    color: '#155724',
    padding: '1rem',
    borderRadius: '8px',
    marginBottom: '1rem',
    border: '1px solid #c3e6cb',
    textAlign: 'center',
    fontWeight: 500,
  },
};

export default CareerForm;