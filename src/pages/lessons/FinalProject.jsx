import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoNavbar = {
  html: `<nav class="navbar">
  <a class="logo" href="#">⚡ Spark</a>
  <ul class="nav-links">
    <li><a href="#">Fonctionnalités</a></li>
    <li><a href="#">Tarifs</a></li>
    <li><a href="#">À propos</a></li>
  </ul>
  <div class="nav-actions">
    <a class="btn-ghost" href="#">Connexion</a>
    <a class="btn-solid" href="#">Essai gratuit →</a>
  </div>
</nav>`,
  css: `.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: #0f172a;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  gap: 24px;
}
.logo {
  font-weight: 900;
  font-size: 20px;
  color: white;
  text-decoration: none;
  letter-spacing: -0.5px;
  flex-shrink: 0;
}
.nav-links {
  display: flex;
  list-style: none;
  gap: 32px;
  margin: 0; padding: 0;
}
.nav-links a {
  color: #64748b;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-links a:hover { color: white; }
.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}
.btn-ghost {
  color: #94a3b8;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  transition: color 0.2s;
}
.btn-ghost:hover { color: white; }
.btn-solid {
  background: #3b82f6;
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 10px;
  transition: all 0.2s ease;
}
.btn-solid:hover { background: #2563eb; transform: translateY(-1px); }`,
  desc: "Section 1/5 — Navbar : justify-content: space-between, flex-shrink: 0 pour éviter que le logo se réduise."
};

const demoHero = {
  html: `<section class="hero">
  <div class="hero-inner">
    <div class="badge">🚀 Nouveau — Version 4.0 disponible</div>
    <h1>Lancez votre<br/><span class="accent">produit digital</span><br/>en 7 jours</h1>
    <p>Spark est la plateforme tout-en-un pour créer, lancer et faire croître votre activité en ligne — sans écrire une ligne de code.</p>
    <div class="hero-cta">
      <a class="btn-primary" href="#">Commencer maintenant</a>
      <a class="btn-text" href="#">▶ Voir la démo</a>
    </div>
    <p class="social-proof">Rejoint par <strong>12 000+</strong> entrepreneurs · Noté ⭐ 4.9/5</p>
  </div>
</section>`,
  css: `.hero {
  background: #0f172a;
  padding: 80px 32px;
  position: relative;
  overflow: hidden;
  text-align: center;
}
.hero::before {
  content: '';
  position: absolute;
  width: 600px; height: 600px;
  background: radial-gradient(circle,
    rgba(59,130,246,0.12) 0%,
    transparent 65%);
  top: -200px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}
.hero-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
.badge {
  display: inline-block;
  background: rgba(59,130,246,0.1);
  border: 1px solid rgba(59,130,246,0.25);
  color: #93c5fd;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 16px;
  border-radius: 50px;
  margin-bottom: 32px;
  letter-spacing: 0.3px;
}
h1 {
  font-size: clamp(32px, 6vw, 64px);
  font-weight: 900;
  color: white;
  line-height: 1.05;
  letter-spacing: -1px;
  margin-bottom: 24px;
}
.accent {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  color: #64748b;
  font-size: 17px;
  line-height: 1.7;
  margin-bottom: 40px;
}
.hero-cta { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
.btn-primary {
  background: #3b82f6;
  color: white;
  text-decoration: none;
  padding: 16px 32px;
  border-radius: 14px;
  font-weight: 800;
  font-size: 15px;
  transition: all 0.2s ease;
  box-shadow: 0 0 30px rgba(59,130,246,0.3);
}
.btn-primary:hover { background: #2563eb; transform: translateY(-2px); box-shadow: 0 0 40px rgba(59,130,246,0.5); }
.btn-text {
  color: #94a3b8;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  padding: 16px 20px;
  border-radius: 14px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.2s ease;
}
.btn-text:hover { color: white; border-color: rgba(255,255,255,0.2); }
.social-proof { color: #475569; font-size: 13px; }
.social-proof strong { color: #94a3b8; }`,
  desc: "Section 2/5 — Hero : halo avec ::before, titre avec gradient-text clip, clamp() pour la taille responsive."
};

