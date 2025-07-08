import React from 'react';
import argentinaFlag from '../assets/argentina-flag.png';

function Hero() {
  return (
    <section className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${argentinaFlag})` }}>
      <div className="container flex justify-center items-center h-screen">
        <h2 className="text-5xl font-bold text-white">La Albiceleste</h2>
      </div>
    </section>
  );
}

export default Hero;