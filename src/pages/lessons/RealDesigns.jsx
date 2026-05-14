import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoPricing = {
  html: `<div class="pricing-card">
  <div class="badge">Populaire</div>
  <h3>Plan Pro</h3>
  <div class="price">29€<span>/mois</span></div>
  <ul>
    <li>✓ Projets illimités</li>
    <li>✓ Support 24/7</li>
    <li>✓ Accès à vie</li>
  </ul>
  <button>Choisir ce plan</button>
</div>`,
  css: `.pricing-card {
  background: white;
  padding: 40px;
  border-radius: 30px;
  text-align: center;
  position: relative;
  border: 2px solid #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.1);
  max-width: 300px;
  margin: 0 auto;
}
.badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
}
h3 { color: #0f172a; font-size: 20px; font-weight: 900; margin-bottom: 4px; }
.price { font-size: 40px; font-weight: 900; color: #0f172a; margin: 16px 0; }
.price span { font-size: 14px; color: #64748b; font-weight: 400; }
ul { list-style: none; padding: 0; margin-bottom: 30px; color: #64748b; font-size: 14px; }
li { margin-bottom: 10px; }
button {
  width: 100%;
  background: #1e293b;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover { background: #3b82f6; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(59,130,246,0.2); }`,
  desc: "Carte de prix : badge positionné en absolute, layout en flex colonne, effet hover sur le bouton."
};

const demoNavbar = {
  html: `<nav class="navbar">
  <a class="logo" href="#">🚀 DevCo</a>
  <ul class="liens">
    <li><a href="#">Accueil</a></li>
    <li><a href="#">Produit</a></li>
    <li><a href="#">Tarifs</a></li>
  </ul>
  <a class="cta" href="#">Démarrer →</a>
</nav>`,
  css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0f172a;
  padding: 16px 28px;
  border-radius: 20px;
  gap: 20px;
}
.logo {
  font-weight: 900;
  font-size: 18px;
  color: white;
  text-decoration: none;
  white-space: nowrap;
}
.liens {
  display: flex;
  list-style: none;
  gap: 24px;
  padding: 0;
  margin: 0;
}
.liens a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
  font-weight: 500;
}
.liens a:hover { color: white; }
.cta {
  background: #3b82f6;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  transition: all 0.2s ease;
}
.cta:hover { background: #2563eb; transform: translateY(-2px); }`,
  desc: "Barre de navigation : justify-content: space-between pour espacer logo, liens et bouton CTA."
};

const demoCard = {
  html: `<div class="card">
  <div class="card-image">
    <span class="tag">Design</span>
  </div>
  <div class="card-body">
    <p class="meta">12 min de lecture · 8 jan 2026</p>
    <h3>Maîtriser le CSS Grid en 2026</h3>
    <p class="excerpt">Découvrez les techniques avancées de Grid pour créer des mises en page...</p>
    <div class="card-footer">
      <div class="avatar">JD</div>
      <div>
        <p class="author-name">Jean Dupont</p>
        <p class="author-role">Développeur Front</p>
      </div>
    </div>
  </div>
</div>`,
  css: `.card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  max-width: 340px;
  margin: 0 auto;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
.card-image {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  height: 160px;
  display: flex;
  align-items: flex-end;
  padding: 16px;
}
.tag {
  background: rgba(255,255,255,0.2);
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 50px;
  border: 1px solid rgba(255,255,255,0.3);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.card-body { padding: 24px; }
.meta { color: #94a3b8; font-size: 12px; margin-bottom: 8px; }
h3 { color: #0f172a; font-weight: 900; font-size: 18px; margin-bottom: 10px; line-height: 1.3; }
.excerpt { color: #64748b; font-size: 13px; line-height: 1.6; margin-bottom: 20px; }
.card-footer { display: flex; align-items: center; gap: 12px; }
.avatar {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: white; font-size: 12px; font-weight: bold;
  flex-shrink: 0;
}
.author-name { font-size: 13px; font-weight: bold; color: #0f172a; }
.author-role  { font-size: 11px; color: #94a3b8; }`,
  desc: "Carte blog : overflow:hidden pour les coins arrondis sur l'image, hover avec transform et box-shadow."
};