const demoFeatures = {
  html: `<section class="features">
  <div class="section-header">
    <span class="eyebrow">Fonctionnalités</span>
    <h2>Tout ce dont vous avez besoin</h2>
    <p>Des outils pensés pour aller vite, sans compromis sur la qualité.</p>
  </div>
  <div class="grid">
    <div class="feature-card">
      <div class="icon">⚡</div>
      <h3>Ultra rapide</h3>
      <p>Déployez votre site en moins de 30 secondes avec notre infrastructure mondiale.</p>
    </div>
    <div class="feature-card">
      <div class="icon">🎨</div>
      <h3>Design pro</h3>
      <p>Des centaines de templates conçus par des designers de chez Figma et Notion.</p>
    </div>
    <div class="feature-card">
      <div class="icon">📊</div>
      <h3>Analytiques</h3>
      <p>Suivez vos visiteurs, conversions et revenus en temps réel depuis un tableau de bord.</p>
    </div>
    <div class="feature-card">
      <div class="icon">🔒</div>
      <h3>Sécurisé</h3>
      <p>SSL gratuit, sauvegardes automatiques et protection DDoS inclus sur tous les plans.</p>
    </div>
    <div class="feature-card">
      <div class="icon">🌍</div>
      <h3>Multilingue</h3>
      <p>Traduisez votre site en un clic dans plus de 40 langues grâce à l'IA intégrée.</p>
    </div>
    <div class="feature-card">
      <div class="icon">🔗</div>
      <h3>Intégrations</h3>
      <p>Connectez Stripe, Mailchimp, Notion, Slack et 200+ outils en quelques secondes.</p>
    </div>
  </div>
</section>`,
  css: `.features {
  background: #f8fafc;
  padding: 80px 32px;
  border-radius: 0;
}
.section-header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 56px;
}
.eyebrow {
  display: inline-block;
  color: #3b82f6;
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}
.section-header h2 {
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 900;
  color: #0f172a;
  letter-spacing: -0.5px;
  margin-bottom: 14px;
}
.section-header p {
  color: #64748b;
  font-size: 16px;
  line-height: 1.7;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}
.feature-card {
  background: white;
  padding: 28px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.07);
  border-color: #bfdbfe;
}
.icon {
  font-size: 28px;
  margin-bottom: 14px;
}
.feature-card h3 {
  font-size: 16px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 8px;
}
.feature-card p {
  color: #64748b;
  font-size: 13px;
  line-height: 1.65;
}`,
  desc: "Section 3/5 — Features : grille auto-fit/minmax sans media query, hover avec translateY et box-shadow."
};

const demoPricing = {
  html: `<section class="pricing">
  <div class="section-header">
    <span class="eyebrow">Tarifs</span>
    <h2>Simple et transparent</h2>
    <p>Aucun frais caché. Annulez à tout moment.</p>
  </div>
  <div class="plans">
    <div class="plan">
      <p class="plan-name">Starter</p>
      <div class="plan-price">0€<span>/mois</span></div>
      <ul>
        <li>✓ 1 site web</li>
        <li>✓ 5 pages max</li>
        <li>✓ Domaine Spark</li>
        <li class="off">✗ Domaine custom</li>
      </ul>
      <a class="btn-plan outline" href="#">Commencer</a>
    </div>
    <div class="plan featured">
      <div class="plan-badge">Le plus populaire</div>
      <p class="plan-name">Pro</p>
      <div class="plan-price">29€<span>/mois</span></div>
      <ul>
        <li>✓ Sites illimités</li>
        <li>✓ Pages illimitées</li>
        <li>✓ Domaine custom</li>
        <li>✓ Support prioritaire</li>
      </ul>
      <a class="btn-plan solid" href="#">Choisir Pro</a>
    </div>
    <div class="plan">
      <p class="plan-name">Business</p>
      <div class="plan-price">79€<span>/mois</span></div>
      <ul>
        <li>✓ Tout dans Pro</li>
        <li>✓ Analytiques avancées</li>
        <li>✓ Équipe jusqu'à 10</li>
        <li>✓ SLA 99.9%</li>
      </ul>
      <a class="btn-plan outline" href="#">Choisir Business</a>
    </div>
  </div>
</section>`,
  css: `.pricing {
  background: #0f172a;
  padding: 80px 32px;
  text-align: center;
}
.section-header { max-width: 480px; margin: 0 auto 56px; }
.eyebrow { display: inline-block; color: #3b82f6; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; }
.section-header h2 { font-size: clamp(26px, 4vw, 42px); font-weight: 900; color: white; letter-spacing: -0.5px; margin-bottom: 12px; }
.section-header p { color: #64748b; font-size: 15px; }

.plans {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
}
.plan {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 32px 28px;
  width: 220px;
  text-align: left;
  transition: transform 0.3s ease;
}
.plan:hover { transform: translateY(-4px); }
.plan.featured {
  background: white;
  border-color: white;
  position: relative;
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);
}
.plan.featured:hover { transform: scale(1.05) translateY(-4px); }
.plan-badge {
  position: absolute;
  top: -14px;
  left: 50%; transform: translateX(-50%);
  background: #3b82f6;
  color: white;
  font-size: 10px;
  font-weight: 800;
  padding: 5px 14px;
  border-radius: 50px;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.plan-name { font-size: 13px; font-weight: 700; color: #64748b; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px; }
.plan.featured .plan-name { color: #94a3b8; }
.plan-price { font-size: 40px; font-weight: 900; color: white; margin-bottom: 24px; line-height: 1; }
.plan.featured .plan-price { color: #0f172a; }
.plan-price span { font-size: 14px; font-weight: 400; color: #64748b; }
ul { list-style: none; padding: 0; margin: 0 0 28px; }
li { color: #94a3b8; font-size: 13px; padding: 5px 0; }
.plan.featured li { color: #475569; }
li.off { color: #334155; text-decoration: line-through; }
.btn-plan {
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: 800;
  font-size: 14px;
  padding: 13px;
  border-radius: 12px;
  transition: all 0.2s ease;
}
.btn-plan.solid { background: #3b82f6; color: white; }
.btn-plan.solid:hover { background: #2563eb; transform: translateY(-2px); }
.btn-plan.outline { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: #94a3b8; }
.btn-plan.outline:hover { border-color: rgba(255,255,255,0.4); color: white; }`,
  desc: "Section 4/5 — Pricing : plan featured avec scale(1.05) et position:absolute pour le badge."
};

