import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import './JobApplicationForm.css';

const statusOptions = {
  en: ['Employed', 'Unemployed', 'Self-Employed', 'Student'],
  ar: ['موظف', 'عاطل عن العمل', 'عامل حر', 'طالب'],
};

const positionOptions = {
  en: [
    'Accountant',
    'Senior Accountant',
    'Financial Analyst',
    'Sales Representative',
    'Digital Marketing Manager',
    'Graphic Designer',
    'Web Developer',
    'Project Manager',
    'Office Administrator',
    'Customer Service Representative',
    'HR Specialist',
  
  ],
  ar: [
    'محاسب',
    'محاسب أول',
    'محلل مالي',
    'مندوب مبيعات',
    'مدير التسويق الرقمي',
    'مصمم جرافيك',
    'مطوّر ويب',
    'مدير مشروع',
    'مدير مكتب',
    'ممثل خدمة العملاء',
    'أخصائي موارد بشرية',
  
  ],
};


const JobApplicationForm = ({ onClose }) => {
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
          onClose(); // close form popup
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`modalCard ${isRTL ? 'rtl' : 'ltr'}`}
    >
      <h2 className="titlePopup">{language === 'ar' ? 'طلب التوظيف' : 'Career Application'}</h2>
      <p className="textPopup">
        {language === 'ar'
          ? 'يرجى ملء التفاصيل أدناه وإرفاق سيرتك الذاتية.'
          : 'Please fill in the details below and upload your resume.'}
      </p>

      {success && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="successBox"
        >
          {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Your application has been submitted successfully!'}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="form" encType="multipart/form-data">
        <div className="inlineGroup">
          <input
            type="text"
            name="firstName"
            placeholder={language === 'ar' ? 'الاسم الأول' : 'First Name'}
            value={formData.firstName}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            type="text"
            name="lastName"
            placeholder={language === 'ar' ? 'اسم العائلة' : 'Last Name'}
            value={formData.lastName}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
          value={formData.email}
          onChange={handleChange}
          required
          className="input"
        />

        <div className="inlineGroup">
          <select
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="select"
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
            className="select"
          >
            <option value="">{language === 'ar' ? 'الحالة الوظيفية' : 'Employment Status'}</option>
            {statusOptions[language].map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        <label className="label">{language === 'ar' ? 'السيرة الذاتية' : 'Resume'}</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          required
          className="fileInput"
        />

        <label className="label">{language === 'ar' ? 'خطاب التقديم (اختياري)' : 'Cover Letter (Optional)'}</label>
        <input
          type="file"
          name="coverLetter"
          accept=".pdf,.doc,.docx"
          onChange={handleChange}
          className="fileInput"
        />

        <div className="buttonRow">
          <motion.button type="submit" className="button">
            {language === 'ar' ? 'إرسال' : 'Submit'}
          </motion.button>
          <motion.button
            type="button"
            onClick={onClose}
            className="button cancelButton"
          >
            {language === 'ar' ? 'إلغاء' : 'Cancel'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default JobApplicationForm;
