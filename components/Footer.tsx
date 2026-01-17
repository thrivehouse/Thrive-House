
import React, { useState } from 'react';

// Replace this with your Google Apps Script Web App URL
// Explicitly typed as string to resolve comparison overlap error with placeholder
const GOOGLE_SHEET_URL: string = 'https://script.google.com/macros/s/AKfycbypeQJ7ZeLOTJV-Ig8KB3TiPoyP7VIqtG1-S0DXtZUfmkYeW2lAWlfftFcEuT0hLpo3dQ/exec';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Comparison is now valid between string and string literal
      if (GOOGLE_SHEET_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({ email, type: 'newsletter', timestamp: new Date().toISOString() }),
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        await new Promise(r => setTimeout(r, 1000));
      }
      setStatus('submitted');
      setEmail('');
    } catch (e) {
      console.error(e);
      setStatus('idle');
    }
  };

  return (
    <footer className="py-32 border-t border-white/5 bg-[#0D110E]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="text-2xl font-light tracking-[0.3em] uppercase">
              THRIVE <span className="text-[#94A187] font-medium italic">HOUSE</span>
            </div>
            <p className="text-neutral-500 font-light text-sm max-w-sm leading-relaxed">
              A private evening society for those who prioritize tomorrow. Curated connection optimized for clarity and living fully.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-white">Join the Waitlist</h4>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                className="bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-[#94A187] text-sm text-neutral-300 transition-all italic font-light"
              />
              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#94A187] hover:text-white transition-all text-left"
              >
                {status === 'idle' ? 'Submit' : status === 'submitting' ? 'Processing...' : 'Signed Up'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-white">Chapters</h4>
            <div className="flex flex-col gap-3">
              <span className="text-neutral-400 text-[10px] tracking-widest uppercase border-b border-[#94A187]/20 pb-1 w-fit">Boston</span>
              <span className="text-neutral-600 text-[10px] tracking-widest uppercase opacity-50">Expanding Globally</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-20 border-t border-white/5">
          <div className="text-[9px] tracking-[0.6em] uppercase text-neutral-700 font-bold">
            © {new Date().getFullYear()} THRIVE HOUSE.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
