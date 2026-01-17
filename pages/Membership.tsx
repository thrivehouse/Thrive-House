
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Zap, Globe, Sparkles, Home as HomeIcon, Users } from 'lucide-react';

const Membership: React.FC = () => {
  return (
    <div className="pt-48 md:pt-64 pb-32 px-6 bg-[#0D110E]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-32">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-10 block">The Society</span>
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif mb-12 italic text-[#E5E7E4] leading-[0.85] tracking-tight">The Inner <br/>Circle.</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed text-lg">
            Thrive House is a hand-vetted network of high-agency individuals. We prioritize character, curiosity, and the shared belief that health is our primary foundation for impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-32">
          {/* Eligibility Column */}
          <div className="p-10 md:p-16 border border-white/5 bg-[#121613] rounded-sm space-y-12 md:space-y-16 shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#94A187]">Eligibility</h3>
            <ul className="space-y-8 md:space-y-12">
              {[
                { 
                  title: "Holistic Integrity", 
                  desc: "You see your health as a non-negotiable asset. You choose environments that sustain rather than deplete your potential." 
                },
                { 
                  title: "Active Contribution", 
                  desc: "You are a leader, host, or creative at heart. You contribute energy to the room rather than just consuming it." 
                },
                { 
                  title: "Intellectual Depth", 
                  desc: "You prefer the nuance of a three-hour dialogue over the noise of a traditional venue. You seek substance." 
                },
                { 
                  title: "Aesthetic Intelligence", 
                  desc: "You value quiet excellence—whether in botanical elixirs, fine art, or the lighting of a room." 
                },
                { 
                  title: "Return on Energy", 
                  desc: "You calculate the long-term ROI on your social habits. You seek evenings that give something back to your life." 
                }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 md:gap-6 group">
                  <Check className="w-5 h-5 text-[#94A187]/60 mt-1.5 shrink-0 group-hover:text-[#94A187] transition-colors" />
                  <div className="space-y-2">
                    <span className="text-white font-serif text-xl italic block leading-none">{item.title}</span>
                    <span className="text-neutral-500 font-light text-sm md:text-base leading-relaxed block">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Column */}
          <div className="p-10 md:p-16 border border-white/5 bg-[#121613] rounded-sm space-y-12 md:space-y-16 shadow-2xl">
            <h3 className="text-4xl md:text-5xl font-serif italic text-[#94A187]">The Benefits</h3>
            <ul className="space-y-8 md:space-y-12">
              {[
                "Access to one curated Flagship Event per month.",
                "Direct entry into our private network of high-agency peers.",
                "Rights to host 'Certified' society evenings at your home.",
                "Vetted introductions and shared member directory access.",
                "Invitations to quarterly nomadic art and culture salons."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 md:gap-6 group">
                  <Sparkles className="w-5 h-5 text-[#94A187]/60 mt-1.5 shrink-0 group-hover:text-[#94A187] transition-colors" />
                  <span className="text-neutral-300 font-serif text-xl italic leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden mb-32">
            {[
                { title: "Selection", icon: ShieldCheck, value: "Hand-Vetted" },
                { title: "Network", icon: Users, value: "Private Peers" },
                { title: "The Model", icon: HomeIcon, value: "Event-Based" }
            ].map((stat, i) => (
                <div key={i} className="bg-[#0D110E] py-16 md:py-24 text-center space-y-5 md:space-y-6">
                    <stat.icon className="w-6 h-6 mx-auto text-[#94A187]" />
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-600">{stat.title}</p>
                    <p className="text-3xl md:text-4xl font-serif text-white italic">{stat.value}</p>
                </div>
            ))}
        </div>

        <div className="text-center space-y-16 pb-32">
          <p className="text-neutral-500 max-w-xl mx-auto font-light text-base md:text-lg italic leading-relaxed font-serif">
            Membership is an invitation to contribute to the depth of the room. Admission is based on alignment and availability.
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
