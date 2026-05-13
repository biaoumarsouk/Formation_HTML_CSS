import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoResponsive = {
  html: `<div class="grille-responsive">
  <div class="carte">📱 Mobile</div>
  <div class="carte">💻 Desktop</div>
  <div class="carte">🖥️ Large</div>
</div>`,
  css: `.grille-responsive {
  display: grid;
  gap: 20px;
  /* 1 colonne par défaut (Mobile) */
  grid-template-columns: 1fr; 
}

/* Si l'écran fait plus de 768px (Tablette/PC) */
@media (min-width: 768px) {
  .grille-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}

.carte {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  border: 2px solid #e2e8f0;
  color: #3b82f6;
}`,
  desc: "Redimensionnez votre fenêtre ou observez comment la grille passe de 1 à 3 colonnes grâce au @media."
};

export default function Responsive() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 7
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Design <span className="text-blue-600">Responsive</span>
        </h1>
      </header>

      {/* CONCEPT MOBILE FIRST */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-100">
          <h2 className="text-2xl font-bold mb-4">L'approche Mobile First</h2>
          <p className="text-blue-100 leading-relaxed text-sm">
            En 2025, plus de 60% du trafic web est mobile. On code d'abord pour le petit écran, puis on ajoute des règles pour les écrans plus larges.
          </p>
          <div className="mt-6 flex gap-2">
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">SMARTPHONE</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">TABLETTE</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">DESKTOP</span>
          </div>
        </div>
        
        <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4 text-slate-800">La Media Query</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            C'est une condition en CSS. Elle dit : "Si l'écran est plus large que X pixels, applique ce style".
          </p>
          <code className="block bg-slate-50 p-4 rounded-xl text-blue-600 text-xs font-mono">
            @media (min-width: 768px) {'{'} ... {'}'}
          </code>
        </div>
      </section>

      {/* VIEWPORT META */}
      <section className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl p-8">
        <h2 className="text-xl font-bold mb-4">La balise magique : Viewport</h2>
        <p className="text-sm text-slate-500 mb-4 italic">À placer obligatoirement dans le &lt;head&gt; de votre HTML :</p>
        <code className="block bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs overflow-x-auto">
          &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
        </code>
      </section>

      <InteractiveDemo demo={demoResponsive} />

      <footer className="mt-10 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm font-medium italic">On ajoute du mouvement ?</div>
        <Link 
          to="/lesson/animations" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Animations CSS →
        </Link>
      </footer>
    </div>
  );
}