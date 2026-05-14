import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoResponsive = {
  html: `<div class="grille-responsive">
  <div class="carte">📱 Mobile</div>
  <div class="carte">💻 Desktop</div>
  <div class="carte">🖥️ Large</div>
</div>`,
  css: `.grille-responsive {
  display: grid;
  gap: 20px;
  /* 1 colonne par défaut (Mobile) */
  grid-template-columns: 1fr; 
}

/* Si l'écran fait plus de 768px (Tablette/PC) */
@media (min-width: 768px) {
  .grille-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}

.carte {
  background: white;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  border: 2px solid #e2e8f0;
  color: #3b82f6;
}`,
  desc: "Redimensionnez votre fenêtre ou observez comment la grille passe de 1 à 3 colonnes grâce au @media."
};

const demoNavResponsive = {
  html: `<nav class="navbar">
  <span class="logo">MonSite</span>
  <ul class="liens">
    <li><a href="#">Accueil</a></li>
    <li><a href="#">À propos</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<main class="contenu">
  <h2>Contenu principal</h2>
  <p>Ce contenu s'adapte à la largeur disponible.</p>
</main>`,
  css: `/* MOBILE FIRST */
.navbar {
  background: #0f172a;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 16px;
}
.logo {
  color: #3b82f6;
  font-weight: 900;
  font-size: 18px;
}
.liens {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
  margin: 0;
}
.liens a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  padding: 6px 0;
  display: block;
}
.contenu {
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  margin-top: 12px;
}
.contenu h2 {
  color: #0f172a;
  font-weight: bold;
  margin-bottom: 6px;
}
.contenu p {
  color: #64748b;
  font-size: 14px;
}

/* TABLETTE ET PLUS (768px+) */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .liens {
    flex-direction: row;
    gap: 24px;
  }
}`,
  desc: "Réduisez la largeur de la fenêtre pour voir la navigation passer en mode mobile (colonne)."
};

const demoTypoResponsive = {
  html: `<article class="article">
  <h1 class="titre">Un Titre Responsive</h1>
  <p class="corps">
    Ce texte utilise des unités fluides pour s'adapter
    à n'importe quelle taille d'écran sans media query.
    Redimensionnez la fenêtre pour le voir !
  </p>
  <button class="btn">Lire la suite</button>
</article>`,
  css: `.article {
  background: #0f172a;
  padding: clamp(20px, 5vw, 60px);
  border-radius: 20px;
  text-align: center;
}
.titre {
  /* clamp(min, idéal, max) */
  font-size: clamp(24px, 5vw, 52px);
  color: white;
  font-weight: 900;
  margin-bottom: 16px;
  line-height: 1.1;
}
.corps {
  font-size: clamp(14px, 2vw, 18px);
  color: #94a3b8;
  line-height: 1.6;
  max-width: 60ch;
  margin: 0 auto 24px;
}
.btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: clamp(10px, 2vw, 16px) clamp(20px, 4vw, 40px);
  border-radius: 50px;
  font-weight: bold;
  font-size: clamp(13px, 1.5vw, 16px);
  cursor: pointer;
}`,
  desc: "Observez comment clamp() adapte la typographie sans media query."
};

