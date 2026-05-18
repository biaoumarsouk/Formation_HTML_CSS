// src/pages/Login.jsx
import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(false);

  const checkCode = (e) => {
    e.preventDefault();
    if (code.toUpperCase() === "XKWD7R2QM9NZ4BVT") { // Le code que vous mettrez dans le PDF
      onLogin();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] p-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="text-4xl mb-2">🚀</div>
          <h1 className="text-2xl font-bold text-slate-800">APPRENDRE HTML & CSS</h1>
          <p className="text-slate-500 text-sm">Entrez le code d'accès</p>
        </div>
        
        <form onSubmit={checkCode} className="space-y-4">
          <input 
            type="text" 
            placeholder="Code d'accès "
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-lg shadow-blue-200">
            Débloquer ma formation
          </button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center text-sm font-semibold">❌ Code incorrect.</p>}
      </div>
    </div>
  );
}