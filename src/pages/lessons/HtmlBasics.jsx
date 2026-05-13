import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InteractiveDemo from '../../components/InteractiveDemo';

const demoBasics = {
  html: `<article>
  <h1>Ma Passion pour le Code</h1>
  <p>Le développement web est <strong>incroyable</strong>.</p>

  <h3>Ce que j'apprends :</h3>
  <ul>
    <li>La structure avec HTML</li>
    <li>Le style avec CSS</li>
  </ul>

  <a href="#">Lire la suite...</a>
</article>`,
  css: `article {
  background: white;
  padding: 30px;
  border-radius: 20px;
  border-left: 10px solid #2563eb;
}
h1 { color: #1e293b; font-size: 24px; }
h3 { color: #3b82f6; margin-top: 15px; }
ul { margin-left: 20px; color: #64748b; }
a { display: inline-block; margin-top: 10px; color: #2563eb; font-weight: bold; }`,
  desc: "Exemple d'une structure d'article avec titres, listes et liens."
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

// ─── Anatomie d'une balise (interactive) ─────────────────────────────────────

function TagAnatomy() {
  const [hovered, setHovered] = useState(null);

  const parts = [
    {
      id: 'open',
      label: 'Balise ouvrante',
      color: 'text-pink-400',
      bg: hovered === 'open' ? 'bg-pink-500/20 rounded' : '',
      content: '<h1>',
      desc: 'Annonce le début de l\'élément. Le nom entre < > indique le type de contenu.',
    },
    {
      id: 'content',
      label: 'Contenu',
      color: 'text-white',
      bg: hovered === 'content' ? 'bg-white/10 rounded' : '',
      content: 'Bonjour',
      desc: 'Le texte ou les éléments enfants visibles dans le navigateur.',
    },
    {
      id: 'close',
      label: 'Balise fermante',
      color: 'text-pink-400',
      bg: hovered === 'close' ? 'bg-pink-500/20 rounded' : '',
      content: '</h1>',
      desc: 'Signale la fin de l\'élément. Identique à l\'ouvrante mais avec un slash /.',
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-8">
      {/* Code visuel cliquable */}
      <div className="flex items-center justify-center gap-0 font-mono text-2xl md:text-3xl mb-6 flex-wrap gap-y-2">
        {parts.map((p) => (
          <span
            key={p.id}
            className={`cursor-pointer px-1 transition-all ${p.color} ${p.bg}`}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            {p.content}
          </span>
        ))}
      </div>

      {/* Légende sous le code */}
      <div className="grid grid-cols-3 gap-4">
        {parts.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            className={`rounded-xl p-3 cursor-pointer border transition-all ${
              hovered === p.id ? 'border-slate-500 bg-slate-800' : 'border-slate-700 bg-slate-800/40'
            }`}
          >
            <p className={`text-[11px] font-bold uppercase tracking-widest mb-1 ${p.color}`}>{p.label}</p>
            <p className="text-[12px] text-slate-400 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Note balise orpheline */}
      <div className="mt-4 border border-amber-500/30 bg-amber-500/10 rounded-xl px-4 py-3 flex items-start gap-3">
        <span className="text-amber-400 text-lg flex-shrink-0">⚠️</span>
        <div>
          <p className="text-[12px] font-bold text-amber-300 mb-0.5">Balises auto-fermantes (orphelines)</p>
          <p className="text-[12px] text-amber-200/70 leading-relaxed">
            Certaines balises n'ont pas de fermante car elles n'encadrent pas de contenu :
            <code className="font-mono bg-amber-500/20 px-1.5 py-0.5 rounded mx-1">&lt;img&gt;</code>
            <code className="font-mono bg-amber-500/20 px-1.5 py-0.5 rounded mx-1">&lt;input&gt;</code>
            <code className="font-mono bg-amber-500/20 px-1.5 py-0.5 rounded mx-1">&lt;br&gt;</code>
            <code className="font-mono bg-amber-500/20 px-1.5 py-0.5 rounded mx-1">&lt;hr&gt;</code>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Structure d'une page HTML complète ──────────────────────────────────────

function HtmlStructure() {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = {
    doctype: { color: 'text-slate-500', label: '<!DOCTYPE html>', desc: 'Déclare au navigateur que c\'est une page HTML5. Toujours en première ligne.' },
    html: { color: 'text-pink-400', label: '<html>', desc: 'Racine de toute la page. L\'attribut lang="fr" améliore l\'accessibilité et le SEO.' },
    head: { color: 'text-violet-400', label: '<head>', desc: 'Métadonnées invisibles : titre de l\'onglet, charset, liens CSS, balises SEO. Rien de visible ici.' },
    meta: { color: 'text-sky-400', label: '<meta charset>', desc: 'Déclare l\'encodage UTF-8 pour afficher les caractères spéciaux : é, à, ç, €...' },
    title: { color: 'text-sky-400', label: '<title>', desc: 'Texte affiché dans l\'onglet du navigateur et dans les résultats Google.' },
    link: { color: 'text-sky-400', label: '<link rel="stylesheet">', desc: 'Connecte le fichier CSS externe à la page HTML.' },
    body: { color: 'text-emerald-400', label: '<body>', desc: 'Tout ce qui est visible à l\'écran se trouve ici. C\'est la zone de travail principale.' },
    header: { color: 'text-orange-400', label: '<header>', desc: 'Zone de l\'en-tête : logo, navigation principale. Balise sémantique HTML5.' },
    main: { color: 'text-orange-400', label: '<main>', desc: 'Contenu principal unique de la page. Les moteurs de recherche lui accordent plus de poids.' },
    footer: { color: 'text-orange-400', label: '<footer>', desc: 'Pied de page : mentions légales, liens secondaires, copyright.' },
  };

  const active = activeNode ? nodes[activeNode] : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Arbre de code */}
      <div className="bg-slate-900 rounded-2xl p-5 font-mono text-[13px] leading-7">
        <div className="flex gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-slate-500 text-[11px] ml-2">index.html</span>
        </div>
        {[
          { id: 'doctype', indent: 0, text: '<!DOCTYPE html>' },
          { id: 'html', indent: 0, text: '<html lang="fr">' },
          { id: 'head', indent: 1, text: '<head>' },
          { id: 'meta', indent: 2, text: '<meta charset="UTF-8">' },
          { id: 'title', indent: 2, text: '<title>Mon Site</title>' },
          { id: 'link', indent: 2, text: '<link rel="stylesheet" href="style.css">' },
          { id: null, indent: 1, text: '</head>' },
          { id: 'body', indent: 1, text: '<body>' },
          { id: 'header', indent: 2, text: '<header>...</header>' },
          { id: 'main', indent: 2, text: '<main>...</main>' },
          { id: 'footer', indent: 2, text: '<footer>...</footer>' },
          { id: null, indent: 1, text: '</body>' },
          { id: null, indent: 0, text: '</html>' },
        ].map((line, i) => (
          <div
            key={i}
            style={{ paddingLeft: line.indent * 20 }}
            onMouseEnter={() => line.id && setActiveNode(line.id)}
            onMouseLeave={() => setActiveNode(null)}
            className={`transition-all rounded px-1 ${line.id ? 'cursor-pointer hover:bg-slate-800' : ''} ${activeNode === line.id && line.id ? 'bg-slate-800' : ''}`}
          >
            <span className={line.id ? nodes[line.id].color : 'text-slate-500'}>
              {line.text}
            </span>
          </div>
        ))}
      </div>

      {/* Panneau description */}
      <div>
        {active ? (
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
            <code className={`text-[13px] font-mono font-bold mb-3 block ${nodes[activeNode].color.replace('text-', 'text-')}`}>
              {active.label}
            </code>
            <p className="text-slate-600 text-[14px] leading-relaxed">{active.desc}</p>
          </div>
        ) : (
          <div className="bg-slate-50 border border-dashed border-slate-200 rounded-2xl p-5 text-center">
            <p className="text-slate-400 text-[13px]">👆 Survole une balise pour voir son rôle</p>
          </div>
        )}

        {/* Règles d'or */}
        <div className="mt-4 space-y-3">
          {[
            { num: '1', color: 'bg-blue-100 text-blue-700', title: 'Toujours commencer par <!DOCTYPE html>', desc: 'Sans ça, le navigateur entre en "quirks mode" et le rendu devient imprévisible.' },
            { num: '2', color: 'bg-violet-100 text-violet-700', title: 'head = invisible, body = visible', desc: 'Simple règle à retenir : tout ce que tu veux afficher va dans le body.' },
            { num: '3', color: 'bg-emerald-100 text-emerald-700', title: 'Respecte l\'indentation', desc: 'VS Code + Prettier le fait automatiquement. Un code bien indenté est un code lisible.' },
          ].map((r) => (
            <div key={r.num} className="flex gap-3 bg-white border border-slate-100 rounded-xl p-4">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black flex-shrink-0 mt-0.5 ${r.color}`}>{r.num}</span>
              <div>
                <p className="font-bold text-[13px] text-slate-800 mb-0.5">{r.title}</p>
                <p className="text-[12px] text-slate-500 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Balises essentielles ─────────────────────────────────────────────────────

function EssentialTags() {
  const [active, setActive] = useState(0);

  const tags = [
    {
      group: 'Titres',
      color: 'blue',
      tags: [
        { tag: '<h1>', usage: 'Titre principal de la page. Un seul par page — crucial pour le SEO.', code: '<h1>Mon titre principal</h1>' },
        { tag: '<h2>', usage: 'Sous-titre de section. Autant que nécessaire.', code: '<h2>Section importante</h2>' },
        { tag: '<h3>→<h6>', usage: 'Hiérarchie de sous-titres. h6 est le moins important.', code: '<h3>Sous-section</h3>' },
      ],
      preview: (
        <div className="space-y-1 p-4">
          <p className="text-[22px] font-black text-slate-900">h1 — Titre principal</p>
          <p className="text-[18px] font-bold text-slate-800">h2 — Sous-titre</p>
          <p className="text-[15px] font-semibold text-slate-700">h3 — Sous-section</p>
          <p className="text-[13px] font-medium text-slate-600">h4 — Niveau 4</p>
          <p className="text-[12px] text-slate-500">h5 — Niveau 5</p>
          <p className="text-[11px] text-slate-400">h6 — Niveau 6</p>
        </div>
      ),
    },
    {
      group: 'Texte',
      color: 'violet',
      tags: [
        { tag: '<p>', usage: 'Paragraphe. Le navigateur ajoute automatiquement des marges verticales.', code: '<p>Un paragraphe de texte.</p>' },
        { tag: '<strong>', usage: 'Texte en gras avec importance sémantique. Différent d\'un simple bold CSS.', code: '<p>C\'est <strong>important</strong>.</p>' },
        { tag: '<em>', usage: 'Texte en italique avec emphase sémantique.', code: '<p>C\'est <em>remarquable</em>.</p>' },
        { tag: '<span>', usage: 'Conteneur inline sans sémantique. Utile pour cibler du texte en CSS.', code: '<p>Texte <span class="rouge">coloré</span>.</p>' },
      ],
      preview: (
        <div className="p-4 space-y-2 text-[14px]">
          <p className="text-slate-700">Un paragraphe normal avec du texte courant.</p>
          <p className="text-slate-700">Du texte <strong>important en gras</strong> et du texte <em>en italique</em>.</p>
          <p className="text-slate-700">Un <span className="text-blue-600 font-semibold">span ciblé</span> en CSS.</p>
        </div>
      ),
    },
    {
      group: 'Listes',
      color: 'emerald',
      tags: [
        { tag: '<ul>', usage: 'Liste non ordonnée — puces. Pour des éléments sans ordre précis.', code: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>' },
        { tag: '<ol>', usage: 'Liste ordonnée — numérotée. Pour des étapes ou un classement.', code: '<ol>\n  <li>Étape 1</li>\n  <li>Étape 2</li>\n</ol>' },
        { tag: '<li>', usage: 'Élément de liste. Toujours enfant de <ul> ou <ol>.', code: '<li>Un élément</li>' },
      ],
      preview: (
        <div className="p-4 grid grid-cols-2 gap-4 text-[14px]">
          <div>
            <p className="text-[11px] text-slate-400 uppercase tracking-widest mb-2">ul — puces</p>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <p className="text-[11px] text-slate-400 uppercase tracking-widest mb-2">ol — numéros</p>
            <ol className="list-decimal list-inside text-slate-700 space-y-1">
              <li>Installer VS Code</li>
              <li>Créer index.html</li>
              <li>Coder !</li>
            </ol>
          </div>
        </div>
      ),
    },
    {
      group: 'Médias & Liens',
      color: 'orange',
      tags: [
        { tag: '<a>', usage: 'Lien hypertexte. L\'attribut href définit la destination. target="_blank" ouvre dans un nouvel onglet.', code: '<a href="https://google.com" target="_blank">Google</a>' },
        { tag: '<img>', usage: 'Image. src = chemin, alt = description pour accessibilité et SEO. Balise orpheline.', code: '<img src="photo.jpg" alt="Description">' },
        { tag: '<video>', usage: 'Vidéo HTML5 native. Attributs : controls, autoplay, loop, muted.', code: '<video src="film.mp4" controls></video>' },
      ],
      preview: (
        <div className="p-4 space-y-3 text-[14px]">
          <a href="#" className="text-blue-600 underline font-medium">Un lien cliquable →</a>
          <div className="bg-slate-100 rounded-xl h-20 flex items-center justify-center text-slate-400 text-[12px]">
            📷 &lt;img src="photo.jpg" alt="..."&gt;
          </div>
          <div className="bg-slate-900 rounded-xl h-12 flex items-center justify-center text-slate-400 text-[12px]">
            🎬 &lt;video controls&gt;&lt;/video&gt;
          </div>
        </div>
      ),
    },
    {
      group: 'Sémantique',
      color: 'pink',
      tags: [
        { tag: '<header>', usage: 'En-tête de page ou de section. Contient logo, nav. Balise HTML5 sémantique.', code: '<header>\n  <nav>...</nav>\n</header>' },
        { tag: '<main>', usage: 'Contenu principal unique de la page. Un seul par document.', code: '<main>\n  <section>...</section>\n</main>' },
        { tag: '<section>', usage: 'Section thématique. Regroupe du contenu lié. Doit idéalement contenir un titre.', code: '<section>\n  <h2>Titre</h2>\n</section>' },
        { tag: '<article>', usage: 'Contenu autonome et réutilisable : article de blog, carte produit.', code: '<article>\n  <h2>Post</h2>\n</article>' },
        { tag: '<footer>', usage: 'Pied de page. Mentions légales, liens secondaires, infos de contact.', code: '<footer>\n  <p>© 2025</p>\n</footer>' },
        { tag: '<div>', usage: 'Conteneur générique sans sémantique. À utiliser quand aucune balise sémantique ne convient.', code: '<div class="wrapper">...</div>' },
      ],
      preview: (
        <div className="p-3 border border-slate-200 rounded-xl text-[11px] font-mono space-y-1">
          <div className="border border-blue-200 bg-blue-50 rounded px-2 py-1 text-blue-700">&lt;header&gt; — logo, nav</div>
          <div className="border border-emerald-200 bg-emerald-50 rounded px-2 py-1 text-emerald-700 ml-2">&lt;main&gt;</div>
          <div className="border border-violet-200 bg-violet-50 rounded px-2 py-1 text-violet-700 ml-4">&lt;section&gt; — thème 1</div>
          <div className="border border-orange-200 bg-orange-50 rounded px-2 py-1 text-orange-700 ml-4">&lt;article&gt; — contenu</div>
          <div className="border border-emerald-200 bg-emerald-50 rounded px-2 py-1 text-emerald-700 ml-2">&lt;/main&gt;</div>
          <div className="border border-pink-200 bg-pink-50 rounded px-2 py-1 text-pink-700">&lt;footer&gt; — copyright</div>
        </div>
      ),
    },
  ];

  const colorMap = {
    blue: { tab: 'bg-blue-600 text-white', badge: 'bg-blue-50 text-blue-700 border-blue-100' },
    violet: { tab: 'bg-violet-600 text-white', badge: 'bg-violet-50 text-violet-700 border-violet-100' },
    emerald: { tab: 'bg-emerald-600 text-white', badge: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    orange: { tab: 'bg-orange-500 text-white', badge: 'bg-orange-50 text-orange-700 border-orange-100' },
    pink: { tab: 'bg-pink-600 text-white', badge: 'bg-pink-50 text-pink-700 border-pink-100' },
  };

  const current = tags[active];
  const colors = colorMap[current.color];

  return (
    <div>
      {/* Onglets */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-xl text-[13px] font-bold transition-all ${
              active === i ? colors.tab : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.group}
          </button>
        ))}
      </div>

      {/* Contenu */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Liste des balises */}
        <div className="space-y-3">
          {current.tags.map((t, i) => (
            <div key={i} className={`bg-white border rounded-2xl p-4 ${colors.badge}`}>
              <div className="flex items-start gap-3">
                <code className="font-mono font-bold text-[13px] flex-shrink-0 mt-0.5">{t.tag}</code>
                <p className="text-[13px] text-slate-600 leading-relaxed">{t.usage}</p>
              </div>
              <pre className="mt-3 bg-slate-900 text-emerald-400 rounded-xl p-3 text-[12px] font-mono overflow-x-auto whitespace-pre-wrap">
                {t.code}
              </pre>
            </div>
          ))}
        </div>

        {/* Aperçu rendu */}
        <div>
          <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-[11px] text-slate-400 ml-2">Aperçu navigateur</span>
            </div>
            {current.preview}
          </div>

          {/* Tip sémantique */}
          <div className="mt-4 bg-blue-50 border border-blue-100 rounded-2xl p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-1">💡 Sémantique HTML</p>
            <p className="text-[13px] text-blue-900 leading-relaxed">
              Utiliser les bonnes balises améliore le <strong>SEO</strong> (référencement Google), 
              l'<strong>accessibilité</strong> (lecteurs d'écran) et la <strong>lisibilité</strong> du code. 
              Un <code className="font-mono bg-blue-100 px-1 rounded">&lt;header&gt;</code> dit plus 
              qu'un <code className="font-mono bg-blue-100 px-1 rounded">&lt;div id="header"&gt;</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Attributs HTML ───────────────────────────────────────────────────────────

function AttributesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <div className="bg-slate-900 rounded-2xl p-6 font-mono text-[13px] leading-loose">
          <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-3">Anatomie complète avec attributs</p>
          <p>
            <span className="text-pink-400">{'<a'}</span>
            {' '}
            <span className="text-sky-400">href</span>
            <span className="text-slate-400">=</span>
            <span className="text-emerald-400">"https://google.com"</span>
          </p>
          <p className="pl-4">
            <span className="text-sky-400">target</span>
            <span className="text-slate-400">=</span>
            <span className="text-emerald-400">"_blank"</span>
          </p>
          <p className="pl-4">
            <span className="text-sky-400">rel</span>
            <span className="text-slate-400">=</span>
            <span className="text-emerald-400">"noopener"</span>
            <span className="text-pink-400">{'>'}</span>
          </p>
          <p className="pl-4 text-white">Visiter Google</p>
          <p><span className="text-pink-400">{'</a>'}</span></p>

          <div className="mt-4 border-t border-slate-700 pt-4">
            <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-3">Image avec tous ses attributs</p>
            <p>
              <span className="text-pink-400">{'<img'}</span>
            </p>
            <p className="pl-4">
              <span className="text-sky-400">src</span>
              <span className="text-slate-400">=</span>
              <span className="text-emerald-400">"photo.jpg"</span>
            </p>
            <p className="pl-4">
              <span className="text-sky-400">alt</span>
              <span className="text-slate-400">=</span>
              <span className="text-emerald-400">"Portrait de Marie"</span>
            </p>
            <p className="pl-4">
              <span className="text-sky-400">width</span>
              <span className="text-slate-400">=</span>
              <span className="text-orange-400">"800"</span>
            </p>
            <p className="pl-4">
              <span className="text-sky-400">loading</span>
              <span className="text-slate-400">=</span>
              <span className="text-emerald-400">"lazy"</span>
              <span className="text-pink-400">{'>'}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {[
          {
            attr: 'href', tag: '<a>', color: 'sky',
            desc: 'URL de destination du lien. Peut être absolue (https://...) ou relative (./page.html).',
            example: 'href="https://google.com"',
          },
          {
            attr: 'src', tag: '<img> <video>', color: 'emerald',
            desc: 'Chemin vers le fichier source. Relatif au fichier HTML ou URL complète.',
            example: 'src="images/photo.jpg"',
          },
          {
            attr: 'alt', tag: '<img>', color: 'amber',
            desc: 'Texte alternatif si l\'image ne charge pas. Obligatoire pour l\'accessibilité et le SEO.',
            example: 'alt="Logo de la société"',
          },
          {
            attr: 'class', tag: 'Toutes', color: 'violet',
            desc: 'Identifiant CSS réutilisable. Plusieurs classes séparées par un espace.',
            example: 'class="card active"',
          },
          {
            attr: 'id', tag: 'Toutes', color: 'pink',
            desc: 'Identifiant unique dans la page. Pour le CSS ciblé ou le JavaScript.',
            example: 'id="menu-principal"',
          },
        ].map((a) => {
          const cMap = {
            sky: 'bg-sky-50 border-sky-100 text-sky-700',
            emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700',
            amber: 'bg-amber-50 border-amber-100 text-amber-700',
            violet: 'bg-violet-50 border-violet-100 text-violet-700',
            pink: 'bg-pink-50 border-pink-100 text-pink-700',
          };
          return (
            <div key={a.attr} className={`border rounded-xl p-3 ${cMap[a.color]}`}>
              <div className="flex items-center gap-2 mb-1">
                <code className="font-mono font-bold text-[13px]">{a.attr}</code>
                <span className="text-[11px] opacity-60">{a.tag}</span>
              </div>
              <p className="text-[12px] opacity-80 leading-relaxed mb-1">{a.desc}</p>
              <code className="text-[11px] font-mono opacity-70">{a.example}</code>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Mini projet : créer ta première page ────────────────────────────────────

function FirstPageProject() {
  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden">
      <div className="px-5 py-3 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-slate-400 text-[11px] font-mono">index.html — Ma première page complète</span>
        <span className="text-emerald-400 text-[11px]">✓ Valide</span>
      </div>
      <pre className="p-5 font-mono text-[12px] leading-7 overflow-x-auto">
        <span className="text-slate-500">{'<!DOCTYPE html>'}</span>{'\n'}
        <span className="text-pink-400">{'<html'}</span> <span className="text-sky-400">lang</span>=<span className="text-emerald-400">"fr"</span><span className="text-pink-400">{'>'}</span>{'\n'}
        {'\n'}
        <span className="text-slate-500">{'  <!-- La tête invisible -->'}</span>{'\n'}
        {'  '}<span className="text-violet-400">{'<head>'}</span>{'\n'}
        {'    '}<span className="text-pink-400">{'<meta'}</span> <span className="text-sky-400">charset</span>=<span className="text-emerald-400">"UTF-8"</span><span className="text-pink-400">{'>'}</span>{'\n'}
        {'    '}<span className="text-pink-400">{'<title>'}</span><span className="text-white">Ma Première Page</span><span className="text-pink-400">{'</title>'}</span>{'\n'}
        {'    '}<span className="text-pink-400">{'<link'}</span> <span className="text-sky-400">rel</span>=<span className="text-emerald-400">"stylesheet"</span> <span className="text-sky-400">href</span>=<span className="text-emerald-400">"style.css"</span><span className="text-pink-400">{'>'}</span>{'\n'}
        {'  '}<span className="text-violet-400">{'</head>'}</span>{'\n'}
        {'\n'}
        <span className="text-slate-500">{'  <!-- Le corps visible -->'}</span>{'\n'}
        {'  '}<span className="text-emerald-400">{'<body>'}</span>{'\n'}
        {'\n'}
        {'    '}<span className="text-orange-400">{'<header>'}</span>{'\n'}
        {'      '}<span className="text-pink-400">{'<h1>'}</span><span className="text-white">Bienvenue sur mon site</span><span className="text-pink-400">{'</h1>'}</span>{'\n'}
        {'    '}<span className="text-orange-400">{'</header>'}</span>{'\n'}
        {'\n'}
        {'    '}<span className="text-orange-400">{'<main>'}</span>{'\n'}
        {'      '}<span className="text-orange-400">{'<section>'}</span>{'\n'}
        {'        '}<span className="text-pink-400">{'<h2>'}</span><span className="text-white">À propos de moi</span><span className="text-pink-400">{'</h2>'}</span>{'\n'}
        {'        '}<span className="text-pink-400">{'<p>'}</span><span className="text-white">J'apprends le <strong className="text-pink-300">HTML</strong> avec passion.</span><span className="text-pink-400">{'</p>'}</span>{'\n'}
        {'        '}<span className="text-pink-400">{'<img'}</span> <span className="text-sky-400">src</span>=<span className="text-emerald-400">"moi.jpg"</span> <span className="text-sky-400">alt</span>=<span className="text-emerald-400">"Ma photo"</span><span className="text-pink-400">{'>'}</span>{'\n'}
        {'      '}<span className="text-orange-400">{'</section>'}</span>{'\n'}
        {'\n'}
        {'      '}<span className="text-orange-400">{'<section>'}</span>{'\n'}
        {'        '}<span className="text-pink-400">{'<h2>'}</span><span className="text-white">Mes compétences</span><span className="text-pink-400">{'</h2>'}</span>{'\n'}
        {'        '}<span className="text-pink-400">{'<ul>'}</span>{'\n'}
        {'          '}<span className="text-pink-400">{'<li>'}</span><span className="text-white">HTML — Structure</span><span className="text-pink-400">{'</li>'}</span>{'\n'}
        {'          '}<span className="text-pink-400">{'<li>'}</span><span className="text-white">CSS — Style</span><span className="text-pink-400">{'</li>'}</span>{'\n'}
        {'        '}<span className="text-pink-400">{'</ul>'}</span>{'\n'}
        {'      '}<span className="text-orange-400">{'</section>'}</span>{'\n'}
        {'    '}<span className="text-orange-400">{'</main>'}</span>{'\n'}
        {'\n'}
        {'    '}<span className="text-orange-400">{'<footer>'}</span>{'\n'}
        {'      '}<span className="text-pink-400">{'<p>'}</span><span className="text-white">© 2025 Mon Site</span><span className="text-pink-400">{'</p>'}</span>{'\n'}
        {'    '}<span className="text-orange-400">{'</footer>'}</span>{'\n'}
        {'\n'}
        {'  '}<span className="text-emerald-400">{'</body>'}</span>{'\n'}
        <span className="text-pink-400">{'</html>'}</span>
      </pre>
    </div>
  );
}

// ─── Composant principal ─────────────────────────────────────────────────────

export default function HtmlBasics() {
  return (
    <div className="flex flex-col gap-12 animate-fadeIn">

      {/* ENTÊTE */}
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-[11px] uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600" />
          Chapitre 3 — HTML
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          Premiers pas <span className="text-blue-600">HTML</span>
        </h1>
        <p className="text-slate-500 text-lg mt-3 leading-relaxed max-w-xl">
          HTML est le langage de la structure. Tu vas apprendre à créer des balises, 
          organiser une page complète et donner du sens à ton contenu.
        </p>
        <ProgressBar current={3} total={10} />
      </header>

      {/* SECTION 1 : ANATOMIE */}
      <section>
        <SectionLabel text="Concept de base" />
        <h2 className="text-2xl font-bold mb-2">Anatomie d'une balise</h2>
        <p className="text-slate-500 mb-5 max-w-xl">
          Tout le HTML repose sur des balises qui <em>entourent</em> du contenu pour lui donner
          un rôle. Survole chaque partie pour comprendre son rôle.
        </p>
        <TagAnatomy />
      </section>

      {/* SECTION 2 : STRUCTURE */}
      <section>
        <SectionLabel text="Structure d'une page" />
        <h2 className="text-2xl font-bold mb-2">L'arbre HTML complet</h2>
        <p className="text-slate-500 mb-5 max-w-xl">
          Chaque fichier HTML suit toujours la même structure de base. Survole les balises
          pour comprendre le rôle de chacune.
        </p>
        <HtmlStructure />
      </section>

      {/* SECTION 3 : BALISES */}
      <section>
        <SectionLabel text="Référence des balises" />
        <h2 className="text-2xl font-bold mb-2">Les balises indispensables</h2>
        <p className="text-slate-500 mb-5 max-w-xl">
          Clique sur chaque catégorie pour voir les balises, leur usage, un exemple de code
          et un aperçu du rendu dans le navigateur.
        </p>
        <EssentialTags />
      </section>

      {/* SECTION 4 : ATTRIBUTS */}
      <section>
        <SectionLabel text="Attributs HTML" />
        <h2 className="text-2xl font-bold mb-2">Personnaliser les balises avec des attributs</h2>
        <p className="text-slate-500 mb-5 max-w-xl">
          Les attributs donnent des informations supplémentaires à une balise.
          Ils s'écrivent toujours dans la balise ouvrante.
        </p>
        <AttributesSection />
      </section>

      {/* SECTION 5 : DÉMO INTERACTIVE */}
      <section>
        <SectionLabel text="Démo interactive" />
        <h2 className="text-2xl font-bold mb-2">Vois le HTML en action</h2>
        <p className="text-slate-500 mb-5">
          Bascule entre le HTML seul et le résultat avec CSS. Observe comment la structure
          HTML reste identique — seul le style change.
        </p>
        <InteractiveDemo demo={demoBasics} />
      </section>

      {/* SECTION 6 : MINI PROJET */}
      <section>
        <SectionLabel text="Mini projet" />
        <h2 className="text-2xl font-bold mb-2">Ta première page complète</h2>
        <p className="text-slate-500 mb-5">
          Voici la structure d'une vraie page HTML valide avec header, main, sections et footer.
          Copie-la dans VS Code et ouvre-la avec Live Server.
        </p>
        <FirstPageProject />
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2.5 text-[13px] text-emerald-800">
            <span>✅</span> Code valide W3C
          </div>
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 text-[13px] text-blue-800">
            <span>♿</span> Accessible (attributs alt, lang)
          </div>
          <div className="flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-xl px-4 py-2.5 text-[13px] text-violet-800">
            <span>🔍</span> SEO-friendly (h1 unique, title)
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-4 py-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-sm font-medium italic">
          Structure maîtrisée ? On passe à l'interactivité avec les formulaires. 🎯
        </p>
        <Link
          to="/lesson/forms"
          className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
        >
          Leçon Suivante : Formulaires →
        </Link>
      </footer>

    </div>
  );
}