import React from 'react';

const res = [
  { name: "MDN Web Docs", cat: "Documentation", desc: "La bible officielle de HTML et CSS.", url: "https://developer.mozilla.org", color: "bg-slate-900" },
  { name: "Google Fonts", cat: "Typographie", desc: "Des milliers de polices gratuites pour vos sites.", url: "https://fonts.google.com", color: "bg-red-500" },
  { name: "Coolors", cat: "Design", desc: "Générateur de palettes de couleurs magiques.", url: "https://coolors.co", color: "bg-blue-500" },
  { name: "Font Awesome", cat: "Icones", desc: "La plus grande bibliothèque d'icônes au monde.", url: "https://fontawesome.com", color: "bg-amber-500" },
  { name: "CSS Tricks", cat: "Apprentissage", desc: "Des astuces incroyables pour devenir un pro du CSS.", url: "https://css-tricks.com", color: "bg-orange-500" },
  { name: "Unsplash", cat: "Images", desc: "Photos libres de droits en haute résolution.", url: "https://unsplash.com", color: "bg-emerald-500" },
];

export default function Resources() {
  return (
    <div className="flex flex-col gap-10 animate-fadeIn">
      <header>
        <div className="flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest mb-4">
          <span className="w-8 h-[2px] bg-blue-600"></span>
          Ressources
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
          La boîte à <span className="text-blue-600">Outils</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {res.map((item, i) => (
          <a 
            key={i} 
            href={item.url} 
            target="_blank" 
            rel="noreferrer"
            className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
          >
            <div className={`w-12 h-12 ${item.color} rounded-2xl mb-6 shadow-lg flex items-center justify-center text-white font-black group-hover:scale-110 transition-transform`}>
              {item.name.charAt(0)}
            </div>
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{item.cat}</span>
            <h3 className="text-lg font-black text-slate-800 mt-1 mb-2">{item.name}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold text-slate-300 group-hover:text-blue-600 transition-colors">
               Visiter le site <span>→</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-12 bg-white p-10 rounded-[3rem] border border-slate-100 text-center">
        <h2 className="text-2xl font-black mb-4 tracking-tighter">Besoin d'aide ?</h2>
        <p className="text-slate-500 text-sm max-w-md mx-auto mb-8">
           N'oubliez pas que la communauté est immense. Si vous bloquez, cherchez sur Google ou posez votre question sur Stack Overflow.
        </p>
        <a href="mailto:support@votredomaine.com" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-600 transition shadow-xl">
           Contacter le support
        </a>
      </div>
    </div>
  );
}