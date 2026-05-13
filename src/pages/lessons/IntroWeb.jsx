import React from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoIntro = {
  html: `<div class="container">
  <h1>Apprendre le Web</h1>
  <p>Le HTML crée la structure, le CSS apporte le style.</p>
  <button>Commencer</button>
</div>`,
  css: `.container {
  padding: 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.1);
  text-align: center;
}
h1 { color: #2563eb; font-weight: 900; margin-bottom: 10px; }
p { color: #64748b; margin-bottom: 20px; }
button { 
  background: #2563eb; 
  color: white; 
  border: none; 
  padding: 12px 30px; 
  border-radius: 50px; 
  font-weight: bold;
  cursor: pointer;
}`,
  desc: "Basculez pour voir comment le CSS transforme un texte brut en interface moderne."
};

// ─── Petits composants réutilisables ────────────────────────────────────────

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 whitespace-nowrap">
        {text}
      </span>
      <span className="flex-1 h-px bg-slate-100" />
    </div>
  );
}

function Terminal() {
  return (
    <div className="bg-slate-900 rounded-2xl p-5 font-mono text-[13px] leading-loose shadow-inner">
      {/* Traffic lights */}
      <div className="flex gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-amber-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Bloc 1 */}
      <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-1">1 — Le navigateur fait une requête</p>
      <p>
        <span className="text-pink-400">Client</span>
        <span className="text-slate-400">.request</span>
        <span className="text-slate-600">(</span>
        <span className="text-emerald-400">"https://monsite.com"</span>
        <span className="text-slate-600">)</span>
      </p>
      <p className="text-slate-600 text-[12px]">// → Envoie une requête GET au serveur</p>

      {/* Bloc 2 */}
      <p className="text-slate-500 text-[11px] uppercase tracking-widest mt-3 mb-1">2 — Le serveur répond</p>
      <p>
        <span className="text-pink-400">Serveur</span>
        <span className="text-slate-400">.send</span>
        <span className="text-slate-600">{"({"}</span>
      </p>
      <p className="pl-4">
        <span className="text-violet-400">status</span>
        <span className="text-slate-600">: </span>
        <span className="text-orange-400">200</span>
        <span className="text-slate-600">,</span>
        <span className="text-slate-600 text-[12px]"> // OK</span>
      </p>
      <p className="pl-4">
        <span className="text-violet-400">file</span>
        <span className="text-slate-600">: </span>
        <span className="text-emerald-400">"index.html"</span>
      </p>
      <p><span className="text-slate-600">{"})"}  </span></p>

      {/* Bloc 3 */}
      <p className="text-slate-500 text-[11px] uppercase tracking-widest mt-3 mb-1">3 — Le navigateur affiche</p>
      <p>
        <span className="text-pink-400">Browser</span>
        <span className="text-slate-400">.render</span>
        <span className="text-slate-600">(</span>
        <span className="text-emerald-400">fichiers</span>
        <span className="text-slate-600">)</span>
        <span className="text-slate-600 text-[12px]"> // ✓ Page visible</span>
      </p>
    </div>
  );
}

function UrlJourney() {
  const steps = [
    { num: '01', title: 'Tu tapes l\'URL', desc: 'Tu entres une adresse dans la barre de navigation de ton navigateur.', code: 'https://google.com' },
    { num: '02', title: 'DNS résout l\'adresse', desc: 'Le DNS traduit le nom de domaine en adresse IP réelle du serveur.', code: '142.250.74.46' },
    { num: '03', title: 'Requête HTTP', desc: 'Le navigateur demande les fichiers au serveur via le protocole HTTP(S).', code: 'GET /index.html' },
    { num: '04', title: 'Rendu visuel', desc: 'Le navigateur parse le HTML, charge CSS & JS et affiche la page.', code: '200 OK ✓' },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
      {steps.map((s) => (
        <div key={s.num} className="p-4 bg-white">
          <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md mb-2">{s.num}</span>
          <p className="font-bold text-[13px] text-slate-800 mb-1">{s.title}</p>
          <p className="text-[12px] text-slate-500 leading-relaxed mb-2">{s.desc}</p>
          <code className="text-[11px] text-violet-600 bg-violet-50 px-2 py-0.5 rounded">{s.code}</code>
        </div>
      ))}
    </div>
  );
}

