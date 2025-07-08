import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <Team />
      <Footer />
    </div>
  );
}

export default App;