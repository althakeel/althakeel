import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const postsData = {
  en: [
    {
      id: 'post1',
      title: 'Inside al Thakeel: Building a Multi-Brand Ecosystem That Scales',
      description:
        'Explore how al Thakeel manages and nurtures multiple unique brands under one umbrella. This blog post highlights how we ensure quality, innovation, and customer satisfaction while scaling across different e-commerce platforms.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868061/1_z1xjol.webp',
    },
    {
      id: 'post2',
      title: 'How Your Brand Can Grow with al Thakeel: Partner With Us Today',
      description:
        'Looking to expand your reach? Learn how businesses can collaborate with al Thakeel through our "Partner With Us" program. From logistics support to digital marketing, we help brands thrive in competitive online markets.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868063/2_vqwpfa.webp',
    },
    {
      id: 'post3',
      title: 'The Power of Diversified Selling: Why al Thakeel Chooses Multi-Platform E-Commerce',
      description:
        'Discover why al Thakeel embraces a multi-platform strategy for online selling. We discuss the benefits of diversification, from reaching wider audiences to reducing risk, and how this strategy leads to long-term success.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868070/3_roud0b.webp',
    },
    {
      id: 'post4',
      title: 'Success Stories: Brands That Grew with al Thakeel',
      description:
        'See how small and mid-sized businesses have scaled up through their partnership with al Thakeel. This post shares real examples of growth in sales, visibility, and market reach.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868083/4_b7y8ft.webp',
    },
    {
      id: 'post5',
      title: 'What Makes al Thakeel a Unique Partner for Your Business?',
      description:
        'Uncover what sets al Thakeel apart as a strategic business partner. We go beyond distribution—offering expertise in brand positioning, platform optimization, and customer engagement.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868091/5_u1wvxc.webp',
    },
    {
      id: 'post6',
      title: 'From Concept to Customer: How al Thakeel Helps Brands Launch Fast',
      description:
        'Launching a product doesn’t have to take months. Learn how al Thakeel accelerates the go-to-market journey for new and existing brands with fast-track tools, platform access, and operational support.',
      image:
        'https://res.cloudinary.com/dnpwsutir/image/upload/v1748337581/Business_man_is_making_a_speech_in_front_of_a_big_audience_at_a_conference_hall___Premium_AI-generated_image_ur4j3y.jpg',
    },
  ],
  ar: [
    {
      id: 'post1',
      title: 'داخل الثقيل: بناء نظام بيئي متعدد العلامات التجارية يمكن توسيعه',
      description:
        'استكشف كيف تدير الثقيل وتعتني بعدة علامات تجارية فريدة تحت مظلة واحدة. تبرز هذه المقالة كيف نضمن الجودة والابتكار ورضا العملاء أثناء التوسع عبر منصات التجارة الإلكترونية المختلفة.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868061/1_z1xjol.webp',
    },
    {
      id: 'post2',
      title: 'كيف يمكن لعلامتك التجارية النمو مع الثقيل: شارك معنا اليوم',
      description:
        'هل ترغب في توسيع نطاق عملك؟ تعرف على كيفية تعاون الشركات مع الثقيل من خلال برنامج "شارك معنا". من الدعم اللوجستي إلى التسويق الرقمي، نساعد العلامات التجارية على الازدهار في الأسواق الإلكترونية التنافسية.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868063/2_vqwpfa.webp',
    },
    {
      id: 'post3',
      title: 'قوة البيع المتنوع: لماذا تختار الثقيل التجارة الإلكترونية متعددة المنصات',
      description:
        'اكتشف لماذا تتبنى الثقيل استراتيجية متعددة المنصات للبيع عبر الإنترنت. نناقش فوائد التنويع، من الوصول إلى جمهور أوسع إلى تقليل المخاطر، وكيف تقود هذه الاستراتيجية إلى نجاح طويل الأمد.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868070/3_roud0b.webp',
    },
    {
      id: 'post4',
      title: 'قصص نجاح: علامات تجارية نمت مع الثقيل',
      description:
        'شاهد كيف تمكنت الشركات الصغيرة والمتوسطة من التوسع من خلال شراكتها مع الثقيل. تشارك هذه المقالة أمثلة حقيقية عن النمو في المبيعات والرؤية ونطاق السوق.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868083/4_b7y8ft.webp',
    },
    {
      id: 'post5',
      title: 'ما الذي يجعل الثقيل شريكًا فريدًا لعملك؟',
      description:
        'اكتشف ما الذي يميز الثقيل كشريك أعمال استراتيجي. نحن نتجاوز التوزيع — نقدم خبرة في وضع العلامة التجارية، تحسين المنصات، وتفاعل العملاء.',
      image:
        'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748868091/5_u1wvxc.webp',
    },
    {
      id: 'post6',
      title: 'من الفكرة إلى العميل: كيف يساعد الثقيل العلامات التجارية على الإطلاق بسرعة',
      description:
        'لا يجب أن يستغرق إطلاق منتج شهورًا. تعرف على كيفية تسريع الثقيل رحلة الوصول إلى السوق للعلامات الجديدة والقائمة باستخدام أدوات تسريع، وصول إلى المنصات، ودعم تشغيلي.',
      image:
        'https://res.cloudinary.com/dnpwsutir/image/upload/v1748337581/Business_man_is_making_a_speech_in_front_of_a_big_audience_at_a_conference_hall___Premium_AI-generated_image_ur4j3y.jpg',
    },
  ],
};

