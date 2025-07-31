import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [typed, setTyped] = useState('');
  const fullText = 'DEVELOPER';
  const [showTop, setShowTop] = useState(false);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTyped(fullText.slice(0, ++i));
      if (i > fullText.length) clearInterval(timer);
    }, 120);
    return () => clearInterval(timer);
  }, []);

  // Show back-to-top arrow
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const snippets = [
    'const [state, setState] = useState();',
    'npm install framer-motion',
    'grid-template-columns: repeat(3, 1fr);',
    'export default Component;',
    'async function fetchData() { ... }',
    'border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,.4);'
  ];

  return (
    <>
      <section id="home" style={styles.section}>
        <motion.div
          style={styles.textCol}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >
          <h1 style={styles.title}>
            FRONTEND
            <br />
            <span style={styles.gradient}>
              {typed}
              <span style={styles.cursor}>|</span>
            </span>
          </h1>
          <p style={styles.subtitle}>
            Je suis <b style={{ color: '#fff' }}>Ahlem</b>, développeuse web
            passionnée par la création d’expériences rapides et élégantes.
          </p>

          <div style={styles.ctas}>
            <button style={styles.btnPrimary}>Voir mes projets</button>
            <button style={styles.btnSecondary}>Télécharger CV</button>
          </div>
        </motion.div>

        {/* Code snippets */}
        <motion.div
          style={styles.codeCol}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, delay: .2 }}
        >
          {snippets.map((s, i) => (
            <motion.div
              key={i}
              style={{
                ...styles.floatingCode,
                top: `${10 + i * 12}%`,
                left: i % 2 === 0 ? `${8 + i * 5}%` : undefined,
                right: i % 2 !== 0 ? `${8 + i * 5}%` : undefined
              }}
              animate={{
                y: [0, -6, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + i,
                delay: i * 0.3
              }}
            >
              {s}
            </motion.div>
          ))}

          <div style={styles.photo}>
            <span style={styles.photoText}>VOTRE PHOTO</span>
          </div>
        </motion.div>
      </section>

      {/* Bouton retour en haut */}
      {showTop && (
        <button style={styles.topBtn} onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

const styles = {
  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 1200,
    margin: '0 auto',
    padding: '160px 40px 80px',
    gap: 60
  },
  textCol: { flex: 1.2, zIndex: 10 },
  title: { fontSize: '4.5rem', fontWeight: 700, lineHeight: 1.1 },
  gradient: {
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  cursor: {
    color: '#ff3399',
    animation: 'blink 1s infinite',
    marginLeft: 4
  },
  subtitle: {
    fontSize: '1.25rem',
    lineHeight: 1.6,
    color: 'rgba(255,255,255,.7)',
    margin: '24px 0 40px'
  },
  ctas: { display: 'flex', gap: 20 },
  btnPrimary: {
    padding: '12px 28px',
    border: 'none',
    borderRadius: 999,
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    color: '#fff',
    fontWeight: 600,
    cursor: 'pointer'
  },
  btnSecondary: {
    padding: '12px 28px',
    border: '1px solid rgba(255,255,255,.2)',
    borderRadius: 999,
    background: 'transparent',
    color: '#fff',
    cursor: 'pointer'
  },
  codeCol: { flex: 1, position: 'relative', height: 500 },
  floatingCode: {
    position: 'absolute',
    fontFamily: "'Fira Code', monospace",
    fontSize: '.8rem',
    color: 'rgba(255,255,255,.25)',
    pointerEvents: 'none'
  },
  photo: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 300,
    height: 400,
    borderRadius: 8,
    background: 'rgba(255,255,255,.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px dashed rgba(255,255,255,.15)'
  },
  photoText: { color: 'rgba(255,255,255,.35)', fontSize: '.9rem' },
  // Bouton retour en haut
  topBtn: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    width: 48,
    height: 48,
    border: 'none',
    borderRadius: '50%',
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    color: '#fff',
    fontSize: 20,
    cursor: 'pointer',
    zIndex: 999
  }
};

export default Home;