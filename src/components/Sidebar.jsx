import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { coursePlan } from '../data/lessons';

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const chapters = [...new Set(coursePlan.map(l => l.chapter))];

  return (
    <>
      {/* OVERLAY MOBILE */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ASIDE */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:h-screen flex flex-col
      `}>
        {/* LOGO */}
        <div className="p-6 border-b border-slate-50">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-100">
               H
             </div>
             <div>
               <h2 className="font-black text-slate-800 leading-none tracking-tighter">MASTER</h2>
               <span className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">HTML & CSS</span>
             </div>
          </div>
        </div>

        {/* NAVIGATION PAR CHAPITRE */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-8 scrollbar-hide">
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
                      onClick={() => setIsOpen(false)}
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

        {/* BAS DE SIDEBAR (Optionnel : Liens réseaux ou aide) */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/50">
           <p className="text-[10px] text-slate-400 font-bold text-center">Version 1.0.4 - 2025</p>
        </div>
      </aside>
    </>
  );
}