import React, { useEffect } from 'react';

const PartnerForm = () => {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @media (max-width: 768px) {
        .partner-form-container {
          display: flex !important;
          flex-direction: column !important;
        }
        .left-panel, .right-panel {
          width: 100% !important;
          padding: 40px 20px !important;
        }
        .form-wrapper {
          padding: 40px 20px !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
  }, []);

  return (
    <div style={styles.wrapper}>
      <div className="partner-form-container" style={styles.container}>
        {/* Left Panel */}
        <div className="left-panel" style={styles.leftPanel}>
          <div style={styles.overlay}>
            <h1 style={styles.title}>Partner with Al Thakeel</h1>
            <p style={styles.description}>
              Al Thakeel is a forward-thinking business group headquartered in Dubai, dedicated to innovation, quality, and excellence.
              <br /><br />
              By partnering with us, you gain access to:
              <ul style={styles.list}>
                <li>Diverse markets across retail, tech, and lifestyle</li>
                <li>Established brands like Nexso, Store 1920, and Armed</li>
                <li>Innovative solutions powered by experienced teams</li>
                <li>A trusted network in the UAE and beyond</li>
              </ul>
              We’re always looking for visionary partners — distributors, investors, or service providers — let’s grow together.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel form-wrapper" style={styles.rightPanel}>
          <form style={styles.form}>
            <h2 style={styles.formTitle}>Start the Partnership</h2>

            <div style={styles.formGroup}>
              <label style={styles.label}>Company Name</label>
              <input type="text" placeholder="Your company name" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input type="email" placeholder="example@domain.com" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone</label>
              <input type="tel" placeholder="+971 50 123 4567" style={styles.input} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                placeholder="Tell us how you'd like to collaborate..."
                rows={4}
                style={styles.textarea}
              />
            </div>

            <div style={styles.formGroup}>
              <button type="submit" style={styles.submitButton}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#f5f5f5',
    padding: '60px 20px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    maxWidth: '1400px',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
  },
  leftPanel: {
    backgroundImage: 'url("https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748859360/10_xnlf0r.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '60px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    color: '#fff',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '420px',
    textAlign: 'left',
    fontSize: '15px',
    lineHeight: '1.7',
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  description: {
    fontSize: '15px',
    lineHeight: '1.6',
  },
  list: {
    margin: '10px 0 20px',
    paddingLeft: '20px',
    fontSize: '15px',
    lineHeight: '1.5',
  },
  rightPanel: {
    padding: '60px 40px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formTitle: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '24px',
    color: '#222',
    textAlign: 'center',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#444',
  },
  input: {
    padding: '14px 18px',
    fontSize: '15px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #dcdcdc',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  textarea: {
    padding: '14px 18px',
    fontSize: '15px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    border: '1px solid #dcdcdc',
    resize: 'vertical',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  submitButton: {
    padding: '14px 18px',
    fontSize: '16px',
    background: 'linear-gradient(135deg, #000000 0%, #b79e62 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s ease',
  }
};

export default PartnerForm;
