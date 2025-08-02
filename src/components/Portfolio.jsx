import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Site',
      desc: 'Site e-commerce développé avec le stack MERN et intégration du paiement via Flouci.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Flouci API', 'Tailwind', 'Vercel'],
      image: '/assets/ecommer mode .tn.png' // ✅ relatif à /public
    },
    {
      title: 'Gestion de Stock Dashboard',
      desc: 'Dashboard de gestion de stock avec visualisation des données en temps réel.',
      tech: ['React', 'Node.js', 'MongoDB', 'Recharts', 'Docker'],
      image: '/assets/dash admin gestion .png'
    },
    {
      title: 'Fellaha Smart (App Mobile Agricole)',
      desc: 'Application mobile destinée aux agriculteurs tunisiens pour les guider dans l’usage des produits agricoles.',
      tech: ['Flutter', 'React Native', 'Firebase', 'Node.js'],
      image: '/assets/appfehaSmart.png'
    },
    {
      title: 'SmartCity',
      desc: 'Plateforme web pour réserver des services urbains : transport, hôtel, restauration.',
      tech: ['Next.js', 'Express.js', 'MongoDB', 'React.js'],
      image: '/assets/smartcity.png'
    },
    {
      title: 'Assiatance IA ',
      desc: 'Real-time analytics with Recharts & websockets.',
      tech: ['React', 'Node.js', 'PostgreSQL'], 
      image: '/assets/assisatnt de magasin.png'
    },
    {
      title: 'Messagerie Katkout',
      desc: 'Messageri entre des user .',
      tech: ['React', 'Node.js', 'Framer Motion', 'Socket.IO'],   
      image:  '/assets/messagerie katkout.png'
    },
    {
      title: 'App Mobile',
      desc: 'Agricole app pour guider et facile.',
      tech: ['React Native', 'Flutter', 'Node.js', 'Firebase'], 
      image: '/assets/appfehaSmart.png'
    } ,
    {
      title: 'Vehucile Pro',
      desc: 'Vendre voiture .',
      tech: ['React ', 'expresse', 'Node.js', 'mongodb'], 
      image: '/assets/vehiculepro.jpg'
    }
  ];



  return (
    <div style={styles.pageHeader}>
      <h1 style={styles.pageTitle}>Mes Projets</h1>
      <p style={styles.pageDescription}>Quelques projets récents.</p>

      <div style={styles.portfolioGrid}>
        {projects.map((p, i) => (
          <div key={i} style={styles.projectCard}>
            <div style={styles.projectImage}>
              <img src={p.image} alt={p.title} style={styles.imageStyle} />
            </div>
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

/* -------------  NOUVEAUX styles avec animation ------------- */
const styles = {
  pageHeader: { textAlign: 'center', marginBottom: 60, width: '100%' },
  pageTitle: { fontSize: '4rem', fontWeight: 700, marginBottom: 20 },
  pageDescription: {
    fontSize: '1.25rem',
    color: 'rgba(255,255,255,.7)',
    maxWidth: 600,
    margin: '0 auto'
  },
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
    transition: 'transform .35s ease, box-shadow .35s ease',
    cursor: 'pointer'
  },
  'projectCard:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 0 20px rgba(255,51,153,.35)'
  },
  projectImage: {
    height: 200,
    background: 'rgba(255,255,255,.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform .35s ease'
  },
  'projectCard:hover img': {
    transform: 'scale(1.08)'
  },
  projectContent: { padding: 25 },
  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    marginBottom: 10,
    color: '#ff3399'
  },
  projectDescription: {
    color: 'rgba(255,255,255,.7)',
    marginBottom: 15,
    lineHeight: 1.5
  },
  projectTech: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  techTag: {
    background: 'linear-gradient(to right,#ff3399,#9933ff)',
    padding: '4px 12px',
    borderRadius: 15,
    fontSize: '.8rem',
    color: 'white'
  }
};

/* -----------  PETIT HELPER POUR LES HOVER INLINE  ----------- */
// Comme on utilise des objets inline, on applique le style hover via pseudo-objet.
// React ne gère pas directement les pseudo-classes, donc on délègue au CSS global.
// Solution rapide : injecter une petite feuille de style dynamique
(function injectHoverCSS() {
  const css = `
    .projectCard {
      transition: transform .35s ease, box-shadow .35s ease;
    }
    .projectCard:hover {
      transform: translateY(-8px);
      box-shadow: 0 0 20px rgba(255,51,153,.35);
    }
    .projectCard img {
      transition: transform .35s ease;
    }
    .projectCard:hover img {
      transform: scale(1.08);
    }
  `;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
})();

export default Portfolio;