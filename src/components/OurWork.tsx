
import {
  ArrowUpRight,
  ArrowRight,
  Palette,
  MonitorSmartphone,
  Layers3,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "EDUCATION · CONCEPT STUDY",
    title: "An education brand, built for connection.",
    description:
      "A visual identity and digital experience concept for a modern learning business, designed to make information approachable and its offering easy to explore.",
    services: ["Brand identity", "Website design", "Digital communication"],
  },
  {
    number: "02",
    category: "LOCAL BUSINESS · CONCEPT STUDY",
    title: "A distinctive identity for a local business.",
    description:
      "An exploration of how a consistent visual language can bring together signage, business communication and a thoughtful online presence.",
    services: ["Visual identity", "Brand assets", "Marketing design"],
  },
  {
    number: "03",
    category: "PERSONAL BRAND · CONCEPT STUDY",
    title: "A portfolio that puts the work first.",
    description:
      "A digital portfolio direction for an independent professional, with a clear introduction, considered typography and an organised presentation of work.",
    services: ["Personal branding", "Portfolio website", "Digital design"],
  },
];

/* Small reusable project label */
function ProjectLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center border border-[#0F172B]/10 px-2.5 py-1.5 font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.12em] text-[#66727A]">
      {children}
    </span>
  );
}

/* -------------------------------------------------------
   PROJECT 01 — EDUCATION BRAND
------------------------------------------------------- */

