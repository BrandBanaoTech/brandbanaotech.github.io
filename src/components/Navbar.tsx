
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
  Palette,
  MonitorSmartphone,
  Layers3,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import logoImg from "../assets/brandbanao-logo-tight.png";

const services = [
  {
    number: "01",
    title: "Brand Strategy & Identity",
    description: "Build a distinctive and recognisable brand.",
    icon: Palette,
    href: "#services",
  },
  {
    number: "02",
    title: "Websites & Digital Presence",
    description: "Create a professional home for your business.",
    icon: MonitorSmartphone,
    href: "#services",
  },
  {
    number: "03",
    title: "Creative Solutions",
    description: "Bring your brand to life across every touchpoint.",
    icon: Layers3,
    href: "#services",
  },
];

const navLinks = [
  { name: "Our Work", href: "#our-work" },
  { name: "About", href: "#about-us" },
  { name: "Why Us", href: "#why-us" },
  { name: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navbarRef = useRef<HTMLElement>(null);

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  // Close menus on outside click or Escape.
  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenus();
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Lock background scrolling while the mobile drawer is open.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 w-full border-b border-[#0F172B]/[0.07] bg-[#FAFAF7]/95 backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="
          mx-auto grid h-[76px] w-full max-w-[1600px]
          grid-cols-[minmax(0,1fr)_auto]
          items-center px-5
          sm:px-8
          lg:h-[84px] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]
          lg:px-14 xl:px-20
        "
      >
        {/* LEFT: BRAND LOGO */}
        <a
          href="#home"
          aria-label="BrandBanao home"
          onClick={closeMenus}
          className="group flex w-fit shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-4"
        >
          <img
            src={logoImg}
            alt="BrandBanao"
            className="
              block h-[44px] w-auto max-w-[220px]
              object-contain transition-opacity duration-200
              group-hover:opacity-85
              sm:h-[47px] sm:max-w-[245px]
            "
          />
        </a>

        {/* CENTRE: DESKTOP NAVIGATION */}
        <div className="hidden h-full items-center justify-center gap-5 lg:flex xl:gap-6 2xl:gap-8">

          {/* SERVICES DROPDOWN */}
          <div
            className="relative flex h-full items-center"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesDropdownOpen}
              aria-controls="desktop-services-menu"
              onClick={() =>
                setServicesDropdownOpen((open) => !open)
              }
              onKeyDown={(event) => {
                if (event.key === "ArrowDown") {
                  event.preventDefault();
                  setServicesDropdownOpen(true);
                }
              }}
              className={`
                group inline-flex h-full items-center gap-1.5
                border-b-2 px-0.5
                whitespace-nowrap font-['DM_Sans']
                text-[15px] font-semibold
                transition-colors duration-200
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-[#528221]
                ${
                  servicesDropdownOpen
                    ? "border-[#528221] text-[#528221]"
                    : "border-transparent text-[#344238] hover:text-[#528221]"
                }
              `}
            >
              Services

              <ChevronDown
                size={16}
                strokeWidth={1.9}
                className={`transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  id="desktop-services-menu"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.17, ease: "easeOut" }}
                  className="absolute left-1/2 top-full z-50 w-[370px] -translate-x-1/2 pt-2"
                >
                  <div className="overflow-hidden rounded-xl border border-[#0F172B]/10 bg-white p-3 shadow-[0_20px_55px_-24px_rgba(15,23,43,0.25)]">

                    <div className="flex items-center justify-between border-b border-[#0F172B]/10 px-3 pb-4 pt-2">
                      <div>
                        <p className="font-['Manrope'] text-[14px] font-extrabold text-[#0F172B]">
                          What we do
                        </p>
                        <p className="mt-1 font-['DM_Sans'] text-[11px] text-[#89938B]">
                          Thoughtful solutions for your brand.
                        </p>
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.14em] text-[#528221]">
                        BB / 01
                      </span>
                    </div>

                    <div className="space-y-1 py-2">
                      {services.map((service) => {
                        const Icon = service.icon;

                        return (
                          <a
                            key={service.number}
                            href={service.href}
                            onClick={closeMenus}
                            className="group flex items-center gap-3 rounded-lg px-3 py-3 transition-colors hover:bg-[#F3F6EC] focus:outline-none focus-visible:bg-[#F3F6EC]"
                          >
                            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#EDF3E3] text-[#528221] transition-colors group-hover:bg-[#A3D953]/40">
                              <Icon size={19} strokeWidth={1.7} />
                            </span>

                            <span className="min-w-0 flex-1">
                              <span className="block font-['Manrope'] text-[13px] font-bold text-[#0F172B] transition-colors group-hover:text-[#528221]">
                                {service.title}
                              </span>

                              <span className="mt-1 block font-['DM_Sans'] text-[11px] leading-relaxed text-[#89938B]">
                                {service.description}
                              </span>
                            </span>

                            <ArrowUpRight
                              size={15}
                              className="shrink-0 text-[#89938B] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#528221]"
                            />
                          </a>
                        );
                      })}
                    </div>

                    <div className="flex items-center justify-between border-t border-[#0F172B]/10 px-3 pt-3">
                      <a
                        href="#who-we-help"
                        onClick={closeMenus}
                        className="font-['DM_Sans'] text-[12px] font-semibold text-[#66727A] transition-colors hover:text-[#528221]"
                      >
                        Who we help
                      </a>

                      <a
                        href="#pricing"
                        onClick={closeMenus}
                        className="inline-flex items-center gap-1.5 font-['DM_Sans'] text-[12px] font-bold text-[#528221] transition-colors hover:text-[#0F172B]"
                      >
                        Ways to work together
                        <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* OTHER NAVIGATION LINKS */}
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                group relative whitespace-nowrap py-3
                font-['DM_Sans'] text-[15px] font-medium
                text-[#344238] transition-colors duration-200
                hover:text-[#528221]
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-[#528221]
              "
            >
              {link.name}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#528221] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* RIGHT: DESKTOP CTA */}
        <div className="hidden items-center justify-self-end lg:flex">
          <a
            href="#contact"
            className="
              group inline-flex min-h-[47px] items-center gap-3
              whitespace-nowrap rounded-full bg-[#0F172B]
              py-1.5 pl-6 pr-1.5
              font-['DM_Sans'] text-[14px] font-semibold text-white
              shadow-[0_4px_14px_rgba(15,23,43,0.09)]
              transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#26344C]
              hover:shadow-md
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-[#528221] focus-visible:ring-offset-2
            "
          >
            Start a Project

            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#A3D953] text-[#0F172B] transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>

        {/* MOBILE / TABLET TOGGLE */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setServicesDropdownOpen(false);
            setMobileMenuOpen((open) => !open);
          }}
          className="
            relative z-[60] grid h-11 w-11 shrink-0
            place-items-center justify-self-end rounded-full
            border border-[#0F172B]/10 bg-white
            text-[#0F172B] transition-colors
            hover:border-[#528221]/40 hover:text-[#528221]
            focus:outline-none focus-visible:ring-2
            focus-visible:ring-[#528221]
            lg:hidden
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -25, scale: 0.85 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 25, scale: 0.85 }}
              transition={{ duration: 0.15 }}
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenus}
              className="fixed inset-0 z-40 cursor-default bg-[#0F172B]/25 backdrop-blur-[2px] lg:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.18 }}
              className="
                absolute left-0 right-0 top-full z-50
                max-h-[calc(100dvh-76px)] overflow-y-auto
                border-t border-[#0F172B]/10
                bg-[#FAFAF7]
                shadow-[0_25px_45px_-25px_rgba(15,23,43,0.3)]
                lg:hidden
              "
            >
              <div className="mx-auto max-w-[720px] px-5 pb-7 pt-5 sm:px-8">

                {/* Mobile services */}
                <div className="border-b border-[#0F172B]/10">
                  <button
                    type="button"
                    aria-expanded={servicesDropdownOpen}
                    aria-controls="mobile-services-menu"
                    onClick={() =>
                      setServicesDropdownOpen((open) => !open)
                    }
                    className="flex min-h-[54px] w-full items-center justify-between font-['Manrope'] text-[16px] font-bold text-[#0F172B]"
                  >
                    Services

                    <ChevronDown
                      size={18}
                      className={`text-[#528221] transition-transform duration-200 ${
                        servicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {servicesDropdownOpen && (
                      <motion.div
                        id="mobile-services-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="mb-3 border-l-2 border-[#A3D953] pl-4">
                          {services.map((service) => {
                            const Icon = service.icon;

                            return (
                              <a
                                key={service.number}
                                href={service.href}
                                onClick={closeMenus}
                                className="flex items-start gap-3 py-3"
                              >
                                <Icon
                                  size={18}
                                  className="mt-0.5 shrink-0 text-[#528221]"
                                />

                                <span>
                                  <span className="block font-['Manrope'] text-[13px] font-bold text-[#344238]">
                                    {service.title}
                                  </span>

                                  <span className="mt-1 block font-['DM_Sans'] text-[11px] leading-relaxed text-[#89938B]">
                                    {service.description}
                                  </span>
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile links */}
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenus}
                    className="
                      flex min-h-[55px] items-center justify-between
                      border-b border-[#0F172B]/10
                      font-['Manrope'] text-[15px] font-bold
                      text-[#344238] transition-colors hover:text-[#528221]
                    "
                  >
                    {link.name}

                    <ArrowUpRight size={16} className="text-[#89938B]" />
                  </a>
                ))}

                {/* Mobile CTA */}
                <a
                  href="#contact"
                  onClick={closeMenus}
                  className="
                    group mt-6 flex min-h-[55px] items-center
                    justify-between rounded-full bg-[#0F172B]
                    py-2 pl-6 pr-2 font-['DM_Sans']
                    text-[14px] font-bold text-white
                    transition-colors hover:bg-[#26344C]
                  "
                >
                  Start a Project

                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#A3D953] text-[#0F172B]">
                    <ArrowUpRight size={19} />
                  </span>
                </a>

                <p className="mt-5 text-center font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.16em] text-[#89938B]">
                  Strategy · Identity · Digital
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

// import { useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import logoImg from '../assets/logo.png';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

//   const navLinks = [
//     { name: 'About Us', href: '#about-us' },
//     { name: 'Portfolio', href: '#portfolio' },
//     { name: 'FAQ', href: '#faq' },
//     { name: 'Sizing Tool', href: '#speed' },
//     { name: 'Our Work', href: '#guide' }
//   ];

//   return (
//     <nav className="w-full bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
//         {/* Brand Logo */}
//         <a href="#" className="flex items-center gap-2.5 group">
//           <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center relative shadow-md border border-slate-800 overflow-hidden">
//             {/* Ambient background glow inside logo */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-[#A3D953]/15 to-transparent opacity-100 transition-opacity duration-500"></div>
//             <img 
//               src={logoImg} 
//               alt="B" 
//               className="w-5 h-5 object-contain transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" 
//             />
//           </div>
//           <span className="font-display font-extrabold text-xl text-slate-900 tracking-tight leading-none">
//             Brand <span className="text-[#528221]">Banao</span>
//           </span>
//         </a>

//         {/* Center Links (Desktop) */}
//         <div className="hidden md:flex items-center gap-8 font-sans font-medium text-slate-600 text-[15px]">
//           <a href="#about-us" className="hover:text-[#528221] transition-colors relative py-2">
//             About Us
//           </a>
          
//           {/* Custom Dropdown */}
//           <div className="relative">
//             <button 
//               onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
//               onMouseEnter={() => setServicesDropdownOpen(true)}
//               className="flex items-center gap-1 hover:text-[#528221] transition-colors py-2 focus:outline-hidden"
//             >
//               Services <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
//             </button>
//             <AnimatePresence>
//               {servicesDropdownOpen && (
//                 <motion.div 
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 8 }}
//                   onMouseLeave={() => setServicesDropdownOpen(false)}
//                   className="absolute left-1/2 -translate-x-1/2 mt-1.5 w-52 bg-white rounded-xl shadow-lg border border-slate-100 p-2 z-50 flex flex-col gap-1"
//                 >
//                   <a href="#speed" className="px-3.5 py-2.5 rounded-lg hover:bg-slate-50 text-[14px] font-semibold text-slate-800 hover:text-[#528221] transition-colors">
//                     Custom Web App Build
//                   </a>
//                   <a href="#speed" className="px-3.5 py-2.5 rounded-lg hover:bg-slate-50 text-[14px] font-semibold text-slate-800 hover:text-[#528221] transition-colors">
//                     SaaS & Software Engineering
//                   </a>
//                   <a href="#guide" className="px-3.5 py-2.5 rounded-lg hover:bg-slate-50 text-[14px] font-semibold text-slate-800 hover:text-[#528221] transition-colors">
//                     iOS & Android Development
//                   </a>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {navLinks.slice(1).map((link) => (
//             <a 
//               key={link.name} 
//               href={link.href} 
//               className="hover:text-[#528221] transition-colors py-2"
//             >
//               {link.name}
//             </a>
//           ))}
//         </div>

//         {/* Right CTA (Desktop) */}
//         <div className="hidden md:flex items-center">
//           <a 
//             href="#footer"
//             className="border border-[#F2A154] text-[#F2A154] hover:bg-[#F2A154] hover:text-white font-sans font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02]"
//           >
//             Contact Us
//           </a>
//         </div>

//         {/* Menu Toggle (Mobile) */}
//         <button 
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 focus:outline-hidden"
//         >
//           {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden border-t border-slate-100 bg-white overflow-hidden shadow-inner absolute left-0 right-0"
//           >
//             <div className="px-6 py-5 flex flex-col gap-4 font-sans font-semibold text-slate-700">
//               <a 
//                 href="#about-us" 
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="hover:text-[#528221] transition-colors py-1.5"
//               >
//                 About Us
//               </a>
//               <div className="flex flex-col gap-2 pl-3 border-l-2 border-slate-100 py-1">
//                 <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Our Services</span>
//                 <a href="#speed" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-[#528221] text-sm">Custom Web Apps</a>
//                 <a href="#speed" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-[#528221] text-sm">SaaS Engineering</a>
//                 <a href="#guide" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-[#528221] text-sm">Mobile Products</a>
//               </div>
//               {navLinks.slice(1).map((link) => (
//                 <a 
//                   key={link.name} 
//                   href={link.href} 
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="hover:text-[#528221] transition-colors py-1.5"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <div className="pt-2">
//                 <a 
//                   href="#footer"
//                   onClick={() => setMobileMenuOpen(false)}
//                   className="w-full text-center block bg-[#F2A154] hover:bg-amber-600 text-white font-sans font-bold text-[15px] px-6 py-3 rounded-full transition-all duration-300"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }
