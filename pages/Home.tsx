
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, Moon, Users, MessageSquare, ShieldCheck, Home as HomeIcon } from 'lucide-react';

const TypewriterText: React.FC<{ strings: string[] }> = ({ strings }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullString = strings[currentStringIndex];
      
      if (!isDeleting) {
        setCurrentText(fullString.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullString) {
          setIsDeleting(true);
          setTypingSpeed(2500);
        }
      } else {
        setCurrentText(fullString.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings, typingSpeed]);

  return (
    <span className="relative inline-block">
      {currentText}
      <span className="typewriter-cursor">&nbsp;</span>
    </span>
  );
};

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden bg-[#0D110E]">
      {/* Hero Section */}
      <section className="relative h-[100vh] w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0D110E]"></div>
          {/* Subtle noise/texture overlay via CSS if desired, but keeping it clean as per request */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D110E] via-transparent to-[#0D110E] opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl pt-32 md:pt-40 animate-in fade-in slide-in-from-bottom-12 duration-[1200ms]">
          <span className="inline-block text-[#94A187] text-[10px] font-medium tracking-[0.5em] uppercase mb-10 py-1 border-b border-[#94A187]/30">
            A Society for Intentional Evenings
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-serif mb-12 leading-[0.9] tracking-tight text-[#E5E7E4] flex flex-col items-center">
            <span>Evenings for</span>
            <span className="italic text-[#94A187] h-[1.1em]">
              <TypewriterText strings={['connection.', 'vitality.', 'depth.', 'clarity.']} />
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#94A187]/80 mb-14 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Thrive House is a curated society for those who seek substance over noise. We gather in candlelight and quiet excellence to foster <span className="text-[#E5E7E4] font-medium italic">connection without compromise</span>.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Link 
              to="/apply" 
              className="px-14 py-4 bg-[#94A187] text-[#0D110E] text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-all duration-700 rounded-sm shadow-xl"
            >
              Apply to join
            </Link>
            <Link 
              to="/experience" 
              className="text-[11px] font-bold tracking-[0.4em] uppercase text-neutral-400 hover:text-white transition-colors flex items-center gap-5 group"
            >
              How it works <MoveRight className="w-5 h-5 group-hover:translate-x-3 transition-transform text-[#94A187]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 px-6 bg-[#0D110E] relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-16">
            <h2 className="text-5xl md:text-8xl font-serif text-[#E5E7E4] leading-[0.95]">Connection is <br/><span className="italic text-[#94A187]">intentional</span>.</h2>
            <p className="text-neutral-500 font-light leading-loose text-xl max-w-2xl mx-auto">
              Most social lives are built around habits that cost you your clarity. We believe evenings should give something back. Thrive House is designed for those who value depth, curation, and the shared commitment to living fully.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12 max-w-3xl mx-auto">
              <div className="space-y-4 text-center md:text-left">
                <Moon className="w-6 h-6 text-[#94A187] mx-auto md:mx-0" />
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-white">The Cadence</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">Intimate flagship gatherings held in private lofts, galleries, and botanical studios.</p>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <ShieldCheck className="w-6 h-6 text-[#94A187] mx-auto md:mx-0" />
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-white">The Standard</h4>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">Hand-vetted membership ensuring every seat at the table is occupied by a contributor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Section - THREE PILLARS */}
      <section className="py-32 px-6 border-y border-white/5 bg-[#121613]">
        <div className="container mx-auto">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
            <h2 className="text-4xl md:text-7xl font-serif max-w-xl text-[#E5E7E4] leading-[0.85]">Deep <span className="italic text-[#94A187]">Connection</span>.</h2>
            <Link to="/membership" className="text-[11px] font-bold tracking-[0.4em] uppercase border-b border-[#94A187]/40 pb-3 text-neutral-500 hover:text-white transition-all">Membership Access</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Private Flagships",
                desc: "High-production evenings featuring curated dialogue, botanical elixirs, and nomadic art exhibits. No noise, just substance.",
                icon: MessageSquare
              },
              {
                title: "Peer introductions",
                desc: "Direct access to our directory of high-agency individuals. We believe your social circle is your most valuable asset.",
                icon: Users
              },
              {
                title: "The Society Table",
                desc: "Member-hosted 'Certified' salons. We bring the guest list and elixirs to your home to foster intimacy in private spaces.",
                icon: HomeIcon
              }
            ].map((pillar, i) => (
              <div key={i} className="space-y-6 group">
                <pillar.icon className="w-8 h-8 text-[#94A187]/50 group-hover:text-[#94A187] transition-all duration-500" />
                <h3 className="text-3xl font-serif text-[#E5E7E4] italic">{pillar.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-base">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing Section instead of Visual Grid */}
      <section className="py-24 bg-[#0D110E]">
        <div className="container mx-auto px-6">
          <div className="h-px w-full bg-white/5"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center bg-[#0D110E]">
        <h2 className="text-5xl md:text-[8rem] font-serif mb-12 text-[#E5E7E4] leading-none opacity-90">Choose <span className="italic text-[#94A187]">Depth</span>.</h2>
        <p className="text-neutral-400 mb-16 max-w-xl mx-auto font-light text-xl italic">
          An evening society for those who seek to belong without compromise.
        </p>
        <Link 
          to="/apply" 
          className="px-16 py-6 bg-[#94A187] text-[#0D110E] text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-white transition-all duration-700 rounded-sm inline-block shadow-2xl"
        >
          Apply for Membership
        </Link>
      </section>
    </div>
  );
};

export default Home;
