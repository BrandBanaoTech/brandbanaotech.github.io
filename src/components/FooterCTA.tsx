// import { Facebook, Twitter, Instagram, Smartphone, Download, CheckCircle, Apple, Play, Sparkles } from 'lucide-react';

export default function FooterCTA() {
  const downloadImageUrl = "/src/assets/images/hand_holding_phone_1780936928269.png";

  const footerLinksLeft = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Services', href: '#about-us' },
    { name: 'Help', href: '#help' },
    { name: 'Contact Us', href: '#footer' }
  ];

  const footerLinksRight = [
    { name: 'FAQ', href: '#faq' },
    { name: 'Terms & Conditions', href: '#faq' },
    { name: 'Privacy Policy', href: '#faq' }
  ];

  return (
    <footer className="w-full bg-[#0B1220] text-slate-400 font-sans relative overflow-hidden" id="download">
      
      {/* ======================================================= */}
      {/* SECTION 6: PRIMARY APP STORES CTA (Dark Navy Banner)    */}
      {/* ======================================================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-24 pb-12">
        <div className="relative bg-gradient-to-br from-[#121c32] to-[#0d172a] rounded-[40px] p-8 md:p-14 overflow-hidden border border-slate-800/60 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Neon backlighting background blobs */}
          <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-emerald-500/5 rounded-full blur-2xl -z-10"></div>

          {/* Left panel: stores CTAs */}
          <div className="w-full lg:w-1/2 text-left flex flex-col gap-5 relative z-10">
            <span className="text-xs text-[#A3D953] font-bold uppercase tracking-wider">
              Empower Your Business
            </span>
            <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-[46px] tracking-tight leading-[1.12]">
              Let's Build Your Vision into Digital Power
            </h2>
            <p className="text-[14.5px] text-slate-400 font-medium leading-relaxed max-w-lg">
              Get modular components, blazing-fast Server APIs, and beautiful responsive interfaces deployed straight to your server container nodes. Let's start estimates or explore our pre-built architectures.
            </p>

            {/* Premium CTA Button Row */}
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <a 
                href="#speed"
                className="bg-[#A3D953] hover:bg-lime-500 hover:scale-[1.02] text-slate-950 transition-all font-sans rounded-xl font-black px-6 py-3.5 flex items-center justify-center gap-2 shadow-lg active:scale-97 cursor-pointer text-xs"
              >
                Configure Spec Blueprint
              </a>

              <a 
                href="#about-us"
                className="bg-slate-900 border border-slate-800 hover:bg-slate-850 hover:scale-[1.02] text-white transition-all font-sans rounded-xl font-extrabold px-6 py-3.5 flex items-center justify-center gap-2 shadow-lg active:scale-97 cursor-pointer text-xs"
              >
                Explore Active Features
              </a>
            </div>
          </div>

          {/* Right panel: dynamic generated phone visual */}
          <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[350px] lg:h-[400px] flex items-center justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.03] transition-transform duration-500">
              <img 
                src={downloadImageUrl} 
                alt="Frameless smartphone in hand presenting advanced app control center dashboard UI"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* Divider line in footer */}
        <div className="w-full h-px bg-slate-800/70 mt-16 md:mt-24 mb-10"></div>

        {/* Bottom footer blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start text-left">
          
          {/* Logo brand & paragraph Column */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2.5 group self-start">
              <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center relative shadow-md border border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#A3D953]/15 to-transparent opacity-100"></div>
                {/* <Sparkles className="w-4 h-4 text-[#A3D953] transition-transform duration-500 group-hover:rotate-12" /> */}
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight leading-none">
                Brand <span className="text-[#A3D953]">Banao</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm">
              Brand Banao is an elite brand building and digital product studio, meticulously engineering high-performance websites, visually arresting brands, and robust SaaS solutions.
            </p>
          </div>

          {/* Links Column Left */}
          <div className="md:col-span-2.5 flex flex-col gap-3">
            <span className="text-[11px] font-bold tracking-wide uppercase text-slate-600">Company</span>
            {footerLinksLeft.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Links Column Right */}
          <div className="md:col-span-2.5 flex flex-col gap-3">
            <span className="text-[11px] font-bold tracking-wide uppercase text-slate-600">Support & Legal</span>
            {footerLinksRight.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social icons Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-[11px] font-bold tracking-wide uppercase text-slate-600">Connect Outdoors</span>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center border border-slate-700/40">
                {/* <Facebook className="w-4 h-4 fill-current" /> */}
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center border border-slate-700/40">
                {/* <Twitter className="w-4 h-4 fill-current" /> */}
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center border border-slate-700/40">
                {/* <Instagram className="w-4 h-4" /> */}
              </a>
            </div>
          </div>

        </div>

        {/* Real copywrite and disclaimer line */}
        <div className="w-full text-center mt-12 py-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-500 font-sans">
          <span>Copyright © 2026 Brand Banao. All rights reserved. Elite Brand & Digital Products Studio.</span>
          <span className="text-slate-500"></span>
        </div>

      </div>
    </footer>
  );
}
