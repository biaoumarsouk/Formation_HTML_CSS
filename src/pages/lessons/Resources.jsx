import React, { useState } from 'react';

const resources = [
  // Documentation
  { name: "MDN Web Docs", cat: "Documentation", desc: "La référence absolue pour HTML, CSS et JavaScript. Maintenue par Mozilla, c'est le premier endroit à consulter quand on cherche comment fonctionne une propriété CSS.", url: "https://developer.mozilla.org", emoji: "📖", tag: "Gratuit" },
  { name: "CSS-Tricks", cat: "Documentation", desc: "Des guides complets sur Flexbox, Grid et bien plus. L'article 'A Complete Guide to Flexbox' est le plus bookmarké de l'histoire du CSS.", url: "https://css-tricks.com", emoji: "✨", tag: "Gratuit" },
  { name: "web.dev", cat: "Documentation", desc: "Le site officiel de Google pour les bonnes pratiques web : performance, accessibilité, SEO et standards modernes.", url: "https://web.dev", emoji: "🌐", tag: "Gratuit" },
  // Design & Couleurs
  { name: "Coolors", cat: "Design", desc: "Générez des palettes de couleurs harmonieuses en appuyant sur espace. Le plus rapide et le plus utilisé par les développeurs.", url: "https://coolors.co", emoji: "🎨", tag: "Gratuit" },
  { name: "ColorHunt", cat: "Design", desc: "Des milliers de palettes tendance créées par la communauté. Idéal pour trouver l'inspiration en quelques secondes.", url: "https://colorhunt.co", emoji: "🖌️", tag: "Gratuit" },
  { name: "Figma", cat: "Design", desc: "L'outil de design de référence. Créez vos maquettes avant de coder pour aller beaucoup plus vite et éviter les allers-retours.", url: "https://figma.com", emoji: "🔲", tag: "Gratuit / Pro" },
  { name: "Haikei", cat: "Design", desc: "Générateur de SVG magnifiques : vagues, blobs, gradients mesh, formes organiques. Parfait pour les fonds de page.", url: "https://haikei.app", emoji: "🌊", tag: "Gratuit" },
  // Typographie
  { name: "Google Fonts", cat: "Typographie", desc: "Des centaines de polices professionnelles gratuites, intégrables en une seule ligne de CSS dans votre <head>.", url: "https://fonts.google.com", emoji: "🔤", tag: "Gratuit" },
  { name: "FontPair", cat: "Typographie", desc: "Des combinaisons de polices qui fonctionnent ensemble visuellement. Fini le mauvais accord typographique.", url: "https://fontpair.co", emoji: "🅰️", tag: "Gratuit" },
  { name: "Typescale", cat: "Typographie", desc: "Calculez une hiérarchie typographique cohérente basée sur des ratios mathématiques (golden ratio, major third…).", url: "https://typescale.com", emoji: "📐", tag: "Gratuit" },
  // Icônes
  { name: "Lucide", cat: "Icônes", desc: "Bibliothèque d'icônes SVG modernes, cohérentes et open-source. La plus utilisée dans les projets React modernes.", url: "https://lucide.dev", emoji: "⭐", tag: "Gratuit" },
  { name: "Heroicons", cat: "Icônes", desc: "Les icônes officielles de l'équipe Tailwind CSS. Deux styles : outline et solid. Parfaites et propres.", url: "https://heroicons.com", emoji: "🦸", tag: "Gratuit" },
  { name: "Font Awesome", cat: "Icônes", desc: "La plus grande bibliothèque d'icônes au monde avec des milliers d'options. Indétrônable depuis 2012.", url: "https://fontawesome.com", emoji: "🏛️", tag: "Gratuit / Pro" },
  // Images
  { name: "Unsplash", cat: "Images", desc: "Photos professionnelles en haute résolution, libres de droits et entièrement gratuites. Standard dans l'industrie.", url: "https://unsplash.com", emoji: "📸", tag: "Gratuit" },
  { name: "Squoosh", cat: "Images", desc: "Compressez vos images directement dans le navigateur avant de les intégrer. Réduit le poids de 80% sans perte de qualité visible.", url: "https://squoosh.app", emoji: "🗜️", tag: "Gratuit" },
  { name: "SVGRepo", cat: "Images", desc: "Des milliers d'illustrations et d'icônes SVG gratuits et modifiables. Idéal pour les pages 404 et les sections vides.", url: "https://svgrepo.com", emoji: "🖼️", tag: "Gratuit" },
  // CSS Tools
  { name: "CSS Gradient", cat: "Outils CSS", desc: "Créez des dégradés CSS visuellement avec prévisualisation en temps réel. Copiez le code en un clic.", url: "https://cssgradient.io", emoji: "🌈", tag: "Gratuit" },
  { name: "Cubic-bezier", cat: "Outils CSS", desc: "Dessinez visuellement vos courbes d'animation CSS personnalisées. Indispensable pour des transitions sur mesure.", url: "https://cubic-bezier.com", emoji: "📈", tag: "Gratuit" },
  { name: "Clippy", cat: "Outils CSS", desc: "Générateur de clip-path CSS pour créer des formes personnalisées en un glisser-déposer.", url: "https://bennettfeely.com/clippy", emoji: "✂️", tag: "Gratuit" },
  // Apprentissage
  { name: "The Odin Project", cat: "Apprentissage", desc: "Formation complète gratuite en développement web, du HTML aux frameworks modernes. Le meilleur cursus open-source.", url: "https://theodinproject.com", emoji: "⚔️", tag: "Gratuit" },
  { name: "freeCodeCamp", cat: "Apprentissage", desc: "Des certifications gratuites en HTML, CSS, JavaScript et bien plus. Des milliers d'exercices pratiques.", url: "https://freecodecamp.org", emoji: "🏕️", tag: "Gratuit" },
  { name: "Stack Overflow", cat: "Apprentissage", desc: "La communauté de Q&A la plus grande du monde pour les développeurs. Votre bug a probablement déjà été résolu ici.", url: "https://stackoverflow.com", emoji: "💬", tag: "Gratuit" },
];

