import React from 'react';
import { Link } from 'react-router-dom';

export default function Bonus() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      {/* EN-TÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Extras
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Cadeaux <span className="text-blue-600">& Bonus</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          Des ressources, outils et conseils pour aller encore plus loin après cette formation.
        </p>
      </header>

      {/* RACCOURCIS VS CODE */}
      <section className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-2 italic text-slate-800">⌨️ Raccourcis VS Code</h2>
        <p className="text-slate-500 text-sm mb-8">Ces raccourcis multiplient votre vitesse de développement. Apprenez-en 2 par jour.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { cat: "Navigation", shortcuts: [
              { key: "CTRL + P", desc: "Ouvrir un fichier rapidement" },
              { key: "CTRL + G", desc: "Aller à la ligne N" },
              { key: "CTRL + TAB", desc: "Passer d'un fichier à l'autre" },
              { key: "CTRL + B", desc: "Afficher / masquer la sidebar" },
            ]},
            { cat: "Édition", shortcuts: [
              { key: "ALT + ⬆/⬇", desc: "Déplacer une ligne de code" },
              { key: "SHIFT + ALT + ⬇", desc: "Dupliquer la ligne" },
              { key: "CTRL + D", desc: "Sélectionner le mot suivant identique" },
              { key: "CTRL + /", desc: "Commenter / décommenter" },
            ]},
            { cat: "Productivité", shortcuts: [
              { key: "CTRL + Space", desc: "Forcer l'autocomplétion" },
              { key: "ALT + Z", desc: "Retour à la ligne automatique" },
              { key: "CTRL + `", desc: "Ouvrir le terminal intégré" },
              { key: "CTRL + SHIFT + P", desc: "Palette de commandes" },
            ]},
            { cat: "Sélection multi-curseurs", shortcuts: [
              { key: "CTRL + SHIFT + L", desc: "Sélectionner toutes les occurrences" },
              { key: "ALT + CLIC", desc: "Ajouter un curseur manuellement" },
              { key: "CTRL + U", desc: "Annuler le dernier curseur ajouté" },
              { key: "ECHAP", desc: "Revenir à un seul curseur" },
            ]},
          ].map(({ cat, shortcuts }) => (
            <div key={cat} className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-100 bg-slate-100/60">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest">{cat}</p>
              </div>
              <div className="divide-y divide-slate-100">
                {shortcuts.map(({ key, desc }) => (
                  <div key={key} className="flex justify-between items-center px-5 py-3">
                    <span className="text-sm text-slate-600">{desc}</span>
                    <kbd className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-black shadow-sm text-slate-700 flex-shrink-0 ml-4">{key}</kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESSOURCES INDISPENSABLES */}
      <section className="flex flex-col gap-5">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">🔧 Outils & Ressources Indispensables</h2>
          <p className="text-slate-500 text-sm">Les outils utilisés par les développeurs professionnels au quotidien.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              cat: "Design & Couleurs",
              color: "blue",
              tools: [
                { name: "coolors.co", desc: "Générateur de palettes de couleurs harmonieuses. Appuyez sur espace pour en créer une.", tag: "Gratuit" },
                { name: "colorhunt.co", desc: "Palettes tendance créées par la communauté. Idéal pour trouver l'inspiration.", tag: "Gratuit" },
                { name: "haikei.app", desc: "Générateur de SVG (vagues, blobs, gradients) pour vos fonds de page.", tag: "Gratuit" },
                { name: "figma.com", desc: "L'outil de design de référence. Concevez vos maquettes avant de coder.", tag: "Gratuit / Payant" },
              ]
            },
            {
              cat: "Typographie",
              color: "purple",
              tools: [
                { name: "fonts.google.com", desc: "Des centaines de polices gratuites à intégrer en une ligne de CSS.", tag: "Gratuit" },
                { name: "fontpair.co", desc: "Paires de polices qui fonctionnent bien ensemble. Plus jamais de mauvais combo.", tag: "Gratuit" },
                { name: "typescale.com", desc: "Calculez une échelle typographique harmonieuse basée sur des ratios mathématiques.", tag: "Gratuit" },
                { name: "fontsinuse.com", desc: "Voyez quelles polices utilisent les sites que vous admirez.", tag: "Gratuit" },
              ]
            },
            {
              cat: "CSS Helpers",
              color: "emerald",
              tools: [
                { name: "cubic-bezier.com", desc: "Créez visuellement vos courbes d'animation CSS custom.", tag: "Gratuit" },
                { name: "cssgradient.io", desc: "Générateur de dégradés avec prévisualisation en temps réel.", tag: "Gratuit" },
                { name: "css-tricks.com", desc: "La référence absolue pour les articles CSS. Le guide Flexbox y est légendaire.", tag: "Gratuit" },
                { name: "bennettfeely.com/clippy", desc: "Générateur de clip-path CSS pour des formes personnalisées.", tag: "Gratuit" },
              ]
            },
            {
              cat: "Icônes & Images",
              color: "orange",
              tools: [
                { name: "lucide.dev", desc: "Bibliothèque d'icônes SVG modernes, cohérentes et open-source.", tag: "Gratuit" },
                { name: "heroicons.com", desc: "Les icônes de l'équipe Tailwind. Deux styles : outline et solid.", tag: "Gratuit" },
                { name: "unsplash.com", desc: "Photos professionnelles en haute résolution, libres de droits.", tag: "Gratuit" },
                { name: "squoosh.app", desc: "Compressez vos images directement dans le navigateur avant de les intégrer.", tag: "Gratuit" },
              ]
            },
          ].map(({ cat, color, tools }) => (
            <div key={cat} className={`bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden`}>
              <div className={`px-7 py-4 bg-${color}-50 border-b border-${color}-100`}>
                <p className={`font-black text-${color}-700 text-sm`}>{cat}</p>
              </div>
              <div className="divide-y divide-slate-50">
                {tools.map(({ name, desc, tag }) => (
                  <div key={name} className="px-7 py-4 flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-bold text-slate-900 text-sm">{name}</p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-${color}-50 text-${color}-600 border border-${color}-100 flex-shrink-0`}>{tag}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SNIPPETS CSS À GARDER */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
        <h2 className="text-2xl font-bold mb-2 text-blue-400">📋 Snippets CSS à toujours avoir</h2>
        <p className="text-slate-400 text-sm mb-8">Ces blocs de code sont copiés-collés dans presque chaque projet professionnel.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "Reset universel",
              desc: "À mettre en tout premier dans votre CSS.",
              code: `*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 16px;\n  scroll-behavior: smooth;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n  display: block;\n}`,
            },
            {
              title: "Centrage parfait",
              desc: "Les 3 techniques de centrage les plus utilisées.",
              code: `/* Flexbox (recommandé) */\n.center-flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n/* Grid */\n.center-grid {\n  display: grid;\n  place-items: center;\n}\n\n/* Absolu */\n.center-absolute {\n  position: absolute;\n  top: 50%; left: 50%;\n  transform: translate(-50%, -50%);\n}`,
            },
            {
              title: "Variables CSS (tokens)",
              desc: "Centralisez vos couleurs et espacements.",
              code: `:root {\n  --color-primary: #3b82f6;\n  --color-text: #0f172a;\n  --color-muted: #64748b;\n  --color-bg: #f8fafc;\n\n  --radius-sm: 8px;\n  --radius-md: 16px;\n  --radius-lg: 24px;\n\n  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);\n  --shadow-lg: 0 20px 40px rgba(0,0,0,0.08);\n}`,
            },
            {
              title: "Truncature de texte",
              desc: "Coupez le texte qui déborde avec des '...'",
              code: `/* Une seule ligne */\n.truncate {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/* Plusieurs lignes (ici 3) */\n.line-clamp-3 {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}`,
            },
            {
              title: "Overlay sur image",
              desc: "Texte lisible sur n'importe quelle photo.",
              code: `.card-image {\n  position: relative;\n  overflow: hidden;\n}\n\n.card-image::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    to bottom,\n    transparent 30%,\n    rgba(0,0,0,0.75) 100%\n  );\n}\n\n.card-image .text {\n  position: relative;\n  z-index: 1;\n}`,
            },
            {
              title: "Scrollbar personnalisée",
              desc: "Stylisez la barre de défilement (Chrome/Edge).",
              code: `::-webkit-scrollbar {\n  width: 8px;\n}\n\n::-webkit-scrollbar-track {\n  background: #f1f5f9;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #cbd5e1;\n  border-radius: 50px;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: #94a3b8;\n}`,
            },
          ].map(({ title, desc, code }) => (
            <div key={title} className="bg-white/5 rounded-2xl border border-white/8 overflow-hidden">
              <div className="px-5 py-4 border-b border-white/8">
                <p className="font-bold text-white text-sm">{title}</p>
                <p className="text-slate-500 text-xs mt-0.5">{desc}</p>
              </div>
              <pre className="font-mono text-xs text-emerald-400 p-5 leading-relaxed overflow-x-auto">{code}</pre>
            </div>
          ))}
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-slate-900 p-8 md:p-12 rounded-[3rem] text-white overflow-hidden relative">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2 text-blue-400">🗺️ Roadmap : Et après ?</h2>
          <p className="text-slate-400 text-sm mb-10 max-w-xl">Vous avez les bases solides. Voici les étapes logiques pour devenir développeur front-end professionnel.</p>
          <div className="space-y-6">
            {[
              {
                n: "1",
                color: "bg-blue-600",
                title: "JavaScript (JS)",
                sub: "3 à 6 mois",
                desc: "L'étape incontournable. JS apporte la logique et l'interactivité au web. Apprenez les variables, fonctions, événements et manipulation du DOM.",
                tags: ["Variables & fonctions", "DOM manipulation", "Événements", "Fetch API", "ES6+"],
              },
              {
                n: "2",
                color: "bg-purple-600",
                title: "Tailwind CSS",
                sub: "2 à 4 semaines",
                desc: "Le framework CSS le plus populaire de 2026. Vous connaissez déjà le CSS — Tailwind l'accélère avec des classes utilitaires. Ce site est entièrement construit avec Tailwind.",
                tags: ["Classes utilitaires", "Responsive prefixes", "Dark mode", "Customisation", "Components"],
              },
              {
                n: "3",
                color: "bg-emerald-600",
                title: "React.js",
                sub: "2 à 4 mois",
                desc: "La bibliothèque JavaScript la plus demandée sur le marché. Créez des interfaces composées de blocs réutilisables. Ce que vous apprenez ici est codé en React.",
                tags: ["Composants", "Props & State", "Hooks", "useEffect", "Router"],
              },
              {
                n: "4",
                color: "bg-orange-500",
                title: "Next.js",
                sub: "1 à 2 mois",
                desc: "Le framework React pour la production. Gestion des routes, SEO, performances et déploiement simplifié. Utilisé par des milliers de startups.",
                tags: ["SSR / SSG", "App Router", "API Routes", "Vercel deploy", "Metadata SEO"],
              },
              {
                n: "5",
                color: "bg-pink-600",
                title: "Git & GitHub",
                sub: "1 à 2 semaines",
                desc: "Apprenez à versionner votre code et à collaborer. C'est obligatoire pour travailler en équipe ou postuler à un emploi.",
                tags: ["git init / commit", "Branches", "Push & Pull", "GitHub Pages", "Portfolio public"],
              },
            ].map(({ n, color, title, sub, desc, tags }) => (
              <div key={n} className="flex gap-5">
                <div className={`flex-shrink-0 w-12 h-12 ${color} rounded-full flex items-center justify-center font-black text-lg`}>{n}</div>
                <div className="flex-1 pb-6 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h4 className="font-black text-lg text-white">{title}</h4>
                    <span className="text-xs font-bold px-2 py-0.5 bg-white/8 rounded-full text-slate-400 border border-white/8">{sub}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(t => (
                      <span key={t} className="text-[11px] font-bold px-2.5 py-1 bg-white/5 border border-white/8 rounded-full text-slate-400">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/15 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/15 blur-[80px] rounded-full -ml-32 -mb-32 pointer-events-none"></div>
      </section>

      {/* CONSEILS DE PRO */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">💡 Conseils de développeurs seniors</h2>
        <p className="text-slate-500 text-sm mb-8">Ce que les pros auraient aimé savoir au début de leur carrière.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "🔁", title: "Construisez des projets réels", desc: "Pas de tutoriels à l'infini. Après chaque apprentissage, faites un vrai projet — un portfolio, un clone de site, une app. C'est en construisant qu'on apprend vraiment." },
            { icon: "🔍", title: "Apprenez à lire les erreurs", desc: "Une erreur n'est pas un échec, c'est une information. Lisez toujours le message d'erreur complet avant de chercher sur Google. Vous deviendrez autonome bien plus vite." },
            { icon: "📁", title: "Publiez sur GitHub dès aujourd'hui", desc: "Même un projet imparfait vaut mieux que rien. GitHub est votre CV de développeur. Un recruteur qui voit 50 commits hebdomadaires, ça impressionne plus qu'un diplôme." },
            { icon: "🎯", title: "La profondeur avant la largeur", desc: "Maîtrisez HTML/CSS/JS parfaitement avant de passer à React. Les bases solides rendent tout le reste 10x plus simple. Résistez à la tentation de sauter des étapes." },
            { icon: "🤝", title: "La communauté est votre atout", desc: "Discord, Twitter/X, LinkedIn, forums. Posez des questions, aidez les autres, montrez votre travail. Le réseau ouvre des portes que la compétence seule ne peut pas ouvrir." },
            { icon: "🧘", title: "La régularité > l'intensité", desc: "30 minutes par jour, 7 jours sur 7, bat toujours 7 heures le dimanche. La constance crée les automatismes. Un an de pratique régulière et vous serez méconnaissable." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex gap-4">
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <div>
                <p className="font-black text-slate-900 text-sm mb-1">{title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CITATION */}
      <div className="p-10 md:p-14 bg-blue-50 rounded-[2.5rem] border border-blue-100 text-center relative overflow-hidden">
        <div className="relative z-10">
          <span className="text-6xl text-blue-200 font-black leading-none block mb-4">"</span>
          <p className="text-blue-900 font-bold text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto italic mb-6">
            Le meilleur moment pour commencer à coder était il y a 10 ans. Le deuxième meilleur moment, c'est <span className="text-blue-600">AUJOURD'HUI.</span>
          </p>
          <p className="text-blue-400 text-sm font-bold uppercase tracking-widest">— Chaque développeur qui a commencé tard</p>
        </div>
      </div>

      {/* RETOUR AU DÉBUT */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-slate-900 rounded-3xl text-white">
        <div>
          <p className="font-black text-xl mb-1">Vous voulez tout revoir ?</p>
          <p className="text-slate-400 text-sm">Recommencer la formation vous donnera un regard nouveau sur chaque leçon.</p>
        </div>
        <Link
          to="/lesson/intro"
          className="flex-shrink-0 bg-blue-600 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-blue-900/40 hover:bg-blue-500 transition-all hover:-translate-y-1 active:scale-95 whitespace-nowrap"
        >
          ← Reprendre depuis le début
        </Link>
      </div>
    </div>
  );
}