const demoFooter = {
  html: `<footer class="footer">
  <div class="footer-top">
    <div class="footer-brand">
      <a class="logo" href="#">⚡ Spark</a>
      <p>La plateforme pour lancer votre produit digital en 7 jours.</p>
      <div class="socials">
        <a href="#">𝕏</a>
        <a href="#">in</a>
        <a href="#">gh</a>
      </div>
    </div>
    <div class="footer-col">
      <p class="col-title">Produit</p>
      <a href="#">Fonctionnalités</a>
      <a href="#">Tarifs</a>
      <a href="#">Changelog</a>
      <a href="#">Roadmap</a>
    </div>
    <div class="footer-col">
      <p class="col-title">Ressources</p>
      <a href="#">Documentation</a>
      <a href="#">Tutoriels</a>
      <a href="#">Blog</a>
      <a href="#">Status</a>
    </div>
    <div class="footer-col">
      <p class="col-title">Légal</p>
      <a href="#">Confidentialité</a>
      <a href="#">CGU</a>
      <a href="#">Cookies</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Spark Inc. Tous droits réservés.</p>
    <p>Fait avec ❤️ et beaucoup de ☕</p>
  </div>
</footer>`,
  css: `.footer {
  background: #020617;
  padding: 60px 32px 32px;
  color: white;
}
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.logo {
  font-weight: 900;
  font-size: 20px;
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 12px;
}
.footer-brand p {
  color: #475569;
  font-size: 13px;
  line-height: 1.65;
  margin-bottom: 20px;
}
.socials { display: flex; gap: 10px; }
.socials a {
  width: 34px; height: 34px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: #64748b;
  text-decoration: none;
  font-size: 13px;
  font-weight: bold;
  transition: all 0.2s ease;
}
.socials a:hover { background: rgba(59,130,246,0.15); color: #93c5fd; border-color: rgba(59,130,246,0.3); }
.col-title {
  font-size: 11px;
  font-weight: 800;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 16px;
}
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-col a {
  color: #475569;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.2s ease;
}
.footer-col a:hover { color: #94a3b8; }
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  color: #334155;
  font-size: 12px;
}`,
  desc: "Section 5/5 — Footer : grid 4 colonnes, icônes sociales en flexbox, flex-direction:column pour les liens."
};

