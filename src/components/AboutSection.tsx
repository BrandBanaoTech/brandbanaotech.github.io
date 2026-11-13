
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  CircleUserRound,
  Heart,
  Users,
  Palette,
  MonitorSmartphone,
  Shapes,
} from "lucide-react";

import logoImg from "../assets/brandbanao-logo-transparent.png";

const audiences = [
  {
    number: "01",
    title: "Businesses",
    description:
      "For local businesses, startups and entrepreneurs building their presence.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Creators",
    description:
      "For creators who want to present their work and grow their identity.",
    icon: Camera,
  },
  {
    number: "03",
    title: "Individuals",
    description:
      "For professionals and independent talents building a personal brand.",
    icon: CircleUserRound,
  },
  {
    number: "04",
    title: "Passion projects",
    description:
      "For personal ideas, hobbies and projects ready to take shape.",
    icon: Heart,
  },
  {
    number: "05",
    title: "Communities",
    description:
      "For groups, organisations and initiatives bringing people together.",
    icon: Users,
  },
];

const disciplines = [
  {
    number: "01",
    title: "Brand identity",
    description: "Visual identity and creative brand assets.",
    icon: Palette,
  },
  {
    number: "02",
    title: "Digital presence",
    description: "Websites, portfolios and digital experiences.",
    icon: MonitorSmartphone,
  },
  {
    number: "03",
    title: "Creative solutions",
    description: "Thoughtful content and practical digital tools.",
    icon: Shapes,
  },
];

function StudioVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative isolate min-h-[470px] overflow-hidden rounded-[30px] bg-[#E9EDE3] p-5 sm:min-h-[510px] sm:p-7">
        {/* Background artwork */}
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#A3D953]/45 blur-[2px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#F07843]/10 blur-[35px]"
        />
        <div
          aria-hidden="true"
          className="absolute right-10 top-28 h-32 w-32 rounded-full border border-[#528221]/15"
        />

        {/* Brand header */}
        <div className="relative flex items-center justify-between">
          <img
            src={logoImg}
            alt="BrandBanao"
            className="h-10 w-auto object-contain sm:h-11"
          />

          <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.17em] text-[#66727A]">
            Studio / 001
          </span>
        </div>

        {/* Main brand statement */}
        <div className="relative mt-9 overflow-hidden rounded-[24px] bg-[#0F172B] p-6 shadow-[0_22px_45px_-24px_rgba(15,23,43,0.32)] sm:mt-11 sm:p-8">
          <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.2em] text-[#A3D953]">
            The idea behind BrandBanao
          </span>

          <h3 className="mt-6 max-w-[340px] font-['Manrope'] text-[clamp(2rem,4vw,3.1rem)] font-extrabold leading-[1.05] tracking-[-0.065em] text-white">
            Your idea.
            <br />
            Your identity.
            <br />
            <span className="text-[#A3D953]">Your way forward.</span>
          </h3>

          <p className="mt-5 max-w-[300px] font-['DM_Sans'] text-[12px] leading-[1.8] text-white/60 sm:text-[13px]">
            Different ideas need different ways to take shape.
          </p>

          {/* Decorative corner accent */}
          <div
            aria-hidden="true"
            className="absolute -bottom-12 -right-10 h-36 w-36 rounded-full border-[24px] border-white/[0.05]"
          />
          <div className="absolute right-7 top-7 h-3 w-3 rounded-full bg-[#F07843]" />
        </div>

        {/* Three disciplines */}
        <div className="relative mt-4 grid grid-cols-3 gap-2.5">
          {disciplines.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="rounded-[17px] border border-[#0F172B]/[0.07] bg-white/90 p-3 sm:p-4"
              >
                <Icon
                  size={19}
                  strokeWidth={1.7}
                  className="text-[#528221]"
                />
                <p className="mt-5 font-['Manrope'] text-[10px] font-extrabold leading-tight text-[#0F172B] sm:text-[11px]">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative mt-5 flex items-center justify-between px-1">
          <span className="font-['DM_Sans'] text-[10px] text-[#66727A]">
            Brand building · Digital · Creative
          </span>
          <span className="font-['Caveat'] text-[20px] font-semibold text-[#528221] sm:text-[22px]">
            Make it yours.
          </span>
        </div>
      </div>

      {/* Floating note */}
      <div className="absolute -bottom-5 -right-1 flex items-center gap-3 rounded-2xl border border-[#E7E8E0] bg-white px-4 py-3 shadow-[0_14px_40px_rgba(15,23,43,0.10)] sm:-right-5 sm:px-5 sm:py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EDF3E3] text-[#528221]">
          <ArrowUpRight size={19} />
        </div>
        <div>
          <p className="font-['Manrope'] text-[11px] font-extrabold text-[#0F172B]">
            Start with an idea
          </p>
          <p className="mt-0.5 font-['DM_Sans'] text-[10px] text-[#89938B]">
            Build from there.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about-us"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#FAFAF7] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* Section eyebrow */}
        <div className="mb-14 flex items-center gap-4 sm:mb-16">
          <span className="h-[2px] w-8 bg-[#528221]" />

          <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.22em] text-[#528221]">
            About BrandBanao
          </span>

          <span className="font-['DM_Sans'] text-xs text-[#89938B]">
            / Who we are
          </span>
        </div>

        {/* Main story */}
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12 xl:gap-20">

          {/* Introduction */}
          <div className="lg:col-span-7">
            <p className="mb-6 font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.19em] text-[#89938B]">
              Brand building & digital growth studio
            </p>

            <h2
              id="about-heading"
              className="max-w-[820px] font-['Manrope'] text-[clamp(2.8rem,5.5vw,5.2rem)] font-extrabold leading-[1.06] tracking-[-0.065em] text-[#0F172B]"
            >
              Everyone has a brand.
              <span className="relative mt-1 block text-[#528221]">
                Let's build yours.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 390 13"
                  className="absolute -bottom-2 left-0 h-3 w-[min(100%,390px)]"
                  fill="none"
                >
                  <path
                    d="M3 9C95 1 266 1 387 7"
                    stroke="#F07843"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-9 max-w-[650px] font-['DM_Sans'] text-[16px] leading-[1.9] text-[#52606A] sm:text-[17px]">
              BrandBanao is a brand building and digital growth studio
              helping businesses, creators, professionals and communities
              shape how they present themselves to the world.
            </p>

            <p className="mt-5 max-w-[620px] font-['DM_Sans'] text-[14px] leading-[1.95] text-[#7C8788] sm:text-[15px]">
              From visual identity and websites to creative assets and
              practical digital solutions, we bring different pieces
              together to help turn ideas into clear, useful and
              recognisable brand experiences.
            </p>

            <p className="mt-5 max-w-[620px] font-['DM_Sans'] text-[14px] leading-[1.95] text-[#7C8788] sm:text-[15px]">
              Whether you're starting from scratch, growing an existing
              business, building a personal presence or bringing a
              passion project to life, the work begins with understanding
              what you're trying to create.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#services"
                className="group inline-flex min-h-[51px] items-center gap-4 rounded-full bg-[#0F172B] py-1.5 pl-6 pr-1.5 font-['Manrope'] text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#26344C]"
              >
                Explore what we do
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#A3D953] text-[#0F172B] transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight size={18} />
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-['Manrope'] text-[12px] font-bold text-[#528221] transition-colors hover:text-[#F07843]"
              >
                Talk about your idea
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Visual composition */}
          <div className="lg:col-span-5">
            <StudioVisual />
          </div>
        </div>

        {/* Audience pathways */}
        <div className="mt-28 border-t border-[#E5E7DF] pt-11 sm:mt-36 sm:pt-14">
          <div className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#528221]">
                Who we work with
              </p>

              <h3 className="mt-3 max-w-[600px] font-['Manrope'] text-[clamp(1.8rem,3.4vw,2.7rem)] font-extrabold leading-tight tracking-[-0.05em] text-[#0F172B]">
                Different people. Different ideas.{" "}
                <span className="text-[#528221]">One place to begin.</span>
              </h3>
            </div>

            <p className="max-w-[390px] font-['DM_Sans'] text-[13px] leading-[1.8] text-[#89938B]">
              Your starting point may be different, and your solution
              should reflect that. We help you find the right way forward.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group flex min-h-[205px] flex-col rounded-[20px] border border-[#E7E8E0] bg-white/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#A3D953] hover:bg-white hover:shadow-[0_14px_35px_rgba(15,23,43,0.055)] sm:p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-['Manrope'] text-[10px] font-bold tracking-[0.15em] text-[#A0A89F]">
                      {item.number}
                    </span>

                    <Icon
                      size={20}
                      strokeWidth={1.7}
                      className="text-[#528221] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6"
                    />
                  </div>

                  <h4 className="mt-8 font-['Manrope'] text-[16px] font-extrabold tracking-[-0.03em] text-[#0F172B]">
                    {item.title}
                  </h4>

                  <p className="mt-2 font-['DM_Sans'] text-[12px] leading-[1.8] text-[#89938B]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-14 flex flex-col gap-3 border-t border-[#E5E7DF] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-['Manrope'] text-[14px] font-bold tracking-[-0.025em] text-[#0F172B]">
            Your idea deserves a thoughtful beginning.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-['Manrope'] text-[12px] font-bold text-[#528221] transition-colors hover:text-[#F07843]"
          >
            Start a conversation
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

// import brandLogo from "../assets/brandbanao-logo-transparent.png";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Compass,
//   Layers3,
//   Lightbulb,
//   Palette,
//   PencilRuler,
//   Rocket,
// } from "lucide-react";

// const audiences = [
//   "Businesses",
//   "Creators",
//   "Personal brands",
//   "Communities",
//   "Passion projects",
// ];

// const process = [
//   {
//     number: "01",
//     title: "Discover",
//     description: "Understand the idea, audience and goals.",
//     icon: Compass,
//   },
//   {
//     number: "02",
//     title: "Scope",
//     description: "Identify the right solution and deliverables.",
//     icon: Layers3,
//   },
//   {
//     number: "03",
//     title: "Create",
//     description: "Bring the direction to life with care.",
//     icon: PencilRuler,
//   },
//   {
//     number: "04",
//     title: "Review",
//     description: "Refine the work through considered feedback.",
//     icon: Lightbulb,
//   },
//   {
//     number: "05",
//     title: "Launch",
//     description: "Prepare the final work for the real world.",
//     icon: Rocket,
//   },
// ];

// function StudioVisual() {
//   return (
//     <div className="relative mx-auto w-full max-w-[510px]">
//       {/* Background artwork */}
//       <div className="relative min-h-[450px] overflow-hidden rounded-[30px] bg-[#0F172B] p-6 sm:min-h-[490px] sm:p-8">

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-24 -top-24 h-[340px] w-[340px] rounded-full border border-white/[0.10]"
//         />

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -right-10 -top-10 h-[240px] w-[240px] rounded-full border border-white/[0.10]"
//         />

//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -bottom-28 -left-20 h-[300px] w-[300px] rounded-full bg-[#528221]/30 blur-[70px]"
//         />

//         {/* Visual header */}
//         <div className="relative z-10 flex items-center justify-between">
//           <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
//             The BrandBanao approach
//           </span>
//           <span className="font-['DM_Sans'] text-xs text-white/35">
//             BB / 001
//           </span>
//         </div>

//         {/* Main brand board */}
//         <div className="relative z-10 mt-12 rounded-[23px] bg-[#FAFAF7] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.2)] sm:mt-14 sm:p-8">

//           <div className="flex min-h-[65px] items-center justify-between gap-3">
//             <img
//               src={brandLogo}
//               alt="BrandBanao"
//               className="h-[43px] w-auto max-w-[190px] object-contain object-left"
//             />

//             <span className="shrink-0 rounded-full border border-[#528221]/20 px-3 py-1.5 font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.13em] text-[#528221]">
//               Studio notes
//             </span>
//           </div>

//           <div className="mt-8 border-t border-[#E5E7DF] pt-6">
//             <p className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#89938B]">
//               What we believe
//             </p>

//             <h3 className="mt-4 font-['Manrope'] text-[clamp(1.8rem,3.4vw,2.65rem)] font-extrabold leading-[1.12] tracking-[-0.06em] text-[#0F172B]">
//               Ideas deserve to be seen.
//               <span className="block text-[#528221]">
//                 And understood.
//               </span>
//             </h3>

//             <p className="mt-4 max-w-[320px] font-['DM_Sans'] text-[13px] leading-[1.8] text-[#66727A]">
//               Identity, digital presence and creative solutions —
//               thoughtfully brought together.
//             </p>
//           </div>

//           {/* Service signatures */}
//           <div className="mt-7 grid grid-cols-3 gap-2">
//             <div className="rounded-xl bg-[#EDF3E3] px-2 py-3 text-center">
//               <Palette
//                 size={19}
//                 className="mx-auto text-[#528221]"
//                 strokeWidth={1.7}
//               />
//               <span className="mt-2 block font-['Manrope'] text-[9px] font-bold text-[#344238] sm:text-[10px]">
//                 Identity
//               </span>
//             </div>

//             <div className="rounded-xl bg-[#F1F0E9] px-2 py-3 text-center">
//               <Layers3
//                 size={19}
//                 className="mx-auto text-[#0F172B]"
//                 strokeWidth={1.7}
//               />
//               <span className="mt-2 block font-['Manrope'] text-[9px] font-bold text-[#344238] sm:text-[10px]">
//                 Digital
//               </span>
//             </div>

//             <div className="rounded-xl bg-[#FCEDE6] px-2 py-3 text-center">
//               <Lightbulb
//                 size={19}
//                 className="mx-auto text-[#D96736]"
//                 strokeWidth={1.7}
//               />
//               <span className="mt-2 block font-['Manrope'] text-[9px] font-bold text-[#344238] sm:text-[10px]">
//                 Creative
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Decorative accent */}
//         <div
//           aria-hidden="true"
//           className="absolute bottom-8 right-8 h-12 w-12 rotate-12 rounded-[15px] bg-[#A3D953] shadow-lg shadow-black/10"
//         />

//         <div
//           aria-hidden="true"
//           className="absolute bottom-[88px] right-6 h-4 w-4 rounded-full bg-[#F07843] sm:right-9"
//         />

//         {/* Bottom note */}
//         <div className="relative z-10 mt-8 flex items-center gap-2">
//           <span className="h-1.5 w-1.5 rounded-full bg-[#A3D953]" />
//           <span className="font-['DM_Sans'] text-[10px] font-medium tracking-[0.1em] text-white/55">
//             EVERYONE HAS A BRAND. LET'S BUILD YOURS.
//           </span>
//         </div>
//       </div>

//       {/* Floating editorial note */}
//       <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-[#E5E7DF] bg-white px-4 py-3.5 shadow-[0_12px_40px_rgba(15,23,43,0.10)] sm:-left-7">
//         <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#EDF3E3]">
//           <Lightbulb
//             size={20}
//             className="text-[#528221]"
//             strokeWidth={1.7}
//           />
//         </span>
//         <span>
//           <span className="block font-['Manrope'] text-[12px] font-extrabold text-[#0F172B]">
//             Start with an idea.
//           </span>
//           <span className="mt-0.5 block font-['DM_Sans'] text-[10px] text-[#89938B]">
//             Build towards something meaningful.
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default function AboutSection() {
//   return (
//     <section
//       id="about-us"
//       aria-labelledby="about-heading"
//       className="relative overflow-hidden bg-[#FAFAF7] py-24 sm:py-28 lg:py-32"
//     >
//       <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">

//         {/* Section eyebrow */}
//         <div className="mb-14 flex items-center gap-4 sm:mb-16">
//           <span className="h-[2px] w-8 bg-[#528221]" />

//           <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.22em] text-[#528221]">
//             About BrandBanao
//           </span>

//           <span className="font-['DM_Sans'] text-xs text-[#89938B]">
//             / The studio behind the ideas
//           </span>
//         </div>

//         {/* Main introduction */}
//         <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">

//           {/* Editorial content */}
//           <div className="lg:col-span-6 xl:col-span-7">

//             <span className="inline-flex items-center gap-2 rounded-full border border-[#528221]/15 bg-[#EDF3E3] px-3.5 py-2 font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#528221]">
//               <span className="h-1.5 w-1.5 rounded-full bg-[#528221]" />
//               Brand building & digital growth
//             </span>

//             <h2
//               id="about-heading"
//               className="mt-8 max-w-[800px] font-['Manrope'] text-[clamp(2.75rem,5.6vw,5.35rem)] font-extrabold leading-[1.04] tracking-[-0.067em] text-[#0F172B]"
//             >
//               Every idea has a story.
//               <span className="relative mt-1 block text-[#528221]">
//                 Let's give it shape.
//                 <svg
//                   aria-hidden="true"
//                   viewBox="0 0 390 14"
//                   className="absolute -bottom-3 left-0 h-3 w-full max-w-[390px]"
//                   fill="none"
//                 >
//                   <path
//                     d="M3 9C95 2 274 1 387 7"
//                     stroke="#F07843"
//                     strokeWidth="3"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </span>
//             </h2>

//             <p className="mt-10 max-w-[660px] font-['DM_Sans'] text-[16px] leading-[1.9] text-[#52606A] sm:text-[17px]">
//               BrandBanao is a brand-building and digital growth studio
//               helping businesses, creators, individuals and communities
//               shape their identity and establish a professional digital
//               presence.
//             </p>

//             <p className="mt-5 max-w-[650px] font-['DM_Sans'] text-[14px] leading-[1.95] text-[#7B878B] sm:text-[15px]">
//               From a first logo or portfolio to a complete digital launch,
//               we bring visual identity, thoughtful design and practical
//               digital solutions together to help turn ideas into clear,
//               useful brand experiences.
//             </p>

//             {/* Brand philosophy */}
//             <div className="mt-9 flex max-w-[620px] items-start gap-4 border-l-[3px] border-[#A3D953] py-1 pl-5">
//               <p className="font-['Manrope'] text-[15px] font-semibold leading-[1.7] tracking-[-0.02em] text-[#26344C] sm:text-[16px]">
//                 Whether you're building a business, growing a personal
//                 brand or bringing a passion project to life, your idea
//                 deserves a thoughtful starting point.
//               </p>
//             </div>

//             {/* CTA */}
//             <div className="mt-10 flex flex-wrap items-center gap-5">
//               <a
//                 href="#our-work"
//                 className="group inline-flex min-h-[51px] items-center gap-3 rounded-full bg-[#0F172B] py-1.5 pl-6 pr-1.5 font-['Manrope'] text-[12px] font-bold text-white shadow-[0_5px_16px_rgba(15,23,43,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#26344C]"
//               >
//                 Explore what we create
//                 <span className="grid h-10 w-10 place-items-center rounded-full bg-[#A3D953] text-[#0F172B] transition-transform duration-300 group-hover:translate-x-0.5">
//                   <ArrowUpRight size={18} />
//                 </span>
//               </a>

//               <a
//                 href="#contact"
//                 className="group inline-flex items-center gap-2 font-['Manrope'] text-[12px] font-bold text-[#528221] transition-colors hover:text-[#F07843]"
//               >
//                 Start a conversation
//                 <ArrowRight
//                   size={16}
//                   className="transition-transform duration-200 group-hover:translate-x-1"
//                 />
//               </a>
//             </div>
//           </div>

//           {/* Brand visual */}
//           <div className="lg:col-span-6 xl:col-span-5">
//             <StudioVisual />
//           </div>
//         </div>

//         {/* Audience strip */}
//         <div className="mt-28 border-t border-[#E5E7DF] pt-10 sm:mt-36 sm:pt-12">
//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
//             <div className="lg:col-span-4">
//               <p className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#528221]">
//                 Who we build for
//               </p>

//               <h3 className="mt-3 font-['Manrope'] text-[25px] font-extrabold leading-tight tracking-[-0.045em] text-[#0F172B] sm:text-[29px]">
//                 Different ideas.
//                 <span className="block text-[#89938B]">
//                   One place to begin.
//                 </span>
//               </h3>
//             </div>

//             <div className="lg:col-span-8">
//               <div className="flex flex-wrap gap-2.5 lg:justify-end">
//                 {audiences.map((audience, index) => (
//                   <span
//                     key={audience}
//                     className={`rounded-full border px-4 py-3 font-['Manrope'] text-[11px] font-bold transition-colors duration-200 ${
//                       index === 0
//                         ? "border-[#528221]/25 bg-[#EDF3E3] text-[#528221]"
//                         : "border-[#E5E7DF] bg-white/70 text-[#52606A] hover:border-[#528221]/30 hover:text-[#528221]"
//                     }`}
//                   >
//                     {audience}
//                   </span>
//                 ))}
//               </div>

//               <p className="mt-5 text-left font-['DM_Sans'] text-[13px] leading-[1.8] text-[#89938B] lg:text-right">
//                 From local businesses and independent creators to
//                 professionals, artists and communities.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* How we work */}
//         <div className="mt-20 rounded-[28px] bg-[#F1F0E9] px-6 py-9 sm:mt-24 sm:px-9 sm:py-11 lg:px-12 lg:py-12">
//           <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
//             <div>
//               <p className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#528221]">
//                 From thought to launch
//               </p>

//               <h3 className="mt-3 font-['Manrope'] text-[25px] font-extrabold tracking-[-0.045em] text-[#0F172B] sm:text-[32px]">
//                 A clear process. A considered result.
//               </h3>
//             </div>

//             <p className="max-w-[380px] font-['DM_Sans'] text-[13px] leading-[1.8] text-[#77827E]">
//               Every project starts with understanding what you need
//               and defining a practical way to bring it to life.
//             </p>
//           </div>

//           <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-5 lg:gap-5">
//             {process.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <div key={step.number} className="relative">
//                   <div className="flex items-center justify-between lg:justify-start lg:gap-4">
//                     <span className="font-['Manrope'] text-[10px] font-bold tracking-[0.16em] text-[#9AA39A]">
//                       {step.number}
//                     </span>

//                     <Icon
//                       size={19}
//                       strokeWidth={1.7}
//                       className="text-[#528221]"
//                     />
//                   </div>

//                   <h4 className="mt-4 font-['Manrope'] text-[15px] font-extrabold text-[#0F172B]">
//                     {step.title}
//                   </h4>

//                   <p className="mt-2 max-w-[210px] font-['DM_Sans'] text-[12px] leading-[1.75] text-[#77827E]">
//                     {step.description}
//                   </p>

//                   {index !== process.length - 1 && (
//                     <div
//                       aria-hidden="true"
//                       className="absolute -right-3 top-2 hidden h-px w-5 bg-[#C9CEC3] lg:block"
//                     />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Closing statement */}
//         <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//           <p className="font-['Manrope'] text-[14px] font-bold tracking-[-0.02em] text-[#0F172B]">
//             Your idea. Your identity. Your next step.
//           </p>

//           <a
//             href="#contact"
//             className="inline-flex items-center gap-2 font-['Manrope'] text-[12px] font-bold text-[#528221] transition-colors hover:text-[#F07843]"
//           >
//             Tell us what you're building
//             <ArrowUpRight size={15} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// // import {
// //   ArrowDownRight,
// //   ArrowUpRight,
// //   Lightbulb,
// //   Palette,
// //   Shapes,
// //   Sparkles,
// // } from "lucide-react";

// // const capabilities = [
// //   {
// //     number: "01",
// //     icon: Palette,
// //     title: "Creative thinking",
// //     description:
// //       "Finding the visual language, ideas and details that make a brand feel distinctive.",
// //   },
// //   {
// //     number: "02",
// //     icon: Shapes,
// //     title: "Connected design",
// //     description:
// //       "Bringing identity, communication and digital experiences together with consistency.",
// //   },
// //   {
// //     number: "03",
// //     icon: Lightbulb,
// //     title: "Purposeful technology",
// //     description:
// //       "Using modern tools and technology to make useful ideas practical and accessible.",
// //   },
// // ];

// // function BrandMark() {
// //   return (
// //     <div className="relative flex aspect-square w-full max-w-[390px] items-center justify-center overflow-hidden rounded-[34px] bg-[#0F172B]">
// //       <div
// //         aria-hidden="true"
// //         className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10"
// //       />
// //       <div
// //         aria-hidden="true"
// //         className="absolute -right-4 -top-4 h-40 w-40 rounded-full border border-white/10"
// //       />
// //       <div
// //         aria-hidden="true"
// //         className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#528221]/30 blur-3xl"
// //       />

// //       <div className="relative flex h-[220px] w-[220px] items-center justify-center sm:h-[250px] sm:w-[250px]">
// //         <div className="absolute inset-0 rotate-[-12deg] rounded-[46px] border border-white/20" />
// //         <div className="absolute inset-5 rotate-[9deg] rounded-[38px] border border-[#A3D953]/50" />

// //         <div className="relative flex h-32 w-32 rotate-[-5deg] items-center justify-center rounded-[30px] bg-[#A3D953] shadow-2xl shadow-black/20 sm:h-36 sm:w-36">
// //           <span className="font-['Manrope'] text-[57px] font-extrabold tracking-[-0.1em] text-[#0F172B] sm:text-[65px]">
// //             Bb
// //           </span>
// //           <span className="absolute -right-2 -top-2 h-7 w-7 rounded-full border-[5px] border-[#0F172B] bg-[#F07843]" />
// //         </div>

// //         <div className="absolute -right-1 top-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#A3D953] backdrop-blur-sm">
// //           <Sparkles size={22} />
// //         </div>

// //         <div className="absolute -bottom-1 left-0 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#F07843] backdrop-blur-sm">
// //           <Shapes size={22} />
// //         </div>
// //       </div>

// //       <span className="absolute bottom-7 left-7 font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">
// //         Ideas into identity
// //       </span>
// //       <span className="absolute right-7 top-7 font-['DM_Sans'] text-xs text-white/45">
// //         BB / 001
// //       </span>
// //     </div>
// //   );
// // }

// // export default function AboutSection() {
// //   return (
// //     <section
// //       id="about-us"
// //       aria-labelledby="about-heading"
// //       className="relative overflow-hidden bg-[#FAFAF7] py-24 sm:py-28 lg:py-32"
// //     >
// //       <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">

// //         {/* Section label */}
// //         <div className="mb-14 flex items-center gap-4 sm:mb-16">
// //           <span className="h-[2px] w-8 bg-[#528221]" />
// //           <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.22em] text-[#528221]">
// //             About BrandBanao
// //           </span>
// //           <span className="font-['DM_Sans'] text-xs text-[#89938B]">
// //             / The thinking behind the work
// //           </span>
// //         </div>

// //         {/* Main introduction */}
// //         <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">

// //           {/* Text content */}
// //           <div className="lg:col-span-7">
// //             <p className="mb-6 font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.19em] text-[#89938B]">
// //               A creative studio for ideas with ambition
// //             </p>

// //             <h2
// //               id="about-heading"
// //               className="max-w-[850px] font-['Manrope'] text-[clamp(2.7rem,5.5vw,5.25rem)] font-extrabold leading-[1.06] tracking-[-0.065em] text-[#0F172B]"
// //             >
// //               Every great brand begins with{" "}
// //               <span className="relative inline-block text-[#528221]">
// //                 an idea.
// //                 <svg
// //                   aria-hidden="true"
// //                   viewBox="0 0 190 13"
// //                   className="absolute -bottom-2 left-0 h-3 w-full"
// //                   fill="none"
// //                 >
// //                   <path
// //                     d="M3 9C49 2 130 1 187 7"
// //                     stroke="#F07843"
// //                     strokeWidth="3"
// //                     strokeLinecap="round"
// //                   />
// //                 </svg>
// //               </span>
// //             </h2>

// //             <p className="mt-9 max-w-[650px] font-['DM_Sans'] text-[17px] leading-[1.9] text-[#66727A]">
// //               BrandBanao is a creative and digital studio built around a
// //               simple belief: good ideas deserve thoughtful execution.
// //               We help businesses, founders and creators shape their
// //               identity, communicate their value and build a stronger
// //               digital presence.
// //             </p>

// //             <p className="mt-5 max-w-[620px] font-['DM_Sans'] text-[15px] leading-[1.9] text-[#89938B]">
// //               From the first spark of an idea to the details of its
// //               digital experience, we bring creativity, practical thinking
// //               and modern technology together to help turn possibilities
// //               into something real.
// //             </p>

// //             <a
// //               href="#contact"
// //               className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#0F172B] px-6 py-4 font-['Manrope'] text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#528221]"
// //             >
// //               Have an idea? Let's talk
// //               <ArrowUpRight size={17} />
// //             </a>
// //           </div>

// //           {/* Visual composition */}
// //           <div className="flex justify-center lg:col-span-5 lg:justify-end">
// //             <div className="relative w-full max-w-[420px]">
// //               <BrandMark />

// //               {/* Floating annotation */}
// //               <div className="absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl border border-[#E7E8E0] bg-white px-5 py-4 shadow-[0_15px_45px_rgba(15,23,43,0.08)] sm:-left-9">
// //                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF4E5] text-[#528221]">
// //                   <Lightbulb size={20} />
// //                 </div>
// //                 <div>
// //                   <p className="font-['Manrope'] text-[12px] font-bold text-[#0F172B]">
// //                     Think. Create. Build.
// //                   </p>
// //                   <p className="mt-1 font-['DM_Sans'] text-[11px] text-[#89938B]">
// //                     One idea at a time.
// //                   </p>
// //                 </div>
// //               </div>

// //               <span className="absolute -right-1 -top-7 rotate-6 font-['Caveat'] text-[25px] font-semibold text-[#F07843] sm:-right-5">
// //                 Start with a spark!
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Capabilities */}
// //         <div className="mt-28 border-t border-[#E5E7DF] pt-10 sm:mt-36 sm:pt-12">
// //           <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
// //             <div>
// //               <p className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#528221]">
// //                 What shapes our work
// //               </p>
// //               <h3 className="mt-3 font-['Manrope'] text-2xl font-bold tracking-[-0.045em] text-[#0F172B] sm:text-3xl">
// //                 Creativity meets purpose.
// //               </h3>
// //             </div>
// //             <p className="max-w-[390px] font-['DM_Sans'] text-sm leading-7 text-[#89938B]">
// //               Different disciplines, one shared intention: making ideas
// //               clearer, more meaningful and more useful.
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 divide-y divide-[#E5E7DF] border-y border-[#E5E7DF] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
// //             {capabilities.map((item) => {
// //               const Icon = item.icon;

// //               return (
// //                 <article
// //                   key={item.number}
// //                   className="group px-1 py-8 sm:px-7 sm:py-9 lg:px-9"
// //                 >
// //                   <div className="flex items-center justify-between">
// //                     <span className="font-['Manrope'] text-[11px] font-bold tracking-[0.16em] text-[#A0A89F]">
// //                       {item.number}
// //                     </span>
// //                     <Icon
// //                       size={21}
// //                       strokeWidth={1.7}
// //                       className="text-[#528221] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6"
// //                     />
// //                   </div>

// //                   <h4 className="mt-8 font-['Manrope'] text-[18px] font-bold tracking-[-0.03em] text-[#0F172B]">
// //                     {item.title}
// //                   </h4>

// //                   <p className="mt-3 max-w-[320px] font-['DM_Sans'] text-[14px] leading-[1.8] text-[#89938B]">
// //                     {item.description}
// //                   </p>
// //                 </article>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* Closing statement */}
// //         <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
// //           <p className="font-['Manrope'] text-[14px] font-semibold text-[#0F172B]">
// //             Your idea. A thoughtful approach. A stronger presence.
// //           </p>

// //           <a
// //             href="#our-work"
// //             className="inline-flex items-center gap-2 font-['Manrope'] text-[12px] font-bold text-[#528221] transition-colors hover:text-[#F07843]"
// //           >
// //             Explore what we create
// //             <ArrowDownRight size={16} />
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
