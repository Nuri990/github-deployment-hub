
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-16">
        <div className="max-w-3xl">
          <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Let's Connect</span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-accent-brown tracking-tight mb-6 serif-font">
            Neem contact op.
          </h2>
          <div className="h-px w-24 bg-primary/40 mb-8"></div>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed">
            Heeft u vragen over onze werkwijze, zoekt u talent of bent u zelf op zoek naar een nieuwe uitdaging? Vul het formulier in of gebruik de gegevens hieronder.
          </p>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-7">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Voornaam</label>
                  <input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 outline-none" type="text" placeholder="Uw voornaam" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Achternaam</label>
                  <input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 outline-none" type="text" placeholder="Uw achternaam" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-text-muted">E-mailadres</label>
                <input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 outline-none" type="email" placeholder="naam@bedrijf.nl" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Onderwerp</label>
                <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                  <option disabled selected>Kies een onderwerp</option>
                  <option>Ik zoek personeel</option>
                  <option>Ik zoek een baan</option>
                  <option>Algemene vraag</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Bericht</label>
                <textarea className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-primary/20 outline-none resize-none" rows={5} placeholder="Typ hier uw bericht..."></textarea>
              </div>
              <button className="w-full md:w-auto px-10 py-4 bg-accent-brown text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-primary transition-all shadow-lg shadow-accent-brown/20" type="button">
                Verstuur bericht
              </button>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-8 lg:p-12 border border-[#E6E0DB] rounded-lg shadow-sm">
              <h3 className="text-2xl font-extrabold text-accent-brown mb-10 border-b border-[#E6E0DB] pb-6">Contactgegevens</h3>
              <div className="space-y-10">
                <div className="group">
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                    <span className="text-xs font-bold uppercase tracking-[0.15em]">Bezoekadres</span>
                  </div>
                  <address className="not-italic text-lg text-text-dark font-medium pl-9 transition-colors">
                    Grote Markt 12<br />9712 LW Groningen<br />Nederland
                  </address>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    <span className="material-symbols-outlined">call</span>
                    <span className="text-xs font-bold uppercase tracking-[0.15em]">Telefoon</span>
                  </div>
                  <div className="pl-9 transition-colors">
                    <a href="tel:+31501234567" className="text-lg text-text-dark font-medium hover:text-primary transition-colors">+31 (0)50 123 4567</a>
                    <p className="text-sm text-text-muted mt-1">Ma t/m Vr: 08:30 - 17:30</p>
                  </div>
                </div>
                <div className="group">
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    <span className="material-symbols-outlined">mail</span>
                    <span className="text-xs font-bold uppercase tracking-[0.15em]">E-mail</span>
                  </div>
                  <div className="pl-9 transition-colors">
                    <a href="mailto:info@noordermatch.nl" className="text-lg text-text-dark font-medium hover:text-primary transition-colors">info@noordermatch.nl</a>
                    <p className="text-sm text-text-muted mt-1">Wij reageren binnen 24 uur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[450px] relative border-t border-[#E6E0DB]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2390.176465355606!2d6.566501777080696!3d53.2193834722514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c9cd5449555555%3A0x6b2e1a3b5b5b5b5b!2sGrote%20Markt%2C%20Groningen!5e0!3m2!1snl!2snl!4v1709820000000!5m2!1snl!2snl" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(1)' }} 
          allowFullScreen 
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-accent-brown/5 pointer-events-none"></div>
      </section>
    </div>
  );
};

export default Contact;
