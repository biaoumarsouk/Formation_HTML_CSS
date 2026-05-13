import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoForms = {
  html: `<form>
  <div class="field">
    <label>Nom Complet</label>
    <input type="text" placeholder="Ex: Jean Dupont">
  </div>
  
  <div class="field">
    <label>Email</label>
    <input type="email" placeholder="email@test.com">
  </div>

  <button type="button">S'inscrire</button>
</form>`,
  css: `form {
  background: white;
  padding: 30px;
  border-radius: 24px;
  width: 100%;
}
.field { margin-bottom: 15px; }
label { display: block; font-size: 12px; font-weight: bold; margin-bottom: 5px; color: #64748b; }
input {
  width: 100%;
  padding: 12px;
  border: 2px solid #f1f5f9;
  border-radius: 12px;
  outline: none;
}
input:focus { border-color: #3b82f6; }
button {
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}`,
  desc: "Un formulaire d'inscription moderne avec labels et inputs."
};

export default function Forms() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 4
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Formulaires <span className="text-blue-600">Interactifs</span>
        </h1>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[2rem] p-8 text-white">
          <h2 className="text-xl font-bold mb-4 text-blue-400">La balise &lt;form&gt;</h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            C'est le conteneur principal. Sans lui, les données ne peuvent pas être envoyées au serveur. 
            On utilise principalement des <strong>&lt;input&gt;</strong> à l'intérieur.
          </p>
          <ul className="mt-6 space-y-2 text-xs font-mono">
            <li className="text-emerald-400">type="text" (Nom)</li>
            <li className="text-emerald-400">type="email" (Email)</li>
            <li className="text-emerald-400">type="password" (Secret)</li>
            <li className="text-emerald-400">type="checkbox" (Case)</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4">L'importance du Label</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Un input sans label est une erreur grave. Le <strong>&lt;label&gt;</strong> permet à l'utilisateur de savoir ce qu'il doit remplir et améliore l'accessibilité.
          </p>
          <div className="p-4 bg-slate-50 rounded-xl text-[10px] font-mono text-slate-500">
            &lt;label for="email"&gt;Email&lt;/label&gt;<br/>
            &lt;input type="email" id="email"&gt;
          </div>
        </div>
      </section>

      <InteractiveDemo demo={demoForms} />

      <footer className="mt-10 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm font-medium italic">Prêt pour donner des couleurs ?</div>
        <Link 
          to="/lesson/css-intro" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Introduction CSS →
        </Link>
      </footer>
    </div>
  );
}