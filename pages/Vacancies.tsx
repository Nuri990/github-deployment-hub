
import React, { useState } from 'react';
import { VACANCIES } from '../constants';

const Vacancies: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const filtered = VACANCIES.filter(v => 
    (v.title.toLowerCase().includes(searchTerm.toLowerCase()) || v.company.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (category === '' || v.category === category)
  );

  return (
    <div className="animate-in slide-in-from-bottom duration-700">
      <section className="bg-soft-beige py-16 lg:py-24 border-b border-[#E6E0DB]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Carrièrekansen</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent-brown serif-font mb-6">Openstaande Vacatures</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Ontdek uitdagende posities bij toonaangevende bedrijven in het Noorden. Vind de baan die past bij jouw ambities en talenten.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[85px] z-40 bg-white/95 backdrop-blur-sm border-b border-[#E6E0DB] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-grow w-full lg:w-auto relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">search</span>
              <input 
                type="text"
                placeholder="Zoek op functie, trefwoord..."
                className="w-full pl-12 pr-4 py-3 bg-background-light border border-[#E6E0DB] rounded-lg focus:ring-1 focus:ring-primary focus:border-primary text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <select 
                className="w-full sm:w-48 bg-background-light border border-[#E6E0DB] rounded-lg focus:ring-1 focus:ring-primary text-sm py-3 px-4 appearance-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Alle Branches</option>
                <option value="Financieel">Financieel</option>
                <option value="HR & Management">HR & Management</option>
                <option value="Techniek">Techniek</option>
                <option value="IT & Development">IT & Development</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? filtered.map((v) => (
            <article key={v.id} className="group bg-white border border-[#E6E0DB] rounded-xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-primary text-2xl">arrow_outward</span>
              </div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-soft-beige text-accent-brown text-xs font-bold uppercase tracking-wider rounded-full mb-4">{v.category}</span>
                <h3 className="text-2xl font-bold text-accent-brown mb-2 group-hover:text-primary transition-colors">{v.title}</h3>
                <p className="text-text-muted text-sm">{v.company}</p>
              </div>
              <div className="flex items-center gap-4 text-text-muted text-sm mb-8">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">location_on</span> {v.location}</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">schedule</span> {v.hours}</span>
              </div>
              <div className="mt-auto">
                <button className="w-full py-3 border border-accent-brown/20 text-accent-brown hover:bg-accent-brown hover:text-white text-sm font-bold uppercase tracking-wider rounded-lg transition-all">
                  Bekijk Vacature
                </button>
              </div>
            </article>
          )) : (
            <div className="col-span-full py-20 text-center text-text-muted">
              Geen vacatures gevonden die voldoen aan je criteria.
            </div>
          )}
        </div>
      </section>

      {/* Open application CTA */}
      <section className="bg-accent-brown py-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Open Sollicitatie</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight serif-font">Staat jouw droombaan er niet bij?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Wij zijn altijd op zoek naar talent. Stuur een open sollicitatie en wij kijken samen naar de mogelijkheden binnen ons netwerk.
            </p>
            <button className="h-14 px-8 bg-primary text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-[#b8610d] transition-colors flex items-center gap-2 group">
              <span>Open sollicitatie versturen</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">send</span>
            </button>
          </div>
          <div className="hidden md:block relative h-[400px]">
            <img 
              className="w-full h-full object-cover rounded-lg shadow-2xl opacity-80" 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Professional worker" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vacancies;
