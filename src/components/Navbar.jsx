import React from 'react';
import { Globe } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navLinks = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Services' },
    { id: 'technologies', label: 'Tech' },
    { id: 'portfolio', label: 'Projets' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    setCurrentPage(id);

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.inner}>
        <div style={styles.logo} onClick={() => scrollToSection('home')}>
          BA<span style={styles.dot}>.</span>
        </div>

        <div style={styles.links}>
          {navLinks.map(link => (
            <button
              key={link.id}
              style={{
                ...styles.link,
                ...(currentPage === link.id ? styles.active : {})
              }}
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div style={styles.lang}>
          <Globe size={16} />
          <span style={styles.langLabel}>FR</span>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '20px 40px',
    background: 'rgba(10,12,20,.6)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255,255,255,.05)'
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    fontSize: '1.4rem',
    fontWeight: 700,
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    cursor: 'pointer'
  },
  dot: { color: '#ff3399' },
  links: { display: 'flex', gap: 32 },
  link: {
    color: 'rgba(255,255,255,.65)',
    fontSize: '.9rem',
    letterSpacing: '.5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    transition: 'color .25s'
  },
  active: { color: '#ff3399', fontWeight: 600 },
  lang: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    color: 'rgba(255,255,255,.5)',
    fontSize: '.8rem'
  },
  langLabel: { color: 'white', fontWeight: 500 }
};

export default Navbar;