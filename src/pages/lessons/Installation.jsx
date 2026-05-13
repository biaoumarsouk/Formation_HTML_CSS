import React from 'react';
import { Link } from 'react-router-dom';

export default function Installation() {
  const steps = [
    {
      title: "Google Chrome",
      desc: "Le navigateur préféré des développeurs pour ses outils d'inspection puissants.",
      link: "https://www.google.com/chrome/",
      icon: "🌐"
    },
    {
      title: "Visual Studio Code",
      desc: "L'éditeur de code le plus utilisé au monde. Gratuit, léger et ultra-complet.",
      link: "https://code.visualstudio.com/",
      icon: "💻"
    }
  ];

  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 2
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Installation de <span className="text-blue-600">l'environnement</span>
        </h1>
      </header>

      <section className="bg-blue-600 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4">Pourquoi ces outils ?</h2>
          <p className="text-blue-100 leading-relaxed max-w-2xl">
            Un bon ouvrier a besoin de bons outils. VS Code vous aidera à écrire du code sans erreurs grâce à l'autocomplétion, et Chrome vous permettra de voir vos résultats instantanément.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-32 -mt-32 rounded-full"></div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">{step.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">{step.desc}</p>
            <a 
              href={step.link} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block bg-slate-900 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-blue-600 transition"
            >
              Télécharger →
            </a>
          </div>
        ))}
      </div>

      <section className="bg-slate-50 p-8 rounded-3xl border-2 border-dashed border-slate-200">
        <h2 className="text-xl font-bold mb-4">Extensions recommandées</h2>
        <p className="text-sm text-slate-600 mb-6">Dans VS Code, allez dans l'onglet extensions (CTRL+SHIFT+X) et installez :</p>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center font-bold">1</span>
            <div>
              <p className="font-bold text-sm">Live Server</p>
              <p className="text-xs text-slate-400">Pour voir vos changements en temps réel sans rafraîchir.</p>
            </div>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm">
            <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">2</span>
            <div>
              <p className="font-bold text-sm">Prettier</p>
              <p className="text-xs text-slate-400">Pour formater votre code automatiquement et le rendre propre.</p>
            </div>
          </li>
        </ul>
      </section>

      <footer className="mt-10 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm font-medium italic">
          Vos outils sont prêts ? On attaque le code !
        </div>
        <Link 
          to="/lesson/html-basics" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : HTML Basics →
        </Link>
      </footer>
    </div>
  );
}