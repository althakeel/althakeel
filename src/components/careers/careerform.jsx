import React, { useState } from 'react';
import { motion } from 'framer-motion';

const statusOptions = ['Employed', 'Unemployed', 'Self-Employed', 'Student'];
const positionOptions = ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Project Manager'];

const CareerForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    position: '',
    status: '',
    resume: null,
    coverLetter: null,
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(formData.firstName) || !nameRegex.test(formData.lastName)) {
      alert('Please enter valid first and last names (letters only).');
      return;
    }
    console.log(formData);
    alert('Submitted Successfully!');
    setShowForm(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.infoSection}>
        <h2 style={styles.titleMain}>Join Our Team</h2>
        <p style={styles.textMain}>
          We're always on the lookout for talented people to join our dynamic team. Think you’ve got what it takes? Let’s talk!
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          style={styles.button}
          onClick={() => setShowForm(true)}
        >
          Apply Now
        </motion.button>
      </div>

      {showForm && (
        <div style={styles.modalOverlay}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={styles.modalCard}
          >
            <h2 style={styles.titlePopup}>Career Application</h2>
            <p style={styles.textPopup}>Please fill in the details below and upload your resume.</p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.inlineGroup}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <div style={styles.inlineGroup}>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  style={styles.select}
                >
                  <option value="">Position Applied For</option>
                  {positionOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  style={styles.select}
                >
                  <option value="">Employment Status</option>
                  {statusOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <label style={styles.label}>Resume</label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
                style={styles.fileInput}
              />

              <label style={styles.label}>Cover Letter (Optional)</label>
              <input
                type="file"
                name="coverLetter"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                style={styles.fileInput}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  style={styles.button}
                >
                  Submit
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{ ...styles.button, backgroundColor: '#ddd', color: '#333' }}
                >
                  Cancel
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #000000 0%, #b79e62 100%)',
    minHeight: '200px',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  infoSection: {
    padding: 40,
    borderRadius: 16,
    textAlign: 'center',
    maxWidth: 600,
  },
  titleMain: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 12,
  },
  textMain: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
    lineHeight: 1.6,
  },
  button: {
    padding: '12px 24px',
    fontSize: 16,
    backgroundColor: '#021c35',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    background: '#ffffff',
    borderRadius: 12,
    padding: 30,
    width: '100%',
    maxWidth: 600,
    maxHeight: '90vh',
    overflowY: 'auto',
    boxShadow: '0 10px 24px rgba(0,0,0,0.15)',
  },
  titlePopup: {
    fontSize: 26,
    marginBottom: 6,
    color: '#021c35',
  },
  textPopup: {
    fontSize: 15,
    marginBottom: 20,
    color: '#555555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
  },
  inlineGroup: {
    display: 'flex',
    gap: 12,
    flexWrap: 'nowrap',
    width: '100%',
  },
  input: {
    flex: 1,
    padding: 12,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 15,
  },
  select: {
    flex: 1,
    padding: 12,
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 15,
    background: '#fff',
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    color: '#444',
  },
  fileInput: {
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: 14,
  },
};

export default CareerForm;