// ─── Chaînes YouTube ──────────────────────────────────────────────────────────

const youtubeChannels = [
  {
    name: "Traversy Media",
    handle: "@TraversyMedia",
    lang: "🇬🇧",
    subs: "2.2M",
    url: "https://www.youtube.com/@TraversyMedia",
    desc: "Le canal de référence pour apprendre le dev web. Des crash courses complets sur HTML, CSS, JS, React — clairs, directs, sans blabla.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    badge: "Incontournable",
    badgeColor: "bg-red-50 text-red-700 border-red-100",
    recommended: "HTML Crash Course — 1h pour maîtriser les bases",
    recommendedUrl: "https://www.youtube.com/watch?v=UB1O30fR-EE",
  },
  {
    name: "Kevin Powell",
    handle: "@KevinPowell",
    lang: "🇬🇧",
    subs: "900K",
    url: "https://www.youtube.com/@KevinPowell",
    desc: "Le roi du CSS. Flexbox, Grid, animations, responsive design — Kevin Powell explique le CSS mieux que n'importe qui sur internet.",
    tags: ["CSS", "Flexbox", "Grid", "Responsive"],
    badge: "CSS Expert",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
    recommended: "Learn CSS Flexbox — le meilleur tuto Flexbox",
    recommendedUrl: "https://www.youtube.com/watch?v=u044iM9xsWU",
  },
  {
    name: "Fireship",
    handle: "@Fireship",
    lang: "🇬🇧",
    subs: "3.1M",
    url: "https://www.youtube.com/@Fireship",
    desc: "Des explications ultra-rapides en 100 secondes sur tous les concepts du dev moderne. Parfait pour découvrir un nouveau sujet avant de l'approfondir.",
    tags: ["JavaScript", "Web", "Concepts"],
    badge: "Rapide & Dense",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-100",
    recommended: "HTML in 100 seconds — concept express",
    recommendedUrl: "https://www.youtube.com/watch?v=ok-plXXHlWw",
  },
  {
    name: "Web Dev Simplified",
    handle: "@WebDevSimplified",
    lang: "🇬🇧",
    subs: "1.3M",
    url: "https://www.youtube.com/@WebDevSimplified",
    desc: "Des tutoriels qui simplifient les concepts complexes du web. Excellents pour comprendre JavaScript en profondeur et les patterns modernes.",
    tags: ["JavaScript", "CSS", "React", "Node.js"],
    badge: "Pédagogie ++",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-100",
    recommended: "Learn CSS in 20 minutes — essentiel",
    recommendedUrl: "https://www.youtube.com/watch?v=1PnVor36_40",
  },
  {
    name: "Grafikart",
    handle: "@grafikart",
    lang: "🇫🇷",
    subs: "210K",
    url: "https://www.youtube.com/@grafikart",
    desc: "La référence francophone absolue pour le développement web. Des cours complets et professionnels sur HTML, CSS, PHP, JavaScript et bien plus.",
    tags: ["HTML", "CSS", "PHP", "JavaScript"],
    badge: "🇫🇷 Français",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    recommended: "Apprendre le HTML — série complète gratuite",
    recommendedUrl: "https://www.youtube.com/watch?v=oEAi_3HaHOA",
  },
  {
    name: "From Scratch",
    handle: "@FromScratch",
    lang: "🇫🇷",
    subs: "85K",
    url: "https://www.youtube.com/@fromscratch_",
    desc: "Des projets concrets expliqués étape par étape en français. Idéal pour apprendre en construisant de vraies interfaces.",
    tags: ["CSS", "React", "Projets"],
    badge: "🇫🇷 Projets",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-100",
    recommended: "Créer un site web from scratch — projet complet",
    recommendedUrl: "https://www.youtube.com/@fromscratch_",
  },
  {
    name: "Théo — t3.gg",
    handle: "@t3dotgg",
    lang: "🇬🇧",
    subs: "540K",
    url: "https://www.youtube.com/@t3dotgg",
    desc: "Avis tranchés sur les outils, frameworks et tendances du dev web moderne. Pour comprendre l'écosystème React/TypeScript en profondeur.",
    tags: ["React", "TypeScript", "Opinions"],
    badge: "Avancé",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    recommended: "Why I use Tailwind CSS — perspective moderne",
    recommendedUrl: "https://www.youtube.com/@t3dotgg",
  },
  {
    name: "freeCodeCamp YT",
    handle: "@freecodecamp",
    lang: "🇬🇧",
    subs: "9.2M",
    url: "https://www.youtube.com/@freecodecamp",
    desc: "Des cours longs et complets (4h, 6h, 12h) entièrement gratuits. La référence pour les formations approfondies sur tous les sujets du web.",
    tags: ["HTML", "CSS", "JavaScript", "Python"],
    badge: "Cours complets",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
    recommended: "Responsive Web Design — 4h de cours complet",
    recommendedUrl: "https://www.youtube.com/watch?v=srvUrASNj0s",
  },
];

