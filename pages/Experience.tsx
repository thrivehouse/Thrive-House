
import React from 'react';
import { Coffee, Brain, Users, MessageSquare } from 'lucide-react';

const experiences = [
  {
    title: "Twilight Dinners",
    frequency: "Monthly / Private",
    focus: "Intimacy",
    size: "10 - 12 Members",
    description: "Our signature long-table gatherings. These candlelit evenings focus on the art of conversation over a curated menu of botanical elixirs and elevated cuisine. No alcohol is served.",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=1200",
    icon: Users
  },
  {
    title: "Museum Salons",
    frequency: "Quarterly / Cultural",
    focus: "Discovery",
    size: "20 - 30 Members",
    description: "Participatory deep-dives held in the silent corridors of our partner galleries after hours. These evenings bridge art and philosophy in a setting designed for undivided attention.",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?auto=format&fit=crop&q=80&w=1200",
    icon: Brain
  },
  {
    title: "Tea Ceremonies",
    frequency: "Weekly / Reset",
    focus: "Groundedness",
    size: "6 - 8 Members",
    description: "The weekly society reset. Rare botanical tea rituals and sensory exploration designed to down-regulate the nervous system and build intimate community without the haze.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=1200",
    icon: Coffee
  }
];

const Experience: React.FC = () => {
  return (
    <div className="pt-56 md:pt-64 pb-32 px-6 bg-[#0D110E]">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-40">
          <span className="text-[#94A187] text-[10px] font-medium tracking-[0.6em] uppercase mb-8 block">The Program</span>
          <h1 className="text-6xl md:text-8xl lg:text-[8.5rem] font-serif mb-12 italic text-[#E5E7E4] leading-[0.85] tracking-tight">Ritual <br/>& Resonance.</h1>
          <p className="text-neutral-500 max-w-2xl font-light leading-relaxed text-lg">
            Thrive House experiences are built for depth. We prioritize architectural silence, intellectual delight, and the rare joy of a clear mind.
          </p>
        </div>

        <div className="space-y-48 md:space-y-64">
          {experiences.map((exp, idx) => (
            <div key={exp.title} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 md:gap-32 items-center`}>
              <div className="flex-1 space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-6 text-[#94A187] text-[11px] font-bold tracking-[0.3em] uppercase mb-8">
                    <exp.icon className="w-5 h-5 opacity-60" />
                    <span>{exp.frequency}</span>
                    <span className="w-1.5 h-1.5 bg-[#94A187]/20 rounded-full"></span>
                    <span>{exp.size}</span>
                  </div>
                  <h2 className="text-5xl md:text-7xl font-serif italic text-[#E5E7E4] leading-[0.95]">{exp.title}</h2>
                </div>
                <p className="text-neutral-400 font-light leading-loose text-lg border-l border-[#94A187]/20 pl-10 py-1">
                  {exp.description}
                </p>
                <div className="pt-8">
                    <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-600 mb-2">Primary Intent</p>
                    <p className="text-white tracking-[0.2em] uppercase text-sm font-semibold italic">{exp.focus}</p>
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
