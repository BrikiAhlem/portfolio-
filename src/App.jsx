// App.jsx  – version corrigée, responsive & sans espaces vides
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':        return <Home />;
      case 'services':    return <Services />;
      case 'technologies':return <Technologies />;
      case 'portfolio':   return <Portfolio />;
      case 'contact':     return <Contact />;
      default:            return <Home />;
    }
  };

  return (
    <div style={styles.appWrapper}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main style={styles.main}>{renderCurrentPage()}</main>
    </div>
  );
};

export default App;

const styles = {
appWrapper: {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#0c132fff',
  color: '#fff',
  fontFamily: "'Inter', sans-serif",
  overflowX: 'hidden',
  width: '100vw', // ✅ Ajout ici
  height: '99vh' // (optionnel mais souvent utilisé avec width)
} ,
  main: {
    // pousse le contenu juste sous la Navbar
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '80px',  // hauteur Navbar + petit espace
    paddingBottom: '40px',
    paddingLeft: '20px',
    paddingRight: '20px',
    width: '100%'
  }
};