// ─── Playlists recommandées ───────────────────────────────────────────────────

const playlists = [
  {
    title: "Débutant absolu — Par où commencer",
    color: "bg-emerald-600",
    videos: [
      { title: "HTML in 100 Seconds", channel: "Fireship", duration: "2 min", url: "https://www.youtube.com/watch?v=ok-plXXHlWw" },
      { title: "HTML Crash Course For Beginners", channel: "Traversy Media", duration: "1h", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" },
      { title: "CSS in 100 Seconds", channel: "Fireship", duration: "2 min", url: "https://www.youtube.com/watch?v=OEV8gMkCHXQ" },
      { title: "CSS Crash Course", channel: "Traversy Media", duration: "1h30", url: "https://www.youtube.com/watch?v=yfoY53QXEnI" },
    ],
  },
  {
    title: "Maîtriser le CSS",
    color: "bg-blue-600",
    videos: [
      { title: "Flexbox in 100 Seconds", channel: "Fireship", duration: "2 min", url: "https://www.youtube.com/watch?v=K74l26pE4YA" },
      { title: "Learn Flexbox in 15 minutes", channel: "Web Dev Simplified", duration: "15 min", url: "https://www.youtube.com/watch?v=fYq5PXgSsbE" },
      { title: "CSS Grid in 100 Seconds", channel: "Fireship", duration: "2 min", url: "https://www.youtube.com/watch?v=uuOXPWCh-6o" },
      { title: "CSS Grid Tutorial", channel: "Kevin Powell", duration: "30 min", url: "https://www.youtube.com/watch?v=rg7Fvvl3taU" },
    ],
  },
  {
    title: "Design Responsive",
    color: "bg-violet-600",
    videos: [
      { title: "Responsive CSS — Mobile First", channel: "Kevin Powell", duration: "20 min", url: "https://www.youtube.com/watch?v=0ohtVzCSHqs" },
      { title: "Media Queries Explained", channel: "Web Dev Simplified", duration: "12 min", url: "https://www.youtube.com/watch?v=yU7jJ3NbPdA" },
      { title: "Build a Responsive Website", channel: "Traversy Media", duration: "2h", url: "https://www.youtube.com/watch?v=p0bGHP-PXD4" },
    ],
  },
];

const categories = ["Toutes", "Documentation", "Design", "Typographie", "Icônes", "Images", "Outils CSS", "Apprentissage"];

// ─── Icône YouTube SVG ────────────────────────────────────────────────────────

function YouTubeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" fill="#FF0000"/>
      <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/>
    </svg>
  );
}

