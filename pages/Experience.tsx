
import React from 'react';
import { Users, MessageSquare, Home as HomeIcon } from 'lucide-react';

const experiences = [
  {
    title: "Flagship Evenings",
    focus: "Intimacy",
    description: "Our signature monthly gatherings. Held in nomadic spaces—from hidden lofts to private art galleries—these evenings are designed around curated dialogue and botanical elixirs.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa75de?auto=format&fit=crop&q=80&w=1200",
    icon: MessageSquare
  },
  {
    title: "Member Directory",
    focus: "Curation",
    description: "Membership grants entry into a vetted directory of thinkers, creatives, and leaders. We facilitate purposeful introductions that extend well beyond our physical gatherings.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200",
    icon: Users
  },
  {
    title: "Private Salons",
    focus: "Home Rituals",
    description: "Members have the opportunity to host 'Certified' society evenings. We curate the guest list and provide the conversation prompts; you host the ritual in the comfort of your home.",
    image: "https://images.unsplash.com/photo-1594631252845-29fc458695d7?auto=format&fit=crop&q=80&w=1200",
    icon: HomeIcon
  }
];

const Experience: React.FC = () => {
  return (
    <div className="pt-56 md:pt-64 pb-32 px-6 bg-[#0D110E]">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-40">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-8 block">The Cadence</span>
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-serif mb-12 italic text-[#E5E7E4] leading-[0.85] tracking-tight">Ritual <br/>& Depth.</h1>
          <p className="text-neutral-500 max-w-2xl font-light leading-relaxed text-lg">
            Thrive House is a shared cadence. We prioritize intellectual delight, deep peer connection, and the rare joy of grounded vitality in an increasingly noisy world.
          </p>
        </div>

        <div className="space-y-48 md:space-y-64">
          {experiences.map((exp, idx) => (
            <div key={exp.title} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-32 items-center`}>
              <div className="flex-1 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-6 text-[#94A187] text-[11px] font-bold tracking-[0.3em] uppercase mb-8">
                    <exp.icon className="w-5 h-5 opacity-60" />
                    <span>Experience Pillar</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif italic text-[#E5E7E4] leading-[0.95]">{exp.title}</h2>
                </div>
                <p className="text-neutral-400 font-light leading-loose text-lg border-l border-[#94A187]/20 pl-10 py-1 font-serif italic">
                  {exp.description}
                </p>
                <div className="pt-8">
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-600 mb-2">Core Intention</p>
                    <p className="text-white tracking-[0.2em] uppercase text-sm font-semibold italic font-serif">{exp.focus}</p>
                </div>
              </div>
              <div className="flex-1 aspect-square md:aspect-[4/5] w-full relative overflow-hidden rounded-sm bg-[#1A1F1B] group border border-white/5 shadow-2xl">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover grayscale opacity-40 transition-all duration-[2000ms] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#94A187]/5 mix-blend-color"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
