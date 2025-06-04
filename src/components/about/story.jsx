import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LogoStorySection = () => {
  const { language } = useLanguage(); // Assuming 'en' or 'ar'

  const isArabic = language === 'ar';

  const containerStyle = {
    fontFamily:'Montserrat, sans-serif',
    padding: '20px 20px',
    backgroundColor: '#f5f5f5',
    color: '#1a1a1a',
    lineHeight: '1.6',
    textAlign: 'center',
    direction: isArabic ? 'rtl' : 'ltr',
  };

  const sectionTitle = {
    fontSize: '35px',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontFamily:'Montserrat, sans-serif',
    color: '#0a2540',
  };

  const paragraphStyle = {
    maxWidth: '1000px',
    margin: isArabic ? '0 auto 30px auto' : '0 auto 30px auto',
    fontSize: '16px',
    color: '#333',
    textAlign: 'justify',
    fontFamily:'Montserrat, sans-serif',
  };

  const videoContainer = {
    marginTop: '0px',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '16px',
    overflow: 'hidden',
  };

  const videoStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  return (
    <div style={containerStyle}>
      <h2 style={sectionTitle}>
        {isArabic ? 'رمز "عنخ" المصري' : 'The Egyptian "ANKH"'}
      </h2>

      <p style={paragraphStyle}>
        {isArabic
          ? 'اخترنا رمز العنخ المصري ليكون جوهر شعار الثقيل لأنه، على مدار آلاف السنين، كان يمثل رمزاً للحياة والحيوية والقوة الدائمة — وهي القيم التي نغرسها في كل علامة تجارية نعمل معها. وكما يرمز اتحاد الحلقة مع الخط المستقيم في العنخ إلى التقاء السماء بالأرض، فإننا نوحد الرؤية الإبداعية مع الاستراتيجية المتينة لمنح علامتك التجارية "الحياة".'
          : 'We chose the Egyptian Ankh as the heart of Althakeel’s logo because, for millennia, it has stood as the ultimate emblem of life, vitality, and enduring strength — qualities we breathe into every brand we touch. Just as the Ankh’s loop and cross unite heaven and earth, our work fuses creative vision with solid strategy to “give life” to your business.'}
      </p>

      <p style={paragraphStyle}>
        {isArabic
          ? 'من خلال دمج رمز العنخ، نعلن أن الثقيل لا يكتفي ببناء العلامات التجارية، بل يحوّلها — نغرس فيها الطاقة والاستمرارية والهدف، لتزدهر في السوق الحديث. ليس مجرد رمز؛ إنه وعدنا: أن نمنح علامتك التجارية القوة وروح الحياة ذاتها.'
          : 'By embedding the Ankh, we’re signaling that Althakeel doesn’t just build brands; we transform them — infusing energy, longevity, and purpose so they flourish in today’s market. It’s not just a symbol; it’s our promise: to empower your brand with the strength and spirit of life itself.'}
      </p>

      <div style={videoContainer}>
        <video style={videoStyle} autoPlay loop muted playsInline>
          <source
            src="https://res.cloudinary.com/dm8z5zz5s/video/upload/v1748515793/Ankh_Animation_2_Compressed_kxp2en.mp4"
            type="video/mp4"
          />
          {isArabic ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
        </video>
      </div>
    </div>
  );
};

export default LogoStorySection;
