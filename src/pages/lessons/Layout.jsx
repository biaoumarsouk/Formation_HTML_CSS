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

const demoFlexDirection = {
  html: `<div class="parent">
  <div class="enfant">A</div>
  <div class="enfant">B</div>
  <div class="enfant">C</div>
</div>`,
  css: `.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: #0f172a;
  padding: 30px;
  border-radius: 20px;
}
.enfant {
  width: 80px;
  height: 50px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
}`,
  desc: "Essayez flex-direction: row pour passer en horizontal."
};

const demoGrid = {
  html: `<div class="grille">
  <div class="item header">En-tête</div>
  <div class="item sidebar">Sidebar</div>
  <div class="item main">Contenu principal</div>
  <div class="item footer">Pied de page</div>
</div>`,
  css: `.grille {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 12px;
  height: 280px;
  font-family: sans-serif;
  font-weight: bold;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: white;
  font-size: 14px;
}
.header  { grid-area: header;  background: #2563eb; }
.sidebar { grid-area: sidebar; background: #7c3aed; }
.main    { grid-area: main;    background: #0f766e; }
.footer  { grid-area: footer;  background: #0f172a; }`,
  desc: "Modifiez grid-template-columns pour changer les proportions de la grille."
};

const demoPosition = {
  html: `<div class="scene">
  <div class="boite relative-box">relative</div>
  <div class="boite absolute-box">absolute</div>
  <div class="texte">Contenu normal</div>
</div>`,
  css: `.scene {
  position: relative;
  background: #f8fafc;
  height: 200px;
  border-radius: 16px;
  border: 2px dashed #cbd5e1;
  padding: 20px;
}
.boite {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 13px;
  display: inline-block;
}
.relative-box {
  position: relative;
  top: 20px;
  left: 20px;
  background: #3b82f6;
  color: white;
}
.absolute-box {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f97316;
  color: white;
}
.texte {
  margin-top: 30px;
  color: #94a3b8;
  font-size: 13px;
}`,
  desc: "Observez comment 'absolute' sort du flux normal et se positionne par rapport au parent."
};

