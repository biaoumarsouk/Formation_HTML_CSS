import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoAnimations = {
  html: `<div class="box-container">
  <button class="btn-anime">Passez la souris !</button>
  <div class="card-glass">Glassmorphism</div>
</div>`,
  css: `.box-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

/* Effet de transition simple */
.btn-anime {
  background: #3b82f6;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-anime:hover {
  transform: scale(1.1) rotate(5deg);
  background: #2563eb;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Effet de verre moderne */
.card-glass {
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  color: #1e293b;
  font-weight: 900;
  text-transform: uppercase;
}`,
  desc: "Testez les effets de survol (hover) et découvrez le flou d'arrière-plan (backdrop-filter)."
};

const demoTransform = {
  html: `<div class="scene">
  <div class="boite translate">translate</div>
  <div class="boite scale">scale</div>
  <div class="boite rotate">rotate</div>
  <div class="boite skew">skew</div>
</div>`,
  css: `.scene {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px;
  background: #0f172a;
  border-radius: 20px;
}
.boite {
  width: 90px;
  height: 90px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.translate { background: #3b82f6; }
.scale     { background: #8b5cf6; }
.rotate    { background: #f97316; }
.skew      { background: #10b981; }

.translate:hover { transform: translateY(-20px) translateX(10px); }
.scale:hover     { transform: scale(1.4); }
.rotate:hover    { transform: rotate(45deg); }
.skew:hover      { transform: skewX(-20deg) skewY(-5deg); }`,
  desc: "Survolez chaque boîte pour voir les 4 types de transform en action."
};

const demoKeyframes = {
  html: `<div class="scene">
  <div class="point pulse">pulse</div>
  <div class="point spin">spin</div>
  <div class="point bounce">bounce</div>
  <div class="point fade">fade</div>
</div>`,
  css: `/* Définition des animations */
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%       { transform: scale(1.3); opacity: 0.7; }
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-30px); }
}
@keyframes fade {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.1; }
}

/* Application */
.scene {
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background: #0f172a;
  border-radius: 20px;
}
.point {
  width: 70px;
  height: 70px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  color: white;
}
.pulse  { background: #3b82f6; animation: pulse  1.5s ease-in-out infinite; }
.spin   { background: #8b5cf6; animation: spin   2s linear infinite; border-radius: 50%; }
.bounce { background: #f97316; animation: bounce 1s ease-in-out infinite; }
.fade   { background: #10b981; animation: fade   2s ease-in-out infinite; }`,
  desc: "Modifiez les valeurs de durée ou les pourcentages dans @keyframes pour personnaliser les animations."
};

const demoGradients = {
  html: `<div class="galerie">
  <div class="carte lineaire">Linéaire</div>
  <div class="carte radial">Radial</div>
  <div class="carte conique">Conique</div>
  <div class="carte mesh">Mesh</div>
</div>`,
  css: `.galerie {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 20px;
}
.carte {
  height: 120px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: white;
  font-size: 14px;
  text-shadow: 0 1px 4px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;
  cursor: pointer;
}
.carte:hover { transform: scale(1.03); }

.lineaire {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}
.radial {
  background: radial-gradient(circle at 30% 40%, #f97316, #ef4444 70%);
}
.conique {
  background: conic-gradient(#3b82f6, #8b5cf6, #ec4899, #f97316, #3b82f6);
}
.mesh {
  background:
    radial-gradient(at 30% 20%, #3b82f6 0%, transparent 60%),
    radial-gradient(at 80% 80%, #8b5cf6 0%, transparent 60%),
    radial-gradient(at 60% 50%, #ec4899 0%, transparent 50%),
    #0f172a;
}`,
  desc: "Survolez les cartes et modifiez les couleurs ou angles pour créer vos propres dégradés."
};

