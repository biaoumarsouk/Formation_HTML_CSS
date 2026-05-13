import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoFinal = {
  html: `<nav class="navbar">
  <div class="logo">CODEX</div>
  <div class="links">
    <span>Services</span>
    <button class="btn-cta">Contact</button>
  </div>
</nav>

<header class="hero">
  <h1>Codez vos rêves en <span class="blue">HTML/CSS</span></h1>
  <p>Apprenez à créer des sites incroyables à partir de zéro.</p>
  <div class="btns">
    <button class="primary">Démarrer</button>
    <button class="outline">En savoir plus</button>
  </div>
</header>`,
  css: `.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: white;
}
.logo { font-weight: 900; font-size: 20px; color: #1e293b; }
.links { display: flex; align-items: center; gap: 20px; font-size: 14px; font-weight: bold; }
.btn-cta { background: #3b82f6; color: white; border: none; padding: 8px 15px; border-radius: 8px; }

.hero {
  padding: 80px 20px;
  text-align: center;
  background: #f8fafc;
}
h1 { font-size: 48px; font-weight: 900; color: #0f172a; margin-bottom: 15px; line-height: 1; }
.blue { color: #3b82f6; }
p { color: #64748b; font-size: 18px; margin-bottom: 30px; }
.btns { display: flex; justify-content: center; gap: 15px; }
button.primary { background: #3b82f6; color: white; padding: 15px 30px; border-radius: 12px; border: none; font-weight: bold; }
button.outline { background: transparent; border: 2px solid #3b82f6; color: #3b82f6; padding: 15px 30px; border-radius: 12px; font-weight: bold; }`,
  desc: "Ceci est la structure d'une Landing Page professionnelle."
};

export default function FinalProject() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 10
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Projet <span className="text-blue-600">Final</span>
        </h1>
      </header>

      <section className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-6">Votre Landing Page</h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
            C'est ici que tout se regroupe. Vous allez créer une page complète contenant une barre de navigation, une section Hero (présentation), une liste de services et un pied de page.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-blue-400 font-black">1</p>
                <p className="text-[10px] uppercase font-bold text-slate-500">Structure</p>
             </div>
             <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-blue-400 font-black">2</p>
                <p className="text-[10px] uppercase font-bold text-slate-500">Flexbox</p>
             </div>
             <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-blue-400 font-black">3</p>
                <p className="text-[10px] uppercase font-bold text-slate-500">Responsive</p>
             </div>
             <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-blue-400 font-black">4</p>
                <p className="text-[10px] uppercase font-bold text-slate-500">Animations</p>
             </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"></div>
      </section>

      <InteractiveDemo demo={demoFinal} />

      <section className="py-12 border-t border-slate-200">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">Checklist Professionnelle</h2>
        <ul className="space-y-4">
          <li className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
             <span className="text-emerald-500 text-xl font-bold">✔</span>
             <p className="text-slate-600 text-sm italic">"Mon code est bien indenté et lisible."</p>
          </li>
          <li className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
             <span className="text-emerald-500 text-xl font-bold">✔</span>
             <p className="text-slate-600 text-sm italic">"Toutes mes images ont un attribut alt."</p>
          </li>
          <li className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
             <span className="text-emerald-500 text-xl font-bold">✔</span>
             <p className="text-slate-600 text-sm italic">"Le site est parfaitement lisible sur smartphone."</p>
          </li>
        </ul>
      </section>

      <div className="bg-blue-600 p-12 rounded-[3rem] text-center text-white">
          <h2 className="text-3xl font-black mb-4">🎓 Félicitations !</h2>
          <p className="mb-8 text-blue-100">Vous avez franchi la ligne d'arrivée. Allez voir les bonus pour booster votre carrière !</p>
          <Link to="/lesson/bonus" className="bg-white text-blue-600 px-12 py-5 rounded-3xl font-black shadow-2xl hover:scale-105 transition-all inline-block">
            Accéder aux Bonus 🎁
          </Link>
      </div>
    </div>
  );
}