
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Zap, Globe, Sparkles } from 'lucide-react';

const Membership: React.FC = () => {
  return (
    <div className="pt-48 md:pt-64 pb-32 px-6 bg-[#0D110E]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-32">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-10 block">The Collective</span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif mb-12 italic text-[#E5E7E4] leading-[0.85] tracking-tight">The Inner <br/>Circle.</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            Thrive House is a hand-vetted community. We prioritize character, kindness, and the shared belief that evenings should be life-affirming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-32">
          <div className="p-10 md:p-16 border border-white/5 bg-[#121613] rounded-sm space-y-12 md:space-y-16">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#94A187]">Eligibility</h3>
            <ul className="space-y-8 md:space-y-12">
              {[
                "You value intellectual depth over status.",
                "You prioritize morning clarity as a value.",
                "You're an active contributor to your community.",
                "You appreciate quiet, intentional aesthetics.",
                "You bring unique energy to a long-table dinner."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 md:gap-6">
                  <Check className="w-5 h-5 text-[#94A187]/60 mt-1 shrink-0" />
                  <span className="text-neutral-300 font-light text-lg md:text-xl leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-10 md:p-16 border border-white/5 bg-[#121613] rounded-sm space-y-12 md:space-y-16">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#94A187]">Access</h3>
            <ul className="space-y-8 md:space-y-12">
              {[
                "Guaranteed monthly Twilight Dinner invitation.",
                "Access to Weekly Botanical Tea Rituals.",
                "Invitation to Quarterly Museum Salons.",
                "Vetted introductions within the global chapter.",
                "An evening sanctuary with zero social friction."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 md:gap-6">
                  <Sparkles className="w-5 h-5 text-[#94A187]/60 mt-1 shrink-0" />
                  <span className="text-neutral-300 font-light text-lg md:text-xl leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden mb-32">
            {[
                { title: "Review Rate", icon: ShieldCheck, value: "Hand-Vetted" },
                { title: "Dues", icon: Zap, value: "$150 - $250/mo" },
                { title: "Locations", icon: Globe, value: "Urban Select" }
            ].map((stat, i) => (
                <div key={i} className="bg-[#0D110E] py-16 md:py-24 text-center space-y-5 md:space-y-6">
                    <stat.icon className="w-6 h-6 mx-auto text-[#94A187]" />
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-600">{stat.title}</p>
                    <p className="text-3xl md:text-4xl font-serif text-white italic">{stat.value}</p>
                </div>
            ))}
        </div>

        <div className="text-center space-y-16 pb-32">
          <p className="text-neutral-500 max-w-xl mx-auto font-light text-base md:text-lg italic leading-relaxed">
            Membership is an invitation to contribute to the silence and the depth of the room. We review applications weekly based on alignment and availability.
          </p>
          <Link 
            to="/apply" 
            className="px-16 py-6 md:px-24 md:py-8 bg-[#94A187] text-[#0D110E] text-[11px] tracking-[0.6em] uppercase font-bold hover:bg-white transition-all duration-700 rounded-sm inline-block shadow-2xl"
          >
            Apply for Membership
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Membership;
