import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoLayout = {
  html: `<div class="parent">
  <div class="enfant">1</div>
  <div class="enfant">2</div>
  <div class="enfant">3</div>
</div>`,
  css: `.parent {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #f1f5f9;
  padding: 30px;
  border-radius: 20px;
}
.enfant {
  width: 60px;
  height: 60px;
  background: #2563eb;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-weight: bold;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
}`,
  desc: "Découvrez Flexbox : modifiez 'justify-content' pour voir les blocs bouger."
};

export default function Layout() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 6
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Mise en <span className="text-blue-600">Page</span>
        </h1>
      </header>

      {/* BOX MODEL */}
      <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-8 italic text-slate-800">1. Le Box Model</h2>
        <p className="text-slate-600 mb-10 leading-relaxed max-w-2xl">
          Chaque élément HTML est une boîte. Comprendre comment elles s'empilent est la clé du design web.
        </p>
        
        <div className="flex justify-center items-center p-10 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
           {/* Visualisation Box Model */}
           <div className="bg-orange-100 border-2 border-orange-400 p-6 rounded-lg text-center relative">
              <span className="absolute -top-6 left-0 text-[10px] font-bold text-orange-600 uppercase">Margin (Extérieur)</span>
              <div className="bg-blue-100 border-2 border-blue-400 p-6 rounded-lg relative">
                 <span className="absolute -top-5 left-0 text-[10px] font-bold text-blue-600 uppercase">Border</span>
                 <div className="bg-green-100 border-2 border-green-400 p-6 rounded-lg relative">
                    <span className="absolute -top-5 left-0 text-[10px] font-bold text-green-600 uppercase">Padding (Intérieur)</span>
                    <div className="bg-white border border-slate-300 px-8 py-4 font-bold text-slate-400">CONTENU</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FLEXBOX */}
      <section className="bg-blue-600 rounded-[2.5rem] p-8 md:p-12 text-white">
        <h2 className="text-2xl font-bold mb-4">2. Maîtriser Flexbox</h2>
        <p className="text-blue-100 leading-relaxed mb-8">
          Flexbox est l'outil moderne pour aligner vos éléments. Terminé les vieux tableaux compliqués !
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="p-4 bg-white/10 rounded-xl border border-white/20">
              <p className="font-bold mb-1">display: flex;</p>
              <p className="text-xs opacity-70">Active le mode flexible sur le parent.</p>
           </div>
           <div className="p-4 bg-white/10 rounded-xl border border-white/20">
              <p className="font-bold mb-1">justify-content;</p>
              <p className="text-xs opacity-70">Gère l'alignement horizontal.</p>
           </div>
           <div className="p-4 bg-white/10 rounded-xl border border-white/20">
              <p className="font-bold mb-1">align-items;</p>
              <p className="text-xs opacity-70">Gère l'alignement vertical.</p>
           </div>
           <div className="p-4 bg-white/10 rounded-xl border border-white/20">
              <p className="font-bold mb-1">gap;</p>
              <p className="text-xs opacity-70">L'espace magique entre les éléments.</p>
           </div>
        </div>
      </section>

      <InteractiveDemo demo={demoLayout} />

      <footer className="mt-10 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm font-medium italic">On passe au mobile ?</div>
        <Link 
          to="/lesson/responsive" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Responsive Design →
        </Link>
      </footer>
    </div>
  );
}