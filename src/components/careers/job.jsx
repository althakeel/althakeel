import React from 'react';

const JobAlertBanner = () => {
  const containerStyle = {
    backgroundColor: '#021C35',
    // borderRadius: '20px',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#fff',
    fontFamily: '"Segoe UI", sans-serif',
    maxWidth: '100%',
    margin: '20px auto',

  };

  const textStyle = {
    fontSize: '24px',
    fontWeight: '500',
    marginBottom: '30px',
  };

  const buttonStyle = {
    padding: '15px 30px',
    fontSize: '18px',
    color: '#26578D',
    backgroundColor: '#fff',
    border: '2px solid #fff',
    borderRadius: '40px',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'inline-block',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>
        Would you like to be notified about new job opportunities with Al Thakeel?
      </div>
      <a
        href="https://www.linkedin.com/company/al-thakeel/jobs/"
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
      >
        Set your job alerts here
      </a>
    </div>
  );
};

export default JobAlertBanner;
