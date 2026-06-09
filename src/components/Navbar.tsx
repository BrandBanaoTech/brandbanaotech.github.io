import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Sizing Tool', href: '#speed' },
    { name: 'Our Work', href: '#guide' }
  ];

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center relative shadow-md border border-slate-800 overflow-hidden">
            {/* Ambient background glow inside logo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#A3D953]/15 to-transparent opacity-100 transition-opacity duration-500"></div>
            <img 
              src={logoImg} 
              alt="B" 
              className="w-5 h-5 object-contain transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" 
            />
          </div>
          <span className="font-display font-extrabold text-xl text-slate-900 tracking-tight leading-none">
            Brand <span className="text-[#528221]">Banao</span>
          </span>
        </a>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 font-sans font-medium text-slate-600 text-[15px]">
          <a href="#about-us" className="hover:text-[#528221] transition-colors relative py-2">
            About Us
          </a>
          
          {/* Custom Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              className="flex items-center gap-1 hover:text-[#528221] transition-colors py-2 focus:outline-hidden"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 mt-1.5 w-52 bg-white rounded-xl shadow-lg border border-slate-100 p-2 z-50 flex flex-col gap-1"
                >
                  <a href="#speed" className="px-3.5 py-2.5 rounded-lg hover:bg-slate-50 text-[14px] font-semibold text-slate-800 hover:text-[#528221] transition-colors">
                    Custom Web App Build
                  </a>
                  <a href="#speed" className="px-3.5 py-2.5 rounded-lg hover:bg-slate-50 text-[14px] font-semibold text-slate-800 hover:text-[#528221] transition-colors">
                    SaaS & Software Engineering
                  </a>
                  <a href="#guide" className="px-3.5 py-2.5 rounded-lg hover:bg-slate-50 text-[14px] font-semibold text-slate-800 hover:text-[#528221] transition-colors">
                    iOS & Android Development
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.slice(1).map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-[#528221] transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <a 
            href="#footer"
            className="border border-[#F2A154] text-[#F2A154] hover:bg-[#F2A154] hover:text-white font-sans font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
          >
            Contact Us
          </a>
        </div>

        {/* Menu Toggle (Mobile) */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 focus:outline-hidden"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden shadow-inner absolute left-0 right-0"
          >
            <div className="px-6 py-5 flex flex-col gap-4 font-sans font-semibold text-slate-700">
              <a 
                href="#about-us" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#528221] transition-colors py-1.5"
              >
                About Us
              </a>
              <div className="flex flex-col gap-2 pl-3 border-l-2 border-slate-100 py-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Our Services</span>
                <a href="#speed" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-[#528221] text-sm">Custom Web Apps</a>
                <a href="#speed" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-[#528221] text-sm">SaaS Engineering</a>
                <a href="#guide" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-[#528221] text-sm">Mobile Products</a>
              </div>
              {navLinks.slice(1).map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#528221] transition-colors py-1.5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a 
                  href="#footer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block bg-[#F2A154] hover:bg-amber-600 text-white font-sans font-bold text-[15px] px-6 py-3 rounded-full transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
