
import React, { useState } from 'react';

/**
 * GOOGLE SHEETS INTEGRATION ACTIVATED
 * URL: https://script.google.com/macros/s/AKfycbypeQJ7ZeLOTJV-Ig8KB3TiPoyP7VIqtG1-S0DXtZUfmkYeW2lAWlfftFcEuT0hLpo3dQ/exec
 */
// Explicitly typed as string to resolve comparison overlap error with placeholder
const GOOGLE_SHEET_URL: string = 'https://script.google.com/macros/s/AKfycbypeQJ7ZeLOTJV-Ig8KB3TiPoyP7VIqtG1-S0DXtZUfmkYeW2lAWlfftFcEuT0hLpo3dQ/exec';

const Apply: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      ...Object.fromEntries(formData.entries()),
      type: 'application',
      timestamp: new Date().toISOString()
    };

    try {
      // Comparison is now valid between string and string literal
      if (GOOGLE_SHEET_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
        await fetch(GOOGLE_SHEET_URL, {
          method: 'POST',
          mode: 'no-cors', 
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        // Simulation for development
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      setStatus('submitted');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  if (status === 'submitted') {
    return (
      <div className="pt-64 md:pt-80 pb-32 px-6 bg-[#0D110E] min-h-screen text-center">
        <div className="container mx-auto max-w-2xl animate-in fade-in zoom-in duration-1000">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-12 block">Confirmation</span>
          <h1 className="text-7xl md:text-9xl font-serif mb-12 italic text-[#E5E7E4] leading-[0.8] tracking-tight">Presence.</h1>
          <p className="text-neutral-400 font-light leading-relaxed text-2xl mb-20">
            Thank you for your inquiry. We review every application personally to protect the integrity of the room. Expect a response within seven days.
          </p>
          <div className="w-24 h-[1px] bg-[#94A187]/30 mx-auto mb-20"></div>
          <p className="text-neutral-600 text-[11px] tracking-[0.4em] uppercase font-bold">
            membership@thrivehouse.com
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-48 md:pt-64 pb-32 px-6 bg-[#0D110E]">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-24">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-8 block">Application</span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif mb-12 italic text-[#E5E7E4] leading-[0.8] tracking-tight">Apply.</h1>
          <p className="text-neutral-500 font-light leading-relaxed text-xl max-w-2xl">
            We prioritize curiosity, contribution, and character. Tell us how you intend to spend your evenings in our sanctuary.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-20 md:space-y-24">
          <div className="space-y-8">
            <label className="text-[11px] uppercase tracking-[0.5em] text-[#94A187] font-bold">Identity</label>
            <input 
              name="fullName"
              required
              type="text" 
              className="w-full bg-transparent border-b border-white/10 py-8 focus:outline-none focus:border-[#94A187] transition-all placeholder:text-neutral-800 text-[#E5E7E4] text-3xl font-serif italic"
              placeholder="Your Full Name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <label className="text-[11px] uppercase tracking-[0.5em] text-[#94A187] font-bold">Digital Reach</label>
              <input 
                name="email"
                required
                type="email" 
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/10 py-8 focus:outline-none focus:border-[#94A187] transition-all text-[#E5E7E4] text-xl font-light italic"
              />
            </div>
            <div className="space-y-8">
              <label className="text-[11px] uppercase tracking-[0.5em] text-[#94A187] font-bold">Chapter</label>
              <select name="chapter" className="w-full bg-transparent border-b border-white/10 py-8 focus:outline-none focus:border-[#94A187] transition-all appearance-none text-[#E5E7E4] text-xl font-light italic cursor-pointer">
                <option value="london" className="bg-[#0D110E]">London</option>
                <option value="new-york" className="bg-[#0D110E]">New York</option>
                <option value="berlin" className="bg-[#0D110E]">Berlin</option>
                <option value="austin" className="bg-[#0D110E]">Austin</option>
                <option value="other" className="bg-[#0D110E]">Global Nomadic</option>
              </select>
            </div>
          </div>

          <div className="space-y-8">
            <label className="text-[11px] uppercase tracking-[0.5em] text-[#94A187] font-bold">What does a meaningful social night look like to you?</label>
            <textarea 
              name="meaningfulNight"
              required
              rows={4}
              className="w-full bg-transparent border-b border-white/10 py-8 focus:outline-none focus:border-[#94A187] transition-all resize-none text-[#E5E7E4] text-2xl font-light leading-relaxed italic"
            ></textarea>
          </div>

          <div className="space-y-8">
            <label className="text-[11px] uppercase tracking-[0.5em] text-[#94A187] font-bold">What's one perspective you'd bring to a midnight salon?</label>
            <textarea 
              name="perspective"
              required
              rows={4}
              className="w-full bg-transparent border-b border-white/10 py-8 focus:outline-none focus:border-[#94A187] transition-all resize-none text-[#E5E7E4] text-2xl font-light leading-relaxed italic"
            ></textarea>
          </div>

          <div className="space-y-8">
            <label className="text-[11px] uppercase tracking-[0.5em] text-[#94A187] font-bold">How does waking up with absolute clarity change the way you live?</label>
            <textarea 
              name="clarityImpact"
              required
              rows={4}
              className="w-full bg-transparent border-b border-white/10 py-8 focus:outline-none focus:border-[#94A187] transition-all resize-none text-[#E5E7E4] text-2xl font-light leading-relaxed italic"
            ></textarea>
          </div>

          <div className="pt-20">
            <button 
              disabled={status === 'submitting'}
              type="submit" 
              className={`group relative w-full md:w-auto px-20 md:px-24 py-7 md:py-8 bg-[#94A187] text-[#0D110E] text-[11px] tracking-[0.6em] uppercase font-bold transition-all duration-700 rounded-sm shadow-2xl ${status === 'submitting' ? 'opacity-50 cursor-wait' : 'hover:bg-white active:scale-95'}`}
            >
              <span className={status === 'submitting' ? 'opacity-0' : 'opacity-100'}>
                Submit Application
              </span>
              {status === 'submitting' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-[#0D110E]/30 border-t-[#0D110E] rounded-full animate-spin"></div>
                </div>
              )}
            </button>
            {status === 'error' && (
              <p className="mt-6 text-red-400 text-[10px] tracking-widest uppercase font-bold animate-pulse">
                An error occurred. Please verify your connection and try again.
              </p>
            )}
            <p className="mt-16 text-[10px] text-neutral-600 text-center md:text-left leading-relaxed tracking-[0.4em] uppercase font-bold">
              WE PROTECT THE ROOM.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