export default function Responsive() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      {/* EN-TÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 7
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Design <span className="text-blue-600">Responsive</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          Un site responsive s'adapte automatiquement à tous les écrans : téléphone, tablette, ordinateur. Ce n'est plus une option — c'est une <strong>obligation</strong>.
        </p>
      </header>

      {/* STATISTIQUES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-200 text-center">
          <p className="text-5xl font-black mb-2">63%</p>
          <p className="text-blue-100 text-sm">du trafic web mondial vient des mobiles</p>
        </div>
        <div className="p-8 bg-slate-900 rounded-3xl text-white text-center">
          <p className="text-5xl font-black mb-2 text-emerald-400">↑3x</p>
          <p className="text-slate-400 text-sm">plus de chances qu'un utilisateur reste sur un site mobile-friendly</p>
        </div>
        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm text-center">
          <p className="text-5xl font-black mb-2 text-slate-900">SEO</p>
          <p className="text-slate-500 text-sm">Google pénalise les sites non-responsive dans ses résultats</p>
        </div>
      </section>

      {/* CONCEPT MOBILE FIRST */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-100 flex flex-col gap-5">
          <h2 className="text-2xl font-bold">L'approche Mobile First</h2>
          <p className="text-blue-100 leading-relaxed text-sm">
            On code d'abord pour le petit écran, puis on ajoute des règles CSS pour les écrans plus larges. C'est plus simple et plus performant.
          </p>
          <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
            <p className="font-bold text-sm mb-3">Le principe :</p>
            <div className="space-y-2">
              {[
                { icon: "📱", label: "CSS de base", desc: "Styles pour mobile — toujours actifs" },
                { icon: "📟", label: "@media 768px+", desc: "Ajustements tablette" },
                { icon: "💻", label: "@media 1024px+", desc: "Mise en page desktop" },
                { icon: "🖥️", label: "@media 1280px+", desc: "Grand écran" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="flex items-center gap-3 text-sm">
                  <span>{icon}</span>
                  <div>
                    <span className="font-bold text-white">{label}</span>
                    <span className="text-blue-200 text-xs ml-2">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">SMARTPHONE</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">TABLETTE</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">DESKTOP</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold">LARGE</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex-1">
            <h2 className="text-xl font-bold mb-3 text-slate-800">La Media Query</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Une media query est une <strong>condition CSS</strong>. Elle dit : "Si l'écran est plus large que X pixels, applique ces styles."
            </p>
            <div className="font-mono text-xs bg-slate-900 p-4 rounded-xl leading-relaxed">
              <span className="text-purple-400">@media</span>{' '}
              <span className="text-yellow-400">(min-width: 768px)</span>{' '}{'{'}<br/>
              &nbsp;&nbsp;<span className="text-slate-400">/* Styles pour tablette et plus */</span><br/>
              &nbsp;&nbsp;<span className="text-yellow-400">.container</span> {'{'}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">display</span>: <span className="text-emerald-400">grid</span>;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">grid-template-columns</span>: <span className="text-emerald-400">1fr 1fr</span>;<br/>
              &nbsp;&nbsp;{'}'}<br/>
              {'}'}
            </div>
          </div>

          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
            <p className="font-bold text-slate-800 text-sm mb-3">min-width vs max-width</p>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                <code className="text-blue-700 font-bold">min-width</code>
                <span className="text-slate-500 ml-2">→ "À partir de X pixels" — approche Mobile First ✅</span>
              </div>
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                <code className="text-orange-700 font-bold">max-width</code>
                <span className="text-slate-500 ml-2">→ "Jusqu'à X pixels" — approche Desktop First ⚠️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIEWPORT META */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white">
        <h2 className="text-xl font-bold mb-2 text-blue-400">⚠️ La balise Viewport — Obligatoire</h2>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
          Sans cette balise, votre site responsive <strong>ne fonctionnera pas</strong> sur mobile. Le navigateur zoomera en arrière pour afficher la version desktop. À placer dans le <code className="text-yellow-400">&lt;head&gt;</code> de chaque page HTML.
        </p>
        <div className="font-mono text-sm bg-white/5 p-5 rounded-2xl border border-white/10 text-emerald-400 leading-loose">
          <span className="text-slate-500">&lt;!-- Dans le &lt;head&gt; du HTML --&gt;</span><br/>
          <span className="text-blue-400">&lt;meta</span>{' '}
          <span className="text-yellow-400">name</span>=<span className="text-emerald-400">"viewport"</span>{' '}
          <span className="text-yellow-400">content</span>=<span className="text-emerald-400">"width=device-width, initial-scale=1.0"</span>
          <span className="text-blue-400">&gt;</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <code className="text-yellow-400 text-xs">width=device-width</code>
            <p className="text-slate-400 text-xs mt-1">Utilise la largeur réelle de l'écran (et non une largeur virtuelle de 980px).</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/5">
            <code className="text-yellow-400 text-xs">initial-scale=1.0</code>
            <p className="text-slate-400 text-xs mt-1">Aucun zoom au chargement. La page s'affiche à sa taille naturelle.</p>
          </div>
        </div>
      </section>

      {/* LES BREAKPOINTS */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Les Breakpoints Standards</h2>
        <p className="text-slate-500 text-sm mb-8">Les breakpoints sont les seuils de largeur où votre design change. Ces valeurs sont les plus utilisées dans l'industrie.</p>
        <div className="space-y-4">
          {[
            { bp: "0px", label: "Mobile (défaut)", width: "100%", color: "blue", desc: "Le code de base, toujours actif. Styles pour petits écrans." },
            { bp: "480px", label: "Mobile large", width: "45%", color: "indigo", desc: "Grands smartphones (iPhone Plus, Galaxy…). Parfois ignoré." },
            { bp: "768px", label: "Tablette", width: "60%", color: "purple", desc: "iPad, tablettes Android. Souvent le premier breakpoint ajouté." },
            { bp: "1024px", label: "Laptop", width: "75%", color: "violet", desc: "Petits écrans d'ordinateur. Mise en page desktop commence ici." },
            { bp: "1280px", label: "Desktop", width: "90%", color: "slate", desc: "Écrans standards. La plupart des designs sont optimisés pour cette largeur." },
          ].map(({ bp, label, width, color, desc }) => (
            <div key={bp} className="flex items-center gap-4">
              <div className="w-20 text-right flex-shrink-0">
                <code className={`text-${color}-600 font-mono font-bold text-xs`}>{bp}</code>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <div className={`h-6 bg-${color}-100 border-2 border-${color}-300 rounded-lg transition-all`} style={{ width }}></div>
                  <span className={`text-${color}-700 text-xs font-bold`}>{label}</span>
                </div>
                <p className="text-slate-400 text-xs">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DÉMO PRINCIPALE */}
      <InteractiveDemo demo={demoResponsive} />

      {/* DÉMO NAV RESPONSIVE */}
      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Exemple Pratique : Navigation Responsive</h2>
          <p className="text-slate-500 text-sm">Une navigation qui passe de la disposition colonne (mobile) à la disposition ligne (desktop).</p>
        </div>
        <InteractiveDemo demo={demoNavResponsive} />
      </section>

      {/* UNITÉS FLUIDES */}
      <section className="flex flex-col gap-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">Les Unités Fluides</h2>
          <p className="text-slate-400 text-sm mb-8 max-w-2xl leading-relaxed">
            Certaines unités CSS s'adaptent automatiquement à la taille de l'écran, <strong>sans aucune media query</strong>. Elles permettent un design véritablement fluide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { unit: "%", color: "blue", desc: "Relatif au parent. width: 100% = toute la largeur du conteneur." },
              { unit: "vw / vh", color: "purple", desc: "Viewport Width / Height. 50vw = 50% de la largeur de l'écran." },
              { unit: "vmin / vmax", color: "emerald", desc: "Le plus petit / plus grand entre vw et vh. Utile pour les cartes carrées." },
              { unit: "clamp()", color: "yellow", desc: "clamp(min, idéal, max) — La valeur idéale entre un minimum et un maximum." },
            ].map(({ unit, color, desc }) => (
              <div key={unit} className="p-4 bg-white/5 rounded-xl border border-white/10">
                <code className={`text-${color}-400 font-mono font-black text-lg`}>{unit}</code>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Focus sur clamp */}
          <div className="p-6 bg-blue-600/20 rounded-2xl border border-blue-500/30">
            <p className="font-bold text-blue-300 text-sm mb-3">⭐ La fonction <code>clamp()</code> — La plus puissante</p>
            <div className="font-mono text-xs bg-white/5 p-4 rounded-xl leading-relaxed mb-3">
              <span className="text-yellow-400">font-size</span>:{' '}
              <span className="text-purple-400">clamp</span>(<span className="text-emerald-400">16px</span>,{' '}
              <span className="text-blue-400">4vw</span>,{' '}
              <span className="text-orange-400">48px</span>);<br/>
              <span className="text-slate-500">/*  min   idéal   max  */</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Sur mobile : jamais en dessous de <span className="text-emerald-400 font-bold">16px</span>. Sur desktop : jamais au-dessus de <span className="text-orange-400 font-bold">48px</span>. Entre les deux, s'adapte avec <span className="text-blue-400 font-bold">4vw</span>.
            </p>
          </div>
        </div>

        <InteractiveDemo demo={demoTypoResponsive} />
      </section>

      {/* IMAGES RESPONSIVES */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Images Responsives</h2>
        <p className="text-slate-500 text-sm mb-8">Les images ont besoin d'une attention particulière pour bien se comporter sur tous les écrans.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-slate-800 text-sm">La règle de base</p>
            <div className="font-mono text-xs bg-slate-900 text-emerald-400 p-4 rounded-2xl leading-relaxed">
              <span className="text-yellow-400">img</span> {'{'}<br/>
              &nbsp;&nbsp;<span className="text-blue-400">max-width</span>: <span className="text-emerald-400">100%</span>;<br/>
              &nbsp;&nbsp;<span className="text-blue-400">height</span>: <span className="text-emerald-400">auto</span>;<br/>
              &nbsp;&nbsp;<span className="text-blue-400">display</span>: <span className="text-emerald-400">block</span>;<br/>
              {'}'}
            </div>
            <p className="text-slate-500 text-xs">Cette règle est presque toujours dans le reset CSS de chaque projet. Elle empêche les images de dépasser leur conteneur.</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-bold text-slate-800 text-sm">object-fit — Recadrage des images</p>
            <div className="space-y-2">
              {[
                { val: "cover", desc: "Remplit le conteneur en coupant les bords. Idéal pour les vignettes." },
                { val: "contain", desc: "Affiche l'image entière, avec des bordures vides si nécessaire." },
                { val: "fill", desc: "Étire l'image pour remplir exactement. Déforme l'image !" },
                { val: "none", desc: "Taille originale, sans adaptation." },
              ].map(({ val, desc }) => (
                <div key={val} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <code className="text-blue-600 font-mono text-xs font-bold">{val}</code>
                  <span className="text-slate-500 text-xs ml-2">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRID RESPONSIVE SANS MEDIA QUERY */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white">
        <h2 className="text-2xl font-bold mb-2 text-blue-400">Grid Responsive sans Media Query</h2>
        <p className="text-slate-400 text-sm mb-6 max-w-2xl leading-relaxed">
          Cette technique avancée crée une grille qui s'adapte automatiquement à la place disponible, sans aucune media query. C'est de la magie CSS pure.
        </p>
        <div className="font-mono text-sm bg-white/5 p-6 rounded-2xl border border-white/10 leading-loose">
          <span className="text-yellow-400">.grille</span> {'{'}<br/>
          &nbsp;&nbsp;<span className="text-blue-400">display</span>: <span className="text-emerald-400">grid</span>;<br/>
          &nbsp;&nbsp;<span className="text-blue-400">grid-template-columns</span>:{' '}
          <span className="text-purple-400">repeat</span>(<span className="text-orange-400">auto-fit</span>,{' '}
          <span className="text-purple-400">minmax</span>(<span className="text-emerald-400">250px</span>, <span className="text-emerald-400">1fr</span>));<br/>
          &nbsp;&nbsp;<span className="text-blue-400">gap</span>: <span className="text-emerald-400">20px</span>;<br/>
          {'}'}
        </div>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <code className="text-orange-400 text-xs font-bold">auto-fit</code>
            <p className="text-slate-400 text-xs mt-1">Crée autant de colonnes que possible selon l'espace disponible.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <code className="text-purple-400 text-xs font-bold">minmax(250px, 1fr)</code>
            <p className="text-slate-400 text-xs mt-1">Chaque colonne fait au minimum 250px et peut s'élargir librement.</p>
          </div>
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <code className="text-emerald-400 text-xs font-bold">Résultat</code>
            <p className="text-slate-400 text-xs mt-1">Sur mobile : 1 colonne. Sur desktop : autant que possible. Zéro media query.</p>
          </div>
        </div>
      </section>

      {/* BONNES PRATIQUES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
          <h2 className="text-xl font-bold text-emerald-700 mb-5">✅ Bonnes pratiques</h2>
          <ul className="space-y-3">
            {[
              "Toujours inclure la balise viewport dans le <head>",
              "Coder en Mobile First avec min-width",
              "Utiliser des unités relatives (%, rem, vw) plutôt que px fixes",
              "Tester sur de vrais appareils, pas seulement les DevTools",
              "Utiliser max-width sur les conteneurs pour éviter les lignes trop larges",
              "Penser aux tailles de boutons tactiles (min 44px × 44px)",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-emerald-900">
                <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-red-50 rounded-3xl border border-red-100">
          <h2 className="text-xl font-bold text-red-700 mb-5">❌ Erreurs courantes</h2>
          <ul className="space-y-3">
            {[
              "Oublier la balise viewport (le site ne s'adapte pas du tout)",
              "Utiliser des largeurs fixes en px pour les conteneurs",
              "Coder en Desktop First et ajouter max-width en cascade (plus complexe)",
              "Ne jamais tester sur mobile avant la mise en ligne",
              "Utiliser des polices trop petites sur mobile (min 16px pour le corps)",
              "Ignorer le texte qui déborde de son conteneur",
            ].map((err, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-red-900">
                <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                {err}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MINI-QUIZ */}
      <section className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">✅ Vérifiez vos acquis</h2>
        <p className="text-slate-500 text-sm mb-6">Testez votre compréhension du design responsive.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { q: "Qu'est-ce que l'approche Mobile First ?", a: "Coder d'abord pour le mobile, puis ajouter des styles pour les écrans plus larges avec min-width." },
            { q: "Pourquoi la balise viewport est-elle obligatoire ?", a: "Sans elle, le navigateur affiche une version zoomée en arrière sur mobile, ignorant le responsive." },
            { q: "Quelle est la différence entre min-width et max-width dans une media query ?", a: "min-width = 'à partir de X px' (Mobile First). max-width = 'jusqu'à X px' (Desktop First)." },
            { q: "Comment créer une grille responsive sans media query ?", a: "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))" },
            { q: "Que fait clamp(16px, 4vw, 48px) ?", a: "La taille sera fluide (4vw), mais jamais en dessous de 16px ni au-dessus de 48px." },
            { q: "Quelle propriété empêche les images de dépasser leur conteneur ?", a: "max-width: 100% (avec height: auto pour garder les proportions)." },
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
        <div className="text-slate-400 text-sm font-medium italic">On ajoute du mouvement ?</div>
        <Link
          to="/lesson/animations"
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Animations CSS →
        </Link>
      </footer>
    </div>
  );
}