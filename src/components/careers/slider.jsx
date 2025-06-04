import React, { useState, useEffect, useRef } from 'react';
import Expand from '../../../src/images/expand.png';

const Slider = () => {
  const [modalData, setModalData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Drag state refs
  const dragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationRef = useRef(null);

  // Add a `source` field to images for social media origin
  const images = [
    {
      src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774864/8_obypxj.webp',
      title: 'Graduation Ceremony',
      date: '29 May 2025',
      description: 'We recently celebrated the success of over 271 Grow With Us (GWU) graduates...',
      source: 'linkedin',
    },
    {
      src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774861/7_shvqvn.webp',
      title: 'Opening Event',
      date: '30 May 2025',
      description: 'Grand opening of our newest branch in Kuwait...',
      source: 'twitter',
    },
    {
      src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774856/6_v5z2gq.webp',
      title: 'Team Meet',
      date: '26 May 2025',
      description: 'Annual team building activity event.',
      source: 'facebook',
    },
    {
      src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774852/5_a30820.webp',
      title: 'Graduation Ceremony',
      date: '29 May 2025',
      description: 'We recently celebrated the success of over 271 Grow With Us (GWU) graduates...',
      source: 'linkedin',
    },
    {
      src: 'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748774850/4_nsvjl4.webp',
      title: 'Opening Event',
      date: '30 May 2025',
      description: 'Grand opening of our newest branch in Kuwait...',
      source: 'twitter',
    }
  ];

  // Auto slide interval
  useEffect(() => {
    if (dragging.current) return; // pause auto sliding while dragging

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 15000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  // Snap slider to currentIndex position
  useEffect(() => {
    prevTranslate.current = -currentIndex * 320; // width + margin (300 + 20)
    currentTranslate.current = prevTranslate.current;
    setSliderPosition();
  }, [currentIndex]);

  // Helpers for drag
  const getPositionX = (event) =>
    event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;

  const onTouchStart = (event) => {
    dragging.current = true;
    startX.current = getPositionX(event);
    animationRef.current = requestAnimationFrame(animation);
  };

  const onTouchMove = (event) => {
    if (!dragging.current) return;
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startX.current;
    currentTranslate.current = prevTranslate.current + diff;
  };

  const onTouchEnd = () => {
    cancelAnimationFrame(animationRef.current);
    dragging.current = false;
    const movedBy = currentTranslate.current - prevTranslate.current;

    // Slide threshold: 100px
    if (movedBy < -100 && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (movedBy > 100 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Snap back
      currentTranslate.current = prevTranslate.current;
      setSliderPosition();
    }
  };

  const animation = () => {
    setSliderPosition();
    if (dragging.current) requestAnimationFrame(animation);
  };

  const setSliderPosition = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
      containerRef.current.style.transition = dragging.current
        ? 'none'
        : 'transform 0.5s ease-in-out';
    }
  };

  // Social media icons as inline SVGs
  const socialIcons = {
    linkedin: (
      <svg
        width="24"
        height="24"
        // fill="#0A66C2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="LinkedIn"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8.56h4.55v13.94H.22V8.56zM7.49 8.56h4.36v1.9h.06c.61-1.15 2.1-2.37 4.33-2.37 4.63 0 5.48 3.05 5.48 7.01v8.5H17.1v-7.53c0-1.8-.03-4.11-2.5-4.11-2.5 0-2.88 1.96-2.88 3.99v7.65H7.49V8.56z" />
      </svg>
    ),
    twitter: (
      <svg
        width="24"
        height="24"
        // fill="#1DA1F2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Twitter"
      >
        <path d="M23.954 4.57a10.14 10.14 0 01-2.825.775 4.93 4.93 0 002.163-2.724 9.935 9.935 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482 13.936 13.936 0 01-10.11-5.134 4.822 4.822 0 001.523 6.573 4.904 4.904 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.93 4.93 0 01-2.224.084 4.928 4.928 0 004.6 3.417 9.868 9.868 0 01-6.102 2.1c-.398 0-.79-.023-1.17-.067a13.945 13.945 0 007.557 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633A9.936 9.936 0 0024 4.59z" />
      </svg>
    ),
    facebook: (
      <svg
        width="24"
        height="24"
        // fill="#1877F2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Facebook"
      >
        <path d="M22.675 0H1.325C.593 0 0 .592 0 1.325v21.351C0 23.408.592 24 1.325 24h11.49v-9.294H9.691v-3.622h3.124V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.313h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.324-.592 1.324-1.324V1.325C24 .592 23.408 0 22.675 0z" />
      </svg>
    ),
  };

  // Styles
  const containerWrapperStyle = {
    overflow: 'hidden',
    padding: '20px',
    margin: '50px auto',
    maxWidth: '1200px',
    userSelect: dragging.current ? 'none' : 'auto',
  };

  const containerStyle = {
    display: 'flex',
    cursor: dragging.current ? 'grabbing' : 'grab',
  };

  const itemStyle = {
    position: 'relative',
    flex: '0 0 auto',
    width: '250px',
    textAlign: 'center',
    marginRight: '20px',
  };

  const imageWrapperStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    cursor: 'pointer',
  };

  const socialIconWrapperStyle = {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '50%',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    boxShadow: '0 0 4px rgba(0,0,0,0.2)',
    zIndex: 10,
  };

  const imageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.4)',
    color: '#fff',
    fontSize: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  };

  // Modal styles
  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  };

  const modalContentStyle = {
    background: 'white',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '900px',
    borderRadius: '10px',
    position: 'relative',
    gap: '20px',
  };

  const modalImageStyle = {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '10px',
    objectFit: 'cover',
  };

  const modalTextStyle = {
    flex: 1,
    minWidth: '250px',
    fontSize: '16px',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '24px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
    e.currentTarget.querySelector('.overlay').style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
    e.currentTarget.querySelector('.overlay').style.opacity = 0;
  };

  return (
    <>
      <div style={containerWrapperStyle}>
        <h2>Social Media</h2>
        <div
          style={containerStyle}
          ref={containerRef}
          onMouseDown={onTouchStart}
          onMouseMove={onTouchMove}
          onMouseUp={onTouchEnd}
          onMouseLeave={() => dragging.current && onTouchEnd()}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((img, index) => (
            <div style={itemStyle} key={index}>
              <div
                style={imageWrapperStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setModalData(img)}
              >
                <img src={img.src} alt={img.title} style={imageStyle} />
                <div style={socialIconWrapperStyle}>
                  {socialIcons[img.source] || null}
                </div>
                <div className="overlay" style={overlayStyle}>
                  <img src={Expand} width={50} height={50} alt="Expand icon" />
                </div>
              </div>
              <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{img.title}</p>
            </div>
          ))}
        </div>
      </div>

      {modalData && (
        <div style={modalOverlayStyle} onClick={() => setModalData(null)}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <img src={modalData.src} alt={modalData.title} style={modalImageStyle} />
            <div style={modalTextStyle}>
              <h2>{modalData.title}</h2>
              <p>
                <strong>{modalData.date}</strong>
              </p>
              <p>{modalData.description}</p>
            </div>
            <button style={closeButtonStyle} onClick={() => setModalData(null)}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