export default function FinalProject() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      {/* EN-TÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Chapitre 10
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Projet <span className="text-blue-600">Final</span>
        </h1>
        <p className="mt-4 text-slate-500 text-lg max-w-2xl">
          Vous allez construire une <strong>landing page SaaS complète</strong>, section par section. Chaque démo est une brique indépendante — analysez, modifiez, appropriez-vous le code.
        </p>
      </header>

      {/* VUE D'ENSEMBLE */}
      <section className="bg-slate-900 rounded-[3rem] p-8 md:p-14 text-white relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-blue-400 text-xs font-black uppercase tracking-widest mb-3">Ce que vous allez créer</p>
          <h2 className="text-3xl font-black mb-4">Landing Page SaaS — "Spark"</h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-xl">
            Un produit fictif, un design professionnel. Vous allez assembler 5 sections qui utilisent toutes les compétences acquises dans cette formation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { n: "01", label: "Navbar", techs: "Flexbox · space-between" },
              { n: "02", label: "Hero", techs: "::before · gradient-text" },
              { n: "03", label: "Features", techs: "Grid · auto-fit" },
              { n: "04", label: "Pricing", techs: "position · scale()" },
              { n: "05", label: "Footer", techs: "Grid · flex-col" },
            ].map(({ n, label, techs }) => (
              <div key={n} className="p-4 bg-white/5 rounded-2xl border border-white/8 text-center">
                <p className="text-blue-400 font-black text-lg">{n}</p>
                <p className="font-black text-sm text-white mt-1">{label}</p>
                <p className="text-slate-500 text-[10px] mt-1 leading-relaxed">{techs}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full pointer-events-none"></div>
      </section>

      {/* SECTION 1 : NAVBAR */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">1</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Navbar — La barre de navigation</h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">Trois zones bien délimitées : logo à gauche, liens au centre, actions à droite. <code className="text-blue-600">justify-content: space-between</code> fait tout le travail.</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-2">
          {["justify-content: space-between", "align-items: center", "flex-shrink: 0", "gap", "transition :hover", "white-space: nowrap"].map(t => (
            <span key={t} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-mono font-bold border border-blue-100">{t}</span>
          ))}
        </div>
        <InteractiveDemo demo={demoNavbar} />
      </section>

      {/* SECTION 2 : HERO */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">2</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Hero — La section d'accroche</h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">Le cœur du site. Halo lumineux avec <code className="text-blue-600">::before</code>, titre dégradé avec <code className="text-blue-600">-webkit-background-clip: text</code>, et taille responsive avec <code className="text-blue-600">clamp()</code>.</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-2">
          {["::before pseudo-element", "radial-gradient halo", "gradient-text clip", "clamp() responsive", "box-shadow glow", "flex justify-center"].map(t => (
            <span key={t} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-mono font-bold border border-purple-100">{t}</span>
          ))}
        </div>
        <InteractiveDemo demo={demoHero} />
      </section>

      {/* SECTION 3 : FEATURES */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black text-lg flex items-center justify-center flex-shrink-0">3</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Features — La grille de fonctionnalités</h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">La grille responsive sans une seule media query grâce à <code className="text-blue-600">repeat(auto-fit, minmax(220px, 1fr))</code>. Elle s'adapte seule à tous les écrans.</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-2">
          {["grid auto-fit minmax", "section-header max-width", "eyebrow text-transform", "hover translateY + shadow", "border-color transition", "clamp() pour h2"].map(t => (
            <span key={t} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-mono font-bold border border-emerald-100">{t}</span>
          ))}
        </div>
        <InteractiveDemo demo={demoFeatures} />
      </section>

      {/* SECTION 4 : PRICING */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-orange-500 text-white font-black text-lg flex items-center justify-center flex-shrink-0">4</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Pricing — Les plans tarifaires</h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">Le plan "Pro" est mis en avant avec <code className="text-blue-600">transform: scale(1.05)</code> et un <code className="text-blue-600">box-shadow</code> plus intense. Le badge flottant utilise <code className="text-blue-600">position: absolute + translateX(-50%)</code>.</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-2">
          {["transform: scale(1.05)", "position absolute badge", "translateX(-50%)", "flex flex-wrap", "deux variantes .solid .outline", "line-through désactivé"].map(t => (
            <span key={t} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-mono font-bold border border-orange-100">{t}</span>
          ))}
        </div>
        <InteractiveDemo demo={demoPricing} />
      </section>

      {/* SECTION 5 : FOOTER */}
      <section className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-slate-700 text-white font-black text-lg flex items-center justify-center flex-shrink-0">5</div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Footer — Le pied de page</h2>
            <p className="text-slate-500 text-sm mt-1 max-w-xl">Une grille 4 colonnes avec <code className="text-blue-600">grid-template-columns: 2fr 1fr 1fr 1fr</code> pour que la colonne brand soit plus large. Les liens sont en <code className="text-blue-600">flex-direction: column</code>.</p>
          </div>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-wrap gap-2">
          {["grid 2fr 1fr 1fr 1fr", "flex-direction: column", "border-bottom séparateur", "icon socials hover", "justify-content space-between", "letter-spacing eyebrow"].map(t => (
            <span key={t} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-mono font-bold border border-slate-200">{t}</span>
          ))}
        </div>
        <InteractiveDemo demo={demoFooter} />
      </section>

      {/* CHECKLIST */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-2 text-slate-900">Checklist Professionnelle</h2>
        <p className="text-slate-500 text-sm mb-8">Avant de considérer votre projet terminé, vérifiez chaque point.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            { cat: "HTML", items: [
              "La balise <meta viewport> est présente dans le <head>",
              "Toutes les images ont un attribut alt descriptif",
              "La hiérarchie des titres est logique (h1 → h2 → h3)",
              "Les liens ont des textes descriptifs (pas 'cliquez ici')",
            ]},
            { cat: "CSS", items: [
              "box-sizing: border-box appliqué sur *",
              "Aucune largeur fixe en px sur les conteneurs",
              "Les effets hover sont animés avec transition",
              "Les couleurs ont un contraste suffisant (ratio ≥ 4.5:1)",
            ]},
            { cat: "Responsive", items: [
              "Le site est lisible sur un écran de 375px de large",
              "Les boutons font au moins 44px de hauteur (tactile)",
              "Le texte body fait au minimum 16px",
              "Pas de scroll horizontal sur mobile",
            ]},
            { cat: "Qualité", items: [
              "Le code est indenté et les noms de classes sont explicites",
              "Les images sont optimisées (< 200ko si possible)",
              "Le site charge en moins de 3 secondes",
              "Testé sur Chrome, Firefox et Safari",
            ]},
          ].map(({ cat, items }) => (
            <div key={cat} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <p className="font-black text-slate-800 text-sm mb-4 uppercase tracking-widest text-xs">{cat}</p>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span className="w-5 h-5 rounded-full border-2 border-emerald-300 bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-emerald-500 text-[10px] font-black">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CE QUE VOUS AVEZ APPRIS */}
      <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white">
        <h2 className="text-2xl font-bold mb-2 text-blue-400">Ce que vous maîtrisez maintenant</h2>
        <p className="text-slate-400 text-sm mb-8">En complétant cette formation, vous avez acquis les bases d'un développeur front-end junior.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "🏗️", label: "HTML sémantique", desc: "Structure et balises" },
            { icon: "🎨", label: "CSS fondamentaux", desc: "Sélecteurs, Box Model" },
            { icon: "↔️", label: "Flexbox & Grid", desc: "Mise en page moderne" },
            { icon: "📱", label: "Responsive Design", desc: "Mobile first & media queries" },
            { icon: "✨", label: "Animations CSS", desc: "Transitions & keyframes" },
            { icon: "🧩", label: "Composants UI", desc: "Nav, cards, forms, hero" },
            { icon: "🔍", label: "Décomposition", desc: "Lire et reproduire un design" },
            { icon: "🚀", label: "Landing Page", desc: "Projet complet de A à Z" },
          ].map(({ icon, label, desc }) => (
            <div key={label} className="p-4 bg-white/5 rounded-2xl border border-white/8 text-center">
              <div className="text-2xl mb-2">{icon}</div>
              <p className="font-black text-sm text-white">{label}</p>
              <p className="text-slate-500 text-xs mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <div className="bg-blue-600 p-10 md:p-16 rounded-[3rem] text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-4">Formation terminée</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">🎓 Félicitations !</h2>
          <p className="text-blue-100 mb-10 max-w-lg mx-auto leading-relaxed">
            Vous avez parcouru 10 chapitres et construit une vraie landing page. La prochaine étape ? Les bonus pour aller encore plus loin.
          </p>
          <Link
            to="/lesson/bonus"
            className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all inline-block text-lg"
          >
            Accéder aux Bonus 🎁
          </Link>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-800/30 blur-[80px] rounded-full pointer-events-none"></div>
      </div>
    </div>
  );
}