function EducationVisual() {
  return (
    <div className="relative flex h-full min-h-[330px] items-center justify-center overflow-hidden bg-[#E9EFDE] p-5 sm:min-h-[390px] sm:p-8">
      {/* Background graphic */}
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#528221]/15" />
      <div className="absolute -right-6 -top-10 h-48 w-48 rounded-full border border-[#528221]/15" />

      {/* Main website concept */}
      <div className="relative z-10 w-full max-w-[455px] rotate-[-1deg] overflow-hidden border border-[#0F172B]/10 bg-[#FAFAF7] shadow-[0_25px_55px_-25px_rgba(15,23,43,0.3)] transition-transform duration-500 group-hover:rotate-0">
        {/* Browser header */}
        <div className="flex items-center justify-between border-b border-[#0F172B]/10 bg-white px-3 py-2.5 sm:px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#E78C78]" />
            <span className="h-2 w-2 rounded-full bg-[#E9C66C]" />
            <span className="h-2 w-2 rounded-full bg-[#A3D953]" />
          </div>
          <span className="text-[7px] font-semibold tracking-[0.12em] text-[#89938B]">
            LEARNING BRAND / WEBSITE CONCEPT
          </span>
        </div>

        {/* Website navigation */}
        <div className="flex items-center justify-between px-4 py-4 sm:px-6">
          <span className="font-['Manrope'] text-[12px] font-extrabold tracking-tight text-[#0F172B]">
            learn<span className="text-[#528221]">well.</span>
          </span>
          <div className="hidden items-center gap-4 sm:flex">
            {["Explore", "Our approach", "About"].map((item) => (
              <span
                key={item}
                className="text-[7px] font-semibold text-[#66727A]"
              >
                {item}
              </span>
            ))}
          </div>
          <span className="bg-[#0F172B] px-3 py-2 text-[7px] font-bold text-white">
            GET STARTED
          </span>
        </div>

        {/* Website hero */}
        <div className="grid grid-cols-[1.15fr_0.85fr] items-center gap-2 px-4 pb-5 pt-5 sm:px-6 sm:pb-7 sm:pt-8">
          <div>
            <span className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#528221]">
              LEARNING, YOUR WAY
            </span>
            <p className="mt-3 font-['Manrope'] text-[clamp(1.35rem,3vw,2.1rem)] font-extrabold leading-[0.98] tracking-[-0.07em] text-[#0F172B]">
              Discover
              <br />
              what you
              <br />
              <span className="text-[#528221]">can become.</span>
            </p>
            <p className="mt-3 max-w-[150px] text-[8px] leading-[1.7] text-[#66727A]">
              A more engaging place to explore ideas and develop new skills.
            </p>
            <span className="mt-4 inline-flex items-center gap-2 bg-[#A3D953] px-3 py-2 text-[7px] font-bold text-[#0F172B]">
              EXPLORE PROGRAMMES
              <ArrowUpRight size={10} />
            </span>
          </div>

          <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-[#D5E2C0] p-3 sm:p-4">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#A3D953]" />
            <span className="relative z-10 text-[7px] font-bold uppercase tracking-[0.13em] text-[#416B1D]">
              LEARN / GROW
            </span>
            <div className="relative z-10">
              <div className="mb-2 h-2 w-12 bg-[#528221]" />
              <div className="h-2 w-20 bg-[#528221]/35" />
              <div className="mt-2 h-2 w-16 bg-[#528221]/35" />
            </div>
            <span className="relative z-10 self-end font-serif text-3xl italic text-[#528221]">
              learn.
            </span>
          </div>
        </div>

        {/* Website lower strip */}
        <div className="grid grid-cols-3 divide-x divide-[#0F172B]/10 border-t border-[#0F172B]/10 bg-white px-3 py-3 sm:px-5">
          {["Explore", "Understand", "Grow"].map((item, index) => (
            <div key={item} className="px-2">
              <span className="block text-[7px] font-bold text-[#528221]">
                0{index + 1}
              </span>
              <span className="mt-1 block text-[8px] font-semibold text-[#344238]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative marker */}
      <div className="absolute bottom-5 left-5 flex items-center gap-2 sm:bottom-7 sm:left-7">
        <span className="h-2 w-2 rounded-full bg-[#F07843]" />
        <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#528221]">
          Concept direction 01
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   PROJECT 02 — LOCAL BUSINESS IDENTITY
------------------------------------------------------- */

function LocalBusinessVisual() {
  return (
    <div className="relative flex min-h-[280px] flex-1 items-center justify-center overflow-hidden bg-[#F0E5D9] p-6 sm:min-h-[315px]">
      <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-[#C77B54]/25" />

      <div className="relative grid w-full max-w-[380px] grid-cols-[1fr_0.82fr] items-center gap-3">
        {/* Main identity sheet */}
        <div className="relative z-10 aspect-[4/5] bg-[#FBF7EE] p-4 shadow-[0_20px_40px_-25px_rgba(15,23,43,0.3)] transition-transform duration-500 group-hover:-rotate-2 sm:p-5">
          <span className="text-[7px] font-bold uppercase tracking-[0.17em] text-[#9B644C]">
            IDENTITY / SYSTEM
          </span>

          <div className="mt-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#9B644C] text-[#9B644C] sm:h-20 sm:w-20">
              <span className="font-serif text-4xl italic sm:text-5xl">
                F.
              </span>
            </div>

            <h3 className="mt-6 font-['Manrope'] text-[clamp(1.55rem,3vw,2.3rem)] font-extrabold leading-[0.9] tracking-[-0.08em] text-[#30241F]">
              FIELD
              <br />
              <span className="font-serif font-normal italic text-[#9B644C]">
                & form
              </span>
            </h3>
          </div>

          <div className="mt-6 border-t border-[#9B644C]/25 pt-3">
            <div className="flex gap-1.5">
              {["#30241F", "#9B644C", "#C9B99B", "#E9DCCB"].map((color) => (
                <span
                  key={color}
                  className="h-5 flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.12em] text-[#9B644C]">
              Colour / Typography / Form
            </p>
          </div>
        </div>

        {/* Supporting applications */}
        <div className="relative flex flex-col gap-3">
          <div className="flex aspect-[1.4/1] flex-col justify-between bg-[#30241F] p-3 text-[#FBF7EE] shadow-lg sm:p-4">
            <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-[#C9B99B]">
              APPLICATION
            </span>
            <span className="font-serif text-2xl italic sm:text-3xl">
              field.
            </span>
            <div className="h-px w-full bg-white/30" />
            <span className="text-[7px] uppercase tracking-[0.12em]">
              A thoughtful identity
            </span>
          </div>

          <div className="flex aspect-[1.4/1] flex-col justify-between bg-[#C77B54] p-3 text-white shadow-lg sm:p-4">
            <span className="text-[7px] font-bold uppercase tracking-[0.14em]">
              BRAND ASSETS
            </span>
            <div className="flex items-end justify-between">
              <span className="font-['Manrope'] text-3xl font-extrabold tracking-[-0.09em]">
                F.
              </span>
              <span className="font-serif text-lg italic">form</span>
            </div>
            <span className="text-[7px] uppercase tracking-[0.12em]">
              Consistent by design
            </span>
          </div>
        </div>
      </div>

      <span className="absolute bottom-5 left-5 text-[8px] font-bold uppercase tracking-[0.14em] text-[#895E4C]">
        Concept direction 02
      </span>
    </div>
  );
}

/* -------------------------------------------------------
   PROJECT 03 — PERSONAL BRAND / PORTFOLIO
------------------------------------------------------- */

function PortfolioVisual() {
  return (
    <div className="relative flex min-h-[280px] flex-1 items-center justify-center overflow-hidden bg-[#E6EDE7] p-6 sm:min-h-[315px]">
      <div className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-[#A3D953]/35" />

      <div className="relative grid w-full max-w-[400px] grid-cols-[0.75fr_1.25fr] items-center gap-2 sm:gap-3">
        {/* Personal identity tile */}
        <div className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden bg-[#0F172B] p-3 text-white shadow-lg sm:p-4">
          <div className="flex items-center justify-between">
            <span className="text-[7px] font-bold tracking-[0.14em] text-[#A3D953]">
              PORTFOLIO
            </span>
            <span className="text-[7px] text-white/50">01</span>
          </div>

          <div>
            <p className="font-['Manrope'] text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold leading-[0.88] tracking-[-0.08em]">
              Alex
              <br />
              <span className="font-serif font-normal italic text-[#A3D953]">
                Morgan.
              </span>
            </p>
            <p className="mt-3 text-[8px] leading-[1.7] text-white/60">
              Independent creative professional.
            </p>
          </div>

          <div className="h-[3px] w-9 bg-[#F07843]" />
        </div>

        {/* Portfolio site */}
        <div className="overflow-hidden border border-[#0F172B]/10 bg-white shadow-[0_20px_40px_-20px_rgba(15,23,43,0.3)] transition-transform duration-500 group-hover:rotate-1">
          <div className="flex items-center justify-between border-b border-[#0F172B]/10 px-3 py-2.5">
            <span className="text-[8px] font-bold text-[#0F172B]">
              A. MORGAN
            </span>
            <span className="text-[7px] font-semibold text-[#66727A]">
              Work · About
            </span>
          </div>

          <div className="p-3 sm:p-4">
            <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-[#528221]">
              Selected work / 2026
            </p>

            <h3 className="mt-3 font-['Manrope'] text-[clamp(1.35rem,3vw,2rem)] font-extrabold leading-[0.95] tracking-[-0.07em] text-[#0F172B]">
              Ideas deserve
              <br />
              <span className="font-serif font-normal italic text-[#528221]">
                a clear voice.
              </span>
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="flex aspect-[1.2/1] items-end bg-[#DCE7CF] p-2">
                <span className="text-[7px] font-bold text-[#416B1D]">
                  PROJECT 01
                </span>
              </div>
              <div className="flex aspect-[1.2/1] items-end bg-[#EEDFD5] p-2">
                <span className="text-[7px] font-bold text-[#895E4C]">
                  PROJECT 02
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span className="absolute bottom-5 left-5 text-[8px] font-bold uppercase tracking-[0.14em] text-[#528221]">
        Concept direction 03
      </span>
    </div>
  );
}

/* -------------------------------------------------------
   MAIN OUR WORK SECTION
------------------------------------------------------- */

export default function OurWork() {
  return (
    <section
      id="our-work"
      aria-labelledby="our-work-heading"
      className="scroll-mt-24 overflow-hidden bg-[#FAFAF7] text-[#0F172B]"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">

        {/* Section introduction */}
        <div className="mb-12 flex flex-col justify-between gap-7 border-b border-[#0F172B]/15 pb-9 lg:mb-14 lg:flex-row lg:items-end">
          <div className="max-w-[720px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#528221]" />
              <p className="font-['DM_Sans'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#528221]">
                SELECTED EXPLORATIONS
              </p>
            </div>

            <h2
              id="our-work-heading"
              className="font-['Manrope'] text-[clamp(2.7rem,5.1vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.075em] text-[#0F172B]"
            >
              Ideas deserve
              <br />
              <span className="font-serif font-normal italic text-[#528221]">
                to take shape.
              </span>
            </h2>
          </div>

          <div className="max-w-[390px]">
            <p className="font-['DM_Sans'] text-[14px] leading-[1.9] text-[#66727A] sm:text-[15px]">
              Explore how thoughtful strategy, visual identity and digital
              design can come together to create a more distinctive brand
              experience.
            </p>
          </div>
        </div>

        {/* Portfolio disclaimer */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#A3D953]" />
            <p className="font-['DM_Sans'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#528221]">
              Concept work & creative directions
            </p>
          </div>

          <p className="font-['DM_Sans'] text-[10px] text-[#89938B]">
            Illustrative explorations · Not client case studies
          </p>
        </div>

        {/* Featured concept */}
        <article className="group grid overflow-hidden border border-[#0F172B]/10 bg-white lg:grid-cols-[0.78fr_1.22fr]">

          {/* Featured text */}
          <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10 xl:p-12">
            <div>
              <div className="mb-7 flex items-center justify-between">
                <ProjectLabel>FEATURED CONCEPT</ProjectLabel>
                <span className="font-['DM_Sans'] text-[10px] font-bold tracking-[0.12em] text-[#528221]">
                  01 / 03
                </span>
              </div>

              <p className="mb-4 font-['DM_Sans'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#528221]">
                EDUCATION · DIGITAL EXPERIENCE
              </p>

              <h3 className="max-w-[440px] font-['Manrope'] text-[clamp(2rem,3.5vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.065em] text-[#0F172B]">
                An education brand, built for{" "}
                <span className="font-serif font-normal italic text-[#528221]">
                  connection.
                </span>
              </h3>

              <p className="mt-5 max-w-[440px] font-['DM_Sans'] text-[13px] leading-[1.9] text-[#66727A] sm:text-[14px]">
                A concept for a modern learning business, bringing a
                distinctive identity and a clear digital experience together
                to make its offering easier to explore.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Brand identity", "Website design", "Digital content"].map(
                  (tag) => (
                    <ProjectLabel key={tag}>{tag}</ProjectLabel>
                  )
                )}
              </div>
            </div>

            <a
              href="#contact"
              className="group/link mt-10 inline-flex items-center gap-3 self-start border-b border-[#0F172B]/25 pb-2 font-['DM_Sans'] text-[12px] font-bold text-[#0F172B] transition-colors hover:border-[#528221] hover:text-[#528221]"
            >
              Discuss a similar project

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          </div>

          {/* Featured visual */}
          <div className="relative min-h-[340px] lg:min-h-[480px]">
            <EducationVisual />
          </div>
        </article>

        {/* Supporting concepts */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* Concept 02 */}
          <article className="group flex flex-col overflow-hidden border border-[#0F172B]/10 bg-white">
            <LocalBusinessVisual />

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex items-center justify-between gap-3">
                <ProjectLabel>LOCAL BUSINESS · CONCEPT</ProjectLabel>
                <span className="text-[10px] font-bold text-[#528221]">
                  02 / 03
                </span>
              </div>

              <h3 className="font-['Manrope'] text-[23px] font-bold leading-[1.2] tracking-[-0.05em] text-[#0F172B] sm:text-[25px]">
                A distinctive identity for a local business.
              </h3>

              <p className="mt-3 max-w-[500px] font-['DM_Sans'] text-[13px] leading-[1.85] text-[#66727A]">
                An identity direction that connects brand personality,
                everyday communication and customer-facing touchpoints.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {["Visual identity", "Brand assets", "Marketing design"].map(
                  (tag) => (
                    <ProjectLabel key={tag}>{tag}</ProjectLabel>
                  )
                )}
              </div>
            </div>
          </article>

          {/* Concept 03 */}
          <article className="group flex flex-col overflow-hidden border border-[#0F172B]/10 bg-white">
            <PortfolioVisual />

            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <div className="mb-4 flex items-center justify-between gap-3">
                <ProjectLabel>PERSONAL BRAND · CONCEPT</ProjectLabel>
                <span className="text-[10px] font-bold text-[#528221]">
                  03 / 03
                </span>
              </div>

              <h3 className="font-['Manrope'] text-[23px] font-bold leading-[1.2] tracking-[-0.05em] text-[#0F172B] sm:text-[25px]">
                A portfolio that puts the work first.
              </h3>

              <p className="mt-3 max-w-[500px] font-['DM_Sans'] text-[13px] leading-[1.85] text-[#66727A]">
                A personal brand and portfolio direction that presents
                experience, selected work and expertise with clarity.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {["Personal branding", "Portfolio", "Digital design"].map(
                  (tag) => (
                    <ProjectLabel key={tag}>{tag}</ProjectLabel>
                  )
                )}
              </div>
            </div>
          </article>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col justify-between gap-6 border-t border-[#0F172B]/15 pt-7 sm:flex-row sm:items-center">
          <div>
            <p className="font-['Manrope'] text-[17px] font-extrabold tracking-[-0.04em] text-[#0F172B] sm:text-[19px]">
              Have an idea of your own?
            </p>
            <p className="mt-1 font-['DM_Sans'] text-[12px] leading-[1.8] text-[#66727A]">
              Let's explore what we could create together.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex min-h-[50px] items-center justify-center gap-4 self-start rounded-full bg-[#0F172B] py-1.5 pl-6 pr-1.5 font-['DM_Sans'] text-[12px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#26344C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-2 sm:self-auto"
          >
            Start a Project

            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#A3D953] text-[#0F172B] transition-transform group-hover:translate-x-0.5">
              <ArrowUpRight size={17} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

// import { useState } from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   ExternalLink,
//   Palette,
//   MonitorSmartphone,
//   Layers3,
// } from "lucide-react";
// import { AnimatePresence, motion, useReducedMotion } from "motion/react";

// type Category = "All" | "Identity" | "Digital" | "Creative";

// const filters: Category[] = [
//   "All",
//   "Identity",
//   "Digital",
//   "Creative",
// ];

// const projects = [
//   {
//     id: "aaroh",
//     number: "01",
//     name: "AAROH",
//     category: "Digital" as Category,
//     type: "Digital experience",
//     description:
//       "A digital presence concept for a modern learning and education brand.",
//     image:
//       "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=85",
//     alt: "Creative team collaborating on an educational brand concept",
//     tone: "learning",
//     deliverables: ["Digital direction", "Website concept", "Visual design"],
//   },
//   {
//     id: "fika",
//     number: "02",
//     name: "FIKA",
//     category: "Identity" as Category,
//     type: "Brand identity concept",
//     description:
//       "A warm, expressive identity direction for a contemporary neighbourhood café.",
//     image:
//       "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85",
//     alt: "Coffee shop interior with a warm, welcoming atmosphere",
//     tone: "cafe",
//     deliverables: ["Brand direction", "Visual identity", "Colour system"],
//   },
//   {
//     id: "forme",
//     number: "03",
//     name: "FORME",
//     category: "Digital" as Category,
//     type: "Portfolio website concept",
//     description:
//       "A refined digital portfolio direction for an independent creative studio.",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
//     alt: "Modern creative studio workspace",
//     tone: "studio",
//     deliverables: ["Digital strategy", "Portfolio structure", "Web design"],
//   },
//   {
//     id: "common-table",
//     number: "04",
//     name: "COMMON TABLE",
//     category: "Creative" as Category,
//     type: "Creative campaign concept",
//     description:
//       "An editorial visual direction for a community-focused food and lifestyle brand.",
//     image:
//       "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
//     alt: "Warm restaurant interior with a welcoming atmosphere",
//     tone: "campaign",
//     deliverables: ["Creative direction", "Campaign visuals", "Brand assets"],
//   },
// ];

// const categoryIcons = {
//   Identity: Palette,
//   Digital: MonitorSmartphone,
//   Creative: Layers3,
// };

// function ProjectArtwork({
//   project,
//   featured,
// }: {
//   project: (typeof projects)[number];
//   featured: boolean;
// }) {
//   return (
//     <div
//       className={`group relative isolate overflow-hidden bg-[#E9ECE5] ${
//         featured ? "aspect-[1.2/1] sm:aspect-[1.55/1]" : "aspect-[1.2/1]"
//       }`}
//     >
//       {/* Full visual background */}
//       <img
//         src={project.image}
//         alt={project.alt}
//         loading="lazy"
//         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
//       />

//       {/* Image treatment */}
//       <div
//         className={`absolute inset-0 ${
//           project.tone === "learning"
//             ? "bg-gradient-to-br from-[#0F172B]/75 via-[#0F172B]/15 to-[#0F172B]/55"
//             : project.tone === "cafe"
//               ? "bg-gradient-to-t from-[#0F172B]/75 via-[#0F172B]/10 to-[#0F172B]/10"
//               : project.tone === "studio"
//                 ? "bg-gradient-to-br from-[#0F172B]/65 via-transparent to-[#0F172B]/55"
//                 : "bg-gradient-to-t from-[#0F172B]/80 via-[#0F172B]/15 to-transparent"
//         }`}
//       />

//       {/* Project identity */}
//       <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7 lg:p-8">

//         <div className="flex items-start justify-between gap-3">
//           <span className="inline-flex items-center gap-2 border border-white/30 bg-[#0F172B]/20 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#A3D953]" />
//             Concept exploration
//           </span>

//           <span className="font-['DM_Sans'] text-[11px] font-bold text-white/75">
//             {project.number} / 04
//           </span>
//         </div>

//         {/* Distinctive visual typography */}
//         <div className="flex items-end justify-between gap-4">
//           <div>
//             {project.tone === "learning" && (
//               <>
//                 <p className="mb-3 font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9E99B]">
//                   LEARN · EXPLORE · GROW
//                 </p>
//                 <h3 className="font-['Manrope'] text-[clamp(3rem,6vw,5.7rem)] font-extrabold leading-[0.82] tracking-[-0.09em] text-white">
//                   Learn
//                   <br />
//                   beyond.
//                 </h3>
//                 <span className="mt-4 inline-block h-1 w-16 bg-[#A3D953]" />
//               </>
//             )}

//             {project.tone === "cafe" && (
//               <>
//                 <p className="mb-3 font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.22em] text-white/80">
//                   A LITTLE MOMENT OF GOOD
//                 </p>
//                 <h3 className="font-['Manrope'] text-[clamp(3rem,5vw,5rem)] font-extrabold leading-[0.85] tracking-[-0.08em] text-white">
//                   fika<span className="text-[#A3D953]">.</span>
//                 </h3>
//                 <p className="mt-3 font-serif text-[17px] italic text-white/85">
//                   Pause. Sip. Enjoy.
//                 </p>
//               </>
//             )}

//             {project.tone === "studio" && (
//               <>
//                 <p className="mb-3 font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.22em] text-[#DCECA8]">
//                   INDEPENDENT CREATIVE STUDIO
//                 </p>
//                 <h3 className="font-['Manrope'] text-[clamp(3rem,5vw,5rem)] font-extrabold leading-[0.85] tracking-[-0.085em] text-white">
//                   FORME<span className="text-[#A3D953]">.</span>
//                 </h3>
//                 <p className="mt-3 max-w-[220px] font-['DM_Sans'] text-[12px] text-white/80">
//                   Thoughtful work. Clear expression.
//                 </p>
//               </>
//             )}

//             {project.tone === "campaign" && (
//               <>
//                 <p className="mb-3 font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.22em] text-[#C9E99B]">
//                   GOOD FOOD · GOOD COMPANY
//                 </p>
//                 <h3 className="font-['Manrope'] text-[clamp(2.7rem,5.7vw,5.2rem)] font-extrabold leading-[0.86] tracking-[-0.08em] text-white">
//                   COMMON
//                   <br />
//                   TABLE<span className="text-[#F07843]">.</span>
//                 </h3>
//               </>
//             )}
//           </div>

//           <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-all group-hover:border-[#A3D953] group-hover:bg-[#A3D953] group-hover:text-[#0F172B] sm:flex">
//             <ArrowUpRight size={20} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function OurWork() {
//   const [activeFilter, setActiveFilter] = useState<Category>("All");
//   const reduceMotion = useReducedMotion();

//   const visibleProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((project) => project.category === activeFilter);

//   return (
//     <section
//       id="our-work"
//       aria-labelledby="work-heading"
//       className="scroll-mt-24 overflow-hidden bg-[#FAFAF7] text-[#0F172B]"
//     >
//       <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">

//         {/* SECTION HEADER */}
//         <div className="mb-12 flex flex-col justify-between gap-8 border-b border-[#0F172B]/15 pb-10 lg:mb-14 lg:flex-row lg:items-end">

//           <div className="max-w-[720px]">
//             <div className="mb-6 flex items-center gap-3">
//               <span className="h-[2px] w-8 bg-[#528221]" />
//               <p className="font-['DM_Sans'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#528221]">
//                 SELECTED CREATIVE DIRECTIONS
//               </p>
//             </div>

//             <h2
//               id="work-heading"
//               className="font-['Manrope'] text-[clamp(2.7rem,5.1vw,4.7rem)] font-extrabold leading-[1.02] tracking-[-0.075em] text-[#0F172B]"
//             >
//               Ideas made
//               <br />
//               <span className="font-serif font-normal italic text-[#528221]">
//                 visible.
//               </span>
//             </h2>
//           </div>

//           <div className="max-w-[400px]">
//             <p className="font-['DM_Sans'] text-[14px] leading-[1.9] text-[#66727A] sm:text-[15px]">
//               Every brand has a story worth expressing. Explore a few
//               illustrative directions across identity, digital experiences
//               and creative communication.
//             </p>

//             <p className="mt-3 font-['DM_Sans'] text-[10px] font-semibold leading-relaxed text-[#89938B]">
//               Self-initiated concepts · Fictional brands · Not client case studies
//             </p>
//           </div>
//         </div>

//         {/* FILTER CONTROLS */}
//         <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
//           <div
//             role="group"
//             aria-label="Filter work by category"
//             className="flex flex-wrap items-center gap-2"
//           >
//             {filters.map((filter) => (
//               <button
//                 key={filter}
//                 type="button"
//                 aria-pressed={activeFilter === filter}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`min-h-[39px] rounded-full border px-4 font-['DM_Sans'] text-[11px] font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-2 ${
//                   activeFilter === filter
//                     ? "border-[#0F172B] bg-[#0F172B] text-white"
//                     : "border-[#0F172B]/15 bg-transparent text-[#66727A] hover:border-[#528221] hover:text-[#528221]"
//                 }`}
//               >
//                 {filter}
//               </button>
//             ))}
//           </div>

//           <span
//             className="font-['DM_Sans'] text-[10px] font-semibold uppercase tracking-[0.12em] text-[#89938B]"
//             aria-live="polite"
//           >
//             Showing {visibleProjects.length} explorations
//           </span>
//         </div>

//         {/* PROJECT GALLERY */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:gap-x-7 lg:gap-y-14"
//         >
//           <AnimatePresence mode="popLayout">
//             {visibleProjects.map((project, index) => {
//               const CategoryIcon = categoryIcons[project.category];

//               return (
//                 <motion.article
//                   key={project.id}
//                   layout
//                   initial={reduceMotion ? false : { opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={reduceMotion ? undefined : { opacity: 0, y: 10 }}
//                   transition={{
//                     duration: reduceMotion ? 0 : 0.3,
//                     ease: "easeOut",
//                   }}
//                   className="group min-w-0"
//                 >
//                   {/* Artwork */}
//                   <a
//                     href="#contact"
//                     aria-label={`Discuss a project similar to ${project.name}`}
//                     className="block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-4"
//                   >
//                     <ProjectArtwork
//                       project={project}
//                       featured={index === 0 && activeFilter === "All"}
//                     />
//                   </a>

//                   {/* Project information */}
//                   <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
//                     <div className="min-w-0">
//                       <div className="mb-2 flex flex-wrap items-center gap-2">
//                         <span className="font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.13em] text-[#528221]">
//                           {project.type}
//                         </span>

//                         <span className="h-1 w-1 rounded-full bg-[#F07843]" />

//                         <span className="font-['DM_Sans'] text-[9px] font-semibold uppercase tracking-[0.1em] text-[#89938B]">
//                           Concept / {project.number}
//                         </span>
//                       </div>

//                       <h3 className="font-['Manrope'] text-[22px] font-extrabold tracking-[-0.05em] text-[#0F172B] sm:text-[25px]">
//                         {project.name}
//                       </h3>

//                       <p className="mt-2 max-w-[470px] font-['DM_Sans'] text-[12px] leading-[1.8] text-[#66727A] sm:text-[13px]">
//                         {project.description}
//                       </p>

//                       <div className="mt-4 flex flex-wrap gap-2">
//                         {project.deliverables.map((item) => (
//                           <span
//                             key={item}
//                             className="border border-[#0F172B]/10 px-2.5 py-1.5 font-['DM_Sans'] text-[9px] font-semibold text-[#66727A]"
//                           >
//                             {item}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <a
//                       href="#contact"
//                       aria-label={`Enquire about ${project.category.toLowerCase()} services`}
//                       className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#0F172B]/15 text-[#0F172B] transition-all duration-200 hover:border-[#528221] hover:bg-[#528221] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221]"
//                     >
//                       <ArrowUpRight size={18} />
//                     </a>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </AnimatePresence>
//         </motion.div>

//         {/* BOTTOM CTA */}
//         <div className="mt-16 flex flex-col justify-between gap-6 border-t border-[#0F172B]/15 pt-8 sm:mt-20 sm:flex-row sm:items-center">
//           <div>
//             <p className="font-['Manrope'] text-[19px] font-bold tracking-[-0.04em] text-[#0F172B]">
//               Have something different in mind?
//             </p>
//             <p className="mt-2 font-['DM_Sans'] text-[12px] leading-[1.8] text-[#66727A]">
//               Let's explore the right direction for your brand.
//             </p>
//           </div>

//           <a
//             href="#contact"
//             className="group inline-flex min-h-[49px] items-center justify-center gap-4 self-start rounded-full bg-[#0F172B] py-1.5 pl-5 pr-1.5 font-['DM_Sans'] text-[12px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#26344C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-2 sm:self-auto"
//           >
//             Let's create something

//             <span className="grid h-9 w-9 place-items-center rounded-full bg-[#A3D953] text-[#0F172B] transition-transform group-hover:translate-x-0.5">
//               <ArrowUpRight size={17} />
//             </span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
