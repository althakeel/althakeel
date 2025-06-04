import React, { useState } from 'react';

const Brands = () => {
  const brands = [
    {
      name: 'Armed',
      logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748358990/Armed_LOGO_1_twm8pm.png',
      description: 'Premium tactical gear and apparel built for durability and performance.',
      link: '/brands/armed',
    },
    {
      name: 'Brand 2',
      logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748358097/Logo-02_ldbudb.png',
      description: 'Innovative fashion that blends tradition with modern elegance.',
      link: '/brands/brand2',
    },
    {
      name: 'Brand 3',
      logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748336466/Screenshot_2025-05-27_at_1.00.45_PM_hky5xf.png',
      description: 'Sustainable style crafted with quality and conscience.',
      link: '/brands/brand3',
    },
    {
      name: 'Brand 4',
      logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748358096/cropped-Logo_02-03-2-1_rqstm5.png',
      description: 'Where heritage meets cutting-edge textile design.',
      link: '/brands/brand4',
    },
    {
      name: 'Brand 5',
      logo: 'https://res.cloudinary.com/dnpwsutir/image/upload/v1748358097/Store1920-Logo_tgkfhx.png',
      description: 'Everyday essentials redefined with elegance and simplicity.',
      link: '/brands/brand5',
    },
  ];

  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div style={{ background: '#FFFFFF', padding: '60px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#021C35', // Navy Blue
          marginBottom: '10px',
        }}>
          Our Brands
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#1D1D1D', // Charcoal
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>
          We collaborate with exceptional brands to bring quality, innovation, and purpose to every product.
        </p>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '30px',
      }}>
        {brands.map(({ name, logo, description, link }, index) => (
          <div
            key={index}
            style={{
              width: '360px',
              height: '360px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
              background: '#FFFFFF', // White
              position: 'relative',
              transition: 'box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              const overlay = e.currentTarget.querySelector('.overlay');
              overlay.style.opacity = 1;
              overlay.style.visibility = 'visible';
            }}
            onMouseLeave={(e) => {
              const overlay = e.currentTarget.querySelector('.overlay');
              overlay.style.opacity = 0;
              overlay.style.visibility = 'hidden';
            }}
          >
           <div style={{
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}>
  <img
    src={logo}
    alt={name}
    style={{
      maxWidth: '80%',
      maxHeight: '80%',
      objectFit: 'contain',
      display: 'block',
    }}
    draggable="false"
  />
</div>


            <div
              className="overlay"
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 10,
                backgroundColor: 'rgba(2, 28, 53, 0.75)', 
                color: '#FFFFFF',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px',
                textAlign: 'center',
                opacity: 0,
                visibility: 'hidden',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
                backdropFilter: 'blur(2px)',              // 👈 Adds blur
                WebkitBackdropFilter: 'blur(8px)',        // 👈 Safari support
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                marginBottom: '14px',
                color: '#FFFFFF',
              }}>
                {name}
              </h3>
              <p style={{
                fontSize: '1rem',
                marginBottom: '18px',
                lineHeight: '1.5',
                color: '#FFFFFF',
              }}>
                {description}
              </p>
              <a
                href={link}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                style={{
                  padding: '10px 22px',
                  backgroundColor: hoveredButton === index ? '#C6A664' : '#FFFFFF',
                  color: hoveredButton === index ? '#1D1D1D' : '#021C35',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'all 0.3s ease',
                }}
              >
                Visit Brand
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
