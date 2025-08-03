/* --------------  ONLY THIS FILE CHANGES  -------------- */
import React, { useState, useRef, useEffect } from 'react';

const Technologies = () => {
  /*  (no change)  */
 const front = [
  { name: 'React', level: 92, tip: 'React : je le maîtrise et j’ai déjà livré plusieurs projets.' },
  { name: 'Next.js', level: 90, tip: 'Next.js : simple, rapide, très proche de React, j’adore.' },
  { name: 'TypeScript', level: 88, tip: 'TypeScript : sécurité et auto-complétion au top.' },
  { name: 'TailwindCSS', level: 85, tip: 'Tailwind : je code 2× plus vite.' },
  { name: 'Framer Motion', level: 80, tip: 'Framer Motion : micro-interactions fluides.' }
];

const back = [
  { name: 'Node.js', level: 90, tip: 'Node.js : mon environnement back-end par défaut.' },
  { name: 'Express', level: 88, tip: 'Express : léger et middleware-friendly.' },
  { name: 'PostgreSQL', level: 83, tip: 'PostgreSQL : 6 mois en prod, je l’adore.' },
  { name: 'MongoDB', level: 80, tip: 'MongoDB : flexible quand le schéma bouge.' },
  { name: 'Prisma', level: 87, tip: 'Prisma : requêtes type-safe sans effort.' }
];

const devOps = [
  { name: 'Docker', level: 78, tip: 'Docker : conteneurs partout pour CI/CD.' },
  { name: 'Vercel', level: 95, tip: 'Vercel : déploiement 30 secondes chrono.' },
  { name: 'Netlify', level: 93, tip: 'Netlify : parfait pour les sites statiques.' },
  { name: 'GitHub Actions', level: 82, tip: 'GitHub Actions : automatisation à fond.' },
  { name: 'Figma', level: 90, tip: 'Figma : 50 % de mon temps avant le code.' }
];

const office = [
  { name: 'Word', level: 95, tip: 'Word : docs clients et spécifications.' },
  { name: 'Excel', level: 90, tip: 'Excel : tableaux de bord et KPI.' },
  { name: 'PowerPoint', level: 93, tip: 'PowerPoint : revues sprint ultra-clean.' },
  { name: 'Draw.io', level: 88, tip: 'Draw.io : schémas d’archi en un clic.' },
  { name: 'Power AMC', level: 75, tip: 'Power AMC : Merise pour la modélisation.' },
  { name: 'Office 365', level: 92, tip: 'Office 365 : collaboration temps réel.' },
  { name: 'Gestion projet', level: 85, tip: 'Gestion projet : du cahier des charges au déploiement.' }
];
  const [hovered, setHovered] = useState(null);
  return (
    <div style={styles.pageHeader}>
      <h1 style={styles.pageTitle}>TECHNOLOGIES</h1>
      <p style={styles.pageDescription}>Stack moderne et scalable pour des projets robustes.</p>

      <div style={styles.row}>
        <Category title="Frontend" skills={front} hovered={hovered} setHovered={setHovered} />
        <Category title="Backend" skills={back} hovered={hovered} setHovered={setHovered} />
      </div>
      <div style={styles.row}>
        <Category title="DevOps" skills={devOps} hovered={hovered} setHovered={setHovered} />
        <Category title="Conception & Outils Microsoft" skills={office} hovered={hovered} setHovered={setHovered} />
      </div>
    </div>
  );
};

/* -------------  NEW Category ------------- */
const Category = ({ title, skills, hovered, setHovered }) => {
  return (
    <div style={styles.category}>
      <h3 style={styles.categoryTitle}>{title}</h3>
      {skills.map(({ name, level, tip }) => (
        <SkillRow
          key={name}
          name={name}
          level={level}
          tip={tip}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

/* -------------  NEW SkillRow ------------- */
const SkillRow = ({ name, level, tip, hovered, setHovered }) => {
  const barRef = useRef(null);
  const [cursorX, setCursorX] = useState(null);

  /* Mouse inside the bar */
  const handleMouseMove = (e) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setCursorX(percent);
  };

  const handleMouseLeave = () => {
    setCursorX(null);
    setHovered(null);
  };

  return (
    <div
      style={styles.skillCard}
      onMouseEnter={() => setHovered({ name, tip })}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div style={styles.skillLine}>
        <span>{name}</span>
        <span style={styles.level}>{level}%</span>
      </div>

      {/* bar container */}
      <div ref={barRef} style={styles.barTrack}>
        {/* filled part */}
        <div style={{ ...styles.barFill, width: `${level}%` }} />

        {/* cursor line */}
        {cursorX !== null && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${cursorX}%`,
              width: 1,
              background: '#fff',
              pointerEvents: 'none',
              zIndex: 2
            }}
          />
        )}
      </div>

      {/* tooltip */}
      {hovered && hovered.name === name && (
        <div style={styles.tooltip}>{hovered.tip}</div>
      )}
    </div>
  );
};

/* -------------  (Unchanged) styles ------------- */
const styles = {
  pageHeader: { textAlign: 'center', marginBottom: 40, width: '100%' },
  pageTitle: {  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 600,
    marginBottom: '15px',
    color: '#fff' },
  pageDescription: { fontSize: '1rem', color: 'rgba(255,255,255,.7)', maxWidth: 480, margin: '0 auto 30px' },

  row: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 25, marginBottom: 25 },

  category: {
    background: 'rgba(255,255,255,.05)',
    padding: 20,
    borderRadius: 10,
    border: '1px solid rgba(255,255,255,.1)',
    position: 'relative'
  },
  categoryTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: 15,
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },

  skillCard: { marginBottom: 12, position: 'relative' },
  skillLine: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '.9rem',
    color: '#fff'
  },
  level: { color: '#ff3399', fontWeight: 600 },

  barTrack: {
    position: 'relative',
    height: 6,
    background: 'rgba(255,255,255,.15)',
    borderRadius: 3,
    overflow: 'hidden',
    marginTop: 4
  },
  barFill: {
    height: '100%',
    background: 'linear-gradient(90deg,#007bff,#00c6ff)',
    borderRadius: 3,
    transition: 'width .6s ease'
  },

  tooltip: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '100%',
    marginTop: 4,
    background: '#4f4f5eff',
    color: '#fff',
    width :'400px',
    height:'50px',
    fontSize: '1rem',
    padding: '4px 8px',
    borderRadius: 4,
    zIndex: 10
  }
};

export default Technologies;