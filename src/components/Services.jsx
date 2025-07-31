import React from 'react';

const Services = () => {
  const serviceList = [
    {
      title: 'Responsive Web Design',
      desc: 'Pixel-perfect layouts that adapt to every screen size.',
      icon: '📱'
    },
    {
      title: 'React SPA / PWA',
      desc: 'Lightning-fast single-page or progressive web apps.',
      icon: '⚛️'
    },
    {
      title: 'API Integration',
      desc: 'Seamless connection to REST / GraphQL backends.',
      icon: '🔗'
    },
    {
      title: 'Performance & SEO',
      desc: 'Core Web Vitals tuned for speed and discoverability.',
      icon: '🚀'
    },
    {
      title: 'UI / UX Design',
      desc: 'Intuitive interfaces with Figma prototypes.',
      icon: '💡'
    },
    {
      title: 'E-commerce Sites',
      desc: 'Headless Shopify / Stripe stores that convert.',
      icon: '🛒'
    }
  ];

  return (
    <div style={styles.pageHeader}>
      <h1 style={styles.pageTitle}>SERVICES</h1>
      <p style={styles.pageDescription}>
        Ce que je peux créer pour vous — du concept au déploiement.
      </p>

      <div style={styles.servicesGrid}>
        {serviceList.map((s, i) => (
          <div key={i} style={styles.serviceCard}>
            <div style={styles.serviceIcon}>{s.icon}</div>
            <h3 style={styles.serviceTitle}>{s.title}</h3>
            <p style={styles.serviceDescription}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Re-use the styles object from App.jsx
const styles = {
  pageHeader: { textAlign: 'center', marginBottom: 60, width: '100%' },
  pageTitle: { fontSize: '4rem', fontWeight: 700, marginBottom: 20 },
  pageDescription: {
    fontSize: '1.25rem',
    color: 'rgba(255,255,255,.7)',
    maxWidth: 600,
    margin: '0 auto'
  },
  servicesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
    gap: 30,
    width: '100%'
  },
  serviceCard: {
    background: 'rgba(255,255,255,.05)',
    padding: 40,
    borderRadius: 12,
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,.1)',
    transition: 'transform .3s ease'
  },
  serviceIcon: { fontSize: '3rem', marginBottom: 20 },
  serviceTitle: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: 15,
    color: '#ff3399'
  },
  serviceDescription: { color: 'rgba(255,255,255,.7)', lineHeight: 1.6 }
};

export default Services;