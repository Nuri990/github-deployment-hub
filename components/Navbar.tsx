
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Vacatures', path: '/vacatures' },
    { name: 'Over Ons', path: '/over-ons' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logic to determine if header should be opaque
  const isHeaderOpaque = isScrolled || isMobileMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderOpaque 
          ? 'bg-white py-4 shadow-md border-b border-[#E6E0DB]' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 relative z-[60]">
          <div className="text-primary flex items-center justify-center w-10 h-10 bg-accent-brown rounded-lg text-white">
            <span className="material-symbols-outlined text-2xl">emergency_home</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight uppercase text-accent-brown">
            Noordermatch
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                location.pathname === link.path ? 'text-primary' : 'text-text-muted hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 relative z-[60]">
          <button className="hidden md:flex items-center justify-center h-10 px-6 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-accent-brown transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
            Inschrijven
          </button>
          
          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden flex items-center justify-center p-2 rounded-lg transition-colors ${
              isMobileMenuOpen ? 'text-primary' : 'text-accent-brown'
            }`}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-3xl transition-transform duration-300">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop - Slightly darker and more blur for professional isolation */}
      <div 
        className={`fixed inset-0 bg-accent-brown/60 backdrop-blur-md z-[50] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Drawer - Solid Background */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[55] shadow-[0_0_50px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-in-out md:hidden border-l border-[#E6E0DB] flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10">
          <div className="mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-8 border-b border-primary/10 pb-2">Menu</p>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`text-3xl font-extrabold uppercase tracking-tight transition-all duration-300 flex items-center justify-between group ${
                    location.pathname === link.path ? 'text-primary translate-x-2' : 'text-accent-brown hover:text-primary hover:translate-x-2'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span>{link.name}</span>
                  <span className={`material-symbols-outlined text-xl transition-opacity ${location.pathname === link.path ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    arrow_forward
                  </span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="mt-auto space-y-8">
            <button className="w-full flex items-center justify-center h-14 bg-primary text-white text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-accent-brown transition-all shadow-lg active:scale-[0.98]">
              Inschrijven als professional
            </button>
            
            <div className="pt-8 border-t border-[#E6E0DB]">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted mb-4">Contact & Support</p>
              <div className="flex flex-col gap-4">
                <a href="tel:+31501234567" className="flex items-center gap-3 text-sm font-semibold text-accent-brown hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-primary text-lg">call</span>
                  +31 (0)50 123 4567
                </a>
                <a href="mailto:info@noordermatch.nl" className="flex items-center gap-3 text-sm font-semibold text-accent-brown hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-primary text-lg">mail</span>
                  info@noordermatch.nl
                </a>
              </div>
              
              <div className="mt-8 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-accent-brown hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer border border-[#E6E0DB]">
                  <span className="material-symbols-outlined text-xl">share</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-background-light flex items-center justify-center text-accent-brown hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer border border-[#E6E0DB]">
                  <span className="material-symbols-outlined text-xl">language</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