function TrioCards() {
  const cards = [
    {
      label: 'Langage 1',
      name: 'HTML',
      full: 'HyperText Markup Language',
      detail: 'Définit le contenu et la structure : titres, paragraphes, images, liens, formulaires. C\'est le squelette de la page.',
      role: 'Structure',
      bg: 'bg-orange-50 border-orange-100',
      labelColor: 'text-orange-600',
      nameColor: 'text-orange-800',
      bodyColor: 'text-orange-900/70',
      badgeBg: 'bg-orange-100 text-orange-800',
    },
    {
      label: 'Langage 2',
      name: 'CSS',
      full: 'Cascading Style Sheets',
      detail: 'Contrôle l\'apparence : couleurs, typographie, espacements, mise en page, animations. Sans CSS, tout est texte brut.',
      role: 'Apparence',
      bg: 'bg-blue-50 border-blue-100',
      labelColor: 'text-blue-600',
      nameColor: 'text-blue-900',
      bodyColor: 'text-blue-900/70',
      badgeBg: 'bg-blue-100 text-blue-900',
    },
    {
      label: 'Langage 3',
      name: 'JavaScript',
      full: 'Langage de programmation',
      detail: 'Ajoute l\'interactivité : gère les clics, les formulaires dynamiques, les appels API, les animations complexes. C\'est le cerveau.',
      role: 'Interactivité',
      bg: 'bg-yellow-50 border-yellow-100',
      labelColor: 'text-yellow-600',
      nameColor: 'text-yellow-800',
      bodyColor: 'text-yellow-900/70',
      badgeBg: 'bg-yellow-100 text-yellow-800',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cards.map((c) => (
        <div key={c.name} className={`rounded-2xl border p-5 ${c.bg}`}>
          <p className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${c.labelColor}`}>{c.label}</p>
          <p className={`text-3xl font-black mb-0.5 ${c.nameColor}`}>{c.name}</p>
          <p className={`text-[12px] italic mb-3 ${c.bodyColor}`}>{c.full}</p>
          <p className={`text-[13px] leading-relaxed ${c.bodyColor}`}>{c.detail}</p>
          <span className={`inline-block mt-3 text-[11px] font-bold px-3 py-1 rounded-full ${c.badgeBg}`}>{c.role}</span>
        </div>
      ))}
    </div>
  );
}

function CodeCompare() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* HTML pane */}
      <div className="rounded-2xl overflow-hidden">
        <div className="bg-slate-800 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          📄 HTML seul — sans style
        </div>
        <pre className="bg-slate-800 text-[13px] font-mono leading-7 p-4 overflow-x-auto">
          <span className="text-pink-400">{'<div>'}</span>{'\n'}
          {'  '}<span className="text-pink-400">{'<h1>'}</span><span className="text-slate-300">Apprendre le Web</span><span className="text-pink-400">{'</h1>'}</span>{'\n'}
          {'  '}<span className="text-pink-400">{'<p>'}</span><span className="text-slate-300">Structure + Style = Magie</span><span className="text-pink-400">{'</p>'}</span>{'\n'}
          {'  '}<span className="text-pink-400">{'<button>'}</span><span className="text-slate-300">Commencer</span><span className="text-pink-400">{'</button>'}</span>{'\n'}
          <span className="text-pink-400">{'</div>'}</span>{'\n\n'}
          <span className="text-slate-600">{'// Résultat : texte noir brut,'}</span>{'\n'}
          <span className="text-slate-600">{'// aucune mise en forme.'}</span>
        </pre>
      </div>

      {/* CSS pane */}
      <div className="rounded-2xl overflow-hidden">
        <div className="bg-slate-900 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-violet-400">
          🎨 + CSS — avec style
        </div>
        <pre className="bg-slate-900 text-[13px] font-mono leading-7 p-4 overflow-x-auto">
          <span className="text-pink-400">div</span> <span className="text-slate-500">{'{'}</span>{'\n'}
          {'  '}<span className="text-violet-400">padding</span><span className="text-slate-500">: </span><span className="text-orange-400">40</span><span className="text-pink-400">px</span><span className="text-slate-500">;</span>{'\n'}
          {'  '}<span className="text-violet-400">background</span><span className="text-slate-500">: </span><span className="text-emerald-400">#ffffff</span><span className="text-slate-500">;</span>{'\n'}
          {'  '}<span className="text-violet-400">border-radius</span><span className="text-slate-500">: </span><span className="text-orange-400">24</span><span className="text-pink-400">px</span><span className="text-slate-500">;</span>{'\n'}
          {'  '}<span className="text-violet-400">box-shadow</span><span className="text-slate-500">: </span><span className="text-emerald-400">0 20px 50px rgba(0,0,0,.1)</span><span className="text-slate-500">;</span>{'\n'}
          <span className="text-slate-500">{'}'}</span>{'\n'}
          <span className="text-pink-400">button</span> <span className="text-slate-500">{'{'}</span>{'\n'}
          {'  '}<span className="text-violet-400">background</span><span className="text-slate-500">: </span><span className="text-emerald-400">#2563eb</span><span className="text-slate-500">;</span>{'\n'}
          {'  '}<span className="text-violet-400">color</span><span className="text-slate-500">: </span><span className="text-emerald-400">#fff</span><span className="text-slate-500">;</span>{'\n'}
          {'  '}<span className="text-violet-400">border-radius</span><span className="text-slate-500">: </span><span className="text-orange-400">50</span><span className="text-pink-400">px</span><span className="text-slate-500">;</span>{'\n'}
          <span className="text-slate-500">{'}'}</span>
        </pre>
      </div>
    </div>
  );
}

function MemoGrid() {
  const memos = [
    { icon: '🌐', title: 'Le Web ≠ Internet', text: "Internet est le réseau physique (câbles, serveurs). Le Web est un service qui utilise ce réseau. Il existe aussi l'email, FTP, etc." },
    { icon: '🔒', title: 'HTTP vs HTTPS', text: 'Le S de HTTPS signifie Secure. Les données sont chiffrées. Les navigateurs affichent une alerte sur les sites HTTP non sécurisés.' },
    { icon: '📁', title: 'Un site = des fichiers', text: 'Concrètement : index.html, style.css, script.js et des images. Rien de magique — juste des fichiers texte bien organisés.' },
    { icon: '⚡', title: 'Le navigateur est un interprète', text: 'Chrome, Firefox, Safari lisent des fichiers texte et les transforment en interface visuelle. Ce sont tes principaux outils de test.' },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {memos.map((m) => (
        <div key={m.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-5">
          <div className="text-xl mb-2">{m.icon}</div>
          <p className="font-bold text-[14px] text-slate-800 mb-1">{m.title}</p>
          <p className="text-[13px] text-slate-500 leading-relaxed">{m.text}</p>
        </div>
      ))}
    </div>
  );
}

// ─── Composant principal ─────────────────────────────────────────────────────

export default function IntroWeb() {
  return (
    <div className="flex flex-col gap-12 animate-fadeIn">

      {/* ENTÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-[11px] uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600" />
          Chapitre 1 — Fondations
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Comprendre le <span className="text-blue-600">Web</span>
        </h1>
        <p className="text-slate-500 text-lg mt-3 leading-relaxed max-w-xl">
          Avant d'écrire une seule ligne de code, il faut comprendre comment fonctionne
          le Web. Derrière chaque site se cache un mécanisme simple mais puissant.
        </p>
        {/* Barre de progression */}
        <div className="flex items-center gap-1.5 mt-5">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i} className={`h-1 flex-1 rounded-full ${i === 0 ? 'bg-blue-600' : 'bg-slate-200'}`} />
          ))}
          <span className="text-[11px] text-slate-400 ml-2 font-medium">1 / 10</span>
        </div>
      </header>

      {/* SECTION 1 : CLIENT-SERVEUR */}
      <section>
        <SectionLabel text="Concept fondamental" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white p-7 rounded-3xl border border-slate-100 shadow-sm">
          <div>
            <h2 className="text-2xl font-bold mb-4">Comment fonctionne un site ?</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Un site web, c'est simplement un ensemble de <strong>fichiers texte</strong> hébergés
              sur un ordinateur très puissant disponible 24h/24 : un <strong>Serveur</strong>.
            </p>
            <p className="text-slate-600 leading-relaxed mb-3">
              Quand tu tapes une adresse dans ton navigateur, celui-ci — le <strong>Client</strong> —
              envoie une demande au serveur. Le serveur répond en envoyant les fichiers. Le navigateur
              les lit et les transforme en page visuelle.
            </p>
            {/* Analogie */}
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-2xl p-4 mt-2">
              <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-1">Analogie</p>
              <p className="text-[13px] text-blue-900 leading-relaxed">
                C'est comme commander une pizza 🍕. Toi = le <strong>Client</strong>.
                Le restaurant = le <strong>Serveur</strong>. La commande = la <strong>Requête HTTP</strong>.
                La pizza livrée = la <strong>Réponse</strong> avec les fichiers HTML/CSS.
              </p>
            </div>
          </div>
          <Terminal />
        </div>
      </section>

      {/* SECTION 2 : VOYAGE D'UNE URL */}
      <section>
        <SectionLabel text="En détail" />
        <h2 className="text-2xl font-bold mb-5">Le voyage d'une URL en 4 étapes</h2>
        <UrlJourney />
      </section>

      {/* SECTION 3 : LE TRIO */}
      <section>
        <SectionLabel text="Les 3 langages du Web" />
        <h2 className="text-2xl font-bold mb-2">HTML, CSS & JavaScript</h2>
        <p className="text-slate-500 mb-6 max-w-xl">
          Chaque page web repose sur trois langages complémentaires. Pense à une maison :
          le HTML est les murs, le CSS est la décoration, et le JavaScript est l'électricité.
        </p>
        <TrioCards />
      </section>

      {/* SECTION 4 : COMPARAISON CODE */}
      <section>
        <SectionLabel text="Mise en pratique" />
        <h2 className="text-2xl font-bold mb-2">HTML brut vs HTML + CSS</h2>
        <p className="text-slate-500 mb-5">
          Le même contenu, deux résultats totalement différents. C'est toute la puissance du CSS.
        </p>
        <CodeCompare />
      </section>

      {/* SECTION 5 : DÉMO INTERACTIVE */}
      <section>
        <SectionLabel text="Démo interactive" />
        <h2 className="text-2xl font-bold mb-2">Vois-le en direct</h2>
        <p className="text-slate-500 mb-6">
          Bascule entre le HTML brut et le résultat stylisé pour comprendre visuellement
          ce que le CSS apporte au même contenu.
        </p>
        <InteractiveDemo demo={demoIntro} />
      </section>

      {/* SECTION 6 : MÉMOS */}
      <section>
        <SectionLabel text="À retenir absolument" />
        <MemoGrid />
      </section>

      {/* FOOTER NAV */}
      <footer className="mt-4 py-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm font-medium">
          Prêt à installer tes outils de développement ?
        </p>
        <Link
          to="/lesson/setup"
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Installation →
        </Link>
      </footer>

    </div>
  );
}