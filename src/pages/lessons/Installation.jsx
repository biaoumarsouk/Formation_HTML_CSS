import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── Icônes SVG officielles ──────────────────────────────────────────────────

function VSCodeIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="vsc-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
        <path fillRule="evenodd" clipRule="evenodd"
          d="M70.9 4.4L37.2 35.7 15.6 19.1 6 24.5v51l9.6 5.4 21.6-16.6L70.9 95.6l23.1-11V15.4L70.9 4.4zM74 74.4L45.7 50 74 25.6v48.8z"
          fill="white"
        />
      </mask>
      <g mask="url(#vsc-mask)">
        <path d="M93.9 15.4L70.8 4.4 37.1 35.7 15.5 19.1 6 24.5v51l9.5 5.4 21.6-16.6 33.8 31.2L94 84V15.4h-.1z" fill="#007ACC" />
        <path d="M70.9 4.4L37.2 35.7V64.3L70.9 95.6 94 84.6V15.4L70.9 4.4z" fill="#1B8FC8" />
        <path d="M74 74.4L45.7 50 74 25.6v48.8z" fill="#28B8F5" />
        <path d="M15.5 80.9L37.1 64.3V35.7L15.5 19.1 6 24.5v51l9.5 5.4z" fill="#0065A9" />
      </g>
    </svg>
  );
}

function ChromeIcon({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill="#fff" />
      {/* Outer ring */}
      <circle cx="50" cy="50" r="47" fill="none" stroke="#e0e0e0" strokeWidth="1" />
      {/* Red slice */}
      <path d="M50 50 L97 50 A47 47 0 0 0 73.5 9.5 Z" fill="#EA4335" />
      {/* Blue slice */}
      <path d="M50 50 L73.5 9.5 A47 47 0 0 0 26.5 9.5 Z" fill="#4285F4" />
      {/* Green slice */}
      <path d="M50 50 L26.5 9.5 A47 47 0 0 0 3 50 Z" fill="#34A853" />
      {/* Yellow slice */}
      <path d="M50 50 L3 50 A47 47 0 0 0 73.5 90.5 Z" fill="#FBBC05" />
      {/* Red slice 2 */}
      <path d="M50 50 L73.5 90.5 A47 47 0 0 0 97 50 Z" fill="#EA4335" />
      {/* Grey center line cover */}
      <circle cx="50" cy="50" r="18" fill="white" />
      {/* Blue center */}
      <circle cx="50" cy="50" r="15" fill="#4285F4" />
      <circle cx="50" cy="50" r="10" fill="white" />
    </svg>
  );
}

function LiveServerIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#FF6B35" />
      <path d="M8 16 L14 10 L14 13 L24 13 L24 19 L14 19 L14 22 Z" fill="white" />
    </svg>
  );
}

function PrettierIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#56B3B4" />
      <rect x="7" y="8" width="12" height="2.5" rx="1.25" fill="white" />
      <rect x="7" y="13" width="18" height="2.5" rx="1.25" fill="white" />
      <rect x="7" y="18" width="9" height="2.5" rx="1.25" fill="white" />
      <rect x="7" y="23" width="15" height="2.5" rx="1.25" fill="white" />
    </svg>
  );
}

function GitLensIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#C51A4A" />
      <circle cx="16" cy="10" r="3" fill="white" />
      <circle cx="10" cy="22" r="3" fill="white" />
      <circle cx="22" cy="22" r="3" fill="white" />
      <line x1="16" y1="13" x2="10" y2="19" stroke="white" strokeWidth="2" />
      <line x1="16" y1="13" x2="22" y2="19" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function MaterialIconIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="6" fill="#1565C0" />
      <path d="M6 24 L16 8 L26 24 Z" fill="#90CAF9" opacity="0.8" />
      <path d="M11 24 L16 15 L21 24 Z" fill="white" />
    </svg>
  );
}

// ─── Composant : Barre de progression ────────────────────────────────────────

function ProgressBar({ current, total }) {
  return (
    <div className="flex items-center gap-1.5 mt-5">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`h-1 flex-1 rounded-full ${i < current ? 'bg-blue-600' : 'bg-slate-200'}`} />
      ))}
      <span className="text-[11px] text-slate-400 ml-2 font-medium">{current} / {total}</span>
    </div>
  );
}

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 whitespace-nowrap">{text}</span>
      <span className="flex-1 h-px bg-slate-100" />
    </div>
  );
}

