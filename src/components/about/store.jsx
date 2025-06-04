import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const StoreSection = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const content = isRTL
    ? {
        heading: 'فروعنا',
        subheading: 'اكتشف الأناقة في جميع أنحاء الإمارات',
        description:
          'تتوزع متاجر مجموعة الثقيل استراتيجيًا في مختلف أنحاء الإمارات، لتوفر وصولاً سهلاً إلى مجموعة مختارة من العلامات التجارية مثل نكسو، فيلور، آرميد، غرام، ومتجر 1920. سواء كنت في دبي، أبوظبي أو أي مكان آخر — استكشف أسلوب الحياة والموضة والأناقة تحت مظلة واحدة.',
        buttonText: 'عرض على خرائط جوجل',
      }
    : {
        heading: 'Our Locations',
        subheading: 'Experience Style Across the UAE',
        description:
          "Al Thakeel Group's stores are strategically located across the UAE, offering easy access to a curated selection of brands such as Nexso, Velore, Armed, Gharaam, and Store 1920. Whether you're in Dubai, Abu Dhabi, or beyond — explore lifestyle, fashion, and elegance, all under one umbrella.",
        buttonText: 'View on Google Maps',
      };

  const handleMapRedirect = () => {
    window.open('https://maps.app.goo.gl/qwP8v1hsTvKgtwQn6', '_blank');
  };

  return (
    <section
      style={{
        width: '100%',
        padding: '40px 20px 60px 20px',
        backgroundColor: '#fff',
        direction: isRTL ? 'rtl' : 'ltr',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
        }}
      >
        {/* Image Section */}
        <div
          style={{
            flex: '1 1 500px',
            minWidth: '300px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ width: '100%', overflow: 'hidden' }}>
            <img
              src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501626/Artboard_8_mqey8w.jpg"
              alt="Store Locations Map"
              style={{
                width: '100%',
                height: 'auto',
                maxWidth: '100%',
                borderRadius: '8px',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Content Section */}
        <div
          style={{
            flex: '1 1 500px',
            minWidth: '300px',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <h2
            style={{
              fontSize: '35px',
              fontWeight: '700',
              color: '#1e1e1e',
              marginBottom: '5px',
            }}
          >
            {content.heading}
          </h2>
          <h3
            style={{
              fontSize: '25px',
              fontWeight: '500',
              color: '#1e1e1e',
              marginBottom: '10px',
              lineHeight: '1.4',
            }}
          >
            {content.subheading}
          </h3>
          <p
            style={{
              fontSize: '16px',
              color: '#444',
              lineHeight: '1.8',
              marginBottom: '30px',
            }}
          >
            {content.description}
          </p>
          <button
            onClick={handleMapRedirect}
            style={{
              backgroundColor: '#b79e62',
              color: '#fff',
              padding: '12px 24px',
              fontSize: '1rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            {content.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