const demoForm = {
  html: `<form class="formulaire">
  <h2>Contactez-nous</h2>
  <div class="champ">
    <label for="nom">Nom complet</label>
    <input id="nom" type="text" placeholder="Jean Dupont" />
  </div>
  <div class="champ">
    <label for="email">Adresse email</label>
    <input id="email" type="email" placeholder="jean@example.com" />
  </div>
  <div class="champ">
    <label for="msg">Message</label>
    <textarea id="msg" rows="3" placeholder="Votre message..."></textarea>
  </div>
  <button type="submit">Envoyer le message →</button>
</form>`,
  css: `.formulaire {
  background: white;
  padding: 36px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  max-width: 380px;
  margin: 0 auto;
}
h2 {
  font-size: 22px;
  font-weight: 900;
  color: #0f172a;
  margin-bottom: 24px;
}
.champ {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 18px;
}
label {
  font-size: 13px;
  font-weight: 700;
  color: #374151;
}
input, textarea {
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
  resize: vertical;
}
input:focus, textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
input::placeholder, textarea::placeholder { color: #cbd5e1; }
button {
  width: 100%;
  background: #1e293b;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 4px;
}
button:hover { background: #3b82f6; transform: translateY(-2px); }`,
  desc: "Formulaire complet : état focus sur les inputs, layout flex-direction: column pour chaque champ."
};

const demoHero = {
  html: `<section class="hero">
  <div class="hero-badge">✨ Nouveau · Version 3.0</div>
  <h1 class="hero-titre">Construisez des<br/><span class="gradient-text">interfaces rapides</span></h1>
  <p class="hero-desc">La plateforme tout-en-un pour les développeurs qui veulent aller vite sans sacrifier la qualité.</p>
  <div class="hero-actions">
    <a class="btn-primary" href="#">Démarrer gratuitement</a>
    <a class="btn-secondary" href="#">Voir la démo →</a>
  </div>
</section>`,
  css: `.hero {
  background: #0f172a;
  padding: 60px 40px;
  border-radius: 28px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  width: 400px; height: 400px;
  background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%);
  top: -100px; left: 50%; transform: translateX(-50%);
  pointer-events: none;
}
.hero-badge {
  display: inline-block;
  background: rgba(59,130,246,0.15);
  color: #93c5fd;
  border: 1px solid rgba(59,130,246,0.3);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 28px;
}
.hero-titre {
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 900;
  color: white;
  line-height: 1.15;
  margin-bottom: 20px;
}
.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-desc {
  color: #64748b;
  font-size: 15px;
  line-height: 1.7;
  max-width: 440px;
  margin: 0 auto 36px;
}
.hero-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  background: #3b82f6;
  color: white;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.2s ease;
}
.btn-primary:hover { background: #2563eb; transform: translateY(-2px); box-shadow: 0 10px 25px rgba(59,130,246,0.3); }
.btn-secondary {
  background: rgba(255,255,255,0.05);
  color: #94a3b8;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 14px;
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.2s ease;
}
.btn-secondary:hover { color: white; border-color: rgba(255,255,255,0.3); }`,
  desc: "Section Hero : ::before pour le halo lumineux, gradient-text pour le titre, deux styles de boutons CTA."
};

