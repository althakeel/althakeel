import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const Purpose = () => {
  const { language } = useLanguage(); // Get language from context
  const isArabic = language === 'ar';

  const containerStyle = {
    backgroundImage: `url('https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748502989/BG_pumg7l.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: isArabic ? 'right' : 'left',
    flexDirection: 'column',
    direction: isArabic ? 'rtl' : 'ltr',
    fontFamily:'Montserrat, sans-serif',
    
  };

  const contentWrapperStyle = {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px',
    flexDirection: 'column',
    fontFamily:'Montserrat, sans-serif',
  };

  const sectionStyle = {
    flex: '1 1 45%',
    minWidth: '280px',
  };

  const headingStyle = {
    fontSize: '42px',
    fontWeight: '700',
    marginBottom: '0px',
    textAlign: 'center',
    fontFamily:'Montserrat, sans-serif',
  };

  const titleStyle = {
    fontSize: '20px',
    fontWeight: '500',
    marginBottom: '10px',
    fontFamily:'Montserrat, sans-serif',
  };

  const textStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#e0e0e0',
    fontFamily:'Montserrat, sans-serif',
  };

  const content = {
    en: {
      heading: 'Purpose',
      sections: [
        {
          title: 'Service Excellence',
          text:
            'At Al Thakeel Group, our pursuit of excellence is driven by our people—employees, partners, and customers. We foster a culture rooted in integrity, inclusivity, and equal opportunity, empowering our diverse team to deliver meaningful experiences and uphold the highest standards in every endeavor.',
        },
        {
          title: 'Growth',
          text:
            'We are passionate learners, always striving to evolve. Our commitment to continuous improvement fuels personal accountability, professional development, and sustainable growth—for both our people and the business.',
        },
        {
          title: 'Partnership',
          text:
            'Strong relationships are the foundation of Al Thakeel. We believe in building genuine, long-term partnerships through empathy, collaboration, and a shared vision—creating lasting value for the communities we serve.',
        },
        {
          title: 'Innovation',
          text:
            'Curiosity and proactive thinking define our approach to progress. We continuously refine our strategies and operations, leveraging innovation to deliver smarter solutions and greater value for our partners, customers, and stakeholders.',
        },
      ],
    },
    ar: {
      heading: 'الغاية',
      sections: [
        {
          title: 'التميز في الخدمة',
          text:
            'في مجموعة الثقيل، يسعى موظفونا وشركاؤنا وعملاؤنا إلى تحقيق التميز. نحن نغرس ثقافة قائمة على النزاهة والشمول وتكافؤ الفرص، مما يمكّن فريقنا المتنوع من تقديم تجارب ذات مغزى والحفاظ على أعلى المعايير في كل مسعًى.',
        },
        {
          title: 'النمو',
          text:
            'نحن متعلمون شغوفون، نسعى دائمًا للتطور. التزامنا بالتحسين المستمر يعزز المسؤولية الفردية والتنمية المهنية والنمو المستدام لفريقنا وأعمالنا.',
        },
        {
          title: 'الشراكة',
          text:
            'العلاقات القوية هي أساس مجموعة الثقيل. نؤمن ببناء شراكات حقيقية وطويلة الأمد من خلال التعاطف والتعاون ورؤية مشتركة، لخلق قيمة دائمة للمجتمعات التي نخدمها.',
        },
        {
          title: 'الابتكار',
          text:
            'يُحدد فضولنا وتفكيرنا الاستباقي نهجنا نحو التقدم. نحن نُجري تحسينات مستمرة على استراتيجياتنا وعملياتنا، ونستفيد من الابتكار لتقديم حلول أذكى وقيمة أكبر لشركائنا وعملائنا وأصحاب المصلحة.',
        },
      ],
    },
  };

  const currentContent = content[language] || content['en'];

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <h2 style={headingStyle}>{currentContent.heading}</h2>
        <div style={{ ...contentWrapperStyle, flexDirection: 'row' }}>
          {currentContent.sections.map((section, index) => (
            <div key={index} style={sectionStyle}>
              <h3 style={titleStyle}>{section.title}</h3>
              <p style={textStyle}>{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Purpose;
