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

const demoBoxModel = {
  html: `<div class="boite-exterieure">
  <div class="boite-interieure">
    Contenu
  </div>
</div>`,
  css: `.boite-exterieure {
  background-color: #1e3a5f;
  padding: 40px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
}
.boite-interieure {
  background-color: #3b82f6;
  color: white;
  font-family: Georgia, serif;
  font-size: 20px;
  font-weight: bold;
  padding: 30px 50px;
  margin: 10px;
  border: 4px dashed white;
  border-radius: 10px;
  text-align: center;
}`,
  desc: "Jouez avec padding, margin et border pour comprendre le Box Model."
};

const demoSelecteurs = {
  html: `<div class="carte" id="special">
  <h2 class="titre">Titre Principal</h2>
  <p>Paragraphe normal</p>
  <p class="important">Paragraphe important</p>
  <a href="#">Un lien</a>
</div>`,
  css: `/* Sélecteur de balise */
p {
  color: #94a3b8;
  font-size: 15px;
}
/* Sélecteur de classe */
.titre {
  color: white;
  font-size: 24px;
}
.important {
  color: #f59e0b;
  font-weight: bold;
}
/* Sélecteur d'ID */
#special {
  background-color: #0f172a;
  padding: 30px;
  border-radius: 20px;
  border-left: 5px solid #3b82f6;
}
/* Sélecteur de pseudo-classe */
a:hover {
  color: #3b82f6;
  text-decoration: underline;
}
a {
  color: #64748b;
  display: block;
  margin-top: 12px;
  text-decoration: none;
}`,
  desc: "Modifiez les sélecteurs pour voir la différence entre balise, classe et ID."
};

