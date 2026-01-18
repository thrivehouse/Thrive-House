
import React from 'react';

const Flyer: React.FC = () => {
  // Current URL for the QR code simulation
  const siteUrl = window.location.origin + window.location.pathname;

  return (
    <div className="min-h-screen bg-[#050706] flex items-center justify-center p-6 md:p-12 pt-32 pb-20">
      {/* Flyer Container - A4ish Ratio */}
      <div className="relative w-full max-w-[800px] aspect-[1/1.414] bg-[#0D110E] shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/5 overflow-hidden flex flex-col p-12 md:p-20 group">
        
        {/* Decorative Corner Accents */}
        <div className="absolute top-8 left-8 w-12 h-[1px] bg-[#94A187]/30"></div>
        <div className="absolute top-8 left-8 w-[1px] h-12 bg-[#94A187]/30"></div>
        <div className="absolute top-8 right-8 w-12 h-[1px] bg-[#94A187]/30"></div>
        <div className="absolute top-8 right-8 w-[1px] h-12 bg-[#94A187]/30"></div>
        <div className="absolute bottom-8 left-8 w-12 h-[1px] bg-[#94A187]/30"></div>
        <div className="absolute bottom-8 left-8 w-[1px] h-12 bg-[#94A187]/30"></div>
        <div className="absolute bottom-8 right-8 w-12 h-[1px] bg-[#94A187]/30"></div>
        <div className="absolute bottom-8 right-8 w-[1px] h-12 bg-[#94A187]/30"></div>

        {/* Header Label */}
        <div className="text-center mb-16">
          <span className="text-[#94A187] text-[10px] md:text-[12px] font-bold tracking-[0.8em] uppercase">
            A Private Evening Society
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight tracking-tight italic">
            The Evening, <br/>
            <span className="text-[#94A187]">Reclaimed.</span>
          </h1>
        </div>

        {/* Hero Illustration Block */}
        <div className="relative flex-grow mb-12 overflow-hidden border border-white/5 group">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200" 
            alt="Hand-drawn architectural illustration of friends at dinner"
            className="w-full h-full object-cover grayscale opacity-20 scale-110 group-hover:scale-100 transition-transform duration-[3000ms] group-hover:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D110E]/20 to-[#0D110E]"></div>
          
          {/* Overlay Text */}
          <div className="absolute bottom-8 left-0 right-0 px-10 text-center">
             <p className="text-white text-lg md:text-2xl font-serif italic tracking-wide">
                "Depth over drinks."
             </p>
          </div>
        </div>

        {/* Copy Block */}
        <div className="text-center space-y-8 mb-16">
          <p className="text-neutral-400 font-light text-sm md:text-base max-w-lg mx-auto leading-relaxed tracking-wide">
            Thrive House is a grounded society for individuals who value deep connection, sustained vitality, and restorative evenings. Optimized for holistic health and those who prioritize tomorrow.
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <span className="h-[1px] w-8 bg-white/10"></span>
            <span className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#94A187]">Application Only</span>
            <span className="h-[1px] w-8 bg-white/10"></span>
          </div>
        </div>

        {/* Footer with QR Code */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-auto">
          <div className="text-left hidden md:block">
            <div className="text-2xl font-light tracking-[0.2em] uppercase text-white mb-2">
              THRIVE <span className="text-[#94A187] italic">HOUSE</span>
            </div>
            <p className="text-[10px] tracking-[0.6em] uppercase text-[#94A187] font-bold">
              Boston Chapter
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            {/* Elegant QR Placeholder */}
            <div className="p-2 border border-[#94A187]/30 bg-white/5 rounded-sm">
              <div className="w-24 h-24 bg-white p-2">
                {/* SVG QR CODE GENERATOR MOCK */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#0D110E]">
                   <path fill="currentColor" d="M0 0h30v30H0zm40 0h20v20H40zm30 0h30v30H70zM0 40h20v20H0zm30 0h10v10H30zm20 0h10v10H50zm20 0h30v30H70zM0 70h30v30H0zm40 70h10v10H40zm20 0h10v10H60zm10 0h30v30H70z" />
                   <rect x="10" y="10" width="10" height="10" fill="currentColor" />
                   <rect x="80" y="10" width="10" height="10" fill="currentColor" />
                   <rect x="10" y="80" width="10" height="10" fill="currentColor" />
                </svg>
              </div>
            </div>
            <span className="text-[9px] tracking-[0.5em] uppercase text-[#94A187] font-bold">
              Scan to Apply
            </span>
          </div>

          <div className="text-right hidden md:block">
             <p className="text-[10px] tracking-[0.4em] uppercase text-neutral-600 font-bold mb-2">Inquiries</p>
             <p className="text-xs text-white/60 font-serif italic">membership@thrivehouse.com</p>
          </div>
        </div>

        {/* Print Instruction - Only visible on screen */}
        <div className="absolute top-4 right-4 md:opacity-0 group-hover:opacity-100 transition-opacity">
           <button 
             onClick={() => window.print()}
             className="px-4 py-2 bg-[#94A187]/10 border border-[#94A187]/20 text-[#94A187] text-[10px] uppercase tracking-widest font-bold hover:bg-[#94A187] hover:text-[#0D110E] transition-all"
           >
             Print Flyer
           </button>
        </div>
      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          .min-h-screen, .min-h-screen * { visibility: visible; }
          .min-h-screen { position: absolute; left: 0; top: 0; padding: 0 !important; background: white; }
          .max-w-[800px] { width: 100%; border: none; shadow: none; }
          button { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Flyer;
