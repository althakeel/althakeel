import React from 'react';

const Career = () => {
  const sectionStyle = {
    backgroundColor: '#f9f9f9',
    padding: '80px 20px',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: '500',
    color: '#222',
    marginBottom: '20px',
  };

  const subHeadingStyle = {
    fontSize: '17px',
    color: '#555',
    marginBottom: '40px',
    lineHeight: '1.6',
  };

  const highlightStyle = {
    color: '#007BFF',
    fontWeight: '600',
  };

  const boxWrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '30px',
    marginTop: '40px',
  };

  const boxStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
    flex: '1 1 300px',
    maxWidth: '360px',
    transition: 'transform 0.3s ease',
  };

  const boxTitleStyle = {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#333',
  };

  const boxTextStyle = {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.5',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Build Your Career at Al Thakeel</h2>
        <p style={subHeadingStyle}>
          We are a dynamic UAE-based company shaping the future of retail, e-commerce, and innovation.
          Partnering with global platforms like <span style={highlightStyle}>Amazon</span> and <span style={highlightStyle}>Noon</span>,
          we’re constantly growing and looking for bold minds to grow with us.
        </p>

        <div style={boxWrapperStyle}>
          <div style={boxStyle}>
            <div style={boxTitleStyle}>Innovative Culture</div>
            <p style={boxTextStyle}>
              Work in a fast-paced environment that thrives on new ideas and breakthrough solutions.
            </p>
          </div>

          <div style={boxStyle}>
            <div style={boxTitleStyle}>Global Reach</div>
            <p style={boxTextStyle}>
              Join a team whose products reach customers across top marketplaces and international platforms.
            </p>
          </div>

          <div style={boxStyle}>
            <div style={boxTitleStyle}>Grow With Us</div>
            <p style={boxTextStyle}>
              Whether you're starting out or leveling up, we offer opportunities to shape your future with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
