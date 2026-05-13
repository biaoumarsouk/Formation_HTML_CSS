import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoBasics = {
  html: `<article>
  <h1>Ma Passion pour le Code</h1>
  <p>Le développement web est <strong>incroyable</strong>.</p>
  
  <h3>Ce que j'apprends :</h3>
  <ul>
    <li>La structure avec HTML</li>
    <li>Le style avec CSS</li>
  </ul>
  
  <a href="#">Lire la suite...</a>
</article>`,
  css: `article {
  background: white;
  padding: 30px;
  border-radius: 20px;
  border-left: 10px solid #2563eb;
}
h1 { color: #1e293b; font-size: 24px; }
h3 { color: #3b82f6; margin-top: 15px; }
ul { margin-left: 20px; color: #64748b; }
a { display: inline-block; mt: 10px; color: #2563eb; font-weight: bold; }`,
  desc: "Exemple d'une structure d'article avec titres, listes et liens."
};

export default function HtmlBasics() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 3
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Premiers pas <span className="text-blue-600">HTML</span>
        </h1>
      </header>

      {/* CONCEPT DES BALISES */}
      <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
          Anatomie d'une balise
        </h2>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Le HTML utilise des <strong>balises</strong> pour entourer le contenu. Elles fonctionnent presque toujours par paire.
        </p>
        <div className="bg-slate-900 rounded-2xl p-8 text-center">
          <code className="text-xl md:text-2xl">
            <span className="text-pink-500">&lt;h1&gt;</span>
            <span className="text-white">Bonjour</span>
            <span className="text-pink-500">&lt;/h1&gt;</span>
          </code>
          <div className="grid grid-cols-3 mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span>Ouverture</span>
            <span>Contenu</span>
            <span>Fermeture</span>
          </div>
        </div>
      </section>

      {/* BALISES ESSENTIELLES */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Les balises indispensables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-slate-100 flex items-start gap-4">
            <div className="text-blue-500 font-mono font-bold">&lt;h1&gt;</div>
            <p className="text-sm text-slate-600"><strong>Titres :</strong> De h1 (le plus important) à h6.</p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-slate-100 flex items-start gap-4">
            <div className="text-blue-500 font-mono font-bold">&lt;p&gt;</div>
            <p className="text-sm text-slate-600"><strong>Paragraphe :</strong> Pour tout texte classique.</p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-slate-100 flex items-start gap-4">
            <div className="text-blue-500 font-mono font-bold">&lt;a&gt;</div>
            <p className="text-sm text-slate-600"><strong>Lien :</strong> Utilise l'attribut <em>href</em> pour la destination.</p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-slate-100 flex items-start gap-4">
            <div className="text-blue-500 font-mono font-bold">&lt;img&gt;</div>
            <p className="text-sm text-slate-600"><strong>Image :</strong> Balise orpheline (ne se ferme pas).</p>
          </div>
        </div>
      </section>

      <InteractiveDemo demo={demoBasics} />

      <footer className="mt-10 py-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-400 text-sm font-medium italic">On passe à l'interaction ?</div>
        <Link 
          to="/lesson/forms" 
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Formulaires →
        </Link>
      </footer>
    </div>
  );
}