import React from 'react';

const EmiratiOpportunities = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '60px 40px',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  };

  const textContainerStyle = {
    flex: '1 1 500px',
    paddingRight: '40px',
    marginBottom: '40px',
  };

  const imageContainerStyle = {
    flex: '1 1 500px',
  };

  const headingStyle = {
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 600,
    color: '#0B1F60',
    lineHeight: '1.2',
  };

  const paragraphStyle = {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
    color: '#444',
    marginTop: '20px',
  };

  const exploreContainerStyle = {
    marginTop: '40px',
    display: 'flex',
    alignItems: 'center',
  };

  const exploreTextStyle = {
    fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
    color: '#c6a664',
    fontWeight: 500,
    letterSpacing: '2px',
  };

  const circleButtonStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: '#FFF3EC',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '15px',
  };

  const arrowStyle = {
    fontSize: '24px',
    color: '#c6a664',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={headingStyle}>
          OPPORTUNITIES FOR EMIRATI NATIONALS
        </h1>
        <p style={paragraphStyle}>
          Explore how our Emiratisation initiatives are working towards bringing the UAE's Vision 2021 to fruition.
        </p>
        <div style={exploreContainerStyle}>
          <span style={exploreTextStyle}>EXPLORE NOW</span>
          <div style={circleButtonStyle}>
            <span style={arrowStyle}>&#8250;</span>
          </div>
        </div>
      </div>
      <div style={imageContainerStyle}>
        <img
          src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774842/2_gaizou.webp"
          alt="Emirati Opportunities"
          style={imageStyle}
        />
      </div>
    </div>
  );
};

export default EmiratiOpportunities;
