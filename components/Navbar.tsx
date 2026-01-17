
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Membership', path: '/membership' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'glass py-5 border-b border-white/5 shadow-2xl' : 'bg-transparent py-10'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-xl font-light tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">
          THRIVE <span className="text-[#94A187] font-medium italic">HOUSE</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[10px] font-semibold tracking-[0.3em] uppercase transition-all duration-300 ${location.pathname === link.path ? 'text-[#94A187]' : 'text-neutral-500 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/apply" 
            className="px-8 py-2.5 bg-[#94A187] text-[#0D110E] text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 rounded-sm"
          >
            Apply
          </Link>
        </div>

        <div className="md:hidden">
            <Link to="/apply" className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#94A187]">
                Apply
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
