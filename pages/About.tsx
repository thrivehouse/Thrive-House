
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-56 md:pt-64 pb-32 px-6 bg-[#0D110E]">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-40">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-10 block">The Ethos</span>
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-serif mb-16 italic text-[#E5E7E4] leading-[0.85] tracking-tight">Vitality as <br/>a Foundation.</h1>
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <p className="text-2xl md:text-3xl text-neutral-200 font-light leading-relaxed flex-1 border-l border-[#94A187]/30 pl-10 py-2 font-serif italic">
              A private evening society for those who recognize that health is the prerequisite for deep connection.
            </p>
            <div className="flex-1 space-y-10">
                <p className="text-lg text-neutral-500 font-light leading-loose">
                    Thrive House was born from a simple realization: the traditional evening model is often an escape that costs you your clarity. We built a space for those who want to be fully present—where <span className="text-[#94A187] italic font-serif">engagement fuels the life you are building</span>.
                </p>
                <p className="text-lg text-neutral-500 font-light leading-loose">
                    We aren't a building; we are a shared cadence. Through monthly flagships and member-hosted salons, we curate experiences that respect your vitality and amplify your social battery, ensuring your nights add to your overall potential.
                </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-40 border-y border-white/5 py-32">
          <div className="space-y-12">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#94A187]">Holistic Integrity</h3>
            <p className="text-neutral-400 font-light leading-loose text-lg">
              Connection isn't just about showing up. It's about the quality of presence. We protect the network through hand-vetted membership and experiences that value your cognitive and physical well-being.
            </p>
          </div>
          <div className="space-y-12">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#94A187]">Sophisticated Connection</h3>
            <p className="text-neutral-400 font-light leading-loose text-lg">
              We celebrate the abundance of the evening: fine art, botanical soundscapes, and the rare gift of undivided attention. We believe the most powerful social experiences happen when you are in your peak state.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center space-y-16 pb-24 border-b border-white/5">
            <h2 className="text-4xl md:text-7xl font-serif italic text-[#E5E7E4] leading-tight">Quiet ambition. <br/>Grounded vitality.</h2>
            <p className="text-neutral-500 font-light leading-loose text-xl italic font-serif">
                Thrive House is for those who are high-agency, intentional, and see their health as a prerequisite for depth. When you prioritize vitality, every connection becomes deeper.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
