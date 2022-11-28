import React from 'react';
import './App.css';
import Footer from './components/Footer.base';
import Navbar from './components/Navbar.base';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div style={{height: '100vh'}}></div>
      <Footer />
    </div>
  );
}

export default App;
