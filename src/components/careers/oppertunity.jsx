import React from 'react';

const EmiratiOpportunities = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '60px 80px', backgroundColor: '#fff' }}>
      <div style={{ width: '50%', paddingRight: '40px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: '600', color: '#0B1F60', lineHeight: '1.2' }}>
          OPPORTUNITIES FOR EMIRATI NATIONALS
        </h1>
        <p style={{ fontSize: '20px', color: '#444', marginTop: '20px' }}>
          Explore how our Emiratisation initiatives are working towards bringing the UAE's Vision 2021 to fruition.
        </p>
        <div style={{ marginTop: '40px', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: '18px', color: '#c6a664', fontWeight: '500', letterSpacing: '2px' }}>
            EXPLORE NOW
          </span>
          <div style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#FFF3EC',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '15px'
          }}>
            <span style={{ fontSize: '24px', color: '#c6a664' }}>&#8250;</span>
          </div>
        </div>
      </div>
      <div style={{ width: '50%' }}>
        <img
          src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774842/2_gaizou.webp" // Replace with actual image path
          alt="Emirati Opportunities"
          style={{ width: '100%', height: 'auto', borderRadius: '4px' }}
        />
      </div>
    </div>
  );
};

export default EmiratiOpportunities;
