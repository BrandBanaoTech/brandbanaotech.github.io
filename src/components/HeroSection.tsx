
import {
  ArrowRight,
  Check,
  Lightbulb,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import teamImage from "../assets/images/brandbanao-team1.png";

// const highlights = [
//   {
//     icon: Palette,
//     title: "Brand identity",
//     description: "Build recognition",
//   },
//   {
//     icon: Monitor,
//     title: "Websites",
//     description: "Create your digital home",
//   },
//   {
//     icon: Sparkles,
//     title: "Creative design",
//     description: "Make ideas stand out",
//   },
//   {
//     icon: Lightbulb,
//     title: "Digital solutions",
//     description: "Make things work better",
//   },
// ];

const capabilities = [
  "Branding",
  "Websites",
  "Creative design",
  "Digital solutions",
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#FAFAF7] text-[#0F172B]"
    >
      {/* -----------------------------------------------
          BACKGROUND
      ------------------------------------------------ */}

      {/* Soft upper-right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-48 h-[520px] w-[520px] rounded-full bg-[#EAF1D8]/65 blur-3xl"
      />

      {/* Lower-left organic brand shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[240px] -left-[180px] h-[450px] w-[450px] rounded-full border-[58px] border-[#528221]/90"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[190px] w-full bg-gradient-to-t from-[#EAF1D8]/50 to-transparent"
      />

      {/* Lime brand line */}
      {/* <div className="absolute inset-x-0 top-0 h-[3px] bg-[#A3D953]" /> */}

      <div className="relative mx-auto max-w-[1600px] px-5 pb-8 pt-5 sm:px-8 sm:pt-5 lg:px-14 lg:pt-5 xl:px-20">

        {/* -----------------------------------------------
            HERO CONTENT
        ------------------------------------------------ */}

        <div className="grid items-center gap-5 lg:min-h-[610px] lg:grid-cols-[1.04fr_0.96fr] lg:gap-0">

          {/* LEFT: BRAND MESSAGE */}
          <div className="relative z-20 max-w-[740px] pb-8 lg:pb-12">

            {/* Service category */}
            <div className="mb-7 inline-flex max-w-full items-center gap-2.5 rounded-full border border-[#528221]/10 bg-[#EEF4D9] px-4 py-2.5">
              {/* <Sparkles
                size={15}
                strokeWidth={2.2}
                className="shrink-0 text-[#528221]"
              /> */}

              <span className="font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.12em] text-[#416B1D] sm:text-[10px]">
                BRANDING · DIGITAL PRESENCE · CREATIVE SOLUTIONS
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-['Manrope'] text-[clamp(3rem,5.15vw,5.45rem)] font-extrabold leading-[0.98] tracking-[-0.078em] text-[#0F172B]">
              <span className="block whitespace-nowrap">
                Build a Brand
              </span>

              <span className="block whitespace-nowrap">
                <span className="text-[#528221]">People</span>{" "}
                Remember<span className="text-[#F07843]">.</span>
              </span>
            </h1>

            {/* Editorial underline */}
            <svg
              aria-hidden="true"
              viewBox="0 0 335 18"
              fill="none"
              className="mt-2 h-[17px] w-[min(75%,335px)]"
            >
              <path
                d="M3 13 C90 0 215 -1 332 8"
                stroke="#F07843"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            {/* Supporting content */}
            <p className="mt-6 max-w-[490px] font-['DM_Sans'] text-[15px] leading-[1.85] text-[#46534F] sm:text-[16px]">
              From branding to digital solutions, BrandBanao helps businesses
              build a distinctive presence with thoughtful design, modern
              technology and a human touch.
            </p>

            {/* Primary and secondary actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex min-h-[55px] items-center gap-5 rounded-full bg-[#0F172B] py-2 pl-6 pr-2 font-['DM_Sans'] text-[13px] font-bold text-white shadow-[0_8px_24px_rgba(15,23,43,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#26344C] hover:shadow-[0_12px_28px_rgba(15,23,43,0.17)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-2"
              >
                Start a Project

                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#A3D953] text-[#0F172B] transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight size={19} />
                </span>
              </a>

              <a
                href="#services"
                className="group inline-flex min-h-[53px] items-center gap-3 rounded-full border border-[#0F172B]/35 bg-white/50 px-5 font-['DM_Sans'] text-[13px] font-semibold text-[#0F172B] transition-all duration-200 hover:border-[#528221] hover:bg-white hover:text-[#528221] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-2"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#EAF1DC] text-[#528221]">
                  <ArrowRight size={14} />
                </span>

                Explore our services
              </a>
            </div>

            {/* Brand philosophy */}
            {/* <div className="mt-12 border-t border-[#0F172B]/15 pt-5 sm:mt-14">
              <p className="mb-4 font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.16em] text-[#89938B]">
                From the first idea to the final experience
              </p>

              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                {["Strategy", "Identity", "Digital"].map((item, index) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="font-['DM_Sans'] text-[10px] font-bold text-[#528221]">
                      0{index + 1}
                    </span>

                    <span className="font-['Manrope'] text-[12px] font-bold text-[#344238]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* -----------------------------------------------
              RIGHT: TEAM ILLUSTRATION
          ------------------------------------------------ */}

          <div className="relative mx-auto flex min-h-[350px] w-full max-w-[760px] items-end justify-center sm:min-h-[470px] lg:min-h-[620px] lg:justify-end">

            {/* Main organic green backdrop */}
            <div
              aria-hidden="true"
              className="absolute right-[4%] top-[13%] aspect-square w-[77%] rounded-[48%] bg-[#B7D95B]/55"
            />

            {/* Subtle outline */}
            <div
              aria-hidden="true"
              className="absolute right-[8%] top-[7%] aspect-square w-[68%] rounded-[48%] border border-[#528221]/20"
            />

            {/* Lightbulb detail */}
            <div className="absolute left-[8%] top-[9%] z-20 hidden sm:grid">
              <div className="relative grid h-14 w-14 place-items-center rounded-full border border-[#A3D953] bg-[#FAFAF7]/85 text-[#528221]">
                <Lightbulb size={29} strokeWidth={1.5} />
              </div>
            </div>

            {/* Handwritten brand accent */}
            <div
              className="absolute right-[9%] top-[6%] z-20 hidden -rotate-[8deg] text-center sm:block"
              aria-hidden="true"
            >
              <p
                className="text-[clamp(2rem,3.3vw,3.2rem)] font-bold leading-[0.9] text-[#0F172B]"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Build Your
                <br />
                Brand
              </p>

              <span className="mx-auto mt-2 block h-[4px] w-24 rotate-[-9deg] rounded-full bg-[#F07843]" />
            </div>

            {/* Main transparent image */}
            <motion.img
              src={teamImage}
              alt="Creative people collaborating around a laptop on a brand project"
              initial={
                reduceMotion ? false : { opacity: 0, y: 18 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                ease: "easeOut",
              }}
              fetchPriority="high"
              draggable={false}
              className="relative z-10 block h-auto max-h-[620px] w-full select-none object-contain object-bottom lg:absolute lg:bottom-0 lg:left-1/2 lg:w-[108%] lg:max-w-none lg:-translate-x-1/2"
            />

            {/* Floating capability panel */}
            <div className="absolute bottom-[9%] right-0 z-20 hidden w-[168px] border border-[#0F172B]/5 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,43,0.12)] sm:block lg:right-[-1%] lg:bottom-[20%]">
              <p className="mb-3 font-['Manrope'] text-[12px] font-extrabold text-[#0F172B]">
                What we build
              </p>

              <ul className="space-y-2.5">
                {capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-['DM_Sans'] text-[10px] font-semibold text-[#344238]"
                  >
                    <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#528221] text-white">
                      <Check size={11} strokeWidth={3} />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* -----------------------------------------------
            BOTTOM CAPABILITY STRIP
        ------------------------------------------------ */}

        {/* <div className="relative z-30 mt-5 overflow-hidden rounded-2xl border border-[#0F172B]/5 bg-white shadow-[0_15px_45px_rgba(15,23,43,0.08)] sm:mt-0 lg:mt-[-22px]">
          <div className="grid grid-cols-2 divide-x divide-y divide-[#0F172B]/10 sm:grid-cols-4 sm:divide-y-0">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex min-h-[83px] items-center gap-3 px-4 py-4 sm:justify-center sm:px-4 lg:gap-4 lg:px-5"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EDF4DE] text-[#528221]">
                    <Icon size={19} strokeWidth={1.9} />
                  </span>

                  <div>
                    <p className="font-['Manrope'] text-[11px] font-extrabold leading-tight text-[#0F172B] sm:text-[12px] lg:text-[13px]">
                      {item.title}
                    </p>

                    <p className="mt-1 font-['DM_Sans'] text-[9px] leading-[1.5] text-[#89938B]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}

// import {
//   ArrowRight,
//   ArrowUpRight,
//   Check,
//   Lightbulb,
//   Palette,
//   Monitor,
//   Sparkles,
// } from "lucide-react";
// import { motion, useReducedMotion } from "motion/react";
// import teamImage from "../assets/images/brandbanao-team1.png";

// const highlights = [
//   { icon: Palette, title: "Brand identity" },
//   { icon: Monitor, title: "Websites" },
//   { icon: Sparkles, title: "Creative design" },
//   { icon: Lightbulb, title: "Digital solutions" },
// ];

// export default function HeroSection() {
//   const reduceMotion = useReducedMotion();

//   return (
//     <section
//       id="home"
//       className="relative isolate overflow-hidden bg-[#FAFAF7] text-[#0F172B]"
//     >
//       {/* Soft organic background shapes */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -right-32 -top-40 h-[470px] w-[470px] rounded-full bg-[#EAF1D8]/70 blur-[2px]"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute -bottom-64 -left-48 h-[520px] w-[520px] rounded-full bg-[#E7EFD5]/70"
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute bottom-[-190px] left-[-115px] h-[340px] w-[340px] rounded-full border-[52px] border-[#528221]/90"
//       />

//       <div className="absolute inset-x-0 top-0 h-[3px] bg-[#A3D953]" />

//       <div className="relative mx-auto max-w-[1600px] px-5 pb-0 pt-14 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20 xl:px-20">

//         {/* Main two-column composition */}
//         <div className="grid items-center gap-5 lg:min-h-[610px] lg:grid-cols-[0.96fr_1.04fr] lg:gap-0">

//           {/* LEFT: Headline and calls to action */}
//           <div className="relative z-20 max-w-[700px] pb-8 lg:pb-20">

//             {/* Service label */}
//             <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#528221]/10 bg-[#EEF4D9] px-4 py-2.5">
//               <Sparkles
//                 size={15}
//                 strokeWidth={2.2}
//                 className="text-[#528221]"
//               />
//               <span className="font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.12em] text-[#416B1D] sm:text-[10px]">
//                 BRANDING · DIGITAL PRESENCE · CREATIVE SOLUTIONS
//               </span>
//             </div>

//             {/* Main heading */}
//             <h1 className="font-['Manrope'] text-[clamp(3.25rem,6.2vw,6.15rem)] font-extrabold leading-[0.94] tracking-[-0.08em] text-[#0F172B]">
//               Build a Brand
//               <br />
//               <span className="text-[#528221]">People</span>{" "}
//               Remember<span className="text-[#F07843]">.</span>
//             </h1>

//             {/* Hand-drawn orange underline */}
//             <svg
//               aria-hidden="true"
//               viewBox="0 0 340 18"
//               className="mt-1 h-[17px] w-[min(75%,340px)]"
//               fill="none"
//             >
//               <path
//                 d="M3 13 C84 0 219 -2 335 8"
//                 stroke="#F07843"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//               />
//             </svg>

//             {/* Supporting copy */}
//             <p className="mt-7 max-w-[500px] font-['DM_Sans'] text-[15px] leading-[1.85] text-[#3F4C50] sm:text-[17px]">
//               From branding to digital solutions, BrandBanao helps businesses
//               build a distinctive presence with thoughtful design, modern
//               technology and a human touch.
//             </p>

//             {/* Main CTAs */}
//             <div className="mt-9 flex flex-wrap items-center gap-4">
//               <a
//                 href="#contact"
//                 className="group inline-flex min-h-[55px] items-center gap-5 rounded-full bg-[#0F172B] py-2 pl-6 pr-2 font-['DM_Sans'] text-[13px] font-bold text-white shadow-[0_8px_20px_rgba(15,23,43,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#26344C] hover:shadow-[0_12px_25px_rgba(15,23,43,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-2"
//               >
//                 Start a Project
//                 <span className="grid h-10 w-10 place-items-center rounded-full bg-[#A3D953] text-[#0F172B] transition-transform group-hover:translate-x-0.5">
//                   <ArrowRight size={19} />
//                 </span>
//               </a>

//               <a
//                 href="#services"
//                 className="group inline-flex min-h-[52px] items-center gap-3 rounded-full border border-[#0F172B]/50 px-5 font-['DM_Sans'] text-[13px] font-semibold text-[#0F172B] transition-all hover:border-[#528221] hover:bg-white hover:text-[#528221] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-2"
//               >
//                 <span className="grid h-7 w-7 place-items-center rounded-full bg-[#EAF1DC] text-[#528221]">
//                   <ArrowRight size={14} />
//                 </span>
//                 Explore our services
//               </a>
//             </div>

//             {/* Short brand philosophy */}
//             <div className="mt-12 flex items-center gap-3 border-t border-[#0F172B]/15 pt-5">
//               <div className="flex -space-x-1">
//                 <span className="h-2 w-2 rounded-full bg-[#528221]" />
//                 <span className="h-2 w-2 rounded-full bg-[#A3D953]" />
//                 <span className="h-2 w-2 rounded-full bg-[#F07843]" />
//               </div>
//               <p className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.14em] text-[#69766D]">
//                 Strategy <span className="mx-1.5 text-[#A3D953]">·</span>
//                 Identity <span className="mx-1.5 text-[#A3D953]">·</span>
//                 Digital
//               </p>
//             </div>
//           </div>

//           {/* RIGHT: Transparent team visual composition */}
//           <div className="relative mx-auto min-h-[390px] w-full max-w-[770px] sm:min-h-[520px] lg:min-h-[650px] lg:ml-auto">

//             {/* Large lime backdrop */}
//             <div
//               aria-hidden="true"
//               className="absolute right-[3%] top-[12%] h-[65%] w-[78%] rounded-[48%] bg-[#B7D95B]/65"
//             />

//             <div
//               aria-hidden="true"
//               className="absolute right-[9%] top-[5%] h-[74%] w-[68%] rounded-[48%] border border-[#528221]/20"
//             />

//             {/* Decorative lightbulb */}
//             <div className="absolute left-[13%] top-[9%] z-20 hidden sm:block">
//               <div className="relative grid h-14 w-14 place-items-center rounded-full border border-[#A3D953] bg-[#FAFAF7]/80 text-[#528221]">
//                 <Lightbulb size={29} strokeWidth={1.5} />
//                 <span className="absolute -right-2 top-0 h-2 w-2 rounded-full bg-[#F07843]" />
//               </div>
//             </div>

//             {/* Brand-building script */}
//             <div className="absolute right-[10%] top-[7%] z-20 hidden -rotate-[8deg] text-center sm:block">
//               <p
//                 className="font-['Caveat'] text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[0.92] text-[#0F172B]"
//                 style={{ fontFamily: "'Caveat', cursive" }}
//               >
//                 Build Your
//                 <br />
//                 Brand
//               </p>
//               <span className="mx-auto mt-2 block h-[4px] w-24 rotate-[-9deg] rounded-full bg-[#F07843]" />
//             </div>

//             {/* Small idea accents */}
//             <div
//               aria-hidden="true"
//               className="absolute left-[5%] top-[24%] z-20 hidden rotate-[-25deg] sm:flex"
//             >
//               <span className="h-7 w-3 rounded-full bg-[#528221]" />
//               <span className="ml-2 mt-5 h-5 w-2.5 rounded-full bg-[#A3D953]" />
//             </div>

//             {/* Main transparent group image */}
//             <motion.img
//               src={teamImage}
//               alt="A group of creative people collaborating on a brand and website"
//               initial={reduceMotion ? false : { opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.15 }}
//               transition={{
//                 duration: reduceMotion ? 0 : 0.8,
//                 ease: "easeOut",
//               }}
//               draggable={false}
//               fetchPriority="high"
//               className="absolute bottom-0 left-[-7%] z-10 h-auto max-h-[620px] w-[112%] max-w-none select-none object-contain object-bottom sm:left-[-5%] sm:w-[110%] lg:left-[-10%] lg:w-[116%]"
//               style={{
//                 WebkitMaskImage:
//                   "linear-gradient(to right, transparent 0%, black 10%, black 100%)",
//                 maskImage:
//                   "linear-gradient(to right, transparent 0%, black 10%, black 100%)",
//               }}
//             />

//             {/* Capability card */}
//             <div className="absolute bottom-[20%] right-0 z-20 w-[145px] border border-[#0F172B]/5 bg-white/95 p-3 shadow-[0_12px_35px_rgba(15,23,43,0.12)] sm:bottom-[25%] sm:w-[176px] sm:p-4">
//               <p className="mb-3 font-['Manrope'] text-[11px] font-extrabold text-[#0F172B] sm:text-[12px]">
//                 What we build
//               </p>

//               <ul className="space-y-2.5">
//                 {[
//                   "Branding",
//                   "Websites",
//                   "Creative design",
//                   "Digital solutions",
//                 ].map((item) => (
//                   <li
//                     key={item}
//                     className="flex items-center gap-2 font-['DM_Sans'] text-[10px] font-semibold text-[#344238] sm:text-[11px]"
//                   >
//                     <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#528221] text-white">
//                       <Check size={11} strokeWidth={3} />
//                     </span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bottom information strip */}
//         <div className="relative z-30 mt-[-5px] rounded-2xl border border-[#0F172B]/5 bg-white px-3 py-4 shadow-[0_18px_50px_rgba(15,23,43,0.08)] sm:px-5 sm:py-5 lg:mt-[-26px] lg:px-8">
//           <div className="grid grid-cols-2 divide-x divide-y divide-[#0F172B]/10 sm:grid-cols-4 sm:divide-y-0">
//             {highlights.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className="flex min-h-[62px] items-center gap-3 px-3 py-3 sm:justify-center sm:px-4 lg:gap-4"
//                 >
//                   <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#EDF4DE] text-[#528221]">
//                     <Icon size={19} strokeWidth={1.9} />
//                   </span>

//                   <div>
//                     <p className="font-['Manrope'] text-[11px] font-extrabold text-[#0F172B] sm:text-[13px]">
//                       {item.title}
//                     </p>
//                     <p className="mt-0.5 font-['DM_Sans'] text-[9px] text-[#89938B]">
//                       BrandBanao / 0{index + 1}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
