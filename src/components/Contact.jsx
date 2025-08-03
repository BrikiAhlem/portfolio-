import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Coffee } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Message envoyé avec succès !', {
        duration: 4000,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahlembriki4@gmail.com',
      link: 'mailto:ahlembriki4@gmail.com'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'BrikiAhlem',
      link: 'https://github.com/BrikiAhlem'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+216 93416030',
      link: 'tel:+21693416030'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Kairouan, Menzel Mhiri',
      link: null
    }
  ];

  return (
    <div style={styles.container}>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(15,15,35,0.9)',
            color: '#fff',
            border: '1px solid rgba(255,51,153,0.3)',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          },
          success: {
            iconTheme: {
              primary: '#ff3399',
              secondary: '#fff',
            },
          },
        }}
      />
      
      {/* Header */}
      <motion.div 
        style={styles.header}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.title}>
          <span style={styles.gradient}>Contactez-moi</span>
        </h1>
        <p style={styles.subtitle}>
          Discutons de votre prochain projet
        </p>
      </motion.div>

      <div style={styles.grid}>
        {/* Informations de contact */}
        <motion.div 
          style={styles.infoSection}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 style={styles.sectionTitle}>Restons connectés</h3>
          <p style={styles.sectionDesc}>
            N'hésitez pas à me contacter pour discuter de vos projets ou simplement dire bonjour !
          </p>
          
          <div style={styles.contactList}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                style={styles.contactItem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div style={styles.iconCircle}>
                  <info.icon size={20} />
                </div>
                <div style={styles.contactContent}>
                  <p style={styles.contactLabel}>{info.label}</p>
                  {info.link ? (
                    <a 
                      href={info.link}
                      style={styles.contactValue}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p style={styles.contactValue}>{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div style={styles.socialSection}>
            <h4 style={styles.socialTitle}>Suivez-moi</h4>
            <div style={styles.socialLinks}>
              <motion.a
                href="https://github.com/BrikiAhlem"
                style={styles.socialLink}
                whileHover={{ scale: 1.1, rotate: 5 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="#"
                style={styles.socialLink}
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.div 
          style={styles.formSection}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} style={styles.form}>
            <div style={styles.formRow}>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  name="name"
                  required
                  style={styles.input}
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div style={styles.inputGroup}>
                <input
                  type="email"
                  name="email"
                  required
                  style={styles.input}
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div style={styles.inputGroup}>
              <input
                type="text"
                name="subject"
                required
                style={styles.input}
                placeholder="Sujet"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div style={styles.inputGroup}>
              <textarea
                name="message"
                required
                style={styles.textarea}
                placeholder="Votre message..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <motion.button 
              type="submit" 
              style={{
                ...styles.submitBtn,
                opacity: isSubmitting ? 0.7 : 1
              }}
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div style={styles.spinner} />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Envoyer le message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Call to action */}
      <motion.div 
        style={styles.cta}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Coffee size={24} style={{ color: '#ff3399' }} />
        <p style={styles.ctaText}>
          Prenons un café virtuel et parlons de votre projet !
        </p>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '80px 20px',
    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '70px'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    marginBottom: '15px'
  },
  gradient: {
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'rgba(255,255,255,0.7)',
    maxWidth: '500px',
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '50px',
    marginBottom: '60px'
  },
  infoSection: {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '40px',
    height: 'fit-content'
  },
  formSection: {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '20px',
    padding: '40px'
  },
  sectionTitle: {
    fontSize: '1.6rem',
    fontWeight: 700,
    marginBottom: '15px',
    color: '#fff'
  },
  sectionDesc: {
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.6,
    marginBottom: '35px',
    fontSize: '1rem'
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '40px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '15px',
    background: 'rgba(255,255,255,0.02)',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  iconCircle: {
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  contactContent: {
    flex: 1
  },
  contactLabel: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.6)',
    marginBottom: '4px',
    fontWeight: 500
  },
  contactValue: {
    fontSize: '1rem',
    fontWeight: 600,
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  },
  socialSection: {
    textAlign: 'center'
  },
  socialTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '20px',
    color: '#fff'
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px'
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    height: '45px',
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '50%',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  form: {
    width: '100%'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
    marginBottom: '20px'
  },
  inputGroup: {
    marginBottom: '20px'
  },
  input: {
    width: '100%',
    padding: '15px 20px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    outline: 'none',
    fontFamily: 'inherit'
  },
  textarea: {
    width: '100%',
    padding: '15px 20px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1rem',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'all 0.3s ease',
    outline: 'none',
    fontFamily: 'inherit'
  },
  submitBtn: {
    width: '100%',
    padding: '16px 30px',
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    border: 'none',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    boxShadow: '0 4px 20px rgba(255,51,153,0.3)'
  },
  spinner: {
    width: '18px',
    height: '18px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderTop: '2px solid #fff',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  cta: {
    textAlign: 'center',
    padding: '40px',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: '16px',
    border: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    flexWrap: 'wrap'
  },
  ctaText: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.8)',
    fontWeight: 500
  }
};

// CSS pour les animations et focus states
const contactCSS = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  input:focus, textarea:focus {
    border-color: rgba(255,51,153,0.5) !important;
    box-shadow: 0 0 0 3px rgba(255,51,153,0.1) !important;
  }
  
  input::placeholder, textarea::placeholder {
    color: rgba(255,255,255,0.5);
  }
  
  .contact-item:hover {
    background: rgba(255,255,255,0.06) !important;
  }
  
  .social-link:hover {
    background: linear-gradient(135deg, #ff3399, #9933ff) !important;
    transform: translateY(-2px);
  }
  
  .submit-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(255,51,153,0.4) !important;
  }
  
  .submit-btn:disabled {
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    .form-row {
      grid-template-columns: 1fr !important;
    }
  }
`;

const contactStyleElement = document.createElement('style');
contactStyleElement.textContent = contactCSS;
document.head.appendChild(contactStyleElement);

export default Contact;