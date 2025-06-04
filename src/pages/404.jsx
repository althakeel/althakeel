import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  const containerStyle = {
    height: '100vh',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const headingStyle = {
    fontSize: '100px',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#ef4444',
  };

  const messageStyle = {
    fontSize: '24px',
    marginBottom: '30px',
  };

  const buttonStyle = {
    backgroundColor: '#c6a664',
    border: 'none',
    color: '#fff',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404 Error</h1>
      <p style={messageStyle}>Sorry, the page you’re looking for doesn’t exist.</p>
      <button style={buttonStyle} onClick={handleGoHome}>
        Go Back Home
      </button>
    </div>
  );
}

export default NotFound;
