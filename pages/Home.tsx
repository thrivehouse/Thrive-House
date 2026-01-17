
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MoveRight, Moon, Coffee, Heart, Globe, MessageSquare, ShieldCheck } from 'lucide-react';

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
          <img 
            src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=2400" 
            alt="Atmospheric candlelit room" 
            className="w-full h-full object-cover opacity-25 grayscale-[0.6]"
          />
          <div className="absolute inset-0 image-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl pt-32 md:pt-40 animate-in fade-in slide-in-from-bottom-12 duration-[1200ms]">
          <span className="inline-block text-[#94A187] text-[10px] font-medium tracking-[0.5em] uppercase mb-10 py-1 border-b border-[#94A187]/30">
            Evening rituals for people who prioritize tomorrow
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-serif mb-12 leading-[0.9] tracking-tight text-[#E5E7E4] flex flex-col items-center">
            <span>Evenings for</span>
            <span className="italic text-[#94A187] h-[1.1em]">
              <TypewriterText strings={['depth.', 'dialogue.', 'stillness.', 'connection.']} />
            </span>
          </h1>
          <p className="text-base md:text-lg text-[#94A187]/80 mb-14 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Thrive House is an upscale sanctuary where <span className="text-[#E5E7E4] font-medium italic">depth replaces drinks</span>. Experience intimate candlelit dialogue and cultural salons designed for those who optimize their lives.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Link 
              to="/apply" 
              className="px-14 py-4 bg-[#94A187] text-[#0D110E] text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-white transition-all duration-700 rounded-sm shadow-xl"
            >
              Apply for Membership
            </Link>
            <Link 
              to="/experience" 
              className="text-[11px] font-bold tracking-[0.4em] uppercase text-neutral-400 hover:text-white transition-colors flex items-center gap-5 group"
            >
              The Program <MoveRight className="w-5 h-5 group-hover:translate-x-3 transition-transform text-[#94A187]" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 px-6 bg-[#0D110E] relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-7xl font-serif text-[#E5E7E4] leading-[0.95]">Where depth <br/><span className="italic text-[#94A187]">replaces drinks</span>.</h2>
            <p className="text-neutral-500 font-light leading-loose text-lg max-w-lg">
              We believe the most valuable hours of our lives shouldn't require recovery. Thrive House is an alcohol-free social collective, offering an elevated evening experience for high-agency individuals who value deep conversation and morning clarity.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-8">
              <div className="space-y-3">
                <Moon className="w-6 h-6 text-[#94A187]" />
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-white">Atmosphere</h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">Soft lighting, museum halls, and the warmth of real presence.</p>
              </div>
              <div className="space-y-3">
                <ShieldCheck className="w-6 h-6 text-[#94A187]" />
                <h4 className="text-[11px] font-bold tracking-widest uppercase text-white">The Standard</h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">A strictly dry environment that celebrates the power of the clear mind.</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/5 shadow-2xl grayscale">
            <img 
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=1200" 
              alt="Elegantly set dining table with candles and tea" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0D110E]/30"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 border-y border-white/5 bg-[#121613]">
        <div className="container mx-auto">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
            <h2 className="text-4xl md:text-7xl font-serif max-w-xl text-[#E5E7E4] leading-[0.85]">High Taste. <span className="italic text-[#94A187]">Low Frequency</span>.</h2>
            <Link to="/membership" className="text-[11px] font-bold tracking-[0.4em] uppercase border-b border-[#94A187]/40 pb-3 text-neutral-500 hover:text-white transition-all">Membership Access</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Curated Peerage",
                desc: "Every member is hand-vetted for their intellectual curiosity and kindness. We protect the room so you can truly belong.",
                icon: Heart
              },
              {
                title: "Cultural Salons",
                desc: "Held in quiet gallery corridors and private museum collections, our salons are designed to challenge the mind, not the liver.",
                icon: MessageSquare
              },
              {
                title: "Dry Botanicals",
                desc: "Experience the complex alchemy of botanical non-alcoholic rituals that invigorate the senses without the haze.",
                icon: Coffee
              }
            ].map((pillar, i) => (
              <div key={i} className="space-y-6 group">
                <pillar.icon className="w-8 h-8 text-[#94A187]/50 group-hover:text-[#94A187] transition-all duration-500" />
                <h3 className="text-3xl font-serif text-[#E5E7E4]">{pillar.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed text-base">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Grid - Faceless and Pure */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-[35vh] md:h-[55vh] w-full gap-px bg-white/5 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-opacity duration-1000" alt="Minimalist museum hall" />
        <img src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-opacity duration-1000" alt="Tea preparation" />
        <img src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-opacity duration-1000" alt="Lit candles" />
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-40 hover:opacity-100 transition-opacity duration-1000" alt="Sophisticated architectural detail" />
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center bg-[#0D110E] border-t border-white/5">
        <h2 className="text-5xl md:text-[8rem] font-serif mb-12 text-[#E5E7E4] leading-none opacity-90">Prioritize <span className="italic text-[#94A187]">Tomorrow</span>.</h2>
        <p className="text-neutral-400 mb-16 max-w-xl mx-auto font-light text-xl italic">
          An exclusive evening community for people optimizing their lives.
        </p>
        <Link 
          to="/apply" 
          className="px-16 py-6 bg-[#94A187] text-[#0D110E] text-[11px] tracking-[0.5em] uppercase font-bold hover:bg-white transition-all duration-700 rounded-sm inline-block shadow-2xl"
        >
          Apply to Thrive House
        </Link>
      </section>
    </div>
  );
};

export default Home;