// ─── Composant : Simulation d'écran de téléchargement ────────────────────────

function VSCodeDownloadScreen() {
  return (
    <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
      {/* Barre de titre simulée */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#323233] border-b border-slate-700">
        <span className="w-3 h-3 rounded-full bg-red-500" />
        <span className="w-3 h-3 rounded-full bg-amber-500" />
        <span className="w-3 h-3 rounded-full bg-green-500" />
        <span className="flex-1 text-center text-[11px] text-slate-400 font-mono">code.visualstudio.com</span>
      </div>
      {/* Contenu simulé du site */}
      <div className="p-6 bg-[#1e1e1e]">
        <div className="flex items-center gap-4 mb-5">
          <VSCodeIcon size={40} />
          <div>
            <p className="text-white font-bold text-base">Visual Studio Code</p>
            <p className="text-slate-400 text-[12px]">Free. Built on open source. Runs everywhere.</p>
          </div>
        </div>
        {/* Boutons de download simulés */}
        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-blue-600 text-white text-[12px] font-bold px-4 py-2 rounded-lg">
            <span>⬇</span> Download for Windows
          </div>
          <div className="flex items-center gap-2 bg-[#2d2d2d] text-slate-300 text-[12px] px-3 py-2 rounded-lg border border-slate-600">
            macOS
          </div>
          <div className="flex items-center gap-2 bg-[#2d2d2d] text-slate-300 text-[12px] px-3 py-2 rounded-lg border border-slate-600">
            Linux
          </div>
        </div>
        <p className="text-slate-600 text-[11px] mt-3">Version 1.96 · By downloading and using Visual Studio Code, you agree to the license terms and privacy statement.</p>
      </div>
    </div>
  );
}

// ─── Composant : Étapes d'installation VS Code ───────────────────────────────

function InstallSteps() {
  const [active, setActive] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Télécharger l\'installeur',
      desc: 'Va sur code.visualstudio.com et clique sur le bouton bleu "Download for Windows" (ou ton système). Un fichier .exe sera téléchargé.',
      tip: 'Le fichier s\'appelle VSCodeSetup-x64-1.xx.x.exe',
      visual: (
        <div className="bg-slate-900 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <ChromeIcon size={16} />
            <div className="flex-1 bg-slate-700 rounded-md px-3 py-1 text-[11px] text-slate-300 font-mono">
              code.visualstudio.com
            </div>
          </div>
          <div className="flex items-center gap-3 bg-blue-600 text-white text-[12px] font-bold px-4 py-2 rounded-lg w-fit">
            <span>⬇</span> Download for Windows
          </div>
          <p className="text-slate-600 text-[11px] mt-3 font-mono">📥 VSCodeSetup-x64.exe (97 MB)</p>
        </div>
      ),
    },
    {
      num: '02',
      title: 'Lancer l\'installation',
      desc: 'Double-clique sur le fichier téléchargé. Accepte les termes. Sur l\'écran des options, coche impérativement "Add to PATH" et "Open with Code".',
      tip: '⚠️ "Add to PATH" est crucial pour utiliser VS Code depuis le terminal.',
      visual: (
        <div className="bg-slate-800 rounded-xl p-4 font-mono text-[12px]">
          <p className="text-slate-400 mb-3 text-[11px] uppercase tracking-widest">Options à cocher :</p>
          {[
            { checked: true, label: 'Create a desktop icon', color: 'text-emerald-400' },
            { checked: true, label: 'Add "Open with Code" action to file context menu', color: 'text-emerald-400' },
            { checked: true, label: 'Add "Open with Code" action to directory context menu', color: 'text-emerald-400' },
            { checked: true, label: 'Register Code as an editor for supported file types', color: 'text-emerald-400' },
            { checked: true, label: 'Add to PATH (important!)', color: 'text-yellow-400', important: true },
          ].map((opt, i) => (
            <div key={i} className={`flex items-start gap-2 py-1.5 ${opt.important ? 'bg-yellow-900/30 rounded px-2 -mx-2' : ''}`}>
              <span className={`mt-0.5 text-[14px] ${opt.color}`}>{opt.checked ? '☑' : '☐'}</span>
              <span className={`text-[12px] ${opt.important ? 'text-yellow-300 font-bold' : 'text-slate-300'}`}>{opt.label}</span>
              {opt.important && <span className="ml-auto text-[10px] bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">Obligatoire</span>}
            </div>
          ))}
        </div>
      ),
    },
    {
      num: '03',
      title: 'Premier lancement',
      desc: 'VS Code s\'ouvre sur l\'écran de bienvenue. Tu verras l\'interface en 5 zones : la barre d\'activité, l\'explorateur, l\'éditeur, le terminal et la barre de statut.',
      tip: 'Thème recommandé : One Dark Pro (plus lisible pour débuter)',
      visual: (
        <div className="bg-[#1e1e1e] rounded-xl overflow-hidden border border-slate-700 text-[11px] font-mono">
          {/* Title bar */}
          <div className="bg-[#323233] px-3 py-1.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-slate-500 ml-2">index.html — Visual Studio Code</span>
          </div>
          <div className="flex" style={{ height: 160 }}>
            {/* Activity bar */}
            <div className="bg-[#333333] w-10 flex flex-col items-center py-3 gap-4 text-slate-500">
              <span title="Explorer">📁</span>
              <span title="Search">🔍</span>
              <span title="Extensions">🧩</span>
            </div>
            {/* Sidebar */}
            <div className="bg-[#252526] w-28 px-2 py-2 border-r border-slate-700">
              <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-2">Explorer</p>
              <div className="text-slate-400 text-[11px] space-y-1">
                <p className="text-blue-400">📄 index.html</p>
                <p>🎨 style.css</p>
                <p>⚡ script.js</p>
              </div>
            </div>
            {/* Editor */}
            <div className="flex-1 bg-[#1e1e1e] px-4 py-3 overflow-hidden">
              <p><span className="text-pink-400">{'<!DOCTYPE'}</span> <span className="text-blue-400">html</span><span className="text-pink-400">{'>'}</span></p>
              <p><span className="text-pink-400">{'<html'}</span> <span className="text-sky-400">lang</span><span className="text-white">=</span><span className="text-emerald-400">"fr"</span><span className="text-pink-400">{'>'}</span></p>
              <p className="pl-4"><span className="text-pink-400">{'<head>'}</span></p>
              <p className="pl-8 text-slate-600">{'<!-- meta, title... -->'}</p>
              <p className="pl-4"><span className="text-pink-400">{'</head>'}</span></p>
              <p className="pl-4"><span className="text-pink-400">{'<body>'}</span></p>
              <p className="pl-8"><span className="text-pink-400">{'<h1>'}</span><span className="text-white">Mon site</span><span className="text-pink-400">{'</h1>'}</span></p>
              <p className="pl-4"><span className="text-pink-400">{'</body>'}</span></p>
            </div>
          </div>
          {/* Status bar */}
          <div className="bg-blue-700 px-3 py-0.5 flex items-center gap-4 text-[10px] text-blue-100">
            <span>main</span>
            <span>HTML</span>
            <span className="ml-auto">UTF-8</span>
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
      {/* Navigation des étapes */}
      <div className="flex flex-col gap-3 md:col-span-1">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`text-left p-4 rounded-2xl border transition-all ${
              active === i
                ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-200'
                : 'bg-white border-slate-100 hover:border-blue-200 hover:shadow-sm'
            }`}
          >
            <span className={`text-[11px] font-bold block mb-1 ${active === i ? 'text-blue-200' : 'text-blue-600'}`}>
              Étape {s.num}
            </span>
            <span className={`font-bold text-[13px] ${active === i ? 'text-white' : 'text-slate-800'}`}>
              {s.title}
            </span>
          </button>
        ))}
      </div>

      {/* Détail de l'étape active */}
      <div className="md:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
            Étape {steps[active].num}
          </span>
          <h3 className="font-bold text-slate-900">{steps[active].title}</h3>
        </div>
        {steps[active].visual}
        <p className="text-slate-600 text-[14px] leading-relaxed mt-4">{steps[active].desc}</p>
        {steps[active].tip && (
          <div className="flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl p-3 mt-3">
            <span className="text-amber-500 mt-0.5">💡</span>
            <p className="text-[13px] text-amber-800">{steps[active].tip}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Composant : Extensions ───────────────────────────────────────────────────

function ExtensionsSection() {
  const extensions = [
    {
      icon: <LiveServerIcon size={36} />,
      name: 'Live Server',
      author: 'Ritwick Dey',
      downloads: '50M+',
      rating: '★★★★★',
      shortcut: 'Alt+L Alt+O',
      desc: 'Lance un serveur local qui recharge automatiquement ta page à chaque sauvegarde. Indispensable pour voir tes modifications en temps réel sans rafraîchir manuellement.',
      howto: 'Clique droit sur index.html → "Open with Live Server"',
      badge: 'Indispensable',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      icon: <PrettierIcon size={36} />,
      name: 'Prettier',
      author: 'Prettier',
      downloads: '40M+',
      rating: '★★★★☆',
      shortcut: 'Shift+Alt+F',
      desc: 'Formate automatiquement ton code HTML, CSS et JS pour le rendre propre et lisible. Plus jamais d\'indentation irrégulière ou de code impossible à relire.',
      howto: 'Sauvegarde avec CTRL+S → formatage automatique',
      badge: 'Recommandé',
      badgeColor: 'bg-blue-100 text-blue-800',
    },
    {
      icon: <GitLensIcon size={36} />,
      name: 'GitLens',
      author: 'GitKraken',
      downloads: '25M+',
      rating: '★★★★★',
      shortcut: null,
      desc: 'Affiche qui a modifié chaque ligne de code et quand. Très utile quand tu travailles en équipe ou que tu veux comprendre l\'historique de ton projet.',
      howto: 'L\'extension s\'active automatiquement dans les projets Git',
      badge: 'Bonus',
      badgeColor: 'bg-violet-100 text-violet-800',
    },
    {
      icon: <MaterialIconIcon size={36} />,
      name: 'Material Icon Theme',
      author: 'Philipp Kief',
      downloads: '20M+',
      rating: '★★★★★',
      shortcut: null,
      desc: 'Remplace les icônes de fichiers par des icônes colorées adaptées à chaque langage. Ton explorateur de fichiers devient immédiatement plus lisible.',
      howto: 'Ctrl+Shift+P → "Material Icons: Activate Icon Theme"',
      badge: 'Confort',
      badgeColor: 'bg-orange-100 text-orange-800',
    },
  ];

  return (
    <div>
      {/* Comment installer — terminal simulé */}
      <div className="bg-slate-900 rounded-2xl p-5 mb-6 font-mono text-[13px]">
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-slate-500 text-[11px] ml-2">Comment ouvrir le panneau Extensions</span>
        </div>
        <div className="flex flex-wrap gap-6 text-[13px]">
          <div>
            <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-1">Raccourci clavier</p>
            <div className="flex items-center gap-1">
              <kbd className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-[12px] border border-slate-600">Ctrl</kbd>
              <span className="text-slate-500">+</span>
              <kbd className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-[12px] border border-slate-600">Shift</kbd>
              <span className="text-slate-500">+</span>
              <kbd className="bg-slate-700 text-slate-200 px-2 py-1 rounded text-[12px] border border-slate-600">X</kbd>
            </div>
          </div>
          <div>
            <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-1">Via le menu</p>
            <p className="text-slate-300 text-[12px]">View → Extensions</p>
          </div>
          <div>
            <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-1">Icône dans la barre</p>
            <p className="text-slate-300 text-[12px]">Clic sur 🧩 dans la barre latérale gauche</p>
          </div>
        </div>
      </div>

      {/* Grille d'extensions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {extensions.map((ext, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex-shrink-0">{ext.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <span className="font-bold text-slate-900">{ext.name}</span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${ext.badgeColor}`}>{ext.badge}</span>
                </div>
                <p className="text-[12px] text-slate-400">{ext.author} · {ext.downloads} téléchargements · {ext.rating}</p>
              </div>
            </div>
            <p className="text-[13px] text-slate-600 leading-relaxed mb-3">{ext.desc}</p>
            <div className="bg-slate-50 rounded-xl px-3 py-2">
              <p className="text-[11px] text-slate-500 mb-0.5 uppercase tracking-widest font-bold">Comment l'utiliser</p>
              <p className="text-[12px] text-slate-700 font-mono">{ext.howto}</p>
              {ext.shortcut && (
                <p className="text-[11px] text-blue-600 mt-1 font-bold">Raccourci : {ext.shortcut}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Composant : Raccourcis essentiels ───────────────────────────────────────

function ShortcutsTable() {
  const shortcuts = [
    { keys: ['Ctrl', 'S'], action: 'Sauvegarder le fichier', tip: 'À faire après chaque modification' },
    { keys: ['Ctrl', 'Z'], action: 'Annuler la dernière action', tip: 'Ton meilleur ami en cas d\'erreur' },
    { keys: ['Ctrl', '/'], action: 'Commenter / Décommenter', tip: 'Sélectionne plusieurs lignes d\'abord' },
    { keys: ['Alt', '↑/↓'], action: 'Déplacer une ligne', tip: 'Réorganise ton code sans copier-coller' },
    { keys: ['Ctrl', 'D'], action: 'Sélection multiple', tip: 'Sélectionne le mot suivant identique' },
    { keys: ['Ctrl', '`'], action: 'Ouvrir le terminal intégré', tip: 'Terminal directement dans VS Code' },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-slate-800 border-b border-slate-700">
        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">Raccourcis VS Code à connaître dès le début</p>
      </div>
      <div className="divide-y divide-slate-800">
        {shortcuts.map((s, i) => (
          <div key={i} className="flex items-center gap-4 px-5 py-3 hover:bg-slate-800/50 transition-colors">
            <div className="flex items-center gap-1 flex-shrink-0 min-w-[120px]">
              {s.keys.map((k, j) => (
                <React.Fragment key={j}>
                  <kbd className="bg-slate-700 text-slate-200 px-2 py-0.5 rounded text-[11px] border border-slate-600 font-mono">{k}</kbd>
                  {j < s.keys.length - 1 && <span className="text-slate-600 text-[11px]">+</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="flex-1">
              <p className="text-slate-200 text-[13px] font-medium">{s.action}</p>
              <p className="text-slate-500 text-[11px]">{s.tip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Composant principal ─────────────────────────────────────────────────────

export default function Installation() {
  return (
    <div className="flex flex-col gap-12 animate-fadeIn">

      {/* ENTÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-[11px] uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600" />
          Chapitre 2 — Fondations
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Installer ton <span className="text-blue-600">environnement</span>
        </h1>
        <p className="text-slate-500 text-lg mt-3 leading-relaxed max-w-xl">
          Un développeur sans bons outils, c'est un cuisinier sans couteaux. On va installer
          les deux incontournables : Chrome et VS Code.
        </p>
        <ProgressBar current={2} total={10} />
      </header>

      {/* BANNIÈRE */}
      <section className="bg-blue-600 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl font-bold mb-3">Pourquoi ces outils précisément ?</h2>
          <p className="text-blue-100 leading-relaxed mb-4">
            VS Code est utilisé par <strong className="text-white">73% des développeurs</strong> dans le monde (Stack Overflow Survey 2024).
            Chrome détient les DevTools les plus puissants pour déboguer ton CSS et HTML en direct.
            Ces deux outils sont <strong className="text-white">gratuits, open source et maintenus activement</strong>.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <VSCodeIcon size={20} />, label: 'VS Code — Éditeur' },
              { icon: <ChromeIcon size={20} />, label: 'Chrome — Navigateur' },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1.5 rounded-xl text-[13px] font-bold">
                {t.icon}
                {t.label}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-32 -mt-32 rounded-full pointer-events-none" />
      </section>

      {/* SECTION CHROME */}
      <section>
        <SectionLabel text="Outil 1" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-white p-7 rounded-3xl border border-slate-100 shadow-sm">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <ChromeIcon size={48} />
              <div>
                <h2 className="text-2xl font-bold">Google Chrome</h2>
                <p className="text-slate-500 text-[13px]">Navigateur recommandé pour les développeurs</p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-3">
              Chrome intègre les <strong>DevTools</strong> (outils de développement) accessibles via
              <kbd className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[12px] font-mono mx-1">F12</kbd> :
              inspecte n'importe quel élément, modifie le CSS en live, vois les erreurs JS, et analyse les performances.
            </p>
            <div className="space-y-2 mb-4">
              {[
                'Inspecteur d\'éléments HTML/CSS en temps réel',
                'Console JavaScript pour déboguer',
                'Onglet Network pour analyser les requêtes',
                'Mode responsive pour simuler mobile',
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] text-slate-700">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold flex-shrink-0">✓</span>
                  {f}
                </div>
              ))}
            </div>
            <a
              href="https://www.google.com/chrome/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-blue-600 transition"
            >
              <ChromeIcon size={18} /> Télécharger Chrome →
            </a>
          </div>
          {/* DevTools simulation */}
          <div className="bg-[#1e1e1e] rounded-2xl overflow-hidden border border-slate-700 text-[11px] font-mono">
            <div className="flex gap-1 px-3 py-2 bg-[#292929] border-b border-slate-700">
              {['Elements', 'Console', 'Network', 'Sources'].map((t, i) => (
                <span key={t} className={`px-3 py-1 rounded text-[11px] cursor-pointer ${i === 0 ? 'bg-[#1e1e1e] text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}>{t}</span>
              ))}
            </div>
            <div className="p-3">
              <p className="text-slate-500 mb-1">{`<body>`}</p>
              <p className="pl-3 text-pink-400">{`<div class="hero">`}</p>
              <p className="pl-6 text-pink-400">{`<h1 `}<span className="text-sky-400">class</span>=<span className="text-emerald-400">"title"</span>{`>`}</p>
              <p className="pl-9 text-slate-300">Mon premier site</p>
              <p className="pl-6 text-pink-400">{`</h1>`}</p>
              <p className="pl-3 text-pink-400">{`</div>`}</p>
              <p className="text-slate-500">{`</body>`}</p>
            </div>
            <div className="border-t border-slate-700 p-3 bg-[#252526]">
              <p className="text-slate-500 text-[10px] mb-2">STYLES (panel droit)</p>
              <p><span className="text-slate-400">.title</span> <span className="text-slate-600">{'{'}</span></p>
              <p className="pl-3"><span className="text-violet-400">color</span><span className="text-slate-600">: </span><span className="text-emerald-400 underline">#2563eb</span><span className="text-slate-600">;</span></p>
              <p className="pl-3"><span className="text-violet-400">font-size</span><span className="text-slate-600">: </span><span className="text-orange-400">2rem</span><span className="text-slate-600">;</span></p>
              <p><span className="text-slate-600">{'}'}</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION VS CODE */}
      <section>
        <SectionLabel text="Outil 2 — Étapes d'installation" />
        <div className="flex items-center gap-4 mb-6">
          <VSCodeIcon size={48} />
          <div>
            <h2 className="text-2xl font-bold">Visual Studio Code</h2>
            <p className="text-slate-500 text-[13px]">Utilisé par 73% des développeurs dans le monde</p>
          </div>
        </div>
        <div className="mb-6">
          <VSCodeDownloadScreen />
        </div>
        <InstallSteps />
      </section>

      {/* SECTION EXTENSIONS */}
      <section>
        <SectionLabel text="Extensions VS Code" />
        <h2 className="text-2xl font-bold mb-2">4 extensions à installer maintenant</h2>
        <p className="text-slate-500 mb-6">Ces extensions transforment VS Code en véritable IDE pour le développement web front-end.</p>
        <ExtensionsSection />
      </section>

      {/* RACCOURCIS */}
      <section>
        <SectionLabel text="Productivité" />
        <h2 className="text-2xl font-bold mb-2">Raccourcis clavier essentiels</h2>
        <p className="text-slate-500 mb-5">Apprends ces 6 raccourcis dès maintenant — ils te feront gagner des heures.</p>
        <ShortcutsTable />
      </section>

      {/* CHECKLIST */}
      <section>
        <SectionLabel text="Avant de continuer" />
        <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
          <h3 className="font-bold text-emerald-800 mb-4">✅ Checklist avant la leçon suivante</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Chrome installé et défini comme navigateur par défaut',
              'VS Code installé et ouvert au moins une fois',
              '"Add to PATH" coché lors de l\'installation',
              'Live Server installé depuis le Marketplace',
              'Prettier installé et configuré comme formateur par défaut',
              'Material Icon Theme installé (optionnel mais agréable)',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-[13px] text-emerald-800">
                <span className="w-5 h-5 rounded border-2 border-emerald-300 flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-4 py-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm font-medium italic">
          Outils prêts ? On écrit enfin du vrai HTML. 🚀
        </p>
        <Link
          to="/lesson/html-basics"
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : HTML Basics →
        </Link>
      </footer>

    </div>
  );
}