const texts = {
  en: {
    blogTitles: 'Blog Titles',
    close: 'Close',
  },
  ar: {
    blogTitles: 'عناوين المدونة',
    close: 'إغلاق',
  },
};

const Blog = () => {
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const posts = postsData[language] || postsData.en;
  const t = texts[language] || texts.en;

  const refs = useRef(posts.reduce((acc, post) => {
    acc[post.id] = React.createRef();
    return acc;
  }, {}));

  const [activePost, setActivePost] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const scrollToPost = (id) => {
    refs.current[id]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      dir={isArabic ? 'rtl' : 'ltr'}
      style={{
        background: '#f5f5f5',
        fontFamily: "'Poppins', sans-serif",
        padding: isMobile ? '20px 10px' : '40px 20px',
        boxSizing: 'border-box',
        minHeight: '100vh',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: 30,
          boxSizing: 'border-box',
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: isMobile ? '100%' : 250,
            position: isMobile ? 'relative' : 'sticky',
            top: 20,
            background: '#fff',
            padding: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            borderRadius: 8,
            boxSizing: 'border-box',
            textAlign: isArabic ? 'right' : 'left',
          }}
        >
          <h3
            style={{
              marginBottom: 20,
              color: '#000',
              fontSize: 18,
              fontWeight: '600',
            }}
          >
            {t.blogTitles}
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              fontSize: 14,
              color: '#0077b6',
            }}
          >
            {posts.map((post) => (
              <li key={post.id} style={{ marginBottom: 12 }}>
                <button
                  onClick={() => scrollToPost(post.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    color: '#0077b6',
                    textAlign: 'inherit',
                    fontSize: isMobile ? 14 : 'inherit',
                    width: '100%',
                    fontWeight: '500',
                    whiteSpace: 'normal',
                  }}
                  aria-label={post.title}
                >
                  {post.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Blog List */}
        <main
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            boxSizing: 'border-box',
          }}
        >
          {posts.map((post) => (
            <article
              key={post.id}
              ref={refs.current[post.id]}
              onClick={() => setActivePost(post)}
              style={{
                background: '#fff',
                padding: 20,
                borderRadius: 10,
                cursor: 'pointer',
                boxShadow: '0 6px 18px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: isMobile ? 'column' : isArabic ? 'row-reverse' : 'row',
                alignItems: 'center',
                gap: 20,
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              aria-label={post.title}
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                style={{
                  width: isMobile ? '100%' : 140,
                  height: 140,
                  objectFit: 'cover',
                  borderRadius: 10,
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  textAlign: isArabic ? 'right' : 'left',
                  flex: 1,
                }}
              >
                <h4
                  style={{
                    margin: '0 0 10px 0',
                    fontWeight: 700,
                    fontSize: isMobile ? 18 : 20,
                    color: '#03045e',
                    lineHeight: 1.2,
                  }}
                >
                  {post.title}
                </h4>
                <p
                  style={{
                    margin: 0,
                    color: '#666',
                    fontSize: isMobile ? 14 : 15,
                    lineHeight: 1.5,
                    maxHeight: 70,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </main>
      </div>

      {/* Modal */}
      {activePost && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          tabIndex={-1}
          onClick={() => setActivePost(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: 20,
            boxSizing: 'border-box',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 12,
              maxWidth: 600,
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: 30,
              boxSizing: 'border-box',
              textAlign: isArabic ? 'right' : 'left',
            }}
          >
            <button
              onClick={() => setActivePost(null)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#0077b6',
                fontSize: 16,
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: 20,
                float: isArabic ? 'left' : 'right',
              }}
              aria-label={t.close}
            >
              {t.close} ×
            </button>
            <h2
              id="modal-title"
              style={{
                marginTop: 0,
                marginBottom: 20,
                color: '#023e8a',
                fontWeight: '700',
              }}
            >
              {activePost.title}
            </h2>
            <img
              src={activePost.image}
              alt={activePost.title}
              style={{
                width: '100%',
                borderRadius: 12,
                marginBottom: 20,
                objectFit: 'cover',
              }}
            />
            <p
              style={{
                fontSize: 16,
                color: '#333',
                lineHeight: 1.6,
                whiteSpace: 'pre-line',
              }}
            >
              {activePost.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
