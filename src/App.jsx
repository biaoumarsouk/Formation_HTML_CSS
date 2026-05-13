import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import des composants
import Sidebar from './components/Sidebar';
import Login from './pages/Login';

// Import des pages de leçons (Assurez-vous que ces fichiers existent dans src/pages/lessons/)
import IntroWeb from './pages/lessons/IntroWeb';
import Installation from './pages/lessons/Installation';
import HtmlBasics from './pages/lessons/HtmlBasics';
// Importez ici les autres pages au fur et à mesure de leur création...
// import Forms from './pages/lessons/Forms';
// import CssIntro from './pages/lessons/CssIntro';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // Vérification de la connexion au chargement
  useEffect(() => {
    const authStatus = localStorage.getItem('user_auth');
    if (authStatus === 'true') {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuth(true);
    localStorage.setItem('user_auth', 'true');
  };

  if (loading) return null; // Évite un flash blanc au chargement

  return (
    <Router>
      <Routes>
        {/* PAGE DE CONNEXION */}
        <Route 
          path="/login" 
          element={!isAuth ? <Login onLogin={handleLogin} /> : <Navigate to="/lesson/intro" />} 
        />

        {/* INTERFACE DE FORMATION (Routes protégées) */}
        <Route
          path="/*"
          element={
            isAuth ? (
              <div className="flex flex-col md:flex-row h-screen bg-slate-50 overflow-hidden">
                
                {/* 1. HEADER MOBILE (Visible uniquement sur smartphone/tablette) */}
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

                {/* 2. SIDEBAR (Navigation latérale) */}
                <Sidebar isOpen={menuOpen} setIsOpen={setMenuOpen} />

                {/* 3. ZONE DE CONTENU (Défilable) */}
                <main className="flex-1 h-full overflow-y-auto bg-slate-50 relative scroll-smooth">
                  {/* Conteneur de la leçon avec marges pour la lecture */}
                  <div className="max-w-4xl mx-auto px-6 py-10 md:px-12 md:py-16 min-h-full flex flex-col">
                    
                    {/* Les pages s'affichent ici */}
                    <div className="flex-1">
                      <Routes>
                        <Route path="/lesson/intro" element={<IntroWeb />} />
                        <Route path="/lesson/setup" element={<Installation />} />
                        <Route path="/lesson/html-basics" element={<HtmlBasics />} />
                        
                        {/* Ajoutez vos nouvelles routes ici : */}
                        {/* <Route path="/lesson/forms" element={<Forms />} /> */}
                        
                        {/* Redirection automatique vers la 1ère leçon si l'URL est inconnue */}
                        <Route path="*" element={<Navigate to="/lesson/intro" />} />
                      </Routes>
                    </div>

                    {/* Footer discret en bas de chaque page de cours */}
                    <footer className="mt-20 pt-8 border-t border-slate-200 text-center">
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
                        Formation Master HTML & CSS © 2025 · Chariow
                      </p>
                    </footer>
                  </div>
                </main>

              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;