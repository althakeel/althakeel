import React from 'react';

const BannerWithCloudinaryVideo = () => {
  return (
    <div style={styles.bannerContainer}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={styles.videoBackground}
      >
        <source
          src="https://res.cloudinary.com/dnpwsutir/video/upload/v1748176840/4716694-uhd_4096_2160_25fps_gdnif9"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div style={styles.overlay} />

      <div style={styles.bannerContent}>
        <h1 style={styles.bannerTitle}>Welcome to Our Company</h1>
        <p style={styles.bannerSubtitle}>We deliver innovation, technology, and growth.</p>
        <button style={styles.bannerButton}>Get Started</button>
      </div>
    </div>
  );
};

const styles = {
  bannerContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  videoBackground: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent dark overlay
    zIndex: 2,
  },
  bannerContent: {
    position: 'relative',
    zIndex: 3,
    color: '#fff',
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '0 20px',
  },
  bannerTitle: {
    fontSize: '48px',
    margin: '0 0 20px 0',
  },
  bannerSubtitle: {
    fontSize: '20px',
    margin: '0 0 30px 0',
  },
  bannerButton: {
    padding: '12px 30px',
    fontSize: '16px',
    backgroundColor: '#ff6f61',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default BannerWithCloudinaryVideo;
