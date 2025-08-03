import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, Star } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('tous');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Site',
      desc: 'Site e-commerce complet avec MERN Stack et intégration Flouci. Interface moderne avec gestion produits, panier et authentification.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Flouci API', 'Tailwind CSS'],
      image: 'assets/ecommer mode .tn.png',
      category: 'web',
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Dashboard Gestion Stock',
      desc: 'Dashboard administratif avec visualisation temps réel. Graphiques interactifs, alertes stock et rapports détaillés.',
      tech: ['React', 'Node.js', 'MongoDB', 'Recharts', 'Docker'],
      image: 'assets/dash admin gestion .png',
      category: 'dashboard',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Fellaha Smart',
      desc: 'App mobile pour agriculteurs tunisiens. Conseils personnalisés, météo, calendrier agricole et marketplace intégrée.',
      tech: ['Flutter', 'React Native', 'Firebase', 'Node.js'],
      image: 'assets/app fleha .png',
      category: 'mobile',
      featured: true,
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'SmartCity Platform',
      desc: 'Plateforme de réservation services urbains. Transport, hôtels, restaurants avec géolocalisation et paiements.',
      tech: ['Next.js', 'Express.js', 'MongoDB', 'Stripe'],
      image: 'assets/smartcity.png',
      category: 'web',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Assistant IA Magasin',
      desc: 'Assistant intelligent avec analyse comportementale. Recommandations personnalisées et analytics avancés.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'OpenAI API'],
      image: 'assets/assisatnt de magasin.png',
      category: 'ia',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Messagerie Katkout',
      desc: 'Messagerie instantanée moderne. Chat temps réel, partage fichiers, appels vidéo et notifications push.',
      tech: ['React', 'Node.js', 'Socket.IO', 'WebRTC'],
      image: 'assets/messagerie katkout.png',
      category: 'web',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const categories = [
    { id: 'tous', label: 'Tous', count: projects.length },
    { id: 'web', label: 'Web', count: projects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'dashboard', label: 'Dashboard', count: projects.filter(p => p.category === 'dashboard').length },
    { id: 'ia', label: 'IA', count: projects.filter(p => p.category === 'ia').length }
  ];

  const filteredProjects = filter === 'tous' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div style={styles.container}>
      {/* Header */}
      <motion.div 
        style={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.title}>
          Mes <span >Projets</span>
        </h1>
        <p style={styles.subtitle}>Découvrez mes réalisations récentes</p>
      </motion.div>

      {/* Filters */}
      <motion.div 
        style={styles.filterContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {categories.map(cat => (
          <motion.button
            key={cat.id}
            style={{
              ...styles.filterBtn,
              ...(filter === cat.id ? styles.filterActive : {})
            }}
            onClick={() => setFilter(cat.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.label}
            <span style={styles.count}>{cat.count}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          style={styles.grid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              style={styles.card}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
        
              
              {/* Image */}
              <div style={styles.imageWrapper}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={styles.image}
                />
                <div style={styles.overlay} className="image-overlay">
                  <div style={styles.overlayContent}>
                    <motion.a
                      href={project.demoUrl}
                      style={styles.overlayBtn}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span>Voir projet</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      style={styles.overlayBtn}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span>Code source</span>
                    </motion.a>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div style={styles.content}>
                <h3 style={styles.cardTitle}>{project.title}</h3>
                <p style={styles.cardDesc}>{project.desc}</p>
                
                {/* Tech stack */}
                <div style={styles.techStack}>
                  {project.tech.slice(0, 3).map(tech => (
                    <span key={tech} style={styles.techTag}>{tech}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span style={styles.techMore}>+{project.tech.length - 3}</span>
                  )}
                </div>
                
                <motion.button
                  style={styles.viewBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <Eye size={16} />
                  Voir détails
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal simplifié */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            style={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              style={styles.modal}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                style={styles.closeBtn} 
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>

              <div style={styles.modalImage}>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  style={styles.modalImg}
                />
              </div>

              <div style={styles.modalContent}>
                <div style={styles.modalHeader}>
                  <h2 style={styles.modalTitle}>{selectedProject.title}</h2>
                  {selectedProject.featured && (
                    <div style={styles.modalFeatured}>
                      <Star size={16} />
                      Featured
                    </div>
                  )}
                </div>
                
                <p style={styles.modalDesc}>{selectedProject.desc}</p>
                
                <div style={styles.modalTech}>
                  <h4 style={styles.techTitle}>Technologies</h4>
                  <div style={styles.techList}>
                    {selectedProject.tech.map(tech => (
                      <span key={tech} style={styles.modalTechTag}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div style={styles.modalActions}>
                  <motion.a
                    href={selectedProject.demoUrl}
                    style={styles.primaryBtn}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} />
                    Voir projet
                  </motion.a>
                  <motion.a
                    href={selectedProject.githubUrl}
                    style={styles.secondaryBtn}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    Code source
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px',
    minHeight: '100vh',
    color: '#fff'
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  title: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 600,
    marginBottom: '15px',
    color: '#fff'
  },
  gradient: {
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: 'rgba(255,255,255,0.7)',
    maxWidth: '500px',
    margin: '0 auto'
  },
  filterContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    marginBottom: '50px'
  },
  filterBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '25px',
    color: 'rgba(255,255,255,0.7)',
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: 500
  },
  filterActive: {
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    borderColor: 'transparent',
    color: '#fff',
    fontWeight: 600
  },
  count: {
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '10px',
    padding: '2px 6px',
    fontSize: '0.75rem',
    fontWeight: 700
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '25px',
    marginBottom: '80px'
  },
  card: {
    background: 'rgba(255,255,255,0.04)',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.1)',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    position: 'relative',
    boxShadow: '0 8px 30px rgba(0,0,0,0.4)'
  },
  featuredBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: 600,
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  imageWrapper: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease'
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
overlayContent: {
  display: 'flex',
  gap: '15px',
  flexDirection: 'row', // ⬅️ ligne horizontale au lieu de verticale
  alignItems: 'center',
  
},
  overlayBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 20px',
    background: '#55484fff',
    borderRadius: '25px',
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255,51,153,0.3)',
    backdropFilter: 'blur(10px)'
  },
  content: {
    padding: '25px'
  },
  cardTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    color: '#fff',
    marginBottom: '12px',
    lineHeight: 1.3
  },
  cardDesc: {
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.6,
    marginBottom: '20px',
    fontSize: '0.95rem'
  },
  techStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px'
  },
  techTag: {
    background: 'rgba(255,51,153,0.15)',
    border: '1px solid rgba(255,51,153,0.3)',
    color: '#ff3399',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.8rem',
    fontWeight: 500
  },
  techMore: {
    background: 'rgba(255,255,255,0.1)',
    color: 'rgba(255,255,255,0.6)',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.8rem'
  },
  viewBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '12px',
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    border: 'none',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    padding: '20px'
  },
  modal: {
    background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f23 100%)',
    borderRadius: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '85vh',
    overflow: 'auto',
    position: 'relative',
    boxShadow: '0 25px 50px rgba(0,0,0,0.7)'
  },
  closeBtn: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'rgba(255,255,255,0.1)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    cursor: 'pointer',
    zIndex: 10,
    transition: 'all 0.3s ease'
  },
  modalImage: {
    height: '250px',
    overflow: 'hidden'
  },
  modalImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  modalContent: {
    padding: '30px'
  },
  modalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '10px'
  },
  modalTitle: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#fff',
    margin: 0
  },
  modalFeatured: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    color: '#fff',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: 600
  },
  modalDesc: {
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 1.6,
    marginBottom: '25px',
    fontSize: '1rem'
  },
  modalTech: {
    marginBottom: '30px'
  },
  techTitle: {
    color: '#fff',
    fontSize: '1.1rem',
    fontWeight: 600,
    marginBottom: '15px'
  },
  techList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  modalTechTag: {
    background: 'rgba(255,51,153,0.15)',
    border: '1px solid rgba(255,51,153,0.3)',
    color: '#ff3399',
    padding: '8px 14px',
    borderRadius: '15px',
    fontSize: '0.85rem',
    fontWeight: 500
  },
  modalActions: {
    display: 'flex',
    gap: '15px',
    flexWrap: 'wrap'
  },
  primaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    background: 'linear-gradient(135deg, #ff3399, #9933ff)',
    border: 'none',
    borderRadius: '25px',
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer'
  },
  secondaryBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '25px',
    color: '#fff',
    fontSize: '0.9rem',
    fontWeight: 600,
    textDecoration: 'none',
    cursor: 'pointer'
  }
};

// CSS pour les effets hover
const hoverCSS = `
  .project-card:hover .image-overlay {
    opacity: 1 !important;
  }
  .project-card:hover img {
    transform: scale(1.05) !important;
  }
  
  .project-card .image-overlay {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover .image-overlay {
    opacity: 1;
  }
  
  .overlay-btn:hover {
    background: #e91e63 !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255,51,153,0.4) !important;
  }
`;

const styleElement = document.createElement('style');
styleElement.textContent = hoverCSS;
document.head.appendChild(styleElement);

export default Portfolio;