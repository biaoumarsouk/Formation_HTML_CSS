import React from 'react';
import InteractiveDemo from '../../components/InteractiveDemo';
import { Link } from 'react-router-dom';

const demoData = {
  html: `<h1>Hello World</h1>`,
  css: `h1 { color: blue; }`,
  desc: "Exemple d'introduction"
};

export default function IntroWeb() {
  return (
    <div className="animate-fadeIn">
      <h1 className="text-4xl font-black mb-6">Introduction au Web</h1>
      <p className="text-lg text-slate-600 mb-8">
        Le web est un réseau mondial... (votre contenu détaillé ici)
      </p>

      <InteractiveDemo demo={demoData} />

      <div className="mt-12 flex justify-end">
        <Link to="/lesson/setup" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold">
          Leçon suivante : Installation →
        </Link>
      </div>
    </div>
  );
}