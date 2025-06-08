import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Values = () => {
  const { language } = useLanguage();

  const isRTL = language === 'ar';
  const dir = isRTL ? 'rtl' : 'ltr';

  const translations = {
    en: {
      heading: 'Values',
      values: [
        { title: 'Passion', description: 'for purpose learning' },
        { title: 'Commitment', description: 'to creating long term relationship' },
        { title: 'Curiosity', description: 'for productivity' },
        { title: 'Accountability', description: 'to drive performance' },
        { title: 'Proactiveness', description: 'in problem solving' },
        { title: 'Empathetic', description: 'approach to leadership & community' },
        { title: 'Integrity', description: 'to infinity' },
        { title: 'Diversity & Inclusion', description: 'to foster excellence' },
      ],
    },
    ar: {
      heading: 'القيم',
      values: [
        { title: 'الشغف', description: 'من أجل التعلم الهادف' },
        { title: 'الالتزام', description: 'ببناء علاقات طويلة الأمد' },
        { title: 'الفضول', description: 'من أجل الإنتاجية' },
        { title: 'المساءلة', description: 'لدفع الأداء' },
        { title: 'الاستباقية', description: 'في حل المشكلات' },
        { title: 'التعاطف', description: 'في القيادة والمجتمع' },
        { title: 'النزاهة', description: 'إلى الأبد' },
        { title: 'التنوع والشمول', description: 'لتعزيز التميز' },
      ],
    },
  };

  const images = [
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504990/3_yjwzuz.svg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504991/4_whgike.svg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504991/5_kmwh3r.svg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504992/6_v6a6i5.svg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504992/7_szztoc.svg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504993/8_u0zepp.svg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504990/2_cipirz.svg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748504990/1_tvifcq.svg',
  ];

  const { heading, values } = translations[language] || translations.en;

  const containerStyle = {
    padding: '40px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    direction: dir,
  };

  const headingStyle = {
    fontSize: '36px',
    fontWeight: '500',
    color: '#000',
    marginBottom: '40px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '30px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
  };

  const iconStyle = {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
    marginBottom: '10px',
  };

  const titleStyle = {
    fontWeight: '600',
    fontSize: '16px',
    color: '#0f172a',
    marginBottom: '5px',
    textAlign: 'center',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#64748b',
    textAlign: 'center',
  };

  return (
    <section style={containerStyle} dir={dir}>
      <h2 style={headingStyle}>{heading}</h2>
      <div style={gridStyle}>
        {values.map((item, index) => (
          <div key={index} style={cardStyle}>
            <img src={images[index]} alt={item.title} style={iconStyle} />
            <div style={titleStyle}>{item.title}</div>
            <div style={descriptionStyle}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
