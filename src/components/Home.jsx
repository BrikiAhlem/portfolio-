import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import Services from './Services';
import Contact from './Contact';
import Technologies from './Technologies';
import Portfolio from './Portfolio';
import Planning from './Planning';

/* ---------- ICONS (inline SVG) ---------- */
const CodeBracketIcon  = (p) => (
  <svg {...p} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8l-4 4m0 0l4 4m-4-4h18" />
  </svg>
);
const ServerIcon = (p) => (
  <svg {...p} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2…" />
  </svg>
);
const CpuChipIcon = (p) => (
  <svg {...p} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

/* ---------- MAIN ---------- */
const Home = () => {
  /* typewriter Briki Ahlem */
  const [typedName, setTypedName] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullName = 'Briki Ahlem';
useEffect(() => {
  let i = 0;
  const timer = setInterval(() => {
    setTypedName(fullName.slice(0, ++i));
    if (i > fullName.length) {
      clearInterval(timer);
      setShowCursor(false); // ← masque le curseur
    }
  }, 150);
  return () => clearInterval(timer);
}, []);

  /* progress bar */
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  /* scroll-to-top */
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  /* techno pills */
  const techs = ['React', 'TypeScript', 'Node.js', 'Next.js', 'GraphQL'];
  const [activeTech, setActiveTech] = useState(null);

  /* floating emojis */
/* emojis fixes avec micro-animation */
const fixedEmojis = [

  { emoji: '⚛️', top: '25%', left: '85%' },
  { emoji: '❤️', top: '40%', left: '12%' },
  { emoji: '🚀', top: '55%', left: '88%' },
  { emoji: '☕', top: '70%', left: '15%' },
  { emoji: '🔥', top: '80%', left: '82%' },

  { emoji: '🐤', top: '45%', left: '70%' },

];
// just under fixedEmojis


  /* floating code snippets */
  const codeLines = [
    { icon: CodeBracketIcon, text: 'const [state, setState] = useState();' },
    { icon: ServerIcon,      text: 'npm install framer-motion' },
    { icon: CpuChipIcon,     text: 'async function fetchData() { ... }' },
  ];

  return (
    <>
      {/* progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg,#ff3399,#9933ff)',
          transformOrigin: '0%',
          scaleX,
          zIndex: 9999,
        }}
      />
      <Toaster position="top-right" toastOptions={{ style: { background: '#0f0f23', color: '#fff' } }} />

      {/* HERO */}
      <section id="home" style={s.hero}>
        {/* animated backgrounds */}
        <div style={s.bgGrid} />
        <div style={s.bgGradient} />

        {/* floating emojis */}
      {fixedEmojis.map(({ emoji, top, left }, idx) => (
  <motion.div
    key={idx}
    style={{ position: 'absolute', top, left, fontSize: '2rem', pointerEvents: 'none' }}
    animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
    transition={{ repeat: Infinity, duration: 3, delay: idx * 0.4 }}
  >
    {emoji}
  </motion.div>
))}


        {/* floating code */}
        <div style={s.codeCol}>
          {codeLines.map(({ icon: Icon, text }, idx) => (
            <motion.div
              key={idx}
              style={{
                ...s.floatingCard,
                top: `${20 + idx * 25}%`,
                left: idx % 2 ? '12%' : undefined,
                right: idx % 2 ? undefined : '12%',
              }}
              animate={{ y: [0, -8, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ repeat: Infinity, duration: 4 + idx, delay: idx }}
            >
              <Icon style={{ width: 20, height: 20, marginRight: 8 }} />
              {text}
            </motion.div>
          ))}
        </div>

        {/* center content */}
        <motion.div style={s.textCol} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
          {/* name */}
      <motion.h1 style={s.name} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ delay: 0.4, type: 'spring' }}>
  {typedName}
  {showCursor && <span style={s.cursor}>|</span>}
</motion.h1>

          {/* role */}
          <div style={s.roleBox}>
            <span>__________</span>
            <span style={s.role}>web developer</span>
            <span>__________</span>
          </div>

          {/* tech pills */}
          <div style={s.tech}>
            {techs.map((t) => (
              <motion.button
                key={t}
                style={t === activeTech ? s.badgeActive : s.badge}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveTech(t)}
              >
                {t}
              </motion.button>
            ))}
          </div>

          {/* call-to-action */}
          <div style={s.ctas}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={s.btnPrimary}
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
            >
              Voir mes projets
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={s.btnSecondary}
              onClick={() => toast.success('CV téléchargé !')}
            >
              Télécharger CV
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* other sections */}
      <section id="services" style={s.section}><Services /></section>
      <section id="portfolio" style={s.section}><Portfolio /></section>
      <section id="technologies" style={s.section}><Technologies /></section>
       <section id="planning" style={s.section}><Planning /></section>
      <section id="contact" style={s.section}><Contact /></section>
     

      {/* scroll-to-top */}
      {showTop && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          style={s.topBtn}
          onClick={scrollToTop}
        >
          ↑
        </motion.button>
      )}
    </>
  );
};

