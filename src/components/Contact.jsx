import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div style={styles.pageHeader}>
      <h1 style={styles.pageTitle}>CONTACT</h1>
      <p style={styles.pageDescription}>Discutons de votre prochain projet&nbsp;!</p>

      <div style={styles.contactContainer}>
        {/* Left column */}
        <div style={styles.contactInfo}>
          <h3 style={{ marginBottom: 20 }}>Informations</h3>
          <div style={styles.contactDetails}>
            <div style={styles.contactItem}>
              <Mail style={styles.contactIcon} /> ahlem@example.com
            </div>
            <div style={styles.contactItem}>
              <Phone style={styles.contactIcon} /> +33 6 12 34 56 78
            </div>
            <div style={styles.contactItem}>
              <MapPin style={styles.contactIcon} /> Paris, France
            </div>
          </div>
        </div>

        {/* Right form */}
        <form style={styles.contactForm} onSubmit={e => e.preventDefault()}>
          <input style={styles.formInput} placeholder="Nom" />
          <input style={styles.formInput} placeholder="Email" type="email" />
          <textarea
            style={styles.formTextarea}
            placeholder="Votre message"
            rows={5}
          />
          <button type="submit" style={styles.submitButton}>ENVOYER</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  pageHeader: { textAlign: 'center', marginBottom: 60, width: '100%' },
  pageTitle: { fontSize: '4rem', fontWeight: 700, marginBottom: 20 },
  pageDescription: { fontSize: '1.25rem', color: 'rgba(255,255,255,.7)', maxWidth: 600, margin: '0 auto' },
  contactContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 60,
    width: '100%',
    alignItems: 'start'
  },
  contactInfo: { paddingTop: 40 },
  contactDetails: { marginTop: 40 },
  contactItem: { display: 'flex', alignItems: 'center', gap: 15, marginBottom: 20, fontSize: '1.1rem' },
  contactIcon: { fontSize: '1.5rem' },
  contactForm: {
    background: 'rgba(255,255,255,.05)',
    padding: 40,
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,.1)'
  },
  formInput: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    background: 'rgba(255,255,255,.1)',
    border: '1px solid rgba(255,255,255,.2)',
    borderRadius: 8,
    color: 'white',
    fontSize: '1rem',
    outline: 'none'
  },
  formTextarea: {
    width: '100%',
    padding: 15,
    marginBottom: 25,
    background: 'rgba(255,255,255,.1)',
    border: '1px solid rgba(255,255,255,.2)',
    borderRadius: 8,
    color: 'white',
    fontSize: '1rem',
    resize: 'vertical',
    outline: 'none',
    fontFamily: "'Inter', sans-serif"
  },
  submitButton: {
    width: '100%',
    padding: 15,
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    border: 'none',
    borderRadius: 8,
    color: 'white',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform .3s ease'
  }
};

export default Contact;