// ─── Composant carte YouTube ──────────────────────────────────────────────────

function YoutubeCard({ ch }) {
  return (
    <div className="bg-white border border-slate-100 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <YouTubeIcon size={22} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="font-black text-slate-900 text-[14px]">{ch.name}</p>
              <span className="text-[13px]">{ch.lang}</span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono">{ch.handle} · {ch.subs} abonnés</p>
          </div>
        </div>
        <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border flex-shrink-0 ${ch.badgeColor}`}>
          {ch.badge}
        </span>
      </div>

      {/* Description */}
      <p className="text-[12px] text-slate-500 leading-relaxed mb-4 flex-1">{ch.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {ch.tags.map(t => (
          <span key={t} className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">{t}</span>
        ))}
      </div>

      {/* Vidéo recommandée */}
      <a
        href={ch.recommendedUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2.5 bg-red-50 border border-red-100 rounded-xl px-3 py-2.5 hover:bg-red-100 transition-colors group/vid mb-3"
        onClick={e => e.stopPropagation()}
      >
        <div className="w-6 h-6 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white text-[9px] ml-0.5">▶</span>
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-red-700 truncate">Recommandé</p>
          <p className="text-[11px] text-red-600/80 truncate">{ch.recommended}</p>
        </div>
      </a>

      {/* Lien chaîne */}
      <a
        href={ch.url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 pt-3 border-t border-slate-50 text-[12px] font-bold text-slate-300 group-hover:text-red-500 transition-colors"
      >
        <YouTubeIcon size={14} />
        Voir la chaîne
        <span className="group-hover:translate-x-1 transition-transform inline-block ml-auto">→</span>
      </a>
    </div>
  );
}

// ─── Composant playlists ──────────────────────────────────────────────────────

function PlaylistsSection() {
  const [active, setActive] = useState(0);
  const pl = playlists[active];

  return (
    <div>
      {/* Onglets */}
      <div className="flex flex-wrap gap-2 mb-5">
        {playlists.map((p, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-xl text-[12px] font-bold transition-all ${
              active === i ? `${p.color} text-white shadow-lg` : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Liste de vidéos */}
      <div className="bg-slate-900 rounded-2xl overflow-hidden">
        <div className="px-5 py-3 bg-slate-800 border-b border-slate-700 flex items-center gap-2">
          <YouTubeIcon size={16} />
          <span className="text-slate-300 text-[12px] font-bold">{pl.title}</span>
          <span className="ml-auto text-slate-500 text-[11px]">{pl.videos.length} vidéos</span>
        </div>
        <div className="divide-y divide-slate-800">
          {pl.videos.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-800/60 transition-colors group"
            >
              <div className="w-8 h-8 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-red-500 transition-colors">
                <span className="text-red-400 text-[10px] ml-0.5 group-hover:text-white">▶</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-slate-200 text-[13px] font-medium truncate group-hover:text-white transition-colors">
                  {v.title}
                </p>
                <p className="text-slate-500 text-[11px]">{v.channel}</p>
              </div>
              <span className="text-slate-600 text-[11px] font-mono flex-shrink-0">{v.duration}</span>
              <span className="text-slate-600 group-hover:text-slate-300 transition-colors text-[12px]">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function Resources() {
  const [activecat, setActivecat] = useState("Toutes");
  const [search, setSearch] = useState("");

  const filtered = resources.filter(r => {
    const matchCat = activecat === "Toutes" || r.cat === activecat;
    const matchSearch = r.name.toLowerCase().includes(search.toLowerCase()) || r.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="flex flex-col gap-12 animate-fadeIn">

      {/* EN-TÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600" />
          Ressources
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          La boîte à <span className="text-blue-600">Outils</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          {resources.length} ressources + {youtubeChannels.length} chaînes YouTube sélectionnées par des développeurs professionnels. Bookmarkez cette page.
        </p>
      </header>

      {/* STATS */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { n: resources.length, label: "Ressources web", color: "text-blue-600" },
          { n: youtubeChannels.length, label: "Chaînes YouTube", color: "text-red-500" },
          { n: resources.filter(r => r.tag === "Gratuit").length, label: "100% Gratuites", color: "text-emerald-600" },
          { n: playlists.reduce((a, p) => a + p.videos.length, 0), label: "Vidéos suggérées", color: "text-violet-600" },
        ].map(({ n, label, color }) => (
          <div key={label} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm text-center">
            <p className={`text-3xl font-black ${color}`}>{n}</p>
            <p className="text-slate-500 text-sm mt-1">{label}</p>
          </div>
        ))}
      </section>

      {/* ── SECTION YOUTUBE ── */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2">
            <YouTubeIcon size={24} />
            <h2 className="text-2xl font-black text-slate-900">Chaînes YouTube</h2>
          </div>
          <span className="text-[11px] font-bold bg-red-50 text-red-600 border border-red-100 px-2.5 py-1 rounded-full">
            {youtubeChannels.length} chaînes
          </span>
        </div>
        <p className="text-slate-500 text-[14px] mb-6 max-w-2xl">
          Les meilleures chaînes pour apprendre en vidéo — gratuitement. Deux sections : chaînes anglophones de référence et chaînes francophones.
        </p>

        {/* Anglophones */}
        <div className="mb-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
            <span className="text-base">🇬🇧</span> Chaînes anglophones
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {youtubeChannels.filter(c => c.lang === "🇬🇧").map((ch, i) => (
              <YoutubeCard key={i} ch={ch} />
            ))}
          </div>
        </div>

        {/* Francophones */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
            <span className="text-base">🇫🇷</span> Chaînes francophones
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {youtubeChannels.filter(c => c.lang === "🇫🇷").map((ch, i) => (
              <YoutubeCard key={i} ch={ch} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PLAYLISTS SUGGÉRÉES ── */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-black text-slate-900">Playlists suggérées</h2>
          <span className="text-[11px] font-bold bg-violet-50 text-violet-600 border border-violet-100 px-2.5 py-1 rounded-full">
            Parcours guidés
          </span>
        </div>
        <p className="text-slate-500 text-[14px] mb-6 max-w-2xl">
          Des séquences de vidéos ordonnées par niveau. Regarde-les dans l'ordre pour un apprentissage progressif et cohérent.
        </p>
        <PlaylistsSection />
      </section>

      {/* ── RESSOURCES WEB ── */}
      <section>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-black text-slate-900">Ressources & Outils</h2>
          <span className="text-[11px] font-bold bg-blue-50 text-blue-600 border border-blue-100 px-2.5 py-1 rounded-full">
            {resources.length} outils
          </span>
        </div>
        <p className="text-slate-500 text-[14px] mb-6 max-w-2xl">
          Sites, outils et références à garder en favoris. Filtrés et testés par des développeurs professionnels.
        </p>

        {/* FILTRES + RECHERCHE */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Rechercher un outil..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-5 py-4 bg-white border-2 border-slate-100 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all shadow-sm font-medium"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActivecat(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                  activecat === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-white text-slate-500 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                {cat}
                {cat !== "Toutes" && (
                  <span className={`ml-1.5 text-[10px] ${activecat === cat ? "text-blue-200" : "text-slate-400"}`}>
                    {resources.filter(r => r.cat === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* GRILLE */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/8 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {item.emoji}
                  </div>
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-full border flex-shrink-0 ${
                    item.tag === "Gratuit"
                      ? "bg-emerald-50 text-emerald-700 border-emerald-100"
                      : "bg-amber-50 text-amber-700 border-amber-100"
                  }`}>{item.tag}</span>
                </div>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">{item.cat}</span>
                <h3 className="text-base font-black text-slate-900 mb-2">{item.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-1">{item.desc}</p>
                <div className="mt-5 pt-4 border-t border-slate-50 flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-blue-600 transition-colors">
                  Visiter le site
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-4xl mb-4">🔍</p>
            <p className="font-bold text-slate-800 text-lg mb-2">Aucun résultat</p>
            <p className="text-slate-400 text-sm">Essayez un autre mot-clé ou une autre catégorie.</p>
            <button
              onClick={() => { setSearch(""); setActivecat("Toutes"); }}
              className="mt-6 px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </section>

      {/* AIDE & COMMUNAUTÉ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 bg-slate-900 rounded-3xl text-white">
          <h2 className="text-xl font-black mb-2">💬 Vous êtes bloqué ?</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            C'est normal. Chaque développeur est bloqué en permanence — la différence, c'est de savoir où chercher.
          </p>
          <div className="space-y-3">
            {[
              { step: "1", label: "Lisez le message d'erreur en entier", color: "text-blue-400" },
              { step: "2", label: "Cherchez sur Google avec les mots-clés exacts", color: "text-purple-400" },
              { step: "3", label: "Consultez MDN pour la propriété concernée", color: "text-emerald-400" },
              { step: "4", label: "Posez votre question sur Stack Overflow", color: "text-orange-400" },
            ].map(({ step, label, color }) => (
              <div key={step} className="flex items-center gap-3 text-sm">
                <span className={`font-black ${color} flex-shrink-0`}>{step}.</span>
                <span className="text-slate-300">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex flex-col gap-5">
          <h2 className="text-xl font-black text-slate-900">📬 Contacter le support</h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Si vous avez une question sur la formation, un bug dans les démos ou une suggestion d'amélioration, on est là.
          </p>
          <div className="space-y-3">
            <a
              href="mailto:support@votredomaine.com"
              className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
            >
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-bold text-slate-900 text-sm group-hover:text-blue-700">support@votredomaine.com</p>
                <p className="text-slate-400 text-xs">Réponse sous 24h</p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group"
            >
              <span className="text-2xl">💬</span>
              <div>
                <p className="font-bold text-slate-900 text-sm group-hover:text-blue-700">Rejoindre le Discord</p>
                <p className="text-slate-400 text-xs">Communauté active d'apprenants</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="bg-blue-600 p-10 rounded-[2.5rem] text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <p className="font-black text-2xl mb-3">Prêt à construire quelque chose de vrai ?</p>
          <p className="text-blue-100 text-sm mb-8 max-w-md mx-auto">
            Vous avez les outils, les connaissances et les ressources. Il ne manque plus qu'une chose : commencer.
          </p>
          <a
            href="https://code.visualstudio.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-black shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all"
          >
            Télécharger VS Code et commencer →
          </a>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-800/30 blur-[60px] rounded-full pointer-events-none" />
      </div>

    </div>
  );
}