/* ---------- STYLES ---------- */
const s = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    overflow: 'hidden',
  },
  bgGrid: {
    position: 'absolute',
    inset: 0,
    backgroundImage:
      'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    opacity: 0.2,
    animation: 'pulse 4s infinite',
  },
  bgGradient: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,51,153,.15) 0%, transparent 60%)',
  },
  emoji: {
    position: 'absolute',
    fontSize: '2rem',
    pointerEvents: 'none',
  },
  textCol: { textAlign: 'center', zIndex: 10 },
  name: {
    fontSize: 'clamp(3rem,8vw,5rem)',
    fontWeight: 800,
    color: '#fff',
  },
  cursor: { color: '#ff3399', animation: 'blink 1s infinite' },
  roleBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    margin: '0 0 20px', // ← moins d’espace
  },
  role: {
    fontSize: 'clamp(1.5rem,4vw,2.5rem)',
    fontWeight: 600,
    color: '#ff3399',
    textTransform: 'uppercase',
    marginTop: '-40px'
  },
  subtitle: {
    fontSize: '1.25rem',
    lineHeight: 1.6,
    color: 'rgba(255,255,255,.7)',
    margin: '24px auto 40px',
    maxWidth: 600,
    top:'-50px'   
  },
  tech: {
    display: 'flex',
    justifyContent: 'center',
    gap: 12,
    flexWrap: 'wrap',
    marginBottom: 40,
  },
  badge: {
    padding: '6px 16px',
    background: 'rgba(255,255,255,.08)',
    border: '1px solid rgba(255,255,255,.15)',
    borderRadius: '9999px',
    fontSize: '.9rem',
    color: 'rgba(255,255,255,.85)',
    cursor: 'pointer',
    transition: 'all .3s ease',
  },
  badgeActive: {
    padding: '6px 16px',
    borderRadius: '9999px',
    fontSize: '.9rem',
    background: 'linear-gradient(135deg,#ff3399,#9933ff)',
    color: '#fff',
    border: '1px solid transparent',
  },
  floatingCard: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px',
    background: 'rgba(255,255,255,.05)',
    border: '1px solid rgba(255,255,255,.1)',
    borderRadius: 10,
    color: 'rgba(255,255,255,.6)',
    fontSize: '.8rem',
    fontFamily: "'Fira Code', monospace",
    backdropFilter: 'blur(6px)',
  },
  ctas: {
    display: 'flex',
    justifyContent: 'center',
    gap: 20,
    flexWrap: 'wrap',
  },
  btnPrimary: {
    padding: '14px 32px',
    border: 'none',
    borderRadius: '9999px',
    background: 'linear-gradient(135deg,#ff3399,#9933ff)',
    color: '#fff',
    fontWeight: 600,
    cursor: 'pointer',
  },
  btnSecondary: {
    padding: '14px 32px',
    border: '1px solid rgba(255,255,255,.2)',
    borderRadius: '9999px',
    background: 'transparent',
    color: '#fff',
    cursor: 'pointer',
  },
  section: { paddingTop: 100 },
  topBtn: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    width: 50,
    height: 50,
    border: 'none',
    borderRadius: '50%',
    background: 'linear-gradient(135deg,#ff3399,#9933ff)',
    color: '#fff',
    fontSize: 20,
    cursor: 'pointer',
    zIndex: 999,
  },
};

/* CSS keyframes */
const css = document.createElement('style');
css.innerHTML = `
  @keyframes blink {
    0%,50% { opacity:1; } 51%,100% { opacity:0; }
  }
  @keyframes pulse {
    0%,100% { opacity:.2; } 50% { opacity:.4; }
  }
`;
document.head.appendChild(css);

export default Home;