export default function RealDesigns() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      {/* EN-TÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 9
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Composants <span className="text-blue-600">Réels</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          Fini la théorie — on code de vrais composants qu'on retrouve partout sur le web. Analysez, comprenez, reproduisez.
        </p>
      </header>

      {/* L'ŒIL DU DÉVELOPPEUR */}
      <section className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200">
        <h2 className="text-2xl font-bold mb-2 italic text-slate-800">L'œil du développeur</h2>
        <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl text-sm">
          Un bon développeur ne voit pas une "image", il voit des <strong>boîtes imbriquées</strong>. Avant de toucher au code, apprenez à décomposer n'importe quelle maquette en 3 étapes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-blue-600 rounded-2xl text-white">
            <span className="text-blue-300 text-xs font-black uppercase tracking-widest">Étape 1</span>
            <h3 className="font-black text-lg mt-2 mb-2">Le Conteneur</h3>
            <p className="text-blue-100 text-sm leading-relaxed">Identifiez la boîte qui englobe tout. C'est votre point de départ. Quelle est sa largeur, son fond, ses coins ?</p>
            <div className="mt-4 p-3 bg-white/10 rounded-xl font-mono text-xs text-blue-200">width, padding, border-radius, background</div>
          </div>
          <div className="p-6 bg-slate-900 rounded-2xl text-white">
            <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Étape 2</span>
            <h3 className="font-black text-lg mt-2 mb-2">La Structure</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Comment les éléments internes sont-ils organisés ? En colonne, en ligne, en grille ?</p>
            <div className="mt-4 p-3 bg-white/5 rounded-xl font-mono text-xs text-emerald-400">display, flex-direction, gap, grid</div>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <span className="text-slate-400 text-xs font-black uppercase tracking-widest">Étape 3</span>
            <h3 className="font-black text-lg mt-2 mb-2 text-slate-900">Les Détails</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Finalisez avec les micro-détails : ombres, typographie, couleurs, effets hover.</p>
            <div className="mt-4 p-3 bg-slate-50 rounded-xl font-mono text-xs text-blue-600 border border-slate-100">box-shadow, font-weight, transition</div>
          </div>
        </div>

        {/* Méthode de décomposition visuelle */}
        <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
          <p className="font-bold text-slate-800 text-sm mb-4">Exemple de décomposition — Carte produit</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs text-center font-mono">
            {[
              { label: ".card", color: "border-blue-400 bg-blue-50 text-blue-700", desc: "Conteneur principal" },
              { label: ".card-image", color: "border-purple-400 bg-purple-50 text-purple-700", desc: "Zone image / visuel" },
              { label: ".card-body", color: "border-emerald-400 bg-emerald-50 text-emerald-700", desc: "Zone texte" },
              { label: ".card-footer", color: "border-orange-400 bg-orange-50 text-orange-700", desc: "Auteur / action" },
            ].map(({ label, color, desc }) => (
              <div key={label} className={`p-3 rounded-xl border-2 ${color}`}>
                <p className="font-black">{label}</p>
                <p className="opacity-70 mt-1 text-[10px]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 justify-center">
            {['→', '→', '→'].map((a, i) => <span key={i} className="text-slate-300 font-bold">{a}</span>)}
          </div>
          <p className="text-center text-slate-400 text-xs mt-1">Du général au particulier — toujours dans cet ordre</p>
        </div>
      </section>

      {/* COMPOSANT 1 : NAVBAR */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">1</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">La Barre de Navigation</h2>
            <p className="text-slate-500 text-sm mt-1">Le composant le plus commun du web. La clé : <code className="text-blue-600">justify-content: space-between</code> pour espacer logo, liens et CTA.</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Techniques utilisées</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["display: flex", "justify-content: space-between", "align-items: center", "gap", ":hover transition", "white-space: nowrap"].map(t => (
              <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-mono font-bold border border-blue-100">{t}</span>
            ))}
          </div>
        </div>
        <InteractiveDemo demo={demoNavbar} />
      </section>

      {/* COMPOSANT 2 : CARTE PRICING */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">2</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">La Carte de Prix</h2>
            <p className="text-slate-500 text-sm mt-1">Le badge flottant est l'élément le plus instructif : <code className="text-blue-600">position: absolute</code> + <code className="text-blue-600">transform: translateX(-50%)</code> pour le centrer.</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Techniques utilisées</p>
          <div className="flex flex-wrap gap-2">
            {["position: relative/absolute", "transform: translateX(-50%)", "box-shadow", "border-radius", "transition :hover", "text-transform: uppercase"].map(t => (
              <span key={t} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-mono font-bold border border-purple-100">{t}</span>
            ))}
          </div>
        </div>
        <InteractiveDemo demo={demoPricing} />
      </section>

      {/* COMPOSANT 3 : CARTE BLOG */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">3</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">La Carte Blog / Article</h2>
            <p className="text-slate-500 text-sm mt-1">L'astuce clé : <code className="text-blue-600">overflow: hidden</code> sur la carte parent pour que l'image respecte les <code className="text-blue-600">border-radius</code>.</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Techniques utilisées</p>
          <div className="flex flex-wrap gap-2">
            {["overflow: hidden", "linear-gradient", "flex + align-items", "hover translateY + box-shadow", "border-radius: 50%", "line-height"].map(t => (
              <span key={t} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-mono font-bold border border-emerald-100">{t}</span>
            ))}
          </div>
        </div>
        <InteractiveDemo demo={demoCard} />
      </section>

      {/* COMPOSANT 4 : FORMULAIRE */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-black text-lg flex items-center justify-center flex-shrink-0">4</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Le Formulaire de Contact</h2>
            <p className="text-slate-500 text-sm mt-1">La pseudo-classe <code className="text-blue-600">:focus</code> + <code className="text-blue-600">box-shadow</code> crée l'anneau de focus bleu, signe d'accessibilité et de qualité.</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Techniques utilisées</p>
          <div className="flex flex-wrap gap-2">
            {[":focus pseudo-classe", "box-shadow pour le ring", "flex-direction: column", "outline: none", "transition border-color", "resize: vertical"].map(t => (
              <span key={t} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-mono font-bold border border-orange-100">{t}</span>
            ))}
          </div>
        </div>
        <InteractiveDemo demo={demoForm} />
      </section>

      {/* COMPOSANT 5 : HERO SECTION */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-black text-lg flex items-center justify-center flex-shrink-0">5</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">La Section Hero</h2>
            <p className="text-slate-500 text-sm mt-1">Le composant le plus impactant d'un site. Combine halo lumineux avec <code className="text-blue-600">::before</code>, texte dégradé, et deux variantes de boutons CTA.</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Techniques utilisées</p>
          <div className="flex flex-wrap gap-2">
            {["::before pseudo-element", "radial-gradient halo", "gradient-text clip", "clamp() responsive", "deux styles de CTA", "position: relative + overflow: hidden"].map(t => (
              <span key={t} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-mono font-bold border border-slate-200">{t}</span>
            ))}
          </div>
        </div>
        <InteractiveDemo demo={demoHero} />
      </section>

      {/* RÉCAPITULATIF DES PATTERNS */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
        <h2 className="text-2xl font-bold mb-2 text-blue-400">Les Patterns à Retenir</h2>
        <p className="text-slate-400 text-sm mb-8">Ces combinaisons de propriétés reviennent dans presque tous les composants.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              name: "Centrage absolu",
              code: "position: absolute;\ntop: 50%; left: 50%;\ntransform: translate(-50%, -50%);",
              desc: "Centre n'importe quel élément dans son parent positionné."
            },
            {
              name: "Centrage horizontal (badge)",
              code: "position: absolute;\nleft: 50%;\ntransform: translateX(-50%);",
              desc: "Badge ou label centré horizontalement sur le bord d'un élément."
            },
            {
              name: "Hover avec élévation",
              code: "transition: transform 0.3s ease,\n  box-shadow 0.3s ease;\n\n:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 20px 40px ...;\n}",
              desc: "Donne l'impression que la carte se soulève au survol."
            },
            {
              name: "Focus ring accessible",
              code: ":focus {\n  outline: none;\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px\n    rgba(59,130,246, 0.2);\n}",
              desc: "Remplace l'outline par défaut du navigateur par un effet plus élégant."
            },
            {
              name: "Overlay dégradé sur image",
              code: "background:\n  linear-gradient(\n    to bottom,\n    transparent,\n    rgba(0,0,0,0.7)\n  );",
              desc: "Assombrit le bas d'une image pour y placer du texte lisible."
            },
            {
              name: "Image de couverture",
              code: "overflow: hidden;\nborder-radius: 20px;\n\nimg {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n}",
              desc: "L'image remplit son conteneur sans se déformer, avec les coins arrondis respectés."
            },
          ].map(({ name, code, desc }) => (
            <div key={name} className="p-5 bg-white/5 rounded-2xl border border-white/10">
              <p className="font-bold text-blue-300 text-sm mb-2">{name}</p>
              <pre className="font-mono text-xs text-emerald-400 bg-white/5 p-3 rounded-xl leading-relaxed mb-3 overflow-x-auto">{code}</pre>
              <p className="text-slate-400 text-xs">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MINI-QUIZ */}
      <section className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">✅ Vérifiez vos acquis</h2>
        <p className="text-slate-500 text-sm mb-6">Ces questions portent sur l'analyse et la reproduction de composants réels.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { q: "Comment centrer horizontalement un badge positionné en absolute ?", a: "left: 50% + transform: translateX(-50%)" },
            { q: "Pourquoi mettre overflow: hidden sur une carte avec border-radius ?", a: "Pour que les images et contenus enfants respectent les coins arrondis du parent." },
            { q: "Comment créer un effet 'd'élévation' au survol d'une carte ?", a: "transition + :hover { transform: translateY(-6px); box-shadow: ... }" },
            { q: "Quelle pseudo-classe et quelle propriété créent un anneau de focus élégant ?", a: ":focus { outline: none; box-shadow: 0 0 0 3px rgba(59,130,246, 0.2); }" },
            { q: "Quelle est la première étape avant de coder un composant ?", a: "Décomposer visuellement en boîtes : conteneur → structure → détails." },
            { q: "Comment créer un pseudo-element halo lumineux derrière un titre ?", a: ".hero::before { position: absolute; background: radial-gradient(...); }" },
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
        <div className="text-slate-400 text-sm font-medium italic">Le moment de gloire approche...</div>
        <Link
          to="/lesson/final-project"
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Projet Final : Landing Page →
        </Link>
      </footer>
    </div>
  );
}