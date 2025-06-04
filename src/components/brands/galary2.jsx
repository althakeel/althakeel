import React from 'react';

const Galary1 = () => {
  const images = [
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501625/Artboard_1_dvrtxp.jpg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501625/Artboard_1_dvrtxp.jpg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501625/Artboard_1_dvrtxp.jpg',
    'https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748501625/Artboard_1_dvrtxp.jpg',
  ];

  return (
    <div style={{ backgroundColor: '#000', padding: '60px 20px' }}>
      {/* Top Heading Section */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', color: '#fff', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px', fontWeight: 500 }}>
          Zara Home's creative team designs each collection with the latest fashions and trends in mind.
        </h2>
        <p style={{ fontSize: '18px' }}>
          Founded in 2003, Zara Home has 482 stores in 71 markets.
        </p>
      </div>

      {/* Image Gallery Section */}
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index + 1}`}
                style={styles.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingBottom: '60px',
  },
  container: {
    maxWidth: '1000px',
    width: '100%',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '0px',
  },
  image: {
    width: '100%',
    height: '100%',
    maxHeight: '500px',
    objectFit: 'cover',
    borderRadius: '0px',
  },
};

export default Galary1;
