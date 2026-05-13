import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoIntro = {
  html: `<div class="container">
  <h1>Apprendre le Web</h1>
  <p>Le HTML crée la structure, le CSS apporte le style.</p>
  <button>Commencer</button>
</div>`,
  css: `.container {
  padding: 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  text-align: center;
}
h1 { color: #2563eb; font-weight: 900; margin-bottom: 10px; }
p { color: #64748b; margin-bottom: 20px; }
button { 
  background: #2563eb; 
  color: white; 
  border: none; 
  padding: 12px 30px; 
  border-radius: 50px; 
  font-weight: bold;
  cursor: pointer;
}`,
  desc: "Basculez pour voir comment le CSS transforme un texte brut en interface moderne."
};

export default function IntroWeb() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      {/* SECTION 1 : ENTÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 1
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Comprendre le <span className="text-blue-600">Web</span>
        </h1>
      </header>

      {/* SECTION 2 : LES FONDAMENTAUX */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold mb-4">C'est quoi un site internet ?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Un site web n'est rien d'autre qu'un ensemble de <strong>fichiers texte</strong> stockés sur un ordinateur puissant appelé <strong>Serveur</strong>.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Lorsque vous tapez une adresse (URL), votre navigateur (le Client) demande ces fichiers au serveur, les télécharge et les interprète pour vous afficher une page visuelle.
          </p>
        </div>
        <div className="bg-slate-900 rounded-2xl p-6 text-blue-400 font-mono text-sm shadow-inner">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-slate-500">// Le cycle du Web</p>
          <p><span className="text-pink-500">Client</span>.request(<span className="text-emerald-400">"index.html"</span>)</p>
          <p><span className="text-pink-500">Serveur</span>.send(<span className="text-emerald-400">File</span>)</p>
          <p><span className="text-pink-500">Browser</span>.render(<span className="text-emerald-400">Visual</span>)</p>
        </div>
      </section>

      {/* SECTION 3 : LE TRIO MAGIQUE */}
      <section>
        <h2 className="text-3xl font-black mb-8">Le Trio : HTML, CSS & JS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-orange-50 rounded-2xl border border-orange-100">
            <div className="text-3xl mb-3">🏗️</div>
            <h3 className="font-bold text-orange-700 mb-2">HTML</h3>
            <p className="text-sm text-orange-900/70 italic">HyperText Markup Language</p>
            <p className="text-sm mt-2 font-medium">C'est le squelette. Il définit le contenu (titres, images, paragraphes).</p>
          </div>

          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-bold text-blue-700 mb-2">CSS</h3>
            <p className="text-sm text-blue-900/70 italic">Cascading Style Sheets</p>
            <p className="text-sm mt-2 font-medium">C'est l'esthétique. Il définit les couleurs, les tailles, et la mise en page.</p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-100">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-yellow-700 mb-2">JavaScript</h3>
            <p className="text-sm text-yellow-900/70 italic">Programmation</p>
            <p className="text-sm mt-2 font-medium">C'est le cerveau. Il gère l'interactivité (clics, calculs, animations complexes).</p>
          </div>

        </div>
      </section>

      {/* SECTION DÉMO INTERACTIVE */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-4">Mise en pratique visuelle</h2>
        <p className="text-slate-500 mb-6">Utilisez le commutateur ci-dessous pour comprendre la puissance du CSS sur le même code HTML.</p>
        <InteractiveDemo demo={demoIntro} />
      </section>

      {/* NAVIGATION BAS DE PAGE */}
      <footer className="mt-10 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm font-medium">
          Prêt à installer vos outils de travail ?
        </div>
        <Link 
          to="/lesson/setup" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Installation →
        </Link>
      </footer>
    </div>
  );
}