import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoCss = {
  html: `<div class="mon-design">
  <h1>Le Design Web</h1>
  <p>Apprendre le CSS, c'est apprendre à donner vie à vos idées.</p>
</div>`,
  css: `.mon-design {
  background-color: #0f172a;
  color: #3b82f6;
  padding: 40px;
  border-radius: 30px;
  text-align: center;
  border: 4px solid #3b82f6;
}
h1 {
  font-family: 'Georgia', serif;
  font-size: 32px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
}
p {
  color: #94a3b8;
  font-size: 18px;
  margin-top: 10px;
}`,
  desc: "Changez les couleurs et les polices pour voir la magie du CSS."
};

export default function CssIntro() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 5
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          L'art du <span className="text-blue-600">CSS</span>
        </h1>
      </header>

      {/* SYNTAXE CSS */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-blue-900/20">
        <h2 className="text-2xl font-bold mb-8 text-blue-400 italic">La règle d'or du CSS</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <p className="text-slate-400">Pour styliser un élément, on suit toujours ce schéma :</p>
            <div className="font-mono text-lg bg-white/5 p-6 rounded-2xl border border-white/10">
              <span className="text-yellow-400">h1</span> {'{'} <br/>
              &nbsp;&nbsp;<span className="text-blue-400">color</span>: <span className="text-emerald-400">red</span>;<br/>
              {'}'}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-3">
             <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-yellow-400 font-bold">Sélecteur :</span> Qui je cible ? (ex: h1)
             </div>
             <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-blue-400 font-bold">Propriété :</span> Qu'est-ce que je change ? (ex: color)
             </div>
             <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <span className="text-emerald-400 font-bold">Valeur :</span> Quelle est la nouvelle donnée ? (ex: red)
             </div>
          </div>
        </div>
      </section>

      {/* LES COULEURS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Les Couleurs</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">Il existe 3 façons principales de définir une couleur en CSS :</p>
          <ul className="space-y-3">
            <li className="flex justify-between text-xs font-mono p-3 bg-slate-50 rounded-lg">
              <span>Noms (Red, Blue...)</span>
              <span className="text-slate-400">Limité</span>
            </li>
            <li className="flex justify-between text-xs font-mono p-3 bg-slate-50 rounded-lg">
              <span>Hexadécimal (#FF0000)</span>
              <span className="text-blue-600">Le plus utilisé</span>
            </li>
            <li className="flex justify-between text-xs font-mono p-3 bg-slate-50 rounded-lg">
              <span>RGB (255, 0, 0)</span>
              <span className="text-slate-400">Précis</span>
            </li>
          </ul>
        </div>
        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-4 text-blue-700">Typographie</h2>
          <p className="text-blue-900/70 text-sm leading-relaxed">
            Vous pouvez changer la police avec <code className="bg-blue-200 px-1 rounded">font-family</code>, 
            la taille avec <code className="bg-blue-200 px-1 rounded">font-size</code>, 
            et l'épaisseur avec <code className="bg-blue-200 px-1 rounded">font-weight</code>.
          </p>
        </div>
      </section>

      <InteractiveDemo demo={demoCss} />

      <footer className="mt-10 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm font-medium italic">Prêt à aligner vos blocs ?</div>
        <Link 
          to="/lesson/layout" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Mise en Page →
        </Link>
      </footer>
    </div>
  );
}