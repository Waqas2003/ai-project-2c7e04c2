import React from 'react';
import messi from '../assets/messi.jpg';
import diMaria from '../assets/di-maria.jpg';
import otamendi from '../assets/otamendi.jpg';

function Team() {
  return (
    <section className="bg-white py-4">
      <div className="container">
        <h2 className="text-3xl font-bold">Our Team</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-1/3 p-4">
            <img src={messi} alt="Lionel Messi" className="rounded-full w-full" />
            <h3 className="text-lg font-bold">Lionel Messi</h3>
          </div>
          <div className="w-1/3 p-4">
            <img src={diMaria} alt="Ángel Di María" className="rounded-full w-full" />
            <h3 className="text-lg font-bold">Ángel Di María</h3>
          </div>
          <div className="w-1/3 p-4">
            <img src={otamendi} alt="Nicolás Otamendi" className="rounded-full w-full" />
            <h3 className="text-lg font-bold">Nicolás Otamendi</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;