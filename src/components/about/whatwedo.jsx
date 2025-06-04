import React, { useEffect, useState } from 'react';

const WhatWeDo = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = (delay = 0) => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.7s ease ${delay}s`,
  });

  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#fefcf9',
    color: '#3f2d23',
  };

  const wrapperStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '40px',
    ...fadeIn(0.1),
  };

  const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#4b301e',
  };

  const subtitleStyle = {
    fontSize: '1.1rem',
    color: '#715948',
    maxWidth: '750px',
    margin: '0 auto',
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
  };

  const cardStyle = (delay) => ({
    flex: '1 1 260px',
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    textAlign: 'center',
    transition: `all 0.8s ease ${delay}s`,
    transform: show ? 'translateY(0)' : 'translateY(30px)',
    opacity: show ? 1 : 0,
  });

  const iconStyle = {
    fontSize: '2rem',
    marginBottom: '12px',
    color: '#c18450',
  };

  const cardTitle = {
    fontSize: '1.3rem',
    marginBottom: '8px',
    color: '#4b3226',
  };

  const cardText = {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#5a4636',
  };

  const services = [
    {
      title: 'Microfinance Support',
      description: 'Providing accessible financial solutions to help small businesses grow sustainably.',
      icon: '💰',
    },
    {
      title: 'Agriculture Assistance',
      description: 'Helping farmers with tools, training, and cooperative-based marketing channels.',
      icon: '🌾',
    },
    {
      title: 'Skill Development',
      description: 'Workshops and training for youth, women, and workers to enhance employability.',
      icon: '🎓',
    },
    {
      title: 'Women Empowerment',
      description: 'Supporting women-led initiatives and providing equal opportunities.',
      icon: '👩‍💼',
    },
    {
      title: 'Community Programs',
      description: 'Organizing events and services that uplift our local communities.',
      icon: '🤝',
    },
    {
      title: 'Sustainable Projects',
      description: 'Promoting eco-friendly business models for long-term impact.',
      icon: '🌍',
    },
  ];

  return (
    <div style={pageStyle}>
      <div style={wrapperStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>What We Do</h1>
          <p style={subtitleStyle}>
            Althakeel offers impactful cooperative services focused on empowerment, sustainability, and community progress.
          </p>
        </div>

        {/* Services Grid */}
        <div style={gridStyle}>
          {services.map((service, index) => (
            <div key={index} style={cardStyle(0.2 + index * 0.15)}>
              <div style={iconStyle}>{service.icon}</div>
              <h3 style={cardTitle}>{service.title}</h3>
              <p style={cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
