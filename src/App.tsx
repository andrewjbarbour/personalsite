import React from 'react';
import './App.css';
import Footer from './components/Footer.base';
import Navbar from './components/Navbar.base';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Main() {
  return <div className="content-area">Main page</div>;
}

function Contact() {
  return <div className="content-area">Contact page</div>;
}

function Projects() {
  return <div className="content-area">Projects Page</div>;
}

function Writing() {
  return <div className="content-area">Writing Page</div>;
}

function Resume() {
  return <div className="content-area">Resume page</div>;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
