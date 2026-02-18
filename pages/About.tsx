
import React from 'react';

const About: React.FC = () => {
  const maretPhoto = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXHJVf9SX0xZ9shMOKE0zkR0Y10BWh10w5fKQcLpockeXEc7dcUI8Iqd4OTH4U36O20v_OhcHgYG-BMUKvtzF5HQh-Hbln6K0dhlXly4PURr_tTLWyez0C5jq8Ah-FK8MmRnjIsGI5SDwCZUYmIjuQ25W6Dx_nBCjW3I5P5HKd_1xUmnqKBqDDnmoKiKo0xmr4sGCS25vDkAyq_AoPzp6rTi_s7WV1vFVecF30AcF9eAFgNQBefuDvqziHdLPYGquTbscd_zNQnfQ';

  return (
    <div className="animate-in fade-in duration-700">
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-8">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Ons Verhaal</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-accent-brown tracking-tight">
              Meer dan alleen <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#897561]">CV's schuiven.</span>
            </h2>
            <div className="h-px w-24 bg-primary/40"></div>
            <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-lg">
              Mijn naam is Maret Moek. Ik heb Noordermatch opgericht vanuit de overtuiging dat recruitment persoonlijker kan. In een wereld van algoritmes kies ik bewust voor het menselijke gesprek.
            </p>
            <button className="flex items-center gap-2 w-fit h-12 px-8 bg-accent-brown text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-primary transition-colors group">
              <span>Lees ons manifest</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <img 
              alt="Maret Moek founder" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
              src={maretPhoto} 
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white py-24 border-y border-[#E6E0DB]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Onze Visie</span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-accent-brown">Bouwen aan de toekomst</h3>
            </div>
            <p className="text-text-muted max-w-md text-base leading-relaxed">
              Wij geloven dat succesvolle organisaties worden gebouwd door mensen die op hun plek zitten.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { title: 'Betrokkenheid', icon: 'handshake', desc: 'Wij staan niet aan de zijlijn, maar midden in het proces.' },
              { title: 'Kwaliteit', icon: 'verified', desc: 'Geen massa-productie, maar maatwerk voor elke match.' },
              { title: 'Perspectief', icon: 'visibility', desc: 'Wij kijken verder dan vandaag. Waar wil iemand over 5 jaar staan?' },
            ].map((v, i) => (
              <div key={i} className="group p-8 bg-background-light rounded-2xl transition-all hover:shadow-lg">
                <div className="w-14 h-14 mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{v.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-accent-brown mb-3">{v.title}</h4>
                <p className="text-text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative bg-accent-brown py-24 overflow-hidden">
        <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none">
          <span className="material-symbols-outlined text-[300px] text-white rotate-180">format_quote</span>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
          <div className="mb-8"><span className="w-12 h-1 bg-primary block rounded-full"></span></div>
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl serif-font italic text-white/90 leading-relaxed">
              "Ik startte Noordermatch omdat ik zag dat het 'verhaal' achter de CV vaak verloren ging. Ik wilde een bureau bouwen waar dat verhaal juist de basis vormt van elk succes."
            </p>
          </blockquote>
          <div className="mt-12 text-center">
            <cite className="block text-white font-bold not-italic text-lg uppercase tracking-wider">Maret Moek</cite>
            <span className="block text-primary text-sm font-medium mt-1">Oprichter & Eigenaar</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
