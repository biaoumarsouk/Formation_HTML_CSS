import React from 'react';

export default function Bonus() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Extras
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Cadeaux <span className="text-blue-600">& Bonus</span>
        </h1>
      </header>

      {/* Raccourcis VS Code */}
      <section className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 italic text-slate-800">⌨️ Raccourcis VS Code (Productivité x10)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { key: "CTRL + P", desc: "Rechercher un fichier rapidement" },
            { key: "CTRL + /", desc: "Commenter/Décommenter une ligne" },
            { key: "ALT + Z", desc: "Retour à la ligne automatique" },
            { key: "CTRL + Space", desc: "Forcer l'autocomplétion" },
            { key: "ALT + ⬆/⬇", desc: "Déplacer une ligne de code" },
            { key: "CTRL + D", desc: "Sélectionner le mot suivant identique" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-xs font-bold text-slate-500">{item.desc}</span>
              <kbd className="px-2 py-1 bg-white border border-slate-300 rounded text-[10px] font-black shadow-sm">{item.key}</kbd>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap 2026 */}
      <section className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-8 text-blue-400">Roadmap 2026 : Et après ?</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
               <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-black">1</div>
               <div>
                  <h4 className="font-bold text-lg">Maîtriser JavaScript (JS)</h4>
                  <p className="text-slate-400 text-sm">C'est l'étape logique. Apprenez la logique, les variables et la manipulation du DOM.</p>
               </div>
            </div>
            <div className="flex gap-6">
               <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center font-black">2</div>
               <div>
                  <h4 className="font-bold text-lg">Découvrir un Framework CSS (Tailwind CSS)</h4>
                  <p className="text-slate-400 text-sm">Comme ce que nous utilisons ici. Cela permet de coder des interfaces complexes ultra-rapidement.</p>
               </div>
            </div>
            <div className="flex gap-6">
               <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center font-black">3</div>
               <div>
                  <h4 className="font-bold text-lg">Apprendre un Framework JS (React ou Next.js)</h4>
                  <p className="text-slate-400 text-sm">Pour créer des applications web dynamiques et professionnelles.</p>
               </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -mr-32 -mt-32"></div>
      </section>

      <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
         <p className="text-blue-800 font-bold italic">"Le meilleur moment pour commencer à coder était il y a 10 ans. Le deuxième meilleur moment, c'est AUJOURD'HUI."</p>
      </div>
    </div>
  );
}