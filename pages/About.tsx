
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-56 md:pt-64 pb-32 px-6 bg-[#0D110E]">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-40">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-10 block">The Ethos</span>
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-serif mb-16 italic text-[#E5E7E4] leading-[0.85] tracking-tight">Clarity as <br/>a Catalyst.</h1>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <p className="text-2xl md:text-3xl text-neutral-200 font-light leading-relaxed flex-1 border-l border-[#94A187]/30 pl-10 py-2">
              A curated evening community for people optimizing their lives.
            </p>
            <div className="flex-1 space-y-10">
                <p className="text-lg text-neutral-500 font-light leading-loose">
                    Thrive House was born from a simple realization: the traditional nightlife model is designed for escape, not engagement. We built a space for those who have nothing they want to escape from—where <span className="text-[#94A187] italic">depth replaces drinks</span>.
                </p>
                <p className="text-lg text-neutral-500 font-light leading-loose">
                    Ours is a strictly alcohol-free sanctuary where the lighting is cinematic, the aesthetics are grounded, and the conversations are unfiltered. We prioritize the evening rituals for people who prioritize tomorrow.
                </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40">
          <div className="space-y-12">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#94A187]">Social Integrity</h3>
            <p className="text-neutral-400 font-light leading-loose text-lg">
              Wellness isn't just about your morning routine. It's about how you curate your nights. We protect the room through hand-vetted membership and architectural silence.
            </p>
          </div>
          <div className="space-y-12">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#94A187]">Sophisticated Depth</h3>
            <p className="text-neutral-400 font-light leading-loose text-lg">
              We celebrate the abundance of the evening: fine art, botanical soundscapes, and the rare gift of undivided attention. We believe the most powerful social experiences happen without the noise.
            </p>
          </div>
        </div>

        <div className="relative aspect-[16/7] mb-40 overflow-hidden rounded-sm border border-white/5 grayscale">
            <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600" 
                alt="Sophisticated modern interior"
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D110E] to-transparent"></div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-16 pb-24 border-b border-white/5">
            <h2 className="text-4xl md:text-7xl font-serif italic text-[#E5E7E4] leading-tight">Quiet ambition. <br/>Grounded presence.</h2>
            <p className="text-neutral-500 font-light leading-loose text-xl">
                Thrive House is not for everyone. It is for those who are high-agency, intentional, and selective about their energy. When you remove the friction of alcohol, the connection becomes electric.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
