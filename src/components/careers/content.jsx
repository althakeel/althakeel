import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Content = () => {
  const { language } = useLanguage(); // use global language
  const isArabic = language === 'ar';

  const scrollToForm = () => {
    const formElement = document.getElementById('career-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      maxWidth: '1200px',
      margin: '0 auto',
      direction: isArabic ? 'rtl' : 'ltr',
      textAlign: isArabic ? 'right' : 'left',
    },
    heading: {
      fontSize: '32px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
    },
    section: {
      marginBottom: '40px',
    },
    subHeading: {
      fontSize: '24px',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '16px',
      lineHeight: '1.6',
    },
    jobCard: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#f9f9f9',
    },
    jobTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    jobDesc: {
      fontSize: '16px',
      marginBottom: '10px',
    },
    applyButton: {
      padding: '10px 20px',
      backgroundColor: '#000',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1 style={styles.heading}>
  {isArabic ? 'الوظائف في شركة الثقيل' : 'Careers at Al Thakeel'}
</h1>


      {/* About Company */}
      {/* About Company */}
<div style={styles.section}>
  <h2 style={styles.subHeading}>
    {isArabic ? 'مكان للنمو' : 'A Place to Grow'}
  </h2>
  <p style={styles.paragraph}>
    {isArabic
      ? 'شركة الثقيل هي شركة تعاونية تدير مجموعة متنوعة من العلامات التجارية في مجالات متعددة مثل التقنية، والتسويق، والتجارة، وغيرها. نحن أكثر من مجرد جهة عمل — نحن بيئة ديناميكية تضم مفكرين مبدعين ومبتكرين يتعاونون من أجل بناء المستقبل.'
      : 'Al Thakeel is a cooperative company that manages a wide range of brands across industries such as technology, marketing, commerce, and more. We’re more than just an employer — we’re a dynamic environment of creative thinkers and innovators working together to shape the future.'}
  </p>
  <p style={styles.paragraph}>
    {isArabic
      ? 'من خلال انضمامك إلى الثقيل، ستحصل على فرصة للعمل مع علامات تجارية متعددة، وتطوير مهاراتك من خلال مشاريع واقعية، والمساهمة في نمو مجموعة متنوعة من القطاعات.'
      : 'By joining Al Thakeel, you’ll have the opportunity to collaborate across multiple brands, develop your skills through real-world projects, and contribute to the growth of diverse industries.'}
  </p>
</div>


      {/* Job Opening */}
      <div style={styles.section}>
        <h2 style={styles.subHeading}>
          {isArabic ? 'نبحث عن موظف' : 'We\'re Hiring'}
        </h2>
        <div style={styles.jobCard}>
          <div style={styles.jobTitle}>
            {isArabic ? 'تنفيذي تسويق رقمي' : 'Digital Marketing Executive'}
          </div>
          <div style={styles.jobDesc}>
            {isArabic
              ? 'نبحث عن تنفيذي تسويق رقمي مبدع واستراتيجي لتخطيط وتنفيذ الحملات، وإدارة وسائل التواصل الاجتماعي، وتحسين محركات البحث، والإعلانات على Google، والمساهمة في نمو الحضور الرقمي لعدة علامات تجارية.'
              : 'We are looking for a creative and strategic digital marketing executive to plan and execute campaigns, manage social media, SEO, Google Ads, and help grow the online presence of multiple brands.'}
          </div>
          <button onClick={scrollToForm} style={styles.applyButton}>
            {isArabic ? 'قدّم الآن' : 'Apply Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