export default function Layout() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      {/* EN-TÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 6
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Mise en <span className="text-blue-600">Page</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          La mise en page, c'est l'art de <strong>placer et organiser</strong> les éléments sur l'écran. C'est ici que le design prend vraiment forme.
        </p>
      </header>

      {/* INTRODUCTION : LES 3 SYSTÈMES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200 flex flex-col gap-3">
          <div className="text-4xl">↔️</div>
          <h3 className="text-lg font-black">Flexbox</h3>
          <p className="text-blue-100 text-sm leading-relaxed">Idéal pour aligner des éléments sur <strong>une seule direction</strong> (ligne ou colonne).</p>
        </div>
        <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl flex flex-col gap-3">
          <div className="text-4xl">🔲</div>
          <h3 className="text-lg font-black">Grid</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Parfait pour des mises en page <strong>en 2D</strong> : colonnes ET lignes en même temps.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-3">
          <div className="text-4xl">📌</div>
          <h3 className="text-lg font-black text-slate-900">Position</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Pour sortir un élément du flux normal et le <strong>placer précisément</strong>.</p>
        </div>
      </section>

      {/* BOX MODEL (rappel + lien leçon précédente) */}
      <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="flex items-start gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold italic text-slate-800 mb-2">1. Le Box Model (Rappel)</h2>
            <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
              Chaque élément HTML est une boîte. Avant de les aligner, il faut comprendre comment elles sont construites. La mise en page consiste à gérer la manière dont ces boîtes se positionnent les unes par rapport aux autres.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Visualisation Box Model */}
          <div className="flex justify-center items-center p-10 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex-1">
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

          {/* Astuce box-sizing */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="font-bold text-slate-800 text-sm mb-2">Le problème classique</p>
              <p className="text-slate-500 text-xs leading-relaxed">Par défaut, si vous donnez <code className="bg-slate-200 px-1 rounded">width: 300px</code> et <code className="bg-slate-200 px-1 rounded">padding: 20px</code>, la boîte fera en réalité <strong>340px</strong> de large. Surprenant !</p>
            </div>
            <div className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="font-bold text-blue-700 text-sm mb-2">✅ La solution universelle</p>
              <div className="font-mono text-xs bg-slate-900 text-emerald-400 p-3 rounded-xl leading-relaxed">
                {'* {'}<br/>
                &nbsp;&nbsp;{'box-sizing: border-box;'}<br/>
                {'}'}
              </div>
              <p className="text-blue-700/70 text-xs mt-2">Avec cette règle, le padding est inclus dans la largeur. 300px = 300px, toujours.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="font-bold text-slate-800 text-sm mb-2">La propriété <code>display</code></p>
              <ul className="space-y-1.5 text-xs text-slate-500">
                <li><code className="text-blue-600">block</code> — prend toute la largeur, crée un saut de ligne</li>
                <li><code className="text-blue-600">inline</code> — s'intègre dans le texte, pas de largeur/hauteur</li>
                <li><code className="text-blue-600">inline-block</code> — inline mais accepte largeur/hauteur</li>
                <li><code className="text-blue-600">none</code> — cache complètement l'élément</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FLEXBOX */}
      <section className="flex flex-col gap-6">
        <div className="bg-blue-600 rounded-[2.5rem] p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-2">2. Maîtriser Flexbox</h2>
          <p className="text-blue-100 leading-relaxed mb-8 max-w-2xl text-sm">
            Flexbox (Flexible Box) est le système d'alignement moderne de CSS. Il s'applique sur un <strong>élément parent</strong> pour contrôler la disposition de ses enfants directs.
          </p>

          {/* Axe principal vs transversal */}
          <div className="p-6 bg-white/10 rounded-2xl border border-white/20 mb-8">
            <p className="font-bold mb-4 text-sm">Le concept des deux axes</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="font-bold text-yellow-300 text-sm mb-1">Axe principal →</p>
                <p className="text-blue-100 text-xs">Direction des éléments. Par défaut horizontal (row). Contrôlé par <code>justify-content</code>.</p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl">
                <p className="font-bold text-emerald-300 text-sm mb-1">Axe transversal ↓</p>
                <p className="text-blue-100 text-xs">Perpendiculaire à l'axe principal. Contrôlé par <code>align-items</code>.</p>
              </div>
            </div>
          </div>

          {/* Propriétés du parent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Propriétés du Parent</p>
              <div className="space-y-3">
                {[
                  { prop: "display: flex", desc: "Active le mode flexible." },
                  { prop: "flex-direction", desc: "row (défaut) | column | row-reverse | column-reverse" },
                  { prop: "justify-content", desc: "flex-start | center | flex-end | space-between | space-around" },
                  { prop: "align-items", desc: "flex-start | center | flex-end | stretch" },
                  { prop: "gap", desc: "Espace entre les enfants. Ex: gap: 16px" },
                  { prop: "flex-wrap", desc: "nowrap | wrap — autorise le retour à la ligne" },
                ].map(({ prop, desc }) => (
                  <div key={prop} className="p-3 bg-white/10 rounded-xl border border-white/10">
                    <code className="font-mono text-yellow-300 text-xs font-bold">{prop}</code>
                    <p className="text-blue-200 text-xs mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Propriétés des enfants */}
            <div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Propriétés des Enfants</p>
              <div className="space-y-3">
                {[
                  { prop: "flex: 1", desc: "L'enfant prend tout l'espace disponible." },
                  { prop: "flex-grow", desc: "Facteur d'agrandissement (0, 1, 2…)" },
                  { prop: "flex-shrink", desc: "Facteur de rétrécissement si manque de place." },
                  { prop: "flex-basis", desc: "Taille de base avant distribution de l'espace." },
                  { prop: "align-self", desc: "Aligne cet enfant individuellement sur l'axe transversal." },
                  { prop: "order", desc: "Change l'ordre d'affichage sans modifier le HTML." },
                ].map(({ prop, desc }) => (
                  <div key={prop} className="p-3 bg-white/10 rounded-xl border border-white/10">
                    <code className="font-mono text-emerald-300 text-xs font-bold">{prop}</code>
                    <p className="text-blue-200 text-xs mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <InteractiveDemo demo={demoLayout} />
        <InteractiveDemo demo={demoFlexDirection} />
      </section>

      {/* VALEURS DE JUSTIFY-CONTENT visualisées */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Visualiser <code className="text-blue-600">justify-content</code></h2>
        <p className="text-slate-500 text-sm mb-8">C'est la propriété la plus utilisée de Flexbox. Voici ses 5 valeurs principales.</p>
        <div className="space-y-5">
          {[
            { val: "flex-start", justify: "justify-start", label: "flex-start — aligné à gauche (défaut)" },
            { val: "center", justify: "justify-center", label: "center — centré" },
            { val: "flex-end", justify: "justify-end", label: "flex-end — aligné à droite" },
            { val: "space-between", justify: "justify-between", label: "space-between — espacement entre les blocs" },
            { val: "space-around", justify: "justify-around", label: "space-around — espacement autour de chaque bloc" },
          ].map(({ justify, label }) => (
            <div key={label}>
              <p className="text-xs font-mono text-slate-500 mb-2">{label}</p>
              <div className={`flex ${justify} gap-2 bg-slate-50 rounded-xl p-4 border border-slate-100`}>
                {['A','B','C'].map(l => (
                  <div key={l} className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-black">{l}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CSS GRID */}
      <section className="flex flex-col gap-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">3. CSS Grid</h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl text-sm">
            Grid est le système de mise en page <strong>en deux dimensions</strong>. Là où Flexbox gère une rangée à la fois, Grid gère simultanément colonnes et lignes — idéal pour les mises en page complexes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Propriétés Essentielles</p>
              <div className="space-y-3">
                {[
                  { prop: "display: grid", desc: "Active le mode grille." },
                  { prop: "grid-template-columns", desc: "Définit les colonnes. Ex: 1fr 2fr ou repeat(3, 1fr)" },
                  { prop: "grid-template-rows", desc: "Définit les lignes. Ex: auto 1fr auto" },
                  { prop: "gap", desc: "Espacement entre les cellules de la grille." },
                  { prop: "grid-template-areas", desc: "Nomme des zones pour une mise en page lisible." },
                ].map(({ prop, desc }) => (
                  <div key={prop} className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <code className="font-mono text-yellow-400 text-xs font-bold">{prop}</code>
                    <p className="text-slate-400 text-xs mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">Placer les Éléments</p>
              <div className="space-y-3">
                {[
                  { prop: "grid-column: 1 / 3", desc: "S'étend de la colonne 1 à 3 (span 2 colonnes)." },
                  { prop: "grid-row: 1 / 2", desc: "Occupe la ligne 1 à 2." },
                  { prop: "grid-area: nom", desc: "Assigne l'élément à une zone nommée." },
                  { prop: "grid-column: span 2", desc: "Raccourci pour s'étendre sur 2 colonnes." },
                  { prop: "place-items: center", desc: "Raccourci pour align-items + justify-items." },
                ].map(({ prop, desc }) => (
                  <div key={prop} className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <code className="font-mono text-emerald-400 text-xs font-bold">{prop}</code>
                    <p className="text-slate-400 text-xs mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* L'unité fr */}
          <div className="p-5 bg-blue-600/20 rounded-2xl border border-blue-500/30">
            <p className="font-bold text-blue-300 text-sm mb-2">⭐ L'unité <code>fr</code> (fraction)</p>
            <p className="text-slate-400 text-xs leading-relaxed mb-3">
              C'est l'unité magique de Grid. Elle divise l'espace disponible en fractions.
            </p>
            <div className="font-mono text-xs bg-white/5 p-4 rounded-xl leading-relaxed">
              <span className="text-yellow-400">grid-template-columns</span>: <span className="text-emerald-400">1fr 2fr 1fr</span>;<br/>
              <span className="text-slate-500">/* 3 colonnes : 25% — 50% — 25% de l'espace total */</span>
            </div>
          </div>
        </div>

        <InteractiveDemo demo={demoGrid} />
      </section>

      {/* FLEXBOX vs GRID */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Flexbox ou Grid ?</h2>
        <p className="text-slate-500 text-sm mb-8">Les deux sont complémentaires. Voici comment choisir.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <p className="font-black text-blue-700 mb-4">Choisissez Flexbox quand…</p>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Aligner des éléments sur une seule ligne (nav, boutons…)",
                "Centrer un élément dans son parent",
                "Répartir de l'espace entre des items",
                "Créer une rangée ou une colonne d'éléments",
                "Le nombre d'items est variable ou inconnu",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-slate-900 rounded-2xl">
            <p className="font-black text-slate-100 mb-4">Choisissez Grid quand…</p>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                "Créer une mise en page complète (header, sidebar, main…)",
                "Aligner sur 2 axes simultanément",
                "Faire des éléments qui s'étendent sur plusieurs colonnes",
                "Construire des galeries d'images ou des tableaux",
                "La structure de la page est connue à l'avance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-slate-400 text-xs mt-6 text-center">💡 En pratique, on utilise souvent <strong>Grid pour la structure globale</strong> de la page et <strong>Flexbox pour les composants internes</strong>.</p>
      </section>

      {/* POSITION */}
      <section className="flex flex-col gap-6">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">4. La Propriété <code className="text-blue-600">position</code></h2>
          <p className="text-slate-500 text-sm mb-8 max-w-2xl">
            Par défaut, les éléments suivent le <strong>flux normal</strong> du document : ils se placent les uns après les autres. La propriété <code>position</code> permet de briser ce flux.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              {
                val: "static",
                color: "slate",
                desc: "Valeur par défaut. L'élément suit le flux normal. Les propriétés top/left/right/bottom n'ont aucun effet.",
                use: "Comportement normal de tous les éléments."
              },
              {
                val: "relative",
                color: "blue",
                desc: "L'élément se déplace par rapport à sa position d'origine, mais garde sa place dans le flux.",
                use: "Décaler légèrement un élément. Créer un point de référence pour ses enfants absolute."
              },
              {
                val: "absolute",
                color: "purple",
                desc: "Sort du flux normal. Se positionne par rapport au premier parent non-static (relative, absolute…).",
                use: "Badges, bulles, éléments décoratifs superposés."
              },
              {
                val: "fixed",
                color: "orange",
                desc: "Sort du flux. Se positionne par rapport à la fenêtre du navigateur. Ne bouge pas au scroll.",
                use: "Barres de navigation fixes, boutons flottants."
              },
              {
                val: "sticky",
                color: "emerald",
                desc: "Se comporte comme relative jusqu'à un certain point du scroll, puis devient fixed.",
                use: "En-têtes de tableaux, navigation qui colle en scrollant."
              },
            ].map(({ val, color, desc, use }) => (
              <div key={val} className={`p-5 bg-${color}-50 rounded-2xl border border-${color}-100`}>
                <code className={`text-${color}-700 font-mono font-black text-sm`}>{val}</code>
                <p className={`text-${color}-900/70 text-xs mt-2 leading-relaxed`}>{desc}</p>
                <p className={`text-${color}-600 text-xs mt-3 font-semibold`}>→ {use}</p>
              </div>
            ))}
          </div>

          {/* top / left / right / bottom */}
          <div className="p-6 bg-slate-900 rounded-2xl text-white">
            <p className="font-bold text-blue-400 text-sm mb-4">Les propriétés de décalage</p>
            <div className="font-mono text-xs bg-white/5 p-4 rounded-xl leading-relaxed">
              <span className="text-yellow-400">.element</span> {'{'}<br/>
              &nbsp;&nbsp;<span className="text-blue-400">position</span>: <span className="text-emerald-400">absolute</span>;<br/>
              &nbsp;&nbsp;<span className="text-blue-400">top</span>: <span className="text-emerald-400">20px</span>;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">/* distance depuis le haut */</span><br/>
              &nbsp;&nbsp;<span className="text-blue-400">right</span>: <span className="text-emerald-400">10px</span>;&nbsp;&nbsp;<span className="text-slate-500">/* distance depuis la droite */</span><br/>
              {'}'}
            </div>
            <p className="text-slate-500 text-xs mt-3">⚠️ Ces propriétés n'ont d'effet que si <code className="text-blue-400">position</code> est différent de <code className="text-blue-400">static</code>.</p>
          </div>
        </div>

        <InteractiveDemo demo={demoPosition} />
      </section>

      {/* Z-INDEX & OVERFLOW */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-slate-900 rounded-3xl text-white">
          <h2 className="text-xl font-bold mb-2 text-blue-400">z-index — La profondeur</h2>
          <p className="text-slate-400 text-sm mb-5 leading-relaxed">
            Quand des éléments se superposent (avec position), <code>z-index</code> détermine lequel est au-dessus.
          </p>
          <div className="font-mono text-xs bg-white/5 p-4 rounded-xl leading-relaxed mb-4">
            <span className="text-yellow-400">.modal</span> {'{'}<br/>
            &nbsp;&nbsp;<span className="text-blue-400">position</span>: <span className="text-emerald-400">fixed</span>;<br/>
            &nbsp;&nbsp;<span className="text-blue-400">z-index</span>: <span className="text-emerald-400">1000</span>; <span className="text-slate-500">/* au-dessus de tout */</span><br/>
            {'}'}<br/><br/>
            <span className="text-yellow-400">.overlay</span> {'{'}<br/>
            &nbsp;&nbsp;<span className="text-blue-400">z-index</span>: <span className="text-emerald-400">999</span>; <span className="text-slate-500">/* juste en dessous */</span><br/>
            {'}'}
          </div>
          <p className="text-slate-500 text-xs">💡 <code className="text-blue-400">z-index</code> ne fonctionne que sur les éléments positionnés (non-static).</p>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold mb-2 text-slate-900">overflow — Le débordement</h2>
          <p className="text-slate-500 text-sm mb-5 leading-relaxed">
            Que faire quand le contenu dépasse les dimensions de son conteneur ?
          </p>
          <ul className="space-y-3">
            {[
              { val: "visible", color: "slate", desc: "Défaut. Le contenu déborde librement." },
              { val: "hidden", color: "blue", desc: "Le contenu qui dépasse est coupé, invisible." },
              { val: "scroll", color: "purple", desc: "Ajoute toujours une barre de défilement." },
              { val: "auto", color: "emerald", desc: "Ajoute une barre de défilement seulement si nécessaire. Le plus utilisé." },
            ].map(({ val, color, desc }) => (
              <li key={val} className={`flex gap-3 p-3 bg-${color}-50 rounded-xl items-start`}>
                <code className={`text-${color}-700 font-mono text-xs font-bold flex-shrink-0 mt-0.5`}>{val}</code>
                <span className="text-slate-600 text-xs">{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MINI-QUIZ */}
      <section className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">✅ Vérifiez vos acquis</h2>
        <p className="text-slate-500 text-sm mb-6">Ces questions couvrent les points clés de cette leçon.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { q: "Quelle propriété active Flexbox sur un parent ?", a: "display: flex" },
            { q: "Quelle propriété Flexbox gère l'alignement horizontal ?", a: "justify-content" },
            { q: "Comment s'étendre sur 2 colonnes dans une Grid ?", a: "grid-column: span 2" },
            { q: "Quelle valeur de position sort du flux et se positionne par rapport à la fenêtre ?", a: "position: fixed" },
            { q: "Que signifie l'unité fr dans CSS Grid ?", a: "Une fraction de l'espace disponible." },
            { q: "Pourquoi utiliser box-sizing: border-box ?", a: "Pour inclure padding et border dans la largeur totale de l'élément." },
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