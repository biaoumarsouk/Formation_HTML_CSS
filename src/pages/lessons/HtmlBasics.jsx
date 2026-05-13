import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

export default function HtmlBasics() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* 1. Entête */}
      <header>
        <h1 className="text-4xl font-black text-slate-900 mb-4">3. Premiers pas en HTML</h1>
        <p className="text-lg text-slate-600 italic">Apprenez à structurer votre contenu comme un pro.</p>
      </header>

      {/* 2. Contenu Long (Beaucoup de texte) */}
      <section className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
        <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4 underline">C'est quoi une balise ?</h2>
        <p>Le HTML fonctionne avec des balises. Imaginez des étiquettes qui disent au navigateur : "Ceci est un titre", "Ceci est une image"...</p>
        
        {/* Répétez pour simuler un contenu long */}
        <div className="h-64 bg-slate-100 rounded-xl my-6 flex items-center justify-center border-2 dashed border-slate-300">
           Espace pour vos explications détaillées...
        </div>

        <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Les balises de texte essentielles</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>&lt;h1&gt; à &lt;h6&gt;</strong> : Pour les titres.</li>
          <li><strong>&lt;p&gt;</strong> : Pour les paragraphes.</li>
          <li><strong>&lt;ul&gt; et &lt;li&gt;</strong> : Pour les listes.</li>
        </ul>
      </section>

      {/* 3. Démo Interactive */}
      <InteractiveDemo demo={{
        html: `<h1>Mon site</h1>\n<p>Ceci est un paragraphe.</p>`,
        css: `h1 { font-family: serif; color: darkblue; }`,
        desc: "Testez les balises h1 et p"
      }} />

      {/* 4. Zone de conclusion / Pied de page de la leçon */}
      <div className="mt-16 p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200">
        <h3 className="text-xl font-bold mb-2">Prêt pour la suite ?</h3>
        <p className="text-blue-100 mb-6">Maintenant que vous connaissez les bases, voyons comment créer des formulaires interactifs.</p>
        
        <Link 
          to="/lesson/forms" 
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-2xl font-black hover:bg-slate-100 transition-all active:scale-95"
        >
          Aller aux Formulaires →
        </Link>
      </div>
    </div>
  );
}