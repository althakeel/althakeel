// components/VideoBanner.js
import React, { useEffect, useState } from 'react';

const VideoBanner = ({ videoSources }) => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [fadeVideo, setFadeVideo] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [autoSwitchTimeout, setAutoSwitchTimeout] = useState(null);

  useEffect(() => {
    if (autoSwitchTimeout) clearTimeout(autoSwitchTimeout);
    const timeout = setTimeout(() => {
      setFadeVideo((prev) => !prev);
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
      setUserInteracted(false);
    }, userInteracted ? 8000 : 6000);
    setAutoSwitchTimeout(timeout);
    return () => clearTimeout(timeout);
  }, [currentVideo, userInteracted]);

  const handleNextVideo = () => {
    setUserInteracted(true);
    setCurrentVideo((prev) => (prev + 1) % videoSources.length);
  };

  const handlePrevVideo = () => {
    setUserInteracted(true);
    setCurrentVideo((prev) => (prev === 0 ? videoSources.length - 1 : prev - 1));
  };

  return (
    <div style={styles.videoWrapper}>
      <video
        key={currentVideo}
        src={videoSources[currentVideo]}
        autoPlay
        muted
        loop
        playsInline
        style={styles.videoBackground}
      />
      <div style={styles.overlay} />

      {/* Controls */}
      <div style={styles.videoControls}>
        <button onClick={handlePrevVideo} style={styles.controlButton}>
          <img
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748416043/next_rqurxp.png"
            alt="Prev"
            style={{ transform: 'rotate(180deg)', width: '24px', height: '24px' }}
          />
        </button>
        <button onClick={handleNextVideo} style={styles.controlButton}>
          <img
            src="https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748416453/next_1_xrlyow.png"
            alt="Next"
            style={{ width: '24px', height: '24px' }}
          />
        </button>
      </div>
    </div>
  );
};

const styles = {
  videoWrapper: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 },
  videoBackground: { width: '100%', height: '100%', objectFit: 'cover' },
  overlay: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2 },
  videoControls: { position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', gap: '10px' },
  controlButton: { background: 'transparent', border: 'none', cursor: 'pointer' },
};

export default VideoBanner;
