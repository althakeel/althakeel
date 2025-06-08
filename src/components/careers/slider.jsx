import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const newsItems = [
  {
    id: 1,
    title_en: "KING’S COLLEGE HOSPITAL LONDON, DUBAI HILLS OFFICIAL OPENING",
    title_ar: "الافتتاح الرسمي لمستشفى كينجز كوليدج لندن، دبي هيلز",
    date: "Mar-25-2019",
    image: "https://res.cloudinary.com/dnpwsutir/image/upload/v1748337581/Business_man_is_making_a_speech_in_front_of_a_big_audience_at_a_conference_hall___Premium_AI-generated_image_ur4j3y.jpg",
  },
  {
    id: 2,
    title_en: "GAP KUWAIT WINS CUSTOMER SATISFACTION INDEX AWARD",
    title_ar: "جاب الكويت تفوز بجائزة مؤشر رضا العملاء",
    date: "Feb-14-2019",
    image: "https://res.cloudinary.com/dnpwsutir/image/upload/v1748337584/WTM-Awards-Ceremony-Ideas-min_xfzlsf.png",
  },
  {
    id: 3,
    title_en: "GLOBAL CINEMA EXHIBITOR CINÉPOLIS LAUNCHES FIRST THEATRE IN BAHRAIN",
    title_ar: "سينيبوليس تطلق أول مسرح لها في البحرين",
    date: "Feb-05-2019",
    image: "https://res.cloudinary.com/dnpwsutir/image/upload/v1748337580/A_Successful_Business_Team_Holding_a_Trophy_Stock_Photo_-_Image_of_business_career__12041802_owva7r.jpg",
  },
  {
    id: 4,
    title_en: "GLOBAL CINÉPOLIS ENTERS THE GULF WITH AL TAYER GROUP",
    title_ar: "سينيبوليس تدخل الخليج مع مجموعة الطاير",
    date: "Sep-05-2018",
    image: "https://res.cloudinary.com/dnpwsutir/image/upload/v1748337581/Business_man_is_making_a_speech_in_front_of_a_big_audience_at_a_conference_hall___Premium_AI-generated_image_ur4j3y.jpg",
  },
  {
    id: 6,
    title_en: "NEW MEMBER BENEFITS COMING SOON",
    title_ar: "فوائد جديدة للأعضاء قادمة قريباً",
    date: "May-27-2025",
    image: "https://res.cloudinary.com/dnpwsutir/image/upload/v1748337423/__r2xd3i.jpg",
  },
];

const NewsTicker = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const scrollerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    if (![...styleSheet.cssRules].some(rule => rule.name === 'scroll-ltr')) {
      styleSheet.insertRule(`
        @keyframes scroll-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `, styleSheet.cssRules.length);
    }
    if (![...styleSheet.cssRules].some(rule => rule.name === 'scroll-rtl')) {
      styleSheet.insertRule(`
        @keyframes scroll-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `, styleSheet.cssRules.length);
    }
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.pageX - scroller.offsetLeft;
      scrollLeft.current = scroller.scrollLeft;
      scroller.style.cursor = 'grabbing';
    };

    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const x = e.pageX - scroller.offsetLeft;
      const walk = (x - startX.current) * 2;
      scroller.scrollLeft = scrollLeft.current - walk;
    };

    const onTouchStart = (e) => {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - scroller.offsetLeft;
      scrollLeft.current = scroller.scrollLeft;
    };

    const onTouchMove = (e) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - scroller.offsetLeft;
      const walk = (x - startX.current) * 2;
      scroller.scrollLeft = scrollLeft.current - walk;
    };

    const stopDragging = () => {
      isDragging.current = false;
      scroller.style.cursor = 'grab';
    };

    scroller.addEventListener('mousedown', onMouseDown);
    scroller.addEventListener('mousemove', onMouseMove);
    scroller.addEventListener('mouseup', stopDragging);
    scroller.addEventListener('mouseleave', stopDragging);

    scroller.addEventListener('touchstart', onTouchStart, { passive: true });
    scroller.addEventListener('touchmove', onTouchMove, { passive: true });
    scroller.addEventListener('touchend', stopDragging);

    return () => {
      scroller.removeEventListener('mousedown', onMouseDown);
      scroller.removeEventListener('mousemove', onMouseMove);
      scroller.removeEventListener('mouseup', stopDragging);
      scroller.removeEventListener('mouseleave', stopDragging);
      scroller.removeEventListener('touchstart', onTouchStart);
      scroller.removeEventListener('touchmove', onTouchMove);
      scroller.removeEventListener('touchend', stopDragging);
    };
  }, []);

  return (
    <section style={{ ...styles.section, direction: isRTL ? 'rtl' : 'ltr' }}>
      <style>{`
        .scroll-track {
          animation: ${isRTL ? 'scroll-rtl' : 'scroll-ltr'} 80s linear infinite;
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        * {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>

<h1 style={styles.title}>
  {isRTL ? 'منشورات وسائل التواصل الاجتماعي' : 'SOCIAL MEDIA POSTS'}
</h1>
<p style={styles.subtitle}>
  {isRTL ? 'تحديثات وأخبار من منصات التواصل الاجتماعي' : 'Updates and news from social media platforms'}
</p>


      <div style={styles.scroller} ref={scrollerRef}>
        <div className="scroll-track" style={styles.track}>
          {newsItems.concat(newsItems).map((item, index) => (
            <div key={index} style={{ ...styles.card, backgroundImage: `url(${item.image})` }}>
              <div style={styles.overlay}>
                <span style={styles.date}>{item.date}</span>
                <h2 style={styles.cardTitle}>
                  {isRTL ? item.title_ar : item.title_en}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '1rem 1rem',
    fontFamily: 'Montserrat, sans-serif',
    overflow: 'hidden',
    backgroundColor: '#fafafa',
  },
  title: {
    textAlign: 'center',
    fontSize: '35px',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: '0.5rem',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '25',
    color: '#666',
    marginBottom: '2rem',
    fontFamily: 'Montserrat, sans-serif',

  },
  scroller: {
    overflowX: 'auto',
    overflowY: 'hidden',
    width: '100%',
    display: 'flex',
    WebkitOverflowScrolling: 'touch',
    cursor: 'grab',
  },
  track: {
    display: 'flex',
    gap: '1rem',
    width: 'max-content',
    fontFamily: 'Montserrat, sans-serif',

  },
  card: {
    flex: '0 0 auto',
    width: '300px',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    scrollSnapAlign: 'start',
    fontFamily: 'Montserrat, sans-serif',

  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '1rem',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
    color: '#fff',
    textAlign: 'start',
  },
  date: {
    fontSize: '0.9rem',
    color: '#f90',
    marginBottom: '0.3rem',
    display: 'block',
    fontFamily: 'Montserrat, sans-serif',

  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: 500,
    fontFamily: 'Montserrat, sans-serif',

  },
};

export default NewsTicker;
