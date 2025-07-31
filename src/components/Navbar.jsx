import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Bordure tout autour avec coins arrondis */}
      <div style={styles.fullBorder}></div>
      
      <div style={styles.container}>
        {/* Nom à gauche avec dégradé de couleur */}
        <div style={styles.logo}> Ahlem </div>
        
        {/* Liens centrés */}
        <div style={styles.links}>
          <a href="/services" style={styles.link}>SERVICES</a>
          <a href="/technologies" style={styles.link}>TECHNOLOGIES</a>
          <a href="/portfolio" style={styles.link}>PORTFOLIO</a>
          <a href="/contact" style={styles.link}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: '20px',
    left: '170px',
    right: 0,
    padding: '20px 50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    fontFamily: "'Inter', sans-serif",
    backgroundColor: 'transparent',
    width: '60%',
  },
  fullBorder: {
    position: 'absolute',
    top: '20px',
    left: '50px',
    right: '50px',
    border: '1px solid white',
    pointerEvents: 'none',
    borderRadius: '12px', // Coins arrondis
    height: '70px',
  },
  container: {
    width: '50%',
    maxWidth: '1200px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: '10px'
  },
  logo: {
    background: 'linear-gradient(to right, #ff3399, #9933ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '1px',
    position: 'relative',
    top: '30px',
   right:'200px'
  },
  links: {
    display: 'flex',
    gap: '40px',
  },
  link: {
    color: 'white',
    fontSize: '14px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textDecoration: 'none',
    fontWeight: '400',
    position: 'relative',
    top: '30px',
    left: '80px',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#0000FF', // Bleu clair au survol
     
      backgroundColor :'#0000FF'
    }
  },
};

// Pour gérer le hover dans React inline styles
Object.keys(styles.link).forEach(key => {
  if (key.startsWith(':')) {
    styles.link[key.slice(1)] = styles.link[key];
    delete styles.link[key];
  }
});

export default Navbar;