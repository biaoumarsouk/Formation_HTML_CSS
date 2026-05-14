import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { coursePlan } from '../data/lessons';

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const chapters = [...new Set(coursePlan.map(l => l.chapter))];

  return (
    <>
      {/* OVERLAY : Fond noir transparent quand le menu est ouvert sur mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:h-screen
      `}>
        <div className="flex flex-col h-full">
          
          {/* LOGO SECTION */}
          <div className="p-6 border-b border-slate-50 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              {/* REMPLACE CETTE BALISE IMG PAR TON LOGO REEL */}
              <img 
                src="/logo.png" 
                alt="Logo Formation" 
                className="w-10 h-10 object-contain rounded-lg"
                onError={(e) => e.target.src = "https://placehold.co/40x40?text=L"} // Image de secours
              />
              <div>
                <h2 className="font-black text-slate-800 leading-none tracking-tighter">FORMATION</h2>
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Master Class</span>
              </div>
            </Link>
            
            {/* Bouton pour fermer sur mobile uniquement */}
            <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-400 p-2">
              ✕
            </button>
          </div>

          {/* NAVIGATION */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-8 custom-scrollbar">
            {chapters.map((chapter) => (
              <div key={chapter}>
                <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                  {chapter}
                </h3>
                <div className="space-y-1">
                  {coursePlan
                    .filter(l => l.chapter === chapter)
                    .map((lesson) => (
                      <Link
                        key={lesson.id}
                        to={lesson.path}
                        onClick={() => setIsOpen(false)} // Ferme le menu après clic sur mobile
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                          location.pathname === lesson.path 
                          ? 'bg-blue-50 text-blue-700 shadow-sm' 
                          : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full transition-all ${
                          location.pathname === lesson.path ? 'bg-blue-600 scale-125' : 'bg-slate-200 group-hover:bg-slate-400'
                        }`}></div>
                        <span className="text-sm font-bold truncate">{lesson.title}</span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </nav>

          {/* FOOTER SIDEBAR */}
          <div className="p-6 border-t border-slate-100 bg-slate-50/50">
            <button 
              onClick={() => { localStorage.removeItem('user_auth'); window.location.reload(); }}
              className="w-full flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-red-500 transition-colors"
            >
              <span>↪</span> Déconnexion
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}