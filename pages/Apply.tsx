
import React, { useState, useRef } from 'react';

/**
 * GOOGLE SHEETS INTEGRATION
 * Target: Column A (fullName), Column B (email), Column C (chapter), Column D (importantExperience)
 */
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbypeQJ7ZeLOTJV-Ig8KB3TiPoyP7VIqtG1-S0DXtZUfmkYeW2lAWlfftFcEuT0hLpo3dQ/exec';

const Apply: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleIframeLoad = () => {
    if (status === 'submitting') {
      setStatus('submitted');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = () => {
    setStatus('submitting');
  };

  if (status === 'submitted') {
    return (
      <div className="pt-64 md:pt-80 pb-32 px-6 bg-[#0D110E] min-h-screen text-center">
        <div className="container mx-auto max-w-2xl animate-in fade-in zoom-in duration-1000">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-12 block">Confirmation</span>
          <h1 className="text-7xl md:text-9xl font-serif mb-12 italic text-[#E5E7E4] leading-[0.8] tracking-tight">Presence.</h1>
          <p className="text-neutral-400 font-light leading-relaxed text-2xl mb-20">
            Thank you for your application. We personally review every inquiry to protect the quality of connection within the society. You will hear from us shortly.
          </p>
          <div className="w-24 h-[1px] bg-[#94A187]/30 mx-auto"></div>
        </div>
      </div>
    );
  }

  const labelStyle = "text-[10px] uppercase tracking-[0.5em] text-[#94A187] font-bold block mb-4";
  const inputStyle = "w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-[#94A187] transition-all placeholder:text-neutral-800 text-[#E5E7E4] text-xl md:text-2xl font-serif italic";

  return (
    <div className="pt-48 md:pt-64 pb-32 px-6 bg-[#0D110E]">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-24">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-8 block text-center md:text-left">The Society</span>
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-serif mb-12 italic text-[#E5E7E4] leading-[0.8] tracking-tight text-center md:text-left">Apply.</h1>
          <p className="text-neutral-500 font-light leading-relaxed text-lg max-w-xl text-center md:text-left">
            Admission is based on curiosity, contribution, and character. We seek members who intend to give back to the room.
          </p>
        </div>

        {/* Hidden Iframe for high-reliability submission */}
        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          ref={iframeRef}
          style={{ display: 'none' }}
          onLoad={handleIframeLoad}
        ></iframe>

        <form 
          action={GOOGLE_SHEET_URL} 
          method="POST" 
          target="hidden_iframe"
          onSubmit={handleFormSubmit}
          className="space-y-20"
        >
          {/* Main Application Fields in order of A, B, C, D */}
          <div className="space-y-20">
            {/* Column A */}
            <div className="space-y-6">
              <label className={labelStyle}>Your Full Name</label>
              <input 
                name="fullName"
                required
                type="text" 
                className={inputStyle}
                placeholder="Identity"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              {/* Column B */}
              <div className="space-y-6">
                <label className={labelStyle}>Email Address</label>
                <input 
                  name="email"
                  required
                  type="email" 
                  className={inputStyle}
                  placeholder="Digital Address"
                />
              </div>
              {/* Column C */}
              <div className="space-y-6">
                <label className={labelStyle}>Chapter</label>
                <select name="chapter" className={inputStyle}>
                  <option value="boston" className="bg-[#0D110E]">Boston</option>
                  <option value="nomadic" className="bg-[#0D110E]">Nomadic (Other)</option>
                </select>
              </div>
            </div>

            {/* Column D */}
            <div className="space-y-6 pt-4">
              <label className={labelStyle}>What feels most important for you to experience at Thrive House?</label>
              <textarea 
                name="importantExperience"
                required
                rows={3}
                className={inputStyle}
                placeholder="Describe your intentions..."
              ></textarea>
            </div>
          </div>

          <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <p className="text-[10px] text-neutral-600 tracking-[0.4em] uppercase font-bold text-center md:text-left">
              WE PROTECT THE ROOM.
            </p>
            <button 
              disabled={status === 'submitting'}
              type="submit" 
              className={`group relative px-20 py-8 bg-[#94A187] text-[#0D110E] text-[11px] tracking-[0.6em] uppercase font-bold transition-all duration-700 rounded-sm shadow-2xl ${status === 'submitting' ? 'opacity-50 cursor-wait' : 'hover:bg-white active:scale-95'}`}
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Apply;
