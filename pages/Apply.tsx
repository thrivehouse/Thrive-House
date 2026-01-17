
import React, { useState } from 'react';

/**
 * GOOGLE SHEETS INTEGRATION ACTIVATED
 */
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
            Thank you for your inquiry. We personally review every application based on alignment and availability to protect the integrity of the room.
          </p>
          <div className="w-24 h-[1px] bg-[#94A187]/30 mx-auto mb-20"></div>
          <p className="text-neutral-600 text-[11px] tracking-[0.4em] uppercase font-bold">
            membership@thrivehouse.com
          </p>
        </div>
      </div>
    );
  }

  const labelStyle = "text-[11px] uppercase tracking-[0.5em] text-[#94A187] font-bold block mb-2";

  return (
    <div className="pt-48 md:pt-64 pb-32 px-6 bg-[#0D110E]">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-24">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-8 block">Application</span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif mb-12 italic text-[#E5E7E4] leading-[0.8] tracking-tight">Apply.</h1>
          <p className="text-neutral-500 font-light leading-relaxed text-xl max-w-2xl">
            We prioritize curiosity, contribution, and character. Tell us how you intend to spend your evenings within our society.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-20 md:space-y-28">
          {/* Full Name Section */}
          <div className="space-y-4">
            <label className={labelStyle}>Your Full Name</label>
            <input 
              name="fullName"
              required
              type="text" 
              className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#94A187] transition-all placeholder:text-neutral-800 text-[#E5E7E4] text-3xl font-serif italic"
              placeholder=""
            />
          </div>

          {/* Email and Chapter Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-24">
            <div className="space-y-4">
              <label className={labelStyle}>Email Address</label>
              <input 
                name="email"
                required
                type="email" 
                placeholder=""
                className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#94A187] transition-all text-[#E5E7E4] text-xl font-light italic"
              />
            </div>
            <div className="space-y-4">
              <label className={labelStyle}>Chapter</label>
              <select name="chapter" className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#94A187] transition-all appearance-none text-[#E5E7E4] text-xl font-light italic cursor-pointer">
                <option value="boston" className="bg-[#0D110E]">Boston</option>
              </select>
            </div>
          </div>

          {/* Motivation Section */}
          <div className="space-y-6">
            <label className={labelStyle}>What are you most wanting to get out of Thrive House?</label>
            <textarea 
              name="motivation"
              required
              rows={4}
              className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#94A187] transition-all resize-none text-[#E5E7E4] text-2xl font-light leading-relaxed italic"
              placeholder="Share your intentions..."
            ></textarea>
          </div>

          <div className="pt-10">
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