const demoEffets = {
  html: `<div class="scene">
  <div class="card neumorphism">Neumorphism</div>
  <div class="card glassmorphism">Glassmorphism</div>
</div>`,
  css: `.scene {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
}
.card {
  width: 160px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.card:hover { transform: translateY(-6px); }

/* Style béton des années 2020 */
.neumorphism {
  background: #e0e5ec;
  color: #6b7280;
  box-shadow:
    8px 8px 16px #b8bec7,
    -8px -8px 16px #ffffff;
}

/* Effet verre translucide */
.glassmorphism {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}`,
  desc: "Deux effets visuels populaires : Neumorphism (relief subtil) et Glassmorphism (verre flou)."
};

export default function Animations() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      {/* EN-TÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 8
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Effets & <span className="text-blue-600">Animations</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          Les animations donnent vie à vos interfaces. Bien utilisées, elles guident l'utilisateur, donnent du feedback et rendent votre site <strong>mémorable</strong>.
        </p>
      </header>

      {/* INTRODUCTION */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200 flex flex-col gap-3">
          <div className="text-4xl">🎯</div>
          <h3 className="text-lg font-black">Transitions</h3>
          <p className="text-blue-100 text-sm leading-relaxed">Passez en douceur d'un état à un autre. La propriété <code>transition</code> anime les changements de style.</p>
        </div>
        <div className="p-8 bg-slate-900 rounded-3xl text-white shadow-xl flex flex-col gap-3">
          <div className="text-4xl">🔄</div>
          <h3 className="text-lg font-black">Keyframes</h3>
          <p className="text-slate-400 text-sm leading-relaxed">Créez des animations complexes avec <code>@keyframes</code>. Définissez chaque étape image par image.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-3">
          <div className="text-4xl">✨</div>
          <h3 className="text-lg font-black text-slate-900">Transform</h3>
          <p className="text-slate-500 text-sm leading-relaxed">Déplacez, faites pivoter ou agrandissez des éléments sans perturber le reste de la mise en page.</p>
        </div>
      </section>

      {/* TRANSITIONS */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">1. Les Transitions</h2>
        <p className="text-slate-500 text-sm mb-8 max-w-2xl leading-relaxed">
          La propriété <code className="text-blue-600 font-bold">transition</code> rend un changement de style fluide. Sans elle, les changements sont instantanés et brutaux.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-slate-800 text-sm">La syntaxe</p>
            <div className="font-mono text-xs bg-slate-900 p-5 rounded-2xl leading-relaxed">
              <span className="text-yellow-400">.element</span> {'{'}<br/>
              &nbsp;&nbsp;<span className="text-blue-400">transition</span>:{' '}
              <span className="text-emerald-400">propriété</span>{' '}
              <span className="text-orange-400">durée</span>{' '}
              <span className="text-purple-400">courbe</span>{' '}
              <span className="text-pink-400">délai</span>;<br/>
              {'}'}<br/><br/>
              <span className="text-slate-500">/* Exemples */</span><br/>
              <span className="text-blue-400">transition</span>: <span className="text-emerald-400">all 0.3s ease</span>;<br/>
              <span className="text-blue-400">transition</span>: <span className="text-emerald-400">color 0.2s linear</span>;<br/>
              <span className="text-blue-400">transition</span>: <span className="text-emerald-400">transform 0.5s ease-in-out 0.1s</span>;
            </div>
            <p className="text-slate-500 text-xs">💡 <code className="text-blue-600">all</code> anime toutes les propriétés changeantes, mais peut être moins performant. Précisez la propriété quand possible.</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-slate-800 text-sm">Les courbes d'accélération</p>
            {[
              { val: "ease", desc: "Lent → rapide → lent. La plus naturelle. Valeur par défaut." },
              { val: "linear", desc: "Vitesse constante du début à la fin." },
              { val: "ease-in", desc: "Démarre doucement, finit vite. Effet de 'plongeon'." },
              { val: "ease-out", desc: "Démarre vite, finit doucement. Effet de 'dépôt'." },
              { val: "ease-in-out", desc: "Lent au départ et à l'arrivée. Mouvement élégant." },
              { val: "cubic-bezier()", desc: "Courbe personnalisée. Outil : cubic-bezier.com" },
            ].map(({ val, desc }) => (
              <div key={val} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                <code className="text-blue-600 font-mono text-xs font-bold flex-shrink-0 mt-0.5">{val}</code>
                <span className="text-slate-500 text-xs">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORM */}
      <section className="flex flex-col gap-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">2. Les Transforms</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-2xl leading-relaxed">
            <code>transform</code> modifie l'apparence visuelle d'un élément sans changer sa place dans le flux de la page. Combiné à <code>transition</code>, il crée des effets fluides et performants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {[
              {
                fn: "translate(x, y)",
                color: "blue",
                desc: "Déplace l'élément. translateX() ou translateY() pour un seul axe.",
                ex: "transform: translateY(-10px)"
              },
              {
                fn: "scale(n)",
                color: "purple",
                desc: "Agrandit ou réduit. 1 = taille normale, 1.5 = 150%, 0.8 = 80%.",
                ex: "transform: scale(1.2)"
              },
              {
                fn: "rotate(deg)",
                color: "orange",
                desc: "Fait pivoter en degrés. Les valeurs négatives tournent dans l'autre sens.",
                ex: "transform: rotate(45deg)"
              },
              {
                fn: "skew(x, y)",
                color: "emerald",
                desc: "Incline l'élément sur l'axe X ou Y. Effet 'penché'.",
                ex: "transform: skewX(-15deg)"
              },
              {
                fn: "Combinaisons",
                color: "pink",
                desc: "On peut combiner plusieurs transforms sur une même ligne.",
                ex: "transform: translateY(-5px) scale(1.05)"
              },
              {
                fn: "transform-origin",
                color: "yellow",
                desc: "Définit le point de pivot. Par défaut : center center.",
                ex: "transform-origin: top left"
              },
            ].map(({ fn, color, desc, ex }) => (
              <div key={fn} className={`p-4 bg-white/5 rounded-xl border border-${color}-500/20`}>
                <code className={`text-${color}-400 font-mono text-sm font-bold`}>{fn}</code>
                <p className="text-slate-400 text-xs mt-2 mb-2 leading-relaxed">{desc}</p>
                <div className="font-mono text-xs bg-white/5 p-2 rounded-lg text-slate-300">{ex}</div>
              </div>
            ))}
          </div>
        </div>

        <InteractiveDemo demo={demoTransform} />
        <InteractiveDemo demo={demoAnimations} />
      </section>

      {/* TENDANCES MODERNES */}
      <section className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2">Tendances 2026</h2>
          <p className="text-slate-400 text-sm mb-8">Les effets visuels qui définissent le design moderne.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-blue-400 text-2xl font-black italic">01</span>
              <p className="font-bold">Glassmorphism</p>
              <p className="text-xs text-slate-400 leading-relaxed">Effet verre translucide avec <code>backdrop-filter: blur()</code>. Très utilisé pour les modales, cartes et navigations.</p>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-purple-400 text-2xl font-black italic">02</span>
              <p className="font-bold">Mesh Gradients</p>
              <p className="text-xs text-slate-400 leading-relaxed">Plusieurs dégradés radiaux superposés pour créer des fonds organiques et colorés. Voir la démo ci-dessous.</p>
            </div>
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-pink-400 text-2xl font-black italic">03</span>
              <p className="font-bold">Micro-interactions</p>
              <p className="text-xs text-slate-400 leading-relaxed">Petits retours visuels sur clic, survol, focus. Ils donnent l'impression que l'interface est vivante et réactive.</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -mb-48 -mr-48"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full -mt-32 -ml-32"></div>
      </section>

      {/* KEYFRAMES */}
      <section className="flex flex-col gap-6">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">3. Les Animations <code className="text-blue-600">@keyframes</code></h2>
          <p className="text-slate-500 text-sm mb-8 max-w-2xl leading-relaxed">
            Les transitions animent entre deux états. Les keyframes permettent de définir <strong>autant d'étapes que vous voulez</strong> et de les jouer en boucle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <p className="font-bold text-slate-800 text-sm">Étape 1 — Définir l'animation</p>
              <div className="font-mono text-xs bg-slate-900 p-5 rounded-2xl leading-relaxed">
                <span className="text-purple-400">@keyframes</span>{' '}
                <span className="text-yellow-400">nomAnimation</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-orange-400">0%</span> {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">opacity</span>: <span className="text-emerald-400">0</span>;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">transform</span>: <span className="text-emerald-400">translateY(20px)</span>;<br/>
                &nbsp;&nbsp;{'}'}<br/>
                &nbsp;&nbsp;<span className="text-orange-400">100%</span> {'{'}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">opacity</span>: <span className="text-emerald-400">1</span>;<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">transform</span>: <span className="text-emerald-400">translateY(0)</span>;<br/>
                &nbsp;&nbsp;{'}'}<br/>
                {'}'}
              </div>
              <p className="font-bold text-slate-800 text-sm mt-2">Étape 2 — Appliquer l'animation</p>
              <div className="font-mono text-xs bg-slate-900 p-5 rounded-2xl leading-relaxed">
                <span className="text-yellow-400">.element</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-blue-400">animation</span>: <span className="text-emerald-400">nomAnimation 0.5s ease forwards</span>;<br/>
                {'}'}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="font-bold text-slate-800 text-sm">Les propriétés de <code>animation</code></p>
              {[
                { prop: "animation-name", desc: "Nom de la règle @keyframes à utiliser." },
                { prop: "animation-duration", desc: "Durée d'un cycle. Ex: 1s, 300ms." },
                { prop: "animation-timing-function", desc: "Courbe d'accélération (ease, linear…)." },
                { prop: "animation-delay", desc: "Délai avant le démarrage." },
                { prop: "animation-iteration-count", desc: "Nombre de répétitions. infinite pour boucle." },
                { prop: "animation-direction", desc: "normal, reverse, alternate (aller-retour)." },
                { prop: "animation-fill-mode", desc: "forwards = garde l'état final après l'animation." },
                { prop: "animation-play-state", desc: "paused | running — pour contrôler via JS." },
              ].map(({ prop, desc }) => (
                <div key={prop} className="flex items-start gap-3 p-2.5 bg-slate-50 rounded-lg">
                  <code className="text-blue-600 font-mono text-xs font-bold flex-shrink-0">{prop}</code>
                  <span className="text-slate-500 text-xs">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <InteractiveDemo demo={demoKeyframes} />
      </section>

      {/* DÉGRADÉS */}
      <section className="flex flex-col gap-6">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">4. Les Dégradés CSS</h2>
          <p className="text-slate-500 text-sm mb-8 max-w-2xl leading-relaxed">
            Les dégradés remplacent avantageusement les couleurs plates pour les fonds, boutons et textes. Il en existe 3 types principaux.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                name: "linear-gradient",
                color: "blue",
                preview: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                desc: "Dégradé en ligne droite. On définit l'angle et les couleurs.",
                ex: "background: linear-gradient(135deg, #3b82f6, #8b5cf6);"
              },
              {
                name: "radial-gradient",
                color: "orange",
                preview: "radial-gradient(circle at 30% 40%, #f97316, #ef4444)",
                desc: "Dégradé circulaire ou elliptique depuis un point d'origine.",
                ex: "background: radial-gradient(circle, #f97316, #ef4444);"
              },
              {
                name: "conic-gradient",
                color: "purple",
                preview: "conic-gradient(#3b82f6, #8b5cf6, #ec4899, #f97316, #3b82f6)",
                desc: "Dégradé conique autour d'un point. Idéal pour les graphiques en camembert.",
                ex: "background: conic-gradient(red, yellow, green);"
              },
            ].map(({ name, color, preview, desc, ex }) => (
              <div key={name} className="flex flex-col gap-3">
                <div className="h-20 rounded-2xl" style={{ background: preview }}></div>
                <code className={`text-${color}-600 font-mono text-xs font-bold`}>{name}</code>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                <div className="font-mono text-xs bg-slate-50 p-2 rounded-lg text-slate-600 border border-slate-100">{ex}</div>
              </div>
            ))}
          </div>
        </div>

        <InteractiveDemo demo={demoGradients} />
      </section>

      {/* EFFETS MODERNES */}
      <section className="flex flex-col gap-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">5. Effets Modernes</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-2xl leading-relaxed">
            Ces effets visuels utilisés dans les produits les plus modernes se créent uniquement avec du CSS.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Glassmorphism */}
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex flex-col gap-3">
              <p className="font-bold text-blue-300">Glassmorphism</p>
              <div className="font-mono text-xs bg-white/5 p-4 rounded-xl leading-relaxed">
                <span className="text-yellow-400">.glass</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-blue-400">background</span>: <span className="text-emerald-400">rgba(255,255,255, 0.1)</span>;<br/>
                &nbsp;&nbsp;<span className="text-blue-400">backdrop-filter</span>: <span className="text-emerald-400">blur(12px)</span>;<br/>
                &nbsp;&nbsp;<span className="text-blue-400">border</span>: <span className="text-emerald-400">1px solid rgba(255,255,255,0.2)</span>;<br/>
                &nbsp;&nbsp;<span className="text-blue-400">border-radius</span>: <span className="text-emerald-400">20px</span>;<br/>
                {'}'}
              </div>
              <p className="text-slate-400 text-xs">Nécessite un arrière-plan visible derrière l'élément pour fonctionner.</p>
            </div>

            {/* Neumorphism */}
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex flex-col gap-3">
              <p className="font-bold text-purple-300">Neumorphism</p>
              <div className="font-mono text-xs bg-white/5 p-4 rounded-xl leading-relaxed">
                <span className="text-yellow-400">.neuo</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-blue-400">background</span>: <span className="text-emerald-400">#e0e5ec</span>;<br/>
                &nbsp;&nbsp;<span className="text-blue-400">box-shadow</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">8px 8px 16px #b8bec7</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">-8px -8px 16px #ffffff</span>;<br/>
                {'}'}
              </div>
              <p className="text-slate-400 text-xs">Deux ombres opposées créent un effet de relief sculpté dans la matière.</p>
            </div>

            {/* Text Gradient */}
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex flex-col gap-3">
              <p className="font-bold text-pink-300">Texte Dégradé</p>
              <div className="font-mono text-xs bg-white/5 p-4 rounded-xl leading-relaxed">
                <span className="text-yellow-400">.texte-gradient</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-blue-400">background</span>: <span className="text-emerald-400">linear-gradient(135deg, #3b82f6, #ec4899)</span>;<br/>
                &nbsp;&nbsp;<span className="text-blue-400">-webkit-background-clip</span>: <span className="text-emerald-400">text</span>;<br/>
                &nbsp;&nbsp;<span className="text-blue-400">-webkit-text-fill-color</span>: <span className="text-emerald-400">transparent</span>;<br/>
                {'}'}
              </div>
              <p className="text-slate-400 text-xs">Le dégradé est "clipé" sur le texte. Très tendance pour les titres.</p>
            </div>

            {/* Glow */}
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10 flex flex-col gap-3">
              <p className="font-bold text-yellow-300">Glow / Halo lumineux</p>
              <div className="font-mono text-xs bg-white/5 p-4 rounded-xl leading-relaxed">
                <span className="text-yellow-400">.glow</span> {'{'}<br/>
                &nbsp;&nbsp;<span className="text-blue-400">box-shadow</span>:<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">0 0 20px rgba(59, 130, 246, 0.5)</span>,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">0 0 60px rgba(59, 130, 246, 0.2)</span>;<br/>
                {'}'}
              </div>
              <p className="text-slate-400 text-xs">Plusieurs box-shadow superposées créent un effet de halo lumineux.</p>
            </div>
          </div>
        </div>

        <InteractiveDemo demo={demoEffets} />
      </section>

      {/* PERFORMANCES */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">⚡ Animations Performantes</h2>
        <p className="text-slate-500 text-sm mb-8 max-w-2xl leading-relaxed">
          Toutes les animations ne sont pas égales en termes de performance. Certaines propriétés sont accélérées par le GPU, d'autres provoquent des recalculs coûteux.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <p className="font-black text-emerald-700 mb-4">✅ Propriétés rapides (GPU)</p>
            <ul className="space-y-2">
              {[
                { prop: "transform", ex: "translate, scale, rotate" },
                { prop: "opacity", ex: "0 à 1" },
                { prop: "filter", ex: "blur(), brightness()" },
              ].map(({ prop, ex }) => (
                <li key={prop} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-emerald-100">
                  <code className="text-emerald-700 font-mono text-xs font-bold">{prop}</code>
                  <span className="text-slate-500 text-xs">{ex}</span>
                </li>
              ))}
            </ul>
            <p className="text-emerald-700 text-xs mt-3">Ces propriétés sont traitées par la carte graphique. Les animations sont fluides même sur mobile.</p>
          </div>

          <div className="p-6 bg-red-50 rounded-2xl border border-red-100">
            <p className="font-black text-red-700 mb-4">❌ Propriétés lentes (CPU)</p>
            <ul className="space-y-2">
              {[
                { prop: "width / height", ex: "Recalcule toute la mise en page" },
                { prop: "top / left / margin", ex: "Repositionne tous les éléments voisins" },
                { prop: "font-size", ex: "Recalcule le rendu du texte" },
              ].map(({ prop, ex }) => (
                <li key={prop} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-red-100">
                  <code className="text-red-700 font-mono text-xs font-bold">{prop}</code>
                  <span className="text-slate-500 text-xs">{ex}</span>
                </li>
              ))}
            </ul>
            <p className="text-red-700 text-xs mt-3">Animez <code>transform: scale()</code> plutôt que <code>width</code>, et <code>transform: translate()</code> plutôt que <code>top/left</code>.</p>
          </div>
        </div>

        <div className="mt-5 p-5 bg-blue-50 rounded-2xl border border-blue-100">
          <p className="font-bold text-blue-700 text-sm mb-2">💡 La règle d'or</p>
          <p className="text-blue-700/70 text-sm">N'animez que <code className="font-bold">transform</code> et <code className="font-bold">opacity</code> pour des animations fluides à 60fps sur tous les appareils.</p>
        </div>
      </section>

      {/* MINI-QUIZ */}
      <section className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">✅ Vérifiez vos acquis</h2>
        <p className="text-slate-500 text-sm mb-6">Testez vos connaissances sur les animations CSS.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { q: "Quelle propriété rend un changement de style fluide ?", a: "transition — ex: transition: all 0.3s ease;" },
            { q: "Quelle est la différence entre transition et @keyframes ?", a: "transition anime entre 2 états. @keyframes permet de définir autant d'étapes que souhaité et de boucler." },
            { q: "Comment créer un texte avec un dégradé de couleurs ?", a: "background: linear-gradient(...) + -webkit-background-clip: text + -webkit-text-fill-color: transparent" },
            { q: "Quelles propriétés sont les plus performantes à animer ?", a: "transform et opacity, car elles sont accélérées par le GPU sans recalculer la mise en page." },
            { q: "Que fait animation-fill-mode: forwards ?", a: "L'élément garde les styles de la dernière étape (@keyframes) une fois l'animation terminée." },
            { q: "Quelle propriété CSS crée l'effet de flou derrière un élément (Glassmorphism) ?", a: "backdrop-filter: blur(12px)" },
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
        <div className="text-slate-400 text-sm font-medium italic">On passe à la pratique réelle ?</div>
        <Link
          to="/lesson/real-designs"
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Designs Réels →
        </Link>
      </footer>
    </div>
  );
}