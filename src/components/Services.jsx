import React from 'react';

const Services = () => {
  const serviceList = [
    { title: 'Design Web Responsive', desc: 'Layouts pixel-perfect, adaptatifs.', icon: '📱' },
    { title: 'SPA / PWA React', desc: 'Apps ultra-rapides & offline-ready.', icon: '⚛️' },
    { title: 'Intégration d’API', desc: 'Connexion REST / GraphQL.', icon: '🔗' },
    { title: 'Performance & SEO', desc: 'Core Web Vitals optimisés.', icon: '🚀' },
    { title: 'UI / UX Design', desc: 'Interfaces intuitives Figma.', icon: '💡' },
    { title: 'Sites E-commerce', desc: 'Boutiques Headless Shopify.', icon: '🛒' },
    { title: 'Audit & Refonte', desc: 'Modernisation de sites existants.', icon: '🔍' },
    { title: 'Applications Internes', desc: 'Outils métiers sur mesure.', icon: '🔧' },
    { title: 'Maintenance & Support', desc: 'Veille & assistance continue.', icon: '🛠️' }
  ];

  return (
    <>
      {/* ➊ petite feuille CSS inline pour le :hover */}
      <style>{`
        .serviceCard {
          position: relative;
          background: rgba(255,255,255,.05);
          padding: 20px 12px;
          border-radius: 8px;
          text-align: center;
          border: 1px solid rgba(255,255,255,.1);
          cursor: pointer;
          transition: transform .3s ease, box-shadow .3s ease, z-index .3s ease;
          z-index: 1;
        }
        .serviceCard:hover {
          transform: scale(1.10);
          z-index: 14;
          box-shadow: 0 0 18px 4px rgba(255,51,153,.6); /* glow rose */
        }
      `}</style>

      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>SERVICES</h1>
        <p style={styles.pageDescription}>Ce que je peux créer pour vous — du concept au déploiement.</p>

        <div style={styles.servicesGrid}>
          {serviceList.map((s, i) => (
            <div key={i} className="serviceCard">
              <div style={styles.serviceIcon}>{s.icon}</div>
              <h3 style={styles.serviceTitle}>{s.title}</h3>
              <p style={styles.serviceDescription}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  pageHeader: { textAlign: 'center', marginBottom: 40, width: '100%' },
  pageTitle: {  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 600,
    marginBottom: '15px',
    color: '#fff' },
  pageDescription: { fontSize: '1rem', color: 'rgba(255,255,255,.7)', maxWidth: 480, margin: '0 auto 25px' },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 15,
    maxWidth: 1100,
    width: '100%',
    margin: '0 auto'
  },
  serviceIcon: { fontSize: '1.8rem', marginBottom: 8 },
  serviceTitle: { fontSize: '1rem', fontWeight: 600, marginBottom: 5, color: '#ff3399' },
  serviceDescription: { fontSize: '.8rem', color: 'rgba(255,255,255,.7)', lineHeight: 1.35 }
};

export default Services;