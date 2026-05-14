import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoForms = {
  html: `<form>
  <div class="field">
    <label>Nom Complet</label>
    <input type="text" placeholder="Ex: Jean Dupont">
  </div>
  
  <div class="field">
    <label>Email</label>
    <input type="email" placeholder="email@test.com">
  </div>

  <button type="button">S'inscrire</button>
</form>`,
  css: `form {
  background: white;
  padding: 30px;
  border-radius: 24px;
  width: 100%;
}
.field { margin-bottom: 15px; }
label { display: block; font-size: 12px; font-weight: bold; margin-bottom: 5px; color: #64748b; }
input {
  width: 100%;
  padding: 12px;
  border: 2px solid #f1f5f9;
  border-radius: 12px;
  outline: none;
}
input:focus { border-color: #3b82f6; }
button {
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
}`,
  desc: "Un formulaire d'inscription moderne avec labels et inputs."
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400 whitespace-nowrap">{text}</span>
      <span className="flex-1 h-px bg-slate-100" />
    </div>
  );
}

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

// ─── Anatomie d'un formulaire ─────────────────────────────────────────────────

function FormAnatomy() {
  const [hovered, setHovered] = useState(null);

  const parts = [
    {
      id: 'form',
      label: '<form>',
      color: 'text-pink-400',
      border: 'border-pink-400/40',
      bg: 'bg-pink-500/5',
      desc: 'Conteneur principal. Sans lui, les données ne peuvent pas être envoyées. L\'attribut action définit l\'URL de destination, method définit GET ou POST.',
    },
    {
      id: 'label',
      label: '<label>',
      color: 'text-sky-400',
      border: 'border-sky-400/40',
      bg: 'bg-sky-500/5',
      desc: 'Texte descriptif associé à un input via l\'attribut for="id-de-l-input". Cliquer sur le label active l\'input — indispensable pour l\'accessibilité.',
    },
    {
      id: 'input',
      label: '<input>',
      color: 'text-emerald-400',
      border: 'border-emerald-400/40',
      bg: 'bg-emerald-500/5',
      desc: 'Champ de saisie. Son comportement change entièrement selon l\'attribut type : texte, email, password, checkbox, radio, file, date...',
    },
    {
      id: 'button',
      label: '<button>',
      color: 'text-orange-400',
      border: 'border-orange-400/40',
      bg: 'bg-orange-500/5',
      desc: 'Déclenche la soumission avec type="submit" (défaut) ou une action JS avec type="button". Ne pas confondre les deux !',
    },
  ];

  const active = hovered ? parts.find(p => p.id === hovered) : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
      {/* Code annoté */}
      <div className="bg-slate-900 rounded-2xl p-5 font-mono text-[13px] leading-loose">
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-slate-500 text-[11px] ml-2">inscription.html</span>
        </div>

        {/* form */}
        <div
          onMouseEnter={() => setHovered('form')}
          onMouseLeave={() => setHovered(null)}
          className={`border rounded-xl px-3 py-2 mb-1 cursor-pointer transition-all ${hovered === 'form' ? 'border-pink-400/60 bg-pink-500/10' : 'border-transparent'}`}
        >
          <span className="text-pink-400">{'<form'}</span>
          {' '}<span className="text-sky-400">action</span>=<span className="text-emerald-400">"/submit"</span>
          {' '}<span className="text-sky-400">method</span>=<span className="text-emerald-400">"POST"</span>
          <span className="text-pink-400">{'>'}</span>
        </div>

        {/* label + input */}
        <div className="pl-4 space-y-1">
          <div
            onMouseEnter={() => setHovered('label')}
            onMouseLeave={() => setHovered(null)}
            className={`border rounded-xl px-3 py-1 cursor-pointer transition-all ${hovered === 'label' ? 'border-sky-400/60 bg-sky-500/10' : 'border-transparent'}`}
          >
            <span className="text-pink-400">{'<label'}</span>
            {' '}<span className="text-sky-400">for</span>=<span className="text-emerald-400">"email"</span>
            <span className="text-pink-400">{'>'}</span>
            <span className="text-white"> Email </span>
            <span className="text-pink-400">{'</label>'}</span>
          </div>

          <div
            onMouseEnter={() => setHovered('input')}
            onMouseLeave={() => setHovered(null)}
            className={`border rounded-xl px-3 py-1 cursor-pointer transition-all ${hovered === 'input' ? 'border-emerald-400/60 bg-emerald-500/10' : 'border-transparent'}`}
          >
            <span className="text-pink-400">{'<input'}</span>
            {' '}<span className="text-sky-400">type</span>=<span className="text-emerald-400">"email"</span>
            {' '}<span className="text-sky-400">id</span>=<span className="text-emerald-400">"email"</span>
            {' '}<span className="text-sky-400">required</span>
            <span className="text-pink-400">{'>'}</span>
          </div>

          <div
            onMouseEnter={() => setHovered('button')}
            onMouseLeave={() => setHovered(null)}
            className={`border rounded-xl px-3 py-1 cursor-pointer transition-all ${hovered === 'button' ? 'border-orange-400/60 bg-orange-500/10' : 'border-transparent'}`}
          >
            <span className="text-pink-400">{'<button'}</span>
            {' '}<span className="text-sky-400">type</span>=<span className="text-emerald-400">"submit"</span>
            <span className="text-pink-400">{'>'}</span>
            <span className="text-white"> S'inscrire </span>
            <span className="text-pink-400">{'</button>'}</span>
          </div>
        </div>

        <div className="mt-1">
          <span className="text-pink-400">{'</form>'}</span>
        </div>
      </div>

      {/* Panel description */}
      <div className="space-y-3">
        {active ? (
          <div className={`border rounded-2xl p-5 transition-all ${active.border} ${active.bg}`}>
            <code className={`font-mono font-bold text-[14px] mb-2 block ${active.color}`}>{active.label}</code>
            <p className="text-[13px] text-slate-600 leading-relaxed">{active.desc}</p>
          </div>
        ) : (
          <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-5 text-center">
            <p className="text-slate-400 text-[13px]">👆 Survole une balise pour voir son rôle</p>
          </div>
        )}

        {/* Légendes fixes */}
        <div className="grid grid-cols-2 gap-2">
          {parts.map((p) => (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className={`border rounded-xl px-3 py-2 cursor-pointer transition-all ${hovered === p.id ? p.border + ' ' + p.bg : 'border-slate-100 bg-white'}`}
            >
              <code className={`font-mono font-bold text-[12px] ${p.color}`}>{p.label}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Catalogue des types d'input ─────────────────────────────────────────────

function InputCatalog() {
  const [active, setActive] = useState(0);

  const inputs = [
    {
      type: 'text',
      badge: 'Texte',
      color: 'blue',
      desc: 'Champ texte générique. À utiliser pour les noms, prénoms, titres.',
      attrs: ['placeholder', 'maxlength', 'minlength', 'pattern', 'autocomplete'],
      code: '<input type="text"\n  placeholder="Jean Dupont"\n  maxlength="50"\n  autocomplete="name">',
      preview: <input type="text" placeholder="Jean Dupont" className="w-full border-2 border-slate-200 rounded-xl px-3 py-2.5 text-[14px] outline-none focus:border-blue-500 transition-colors" />,
    },
    {
      type: 'email',
      badge: 'Email',
      color: 'violet',
      desc: 'Valide automatiquement le format email (présence du @). Le clavier mobile affiche @ en évidence.',
      attrs: ['placeholder', 'required', 'multiple', 'autocomplete'],
      code: '<input type="email"\n  placeholder="nom@exemple.com"\n  required\n  autocomplete="email">',
      preview: <input type="email" placeholder="nom@exemple.com" className="w-full border-2 border-slate-200 rounded-xl px-3 py-2.5 text-[14px] outline-none focus:border-violet-500 transition-colors" />,
    },
    {
      type: 'password',
      badge: 'Mot de passe',
      color: 'pink',
      desc: 'Masque les caractères saisis. Le navigateur propose de sauvegarder le mot de passe.',
      attrs: ['minlength', 'required', 'autocomplete'],
      code: '<input type="password"\n  minlength="8"\n  required\n  autocomplete="new-password">',
      preview: <input type="password" placeholder="••••••••" className="w-full border-2 border-slate-200 rounded-xl px-3 py-2.5 text-[14px] outline-none focus:border-pink-500 transition-colors" />,
    },
    {
      type: 'number',
      badge: 'Nombre',
      color: 'orange',
      desc: 'N\'accepte que les chiffres. Affiche des flèches haut/bas. Définir min et max pour borner la valeur.',
      attrs: ['min', 'max', 'step', 'placeholder'],
      code: '<input type="number"\n  min="1"\n  max="100"\n  step="1"\n  placeholder="Âge">',
      preview: <input type="number" min="1" max="100" placeholder="25" className="w-full border-2 border-slate-200 rounded-xl px-3 py-2.5 text-[14px] outline-none focus:border-orange-500 transition-colors" />,
    },
    {
      type: 'date',
      badge: 'Date',
      color: 'emerald',
      desc: 'Ouvre un sélecteur de date natif. Format de valeur ISO : YYYY-MM-DD.',
      attrs: ['min', 'max', 'value'],
      code: '<input type="date"\n  min="2000-01-01"\n  max="2025-12-31">',
      preview: <input type="date" className="w-full border-2 border-slate-200 rounded-xl px-3 py-2.5 text-[14px] outline-none focus:border-emerald-500 transition-colors" />,
    },
    {
      type: 'checkbox',
      badge: 'Case à cocher',
      color: 'blue',
      desc: 'Pour des choix multiples ou une acceptation (CGU). La propriété checked définit l\'état initial.',
      attrs: ['checked', 'required', 'value'],
      code: '<input type="checkbox" id="cgu"\n  name="cgu" required>\n<label for="cgu">J\'accepte les CGU</label>',
      preview: (
        <div className="flex items-center gap-3">
          <input type="checkbox" id="prev-cgu" className="w-5 h-5 rounded accent-blue-600 cursor-pointer" />
          <label htmlFor="prev-cgu" className="text-[14px] text-slate-700 cursor-pointer">J'accepte les CGU</label>
        </div>
      ),
    },
    {
      type: 'radio',
      badge: 'Bouton radio',
      color: 'violet',
      desc: 'Choix exclusif parmi plusieurs options. Tous les radio d\'un même groupe doivent avoir le même name.',
      attrs: ['name', 'value', 'checked'],
      code: '<input type="radio" name="plan" value="free"> Gratuit\n<input type="radio" name="plan" value="pro"> Pro',
      preview: (
        <div className="flex flex-col gap-2">
          {['Gratuit', 'Pro', 'Enterprise'].map((opt) => (
            <div key={opt} className="flex items-center gap-2">
              <input type="radio" name="prev-plan" className="w-4 h-4 accent-violet-600 cursor-pointer" />
              <label className="text-[14px] text-slate-700 cursor-pointer">{opt}</label>
            </div>
          ))}
        </div>
      ),
    },
    {
      type: 'file',
      badge: 'Fichier',
      color: 'amber',
      desc: 'Ouvre le sélecteur de fichiers. accept filtre les types autorisés. multiple permet plusieurs fichiers.',
      attrs: ['accept', 'multiple', 'required'],
      code: '<input type="file"\n  accept="image/*,.pdf"\n  multiple>',
      preview: <input type="file" accept="image/*" className="text-[13px] text-slate-600 cursor-pointer" />,
    },
    {
      type: 'range',
      badge: 'Curseur',
      color: 'pink',
      desc: 'Curseur glissant entre min et max. Idéal pour des paramètres comme le volume ou une note.',
      attrs: ['min', 'max', 'step', 'value'],
      code: '<input type="range"\n  min="0" max="100"\n  step="5"\n  value="50">',
      preview: <input type="range" min="0" max="100" defaultValue="50" className="w-full accent-pink-500 cursor-pointer" />,
    },
  ];

  const colorMap = {
    blue: { tab: 'bg-blue-600 text-white', badge: 'bg-blue-50 border-blue-100' },
    violet: { tab: 'bg-violet-600 text-white', badge: 'bg-violet-50 border-violet-100' },
    pink: { tab: 'bg-pink-600 text-white', badge: 'bg-pink-50 border-pink-100' },
    orange: { tab: 'bg-orange-500 text-white', badge: 'bg-orange-50 border-orange-100' },
    emerald: { tab: 'bg-emerald-600 text-white', badge: 'bg-emerald-50 border-emerald-100' },
    amber: { tab: 'bg-amber-500 text-white', badge: 'bg-amber-50 border-amber-100' },
  };

  const cur = inputs[active];
  const colors = colorMap[cur.color];

  return (
    <div>
      {/* Onglets types */}
      <div className="flex flex-wrap gap-2 mb-5">
        {inputs.map((inp, i) => (
          <button
            key={inp.type}
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 rounded-xl text-[12px] font-bold transition-all ${active === i ? colorMap[inp.color].tab : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {inp.badge}
          </button>
        ))}
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 border rounded-2xl p-5 ${colors.badge}`}>
        {/* Infos */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <code className="font-mono font-bold text-[15px] text-slate-900">type="{cur.type}"</code>
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${colors.tab}`}>{cur.badge}</span>
          </div>
          <p className="text-[14px] text-slate-600 leading-relaxed mb-4">{cur.desc}</p>

          {/* Attributs associés */}
          <div className="mb-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">Attributs associés</p>
            <div className="flex flex-wrap gap-1.5">
              {cur.attrs.map((a) => (
                <code key={a} className="text-[11px] bg-white border border-slate-200 rounded-md px-2 py-0.5 text-slate-600 font-mono">{a}</code>
              ))}
            </div>
          </div>

          {/* Code */}
          <pre className="bg-slate-900 text-emerald-400 rounded-xl p-4 text-[12px] font-mono leading-6 overflow-x-auto whitespace-pre-wrap">
            {cur.code}
          </pre>
        </div>

        {/* Prévisualisation live */}
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Aperçu en direct</p>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">{cur.badge}</label>
            {cur.preview}
          </div>

          {/* Focus state explication */}
          <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl p-3">
            <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest mb-1">💡 État :focus</p>
            <p className="text-[12px] text-blue-900 leading-relaxed">
              En CSS, <code className="font-mono bg-blue-100 px-1 rounded">input:focus</code> permet de styliser un champ quand l'utilisateur clique dessus. Toujours indiquer visuellement le champ actif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Label & Accessibilité ────────────────────────────────────────────────────

function LabelSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {/* Mauvais exemple */}
      <div className="bg-white border-2 border-red-100 rounded-2xl overflow-hidden">
        <div className="bg-red-50 px-4 py-2.5 border-b border-red-100 flex items-center gap-2">
          <span className="text-red-500">✗</span>
          <span className="text-[12px] font-bold text-red-700 uppercase tracking-widest">Sans label — Mauvaise pratique</span>
        </div>
        <div className="p-5">
          <pre className="bg-slate-900 text-[12px] font-mono leading-6 rounded-xl p-4 mb-4 overflow-x-auto">
            <span className="text-slate-500">{'// ❌ Input sans label'}</span>{'\n'}
            <span className="text-pink-400">{'<input'}</span>{' '}
            <span className="text-sky-400">type</span>=<span className="text-emerald-400">"email"</span>{'\n'}
            {'       '}
            <span className="text-sky-400">placeholder</span>=<span className="text-emerald-400">"Email"</span>
            <span className="text-pink-400">{'>'}</span>
          </pre>
          <div className="space-y-2">
            {[
              'Lecteur d\'écran ne sait pas quoi annoncer',
              'Cliquer sur le texte n\'active pas le champ',
              'Google pénalise les formulaires inaccessibles',
              'Le placeholder disparaît dès qu\'on tape',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2 text-[13px] text-red-700">
                <span className="text-red-400 flex-shrink-0 mt-0.5">✗</span> {p}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bon exemple */}
      <div className="bg-white border-2 border-emerald-100 rounded-2xl overflow-hidden">
        <div className="bg-emerald-50 px-4 py-2.5 border-b border-emerald-100 flex items-center gap-2">
          <span className="text-emerald-500">✓</span>
          <span className="text-[12px] font-bold text-emerald-700 uppercase tracking-widest">Avec label — Bonne pratique</span>
        </div>
        <div className="p-5">
          <pre className="bg-slate-900 text-[12px] font-mono leading-6 rounded-xl p-4 mb-4 overflow-x-auto">
            <span className="text-slate-500">{'// ✅ Label connecté via for/id'}</span>{'\n'}
            <span className="text-pink-400">{'<label'}</span>{' '}
            <span className="text-sky-400">for</span>=<span className="text-emerald-400">"email"</span>
            <span className="text-pink-400">{'>'}</span>
            <span className="text-white">Email</span>
            <span className="text-pink-400">{'</label>'}</span>{'\n'}
            <span className="text-pink-400">{'<input'}</span>{' '}
            <span className="text-sky-400">type</span>=<span className="text-emerald-400">"email"</span>{'\n'}
            {'       '}
            <span className="text-sky-400">id</span>=<span className="text-emerald-400">"email"</span>
            <span className="text-pink-400">{'>'}</span>
          </pre>
          <div className="space-y-2">
            {[
              'Lecteur d\'écran lit "Email, champ de saisie"',
              'Cliquer sur le label focus l\'input automatiquement',
              'Zone de clic élargie — meilleure UX mobile',
              'Accessibilité WCAG 2.1 conforme',
            ].map((p) => (
              <div key={p} className="flex items-start gap-2 text-[13px] text-emerald-700">
                <span className="text-emerald-500 flex-shrink-0 mt-0.5">✓</span> {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Attributs de validation ──────────────────────────────────────────────────

function ValidationSection() {
  const attrs = [
    { attr: 'required', example: '<input required>', desc: 'Le champ doit être rempli. Le formulaire ne se soumet pas si vide.', color: 'red' },
    { attr: 'minlength / maxlength', example: '<input minlength="8" maxlength="50">', desc: 'Longueur minimale et maximale du texte saisi.', color: 'blue' },
    { attr: 'min / max', example: '<input type="number" min="0" max="120">', desc: 'Valeur minimale et maximale pour les types number, date, range.', color: 'violet' },
    { attr: 'pattern', example: '<input pattern="[0-9]{10}">', desc: 'Expression régulière que la valeur doit respecter. Ici : 10 chiffres exactement.', color: 'orange' },
    { attr: 'disabled', example: '<input disabled>', desc: 'Désactive le champ — impossible de cliquer dessus. Non soumis avec le formulaire.', color: 'slate' },
    { attr: 'placeholder', example: '<input placeholder="Ex: Jean">', desc: 'Texte indicatif dans le champ vide. Disparaît dès la saisie. Ne remplace pas le label.', color: 'emerald' },
    { attr: 'autocomplete', example: '<input autocomplete="email">', desc: 'Suggère les valeurs enregistrées. Améliore l\'UX. Valeurs: "off", "name", "email", "new-password"...', color: 'pink' },
    { attr: 'name', example: '<input name="user_email">', desc: 'Clé utilisée quand les données sont envoyées au serveur. Sans name, le champ est ignoré.', color: 'amber' },
  ];

  const cMap = {
    red: 'bg-red-50 border-red-100 text-red-800',
    blue: 'bg-blue-50 border-blue-100 text-blue-800',
    violet: 'bg-violet-50 border-violet-100 text-violet-800',
    orange: 'bg-orange-50 border-orange-100 text-orange-800',
    slate: 'bg-slate-50 border-slate-200 text-slate-700',
    emerald: 'bg-emerald-50 border-emerald-100 text-emerald-800',
    pink: 'bg-pink-50 border-pink-100 text-pink-800',
    amber: 'bg-amber-50 border-amber-100 text-amber-800',
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {attrs.map((a) => (
        <div key={a.attr} className={`border rounded-2xl p-4 ${cMap[a.color]}`}>
          <div className="flex items-start justify-between gap-3 mb-2">
            <code className="font-mono font-bold text-[13px]">{a.attr}</code>
          </div>
          <p className="text-[12px] leading-relaxed mb-2 opacity-80">{a.desc}</p>
          <pre className="text-[11px] font-mono bg-black/5 rounded-lg px-3 py-1.5 overflow-x-auto whitespace-pre-wrap">
            {a.example}
          </pre>
        </div>
      ))}
    </div>
  );
}

// ─── Demo formulaire complet (InteractiveDemo) ───────────────────────────────

const demoFullForm = {
  html: `<form action="/register" method="POST">

  <div class="field">
    <label for="nom">Nom complet</label>
    <input type="text" id="nom" name="nom"
      placeholder="Jean Dupont"
      required autocomplete="name">
  </div>

  <div class="field">
    <label for="email">Email</label>
    <input type="email" id="email" name="email"
      placeholder="nom@exemple.com"
      required autocomplete="email">
  </div>

  <div class="field">
    <label for="password">Mot de passe</label>
    <input type="password" id="password" name="password"
      placeholder="8 caractères minimum"
      minlength="8" required>
  </div>

  <div class="field">
    <label for="plan">Formule</label>
    <select id="plan" name="plan">
      <option value="free">Gratuit</option>
      <option value="pro">Pro — 9€/mois</option>
      <option value="enterprise">Enterprise</option>
    </select>
  </div>

  <div class="field-check">
    <input type="checkbox" id="cgu" name="cgu" required>
    <label for="cgu">J'accepte les CGU</label>
  </div>

  <button type="submit">Créer mon compte →</button>

</form>`,
  css: `* { box-sizing: border-box; }

form {
  background: #ffffff;
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.08);
  width: 100%;
  font-family: system-ui, sans-serif;
}

.field {
  margin-bottom: 18px;
}

label {
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin-bottom: 6px;
}

input[type="text"],
input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 14px;
  color: #0f172a;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  background: #f8fafc;
}

input:focus, select:focus {
  border-color: #2563eb;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
}

select { cursor: pointer; }

.field-check {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  font-size: 13px;
  color: #475569;
}

.field-check input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #2563eb;
  cursor: pointer;
}

.field-check label {
  font-size: 13px;
  text-transform: none;
  letter-spacing: 0;
  color: #475569;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 0;
}

button {
  width: 100%;
  background: #2563eb;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

button:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}`,
  desc: "Bascule pour voir le formulaire brut HTML vs le résultat stylisé avec le CSS complet."
};

// ─── Formulaire complet : code + rendu live côte à côte ──────────────────────

function FullFormDemo() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6">

      {/* Rangée principale : code HTML | code CSS | rendu live */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">

        {/* Colonne 1 : HTML annoté */}
        <div className="bg-slate-900 rounded-2xl overflow-hidden">
          <div className="px-4 py-2.5 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
            <span className="text-slate-400 text-[11px] font-mono">inscription.html</span>
            <span className="text-emerald-400 text-[11px]">✓ Accessible</span>
          </div>
          <pre className="p-4 text-[11.5px] font-mono leading-[1.8] overflow-x-auto">
            <span className="text-pink-400">{'<form'}</span> <span className="text-sky-400">method</span>=<span className="text-emerald-400">"POST"</span><span className="text-pink-400">{'>'}</span>{'\n\n'}
            {'  '}<span className="text-slate-500">{'<!-- Nom -->'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<label'}</span> <span className="text-sky-400">for</span>=<span className="text-emerald-400">"nom"</span><span className="text-pink-400">{'>'}</span>
            <span className="text-white">Nom complet</span><span className="text-pink-400">{'</label>'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<input'}</span> <span className="text-sky-400">type</span>=<span className="text-emerald-400">"text"</span>{'\n'}
            {'    '}<span className="text-sky-400">id</span>=<span className="text-emerald-400">"nom"</span> <span className="text-sky-400">name</span>=<span className="text-emerald-400">"nom"</span>{'\n'}
            {'    '}<span className="text-sky-400">required</span><span className="text-pink-400">{'>'}</span>{'\n\n'}
            {'  '}<span className="text-slate-500">{'<!-- Email -->'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<label'}</span> <span className="text-sky-400">for</span>=<span className="text-emerald-400">"email"</span><span className="text-pink-400">{'>'}</span>
            <span className="text-white">Email</span><span className="text-pink-400">{'</label>'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<input'}</span> <span className="text-sky-400">type</span>=<span className="text-emerald-400">"email"</span>{'\n'}
            {'    '}<span className="text-sky-400">id</span>=<span className="text-emerald-400">"email"</span> <span className="text-sky-400">required</span><span className="text-pink-400">{'>'}</span>{'\n\n'}
            {'  '}<span className="text-slate-500">{'<!-- Password -->'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<label'}</span> <span className="text-sky-400">for</span>=<span className="text-emerald-400">"mdp"</span><span className="text-pink-400">{'>'}</span>
            <span className="text-white">Mot de passe</span><span className="text-pink-400">{'</label>'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<input'}</span> <span className="text-sky-400">type</span>=<span className="text-emerald-400">"password"</span>{'\n'}
            {'    '}<span className="text-sky-400">id</span>=<span className="text-emerald-400">"mdp"</span> <span className="text-sky-400">minlength</span>=<span className="text-orange-400">"8"</span>{'\n'}
            {'    '}<span className="text-sky-400">required</span><span className="text-pink-400">{'>'}</span>{'\n\n'}
            {'  '}<span className="text-slate-500">{'<!-- Plan -->'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<label'}</span> <span className="text-sky-400">for</span>=<span className="text-emerald-400">"plan"</span><span className="text-pink-400">{'>'}</span>
            <span className="text-white">Formule</span><span className="text-pink-400">{'</label>'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<select'}</span> <span className="text-sky-400">id</span>=<span className="text-emerald-400">"plan"</span><span className="text-pink-400">{'>'}</span>{'\n'}
            {'    '}<span className="text-pink-400">{'<option'}</span><span className="text-pink-400">{'>'}</span><span className="text-white">Gratuit</span><span className="text-pink-400">{'</option>'}</span>{'\n'}
            {'    '}<span className="text-pink-400">{'<option'}</span><span className="text-pink-400">{'>'}</span><span className="text-white">Pro</span><span className="text-pink-400">{'</option>'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'</select>'}</span>{'\n\n'}
            {'  '}<span className="text-slate-500">{'<!-- CGU -->'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<input'}</span> <span className="text-sky-400">type</span>=<span className="text-emerald-400">"checkbox"</span>{'\n'}
            {'    '}<span className="text-sky-400">id</span>=<span className="text-emerald-400">"cgu"</span> <span className="text-sky-400">required</span><span className="text-pink-400">{'>'}</span>{'\n'}
            {'  '}<span className="text-pink-400">{'<label'}</span> <span className="text-sky-400">for</span>=<span className="text-emerald-400">"cgu"</span><span className="text-pink-400">{'>'}</span>
            <span className="text-white">J'accepte les CGU</span><span className="text-pink-400">{'</label>'}</span>{'\n\n'}
            {'  '}<span className="text-pink-400">{'<button'}</span> <span className="text-sky-400">type</span>=<span className="text-emerald-400">"submit"</span><span className="text-pink-400">{'>'}</span>
            <span className="text-white">Créer mon compte →</span><span className="text-pink-400">{'</button>'}</span>{'\n'}
            <span className="text-pink-400">{'</form>'}</span>
          </pre>
        </div>

        {/* Colonne 2 : CSS annoté */}
        <div className="bg-slate-900 rounded-2xl overflow-hidden">
          <div className="px-4 py-2.5 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
            <span className="text-slate-400 text-[11px] font-mono">style.css</span>
            <span className="text-violet-400 text-[11px]">✓ CSS complet</span>
          </div>
          <pre className="p-4 text-[11.5px] font-mono leading-[1.8] overflow-x-auto">
            <span className="text-pink-400">form</span> <span className="text-slate-600">{'{'}</span>{'\n'}
            {'  '}<span className="text-violet-400">padding</span><span className="text-slate-600">: </span><span className="text-orange-400">32</span><span className="text-pink-400">px</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">background</span><span className="text-slate-600">: </span><span className="text-emerald-400">#fff</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">border-radius</span><span className="text-slate-600">: </span><span className="text-orange-400">24</span><span className="text-pink-400">px</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">box-shadow</span><span className="text-slate-600">: </span><span className="text-emerald-400">0 20px 60px rgba(0,0,0,.08)</span><span className="text-slate-600">;</span>{'\n'}
            <span className="text-slate-600">{'}'}</span>{'\n\n'}
            <span className="text-pink-400">label</span> <span className="text-slate-600">{'{'}</span>{'\n'}
            {'  '}<span className="text-violet-400">display</span><span className="text-slate-600">: </span><span className="text-sky-400">block</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">font-size</span><span className="text-slate-600">: </span><span className="text-orange-400">11</span><span className="text-pink-400">px</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">font-weight</span><span className="text-slate-600">: </span><span className="text-orange-400">700</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">text-transform</span><span className="text-slate-600">: </span><span className="text-sky-400">uppercase</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">color</span><span className="text-slate-600">: </span><span className="text-emerald-400">#64748b</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">margin-bottom</span><span className="text-slate-600">: </span><span className="text-orange-400">6</span><span className="text-pink-400">px</span><span className="text-slate-600">;</span>{'\n'}
            <span className="text-slate-600">{'}'}</span>{'\n\n'}
            <span className="text-pink-400">input</span><span className="text-slate-500">[type="text"],</span>{'\n'}
            <span className="text-pink-400">input</span><span className="text-slate-500">[type="email"],</span>{'\n'}
            <span className="text-pink-400">input</span><span className="text-slate-500">[type="password"],</span>{'\n'}
            <span className="text-pink-400">select</span> <span className="text-slate-600">{'{'}</span>{'\n'}
            {'  '}<span className="text-violet-400">width</span><span className="text-slate-600">: </span><span className="text-orange-400">100</span><span className="text-pink-400">%</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">padding</span><span className="text-slate-600">: </span><span className="text-orange-400">12</span><span className="text-pink-400">px</span> <span className="text-orange-400">16</span><span className="text-pink-400">px</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">border</span><span className="text-slate-600">: </span><span className="text-orange-400">2</span><span className="text-pink-400">px</span> <span className="text-sky-400">solid</span> <span className="text-emerald-400">#e2e8f0</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">border-radius</span><span className="text-slate-600">: </span><span className="text-orange-400">12</span><span className="text-pink-400">px</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">background</span><span className="text-slate-600">: </span><span className="text-emerald-400">#f8fafc</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">outline</span><span className="text-slate-600">: </span><span className="text-sky-400">none</span><span className="text-slate-600">;</span>{'\n'}
            <span className="text-slate-600">{'}'}</span>{'\n\n'}
            <span className="text-pink-400">input</span><span className="text-sky-400">:focus</span><span className="text-slate-500">,</span>{'\n'}
            <span className="text-pink-400">select</span><span className="text-sky-400">:focus</span> <span className="text-slate-600">{'{'}</span>{'\n'}
            {'  '}<span className="text-violet-400">border-color</span><span className="text-slate-600">: </span><span className="text-emerald-400">#2563eb</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">background</span><span className="text-slate-600">: </span><span className="text-emerald-400">#fff</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">box-shadow</span><span className="text-slate-600">: </span><span className="text-emerald-400">0 0 0 4px rgba(37,99,235,.1)</span><span className="text-slate-600">;</span>{'\n'}
            <span className="text-slate-600">{'}'}</span>{'\n\n'}
            <span className="text-pink-400">button</span> <span className="text-slate-600">{'{'}</span>{'\n'}
            {'  '}<span className="text-violet-400">width</span><span className="text-slate-600">: </span><span className="text-orange-400">100</span><span className="text-pink-400">%</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">background</span><span className="text-slate-600">: </span><span className="text-emerald-400">#2563eb</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">color</span><span className="text-slate-600">: </span><span className="text-emerald-400">white</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">padding</span><span className="text-slate-600">: </span><span className="text-orange-400">14</span><span className="text-pink-400">px</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">border-radius</span><span className="text-slate-600">: </span><span className="text-orange-400">12</span><span className="text-pink-400">px</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">font-weight</span><span className="text-slate-600">: </span><span className="text-orange-400">700</span><span className="text-slate-600">;</span>{'\n'}
            {'  '}<span className="text-violet-400">cursor</span><span className="text-slate-600">: </span><span className="text-sky-400">pointer</span><span className="text-slate-600">;</span>{'\n'}
            <span className="text-slate-600">{'}'}</span>
          </pre>
        </div>

        {/* Colonne 3 : Rendu live */}
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span className="text-[11px] text-slate-400 ml-2 font-medium">Rendu navigateur — cliquable !</span>
          </div>

          {submitted ? (
            <div className="p-8 flex flex-col items-center justify-center gap-3 text-center min-h-[400px]">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-2xl">✅</div>
              <p className="font-black text-slate-900 text-lg">Compte créé !</p>
              <p className="text-slate-500 text-[13px]">Le formulaire a été soumis avec succès.<br/>La validation HTML native a fonctionné.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-[12px] text-blue-600 underline cursor-pointer bg-transparent border-none"
              >
                Réinitialiser
              </button>
            </div>
          ) : (
            <form
              className="p-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Nom complet
                </label>
                <input
                  type="text" required placeholder="Jean Dupont"
                  className="w-full border-2 border-slate-200 rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)] bg-slate-50 transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Email
                </label>
                <input
                  type="email" required placeholder="nom@exemple.com"
                  className="w-full border-2 border-slate-200 rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)] bg-slate-50 transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Mot de passe
                </label>
                <input
                  type="password" required minLength={8} placeholder="8 caractères minimum"
                  className="w-full border-2 border-slate-200 rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)] bg-slate-50 transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Formule
                </label>
                <select className="w-full border-2 border-slate-200 rounded-xl px-3 py-2.5 text-[13px] outline-none focus:border-blue-500 focus:bg-white focus:shadow-[0_0_0_4px_rgba(37,99,235,0.1)] bg-slate-50 transition-all cursor-pointer">
                  <option>Gratuit</option>
                  <option>Pro — 9€/mois</option>
                  <option>Enterprise</option>
                </select>
              </div>
              <div className="flex items-center gap-2.5">
                <input type="checkbox" id="live-cgu" required className="w-4 h-4 accent-blue-600 cursor-pointer flex-shrink-0" />
                <label htmlFor="live-cgu" className="text-[12px] text-slate-600 cursor-pointer leading-relaxed">
                  J'accepte les <span className="text-blue-600 underline">CGU</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-[14px] hover:bg-blue-700 active:scale-95 transition-all cursor-pointer border-none"
              >
                Créer mon compte →
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-3">
        {[
          { bg: 'bg-emerald-50 border-emerald-100 text-emerald-800', icon: '✅', text: 'Labels connectés via for/id' },
          { bg: 'bg-blue-50 border-blue-100 text-blue-800', icon: '🔒', text: 'Validation native (required, minlength)' },
          { bg: 'bg-violet-50 border-violet-100 text-violet-800', icon: '🎨', text: 'Focus avec box-shadow bleu' },
          { bg: 'bg-orange-50 border-orange-100 text-orange-800', icon: '📱', text: 'Clavier mobile adapté (email, password)' },
        ].map((b) => (
          <div key={b.text} className={`flex items-center gap-2 border rounded-xl px-4 py-2 text-[12px] font-medium ${b.bg}`}>
            <span>{b.icon}</span>{b.text}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Exercice pratique ────────────────────────────────────────────────────────

function ExerciceForm() {
  const [revealed, setRevealed] = useState(false);
  const [checked, setChecked] = useState({});

  const tasks = [
    { id: 'form', text: 'Créer une balise <form> avec method="POST"' },
    { id: 'label-nom', text: 'Ajouter un <label for="nom"> + <input id="nom" type="text" required>' },
    { id: 'label-email', text: 'Ajouter un <label for="email"> + <input id="email" type="email" required>' },
    { id: 'label-msg', text: 'Ajouter un <label for="msg"> + <textarea id="msg" rows="4"></textarea>' },
    { id: 'select', text: 'Ajouter un <select> avec 3 options : "Débutant", "Intermédiaire", "Avancé"' },
    { id: 'submit', text: 'Terminer avec un <button type="submit">Envoyer</button>' },
  ];

  const done = Object.values(checked).filter(Boolean).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

      {/* Consignes */}
      <div className="space-y-4">
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-amber-500 text-lg">📝</span>
            <p className="font-bold text-amber-900">Exercice — Formulaire de contact</p>
          </div>
          <p className="text-[13px] text-amber-800 leading-relaxed mb-4">
            Crée un formulaire de contact complet dans VS Code. Coche chaque étape au fur et à mesure.
          </p>
          <div className="space-y-2">
            {tasks.map((t) => (
              <label key={t.id} className="flex items-start gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={!!checked[t.id]}
                  onChange={() => setChecked(p => ({ ...p, [t.id]: !p[t.id] }))}
                  className="w-4 h-4 mt-0.5 accent-amber-500 cursor-pointer flex-shrink-0"
                />
                <span className={`text-[12px] leading-relaxed transition-colors ${checked[t.id] ? 'line-through text-amber-400' : 'text-amber-900'}`}>
                  {t.text}
                </span>
              </label>
            ))}
          </div>
          {/* Barre de progression */}
          <div className="mt-4">
            <div className="flex justify-between text-[11px] text-amber-700 mb-1">
              <span>Progression</span>
              <span className="font-bold">{done} / {tasks.length}</span>
            </div>
            <div className="h-2 bg-amber-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${(done / tasks.length) * 100}%` }}
              />
            </div>
            {done === tasks.length && (
              <p className="text-[12px] text-emerald-600 font-bold mt-2">🎉 Exercice terminé ! Tu peux vérifier avec la solution.</p>
            )}
          </div>
        </div>

        {/* Bouton solution */}
        <button
          onClick={() => setRevealed(!revealed)}
          className={`w-full py-3 rounded-xl font-bold text-[13px] border-2 transition-all cursor-pointer ${
            revealed
              ? 'bg-slate-900 text-white border-slate-900'
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
          }`}
        >
          {revealed ? '🙈 Masquer la solution' : '👀 Voir la solution'}
        </button>
      </div>

      {/* Solution révélée OU aperçu du résultat attendu */}
      <div>
        {revealed ? (
          <div className="bg-slate-900 rounded-2xl overflow-hidden">
            <div className="px-4 py-2.5 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
              <span className="text-slate-400 text-[11px] font-mono">contact.html — Solution</span>
              <span className="text-emerald-400 text-[11px]">✓</span>
            </div>
            <pre className="p-4 text-[11.5px] font-mono leading-[1.8] overflow-x-auto">
              <span className="text-pink-400">{'<form'}</span> <span className="text-sky-400">method</span>=<span className="text-emerald-400">"POST"</span><span className="text-pink-400">{'>'}</span>{'\n\n'}
              {'  '}<span className="text-pink-400">{'<label'}</span> <span className="text-sky-400">for</span>=<span className="text-emerald-400">"nom"</span><span className="text-pink-400">{'>'}</span><span className="text-white">Votre nom</span><span className="text-pink-400">{'</label>'}</span>{'\n'}
              {'  '}<span className="text-pink-400">{'<input'}</span> <span className="text-sky-400">type</span>=<span className="text-emerald-400">"text"</span> <span className="text-sky-400">id</span>=<span className="text-emerald-400">"nom"</span>{'\n'}
              {'    '}<span className="text-sky-400">name</span>=<span className="text-emerald-400">"nom"</span> <span className="text-sky-400">required</span><span className="text-pink-400">{'>'}</span>{'\n\n'}
              {'  '}<span className="text-pink-400">{'<label'}</span> <span className="text-sky-400">for</span>=<span className="text-emerald-400">"email"</span><span className="text-pink-400">{'>'}</span><span className="text-white">Email</span><span className="text-pink-400">{'</label>'}</span>{'\n'}
              {'  '}<span className="text-pink-400">{'<input'}</span> <span className="text-sky-400">type</span>=<span className="text-emerald-400">"email"</span> <span className="text-sky-400">id</span>=<span className="text-emerald-400">"email"</span>{'\n'}
              {'    '}<span className="text-sky-400">name</span>=<span className="text-emerald-400">"email"</span> <span className="text-sky-400">required</span><span className="text-pink-400">{'>'}</span>{'\n\n'}
              {'  '}<span className="text-pink-400">{'<label'}</span> <span className="text-sky-400">for</span>=<span className="text-emerald-400">"msg"</span><span className="text-pink-400">{'>'}</span><span className="text-white">Message</span><span className="text-pink-400">{'</label>'}</span>{'\n'}
              {'  '}<span className="text-pink-400">{'<textarea'}</span> <span className="text-sky-400">id</span>=<span className="text-emerald-400">"msg"</span>{'\n'}
              {'    '}<span className="text-sky-400">name</span>=<span className="text-emerald-400">"msg"</span> <span className="text-sky-400">rows</span>=<span className="text-orange-400">"4"</span><span className="text-pink-400">{'>'}</span><span className="text-pink-400">{'</textarea>'}</span>{'\n\n'}
              {'  '}<span className="text-pink-400">{'<label'}</span> <span className="text-sky-400">for</span>=<span className="text-emerald-400">"niveau"</span><span className="text-pink-400">{'>'}</span><span className="text-white">Niveau</span><span className="text-pink-400">{'</label>'}</span>{'\n'}
              {'  '}<span className="text-pink-400">{'<select'}</span> <span className="text-sky-400">id</span>=<span className="text-emerald-400">"niveau"</span> <span className="text-sky-400">name</span>=<span className="text-emerald-400">"niveau"</span><span className="text-pink-400">{'>'}</span>{'\n'}
              {'    '}<span className="text-pink-400">{'<option'}</span><span className="text-pink-400">{'>'}</span><span className="text-white">Débutant</span><span className="text-pink-400">{'</option>'}</span>{'\n'}
              {'    '}<span className="text-pink-400">{'<option'}</span><span className="text-pink-400">{'>'}</span><span className="text-white">Intermédiaire</span><span className="text-pink-400">{'</option>'}</span>{'\n'}
              {'    '}<span className="text-pink-400">{'<option'}</span><span className="text-pink-400">{'>'}</span><span className="text-white">Avancé</span><span className="text-pink-400">{'</option>'}</span>{'\n'}
              {'  '}<span className="text-pink-400">{'</select>'}</span>{'\n\n'}
              {'  '}<span className="text-pink-400">{'<button'}</span> <span className="text-sky-400">type</span>=<span className="text-emerald-400">"submit"</span><span className="text-pink-400">{'>'}</span>
              <span className="text-white">Envoyer</span><span className="text-pink-400">{'</button>'}</span>{'\n'}
              <span className="text-pink-400">{'</form>'}</span>
            </pre>
          </div>
        ) : (
          /* Aperçu du formulaire de contact attendu */
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-2.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-[11px] text-slate-400 ml-2">Résultat attendu</span>
            </div>
            <div className="p-5 space-y-3">
              {[
                { label: 'Votre nom', type: 'text', placeholder: 'Jean Dupont' },
                { label: 'Email', type: 'email', placeholder: 'nom@exemple.com' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder} className="w-full border-2 border-slate-200 rounded-xl px-3 py-2 text-[13px] outline-none focus:border-blue-500 bg-slate-50 transition-all" />
                </div>
              ))}
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Message</label>
                <textarea rows={3} placeholder="Votre message..." className="w-full border-2 border-slate-200 rounded-xl px-3 py-2 text-[13px] outline-none focus:border-blue-500 bg-slate-50 transition-all resize-none" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Niveau</label>
                <select className="w-full border-2 border-slate-200 rounded-xl px-3 py-2 text-[13px] outline-none focus:border-blue-500 bg-slate-50 transition-all cursor-pointer">
                  <option>Débutant</option>
                  <option>Intermédiaire</option>
                  <option>Avancé</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-bold text-[13px] cursor-pointer border-none hover:bg-blue-700 transition-colors">
                Envoyer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Composant principal ──────────────────────────────────────────────────────

export default function Forms() {
  return (
    <div className="flex flex-col gap-12 animate-fadeIn">

      {/* ENTÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-[11px] uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600" />
          Chapitre 4 — HTML
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Formulaires <span className="text-blue-600">Interactifs</span>
        </h1>
        <p className="text-slate-500 text-lg mt-3 leading-relaxed max-w-xl">
          Les formulaires sont le principal moyen de collecter des données utilisateur.
          Inscription, connexion, commande — tout passe par là.
        </p>
        <ProgressBar current={4} total={10} />
      </header>

      {/* SECTION 1 : ANATOMIE */}
      <section>
        <SectionLabel text="Structure de base" />
        <h2 className="text-2xl font-bold mb-2">Anatomie d'un formulaire</h2>
        <p className="text-slate-500 mb-5 max-w-xl">
          Un formulaire HTML est composé de 4 éléments essentiels qui travaillent ensemble.
          Survole chaque balise pour comprendre son rôle exact.
        </p>
        <FormAnatomy />
      </section>

      {/* SECTION 2 : TYPES D'INPUT */}
      <section>
        <SectionLabel text="Types d'input" />
        <h2 className="text-2xl font-bold mb-2">Les 9 types d'input à connaître</h2>
        <p className="text-slate-500 mb-5 max-w-xl">
          L'attribut <code className="font-mono bg-slate-100 px-1.5 py-0.5 rounded text-[13px]">type</code> transforme
          complètement le comportement d'un input. Clique sur chaque type pour voir son code et un aperçu interactif.
        </p>
        <InputCatalog />
      </section>

      {/* SECTION 3 : LABEL */}
      <section>
        <SectionLabel text="Accessibilité" />
        <h2 className="text-2xl font-bold mb-2">L'importance du label</h2>
        <p className="text-slate-500 mb-5 max-w-xl">
          Un input sans label est une erreur grave d'accessibilité et d'UX.
          Voici pourquoi le label est obligatoire — et comment bien le connecter.
        </p>
        <LabelSection />
      </section>

      {/* SECTION 4 : VALIDATION */}
      <section>
        <SectionLabel text="Validation HTML native" />
        <h2 className="text-2xl font-bold mb-2">Valider sans JavaScript</h2>
        <p className="text-slate-500 mb-5 max-w-xl">
          HTML5 intègre une validation native puissante. Ces attributs vérifient les données
          avant même que tu écrives une ligne de JavaScript.
        </p>
        <ValidationSection />
      </section>

      {/* SECTION 5 : DÉMO INTERACTIVE */}
      <section>
        <SectionLabel text="Démo interactive" />
        <h2 className="text-2xl font-bold mb-2">HTML vs HTML + CSS</h2>
        <p className="text-slate-500 mb-5">
          Vois comment le CSS transforme un formulaire brut en interface moderne et professionnelle.
        </p>
        <InteractiveDemo demo={demoForms} />
      </section>

      {/* SECTION 6 : FORMULAIRE COMPLET */}
      <section>
        <SectionLabel text="Exemple complet" />
        <h2 className="text-2xl font-bold mb-2">Un formulaire d'inscription complet et accessible</h2>
        <p className="text-slate-500 mb-5 max-w-xl">
          Voici un formulaire réel avec tous les bons attributs : labels connectés,
          validation native, autocomplete et types corrects.
        </p>
        <FullFormDemo />
      </section>

      {/* FOOTER */}
      <footer className="mt-4 py-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm font-medium italic">
          Structure maîtrisée. On passe aux couleurs ! 🎨
        </p>
        <Link
          to="/lesson/css-intro"
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Introduction CSS →
        </Link>
      </footer>

    </div>
  );
}