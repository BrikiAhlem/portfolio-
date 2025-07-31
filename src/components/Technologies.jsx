import React from 'react';

const Technologies = () => {
  const techStack = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    Backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Prisma'],
    DevOps: ['Docker', 'Vercel', 'Netlify', 'GitHub Actions', 'Figma']
  };

  return (
    <div style={styles.pageHeader}>
      <h1 style={styles.pageTitle}>TECHNOLOGIES</h1>
      <p style={styles.pageDescription}>
        Stack moderne et scalable pour des projets robustes.
      </p>

      <div style={styles.techGrid}>
        {Object.entries(techStack).map(([cat, items]) => (
          <div key={cat} style={styles.techCategory}>
            <h3 style={styles.techCategoryTitle}>{cat}</h3>
            <div style={styles.techList}>
              {items.map(t => (
                <span key={t} style={styles.techItem}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  pageHeader: { textAlign: 'center', marginBottom: 60, width: '100%' },
  pageTitle: { fontSize: '4rem', fontWeight: 700, marginBottom: 20 },
  pageDescription: { fontSize: '1.25rem', color: 'rgba(255,255,255,.7)', maxWidth: 600, margin: '0 auto' },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
    gap: 40,
    width: '100%'
  },
  techCategory: {
    background: 'rgba(255,255,255,.05)',
    padding: 30,
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,.1)'
  },
  techCategoryTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: 20,
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  techList: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  techItem: {
    background: 'rgba(255,255,255,.1)',
    padding: '8px 16px',
    borderRadius: 20,
    fontSize: '.9rem',
    color: 'white'
  }
};

export default Technologies;