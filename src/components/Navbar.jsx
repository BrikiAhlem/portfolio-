// Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Globe } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
     { id: 'portfolio', label: 'Projets' },
    { id: 'technologies', label: 'Technologies' },
   
    { id: 'planning', label: 'Processus ' },
    { id: 'contact', label: 'Contact' },
  ];

  const [active, setActive] = useState('home');

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el
      ? el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      : window.scrollTo({ top: 0, behavior: 'smooth' });
    setActive(id);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={styles.navbar}
    >
      <div style={styles.inner}>
        {/* Logo */}
        <motion.div
          style={styles.logo}
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
        >
          BA<span style={styles.dot}>.</span>
        </motion.div>

        {/* Links */}
        <div style={styles.links}>
          {navLinks.map(({ id, label }) => (
            <motion.button
              key={id}
              style={{
                ...styles.link,
                ...(active === id ? styles.active : {}),
              }}
              onClick={() => scrollToSection(id)}
              whileHover={{ scale: 1.1 }}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Dev + Coffee switch */}
        <motion.div
          style={styles.devBox}
          whileHover={{ scale: 1.05 }}
          onClick={() => alert('Switch to EN (mock)')}
        >
          <Coffee size={16} color="#ff3399" />
          <span style={styles.devLabel}>Dev</span>
        </motion.div>
      </div>
    </motion.nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '18px 40px',
    background: 'rgba(10,12,20,.35)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(255,255,255,.08)',
    boxShadow: '0 0 20px rgba(255,51,153,.15)',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 800,
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'pointer',
  },
  dot: { color: '#ff3399', marginLeft: 2 },
  links: { display: 'flex', gap: 32 },
  link: {
    color: 'rgba(255,255,255,.7)',
    fontSize: '.9rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'all .3s ease',
    position: 'relative',
  },
  active: {
    color: '#ff3399',
    fontWeight: 600,
    textShadow: '0 0 8px #ff3399',
  },
  devBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    padding: '6px 12px',
    border: '1px solid rgba(255,51,153,.3)',
    borderRadius: '9999px',
    cursor: 'pointer',
  },
  devLabel: { color: '#fff', fontSize: '.8rem', fontWeight: 500 },
};

export default Navbar;