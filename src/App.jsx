// App.jsx  – version corrigée, responsive & sans espaces vides
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  
  

  return (
    <div style={styles.appWrapper}>
    <Navbar />
    <Home/>
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