export default function CssIntro() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      {/* EN-TÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 5
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          L'art du <span className="text-blue-600">CSS</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          Le CSS (Cascading Style Sheets) est le langage qui transforme une page HTML brute en une interface visuellement attrayante. Sans CSS, le web serait une longue liste de texte sans couleur ni mise en forme.
        </p>
      </header>

      {/* INTRODUCTION : QU'EST-CE QUE LE CSS ? */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200 flex flex-col gap-3">
          <div className="text-4xl">🎨</div>
          <h3 className="text-lg font-black">Apparence</h3>
          <p className="text-blue-100 text-sm leading-relaxed">Couleurs, polices, tailles, arrière-plans… CSS contrôle tout ce que l'œil voit.</p>
        </div>
        <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl flex flex-col gap-3">
          <div className="text-4xl">📐</div>
          <h3 className="text-lg font-black">Mise en page</h3>
          <p className="text-slate-400 text-sm leading-relaxed">CSS positionne chaque élément sur la page, définit les marges et aligne le contenu.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-3">
          <div className="text-4xl">✨</div>
          <h3 className="text-lg font-black text-slate-900">Animations</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Transitions, effets hover, animations… CSS donne vie à vos interfaces.</p>
        </div>
      </section>

      {/* RÈGLE D'OR DU CSS */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-blue-900/20">
        <h2 className="text-2xl font-bold mb-2 text-blue-400 italic">La règle d'or du CSS</h2>
        <p className="text-slate-400 mb-8 text-sm">Chaque règle CSS suit toujours la même structure en 3 parties.</p>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4">
            <p className="text-slate-400 text-sm">Pour styliser un élément, on suit toujours ce schéma :</p>
            <div className="font-mono text-lg bg-white/5 p-6 rounded-2xl border border-white/10 leading-relaxed">
              <span className="text-yellow-400">h1</span> {'{'} <br/>
              &nbsp;&nbsp;<span className="text-blue-400">color</span>: <span className="text-emerald-400">red</span>;<br/>
              &nbsp;&nbsp;<span className="text-blue-400">font-size</span>: <span className="text-emerald-400">32px</span>;<br/>
              {'}'}
            </div>
            <p className="text-slate-500 text-xs">💡 On peut mettre plusieurs propriétés dans une même règle.</p>
          </div>
          <div className="flex-1 grid grid-cols-1 gap-3">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-yellow-400 font-bold">Sélecteur :</span>
              <span className="text-slate-300 text-sm ml-2">Qui je cible ? (ex: <code>h1</code>, <code>.classe</code>, <code>#id</code>)</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-blue-400 font-bold">Propriété :</span>
              <span className="text-slate-300 text-sm ml-2">Qu'est-ce que je change ? (ex: <code>color</code>, <code>font-size</code>)</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="text-emerald-400 font-bold">Valeur :</span>
              <span className="text-slate-300 text-sm ml-2">Quelle est la nouvelle donnée ? (ex: <code>red</code>, <code>32px</code>)</span>
            </div>
            <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/20">
              <span className="text-yellow-400 font-bold">Accolades {'{ }'} :</span>
              <span className="text-slate-300 text-sm ml-2">Englobent toutes les propriétés du sélecteur.</span>
            </div>
          </div>
        </div>
      </section>

      {/* COMMENT LIER LE CSS AU HTML */}
      <section className="p-8 md:p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">Comment lier CSS et HTML ?</h2>
        <p className="text-slate-500 text-sm mb-8">Il existe 3 façons d'ajouter du CSS à votre page HTML.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Méthode 1 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0">1</span>
              <h3 className="font-bold text-slate-800">Fichier externe</h3>
            </div>
            <div className="font-mono text-xs bg-slate-900 text-emerald-400 p-4 rounded-2xl leading-relaxed flex-1">
              {'<!-- Dans le <head> du HTML -->'}<br/>
              {'<link rel="stylesheet"'}<br/>
              &nbsp;&nbsp;{'href="style.css">'}
            </div>
            <p className="text-slate-500 text-xs">✅ <strong>Recommandé.</strong> Sépare le HTML du CSS. Réutilisable sur plusieurs pages.</p>
          </div>
          {/* Méthode 2 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-700 text-white font-black text-sm flex items-center justify-center flex-shrink-0">2</span>
              <h3 className="font-bold text-slate-800">Balise {'<style>'}</h3>
            </div>
            <div className="font-mono text-xs bg-slate-900 text-blue-400 p-4 rounded-2xl leading-relaxed flex-1">
              {'<style>'}<br/>
              &nbsp;&nbsp;<span className="text-yellow-400">h1</span> {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">color</span>: <span className="text-emerald-400">blue</span>;<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'</style>'}
            </div>
            <p className="text-slate-500 text-xs">⚠️ Pratique pour une seule page, mais mélange HTML et CSS.</p>
          </div>
          {/* Méthode 3 */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-slate-400 text-white font-black text-sm flex items-center justify-center flex-shrink-0">3</span>
              <h3 className="font-bold text-slate-800">Style inline</h3>
            </div>
            <div className="font-mono text-xs bg-slate-900 text-yellow-400 p-4 rounded-2xl leading-relaxed flex-1">
              {'<h1 style="'}<br/>
              &nbsp;&nbsp;{'color: blue;'}<br/>
              &nbsp;&nbsp;{'font-size: 32px"'}<br/>
              {'>'}<br/>
              &nbsp;&nbsp;{'Titre'}<br/>
              {'</h1>'}
            </div>
            <p className="text-slate-500 text-xs">❌ À éviter. Difficile à maintenir et non réutilisable.</p>
          </div>
        </div>
      </section>

      {/* LES SÉLECTEURS */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Les Sélecteurs CSS</h2>
          <p className="text-slate-500 text-sm">Les sélecteurs déterminent <strong>quels éléments HTML</strong> vous voulez styliser. C'est la partie la plus importante du CSS.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tableau des sélecteurs */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-bold text-slate-900">Types de sélecteurs</h3>
            </div>
            <div className="divide-y divide-slate-50">
              <div className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                <code className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-mono flex-shrink-0">h1</code>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Sélecteur de balise</p>
                  <p className="text-xs text-slate-500 mt-1">Cible toutes les balises <code>h1</code> de la page.</p>
                </div>
              </div>
              <div className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                <code className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-mono flex-shrink-0">.classe</code>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Sélecteur de classe</p>
                  <p className="text-xs text-slate-500 mt-1">Cible tous les éléments avec <code>class="classe"</code>. Réutilisable.</p>
                </div>
              </div>
              <div className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                <code className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-mono flex-shrink-0">#id</code>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Sélecteur d'ID</p>
                  <p className="text-xs text-slate-500 mt-1">Cible un seul élément unique avec <code>id="id"</code>.</p>
                </div>
              </div>
              <div className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                <code className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded font-mono flex-shrink-0">a:hover</code>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Pseudo-classe</p>
                  <p className="text-xs text-slate-500 mt-1">Cible un état particulier (survol, focus, premier enfant…).</p>
                </div>
              </div>
              <div className="p-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                <code className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded font-mono flex-shrink-0">*</code>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Sélecteur universel</p>
                  <p className="text-xs text-slate-500 mt-1">Cible absolument tous les éléments. Utiliser avec prudence.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Priorité des sélecteurs */}
          <div className="bg-slate-900 rounded-3xl p-6 text-white flex flex-col gap-4">
            <h3 className="font-bold text-blue-400">⚡ La Spécificité (Priorité)</h3>
            <p className="text-slate-400 text-sm">Quand deux règles s'appliquent au même élément, laquelle gagne ? Celle avec la plus haute spécificité.</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-full bg-white/5 rounded-lg p-3 flex justify-between items-center">
                  <code className="text-purple-400 font-mono text-sm">#id</code>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => <span key={i} className="w-4 h-4 rounded-sm bg-purple-500"></span>)}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full bg-white/5 rounded-lg p-3 flex justify-between items-center">
                  <code className="text-blue-400 font-mono text-sm">.classe</code>
                  <div className="flex gap-1">
                    {[...Array(2)].map((_, i) => <span key={i} className="w-4 h-4 rounded-sm bg-blue-500"></span>)}
                    <span className="w-4 h-4 rounded-sm bg-white/10"></span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-full bg-white/5 rounded-lg p-3 flex justify-between items-center">
                  <code className="text-yellow-400 font-mono text-sm">balise</code>
                  <div className="flex gap-1">
                    <span className="w-4 h-4 rounded-sm bg-yellow-500"></span>
                    {[...Array(2)].map((_, i) => <span key={i} className="w-4 h-4 rounded-sm bg-white/10"></span>)}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-2">💡 <code className="text-emerald-400">!important</code> force une propriété à gagner, mais c'est une mauvaise pratique à éviter.</p>
          </div>
        </div>

        <InteractiveDemo demo={demoSelecteurs} />
      </section>

      {/* LES COULEURS & TYPOGRAPHIE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Couleurs */}
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-5">
          <h2 className="text-xl font-bold text-slate-900">Les Couleurs</h2>
          <p className="text-slate-600 text-sm leading-relaxed">Il existe 3 façons principales de définir une couleur en CSS :</p>
          <ul className="space-y-3">
            <li className="flex justify-between text-xs font-mono p-3 bg-slate-50 rounded-lg">
              <span>Noms (<code>red</code>, <code>blue</code>…)</span>
              <span className="text-slate-400">Limité (~140 couleurs)</span>
            </li>
            <li className="flex justify-between text-xs font-mono p-3 bg-slate-50 rounded-lg">
              <span>Hexadécimal (<code>#FF0000</code>)</span>
              <span className="text-blue-600 font-bold">Le plus utilisé</span>
            </li>
            <li className="flex justify-between text-xs font-mono p-3 bg-slate-50 rounded-lg">
              <span>RGB (<code>rgb(255, 0, 0)</code>)</span>
              <span className="text-slate-400">Précis</span>
            </li>
            <li className="flex justify-between text-xs font-mono p-3 bg-slate-50 rounded-lg">
              <span>RGBA (<code>rgba(255, 0, 0, 0.5)</code>)</span>
              <span className="text-emerald-600">Avec transparence</span>
            </li>
          </ul>
          {/* Palette visuelle */}
          <div className="flex gap-2 mt-2">
            {['#ef4444','#f97316','#eab308','#22c55e','#3b82f6','#8b5cf6','#ec4899'].map(c => (
              <div key={c} className="flex-1 h-8 rounded-lg" style={{ backgroundColor: c }} title={c}></div>
            ))}
          </div>
          <p className="text-slate-400 text-xs">Palettes recommandées : <a href="https://coolors.co" className="text-blue-500 underline" target="_blank" rel="noreferrer">coolors.co</a>, <a href="https://colorhunt.co" className="text-blue-500 underline" target="_blank" rel="noreferrer">colorhunt.co</a></p>
        </div>

        {/* Typographie */}
        <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 flex flex-col gap-5">
          <h2 className="text-xl font-bold text-blue-700">Typographie</h2>
          <p className="text-blue-900/70 text-sm leading-relaxed">
            La typographie, c'est l'art de choisir et d'arranger les textes. En CSS, vous contrôlez tout.
          </p>
          <div className="space-y-2">
            <div className="p-3 bg-white rounded-xl flex justify-between items-center text-xs">
              <code className="text-blue-700 font-mono">font-family</code>
              <span className="text-slate-500">Police de caractères</span>
            </div>
            <div className="p-3 bg-white rounded-xl flex justify-between items-center text-xs">
              <code className="text-blue-700 font-mono">font-size</code>
              <span className="text-slate-500">Taille (px, rem, em, %)</span>
            </div>
            <div className="p-3 bg-white rounded-xl flex justify-between items-center text-xs">
              <code className="text-blue-700 font-mono">font-weight</code>
              <span className="text-slate-500">Épaisseur (100 à 900)</span>
            </div>
            <div className="p-3 bg-white rounded-xl flex justify-between items-center text-xs">
              <code className="text-blue-700 font-mono">line-height</code>
              <span className="text-slate-500">Hauteur de ligne</span>
            </div>
            <div className="p-3 bg-white rounded-xl flex justify-between items-center text-xs">
              <code className="text-blue-700 font-mono">text-align</code>
              <span className="text-slate-500">Alignement (left, center…)</span>
            </div>
            <div className="p-3 bg-white rounded-xl flex justify-between items-center text-xs">
              <code className="text-blue-700 font-mono">letter-spacing</code>
              <span className="text-slate-500">Espacement entre lettres</span>
            </div>
          </div>
        </div>
      </section>

      {/* DÉMO PRINCIPALE */}
      <InteractiveDemo demo={demoCss} />

      {/* LE BOX MODEL */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Le Box Model</h2>
          <p className="text-slate-500 text-sm max-w-2xl">
            En CSS, <strong>chaque élément HTML est une boîte</strong>. Comprendre le Box Model est fondamental pour maîtriser la mise en page.
          </p>
        </div>

        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Schéma visuel du box model */}
            <div className="flex items-center justify-center">
              <div className="relative p-6 border-2 border-dashed border-orange-400 rounded-xl bg-orange-400/5 text-center">
                <span className="absolute -top-3 left-3 bg-orange-400 text-white text-xs font-bold px-2 py-0.5 rounded">margin</span>
                <div className="p-5 border-2 border-solid border-yellow-400 rounded-lg bg-yellow-400/5">
                  <span className="absolute left-1/2 -translate-x-1/2 -mt-8 bg-yellow-400 text-slate-900 text-xs font-bold px-2 py-0.5 rounded">border</span>
                  <div className="p-5 border-2 border-dashed border-green-400 rounded-md bg-green-400/5">
                    <span className="block text-green-400 text-xs font-bold mb-2">padding</span>
                    <div className="p-4 bg-blue-600 rounded text-white text-sm font-bold">
                      contenu
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Explications */}
            <div className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border-l-4 border-blue-500">
                <p className="font-bold text-blue-400 text-sm mb-1">Content (Contenu)</p>
                <p className="text-slate-400 text-xs">La zone où s'affiche le texte ou l'image. Contrôlé par <code>width</code> et <code>height</code>.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border-l-4 border-green-500">
                <p className="font-bold text-green-400 text-sm mb-1">Padding (Rembourrage intérieur)</p>
                <p className="text-slate-400 text-xs">Espace entre le contenu et la bordure. Hérite du fond de l'élément.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border-l-4 border-yellow-500">
                <p className="font-bold text-yellow-400 text-sm mb-1">Border (Bordure)</p>
                <p className="text-slate-400 text-xs">Ligne qui entoure l'élément. Personnalisable en style, épaisseur et couleur.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border-l-4 border-orange-500">
                <p className="font-bold text-orange-400 text-sm mb-1">Margin (Marge extérieure)</p>
                <p className="text-slate-400 text-xs">Espace invisible entre l'élément et ses voisins. Transparent.</p>
              </div>
            </div>
          </div>

          {/* Exemple de code */}
          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10 font-mono text-sm leading-relaxed">
            <span className="text-yellow-400">.ma-boite</span> {'{'}<br/>
            &nbsp;&nbsp;<span className="text-blue-400">width</span>: <span className="text-emerald-400">300px</span>;&nbsp;&nbsp;&nbsp;<span className="text-slate-500 text-xs">/* largeur du contenu */</span><br/>
            &nbsp;&nbsp;<span className="text-blue-400">padding</span>: <span className="text-emerald-400">20px</span>;&nbsp;&nbsp;<span className="text-slate-500 text-xs">/* intérieur */</span><br/>
            &nbsp;&nbsp;<span className="text-blue-400">border</span>: <span className="text-emerald-400">2px solid blue</span>;&nbsp;<span className="text-slate-500 text-xs">/* contour */</span><br/>
            &nbsp;&nbsp;<span className="text-blue-400">margin</span>: <span className="text-emerald-400">10px auto</span>;&nbsp;<span className="text-slate-500 text-xs">/* extérieur + centrage */</span><br/>
            {'}'}
          </div>
          <p className="mt-4 text-slate-500 text-xs">💡 <code className="text-blue-400">box-sizing: border-box</code> inclut padding et border dans la largeur totale. Très souvent utilisé !</p>
        </div>

        <InteractiveDemo demo={demoBoxModel} />
      </section>

      {/* PROPRIÉTÉS ESSENTIELLES */}
      <section className="p-8 md:p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Propriétés Essentielles à Connaître</h2>
        <p className="text-slate-500 text-sm mb-8">Ces propriétés couvrent 80% des besoins quotidiens en CSS.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { cat: "Couleurs & Fond", color: "blue", props: [
              { name: "color", desc: "Couleur du texte" },
              { name: "background-color", desc: "Couleur de fond" },
              { name: "background-image", desc: "Image de fond" },
              { name: "opacity", desc: "Transparence (0 à 1)" },
            ]},
            { cat: "Texte", color: "purple", props: [
              { name: "font-size", desc: "Taille du texte" },
              { name: "font-weight", desc: "Gras (bold, 100-900)" },
              { name: "font-family", desc: "Police de caractères" },
              { name: "text-transform", desc: "Majuscules, minuscules…" },
            ]},
            { cat: "Boîte", color: "emerald", props: [
              { name: "width / height", desc: "Largeur / Hauteur" },
              { name: "padding", desc: "Espace intérieur" },
              { name: "margin", desc: "Espace extérieur" },
              { name: "border-radius", desc: "Coins arrondis" },
            ]},
            { cat: "Bordures", color: "orange", props: [
              { name: "border", desc: "Raccourci bordure complète" },
              { name: "border-top/bottom…", desc: "Bordure par côté" },
              { name: "border-style", desc: "solid, dashed, dotted…" },
              { name: "box-shadow", desc: "Ombre portée" },
            ]},
            { cat: "Affichage", color: "rose", props: [
              { name: "display", desc: "block, inline, flex, grid…" },
              { name: "position", desc: "static, relative, absolute…" },
              { name: "overflow", desc: "hidden, scroll, auto" },
              { name: "visibility", desc: "visible / hidden" },
            ]},
            { cat: "Transitions", color: "yellow", props: [
              { name: "transition", desc: "Animation entre deux états" },
              { name: "transform", desc: "Rotation, échelle, déplacement" },
              { name: "animation", desc: "Animation avec keyframes" },
              { name: "cursor", desc: "Apparence du curseur" },
            ]},
          ].map(({ cat, color, props }) => (
            <div key={cat} className={`p-5 bg-${color}-50 rounded-2xl border border-${color}-100`}>
              <h3 className={`font-bold text-${color}-700 text-sm mb-3`}>{cat}</h3>
              <ul className="space-y-1.5">
                {props.map(({ name, desc }) => (
                  <li key={name} className="flex flex-col">
                    <code className={`text-xs font-mono text-${color}-600`}>{name}</code>
                    <span className="text-xs text-slate-500">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* LES UNITÉS CSS */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 rounded-3xl text-white">
          <h2 className="text-xl font-bold mb-2 text-blue-400">Les Unités de Mesure</h2>
          <p className="text-slate-400 text-sm mb-6">En CSS, les valeurs numériques ont toujours besoin d'une unité.</p>
          <div className="space-y-3">
            <div className="p-3 bg-white/5 rounded-xl">
              <div className="flex justify-between mb-1">
                <code className="text-yellow-400 font-mono text-sm">px</code>
                <span className="text-slate-400 text-xs">Pixel — absolu</span>
              </div>
              <p className="text-slate-500 text-xs">Taille fixe. Idéal pour les bordures et les petits éléments.</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl">
              <div className="flex justify-between mb-1">
                <code className="text-emerald-400 font-mono text-sm">rem</code>
                <span className="text-slate-400 text-xs">Root em — relatif</span>
              </div>
              <p className="text-slate-500 text-xs">Relatif à la taille de la police racine. 1rem = 16px par défaut. Recommandé pour les textes.</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl">
              <div className="flex justify-between mb-1">
                <code className="text-blue-400 font-mono text-sm">%</code>
                <span className="text-slate-400 text-xs">Pourcentage — relatif</span>
              </div>
              <p className="text-slate-500 text-xs">Relatif à l'élément parent. Très utilisé pour les largeurs.</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl">
              <div className="flex justify-between mb-1">
                <code className="text-purple-400 font-mono text-sm">vw / vh</code>
                <span className="text-slate-400 text-xs">Viewport — relatif</span>
              </div>
              <p className="text-slate-500 text-xs">Relatif à la fenêtre du navigateur. 100vw = 100% de la largeur de l'écran.</p>
            </div>
          </div>
        </div>

        {/* Points clés à retenir */}
        <div className="p-8 bg-blue-600 rounded-3xl text-white flex flex-col gap-5">
          <h2 className="text-xl font-bold">🧠 Points clés à retenir</h2>
          <ul className="space-y-4">
            {[
              "CSS = Sélecteur + Propriété + Valeur. Cette structure ne change jamais.",
              "Reliez votre CSS via un fichier externe avec <link rel=\"stylesheet\"> dans le <head>.",
              "Les classes (.nom) sont réutilisables, les IDs (#nom) sont uniques.",
              "Chaque élément est une boîte avec du contenu, du padding, une bordure et une marge.",
              "La spécificité détermine quelle règle s'applique en cas de conflit.",
              "Préférez rem aux px pour les tailles de texte, et % pour les largeurs.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-blue-100 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-white/20 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MINI-QUIZ */}
      <section className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">✅ Vérifiez vos acquis</h2>
        <p className="text-slate-500 text-sm mb-6">Avant de passer à la leçon suivante, assurez-vous de pouvoir répondre à ces questions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { q: "Quelle est la structure d'une règle CSS ?", a: "Sélecteur { propriété: valeur; }" },
            { q: "Quelle est la différence entre padding et margin ?", a: "Padding = espace intérieur ; Margin = espace extérieur" },
            { q: "Comment cibler un élément avec la classe 'titre' ?", a: "Avec .titre en CSS" },
            { q: "Quelle unité est relative à la taille de police racine ?", a: "rem (root em)" },
          ].map(({ q, a }, i) => (
            <details key={i} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden cursor-pointer">
              <summary className="p-5 font-semibold text-slate-800 text-sm list-none flex justify-between items-center">
                {q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform text-lg">↓</span>
              </summary>
              <div className="px-5 pb-5 text-sm text-blue-700 font-mono bg-blue-50 border-t border-blue-100 pt-3">
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
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