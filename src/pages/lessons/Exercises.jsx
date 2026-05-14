// src/pages/lessons/Exercises.jsx
import React from 'react';
import { exercises } from '../../data/exercises';

export default function Exercises() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn max-w-4xl mx-auto">
      {/* HEADER */}
      <header className="mb-6">
        <div className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 italic">Challenge Personnel</div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Ateliers <span className="text-blue-600">Pratiques</span>
        </h1>
        <p className="text-slate-500 mt-6 text-lg leading-relaxed">
          Ici, pas de triche. Utilisez tout ce que vous avez appris pour relever ces défis réels. 
          <br /><span className="text-sm font-bold text-slate-400">Conseil : Ouvrez VS Code et commencez à coder !</span>
        </p>
      </header>

      {/* LISTE DES EXERCICES */}
      <div className="grid grid-cols-1 gap-8">
        {exercises.map((exo) => (
          <div key={exo.id} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
            
            {/* Infos Exo */}
            <div className="flex gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-wider">
                {exo.difficulty}
              </span>
              <span className="px-3 py-1 bg-slate-50 text-slate-400 rounded-full text-[10px] font-black uppercase tracking-wider">
                ⏱️ {exo.time}
              </span>
            </div>

            <h2 className="text-2xl font-black text-slate-800 mb-6 group-hover:text-blue-600 transition-colors">
              {exo.title}
            </h2>

            {/* Liste des consignes */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Consignes à suivre :</h3>
              <ul className="space-y-4">
                {exo.instructions.map((inst, index) => (
                  <li key={index} className="flex gap-4 items-start text-slate-600 leading-relaxed">
                    <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center text-[10px] font-black text-blue-400 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-sm md:text-base">{inst}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Note d'encouragement */}
            <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between text-slate-300">
               <span className="text-[10px] font-bold uppercase tracking-tighter italic">Validé par le formateur</span>
               <div className="flex gap-1 text-blue-200">
                 <span>★</span><span>★</span><span>★</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER DE LA PAGE */}
      <footer className="mt-10 p-10 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Besoin d'un coup de pouce ?</h3>
          <p className="text-slate-400 text-sm mb-6">Relisez les chapitres précédents ou utilisez la documentation MDN.</p>
          <button className="px-8 py-3 bg-blue-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition">
            Consulter les ressources →
          </button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl -mr-16 -mt-16"></div>
      </footer>
    </div>
  );
}