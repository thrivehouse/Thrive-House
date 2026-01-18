
import React, { useState, useRef } from 'react';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbypeQJ7ZeLOTJV-Ig8KB3TiPoyP7VIqtG1-S0DXtZUfmkYeW2lAWlfftFcEuT0hLpo3dQ/exec';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleIframeLoad = () => {
    if (status === 'submitting') {
      setStatus('submitted');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleFormSubmit = () => {
    setStatus('submitting');
  };

  return (
    <footer className="py-32 border-t border-white/5 bg-[#0D110E]">
      <div className="container mx-auto px-6 md:px-12">
        <iframe
          name="newsletter_iframe"
          ref={iframeRef}
          style={{ display: 'none' }}
          onLoad={handleIframeLoad}
        ></iframe>

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
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-white"></h4>
            <form 
              action={GOOGLE_SHEET_URL} 
              method="POST" 
              target="newsletter_iframe"
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-4"
            >
              <input type="hidden" name="type" value="newsletter" />
              <input 
                name="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                required
                className="bg-transparent py-2 focus:outline-none focus:border-[#94A187] text-sm text-neutral-300 transition-all italic font-light"
              />
              <button 
                type=""
                disabled={status !== 'idle'}
                className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#94A187] hover:text-white transition-all text-left"
              >
                {status === 'idle' ? '' : status === 'submitting' ? 'Processing...' : 'Signed Up'}
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
