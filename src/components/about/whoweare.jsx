import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const WhoWeAre = () => {
  const [hovered, setHovered] = useState(null);
  const { language } = useLanguage();
  const isArabic = language === 'ar';

  const content = {
    en: {
      headingBold: 'We are',
      headingLight: 'Al Thakeel Group',
      paragraph1:
        'Al Thakeel is a dynamic UAE-based holding group with a growing footprint across the region. We specialize in curating and managing a portfolio of standout brands that cater to a wide range of lifestyles and markets.',
      paragraph2:
        'Our collection includes leading names such as Nexso, Velore Paris, Armed, Gharaam, and Store 1920. Each brand under Al Thakeel reflects a commitment to innovation, quality, and modern consumer values—shaping exceptional experiences across fashion, lifestyle, and retail.',
      bottom:
        'Committed to excellence, Al Thakeel Group partners with leading international and regional brands to deliver unique lifestyle experiences across the UAE and GCC. We take pride in shaping the future of retail and innovation, bringing you trendsetting brands that resonate with modern tastes and aspirations.',
    },
    ar: {
      headingBold: 'نحن',
      headingLight: 'مجموعة الثقيل',
      paragraph1:
        'مجموعة الثقيل هي مجموعة إماراتية رائدة تنمو بسرعة في المنطقة. نتميز بإدارة علامات تجارية مميزة تلبي مختلف أنماط الحياة وتخدم أسواقًا متعددة.',
      paragraph2:
        'تشمل مجموعتنا علامات مثل نكسو، فيلور باريس، آرمِد، غرام، وستور 1920. جميعها تجسد الابتكار والجودة وتواكب قيم المستهلك العصري، لنقدم تجارب استثنائية في عالم الأزياء ونمط الحياة والتجزئة.',
      bottom:
        'نسعى للتميّز من خلال شراكات مع علامات إقليمية وعالمية لنقدم تجارب فريدة في الإمارات والخليج. نفخر بأن نكون في طليعة التغيير في قطاع التجزئة ونقدم علامات تواكب الذوق الحديث.',
    },
  };

  const current = content[isArabic ? 'ar' : 'en'];

  return (
    <div style={{
      flexDirection: isArabic ? 'row-reverse' : 'row',
direction:'ltr'
    }}>
    <div
      style={{
        backgroundColor: '#fff',
        paddingTop: '20px',
        paddingBottom: '20px',
        flexDirection: isArabic ? 'row-reverse' : 'row',
        fontFamily:'Montserrat, sans-serif',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '40px',
            padding: '40px 0',
            flexWrap: 'wrap',
            flexDirection: 'row',
          }}
        >
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: isArabic ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              maxWidth: '500px',
              width: '100%',
              textAlign: isArabic ? 'right' : 'left',
              order: isArabic ? 1 : 2,
            }}
          >
            <h2 style={{ fontSize: '42px', marginBottom: '20px', lineHeight: 1.3 , fontFamily:'Montserrat, sans-serif',
}}>
              <span style={{ fontWeight: '600',fontFamily:'Montserrat, sans-serif', }}>{current.headingBold}</span>
              <br />
              <span style={{ fontWeight: '500',fontFamily:'Montserrat, sans-serif',fontSize:'35px' }}>{current.headingLight}</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.8', marginBottom: '20px',fontFamily:'Montserrat, sans-serif',textAlign:'justify' }}>
              {current.paragraph1}
            </p>
            <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.8',fontFamily:'Montserrat, sans-serif',textAlign:'justify' }}>
              {current.paragraph2}
            </p>
          </motion.div>

          {/* Image Column */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              height: '600px',
              order: isArabic ? 2 : 1,
              textAlign: isArabic ? 'right' : 'center',

            }}
          >
            <motion.img
              whileHover={{ scale: 1.01 }}
              onMouseEnter={() => setHovered('front')}
              onMouseLeave={() => setHovered(null)}
              transition={{ duration: 0.4 }}
              src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501625/Artboard_1_dvrtxp.jpg"
              alt="Fashion Models"
              style={{
                width: '48%',
                borderRadius: '5px',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: hovered === 'front' ? 5 : 4,
                cursor: 'pointer',
              }}
            />
            <motion.img
              whileHover={{ scale: 1.01 }}
              onMouseEnter={() => setHovered('back')}
              onMouseLeave={() => setHovered(null)}
              transition={{ duration: 0.5 }}
              src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501625/Artboard_2_s8t1gv.jpg"
              alt="Minimal Vase"
              style={{
                width: '50%',
                borderRadius: '5px',
                objectFit: 'cover',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                zIndex: hovered === 'back' ? 5 : 4,
                cursor: 'pointer',
              }}
            />
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            textAlign: isArabic ? 'right' : 'center',
            padding: '20px 0 60px',
          }}
        >
          <p
            style={{
              fontSize: '16px',
              color: '#333',
              maxWidth: '1000px',
              margin: '0 auto 30px',
              fontFamily:'Montserrat, sans-serif',
              lineHeight: '1.8',
              textAlign: isArabic ? 'right' : 'center',
            }}
          >
            {current.bottom}
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            {[
              'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501625/Artboard_4_copy_2_kzgny3.jpg',
              'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501625/Artboard_4_copy_yfqhjy.jpg',
              'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501624/Artboard_4_copy_2_kzgny3.jpg',
            ].map((src, i) => (
              <motion.img
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                src={src}
                alt={`Luxury Image ${i + 1}`}
                style={{
                  width: i === 1 ? '320px' : '280px',
                  maxWidth: '100%',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default WhoWeAre;
