import React, { useState } from 'react';

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const mainContainer = {
    display: 'flex',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '50px auto',
  };

  const leftColumn = {
    flex: 1,
    position: 'relative',
    height: '520px',
    // borderRadius: '50px 0 50px 0',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const rightColumn = {
    flex: 1,
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gap: '20px',
    height: '520px',
  };

  const rightImageContainer = {
    position: 'relative',
    // borderRadius: ' 0 50px 0 50px',
    overflow: 'hidden',
    cursor: 'pointer',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.4s ease',
  };

  const imageZoomed = {
    ...imageStyle,
    transform: 'scale(1.05)',
  };

  const overlayBase = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 40, 80, 0.6)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    opacity: 0,
    transform: 'translateY(20px)',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  };

  const overlayVisible = {
    ...overlayBase,
    opacity: 1,
    transform: 'translateY(0)',
  };

  const labelStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const textStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
    maxWidth: '300px',
  };

  const images = [
    {
      label: 'Work with us',
      text: 'Explore exciting career opportunities and join our team.',
      src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774846/3_zrl3lq.webp',
    },
    {
      label: 'Nationalisation',
      text: 'We support national hiring initiatives in the region.',
      src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774871/10_drhon5.webp',
    },
    {
      label: 'Our application process',
      text: 'Learn how to apply and what to expect when you join us.',
      src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774866/9_dw2zxa.webp',
    },
  ];

  return (
    <div style={mainContainer}>
      {/* Left Column */}
      <div
        style={leftColumn}
        onMouseEnter={() => setHoveredIndex(0)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <img
          src={images[0].src}
          alt={images[0].label}
          style={hoveredIndex === 0 ? imageZoomed : imageStyle}
        />
        <div style={hoveredIndex === 0 ? overlayVisible : overlayBase}>
          <div style={labelStyle}>{images[0].label}</div>
          <div style={textStyle}>{images[0].text}</div>
        </div>
      </div>

      {/* Right Column */}
      <div style={rightColumn}>
        {[1, 2].map((i) => (
          <div
            key={i}
            style={rightImageContainer}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={images[i].src}
              alt={images[i].label}
              style={hoveredIndex === i ? imageZoomed : imageStyle}
            />
            <div style={hoveredIndex === i ? overlayVisible : overlayBase}>
              <div style={labelStyle}>{images[i].label}</div>
              <div style={textStyle}>{images[i].text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
