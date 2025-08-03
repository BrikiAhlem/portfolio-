import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Coffee, Code, Zap } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/BrikiAhlem',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:ahlembriki4@gmail.com',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={styles.footer}>
      {/* Gradient de séparation */}
      <div style={styles.separator} />
      
      <div style={styles.container}>
        {/* Contenu principal */}
        <div style={styles.grid}>
          {/* Section À propos */}
          <motion.div 
            style={styles.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={styles.logo}>
              BA<span style={styles.dot}>.</span>
            </div>
            <p style={styles.description}>
              Développeuse web passionnée, je crée des expériences digitales 
              modernes et performantes avec les dernières technologies.
            </p>
            <div style={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  style={styles.socialLink}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target={link.url.startsWith('http') ? '_blank' : '_self'}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation rapide */}
          <motion.div 
            style={styles.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 style={styles.sectionTitle}>Navigation</h3>
            <ul style={styles.linksList}>
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    style={styles.navLink}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact rapide */}
          <motion.div 
            style={styles.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={styles.sectionTitle}>Contact</h3>
            <div style={styles.contactInfo}>
              <p style={styles.contactItem}>
                <Mail size={16} style={{ color: '#ff3399' }} />
                ahlembriki4@gmail.com
              </p>
              <p style={styles.contactItem}>
                <Coffee size={16} style={{ color: '#ff3399' }} />
                Disponible pour projets
              </p>
            </div>
          </motion.div>

          {/* Technologies favorites */}
          <motion.div 
            style={styles.section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 style={styles.sectionTitle}>Technologies</h3>
            <div style={styles.techIcons}>
              <div style={styles.techIcon}>
                <Code size={16} />
                <span>React</span>
              </div>
              <div style={styles.techIcon}>
                <Zap size={16} />
                <span>Node.js</span>
              </div>
              <div style={styles.techIcon}>
                <Code size={16} />
                <span>TypeScript</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <div style={styles.divider} />

        {/* Copyright */}
        <motion.div 
          style={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p style={styles.copyrightText}>
            © 2025 Briki Ahlem. Créé avec{' '}
            <Heart size={14} style={{ color: '#ff3399', display: 'inline' }} />{' '}
            et beaucoup de café
          </p>
          <p style={styles.subCopyright}>
            Tous droits réservés • Portfolio personnel
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    position: 'relative',
    overflow: 'hidden'
  },
  separator: {
    height: '1px',
    background: 'linear-gradient(90deg, transparent, #ff3399, #9933ff, transparent)',
    marginBottom: '50px'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '50px 20px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '40px',
    marginBottom: '50px'
  },
  section: {
    display: 'flex',
    flexDirection: 'column'
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '15px'
  },
  dot: {
    color: '#ff3399'
  },
  description: {
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.6,
    marginBottom: '25px',
    fontSize: '0.95rem'
  },
  socialLinks: {
    display: 'flex',
    gap: '15px'
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '45px',
    height: '45px',
    background: 'rgba(255,255,255,0.08)',
    borderRadius: '50%',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.1)'
  },
  sectionTitle: {
    fontSize: '1.2rem',
    fontWeight: 700,
    marginBottom: '20px',
    color: '#fff'
  },
  linksList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  navLink: {
    color: 'rgba(255,255,255,0.7)',
    textDecoration: 'none',
    padding: '8px 0',
    display: 'block',
    fontSize: '0.95rem',
    transition: 'all 0.3s ease',
    borderBottom: '1px solid transparent'
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.95rem',
    margin: 0
  },
  techIcons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  techIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.9rem'
  },
  divider: {
    height: '1px',
    background: 'rgba(255,255,255,0.1)',
    margin: '40px 0'
  },
  copyright: {
    textAlign: 'center'
  },
  copyrightText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.9rem',
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    flexWrap: 'wrap'
  },
  subCopyright: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '0.8rem'
  }
};

// CSS pour les effets hover
const footerCSS = `
  .footer-nav-link:hover {
    color: #ff3399 !important;
    transform: translateX(5px);
  }
  
  .footer-social-link:hover {
    background: linear-gradient(135deg, #ff3399, #9933ff) !important;
    transform: translateY(-2px);
  }
  
  .footer-tech-icon:hover {
    color: #ff3399 !important;
  }
`;

const footerStyleElement = document.createElement('style');
footerStyleElement.textContent = footerCSS;
document.head.appendChild(footerStyleElement);

export default Footer;