
import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const maretPhoto = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXHJVf9SX0xZ9shMOKE0zkR0Y10BWh10w5fKQcLpockeXEc7dcUI8Iqd4OTH4U36O20v_OhcHgYG-BMUKvtzF5HQh-Hbln6K0dhlXly4PURr_tTLWyez0C5jq8Ah-FK8MmRnjIsGI5SDwCZUYmIjuQ25W6Dx_nBCjW3I5P5HKd_1xUmnqKBqDDnmoKiKo0xmr4sGCS25vDkAyq_AoPzp6rTi_s7WV1vFVecF30AcF9eAFgNQBefuDvqziHdLPYGquTbscd_zNQnfQ';

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 order-1">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-primary"></span>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Recruitment Agency</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-accent-brown tracking-tight">
              Verbinden met <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#897561]">Ambitie.</span>
            </h2>
            
            <p className="text-base md:text-xl text-text-muted leading-relaxed max-w-lg">
              Wij verbinden ambitieuze professionals met toonaangevende bedrijven in Noord-Nederland. Onze aanpak is persoonlijk, betrokken en gericht op de lange termijn.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/vacatures" className="flex items-center justify-center gap-2 h-14 px-10 bg-accent-brown text-white text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-primary transition-all shadow-lg shadow-accent-brown/20 group">
                <span>Bekijk vacatures</span>
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <button className="flex items-center justify-center h-14 px-10 border-2 border-accent-brown/10 text-accent-brown text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-accent-brown/5 transition-all">
                Onze diensten
              </button>
            </div>
          </div>

          {/* Hero Image - Directe link naar Maret Moek */}
          <div className="relative order-2 h-[450px] md:h-[600px] lg:h-[750px] w-full rounded-[2rem] overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-accent-brown/5 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <img 
              alt="Maret Moek - Oprichter Noordermatch" 
              className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out" 
              src={maretPhoto} 
            />
            
            {/* Professional Floating Badge */}
            <div className="absolute bottom-8 right-8 z-20 bg-white/95 backdrop-blur-md py-4 px-6 rounded-2xl shadow-xl border border-white/20 flex items-center gap-4 animate-in fade-in slide-in-from-right-4 duration-1000">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">verified_user</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-primary uppercase tracking-[0.1em]">Noordermatch</span>
                <span className="block text-xs font-extrabold text-accent-brown uppercase tracking-widest">Maret Moek</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="bg-background-light py-20 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left md:text-left">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Onze Waarden</span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-accent-brown tracking-tight leading-tight">De kracht van de juiste match</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { title: 'Persoonlijk', icon: 'person', desc: 'Wij kijken verder dan het CV. De mens achter de professional staat centraal.' },
              { title: 'Professioneel', icon: 'business_center', desc: 'Jarenlange expertise in de markt zorgt voor een efficiënt wervingsproces.' },
              { title: 'Duurzaam', icon: 'spa', desc: 'Wij gaan niet voor de snelle winst, maar bouwen aan relaties voor jaren.' },
            ].map((p, idx) => (
              <div key={idx} className="group p-10 bg-white rounded-[2rem] border border-accent-brown/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">{p.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-accent-brown mb-4">{p.title}</h4>
                <p className="text-text-muted leading-relaxed text-sm md:text-base">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative bg-accent-brown py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,115,17,0.1),transparent_70%)]"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
          <span className="material-symbols-outlined text-6xl text-primary/30 mb-8">format_quote</span>
          <blockquote className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight serif-font italic">
              "{TESTIMONIALS[0].quote}"
            </p>
          </blockquote>
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-2xl">
              <img src={TESTIMONIALS[0].imageUrl} className="w-full h-full object-cover" alt={TESTIMONIALS[0].name} />
            </div>
            <div className="text-center">
              <cite className="block text-white font-bold not-italic text-xl">{TESTIMONIALS[0].name}</cite>
              <span className="block text-primary text-xs font-bold uppercase tracking-[0.2em] mt-1">{TESTIMONIALS[0].role}, {TESTIMONIALS[0].company}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
