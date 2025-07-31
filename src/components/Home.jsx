import React from 'react';
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "DEVELOPER";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Main Content */}
      <main style={styles.mainContent}>
        <div style={styles.textContainer}>
          <h1 style={styles.title}>
            <span style={styles.titlePart}>FRONTEND</span>
            <span style={{...styles.titlePart, ...styles.typedText}}>
              {typedText}
              <span style={styles.cursor}>|</span>
            </span>
          </h1>
          
          <p style={styles.description}>
            I am <span style={styles.name}>Ahlem </span> - <span style={styles.webDev}>web-developer</span> with a passion for<br />
            creating beautiful and responsive websites.
          </p>
         
          <button style={styles.ctaButton}>
            <span style={styles.buttonText}>VIEW MY WORK</span>
            <div style={styles.buttonHoverEffect}></div>
          </button>
          
          <button style={styles.ctaButton}>
            <span style={styles.buttonText}>Download CV </span>
            <div style={styles.buttonHoverEffect}></div>
          </button>
        </div>
        
        <div style={styles.imageContainer}>
          {/* Code snippets background */}
          <div style={styles.codeSnippets}>
            {snippets.map((snippet, index) => (
              <div key={index} style={{
                ...styles.snippet,
                top: `${5 + (index * 10)}%`,
                left: index % 2 === 0 ? `${5 + (index % 4 * 10)}%` : 'auto',
                right: index % 2 !== 0 ? `${5 + (index % 4 * 10)}%` : 'auto',
                opacity: 0.7 - (index * 0.05),
               
              }}>
                {snippet}
              </div>
            ))}
          </div>
          
          {/* Image placeholder */}
          <div style={styles.profileImagePlaceholder}>
            <div style={styles.imageText}>
              <img 
                src={('../../public/assets/profil.png')} 
                style={styles.profileImage}
                alt="Profil"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Données pour les snippets de code
const snippets = [
  'react js console.log("Hello World");',
  'function Component() { mongoose catch (error) { console.log(error) }',
  'return <div>Hello</div>;   flex-direction: column; ',
  'const [state, setState] = useState();',
  'export default App; npm install',
  'grid-template-columns: repeat(3, 1fr);position: absolute; top: 0;',
  'useEffect(() => {}, []); async function fetchData() {',
  'props.children.map(child => child);',
  'npm start dev server running',
  'border-radius: 8px; box-shadow:    try { await axios.get() }',
 

 
];

// Styles CSS
const styles = {
  pageContainer: {
    minHeight: '10vh',
    width: '210vh',
    backgroundColor: '#0a0c14',
    color: 'white',
    fontFamily: "'Inter', sans-serif",
    overflowX: 'hidden',
  },
  languageSelector: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px'
  },
  languageText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '0.875rem'
  },
  globeIcon: {
    color: 'rgba(255, 255, 255, 0.6)'
  },
  mainContent: {
    paddingTop: '120px',
    width: '130%',
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    minHeight: 'calc(100vh - 120px)'
  },
  textContainer: {
    flex: 1,
    paddingRight: '40px',
    zIndex: 10
  },
  title: {
    fontSize: '5rem',
    fontWeight: '700',
    lineHeight: '1.1',
    marginBottom: '40px'
  },
  titlePart: {
    display: 'block'
  },
  typedText: {
    color: 'transparent',
    backgroundImage: 'linear-gradient(to right, #ff3399, #9933ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text'
  },
  cursor: {
    animation: 'blink 1s infinite',
    marginLeft: '4px'
  },
  description: {
    fontSize: '1.25rem',
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: '40px'
  },
  name: {
    color: 'white',
    fontWeight: '500'
  },
  webDev: {
    color: '#4a9bff'
  },
  ctaButton: {
    position: 'relative',
    padding: '12px 32px',
    color: 'white',
    border: 'none',
    background: 'linear-gradient(to right, #ff3399, #9933ff)',

    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    overflow: 'hidden',
    zIndex: 1,
    marginRight: '15px' ,
    boxshadow: '5px 10px #ff3399',
  },
  buttonText: {
    position: 'relative',
    zIndex: 2
  },
  buttonHoverEffect: {
    position: 'absolute',
    top: '1px',
    left: '1px',
    right: '1px',
    bottom: '1px',
    backgroundColor: '#0a0c14',
    borderRadius: '9999px',
    zIndex: 1,
    transition: 'opacity 0.3s ease'
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  codeSnippets: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1,
    color: 'white',
    width: '100%',
    fontFamily: "'Fira Code', monospace",
    fontSize: '0.875rem',
    textShadow: '0 0 8px rgba(255,255,255,0.5)' // Added glow effect
  },
  snippet: {
    position: 'absolute',
    whiteSpace: 'nowrap',
    fontSize: '0.8rem',
    transition: 'all 0.3s ease',
    color: '#ffffff', // Ensured white color
    ':hover': {
      opacity: '1 !important',
    
    }
  },
  profileImagePlaceholder: {
    width: '400px',
    height: '500px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
  },
  imageText: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '1rem'
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  '@keyframes blink': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0 }
  }
};

export default Home;