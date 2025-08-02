// Planning.jsx
import React from 'react';

const Planning = () => {
  const steps = [
    {
      id: 1,
      title: 'Idéation & Planification',
      icon: '💡',
      color: '#00c853', // vert
      tasks: [
        'Recueil des besoins et recherche de marché',
        'Flux utilisateur et wireframes',
        'Prototype interactif',
      ],
    },
    {
      id: 2,
      title: 'Développement',
      icon: '⚙️',
      color: '#9933ff', // violet
      tasks: [
        'Architecture & choix technos',
        'Mode agile avec sprints réguliers',
        'Tests continus et revues de code',
      ],
    },
    {
      id: 3,
      title: 'Lancement & Croissance',
      icon: '🚀',
      color: '#007bff', // bleu
      tasks: [
        'Optimisation et soumission stores',
        'Analytics & monitoring',
        'Mises à jour & nouvelles fonctionnalités',
      ],
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Processus de Développement</h1>
      <p style={styles.subtitle}>
         J’ai un planning bien structuré et un processus clair pour la gestion de mes projets. 
      </p>

      <div style={styles.flow}>
        {steps.map((s, idx) => (
          <React.Fragment key={s.id}>
            {/* CARD */}
            <div style={styles.card}>
              {/* Icône + titre */}
              <div style={styles.header}>
                <span style={{ ...styles.icon, filter: `hue-rotate(${s.id * 120}deg) saturate(2)` }}>
                  {s.icon}
                </span>
                <h3 style={{ ...styles.cardTitle, color: s.color }}>{s.title}</h3>
              </div>

              {/* Liste numérotée avec cercles colorés */}
              <ol style={styles.list}>
                {s.tasks.map((t, i) => (
                  <li key={i} style={styles.item}>
                    <span style={{ ...styles.circle, borderColor: s.color, color: s.color }}>
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ol>
            </div>

            {/* Arrow */}
            {idx < steps.length - 1 && (
              <div style={styles.connector}>
                <svg width="32" height="32" viewBox="0 0 24 24">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke={steps[idx + 1].color}
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// -------------  Styles  -------------
const styles = {
  page: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '60px 20px',
    textAlign: 'center',
    fontFamily: 'system-ui, sans-serif',
    color: '#fff',
    top:'-70px'
  },
  title: {
    fontSize: '2.8rem',
    fontWeight: 700,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,.7)',
    marginBottom: 60,
  },
  flow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 30,
    flexWrap: 'nowrap',
  },
  card: {
    flex: '1 1 300px',
    maxWidth: 340,
    background: 'rgba(255,255,255,.05)',
    border: '1px solid rgba(255,255,255,.1)',
    borderRadius: 16,
    padding: '30px 25px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  icon: {
    fontSize: 32,
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 600,
  },
  list: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    fontSize: '0.9rem',
    lineHeight: 1.7,
    color: 'rgba(255,255,255,.85)',
    textAlign: 'left',
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 8,
  },
  circle: {
    flexShrink: 0,
    width: 22,
    height: 22,
    borderRadius: '50%',
    border: '2px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    lineHeight: 1,
  },
  connector: {
    display: 'flex',
    alignItems: 'center',
  },
};

export default Planning;