import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Sneakers',
      desc: 'Headless Shopify + Next.js. 98 Lighthouse score.',
      tech: ['Next.js', 'Shopify API', 'Tailwind', 'Vercel']
    },
    {
      title: 'SaaS Dashboard',
      desc: 'Real-time analytics with Recharts & websockets.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Portfolio Agency',
      desc: 'Creative studio site with GSAP & 3D models.',
      tech: ['React', 'Three.js', 'Framer Motion', 'Netlify']
    },
    {
      title: 'Task Management App',
      desc: 'PWA with offline support and push notifications.',
      tech: ['React', 'Service Worker', 'IndexedDB', 'Firebase']
    }
  ];

  return (
    <div style={styles.pageHeader}>
      <h1 style={styles.pageTitle}>PORTFOLIO</h1>
      <p style={styles.pageDescription}>Quelques projets récents.</p>

      <div style={styles.portfolioGrid}>
        {projects.map((p, i) => (
          <div key={i} style={styles.projectCard}>
            <div style={styles.projectImage}>IMAGE PLACEHOLDER</div>
            <div style={styles.projectContent}>
              <h3 style={styles.projectTitle}>{p.title}</h3>
              <p style={styles.projectDescription}>{p.desc}</p>
              <div style={styles.projectTech}>
                {p.tech.map(t => (
                  <span key={t} style={styles.techTag}>{t}</span>
                ))}
              </div>
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
  portfolioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(350px,1fr))',
    gap: 30,
    width: '100%'
  },
  projectCard: {
    background: 'rgba(255,255,255,.05)',
    borderRadius: 12,
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,.1)',
    transition: 'transform .3s ease'
  },
  projectImage: {
    height: 200,
    background: 'rgba(255,255,255,.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,.5)'
  },
  projectContent: { padding: 25 },
  projectTitle: { fontSize: '1.25rem', fontWeight: 600, marginBottom: 10, color: '#ff3399' },
  projectDescription: { color: 'rgba(255,255,255,.7)', marginBottom: 15, lineHeight: 1.5 },
  projectTech: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  techTag: {
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    padding: '4px 12px',
    borderRadius: 15,
    fontSize: '.8rem',
    color: 'white'
  }
};

export default Portfolio;