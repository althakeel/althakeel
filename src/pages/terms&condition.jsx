import React from 'react';
import Header from '../components/header2';
import Footer from '../components/Footer';

const TermsCondition = () => {
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
    marginTop:'2rem',
    marginBottom:'2rem',
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

  const listStyle = {
    paddingLeft: '20px',
    marginBottom: '16px',
  };

  return (
    <div style={pageStyle}>
      <Header />
      <div style={containerStyle}>
        <h1 style={headingStyle}>Terms and Conditions</h1>
        <p style={paragraphStyle}><strong>Last Updated:</strong> May 26, 2025</p>

        <p style={paragraphStyle}>
          Welcome to Al Thakeel. By using our website, you agree to the terms listed below. If you do not agree, please do not use our services.
        </p>

        <h2 style={sectionTitle}>1. About Al Thakeel</h2>
        <p style={paragraphStyle}>
          Al Thakeel is a cooperative company based in Dubai, UAE, offering reliable services to members and clients with integrity.
        </p>

        <h2 style={sectionTitle}>2. Website Usage</h2>
        <ul style={listStyle}>
          <li>Users must be 18 years or older.</li>
          <li>Use our website in a legal and respectful manner.</li>
          <li>Do not attempt to disrupt or misuse our services.</li>
        </ul>

        <h2 style={sectionTitle}>3. Intellectual Property</h2>
        <p style={paragraphStyle}>
          All content, logos, and designs on this site are the property of Al Thakeel. Unauthorized use is prohibited.
        </p>

        <h2 style={sectionTitle}>4. Privacy Policy</h2>
        <p style={paragraphStyle}>
          Your privacy is important to us. Please review our Privacy Policy to learn how your information is used and protected.
        </p>

        <h2 style={sectionTitle}>5. Services & Membership</h2>
        <p style={paragraphStyle}>
          Some services require membership or payment. We reserve the right to update, suspend, or discontinue any feature or service.
        </p>

        <h2 style={sectionTitle}>6. Limitation of Liability</h2>
        <p style={paragraphStyle}>
          Al Thakeel shall not be held liable for indirect, incidental, or consequential damages arising from the use of our website or services.
        </p>

        <h2 style={sectionTitle}>7. Third-Party Links</h2>
        <p style={paragraphStyle}>
          We may include links to third-party websites. Al Thakeel is not responsible for their content or privacy practices.
        </p>

        <h2 style={sectionTitle}>8. Modifications to Terms</h2>
        <p style={paragraphStyle}>
          We may revise these terms at any time. Continued use of our website signifies your acceptance of the updated terms.
        </p>

        <h2 style={sectionTitle}>9. Governing Law</h2>
        <p style={paragraphStyle}>
          These terms are governed by the laws of the UAE. All disputes will be handled by the courts in Dubai.
        </p>

        <p style={paragraphStyle}>
          If you have any questions, feel free to contact us through our official support channels.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsCondition;
