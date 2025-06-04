import React from 'react';
import Header from '../components/header2';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const pageStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#f4fafa',
    fontFamily: 'Arial, sans-serif',
    color: '#1c2b2b',
    paddingTop: '20px',
  };

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '30px 20px',
    marginTop: '2rem',
    marginBottom: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '25px',
    color: '#014d4d',
    borderBottom: '3px solid #014d4d',
    paddingBottom: '10px',
  };

  const sectionTitle = {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '30px',
    marginBottom: '10px',
    color: '#014040',
  };

  const paragraphStyle = {
    marginBottom: '16px',
    fontSize: '15.5px',
    lineHeight: '1.8',
  };

  return (
    <div style={pageStyle}>
      <Header />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Privacy Policy</h1>
        <p style={paragraphStyle}><strong>Last Updated:</strong> May 26, 2025</p>

        <p style={paragraphStyle}>
          At Al Thakeel, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal data.
        </p>

        <h2 style={sectionTitle}>1. Information We Collect</h2>
        <p style={paragraphStyle}>
          We may collect information such as your name, email address, phone number, and any other details you voluntarily provide through our website or services.
        </p>

        <h2 style={sectionTitle}>2. How We Use Your Information</h2>
        <p style={paragraphStyle}>
          Your information is used to:
        </p>
        <ul style={{ ...paragraphStyle, paddingLeft: '20px' }}>
          <li>Provide and improve our services</li>
          <li>Respond to inquiries or requests</li>
          <li>Send relevant updates or communications</li>
        </ul>

        <h2 style={sectionTitle}>3. Data Protection</h2>
        <p style={paragraphStyle}>
          We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.
        </p>

        <h2 style={sectionTitle}>4. Cookies</h2>
        <p style={paragraphStyle}>
          Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings.
        </p>

        <h2 style={sectionTitle}>5. Sharing Your Information</h2>
        <p style={paragraphStyle}>
          We do not sell or rent your personal information. We may share data with trusted third parties only to help us operate our business or comply with legal obligations.
        </p>

        <h2 style={sectionTitle}>6. Third-Party Services</h2>
        <p style={paragraphStyle}>
          Our website may link to external services. We are not responsible for their privacy practices. Please review their policies separately.
        </p>

        <h2 style={sectionTitle}>7. Your Rights</h2>
        <p style={paragraphStyle}>
          You have the right to access, correct, or delete your personal data. To exercise your rights, contact us through our support channels.
        </p>

        <h2 style={sectionTitle}>8. Policy Updates</h2>
        <p style={paragraphStyle}>
          We may update this policy from time to time. Continued use of our services implies acceptance of any changes made.
        </p>

        <h2 style={sectionTitle}>9. Contact Us</h2>
        <p style={paragraphStyle}>
          If you have any questions or concerns about this Privacy Policy, please reach out via our official contact channels.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
