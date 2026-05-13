import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoPricing = {
  html: `<div class="pricing-card">
  <div class="badge">Populaire</div>
  <h3>Plan Pro</h3>
  <div class="price">29€<span>/mois</span></div>
  <ul>
    <li>Projets illimités</li>
    <li>Support 24/7</li>
    <li>Accès à vie</li>
  </ul>
  <button>Choisir ce plan</button>
</div>`,
  css: `.pricing-card {
  background: white;
  padding: 40px;
  border-radius: 30px;
  text-align: center;
  position: relative;
  border: 2px solid #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
}
.badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
}
.price { font-size: 40px; font-weight: 900; margin: 20px 0; }
.price span { font-size: 14px; color: #64748b; }
ul { list-style: none; padding: 0; margin-bottom: 30px; color: #64748b; }
li { margin-bottom: 10px; }
button {
  width: 100%;
  background: #1e293b;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}
button:hover { background: #3b82f6; transform: translateY(-3px); }`,
  desc: "Analyse d'une carte de prix : Positionnement absolu pour le badge et Flexbox pour l'alignement."
};

export default function RealDesigns() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 9
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Composants <span className="text-blue-600">Réels</span>
        </h1>
      </header>

      <section className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200">
        <h2 className="text-2xl font-bold mb-6 italic">L'œil du développeur</h2>
        <p className="text-slate-600 leading-relaxed mb-6">
          Un bon développeur ne voit pas une "image", il voit des <strong>boîtes</strong>. Avant de coder, apprenez à découper une maquette :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center text-xs font-bold">Le Conteneur (Wrapper)</div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center text-xs font-bold">La Hiérarchie (Titres, Corps)</div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center text-xs font-bold">Les Détails (Ombres, Paddings)</div>
        </div>
      </section>

      <InteractiveDemo demo={demoPricing} />

      <footer className="mt-10 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm font-medium italic">Le moment de gloire approche...</div>
        <Link 
          to="/lesson/final-project" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Projet Final : Landing Page →
        </Link>
      </footer>
    </div>
  );
}