import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoAnimations = {
  html: `<div class="box-container">
  <button class="btn-anime">Passez la souris !</button>
  <div class="card-glass">Glassmorphism</div>
</div>`,
  css: `.box-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

/* Effet de transition simple */
.btn-anime {
  background: #3b82f6;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease; /* LA MAGIE EST ICI */
}

.btn-anime:hover {
  transform: scale(1.1) rotate(5deg);
  background: #2563eb;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Effet de verre moderne */
.card-glass {
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  color: #1e293b;
  font-weight: 900;
  text-transform: uppercase;
}`,
  desc: "Testez les effets de survol (hover) et découvrez le flou d'arrière-plan (backdrop-filter)."
};

export default function Animations() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 8
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Effets & <span className="text-blue-600">Animations</span>
        </h1>
      </header>

      {/* TRANSFORM & TRANSITION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Transitions</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            La propriété <code className="text-blue-600 font-bold">transition</code> permet de rendre un changement fluide au lieu d'être brutal. On définit la durée (ex: 0.3s) et le type de courbe (ex: ease).
          </p>
        </div>
        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Transforms</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            <code className="text-blue-600 font-bold">transform</code> permet de déplacer, faire pivoter, ou agrandir un élément sans perturber le reste de la page.
          </p>
        </div>
      </section>

      {/* MODERN TRENDS */}
      <section className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-6">Tendances 2026</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <span className="text-blue-400 text-2xl font-black italic">01</span>
              <p className="font-bold">Glassmorphism</p>
              <p className="text-xs text-slate-400 leading-relaxed">Effet de verre translucide avec flou.</p>
            </div>
            <div className="space-y-2">
              <span className="text-purple-400 text-2xl font-black italic">02</span>
              <p className="font-bold">Mesh Gradients</p>
              <p className="text-xs text-slate-400 leading-relaxed">Mélanges de couleurs organiques et doux.</p>
            </div>
            <div className="space-y-2">
              <span className="text-pink-400 text-2xl font-black italic">03</span>
              <p className="font-bold">Micro-interactions</p>
              <p className="text-xs text-slate-400 leading-relaxed">Petits retours visuels lors du clic ou du survol.</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -mb-48 -mr-48"></div>
      </section>

      <InteractiveDemo demo={demoAnimations} />

      <footer className="mt-10 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm font-medium italic">On passe à la pratique réelle ?</div>
        <Link 
          to="/lesson/real-designs" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Designs Réels →
        </Link>
      </footer>
    </div>
  );
}