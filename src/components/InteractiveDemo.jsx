// src/components/InteractiveDemo.jsx
import React, { useState } from 'react';

export default function InteractiveDemo({ demo }) {
  const [showCss, setShowCss] = useState(false);

  return (
    <div className="mt-8 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
      <div className="p-4 bg-white border-b flex flex-wrap justify-between items-center gap-4">
        <div className="text-sm font-medium text-slate-500">{demo.desc}</div>
        <div className="flex bg-slate-200 p-1 rounded-xl">
          <button 
            onClick={() => setShowCss(false)}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition ${!showCss ? 'bg-red-500 text-white shadow' : 'text-slate-600'}`}
          >
            HTML Brut ❌
          </button>
          <button 
            onClick={() => setShowCss(true)}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition ${showCss ? 'bg-green-600 text-white shadow' : 'text-slate-600'}`}
          >
            HTML + CSS ✅
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Code View */}
        <div className="p-6 bg-[#1e1e2e] text-blue-300 font-mono text-sm overflow-x-auto">
          <div className="mb-4">
            <span className="text-slate-500 block mb-1 uppercase text-[10px] tracking-widest font-sans">Code HTML</span>
            <pre><code>{demo.html}</code></pre>
          </div>
          {showCss && (
            <div className="mt-6 pt-6 border-t border-slate-700">
              <span className="text-slate-500 block mb-1 uppercase text-[10px] tracking-widest font-sans">Styles CSS appliqués</span>
              <pre className="text-green-400"><code>{demo.css}</code></pre>
            </div>
          )}
        </div>

        {/* Live Preview */}
        <div className="p-10 bg-slate-200 flex items-center justify-center min-h-[300px]">
          {/* On injecte le style dynamiquement si showCss est vrai */}
          {showCss && <style>{demo.css}</style>}
          <div dangerouslySetInnerHTML={{ __html: demo.html }} />
        </div>
      </div>
    </div>
  );
}