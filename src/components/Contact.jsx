import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulation d'envoi
    toast.promise(
      new Promise(resolve => setTimeout(resolve, 1000)),
      {
        loading: 'Envoi en cours...',
        success: () => {
          setFormData({ name: '', email: '', message: '' });
          return 'Message envoyé avec succès !';
        },
        error: 'Erreur lors de l\'envoi'
      }
    );
  };

  return (
    <div style={styles.container}>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1a1a2e',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
          },
        }}
      />
      
      <div style={styles.header}>
        <h1 style={styles.title}>Contact</h1>
        <p style={styles.subtitle}>Discutons de votre projet</p>
      </div>

      <div style={styles.grid}>
        {/* Infos de contact */}
        <div style={styles.infoCard}>
          <h3 style={styles.cardTitle}>Informations</h3>
          
          <div style={styles.infoList}>
            <div style={styles.infoItem}>
              <div style={styles.iconWrapper}>
                <Mail size={20} />
              </div>
              <div>
                <p style={styles.label}>Email</p>
                <p style={styles.value}>ahlem@example.com</p>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.iconWrapper}>
                <Phone size={20} />
              </div>
              <div>
                <p style={styles.label}>Téléphone</p>
                <p style={styles.value}>+33 6 12 34 56 78</p>
              </div>
            </div>
            
            <div style={styles.infoItem}>
              <div style={styles.iconWrapper}>
                <MapPin size={20} />
              </div>
              <div>
                <p style={styles.label}>Localisation</p>
                <p style={styles.value}>Paris, France</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire */}
        <div style={styles.formCard}>
          <form onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                required
                style={styles.input}
                placeholder="Votre nom"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <input
                type="email"
                required
                style={styles.input}
                placeholder="Votre email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <textarea
                required
                style={styles.textarea}
                placeholder="Votre message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            
            <button type="submit" style={styles.submitBtn}>
              <span>Envoyer</span>
              <Send size={18} style={{ marginLeft: 8 }} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '80px 20px',

    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 700,
    marginBottom: 10,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '1.25rem',
    opacity: 0.7,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: 40,
    maxWidth: 1200,
    margin: '0 auto',
  },
  infoCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 40,
    height: 'fit-content',
  },
  formCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 20,
    padding: 40,
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: 30,
    color: '#fff',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 20,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  label: {
    fontSize: '0.875rem',
    opacity: 0.7,
    marginBottom: 4,
  },
  value: {
    fontSize: '1.125rem',
    fontWeight: 500,
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: '15px 20px',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    color: '#fff',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '15px 20px',
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    color: '#fff',
    fontSize: '1rem',
    resize: 'vertical',
    minHeight: 120,
    transition: 'all 0.3s ease',
    outline: 'none',
    fontFamily: 'inherit',
  },
  submitBtn: {
    width: '100%',
    padding: '15px 30px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: 10,
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
    },
  },
};

// Ajout des styles de focus et hover
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  input:focus, textarea:focus {
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  }
`;
document.head.appendChild(styleSheet);

export default Contact;