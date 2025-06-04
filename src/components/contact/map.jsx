import React from 'react';

const Map = () => {
  return (
    <div
      style={{
        width: '100%',
        padding: '0 16px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '768px',
          height: '400px',
          position: 'relative',
        }}
      >
        <iframe
          title="Almahy Legal Services Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.685302688755!2d55.27547957543606!3d25.213870077700285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434f5fdaba03%3A0x37097f69d9d98181!2sAlmahy%20Legal%20Services!5e1!3m2!1sen!2sae!4v1748719870398!5m2!1sen!2sae"
          style={{
            width: '100%',
            height: '100%',
            border: 0,
            filter: 'grayscale(80%) brightness(100%)',
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
