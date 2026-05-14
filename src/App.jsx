import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import des composants
import Sidebar from './components/Sidebar';

// Import des pages de leçons
import IntroWeb from './pages/lessons/IntroWeb';
import Installation from './pages/lessons/Installation';
import HtmlBasics from './pages/lessons/HtmlBasics';
import Forms from './pages/lessons/Forms';
import CssIntro from './pages/lessons/CssIntro';
import Layout from './pages/lessons/Layout';
import Responsive from './pages/lessons/Responsive';
import Animations from './pages/lessons/Animations';
import RealDesigns from './pages/lessons/RealDesigns';
import FinalProject from './pages/lessons/FinalProject';
import Exercises from './pages/lessons/Exercises';
import Bonus from './pages/lessons/Bonus';
import Resources from './pages/lessons/Resources';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col md:flex-row h-screen bg-slate-50 overflow-hidden">
        
        {/* 1. HEADER MOBILE (Indispensable pour Chariow mobile) */}
        <header className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">
              M
            </div>
            <span className="font-black text-slate-800 text-sm tracking-tighter uppercase">Master HTML/CSS</span>
          </div>
          <button 
            onClick={() => setMenuOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 rounded-lg font-bold text-xs active:scale-95 transition-transform"
          >
            <span className="text-lg">☰</span> MENU
          </button>
        </header>

        {/* 2. SIDEBAR */}
        <Sidebar isOpen={menuOpen} setIsOpen={setMenuOpen} />

        {/* 3. ZONE DE CONTENU DÉFILABLE */}
        <main className="flex-1 h-full overflow-y-auto bg-slate-50 relative scroll-smooth">
          <div className="max-w-4xl mx-auto px-6 py-8 md:px-12 md:py-16 min-h-full flex flex-col">
            
            <div className="flex-1">
              <Routes>
                <Route path="/lesson/intro" element={<IntroWeb />} />
                <Route path="/lesson/setup" element={<Installation />} />
                <Route path="/lesson/html-basics" element={<HtmlBasics />} />
                <Route path="/lesson/forms" element={<Forms />} />
                <Route path="/lesson/css-intro" element={<CssIntro />} />
                <Route path="/lesson/layout" element={<Layout />} />
                <Route path="/lesson/responsive" element={<Responsive />} />
                <Route path="/lesson/animations" element={<Animations />} />
                <Route path="/lesson/real-designs" element={<RealDesigns />} />
                <Route path="/lesson/final-project" element={<FinalProject />} />
                <Route path="/lesson/exercises" element={<Exercises />} />
                <Route path="/lesson/bonus" element={<Bonus />} />
                <Route path="/lesson/resources" element={<Resources />} />
                
                {/* Redirection par défaut vers la première page */}
                <Route path="*" element={<Navigate to="/lesson/intro" />} />
              </Routes>
            </div>

            <footer className="mt-20 pt-8 border-t border-slate-200 text-center">
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
                Formation Master HTML & CSS © 2026 · Apprentissage Interactif
              </p>
            </footer>
          </div>
        </main>

      </div>
    </Router>
  );
}

export default App;