import { useEffect, useState, type ReactNode } from "react";
import "./App.css";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clapperboard,
  Code2,
  Compass,
  Fingerprint,
  Globe,
  Layers3,
  Lightbulb,
  Mail,
  Menu,
  Monitor,
  Network,
  NotebookIcon,
  Palette,
  PenTool,
  Target,
  UserRound,
  Users,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";

import logo from "./assets/logo_b.png";
import teamImage from "./assets/images/brandbanao-team1.png";

/* =========================================================
   BRAND CONFIGURATION
   Update CONTACT_EMAIL before publishing.
========================================================= */

const COLORS = {
  navy: "#0F172B",
  green: "#528221",
  lime: "#A3D953",
  orange: "#F07843",
  ivory: "#FAFAF7",
  neutral: "#F1F0E9",
  slate: "#66727A",
};

type ServiceName =
  | "Brand identity & creative"
  | "Websites & digital presence"
  | "Creative & digital solutions"
  | "Multiple services"
  | "Not sure yet";

const serviceLinks: { label: string; href: string }[] = [
  { label: "Brand Identity & Creative", href: "#brand-identity" },
  { label: "Websites & Digital Presence", href: "#websites-digital" },
  { label: "Creative & Digital Solutions", href: "#creative-solutions" },
];

const mainLinks = [
  { label: "Who we help", href: "#who-we-help" },
  { label: "Our work", href: "#our-work" },
  { label: "About", href: "#about-us" },
  { label: "Why us", href: "#why-us" },
  { label: "FAQs", href: "#faqs" },
];

/* =========================================================
   CONTENT DATA
========================================================= */
type Audience = {
  number: string;
  title: string;
  description: string;
  examples: string[];
  icon: LucideIcon;
  iconClass: string;
  descriptor: string;
};

const audiences: Audience[] = [
  {
    number: "01",
    title: "Businesses & local brands",
    descriptor: "For growing businesses",
    description:
      "For businesses that want to stand out, build trust, and present their products or services more professionally.",
    examples: ["Small businesses", "Local brands", "New ventures"],
    icon: BriefcaseBusiness,
    iconClass: "bg-[#EAF0DF] text-[#528221]",
  },
  {
    number: "02",
    title: "Creators & content professionals",
    descriptor: "For independent voices",
    description:
      "For creators and independent professionals building an audience, sharing expertise, or growing their presence.",
    examples: ["Content creators", "Consultants", "Freelancers"],
    icon: Clapperboard,
    iconClass: "bg-[#FBE9E1] text-[#D66C3D]",
  },
  {
    number: "03",
    title: "Individuals & personal brands",
    descriptor: "For individual expression",
    description:
      "For people who want their skills, experience, work, or personal story to be presented with clarity and character.",
    examples: ["Professionals", "Portfolios", "Personal projects"],
    icon: UserRound,
    iconClass: "bg-[#E9ECF4] text-[#465B83]",
  },
  {
    number: "04",
    title: "Ideas & passion projects",
    descriptor: "For ideas taking shape",
    description:
      "For early-stage ideas, side projects, and new initiatives that need a thoughtful identity and a strong place to begin.",
    examples: ["Side projects", "Start-up ideas", "New concepts"],
    icon: Lightbulb,
    iconClass: "bg-[#F6EFD8] text-[#A77A22]",
  },
  {
    number: "05",
    title: "Communities & organisations",
    descriptor: "For shared purposes",
    description:
      "For groups bringing people together around a shared purpose, event, community, or initiative.",
    examples: ["Communities", "Clubs", "Organisations"],
    icon: Users,
    iconClass: "bg-[#E6EFEB] text-[#417565]",
  },
];

const services: {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: LucideIcon;
  accent: string;
  preview: ReactNode;
  enquiryValue: ServiceName;
}[] = [
  {
    id: "brand-identity",
    number: "01",
    category: "Identity",
    title: "Brand identity & creative",
    description:
      "Give your brand a recognisable visual language and a consistent foundation across touchpoints.",
    deliverables: [
      "Logo and visual identity",
      "Colour palette and typography",
      "Mini brand guidelines",
      "Business cards and stationery",
      "Brochures, flyers and catalogues",
    ],
    icon: Fingerprint,
    accent: "#528221",
    preview: <IdentityPreview />,
    enquiryValue: "Brand identity & creative",
  },
  {
    id: "websites-digital",
    number: "02",
    category: "Digital",
    title: "Websites & digital presence",
    description:
      "Create a useful digital home that communicates your value and makes it easier for people to connect with you.",
    deliverables: [
      "Business and service websites",
      "Landing pages",
      "Personal and creator portfolios",
      "Digital catalogues and galleries",
      "Contact and enquiry experiences",
    ],
    icon: Globe,
    accent: "#465B83",
    preview: <WebsitePreview />,
    enquiryValue: "Websites & digital presence",
  },
  {
    id: "creative-solutions",
    number: "03",
    category: "Creative",
    title: "Creative & digital solutions",
    description:
      "Bring your communication and ideas to life with purposeful creative assets and practical digital experiences.",
    deliverables: [
      "Social media design kits",
      "Creator media kits and profile assets",
      "Presentations and pitch decks",
      "Posters, invitations and event creatives",
      "Practical digital tools and integrations",
    ],
    icon: Layers3,
    accent: "#D66C3D",
    preview: <CreativePreview />,
    enquiryValue: "Creative & digital solutions",
  },
];

const faqs = [
  {
    question: "Who can work with BrandBanao?",
    answer:
      "We work with businesses, local brands, creators, independent professionals, communities, and people developing new ideas. You do not need to be an established company to get started.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Our work spans brand identity, websites and digital presence, and creative solutions. Depending on your project, we can help with a focused requirement or bring several pieces together into a coherent brand experience.",
  },
  {
    question: "I have an idea but I'm not sure what I need. Can we still talk?",
    answer:
      "Absolutely. Tell us what you are trying to build, who it is for, and what you would like to achieve. We can discuss the problem first and work out a sensible scope together.",
  },
  {
    question: "How does a project usually work?",
    answer:
      "We start by understanding your goals and requirements, agree on the scope and deliverables, develop the proposed direction, share work for feedback, and refine the agreed solution. The exact process depends on the project.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on scope, complexity, deliverables, and timeline. We discuss your requirements before proposing a project scope and estimate, so there is no need to commit to a package before we understand the work.",
  },
  {
    question: "Can you work with an existing brand or website?",
    answer:
      "Yes. We can discuss improving an existing identity, refreshing a website, adding pages or functionality, or creating supporting digital and creative materials.",
  },
  {
    question: "How do I get started?",
    answer:
      "Use the contact form below to share a little about your project. Include a website or social profile if you have one. We can then take the conversation forward by email.",
  },
];

/* =========================================================
   SHARED UI
========================================================= */
function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.2em] sm:text-[11px] ${
        light ? "text-[#A3D953]" : "text-[#528221]"
      }`}
    >
      <span
        className={`h-[2px] w-7 ${light ? "bg-[#A3D953]" : "bg-[#528221]"}`}
      />
      {children}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
  centered?: boolean;
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div className={centered ? "flex justify-center" : ""}>
        <Eyebrow light={light}>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={`mt-5 font-['Manrope'] text-[2.2rem] font-extrabold leading-[1.12] tracking-[-0.055em] sm:text-5xl lg:text-[3.35rem] ${
          light ? "text-[#FAFAF7]" : "text-[#0F172B]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl font-['DM_Sans'] text-[15px] leading-8 sm:text-base ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/65" : "text-[#66727A]"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function PrimaryLink({
  href,
  children,
  dark = false,
  onClick,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 font-['Manrope'] text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-4 ${
        dark
          ? "bg-[#0F172B] text-white hover:bg-[#23314D]"
          : "bg-[#A3D953] text-[#0F172B] hover:bg-[#B5E76C]"
      }`}
    >
      {children}
      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

/* =========================================================
   NAVIGATION
========================================================= */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#EAEAE3] bg-[#FAFAF7]/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[74px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[82px] lg:px-14 xl:px-20"
      >
        <a
          href="#top"
          aria-label="BrandBanao home"
          onClick={closeMenus}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="BrandBanao"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          <a href="#who-we-help" className="nav-link">
            Who we help
          </a>

          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((open) => !open)}
              onKeyDown={(event) => {
                if (event.key === "Escape") setServicesOpen(false);
              }}
              className="nav-link inline-flex items-center gap-1.5"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 rounded-2xl border border-[#E9E9E1] bg-[#FAFAF7] p-2 shadow-[0_18px_45px_rgba(15,23,43,0.12)]">
                {serviceLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className="block rounded-xl px-4 py-3 font-['DM_Sans'] text-sm text-[#46505B] transition-colors hover:bg-[#F1F0E9] hover:text-[#528221]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {mainLinks.slice(1).map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden min-h-11 items-center gap-2 rounded-full bg-[#0F172B] px-5 py-3 font-['Manrope'] text-[13px] font-bold text-white transition-colors hover:bg-[#528221] lg:inline-flex"
        >
          Let's talk <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E5DC] text-[#0F172B] transition-colors hover:bg-[#F1F0E9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] lg:hidden"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#EAEAE3] bg-[#FAFAF7] px-5 pb-6 pt-3 shadow-lg sm:px-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col">
            <a href="#who-we-help" onClick={closeMenus} className="mobile-link">
              Who we help
            </a>
            <div className="border-b border-[#ECECE5] py-3">
              <a
                href="#services"
                onClick={closeMenus}
                className="font-['Manrope'] text-sm font-bold text-[#0F172B]"
              >
                Services
              </a>
              <div className="mt-2 grid gap-1 pl-3">
                {serviceLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenus}
                    className="rounded-lg py-2 font-['DM_Sans'] text-sm text-[#66727A] hover:text-[#528221]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            {mainLinks.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenus}
                className="mobile-link"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-5">
              <PrimaryLink href="#contact" onClick={closeMenus}>
                Start a conversation
              </PrimaryLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */
function HeroSection() {
  return (
    <section id="top" className="scroll-mt-24 overflow-hidden bg-[#FAFAF7]">
      <div className="mx-auto grid min-h-[660px] w-full max-w-[1600px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:px-14 lg:py-20 xl:px-20">
        <div className="relative z-10 max-w-[700px]">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7E9DE] bg-white px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#528221]" />
            <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.14em] text-[#56624F] sm:text-[11px]">
              Branding · Digital presence · Creative solutions
            </span>
          </div>

          <h1 className="font-['Manrope'] text-[3.05rem] font-extrabold leading-[1.02] tracking-[-0.065em] text-[#0F172B] sm:text-6xl lg:text-[4.25rem] xl:text-[5rem]">
            Build a brand
            <br />
            people <span className="relative inline-block text-[#528221]">remember.
              <svg aria-hidden="true" viewBox="0 0 330 17" className="absolute -bottom-2 left-0 w-full" fill="none">
                <path d="M3 12C88 3 217 1 326 8" stroke="#F07843" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-[550px] font-['DM_Sans'] text-base leading-8 text-[#66727A] sm:text-lg sm:leading-9">
            Your idea deserves more than a logo or a website. Build a distinctive identity, a meaningful digital presence, and a consistent experience around what makes you different.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryLink href="#contact">Let's build something</PrimaryLink>
            <a href="#our-work" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-colors hover:text-[#528221]">
              Explore our work <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#E9E9E1] pt-6">
            {["Thoughtful by design", "Built around your goals", "Made for real use"].map((item) => (
              <div key={item} className="flex items-center gap-2 font-['DM_Sans'] text-xs font-medium text-[#69736F] sm:text-[13px]">
                <Check size={14} className="text-[#528221]" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none">
          <div className="relative aspect-[1/1.02] overflow-hidden rounded-[2rem] bg-[#F1F0E9] sm:rounded-[2.5rem]">
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DCE9C9]" />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#528221]/20" />
            <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#528221]/30" />

            <img
              src={teamImage}
              alt="Creative collaborators developing a brand idea"
              fetchPriority="high"
              className="absolute bottom-[4%] left-1/2 z-10 h-[77%] w-[94%] -translate-x-1/2 object-contain object-bottom"
            />

            <div className="absolute left-4 top-4 z-20 rounded-xl border border-white/70 bg-white/85 px-3.5 py-3 shadow-sm backdrop-blur-md sm:left-7 sm:top-7">
              <span className="block font-['Manrope'] text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#89938B]">The process</span>
              <span className="mt-1.5 block font-['Manrope'] text-xs font-bold text-[#0F172B]">Idea → Identity → Experience</span>
            </div>

            <div className="absolute right-4 top-[28%] z-20 hidden w-[140px] rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_12px_30px_rgba(15,23,43,0.08)] backdrop-blur-md sm:block">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-['Manrope'] text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#89938B]">Visual system</span>
                <Palette size={13} className="text-[#528221]" />
              </div>
              <div className="flex gap-1.5">
                {[COLORS.navy, COLORS.green, COLORS.lime, COLORS.orange].map((color) => <span key={color} className="h-5 flex-1 rounded" style={{ backgroundColor: color }} />)}
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-[#E9E9E1]" />
              <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-[#E9E9E1]" />
            </div>

            <div className="absolute bottom-5 left-5 z-20 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF0DF] text-[#528221]"><Workflow size={16} /></div>
                <div>
                  <span className="block font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.12em] text-[#89938B]">BrandBanao</span>
                  <span className="block font-['Manrope'] text-xs font-extrabold text-[#0F172B]">From idea to impact</span>
                </div>
              </div>
            </div>

            {/* <div className="absolute bottom-7 right-6 z-20 hidden h-11 w-11 items-center justify-center rounded-full bg-[#F07843] text-white shadow-lg sm:flex"><Sparkles size={19} /></div> */}
            <div className="absolute bottom-7 right-6 z-20 hidden h-11 w-11 items-center justify-center rounded-full bg-[#F07843] text-white shadow-lg sm:flex"></div>
            <div className="absolute bottom-5 right-5 z-20 font-['Caveat'] text-lg font-semibold text-[#528221] sm:bottom-8 sm:right-8 sm:text-xl">Make it meaningful.</div>
          </div>
          <div className="mt-4 flex items-center justify-between px-1">
            <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.17em] text-[#89938B]">Strategy / Design / Technology</span>
            <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.17em] text-[#89938B]">BB — 001</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#E9E9E1] bg-white">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-5 px-5 py-6 sm:grid-cols-4 sm:px-8 lg:px-14 xl:px-20">
          {[["01", "Brand thinking"], ["02", "Visual identity"], ["03", "Digital experiences"], ["04", "Creative execution"]].map(([number, label]) => (
            <div key={number} className="flex items-center gap-3">
              <span className="font-['Manrope'] text-[10px] font-extrabold text-[#528221]">{number}</span>
              <span className="font-['Manrope'] text-xs font-semibold text-[#46505B] sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHO WE HELP
========================================================= */
function WhoWeHelp({ onClearService }: { onClearService: () => void }) {
  return (
    <section id="who-we-help" className="scroll-mt-24 bg-[#F1F0E9] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="mb-10 sm:mb-14"><Eyebrow>Who we help</Eyebrow></div>
        <div className="grid items-stretch gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 xl:gap-14">
          <div className="relative flex min-h-[490px] flex-col justify-between overflow-hidden rounded-[1.8rem] bg-[#0F172B] p-7 text-white sm:p-10 lg:sticky lg:top-28 lg:min-h-[650px] lg:p-12">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.08]" />
            <div aria-hidden="true" className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/[0.08]" />
            <div aria-hidden="true" className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#528221]/20 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2">
                {/* <Sparkles size={13} className="text-[#A3D953]" /> */}
                <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.15em] text-white/75">People first. Ideas always.</span>
              </div>
              <h2 className="max-w-[540px] font-['Manrope'] text-[2.65rem] font-extrabold leading-[1.1] tracking-[-0.055em] text-[#FAFAF7] sm:text-5xl xl:text-[3.55rem]">
                Good ideas come in <span className="text-[#A3D953]">every size.</span>
              </h2>
              <p className="mt-7 max-w-[420px] font-['DM_Sans'] text-base leading-8 text-white/65">
                From a neighbourhood business to a new idea taking shape, we work with people who want to express what they do, connect with others, and build something meaningful.
              </p>
            </div>
            <div className="relative z-10 mt-14 border-t border-white/15 pt-7">
              <p className="max-w-[400px] font-['Manrope'] text-xl font-semibold leading-relaxed tracking-[-0.025em] text-white sm:text-2xl">
                You don't need to be established to deserve a brand that feels <span className="text-[#A3D953]">thoughtfully yours.</span>
              </p>
              <PrimaryLink href="#contact" onClick={onClearService}>
                Tell us what you're building
              </PrimaryLink>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            {audiences.map((audience) => {
              const Icon = audience.icon;
              return (
                <article key={audience.number} className="group rounded-[1.35rem] border border-[#E3E2D9] bg-[#FAFAF7] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B9C99E] hover:shadow-[0_14px_35px_rgba(15,23,43,0.055)] sm:p-6 lg:p-7">
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] sm:h-14 sm:w-14 ${audience.iconClass}`}><Icon size={23} strokeWidth={1.7} /></div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-3">
                        <span className="font-['Manrope'] text-[10px] font-bold tracking-[0.16em] text-[#89938B]">{audience.number}</span>
                        <span className="h-px w-5 bg-[#D9DAD1]" />
                        <span className="font-['Manrope'] text-[9px] font-semibold uppercase tracking-[0.12em] text-[#89938B]">{audience.descriptor}</span>
                      </div>
                      <h3 className="font-['Manrope'] text-lg font-bold leading-snug tracking-[-0.035em] text-[#0F172B] transition-colors group-hover:text-[#528221] sm:text-xl">{audience.title}</h3>
                      <p className="mt-2 max-w-[580px] font-['DM_Sans'] text-sm leading-[1.75] text-[#66727A] sm:text-[15px]">{audience.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {audience.examples.map((example) => <span key={example} className="rounded-full border border-[#E8E8DF] bg-white px-3 py-1.5 font-['DM_Sans'] text-[11px] font-medium text-[#66727A] sm:text-xs">{example}</span>)}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-[#DCDCD2] pt-7 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p className="font-['DM_Sans'] text-sm leading-relaxed text-[#66727A] sm:text-[15px]">Have something different in mind? We'd still love to hear about it.</p>
          <a href="#contact" className="group inline-flex w-fit items-center gap-2 font-['Manrope'] text-sm font-bold text-[#528221] transition-colors hover:text-[#0F172B]">Let's talk about your idea <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   SERVICE VISUALS — CSS-BASED, NO EXTRA IMAGE DEPENDENCIES
========================================================= */
function IdentityPreview() {
  return (
    <div className="flex h-[225px] flex-col overflow-hidden rounded-2xl bg-[#F1F0E9] p-4 sm:h-[240px] sm:p-5">
      <div className="flex items-center justify-between"><span className="eyebrow-small">Identity system / 01</span><Fingerprint size={17} className="text-[#528221]" /></div>
      <div className="my-auto grid grid-cols-[1fr_0.85fr] items-center gap-3">
        <div><div className="font-['Manrope'] text-[2.4rem] font-extrabold leading-none tracking-[-0.08em] text-[#0F172B] sm:text-5xl">Form</div><div className="mt-2 font-['DM_Sans'] text-[10px] font-medium tracking-wide text-[#66727A]">Visual language & direction</div><div className="mt-5 h-px w-4/5 bg-[#C9C9BD]" /><div className="mt-2 h-px w-3/5 bg-[#D7D7CC]" /></div>
        <div className="relative flex aspect-square items-center justify-center rounded-full bg-[#DCE9C9]"><div className="absolute h-[70%] w-[70%] rounded-full border border-[#528221]/30" /><div className="absolute h-[46%] w-[46%] rounded-full bg-[#528221]" /><div className="absolute right-[7%] top-[13%] h-5 w-5 rounded-full bg-[#F07843]" /><div className="absolute bottom-[13%] left-[10%] h-3 w-3 rounded-full bg-[#0F172B]" /></div>
      </div>
      <div className="flex items-center gap-2 border-t border-[#D9D9CF] pt-3">{[COLORS.navy, COLORS.green, COLORS.lime, COLORS.orange, COLORS.ivory].map((color) => <span key={color} className="h-5 flex-1 rounded-md border border-black/5" style={{ backgroundColor: color }} />)}</div>
    </div>
  );
}

function WebsitePreview() {
  return (
    <div className="h-[225px] overflow-hidden rounded-2xl bg-[#E9ECF4] p-4 sm:h-[240px] sm:p-5">
      <div className="overflow-hidden rounded-xl border border-[#D8DCE7] bg-white shadow-[0_10px_25px_rgba(15,23,43,0.07)]">
        <div className="flex h-8 items-center gap-1.5 border-b border-[#ECEEF2] px-3"><span className="h-1.5 w-1.5 rounded-full bg-[#F07843]" /><span className="h-1.5 w-1.5 rounded-full bg-[#E6C56A]" /><span className="h-1.5 w-1.5 rounded-full bg-[#87AE6D]" /><div className="ml-3 h-3 w-2/5 rounded-full bg-[#F0F1F4]" /><span className="ml-auto h-3 w-8 rounded bg-[#0F172B]" /></div>
        <div className="grid min-h-[165px] grid-cols-[1.05fr_0.95fr] gap-2 p-4 sm:p-5">
          <div className="flex flex-col justify-center"><span className="font-['Manrope'] text-[8px] font-bold uppercase tracking-[0.12em] text-[#528221]">Digital experience</span><div className="mt-2 font-['Manrope'] text-xl font-extrabold leading-[1.08] tracking-[-0.06em] text-[#0F172B] sm:text-2xl">A clearer way to connect.</div><div className="mt-3 h-1.5 w-full rounded-full bg-[#E9EAEF]" /><div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-[#E9EAEF]" /><div className="mt-3 h-6 w-16 rounded-full bg-[#528221]" /></div>
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-[#DCE9C9]"><div className="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-[#A3D953]" /><div className="absolute -bottom-6 -left-4 h-24 w-24 rounded-full bg-[#528221]/80" /><Monitor size={37} className="relative z-10 text-[#0F172B]" /></div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.13em] text-[#64708A]"><span>Structure</span><span>Interaction</span><span>Responsive</span></div>
    </div>
  );
}

function CreativePreview() {
  return (
    <div className="h-[225px] overflow-hidden rounded-2xl bg-[#FBE9E1] p-4 sm:h-[240px] sm:p-5">
      <div className="mb-4 flex items-center justify-between"><span className="font-['Manrope'] text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#A65B3A]">Creative toolkit / 03</span><Layers3 size={17} className="text-[#D66C3D]" /></div>
      <div className="grid h-[150px] grid-cols-4 grid-rows-2 gap-2">
        <div className="col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-xl bg-[#0F172B] p-3.5 text-white"><span className="font-['Manrope'] text-[8px] font-bold uppercase tracking-[0.15em] text-[#A3D953]">Make a mark</span><span className="font-['Manrope'] text-2xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-3xl">Ideas<br />in motion.</span><span className="h-1 w-10 rounded-full bg-[#F07843]" /></div>
        <div className="col-span-2 flex items-center justify-center rounded-xl bg-[#A3D953]"><Palette size={27} className="text-[#0F172B]" /></div>
        <div className="flex items-center justify-center rounded-xl bg-white"><PenTool size={22} className="text-[#D66C3D]" /></div>
        {/* <div className="flex items-center justify-center rounded-xl bg-[#F3C6AE]"><Sparkles size={22} className="text-[#8B4B31]" /></div> */}
        <div className="flex items-center justify-center rounded-xl bg-[#F3C6AE]"><NotebookIcon size={22} className="text-[#8B4B31]" /></div>
      </div>
    </div>
  );
}

/* =========================================================
   SERVICES
========================================================= */
function ServicesSection({
  onChooseService,
}: {
  onChooseService: (service: ServiceName) => void;
}) {
  return (
    <section id="services" className="scroll-mt-24 bg-[#FAFAF7] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={<>The pieces that make<br className="hidden sm:block" /> a brand feel <span className="text-[#528221]">complete.</span></>}
            description="A thoughtful combination of strategy, design, and technology to help your idea show up clearly and consistently."
          />
          <a href="#contact" onClick={() => onChooseService("Not sure yet")} className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#AAB89C] pb-2 font-['Manrope'] text-sm font-bold text-[#528221] transition-colors hover:border-[#0F172B] hover:text-[#0F172B]">Discuss your project <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article id={service.id} key={service.id} className="group flex scroll-mt-28 flex-col rounded-[1.7rem] border border-[#E8E8DF] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D5B4] hover:shadow-[0_20px_45px_rgba(15,23,43,0.06)] sm:p-6 lg:p-7">
                {service.preview}
                <div className="mt-7 flex items-center gap-2"><Icon size={17} style={{ color: service.accent }} /><span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.16em]" style={{ color: service.accent }}>{service.number} / {service.category}</span></div>
                <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold tracking-[-0.045em] text-[#0F172B]">{service.title}</h3>
                <p className="mt-3 min-h-[76px] font-['DM_Sans'] text-sm leading-7 text-[#66727A]">{service.description}</p>
                <div className="my-6 h-px bg-[#ECECE5]" />
                <p className="mb-4 font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#89938B]">What we can create</p>
                <ul className="space-y-3">
                  {service.deliverables.map((item) => <li key={item} className="flex items-start gap-2.5 font-['DM_Sans'] text-sm text-[#46505B]"><Check size={15} className="mt-0.5 shrink-0 text-[#528221]" />{item}</li>)}
                </ul>
                <a href="#contact" onClick={() => onChooseService(service.enquiryValue)} className="mt-8 inline-flex items-center gap-2 border-t border-[#ECECE5] pt-5 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-colors hover:text-[#528221]">Discuss this service <ArrowRight size={16} /></a>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#E8E8DF] bg-[#F1F0E9] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div><p className="font-['Manrope'] text-base font-bold text-[#0F172B]">Not sure which service fits your idea?</p><p className="mt-1 font-['DM_Sans'] text-sm leading-6 text-[#66727A]">Start with the challenge. We can work out the right scope together.</p></div>
          <PrimaryLink href="#contact" dark onClick={() => onChooseService("Not sure yet")}>Tell us about it</PrimaryLink>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   OUR WORK — EXPLICITLY LABELLED CONCEPT STUDIES
========================================================= */
function ConceptCard({
  number,
  title,
  description,
  tags,
  variant,
}: {
  number: string;
  title: string;
  description: string;
  tags: string[];
  variant: "identity" | "portfolio" | "learning";
}) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#17223A]">
      <div className={`relative flex h-[285px] items-center justify-center overflow-hidden p-6 ${variant === "identity" ? "bg-[#E5E8DC]" : variant === "portfolio" ? "bg-[#E8EAF0]" : "bg-[#F1E7DF]"}`}>
        {variant === "identity" && <>
          <div className="absolute -left-10 -top-14 h-44 w-44 rounded-full bg-[#C5D6A6]" /><div className="absolute -bottom-14 -right-6 h-52 w-52 rounded-full bg-[#D4B58E]" />
          <div className="relative z-10 w-[82%] max-w-[310px] -rotate-3 rounded-xl bg-[#FAFAF7] p-5 shadow-[0_18px_35px_rgba(15,23,43,0.16)]"><div className="flex items-center justify-between"><span className="concept-label text-[#528221]">Local brand concept</span><span className="h-2 w-2 rounded-full bg-[#F07843]" /></div><div className="mt-8 font-['Manrope'] text-4xl font-extrabold leading-none tracking-[-0.07em] text-[#0F172B]">Good<br />things grow.</div><div className="mt-4 h-px w-full bg-[#DADDD3]" /><div className="mt-3 flex items-center justify-between"><span className="text-[9px] text-[#66727A]">Identity / Packaging</span><span className="concept-label text-[#528221]">01</span></div><div className="mt-5 flex gap-1.5">{[COLORS.navy, COLORS.green, COLORS.lime, COLORS.orange].map((color) => <span key={color} className="h-6 flex-1 rounded" style={{ backgroundColor: color }} />)}</div></div>
        </>}
        {variant === "portfolio" && <>
          <div className="absolute left-5 top-5 h-14 w-14 rounded-full border border-[#465B83]/20" /><div className="absolute bottom-5 right-5 h-24 w-24 rounded-full bg-[#D1D9E9]" />
          <div className="relative z-10 w-[82%] max-w-[310px] overflow-hidden rounded-xl bg-white shadow-[0_18px_35px_rgba(15,23,43,0.16)]"><div className="flex items-center justify-between border-b border-[#E8EAF0] px-4 py-3"><span className="concept-label text-[#0F172B]">Creator / Portfolio</span><div className="flex gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#465B83]" /><span className="h-1.5 w-1.5 rounded-full bg-[#AAB5CA]" /><span className="h-1.5 w-1.5 rounded-full bg-[#D9DFEA]" /></div></div><div className="grid grid-cols-[1fr_0.7fr] gap-3 p-4"><div className="py-2"><span className="concept-label text-[#465B83]">Independent voice</span><div className="mt-3 font-['Manrope'] text-2xl font-extrabold leading-[1.02] tracking-[-0.06em] text-[#0F172B]">Work with<br />a point of<br />view.</div><div className="mt-4 h-5 w-16 rounded-full bg-[#465B83]" /></div><div className="relative flex min-h-[145px] items-center justify-center overflow-hidden rounded-lg bg-[#DCE1EC]"><div className="absolute -right-4 -top-5 h-20 w-20 rounded-full bg-[#A3D953]" /><div className="absolute -bottom-4 -left-3 h-24 w-24 rounded-full bg-[#465B83]" /><UserRound size={35} className="relative z-10 text-white" /></div></div></div>
        </>}
        {variant === "learning" && <>
          <div className="absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-[#F2D0BB]" /><div className="absolute -right-8 top-0 h-40 w-40 rounded-full bg-[#F7C7A9]" />
          <div className="relative z-10 w-[82%] max-w-[310px] rounded-xl bg-[#FAFAF7] p-4 shadow-[0_18px_35px_rgba(15,23,43,0.16)]"><div className="flex items-center justify-between"><span className="concept-label text-[#D66C3D]">Learning / Community</span><span className="h-2 w-2 rounded-full bg-[#528221]" /></div><div className="mt-5 rounded-lg bg-[#0F172B] p-4 text-white"><div className="font-['Manrope'] text-2xl font-extrabold leading-[1.05] tracking-[-0.06em]">Curiosity<br />starts here.</div><div className="mt-3 h-1 w-10 rounded-full bg-[#F07843]" /></div><div className="mt-3 grid grid-cols-3 gap-2">{[["Explore", "#DCE9C9"], ["Discover", "#E9ECF4"], ["Create", "#FBE9E1"]].map(([label, color]) => <div key={label} className="rounded-md p-2" style={{ backgroundColor: color }}><div className="mb-2 h-5 w-5 rounded-full bg-white/90" /><span className="font-['Manrope'] text-[8px] font-bold text-[#0F172B]">{label}</span></div>)}</div></div>
        </>}
      </div>
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between"><span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.15em] text-[#A3D953]">Concept study / {number}</span><ArrowUpRight size={17} className="text-white/50" /></div>
        <h3 className="mt-3 font-['Manrope'] text-xl font-bold tracking-[-0.03em] text-white">{title}</h3>
        <p className="mt-2 font-['DM_Sans'] text-sm leading-7 text-white/55">{description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 font-['DM_Sans'] text-[10px] text-white/60">{tag}</span>)}</div>
      </div>
    </article>
  );
}

function WorkSection() {
  return (
    <section id="our-work" className="scroll-mt-24 bg-[#0F172B] py-20 text-white sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Selected directions" title={<>Ideas made<br /><span className="text-[#A3D953]">visible.</span></>} description="A glimpse into the kinds of brand and digital experiences we can shape. These visuals are illustrative concept directions, not commissioned client projects." light />
          <div className="flex items-center gap-3 text-white/50"><span className="h-px w-9 bg-white/25" /><span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.16em]">Concept studies / 001—003</span></div>
        </div>
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
          <ConceptCard number="01" title="Neighbourhood brand" description="A warm, recognisable identity direction for a local consumer business." tags={["Brand identity", "Packaging", "Art direction"]} variant="identity" />
          <ConceptCard number="02" title="Creator portfolio" description="A digital presence concept for a creative professional or independent expert." tags={["Web design", "Personal brand", "Content structure"]} variant="portfolio" />
          <ConceptCard number="03" title="Learning initiative" description="A cohesive identity and digital communication direction for an educational initiative." tags={["Visual identity", "Digital presence", "Communication"]} variant="learning" />
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl font-['DM_Sans'] text-sm leading-7 text-white/50">These are illustrative directions created to communicate our approach. They are not presented as completed client engagements.</p>
          <a href="#contact" className="group inline-flex w-fit items-center gap-2 font-['Manrope'] text-sm font-bold text-[#A3D953] hover:text-white">Have a project in mind? <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ABOUT
========================================================= */
function AboutSection() {
  const pillars: { label: string; icon: LucideIcon; color: string }[] = [
    { label: "Strategy", icon: Compass, color: "text-[#528221]" },
    { label: "Design", icon: PenTool, color: "text-[#D66C3D]" },
    { label: "Technology", icon: Code2, color: "text-[#465B83]" },
  ];

  return (
    <section id="about-us" className="scroll-mt-24 bg-[#FAFAF7] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1600px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-14 xl:px-20">
        <div>
          <SectionHeading eyebrow="About BrandBanao" title={<>Everyone has a brand.<br /><span className="text-[#528221]">Let's build yours.</span></>} description="BrandBanao is a brand-building and digital studio built around a simple belief: good work deserves a clear identity and a thoughtful way to reach people." />
          <p className="mt-6 max-w-[640px] font-['DM_Sans'] text-[15px] leading-8 text-[#66727A]">
            We bring together creative thinking, design craft, and practical technology to help businesses, creators, professionals, and communities shape how they present themselves. Whether you are starting from scratch or improving what already exists, the aim is to create work that feels considered, useful, and distinctly yours.
          </p>
          <div className="mt-9 flex flex-wrap gap-3"><PrimaryLink href="#services" dark>Explore what we do</PrimaryLink><a href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#DCDDD4] px-6 py-3 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-colors hover:border-[#528221] hover:text-[#528221]">Talk about your idea <ArrowUpRight size={16} /></a></div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#F1F0E9] p-6 sm:p-9">
            <div className="flex items-center justify-between"><span className="eyebrow-small">The BrandBanao approach</span><span className="font-['Manrope'] text-[9px] font-bold text-[#528221]">SYSTEM / 01</span></div>
            <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#0F172B] p-6 text-white sm:p-8">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" /><div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-white/10" />
              <span className="relative z-10 font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.17em] text-[#A3D953]">One connected experience</span>
              <div className="relative z-10 mt-3 font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.05em] sm:text-4xl">Think clearly.<br />Design meaningfully.<br />Build thoughtfully.</div>
              <div className="relative z-10 mt-8 flex items-center gap-2"><span className="h-1.5 w-12 rounded-full bg-[#A3D953]" /><span className="h-1.5 w-6 rounded-full bg-[#F07843]" /><span className="h-1.5 w-3 rounded-full bg-white/40" /></div>
            </div>
            <div className="relative mt-5 grid grid-cols-3 gap-3">
              {pillars.map(({ label, icon: Icon, color }) => (
                <div key={label} className="rounded-xl border border-[#E2E2D8] bg-[#FAFAF7] p-3 text-center sm:p-4">
                  <Icon size={21} className={`mx-auto ${color}`} />
                  <span className="mt-2 block font-['Manrope'] text-[10px] font-bold text-[#0F172B] sm:text-xs">{label}</span>
                </div>
              ))}
            </div>
            {/* <div className="mt-5 flex items-center justify-between border-t border-[#DCDCD2] pt-4"><span className="font-['DM_Sans'] text-[11px] text-[#66727A]">Built around your purpose.</span><Sparkles size={16} className="text-[#528221]" /></div> */}
            <div className="mt-5 flex items-center justify-between border-t border-[#DCDCD2] pt-4"><span className="font-['DM_Sans'] text-[11px] text-[#66727A]">Built around your purpose.</span></div>
          </div>
          <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-[#E8E8DF] bg-white px-4 py-3 shadow-lg sm:block lg:-right-5"><span className="font-['Caveat'] text-xl font-semibold text-[#528221]">Make it yours.</span></div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   WHY US + PROJECT WORKFLOW
========================================================= */
function WhyUsSection() {
  const principles = [
    { number: "01", icon: Target, title: "Clarity before decoration", description: "We begin with purpose, audience, and the problem—not just colours and visual trends." },
    { number: "02", icon: Fingerprint, title: "Distinctive, not generic", description: "The goal is a coherent expression of what makes your idea or business different." },
    { number: "03", icon: Workflow, title: "Design that works", description: "Visual quality matters, but so do usability, structure, accessibility, and practical details." },
    { number: "04", icon: Network, title: "Connected thinking", description: "We consider how your identity, communication, and digital presence work together." },
  ];
  const steps = [
    { number: "01", title: "Discover", description: "Understand your goals and audience.", icon: Compass },
    { number: "02", title: "Define", description: "Agree on direction and scope.", icon: Target },
    { number: "03", title: "Create", description: "Design and build the solution.", icon: Code2 },
    { number: "04", title: "Refine", description: "Review, improve, and prepare to launch.", icon: Check },
  ];

  return (
    <section id="why-us" className="scroll-mt-24 bg-[#F1F0E9] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
        <SectionHeading eyebrow="Why BrandBanao" title={<>Good work is more than<br className="hidden sm:block" /> good-looking <span className="text-[#528221]">work.</span></>} description="A thoughtful process connects what you want to say, how people experience it, and what the final solution needs to do." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {principles.map((item) => {
            const Icon = item.icon;
            return <article key={item.number} className="rounded-[1.4rem] border border-[#E1E1D7] bg-[#FAFAF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,23,43,0.06)] sm:p-7"><div className="flex items-center justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0DF] text-[#528221]"><Icon size={21} /></div><span className="font-['Manrope'] text-[10px] font-extrabold tracking-[0.16em] text-[#A2AAA0]">{item.number}</span></div><h3 className="mt-7 font-['Manrope'] text-lg font-extrabold leading-snug tracking-[-0.035em] text-[#0F172B]">{item.title}</h3><p className="mt-3 font-['DM_Sans'] text-sm leading-7 text-[#66727A]">{item.description}</p></article>;
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.8rem] bg-[#0F172B] p-6 text-white sm:p-9 lg:p-11">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><Eyebrow light>How we work</Eyebrow><h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold tracking-[-0.04em] sm:text-3xl">From first conversation to final delivery.</h3></div><span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">Project workflow / 4 stages</span></div>
          <div className="mt-10 grid gap-3 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return <div key={step.number} className="relative"><div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5"><div className="flex items-center justify-between"><span className="font-['Manrope'] text-[10px] font-extrabold tracking-[0.16em] text-[#A3D953]">STEP {step.number}</span><Icon size={17} className="text-white/50" /></div><h4 className="mt-5 font-['Manrope'] text-xl font-bold text-white">{step.title}</h4><p className="mt-2 min-h-[48px] font-['DM_Sans'] text-sm leading-6 text-white/55">{step.description}</p></div>{index < steps.length - 1 && <div aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#A3D953] md:block"><ArrowRight size={18} /></div>}</div>;
            })}
          </div>
          <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="font-['DM_Sans'] text-sm leading-7 text-white/50">Clear scope, shared feedback, and practical next steps at each stage.</p><a href="#contact" className="group inline-flex w-fit items-center gap-2 font-['Manrope'] text-sm font-bold text-[#A3D953] transition-colors hover:text-white">Start with a conversation <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a></div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FAQ
========================================================= */
function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  return (
    <section id="faqs" className="scroll-mt-24 bg-[#FAFAF7] py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-14 xl:px-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-5 font-['Manrope'] text-[2.35rem] font-extrabold leading-[1.12] tracking-[-0.055em] text-[#0F172B] sm:text-5xl">A few things<br />worth <span className="text-[#528221]">knowing.</span></h2>
          <p className="mt-5 max-w-md font-['DM_Sans'] text-[15px] leading-8 text-[#66727A]">A good project begins with a clear conversation. Here are answers to some common questions about working with us.</p>
          <div className="mt-8 rounded-2xl bg-[#F1F0E9] p-5 sm:p-6"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#528221]"><Mail size={19} /></div><p className="mt-4 font-['Manrope'] text-base font-bold text-[#0F172B]">Still have a question?</p><p className="mt-2 font-['DM_Sans'] text-sm leading-6 text-[#66727A]">Tell us what you have in mind. We'll take it from there.</p><a href="#contact" className="mt-4 inline-flex items-center gap-2 font-['Manrope'] text-sm font-bold text-[#528221]">Get in touch <ArrowRight size={15} /></a></div>
        </div>

        <div className="border-t border-[#E5E5DC]">
          {faqs.map((faq, index) => {
            const open = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            return <div key={faq.question} className="border-b border-[#E5E5DC]"><h3><button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setActiveIndex(open ? null : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"><span className="flex items-start gap-4"><span className="mt-1 font-['Manrope'] text-[10px] font-extrabold tracking-[0.15em] text-[#528221]">{String(index + 1).padStart(2, "0")}</span><span className="font-['Manrope'] text-base font-bold leading-7 tracking-[-0.02em] text-[#0F172B] sm:text-lg">{faq.question}</span></span><span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${open ? "rotate-45 border-[#528221] bg-[#528221] text-white" : "border-[#DFE0D7] text-[#528221]"}`}><span className="text-xl font-light leading-none">+</span></span></button></h3>{open && <div id={panelId} className="pb-7 pl-8 sm:pl-10"><p className="max-w-[650px] font-['DM_Sans'] text-sm leading-8 text-[#66727A] sm:text-[15px]">{faq.answer}</p></div>}</div>;
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CONTACT FORM
   Mailto handoff: no server/database submission is claimed.
========================================================= */
// type ContactForm = {
//   name: string;
//   email: string;
//   business: string;
//   service: string;
//   budget: string;
//   message: string;
// };

// const emptyForm: ContactForm = {
//   name: "",
//   email: "",
//   business: "",
//   service: "",
//   budget: "",
//   message: "",
// };


const CONTACT_EMAIL = "brandbanaohq@gmail.com";

const INSTAGRAM_PROFILE_URL =
  "https://www.instagram.com/brandbanaohq/";

const INSTAGRAM_DM_URL =
  "https://www.instagram.com/brandbanaohq/";

const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/profile.php?id=61592828546641/";

const FACEBOOK_DM_URL =
  "https://www.facebook.com/profile.php?id=61592828546641";


function ContactSection({
}: {
  selectedService: ServiceName | "";
}) {
  // const [form, setForm] = useState<ContactForm>({ ...emptyForm, service: selectedService });
  // const [notice, setNotice] = useState("");

  // useEffect(() => {
  //   setForm((current) => ({ ...current, service: selectedService }));
  // }, [selectedService]);

  // const updateField = (field: keyof ContactForm, value: string) => {
  //   setForm((current) => ({ ...current, [field]: value }));
  //   if (notice) setNotice("");
  // };

  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (CONTACT_EMAIL === "brandbanaohq@gmail.com") {
  //     setNotice("The contact form is nearly ready. Replace CONTACT_EMAIL in App.tsx with your real business email before accepting enquiries.");
  //     return;
  //   }

  //   const subject = `Project enquiry from ${form.name}`;
  //   const body = [
  //     `Name: ${form.name}`,
  //     `Email: ${form.email}`,
  //     `Business / Project: ${form.business || "Not provided"}`,
  //     `Interested in: ${form.service || "Not specified"}`,
  //     `Indicative budget: ${form.budget || "Not specified"}`,
  //     "",
  //     "Project details:",
  //     form.message,
  //   ].join("\n");

  //   window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  //   setNotice("Your email application should open with the enquiry details prepared. Please review and send the email to complete your enquiry.");
  // };

  // const inputClass = "mt-2 w-full rounded-xl border border-[#E5E6DE] bg-[#FAFAF7] px-4 py-3.5 font-['DM_Sans'] text-sm text-[#0F172B] outline-none transition-all placeholder:text-[#A0A69E] focus:border-[#528221] focus:bg-white focus:ring-2 focus:ring-[#528221]/10";
  // const labelClass = "block font-['Manrope'] text-xs font-bold text-[#46505B]";

  return (

<section
  id="contact"
  className="scroll-mt-24 bg-[#0F172B] py-20 text-white sm:py-24 lg:py-32"
>
  <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14 xl:px-20">

    {/* LEFT: INTRODUCTION */}
    <div>
      <Eyebrow light>Let's get started</Eyebrow>

      <h2 className="mt-6 font-['Manrope'] text-[2.8rem] font-extrabold leading-[1.08] tracking-[-0.06em] text-[#FAFAF7] sm:text-5xl lg:text-[3.8rem]">
        Have an idea?
        <br />
        Let's give it
        <br />
        <span className="text-[#A3D953]">a shape.</span>
      </h2>

      <p className="mt-7 max-w-[470px] font-['DM_Sans'] text-base leading-8 text-white/60">
        Every great project starts with a conversation. Whether you
        have a clear direction or just an idea taking shape, we'd
        love to hear about it.
      </p>

      <div className="mt-10 border-t border-white/15 pt-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#A3D953]">
            <Mail size={19} />
          </div>

          <div>
            <span className="block font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
              Prefer email?
            </span>

            <span className="mt-1 block font-['DM_Sans'] text-sm text-white/80">
              Reach out directly with your project details.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#A3D953]" />
          <span className="font-['Manrope'] text-xs font-bold text-white">
            No lengthy brief needed
          </span>
        </div>

        <p className="mt-3 font-['DM_Sans'] text-sm leading-7 text-white/55">
          Just tell us what you're thinking about, what you're
          trying to achieve, or where you need a hand. We can
          figure out the next steps together.
        </p>
      </div>
    </div>

    {/* RIGHT: CONTACT OPTIONS */}
    <div className="rounded-[1.7rem] bg-[#FAFAF7] p-5 text-[#0F172B] sm:p-8 lg:p-9">

      <div className="mb-8">
        <span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#528221]">
          Get in touch
        </span>

        <h3 className="mt-2 font-['Manrope'] text-2xl font-extrabold tracking-[-0.04em] text-[#0F172B] sm:text-[1.75rem]">
          Choose how you'd like to connect.
        </h3>

        <p className="mt-3 max-w-lg font-['DM_Sans'] text-sm leading-7 text-[#778078]">
          Have a project in mind, a question, or simply want to say
          hello? Reach us through whichever channel works best for you.
        </p>
      </div>

      {/* EMAIL */}
      <a
        href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project enquiry — BrandBanao")}`}
        className="group flex flex-col gap-4 rounded-2xl border border-[#E5E6DE] bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A3D953] hover:shadow-[0_12px_35px_rgba(15,23,43,0.06)] sm:flex-row sm:items-center sm:justify-between sm:p-6"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF0DF] text-[#528221]">
            <Mail size={21} />
          </div>

          <div className="min-w-0">
            <span className="block font-['Manrope'] text-xs font-bold text-[#0F172B]">
              Email us
            </span>

            <span className="mt-1 block break-all font-['DM_Sans'] text-sm text-[#778078]">
              {CONTACT_EMAIL}
            </span>
          </div>
        </div>

        <span className="inline-flex items-center gap-2 font-['Manrope'] text-xs font-bold text-[#528221] transition-colors group-hover:text-[#0F172B]">
          Write to us
          <ArrowUpRight size={16} />
        </span>
      </a>

      {/* SOCIAL CHANNELS */}
      <div className="mb-4 mt-9">
        <h4 className="font-['Manrope'] text-sm font-extrabold text-[#0F172B]">
          Find us on social
        </h4>

        <p className="mt-1 font-['DM_Sans'] text-xs leading-6 text-[#89938B]">
          Send us a message or follow along for updates and creative inspiration.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">

        {/* INSTAGRAM */}
        <div className="group flex flex-col rounded-2xl border border-[#E5E6DE] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#A3D953] hover:shadow-[0_12px_35px_rgba(15,23,43,0.06)]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EDE9] text-[#B85F43]">
              <FaInstagram size={21} />
            </div>

            <span className="rounded-full bg-[#F1F0E9] px-3 py-1 font-['Manrope'] text-[9px] font-bold uppercase tracking-wider text-[#778078]">
              Instagram
            </span>
          </div>

          <h4 className="mt-5 font-['Manrope'] text-base font-extrabold text-[#0F172B]">
            Let's connect.
          </h4>

          <p className="mt-2 min-h-[66px] font-['DM_Sans'] text-xs leading-6 text-[#89938B]">
            Have a question or project idea? Drop us a DM. Follow
            our page to see what we're creating.
          </p>

          <div className="mt-5 flex flex-col gap-2">
            <a
              href={INSTAGRAM_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#0F172B] px-4 py-2 font-['Manrope'] text-xs font-bold text-white transition-colors hover:bg-[#528221]"
            >
              Send a DM
              <ArrowUpRight size={14} />
            </a>

            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#E5E6DE] px-4 py-2 font-['Manrope'] text-xs font-bold text-[#46505B] transition-colors hover:border-[#A3D953] hover:bg-[#F6F8F1] hover:text-[#528221]"
            >
              Follow on Instagram
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* FACEBOOK */}
        <div className="group flex flex-col rounded-2xl border border-[#E5E6DE] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#A3D953] hover:shadow-[0_12px_35px_rgba(15,23,43,0.06)]">
          <div className="flex items-center justify-between gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0F8] text-[#3566A8]">
              <FaFacebookF size={21} />
            </div>

            <span className="rounded-full bg-[#F1F0E9] px-3 py-1 font-['Manrope'] text-[9px] font-bold uppercase tracking-wider text-[#778078]">
              Facebook
            </span>
          </div>

          <h4 className="mt-5 font-['Manrope'] text-base font-extrabold text-[#0F172B]">
            Say hello.
          </h4>

          <p className="mt-2 min-h-[66px] font-['DM_Sans'] text-xs leading-6 text-[#89938B]">
            Message us about what you're building, or follow our
            page to stay connected with BrandBanao.
          </p>

          <div className="mt-5 flex flex-col gap-2">
            <a
              href={FACEBOOK_DM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#0F172B] px-4 py-2 font-['Manrope'] text-xs font-bold text-white transition-colors hover:bg-[#528221]"
            >
              Send a message
              <ArrowUpRight size={14} />
            </a>

            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#E5E6DE] px-4 py-2 font-['Manrope'] text-xs font-bold text-[#46505B] transition-colors hover:border-[#A3D953] hover:bg-[#F6F8F1] hover:text-[#528221]"
            >
              Follow on Facebook
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* CLOSING NOTE */}
      <div className="mt-7 flex items-start gap-3 border-t border-[#E8E8DF] pt-6">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#A3D953]" />

        <p className="font-['DM_Sans'] text-xs leading-6 text-[#89938B]">
          We're looking forward to hearing from you. Whether it's a
          business, a personal idea, or something entirely different,
          let's start a conversation.
        </p>
      </div>
    </div>
  </div>
</section>

    // <section id="contact" className="scroll-mt-24 bg-[#0F172B] py-20 text-white sm:py-24 lg:py-32">
    //   <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14 xl:px-20">
    //     <div>
    //       <Eyebrow light>Let's get started</Eyebrow>
    //       <h2 className="mt-6 font-['Manrope'] text-[2.8rem] font-extrabold leading-[1.08] tracking-[-0.06em] text-[#FAFAF7] sm:text-5xl lg:text-[3.8rem]">Have an idea?<br />Let's give it<br /><span className="text-[#A3D953]">a shape.</span></h2>
    //       <p className="mt-7 max-w-[470px] font-['DM_Sans'] text-base leading-8 text-white/60">Tell us a little about what you are building, what you need, or what you would like to improve. We'll start with a conversation and explore the right direction.</p>
    //       <div className="mt-10 border-t border-white/15 pt-7"><div className="flex items-center gap-3"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#A3D953]"><Mail size={19} /></div><div><span className="block font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">Email enquiry</span><span className="mt-1 block font-['DM_Sans'] text-sm text-white/80">Use the form to prepare your project enquiry.</span></div></div></div>
    //       {/* <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6"><div className="flex items-center gap-2"><Sparkles size={16} className="text-[#A3D953]" /><span className="font-['Manrope'] text-xs font-bold text-white">A useful starting point</span></div><p className="mt-3 font-['DM_Sans'] text-sm leading-7 text-white/55">You don't need a complete brief. A simple description of your idea, audience, and current challenge is enough to begin.</p></div> */}
    //       <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6"><div className="flex items-center gap-2"><span className="font-['Manrope'] text-xs font-bold text-white">A useful starting point</span></div><p className="mt-3 font-['DM_Sans'] text-sm leading-7 text-white/55">You don't need a complete brief. A simple description of your idea, audience, and current challenge is enough to begin.</p></div>
    //     </div>

    //     <div className="rounded-[1.7rem] bg-[#FAFAF7] p-5 text-[#0F172B] sm:p-8 lg:p-9">
    //       <div className="mb-7 flex items-center justify-between gap-4"><div><span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#528221]">Project enquiry</span><h3 className="mt-2 font-['Manrope'] text-2xl font-extrabold tracking-[-0.04em] text-[#0F172B]">Tell us about your project.</h3></div><div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-[#EAF0DF] text-[#528221] sm:flex"><SendIcon /></div></div>

    //       <form onSubmit={handleSubmit} className="space-y-5">
    //         <div className="grid gap-5 sm:grid-cols-2">
    //           <label className={labelClass}>Your name <span className="text-[#D66C3D]">*</span><input required type="text" autoComplete="name" value={form.name} onChange={(event) => updateField("name", event.target.value)} placeholder="Your name" className={inputClass} /></label>
    //           <label className={labelClass}>Email address <span className="text-[#D66C3D]">*</span><input required type="email" autoComplete="email" value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" className={inputClass} /></label>
    //         </div>
    //         <label className={labelClass}>Business / project name<input type="text" value={form.business} onChange={(event) => updateField("business", event.target.value)} placeholder="What are you building?" className={inputClass} /></label>
    //         <div className="grid gap-5 sm:grid-cols-2">
    //           <label className={labelClass}>What do you need?<select value={form.service} onChange={(event) => updateField("service", event.target.value)} className={inputClass}><option value="">Select a service</option><option value="Brand identity & creative">Brand identity</option><option value="Websites & digital presence">Website / digital presence</option><option value="Creative & digital solutions">Creative solutions</option><option value="Multiple services">Multiple services</option><option value="Not sure yet">Not sure yet</option></select></label>
    //           <label className={labelClass}>Indicative budget<select value={form.budget} onChange={(event) => updateField("budget", event.target.value)} className={inputClass}><option value="">Prefer not to say</option><option value="Below ₹10,000">Below ₹10,000</option><option value="₹10,000–₹25,000">₹10,000–₹25,000</option><option value="₹25,000–₹50,000">₹25,000–₹50,000</option><option value="₹50,000+">₹50,000+</option><option value="Need guidance">Need guidance</option></select></label>
    //         </div>
    //         <label className={labelClass}>Tell us about your idea <span className="text-[#D66C3D]">*</span><textarea required rows={5} value={form.message} onChange={(event) => updateField("message", event.target.value)} placeholder="What are you building? Who is it for? What would you like help with?" className={`${inputClass} resize-y`} /></label>

    //         {notice && <p role="status" className="rounded-xl border border-[#D7E4C7] bg-[#EFF5E8] px-4 py-3 font-['DM_Sans'] text-xs leading-6 text-[#395C24]">{notice}</p>}

    //         <div className="flex flex-col gap-4 border-t border-[#E8E8DF] pt-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-[270px] font-['DM_Sans'] text-[11px] leading-5 text-[#89938B]">This form prepares an email in your email application. It does not store or transmit your information to a server.</p><button type="submit" className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#0F172B] px-6 py-3 font-['Manrope'] text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#528221] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-4">Prepare enquiry <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button></div>
    //       </form>
    //     </div>
    //   </div>
    // </section>
  );
}

// function SendIcon() {
//   return <ArrowUpRight size={20} />;
// }

/* =========================================================
   FOOTER
========================================================= */
function Footer() {
  return (
    <footer className="bg-[#0A1020] text-white">
      <div className="mx-auto w-full max-w-[1600px] px-5 pb-8 pt-12 sm:px-8 lg:px-14 xl:px-20">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-start">
          <div className="max-w-md"><a href="#top" aria-label="BrandBanao home" className="inline-flex rounded-lg bg-white p-1.5"><img src={logo} alt="BrandBanao" className="h-10 w-auto object-contain sm:h-11" /></a><p className="mt-5 max-w-sm font-['DM_Sans'] text-sm leading-7 text-white/50">Building thoughtful brands and digital experiences for businesses, creators, professionals, and ideas taking shape.</p></div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
            <div><span className="footer-label">Explore</span><div className="mt-4 flex flex-col gap-3">{[["Who we help", "#who-we-help"], ["Services", "#services"], ["Our work", "#our-work"]].map(([label, href]) => <a key={href} href={href} className="footer-link">{label}</a>)}</div></div>
            <div><span className="footer-label">BrandBanao</span><div className="mt-4 flex flex-col gap-3">{[["About", "#about-us"], ["Why us", "#why-us"], ["FAQs", "#faqs"]].map(([label, href]) => <a key={href} href={href} className="footer-link">{label}</a>)}</div></div>
            <div className="col-span-2 sm:col-span-1"><span className="footer-label">Start something</span><div className="mt-4 flex flex-col gap-3"><a href="#contact" className="footer-link">Contact</a><a href="#top" className="inline-flex items-center gap-2 font-['DM_Sans'] text-sm text-white/55 transition-colors hover:text-white">Back to top <ArrowUpRight size={14} /></a></div></div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between"><p className="font-['DM_Sans'] text-xs text-white/35">© {new Date().getFullYear()} BrandBanao. All rights reserved.</p><p className="font-['Caveat'] text-lg font-semibold text-[#A3D953]">Everyone has a brand. Let's build yours.</p></div>
      </div>
    </footer>
  );
}

/* =========================================================
   APP
========================================================= */
export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceName | "">("");


  return (
    <div className="min-h-screen scroll-smooth bg-[#FAFAF7] font-['DM_Sans'] text-[#0F172B] antialiased selection:bg-[#A3D953]/40 selection:text-[#0F172B]">
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeHelp onClearService={() => setSelectedService("")} />
        <ServicesSection onChooseService={setSelectedService} />
        <WorkSection />
        <AboutSection />
        <WhyUsSection />
        <FAQSection />
        <ContactSection selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}

// import { useState, type FormEvent, type ReactNode } from "react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BriefcaseBusiness,
//   Check,
//   ChevronDown,
//   Clapperboard,
//   Code2,
//   Compass,
//   Fingerprint,
//   Globe,
//   Layers,
//   Lightbulb,
//   Mail,
//   Menu,
//   Monitor,
//   Network,
//   Palette,
//   PenTool,
//   Send,
//   Sparkles,
//   Target,
//   UserRound,
//   Users,
//   Workflow,
//   X,
//   type LucideIcon,
// } from "lucide-react";

// import logo from "./assets/logo.png";
// import teamImage from "./assets/images/brandbanao-team1.png";

// /*
//   IMPORTANT — CONTACT SETUP

//   Replace this placeholder with your real business email before launch.
//   The contact form uses a mailto handoff, so it opens the visitor's
//   default email application. It does not store submissions on a server.

//   For server-side submissions, connect a form service or your own API.
// */
// const CONTACT_EMAIL = "hello@yourdomain.com";

// const navigation = [
//   { label: "Who we help", href: "#who-we-help" },
//   { label: "Our work", href: "#our-work" },
//   { label: "About", href: "#about-us" },
//   { label: "Why us", href: "#why-us" },
//   { label: "FAQs", href: "#faqs" },
// ];

// type Audience = {
//   number: string;
//   title: string;
//   description: string;
//   examples: string[];
//   icon: LucideIcon;
//   iconClass: string;
// };

// const audiences: Audience[] = [
//   {
//     number: "01",
//     title: "Businesses & local brands",
//     description:
//       "For businesses that want to stand out, build trust, and present their products or services more professionally.",
//     examples: ["Small businesses", "Local brands", "New ventures"],
//     icon: BriefcaseBusiness,
//     iconClass: "bg-[#EAF0DF] text-[#528221]",
//   },
//   {
//     number: "02",
//     title: "Creators & professionals",
//     description:
//       "For independent voices building an audience, sharing expertise, or growing a professional presence.",
//     examples: ["Content creators", "Consultants", "Freelancers"],
//     icon: Clapperboard,
//     iconClass: "bg-[#FBE9E1] text-[#D66C3D]",
//   },
//   {
//     number: "03",
//     title: "Individuals & personal brands",
//     description:
//       "For people who want their skills, experience, work, or personal story to be presented with clarity and character.",
//     examples: ["Professionals", "Portfolios", "Personal projects"],
//     icon: UserRound,
//     iconClass: "bg-[#E9ECF4] text-[#465B83]",
//   },
//   {
//     number: "04",
//     title: "Ideas & passion projects",
//     description:
//       "For early-stage ideas and new initiatives that need a thoughtful identity and a strong place to begin.",
//     examples: ["Side projects", "Start-up ideas", "New concepts"],
//     icon: Lightbulb,
//     iconClass: "bg-[#F6EFD8] text-[#A77A22]",
//   },
//   {
//     number: "05",
//     title: "Communities & organisations",
//     description:
//       "For groups bringing people together around a shared purpose, event, community, or initiative.",
//     examples: ["Communities", "Clubs", "Organisations"],
//     icon: Users,
//     iconClass: "bg-[#E6EFEB] text-[#417565]",
//   },
// ];

// const faqs = [
//   {
//     question: "Who can work with BrandBanao?",
//     answer:
//       "We work with businesses, local brands, creators, independent professionals, communities, and people developing new ideas. You do not need to be an established company to get started.",
//   },
//   {
//     question: "What services do you offer?",
//     answer:
//       "Our work spans brand identity, websites and digital presence, and creative solutions. Depending on your project, we can help with a focused requirement or bring several pieces together into a more coherent brand experience.",
//   },
//   {
//     question: "I have an idea but I am not sure what I need. Can we still talk?",
//     answer:
//       "Absolutely. Tell us what you are trying to build, who it is for, and what you would like to achieve. We can discuss the problem first and work out a sensible scope together.",
//   },
//   {
//     question: "How does a project usually work?",
//     answer:
//       "We start by understanding your goals and requirements, agree on the scope and deliverables, develop the proposed direction, share work for feedback, and refine the agreed solution. The exact process depends on the project.",
//   },
//   {
//     question: "How much does a project cost?",
//     answer:
//       "Pricing depends on the scope, complexity, deliverables, and timeline. We discuss your requirements before proposing a project scope and estimate. There is no need to commit to a package before we understand the work.",
//   },
//   {
//     question: "Can you work with an existing brand or website?",
//     answer:
//       "Yes. We can discuss improving an existing identity, refreshing a website, adding new pages or functionality, or creating supporting digital and creative materials.",
//   },
//   {
//     question: "How do I get started?",
//     answer:
//       "Use the contact form below to share a little about your project. Include a website or social profile if you have one. We can then take the conversation forward by email.",
//   },
// ];

// /* -------------------------------------------------------
//    Small reusable elements
// ------------------------------------------------------- */

// function Eyebrow({
//   children,
//   light = false,
// }: {
//   children: React.ReactNode;
//   light?: boolean;
// }) {
//   return (
//     <div
//       className={`flex items-center gap-3 font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.2em] sm:text-[11px] ${
//         light ? "text-[#A3D953]" : "text-[#528221]"
//       }`}
//     >
//       <span className={`h-[2px] w-7 ${light ? "bg-[#A3D953]" : "bg-[#528221]"}`} />
//       {children}
//     </div>
//   );
// }

// function SectionHeading({
//   eyebrow,
//   title,
//   description,
//   centered = false,
//   light = false,
// }: {
//   eyebrow: string;
//   title: React.ReactNode;
//   description?: string;
//   centered?: boolean;
//   light?: boolean;
// }) {
//   return (
//     <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
//       <div className={centered ? "flex justify-center" : ""}>
//         <Eyebrow light={light}>{eyebrow}</Eyebrow>
//       </div>

//       <h2
//         className={`mt-5 font-['Manrope'] text-[2.2rem] font-extrabold leading-[1.12] tracking-[-0.055em] sm:text-5xl lg:text-[3.4rem] ${
//           light ? "text-[#FAFAF7]" : "text-[#0F172B]"
//         }`}
//       >
//         {title}
//       </h2>

//       {description && (
//         <p
//           className={`mt-5 max-w-2xl font-['DM_Sans'] text-[15px] leading-8 sm:text-base ${
//             centered ? "mx-auto" : ""
//           } ${light ? "text-white/65" : "text-[#66727A]"}`}
//         >
//           {description}
//         </p>
//       )}
//     </div>
//   );
// }

// function PrimaryLink({
//   href,
//   children,
//   dark = false,
// }: {
//   href: string;
//   children: React.ReactNode;
//   dark?: boolean;
// }) {
//   return (
//     <a
//       href={href}
//       className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 py-3 font-['Manrope'] text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-4 ${
//         dark
//           ? "bg-[#0F172B] text-white hover:bg-[#23314D]"
//           : "bg-[#A3D953] text-[#0F172B] hover:bg-[#B5E76C]"
//       }`}
//     >
//       {children}
//       <ArrowUpRight
//         size={17}
//         className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//       />
//     </a>
//   );
// }

// /* -------------------------------------------------------
//    Navigation
// ------------------------------------------------------- */

// function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const closeMenu = () => setMobileOpen(false);

//   return (
//     <header className="sticky top-0 z-50 border-b border-[#EAEAE3] bg-[#FAFAF7]/95 backdrop-blur-xl">
//       <nav
//         aria-label="Main navigation"
//         className="mx-auto flex h-[76px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[84px] lg:px-14 xl:px-20"
//       >
//         <a
//           href="#top"
//           aria-label="BrandBanao home"
//           onClick={closeMenu}
//           className="flex shrink-0 items-center"
//         >
//           <img
//             src={logo}
//             alt="BrandBanao"
//             className="h-11 w-auto object-contain sm:h-12"
//           />
//         </a>

//         <div className="hidden items-center gap-5 lg:flex xl:gap-7">
//           <a
//             href="#who-we-help"
//             className="font-['Manrope'] text-[13px] font-semibold text-[#46505B] transition-colors hover:text-[#528221] xl:text-sm"
//           >
//             Who we help
//           </a>

//           <div className="group relative">
//             <a
//               href="#services"
//               className="flex items-center gap-1.5 font-['Manrope'] text-[13px] font-semibold text-[#46505B] transition-colors hover:text-[#528221] xl:text-sm"
//             >
//               Services
//               <ChevronDown
//                 size={14}
//                 className="transition-transform duration-200 group-hover:rotate-180"
//               />
//             </a>

//             <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-72 -translate-x-1/2 translate-y-2 rounded-2xl border border-[#E9E9E1] bg-[#FAFAF7] p-2 opacity-0 shadow-[0_18px_45px_rgba(15,23,43,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
//               {[
//                 ["Brand Identity & Creative", "#brand-identity"],
//                 ["Websites & Digital Presence", "#websites-digital"],
//                 ["Creative & Digital Solutions", "#creative-solutions"],
//               ].map(([label, href]) => (
//                 <a
//                   key={href}
//                   href={href}
//                   className="block rounded-xl px-4 py-3 font-['DM_Sans'] text-sm text-[#46505B] transition-colors hover:bg-[#F1F0E9] hover:text-[#528221]"
//                 >
//                   {label}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {navigation.slice(1).map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               className="font-['Manrope'] text-[13px] font-semibold text-[#46505B] transition-colors hover:text-[#528221] xl:text-sm"
//             >
//               {item.label}
//             </a>
//           ))}
//         </div>

//         <div className="hidden lg:block">
//           <a
//             href="#contact"
//             className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0F172B] px-5 py-3 font-['Manrope'] text-[13px] font-bold text-white transition-all hover:bg-[#528221]"
//           >
//             Let's talk
//             <ArrowUpRight size={15} />
//           </a>
//         </div>

//         <button
//           type="button"
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           aria-expanded={mobileOpen}
//           onClick={() => setMobileOpen((value) => !value)}
//           className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E4E5DC] text-[#0F172B] transition-colors hover:bg-[#F1F0E9] lg:hidden"
//         >
//           {mobileOpen ? <X size={21} /> : <Menu size={21} />}
//         </button>
//       </nav>

//       {mobileOpen && (
//         <div className="border-t border-[#EAEAE3] bg-[#FAFAF7] px-5 pb-6 pt-3 shadow-lg sm:px-8 lg:hidden">
//           <div className="mx-auto flex max-w-[1600px] flex-col">
//             {[
//               ...navigation.slice(0, 1),
//               { label: "Services", href: "#services" },
//               ...navigation.slice(1),
//             ].map((item) => (
//               <a
//                 key={item.href}
//                 href={item.href}
//                 onClick={closeMenu}
//                 className="border-b border-[#ECECE5] py-4 font-['Manrope'] text-sm font-semibold text-[#0F172B]"
//               >
//                 {item.label}
//               </a>
//             ))}

//             <div className="mt-5">
//               <PrimaryLink href="#contact">Start a conversation</PrimaryLink>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// /* -------------------------------------------------------
//    Hero
// ------------------------------------------------------- */

// function HeroSection() {
//   return (
//     <section
//       id="top"
//       className="relative overflow-hidden bg-[#FAFAF7] scroll-mt-24"
//     >
//       <div className="mx-auto grid min-h-[680px] w-full max-w-[1600px] items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[730px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-6 lg:px-14 lg:py-20 xl:px-20">
//         {/* Copy */}
//         <div className="relative z-10 max-w-[700px]">
//           <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#E7E9DE] bg-white px-4 py-2.5">
//             <span className="h-2 w-2 rounded-full bg-[#528221]" />
//             <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.15em] text-[#56624F] sm:text-[11px]">
//               Branding · Digital presence · Creative solutions
//             </span>
//           </div>

//           <h1 className="font-['Manrope'] text-[3.1rem] font-extrabold leading-[1.02] tracking-[-0.065em] text-[#0F172B] sm:text-6xl lg:text-[4.35rem] xl:text-[5.1rem]">
//             Build a brand
//             <br />
//             people{" "}
//             <span className="relative inline-block text-[#528221]">
//               remember.
//               <svg
//                 aria-hidden="true"
//                 viewBox="0 0 330 17"
//                 className="absolute -bottom-2 left-0 w-full"
//                 fill="none"
//               >
//                 <path
//                   d="M3 12C88 3 217 1 326 8"
//                   stroke="#F07843"
//                   strokeWidth="4"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </span>
//           </h1>

//           <p className="mt-8 max-w-[540px] font-['DM_Sans'] text-base leading-8 text-[#66727A] sm:text-lg sm:leading-9">
//             Your idea deserves more than a logo or a website. Build a
//             distinctive identity, a meaningful digital presence, and a
//             consistent experience around what makes you different.
//           </p>

//           <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
//             <PrimaryLink href="#contact">Let's build something</PrimaryLink>

//             <a
//               href="#our-work"
//               className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-colors hover:text-[#528221]"
//             >
//               Explore our work
//               <ArrowRight
//                 size={16}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </a>
//           </div>

//           <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#E9E9E1] pt-6">
//             {[
//               "Thoughtful by design",
//               "Built around your goals",
//               "Made for real use",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-2 font-['DM_Sans'] text-xs font-medium text-[#69736F] sm:text-[13px]"
//               >
//                 <Check size={14} className="text-[#528221]" />
//                 {item}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Visual: brand-building system */}
//         <div className="relative mx-auto w-full max-w-[650px] lg:max-w-none">
//           <div className="relative aspect-[1/1.02] overflow-hidden rounded-[2rem] bg-[#F1F0E9] sm:rounded-[2.5rem]">
//             <div
//               aria-hidden="true"
//               className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DCE9C9]"
//             />

//             <div
//               aria-hidden="true"
//               className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#528221]/20"
//             />

//             <div
//               aria-hidden="true"
//               className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#528221]/30"
//             />

//             {/* Existing team illustration */}
//             <img
//               src={teamImage}
//               alt="People collaborating on a creative brand-building project"
//               className="absolute bottom-[4%] left-1/2 z-10 h-[77%] w-[94%] -translate-x-1/2 object-contain object-bottom"
//             />

//             {/* Technical annotations */}
//             <div className="absolute left-5 top-5 z-20 rounded-xl border border-white/70 bg-white/80 px-3.5 py-3 shadow-sm backdrop-blur-md sm:left-7 sm:top-7">
//               <span className="block font-['Manrope'] text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#89938B]">
//                 The process
//               </span>
//               <span className="mt-1.5 block font-['Manrope'] text-xs font-bold text-[#0F172B]">
//                 Idea → Identity → Experience
//               </span>
//             </div>

//             <div className="absolute right-4 top-[27%] z-20 hidden w-[140px] rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_12px_30px_rgba(15,23,43,0.08)] backdrop-blur-md sm:block">
//               <div className="mb-3 flex items-center justify-between">
//                 <span className="font-['Manrope'] text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#89938B]">
//                   Visual system
//                 </span>
//                 <Palette size={13} className="text-[#528221]" />
//               </div>
//               <div className="flex gap-1.5">
//                 <span className="h-5 flex-1 rounded bg-[#0F172B]" />
//                 <span className="h-5 flex-1 rounded bg-[#528221]" />
//                 <span className="h-5 flex-1 rounded bg-[#A3D953]" />
//                 <span className="h-5 flex-1 rounded bg-[#F07843]" />
//               </div>
//               <div className="mt-3 h-1.5 w-full rounded-full bg-[#E9E9E1]" />
//               <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-[#E9E9E1]" />
//             </div>

//             <div className="absolute bottom-5 left-5 z-20 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-7 sm:left-7">
//               <div className="flex items-center gap-2">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF0DF] text-[#528221]">
//                   <Workflow size={16} />
//                 </div>
//                 <div>
//                   <span className="block font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.12em] text-[#89938B]">
//                     BrandBanao
//                   </span>
//                   <span className="block font-['Manrope'] text-xs font-extrabold text-[#0F172B]">
//                     From idea to impact
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute bottom-7 right-6 z-20 hidden h-11 w-11 items-center justify-center rounded-full bg-[#F07843] text-white shadow-lg sm:flex">
//               <Sparkles size={19} />
//             </div>

//             <div className="absolute bottom-5 right-5 z-20 font-['Caveat'] text-lg font-semibold text-[#528221] sm:bottom-8 sm:right-8 sm:text-xl">
//               Make it meaningful.
//             </div>
//           </div>

//           <div className="mt-4 flex items-center justify-between px-1">
//             <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.17em] text-[#89938B]">
//               Strategy / Design / Technology
//             </span>
//             <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.17em] text-[#89938B]">
//               BB — 001
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-[#E9E9E1] bg-white">
//         <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-5 px-5 py-6 sm:grid-cols-4 sm:px-8 lg:px-14 xl:px-20">
//           {[
//             ["01", "Brand thinking"],
//             ["02", "Visual identity"],
//             ["03", "Digital experiences"],
//             ["04", "Creative execution"],
//           ].map(([number, label]) => (
//             <div key={number} className="flex items-center gap-3">
//               <span className="font-['Manrope'] text-[10px] font-extrabold text-[#528221]">
//                 {number}
//               </span>
//               <span className="font-['Manrope'] text-xs font-semibold text-[#46505B] sm:text-sm">
//                 {label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------------------------------------------
//    Who we help
// ------------------------------------------------------- */

// function WhoWeHelp() {
//   return (
//     <section
//       id="who-we-help"
//       className="scroll-mt-24 bg-[#F1F0E9] py-20 sm:py-24 lg:py-32"
//     >
//       <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
//         <div className="mb-10 sm:mb-14">
//           <Eyebrow>Who we help</Eyebrow>
//         </div>

//         <div className="grid items-stretch gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 xl:gap-14">
//           {/* Brand statement */}
//           <div className="relative flex min-h-[500px] flex-col justify-between overflow-hidden rounded-[1.8rem] bg-[#0F172B] p-7 text-white sm:p-10 lg:sticky lg:top-28 lg:min-h-[650px] lg:p-12">
//             <div
//               aria-hidden="true"
//               className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.08]"
//             />
//             <div
//               aria-hidden="true"
//               className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/[0.08]"
//             />
//             <div
//               aria-hidden="true"
//               className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#528221]/20 blur-3xl"
//             />

//             <div className="relative z-10">
//               <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2">
//                 <Sparkles size={13} className="text-[#A3D953]" />
//                 <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.15em] text-white/75">
//                   People first. Ideas always.
//                 </span>
//               </div>

//               <h2 className="max-w-[540px] font-['Manrope'] text-[2.7rem] font-extrabold leading-[1.1] tracking-[-0.055em] text-[#FAFAF7] sm:text-5xl xl:text-[3.6rem]">
//                 Good ideas come in{" "}
//                 <span className="text-[#A3D953]">every size.</span>
//               </h2>

//               <p className="mt-7 max-w-[420px] font-['DM_Sans'] text-base leading-8 text-white/65">
//                 From a neighbourhood business to a new idea taking shape, we
//                 work with people who want to express what they do, connect with
//                 others, and build something meaningful.
//               </p>
//             </div>

//             <div className="relative z-10 mt-14 border-t border-white/15 pt-7">
//               <p className="max-w-[400px] font-['Manrope'] text-xl font-semibold leading-relaxed tracking-[-0.025em] text-white sm:text-2xl">
//                 You don't need to be established to deserve a brand that feels{" "}
//                 <span className="text-[#A3D953]">thoughtfully yours.</span>
//               </p>

//               <a
//                 href="#contact"
//                 className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#A3D953] px-6 py-3 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-all hover:-translate-y-0.5 hover:bg-[#B5E76C]"
//               >
//                 Tell us what you're building
//                 <ArrowRight
//                   size={17}
//                   className="transition-transform group-hover:translate-x-1"
//                 />
//               </a>
//             </div>

//             <div className="absolute bottom-10 right-9 hidden h-14 w-14 rotate-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] lg:flex">
//               <Sparkles size={25} className="text-[#A3D953]/70" />
//             </div>
//           </div>

//           {/* Audience cards */}
//           <div className="flex flex-col gap-3 sm:gap-4">
//             {audiences.map((audience) => {
//               const Icon = audience.icon;

//               return (
//                 <article
//                   key={audience.number}
//                   className="group rounded-[1.35rem] border border-[#E3E2D9] bg-[#FAFAF7] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B9C99E] hover:shadow-[0_14px_35px_rgba(15,23,43,0.055)] sm:p-6 lg:p-7"
//                 >
//                   <div className="flex items-start gap-4 sm:gap-5">
//                     <div
//                       className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] sm:h-14 sm:w-14 ${audience.iconClass}`}
//                     >
//                       <Icon size={23} strokeWidth={1.7} />
//                     </div>

//                     <div className="min-w-0 flex-1">
//                       <div className="mb-2 flex items-center gap-3">
//                         <span className="font-['Manrope'] text-[10px] font-bold tracking-[0.16em] text-[#89938B]">
//                           {audience.number}
//                         </span>
//                         <span className="h-px w-5 bg-[#D9DAD1]" />
//                         <span className="font-['Manrope'] text-[9px] font-semibold uppercase tracking-[0.12em] text-[#89938B]">
//                           {[
//                             "For growing businesses",
//                             "For independent voices",
//                             "For individual expression",
//                             "For ideas taking shape",
//                             "For shared purposes",
//                           ][Number(audience.number) - 1]}
//                         </span>
//                       </div>

//                       <h3 className="font-['Manrope'] text-lg font-bold leading-snug tracking-[-0.035em] text-[#0F172B] transition-colors group-hover:text-[#528221] sm:text-xl">
//                         {audience.title}
//                       </h3>

//                       <p className="mt-2 max-w-[580px] font-['DM_Sans'] text-sm leading-[1.75] text-[#66727A] sm:text-[15px]">
//                         {audience.description}
//                       </p>

//                       <div className="mt-4 flex flex-wrap gap-2">
//                         {audience.examples.map((example) => (
//                           <span
//                             key={example}
//                             className="rounded-full border border-[#E8E8DF] bg-white px-3 py-1.5 font-['DM_Sans'] text-[11px] font-medium text-[#66727A] sm:text-xs"
//                           >
//                             {example}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-10 flex flex-col gap-3 border-t border-[#DCDCD2] pt-7 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
//           <p className="font-['DM_Sans'] text-sm leading-relaxed text-[#66727A] sm:text-[15px]">
//             Have something different in mind? We'd still love to hear about it.
//           </p>
//           <a
//             href="#contact"
//             className="group inline-flex w-fit items-center gap-2 font-['Manrope'] text-sm font-bold text-[#528221] transition-colors hover:text-[#0F172B]"
//           >
//             Tell us about it
//             <ArrowRight
//               size={16}
//               className="transition-transform group-hover:translate-x-1"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------------------------------------------
//    Services — custom CSS-built visual previews
// ------------------------------------------------------- */

// function IdentityPreview() {
//   return (
//     <div className="relative flex h-[235px] flex-col overflow-hidden rounded-2xl bg-[#F1F0E9] p-4 sm:h-[250px] sm:p-5">
//       <div className="flex items-center justify-between">
//         <span className="font-['Manrope'] text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#89938B]">
//           Identity system / 01
//         </span>
//         <Fingerprint size={17} className="text-[#528221]" />
//       </div>

//       <div className="my-auto grid grid-cols-[1fr_0.85fr] items-center gap-3">
//         <div>
//           <div className="font-['Manrope'] text-[2.4rem] font-extrabold leading-none tracking-[-0.08em] text-[#0F172B] sm:text-5xl">
//             Form
//           </div>
//           <div className="mt-2 font-['DM_Sans'] text-[10px] font-medium tracking-wide text-[#66727A]">
//             Visual language & direction
//           </div>
//           <div className="mt-5 h-px w-4/5 bg-[#C9C9BD]" />
//           <div className="mt-2 h-px w-3/5 bg-[#D7D7CC]" />
//         </div>

//         <div className="relative flex aspect-square items-center justify-center rounded-full bg-[#DCE9C9]">
//           <div className="absolute h-[70%] w-[70%] rounded-full border border-[#528221]/30" />
//           <div className="absolute h-[46%] w-[46%] rounded-full bg-[#528221]" />
//           <div className="absolute right-[7%] top-[13%] h-5 w-5 rounded-full bg-[#F07843]" />
//           <div className="absolute bottom-[13%] left-[10%] h-3 w-3 rounded-full bg-[#0F172B]" />
//         </div>
//       </div>

//       <div className="flex items-center gap-2 border-t border-[#D9D9CF] pt-3">
//         {["#0F172B", "#528221", "#A3D953", "#F07843", "#F1F0E9"].map(
//           (color) => (
//             <span
//               key={color}
//               className="h-5 flex-1 rounded-md border border-black/5"
//               style={{ backgroundColor: color }}
//             />
//           ),
//         )}
//       </div>
//     </div>
//   );
// }

// function WebsitePreview() {
//   return (
//     <div className="h-[235px] overflow-hidden rounded-2xl bg-[#E9ECF4] p-4 sm:h-[250px] sm:p-5">
//       <div className="overflow-hidden rounded-xl border border-[#D8DCE7] bg-white shadow-[0_10px_25px_rgba(15,23,43,0.07)]">
//         <div className="flex h-8 items-center gap-1.5 border-b border-[#ECEEF2] px-3">
//           <span className="h-1.5 w-1.5 rounded-full bg-[#F07843]" />
//           <span className="h-1.5 w-1.5 rounded-full bg-[#E6C56A]" />
//           <span className="h-1.5 w-1.5 rounded-full bg-[#87AE6D]" />
//           <div className="ml-3 h-3 w-2/5 rounded-full bg-[#F0F1F4]" />
//           <span className="ml-auto h-3 w-8 rounded bg-[#0F172B]" />
//         </div>

//         <div className="grid min-h-[174px] grid-cols-[1.05fr_0.95fr] gap-2 p-4 sm:p-5">
//           <div className="flex flex-col justify-center">
//             <span className="font-['Manrope'] text-[8px] font-bold uppercase tracking-[0.12em] text-[#528221]">
//               Digital experience
//             </span>
//             <div className="mt-2 font-['Manrope'] text-xl font-extrabold leading-[1.08] tracking-[-0.06em] text-[#0F172B] sm:text-2xl">
//               A clearer way to connect.
//             </div>
//             <div className="mt-3 h-1.5 w-full rounded-full bg-[#E9EAEF]" />
//             <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-[#E9EAEF]" />
//             <div className="mt-3 h-6 w-16 rounded-full bg-[#528221]" />
//           </div>

//           <div className="relative flex items-center justify-center overflow-hidden rounded-lg bg-[#DCE9C9]">
//             <div className="absolute -right-4 -top-5 h-24 w-24 rounded-full bg-[#A3D953]" />
//             <div className="absolute -bottom-6 -left-4 h-24 w-24 rounded-full bg-[#528221]/80" />
//             <Monitor size={37} className="relative z-10 text-[#0F172B]" />
//           </div>
//         </div>
//       </div>

//       <div className="mt-3 flex items-center justify-between font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.13em] text-[#64708A]">
//         <span>Structure</span>
//         <span>Interaction</span>
//         <span>Responsive</span>
//       </div>
//     </div>
//   );
// }

// function CreativePreview() {
//   return (
//     <div className="h-[235px] overflow-hidden rounded-2xl bg-[#FBE9E1] p-4 sm:h-[250px] sm:p-5">
//       <div className="mb-4 flex items-center justify-between">
//         <span className="font-['Manrope'] text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#A65B3A]">
//           Creative toolkit / 03
//         </span>
//         <Layers size={17} className="text-[#D66C3D]" />
//       </div>

//       <div className="grid h-[160px] grid-cols-4 grid-rows-2 gap-2">
//         <div className="col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-xl bg-[#0F172B] p-3.5 text-white">
//           <span className="font-['Manrope'] text-[8px] font-bold uppercase tracking-[0.15em] text-[#A3D953]">
//             Make a mark
//           </span>
//           <span className="font-['Manrope'] text-2xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-3xl">
//             Ideas
//             <br />
//             in motion.
//           </span>
//           <span className="h-1 w-10 rounded-full bg-[#F07843]" />
//         </div>

//         <div className="col-span-2 flex items-center justify-center rounded-xl bg-[#A3D953]">
//           <Palette size={27} className="text-[#0F172B]" />
//         </div>

//         <div className="flex items-center justify-center rounded-xl bg-white">
//           <PenTool size={22} className="text-[#D66C3D]" />
//         </div>

//         <div className="flex items-center justify-center rounded-xl bg-[#F3C6AE]">
//           <Sparkles size={22} className="text-[#8B4B31]" />
//         </div>
//       </div>
//     </div>
//   );
// }

// function ServicesSection() {
//   return (
//     <section
//       id="services"
//       className="scroll-mt-24 bg-[#FAFAF7] py-20 sm:py-24 lg:py-32"
//     >
//       <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
//         <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
//           <SectionHeading
//             eyebrow="What we do"
//             title={
//               <>
//                 The pieces that make
//                 <br className="hidden sm:block" /> a brand feel{" "}
//                 <span className="text-[#528221]">complete.</span>
//               </>
//             }
//             description="A thoughtful combination of strategy, design, and technology to help your idea show up clearly and consistently."
//           />

//           <a
//             href="#contact"
//             className="group inline-flex w-fit shrink-0 items-center gap-2 border-b border-[#AAB89C] pb-2 font-['Manrope'] text-sm font-bold text-[#528221] transition-colors hover:border-[#0F172B] hover:text-[#0F172B]"
//           >
//             Discuss your project
//             <ArrowUpRight
//               size={16}
//               className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//             />
//           </a>
//         </div>

//         <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
//           {/* Service 1 */}
//           <article
//             id="brand-identity"
//             className="group scroll-mt-28 flex flex-col rounded-[1.7rem] border border-[#E8E8DF] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D5B4] hover:shadow-[0_20px_45px_rgba(15,23,43,0.06)] sm:p-6 lg:p-7"
//           >
//             <IdentityPreview />

//             <div className="mt-7 flex items-center gap-2">
//               <Fingerprint size={17} className="text-[#528221]" />
//               <span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#528221]">
//                 01 / Identity
//               </span>
//             </div>

//             <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold tracking-[-0.045em] text-[#0F172B]">
//               Brand Identity & Creative
//             </h3>

//             <p className="mt-3 min-h-[76px] font-['DM_Sans'] text-sm leading-7 text-[#66727A]">
//               Give your brand a recognisable visual language and a consistent
//               foundation across touchpoints.
//             </p>

//             <div className="my-6 h-px bg-[#ECECE5]" />

//             <p className="mb-4 font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#89938B]">
//               What we can create
//             </p>

//             <ul className="space-y-3">
//               {[
//                 "Logo and visual identity",
//                 "Colour palette and typography",
//                 "Mini brand guidelines",
//                 "Business cards and stationery",
//                 "Brochures, flyers and catalogues",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-start gap-2.5 font-['DM_Sans'] text-sm text-[#46505B]"
//                 >
//                   <Check size={15} className="mt-0.5 shrink-0 text-[#528221]" />
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             <a
//               href="#contact"
//               className="mt-8 inline-flex items-center gap-2 border-t border-[#ECECE5] pt-5 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-colors hover:text-[#528221]"
//             >
//               Discuss this service
//               <ArrowRight size={16} />
//             </a>
//           </article>

//           {/* Service 2 */}
//           <article
//             id="websites-digital"
//             className="group scroll-mt-28 flex flex-col rounded-[1.7rem] border border-[#E8E8DF] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D5B4] hover:shadow-[0_20px_45px_rgba(15,23,43,0.06)] sm:p-6 lg:p-7"
//           >
//             <WebsitePreview />

//             <div className="mt-7 flex items-center gap-2">
//               <Globe size={17} className="text-[#528221]" />
//               <span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#528221]">
//                 02 / Digital
//               </span>
//             </div>

//             <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold tracking-[-0.045em] text-[#0F172B]">
//               Websites & Digital Presence
//             </h3>

//             <p className="mt-3 min-h-[76px] font-['DM_Sans'] text-sm leading-7 text-[#66727A]">
//               Create a useful, accessible digital home that communicates your
//               value and makes it easier for people to connect with you.
//             </p>

//             <div className="my-6 h-px bg-[#ECECE5]" />

//             <p className="mb-4 font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#89938B]">
//               What we can create
//             </p>

//             <ul className="space-y-3">
//               {[
//                 "Business and service websites",
//                 "Landing pages",
//                 "Personal and creator portfolios",
//                 "Digital catalogues and galleries",
//                 "Contact and enquiry experiences",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-start gap-2.5 font-['DM_Sans'] text-sm text-[#46505B]"
//                 >
//                   <Check size={15} className="mt-0.5 shrink-0 text-[#528221]" />
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             <a
//               href="#contact"
//               className="mt-8 inline-flex items-center gap-2 border-t border-[#ECECE5] pt-5 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-colors hover:text-[#528221]"
//             >
//               Discuss this service
//               <ArrowRight size={16} />
//             </a>
//           </article>

//           {/* Service 3 */}
//           <article
//             id="creative-solutions"
//             className="group scroll-mt-28 flex flex-col rounded-[1.7rem] border border-[#E8E8DF] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D5B4] hover:shadow-[0_20px_45px_rgba(15,23,43,0.06)] sm:p-6 lg:p-7"
//           >
//             <CreativePreview />

//             <div className="mt-7 flex items-center gap-2">
//               <Layers size={17} className="text-[#D66C3D]" />
//               <span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#D66C3D]">
//                 03 / Creative
//               </span>
//             </div>

//             <h3 className="mt-3 font-['Manrope'] text-2xl font-extrabold tracking-[-0.045em] text-[#0F172B]">
//               Creative & Digital Solutions
//             </h3>

//             <p className="mt-3 min-h-[76px] font-['DM_Sans'] text-sm leading-7 text-[#66727A]">
//               Bring your communication and ideas to life with purposeful
//               creative assets and practical digital experiences.
//             </p>

//             <div className="my-6 h-px bg-[#ECECE5]" />

//             <p className="mb-4 font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#89938B]">
//               What we can create
//             </p>

//             <ul className="space-y-3">
//               {[
//                 "Social media design kits",
//                 "Creator media kits and profile assets",
//                 "Presentations and pitch decks",
//                 "Posters, invitations and event creatives",
//                 "Practical digital tools and integrations",
//               ].map((item) => (
//                 <li
//                   key={item}
//                   className="flex items-start gap-2.5 font-['DM_Sans'] text-sm text-[#46505B]"
//                 >
//                   <Check size={15} className="mt-0.5 shrink-0 text-[#528221]" />
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             <a
//               href="#contact"
//               className="mt-8 inline-flex items-center gap-2 border-t border-[#ECECE5] pt-5 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-colors hover:text-[#528221]"
//             >
//               Discuss this service
//               <ArrowRight size={16} />
//             </a>
//           </article>
//         </div>

//         <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#E8E8DF] bg-[#F1F0E9] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
//           <div>
//             <p className="font-['Manrope'] text-base font-bold text-[#0F172B]">
//               Not sure which service fits your idea?
//             </p>
//             <p className="mt-1 font-['DM_Sans'] text-sm leading-6 text-[#66727A]">
//               Start with the challenge. We can work out the right scope together.
//             </p>
//           </div>
//           <PrimaryLink href="#contact" dark>
//             Tell us about it
//           </PrimaryLink>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------------------------------------------
//    Our work — concept directions, not fake client projects
// ------------------------------------------------------- */

// function WorkSection() {
//   return (
//     <section
//       id="our-work"
//       className="scroll-mt-24 bg-[#0F172B] py-20 text-white sm:py-24 lg:py-32"
//     >
//       <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
//         <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
//           <SectionHeading
//             eyebrow="Selected directions"
//             title={
//               <>
//                 Ideas made
//                 <br />
//                 <span className="text-[#A3D953]">visible.</span>
//               </>
//             }
//             description="A glimpse into the kinds of brand and digital experiences we can shape. Each visual below is an illustrative concept direction, not a commissioned client project."
//             light
//           />

//           <div className="flex items-center gap-3 text-white/50">
//             <span className="h-px w-9 bg-white/25" />
//             <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.16em]">
//               Concept studies / 001—003
//             </span>
//           </div>
//         </div>

//         <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-3">
//           {/* Concept 1 */}
//           <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#17223A]">
//             <div className="relative flex h-[290px] items-center justify-center overflow-hidden bg-[#E5E8DC] p-6">
//               <div className="absolute -left-10 -top-14 h-44 w-44 rounded-full bg-[#C5D6A6]" />
//               <div className="absolute -bottom-14 -right-6 h-52 w-52 rounded-full bg-[#D4B58E]" />

//               <div className="relative z-10 w-[82%] max-w-[310px] rotate-[-3deg] rounded-xl bg-[#FAFAF7] p-5 shadow-[0_18px_35px_rgba(15,23,43,0.16)]">
//                 <div className="flex items-center justify-between">
//                   <span className="font-['Manrope'] text-[8px] font-extrabold uppercase tracking-[0.16em] text-[#528221]">
//                     Local brand concept
//                   </span>
//                   <span className="h-2 w-2 rounded-full bg-[#F07843]" />
//                 </div>
//                 <div className="mt-8 font-['Manrope'] text-4xl font-extrabold leading-none tracking-[-0.07em] text-[#0F172B]">
//                   Good
//                   <br />
//                   things grow.
//                 </div>
//                 <div className="mt-4 h-px w-full bg-[#DADDD3]" />
//                 <div className="mt-3 flex items-center justify-between">
//                   <span className="font-['DM_Sans'] text-[9px] text-[#66727A]">
//                     Identity / Packaging
//                   </span>
//                   <span className="font-['Manrope'] text-[9px] font-bold text-[#528221]">
//                     01
//                   </span>
//                 </div>
//                 <div className="mt-5 flex gap-1.5">
//                   {["#0F172B", "#528221", "#A3D953", "#F07843"].map(
//                     (color) => (
//                       <span
//                         key={color}
//                         className="h-6 flex-1 rounded"
//                         style={{ backgroundColor: color }}
//                       />
//                     ),
//                   )}
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 sm:p-7">
//               <div className="flex items-center justify-between">
//                 <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.15em] text-[#A3D953]">
//                   Concept study / 01
//                 </span>
//                 <ArrowUpRight size={17} className="text-white/50" />
//               </div>
//               <h3 className="mt-3 font-['Manrope'] text-xl font-bold tracking-[-0.03em] text-white">
//                 Neighbourhood brand
//               </h3>
//               <p className="mt-2 font-['DM_Sans'] text-sm leading-7 text-white/55">
//                 A warm, recognisable identity direction for a local consumer
//                 business.
//               </p>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {["Brand identity", "Packaging", "Art direction"].map((tag) => (
//                   <span
//                     key={tag}
//                     className="rounded-full border border-white/10 px-3 py-1.5 font-['DM_Sans'] text-[10px] text-white/60"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </article>

//           {/* Concept 2 */}
//           <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#17223A]">
//             <div className="relative flex h-[290px] items-center justify-center overflow-hidden bg-[#E8EAF0] p-6">
//               <div className="absolute left-5 top-5 h-14 w-14 rounded-full border border-[#465B83]/20" />
//               <div className="absolute bottom-5 right-5 h-24 w-24 rounded-full bg-[#D1D9E9]" />

//               <div className="relative z-10 w-[82%] max-w-[310px] overflow-hidden rounded-xl bg-white shadow-[0_18px_35px_rgba(15,23,43,0.16)]">
//                 <div className="flex items-center justify-between border-b border-[#E8EAF0] px-4 py-3">
//                   <span className="font-['Manrope'] text-[9px] font-extrabold tracking-wide text-[#0F172B]">
//                     CREATOR / PORTFOLIO
//                   </span>
//                   <div className="flex gap-1">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#465B83]" />
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#AAB5CA]" />
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#D9DFEA]" />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-[1fr_0.7fr] gap-3 p-4">
//                   <div className="py-2">
//                     <span className="font-['Manrope'] text-[8px] font-bold uppercase tracking-[0.15em] text-[#465B83]">
//                       Independent voice
//                     </span>
//                     <div className="mt-3 font-['Manrope'] text-2xl font-extrabold leading-[1.02] tracking-[-0.06em] text-[#0F172B]">
//                       Work with
//                       <br />
//                       a point of
//                       <br />
//                       view.
//                     </div>
//                     <div className="mt-4 h-5 w-16 rounded-full bg-[#465B83]" />
//                   </div>
//                   <div className="relative flex min-h-[145px] items-center justify-center overflow-hidden rounded-lg bg-[#DCE1EC]">
//                     <div className="absolute -right-4 -top-5 h-20 w-20 rounded-full bg-[#A3D953]" />
//                     <div className="absolute -bottom-4 -left-3 h-24 w-24 rounded-full bg-[#465B83]" />
//                     <UserRound
//                       size={35}
//                       className="relative z-10 text-white"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 sm:p-7">
//               <div className="flex items-center justify-between">
//                 <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.15em] text-[#A3D953]">
//                   Concept study / 02
//                 </span>
//                 <ArrowUpRight size={17} className="text-white/50" />
//               </div>
//               <h3 className="mt-3 font-['Manrope'] text-xl font-bold tracking-[-0.03em] text-white">
//                 Creator portfolio
//               </h3>
//               <p className="mt-2 font-['DM_Sans'] text-sm leading-7 text-white/55">
//                 A digital presence concept for a creative professional or
//                 independent expert.
//               </p>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {["Web design", "Personal brand", "Content structure"].map(
//                   (tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full border border-white/10 px-3 py-1.5 font-['DM_Sans'] text-[10px] text-white/60"
//                     >
//                       {tag}
//                     </span>
//                   ),
//                 )}
//               </div>
//             </div>
//           </article>

//           {/* Concept 3 */}
//           <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#17223A]">
//             <div className="relative flex h-[290px] items-center justify-center overflow-hidden bg-[#F1E7DF] p-6">
//               <div className="absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-[#F2D0BB]" />
//               <div className="absolute -right-8 top-0 h-40 w-40 rounded-full bg-[#F7C7A9]" />

//               <div className="relative z-10 w-[82%] max-w-[310px] rounded-xl bg-[#FAFAF7] p-4 shadow-[0_18px_35px_rgba(15,23,43,0.16)]">
//                 <div className="flex items-center justify-between">
//                   <span className="font-['Manrope'] text-[8px] font-extrabold uppercase tracking-[0.14em] text-[#D66C3D]">
//                     Learning / community
//                   </span>
//                   <span className="h-2 w-2 rounded-full bg-[#528221]" />
//                 </div>
//                 <div className="mt-5 rounded-lg bg-[#0F172B] p-4 text-white">
//                   <div className="font-['Manrope'] text-2xl font-extrabold leading-[1.05] tracking-[-0.06em]">
//                     Curiosity
//                     <br />
//                     starts here.
//                   </div>
//                   <div className="mt-3 h-1 w-10 rounded-full bg-[#F07843]" />
//                 </div>
//                 <div className="mt-3 grid grid-cols-3 gap-2">
//                   {[
//                     ["Explore", "#DCE9C9"],
//                     ["Discover", "#E9ECF4"],
//                     ["Create", "#FBE9E1"],
//                   ].map(([label, color]) => (
//                     <div
//                       key={label}
//                       className="rounded-md p-2"
//                       style={{ backgroundColor: color }}
//                     >
//                       <div className="mb-2 h-5 w-5 rounded-full bg-white/90" />
//                       <span className="font-['Manrope'] text-[8px] font-bold text-[#0F172B]">
//                         {label}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 sm:p-7">
//               <div className="flex items-center justify-between">
//                 <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.15em] text-[#A3D953]">
//                   Concept study / 03
//                 </span>
//                 <ArrowUpRight size={17} className="text-white/50" />
//               </div>
//               <h3 className="mt-3 font-['Manrope'] text-xl font-bold tracking-[-0.03em] text-white">
//                 Learning initiative
//               </h3>
//               <p className="mt-2 font-['DM_Sans'] text-sm leading-7 text-white/55">
//                 A cohesive identity and digital communication direction for an
//                 educational initiative.
//               </p>
//               <div className="mt-5 flex flex-wrap gap-2">
//                 {["Visual identity", "Digital presence", "Communication"].map(
//                   (tag) => (
//                     <span
//                       key={tag}
//                       className="rounded-full border border-white/10 px-3 py-1.5 font-['DM_Sans'] text-[10px] text-white/60"
//                     >
//                       {tag}
//                     </span>
//                   ),
//                 )}
//               </div>
//             </div>
//           </article>
//         </div>

//         <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
//           <p className="max-w-2xl font-['DM_Sans'] text-sm leading-7 text-white/50">
//             These are illustrative directions created to communicate our
//             approach. They are not presented as completed client engagements.
//           </p>
//           <a
//             href="#contact"
//             className="group inline-flex w-fit items-center gap-2 font-['Manrope'] text-sm font-bold text-[#A3D953] hover:text-white"
//           >
//             Have a project in mind?
//             <ArrowRight
//               size={16}
//               className="transition-transform group-hover:translate-x-1"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------------------------------------------
//    About
// ------------------------------------------------------- */

// function AboutSection() {
//   return (
//     <section
//       id="about-us"
//       className="scroll-mt-24 bg-[#FAFAF7] py-20 sm:py-24 lg:py-32"
//     >
//       <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
//         <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
//           <div>
//             <SectionHeading
//               eyebrow="About BrandBanao"
//               title={
//                 <>
//                   Everyone has a brand.
//                   <br />
//                   <span className="text-[#528221]">Let's build yours.</span>
//                 </>
//               }
//               description="BrandBanao is a brand-building and digital studio built around a simple belief: good work deserves a clear identity and a thoughtful way to reach people."
//             />

//             <p className="mt-6 max-w-[640px] font-['DM_Sans'] text-[15px] leading-8 text-[#66727A]">
//               We bring together creative thinking, design craft, and practical
//               technology to help businesses, creators, professionals, and
//               communities shape how they present themselves. Whether you are
//               starting from scratch or improving what already exists, the aim
//               is to create work that feels considered, useful, and distinctly
//               yours.
//             </p>

//             <div className="mt-9 flex flex-wrap gap-3">
//               <PrimaryLink href="#services" dark>
//                 Explore what we do
//               </PrimaryLink>
//               <a
//                 href="#contact"
//                 className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#DCDDD4] px-6 py-3 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-colors hover:border-[#528221] hover:text-[#528221]"
//               >
//                 Talk about your idea
//                 <ArrowUpRight size={16} />
//               </a>
//             </div>
//           </div>

//           {/* Brand philosophy visual */}
//           <div className="relative">
//             <div className="relative overflow-hidden rounded-[2rem] bg-[#F1F0E9] p-6 sm:p-9">
//               <div className="flex items-center justify-between">
//                 <span className="font-['Manrope'] text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#89938B]">
//                   The BrandBanao approach
//                 </span>
//                 <span className="font-['Manrope'] text-[9px] font-bold text-[#528221]">
//                   SYSTEM / 01
//                 </span>
//               </div>

//               <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#0F172B] p-6 text-white sm:p-8">
//                 <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
//                 <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-white/10" />

//                 <span className="relative z-10 font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.17em] text-[#A3D953]">
//                   One connected experience
//                 </span>
//                 <div className="relative z-10 mt-3 font-['Manrope'] text-3xl font-extrabold leading-tight tracking-[-0.05em] sm:text-4xl">
//                   Think clearly.
//                   <br />
//                   Design meaningfully.
//                   <br />
//                   Build thoughtfully.
//                 </div>
//                 <div className="relative z-10 mt-8 flex items-center gap-2">
//                   <span className="h-1.5 w-12 rounded-full bg-[#A3D953]" />
//                   <span className="h-1.5 w-6 rounded-full bg-[#F07843]" />
//                   <span className="h-1.5 w-3 rounded-full bg-white/40" />
//                 </div>
//               </div>

//               <div className="relative mt-5 grid grid-cols-3 gap-3">
//                 {[
//                   { label: "Strategy", icon: Compass, color: "text-[#528221]" },
//                   { label: "Design", icon: PenTool, color: "text-[#D66C3D]" },
//                   { label: "Technology", icon: Code2, color: "text-[#465B83]" },
//                 ].map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <div
//                       key={item.label}
//                       className="rounded-xl border border-[#E2E2D8] bg-[#FAFAF7] p-3 text-center sm:p-4"
//                     >
//                       <Icon
//                         size={21}
//                         className={`mx-auto ${item.color}`}
//                       />
//                       <span className="mt-2 block font-['Manrope'] text-[10px] font-bold text-[#0F172B] sm:text-xs">
//                         {item.label}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>

//               <div className="mt-5 flex items-center justify-between border-t border-[#DCDCD2] pt-4">
//                 <span className="font-['DM_Sans'] text-[11px] text-[#66727A]">
//                   Built around your purpose.
//                 </span>
//                 <Sparkles size={16} className="text-[#528221]" />
//               </div>
//             </div>

//             <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-[#E8E8DF] bg-white px-4 py-3 shadow-lg sm:block lg:-right-5">
//               <span className="font-['Caveat'] text-xl font-semibold text-[#528221]">
//                 Make it yours.
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------------------------------------------
//    Why us + project process
// ------------------------------------------------------- */

// function WhyUsSection() {
//   const principles = [
//     {
//       number: "01",
//       icon: Target,
//       title: "Clarity before decoration",
//       description:
//         "We begin with the purpose, audience, and problem—not just colours and visual trends.",
//     },
//     {
//       number: "02",
//       icon: Fingerprint,
//       title: "Distinctive, not generic",
//       description:
//         "The goal is a coherent expression of what makes your idea or business different.",
//     },
//     {
//       number: "03",
//       icon: Workflow,
//       title: "Design that works",
//       description:
//         "Visual quality matters, but so do usability, structure, accessibility, and practical details.",
//     },
//     {
//       number: "04",
//       icon: Network,
//       title: "Connected thinking",
//       description:
//         "We consider how your identity, communication, and digital presence work together.",
//     },
//   ];

//   const steps = [
//     ["01", "Discover", "Understand your goals and audience."],
//     ["02", "Define", "Agree on direction and scope."],
//     ["03", "Create", "Design and build the solution."],
//     ["04", "Refine", "Review, improve, and prepare to launch."],
//   ];

//   return (
//     <section
//       id="why-us"
//       className="scroll-mt-24 bg-[#F1F0E9] py-20 sm:py-24 lg:py-32"
//     >
//       <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
//         <SectionHeading
//           eyebrow="Why BrandBanao"
//           title={
//             <>
//               Good work is more than
//               <br className="hidden sm:block" /> good-looking{" "}
//               <span className="text-[#528221]">work.</span>
//             </>
//           }
//           description="A thoughtful process connects what you want to say, how people experience it, and what the final solution needs to do."
//         />

//         <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
//           {principles.map((principle) => {
//             const Icon = principle.icon;

//             return (
//               <article
//                 key={principle.number}
//                 className="rounded-[1.4rem] border border-[#E1E1D7] bg-[#FAFAF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(15,23,43,0.06)] sm:p-7"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0DF] text-[#528221]">
//                     <Icon size={21} />
//                   </div>
//                   <span className="font-['Manrope'] text-[10px] font-extrabold tracking-[0.16em] text-[#A2AAA0]">
//                     {principle.number}
//                   </span>
//                 </div>
//                 <h3 className="mt-7 font-['Manrope'] text-lg font-extrabold leading-snug tracking-[-0.035em] text-[#0F172B]">
//                   {principle.title}
//                 </h3>
//                 <p className="mt-3 font-['DM_Sans'] text-sm leading-7 text-[#66727A]">
//                   {principle.description}
//                 </p>
//               </article>
//             );
//           })}
//         </div>

//         {/* Engineering-style process diagram */}
//         <div className="mt-8 overflow-hidden rounded-[1.8rem] bg-[#0F172B] p-6 text-white sm:p-9 lg:p-11">
//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
//             <div>
//               <Eyebrow light>How we work</Eyebrow>
//               <h3 className="mt-4 font-['Manrope'] text-2xl font-extrabold tracking-[-0.04em] sm:text-3xl">
//                 From first conversation to final delivery.
//               </h3>
//             </div>
//             <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">
//               Project workflow / 4 stages
//             </span>
//           </div>

//           <div className="mt-10 grid gap-3 md:grid-cols-4">
//             {steps.map(([number, title, description], index) => (
//               <div key={number} className="relative">
//                 <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
//                   <div className="flex items-center justify-between">
//                     <span className="font-['Manrope'] text-[10px] font-extrabold tracking-[0.16em] text-[#A3D953]">
//                       STEP {number}
//                     </span>
//                     {index === 0 ? (
//                       <Compass size={17} className="text-white/50" />
//                     ) : index === 1 ? (
//                       <Target size={17} className="text-white/50" />
//                     ) : index === 2 ? (
//                       <Code2 size={17} className="text-white/50" />
//                     ) : (
//                       <Check size={17} className="text-white/50" />
//                     )}
//                   </div>

//                   <h4 className="mt-5 font-['Manrope'] text-xl font-bold text-white">
//                     {title}
//                   </h4>
//                   <p className="mt-2 min-h-[48px] font-['DM_Sans'] text-sm leading-6 text-white/55">
//                     {description}
//                   </p>
//                 </div>

//                 {index < steps.length - 1 && (
//                   <div
//                     aria-hidden="true"
//                     className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#A3D953] md:block"
//                   >
//                     <ArrowRight size={18} />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="mt-7 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
//             <p className="font-['DM_Sans'] text-sm leading-7 text-white/50">
//               Clear scope, shared feedback, and practical next steps at each stage.
//             </p>
//             <a
//               href="#contact"
//               className="group inline-flex w-fit items-center gap-2 font-['Manrope'] text-sm font-bold text-[#A3D953] transition-colors hover:text-white"
//             >
//               Start with a conversation
//               <ArrowRight
//                 size={16}
//                 className="transition-transform group-hover:translate-x-1"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------------------------------------------
//    FAQs
// ------------------------------------------------------- */

// function FAQSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   return (
//     <section
//       id="faqs"
//       className="scroll-mt-24 bg-[#FAFAF7] py-20 sm:py-24 lg:py-32"
//     >
//       <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-14 xl:px-20">
//         <div className="lg:sticky lg:top-28 lg:self-start">
//           <Eyebrow>FAQs</Eyebrow>

//           <h2 className="mt-5 font-['Manrope'] text-[2.35rem] font-extrabold leading-[1.12] tracking-[-0.055em] text-[#0F172B] sm:text-5xl">
//             A few things
//             <br />
//             worth{" "}
//             <span className="text-[#528221]">knowing.</span>
//           </h2>

//           <p className="mt-5 max-w-md font-['DM_Sans'] text-[15px] leading-8 text-[#66727A]">
//             A good project begins with a clear conversation. Here are answers
//             to some common questions about working with us.
//           </p>

//           <div className="mt-8 rounded-2xl bg-[#F1F0E9] p-5 sm:p-6">
//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#528221]">
//               <MessageIcon />
//             </div>
//             <p className="mt-4 font-['Manrope'] text-base font-bold text-[#0F172B]">
//               Still have a question?
//             </p>
//             <p className="mt-2 font-['DM_Sans'] text-sm leading-6 text-[#66727A]">
//               Tell us what you have in mind. We'll take it from there.
//             </p>
//             <a
//               href="#contact"
//               className="mt-4 inline-flex items-center gap-2 font-['Manrope'] text-sm font-bold text-[#528221]"
//             >
//               Get in touch <ArrowRight size={15} />
//             </a>
//           </div>
//         </div>

//         <div className="border-t border-[#E5E5DC]">
//           {faqs.map((faq, index) => {
//             const isOpen = activeIndex === index;

//             return (
//               <div
//                 key={faq.question}
//                 className="border-b border-[#E5E5DC]"
//               >
//                 <button
//                   type="button"
//                   aria-expanded={isOpen}
//                   onClick={() =>
//                     setActiveIndex(isOpen ? null : index)
//                   }
//                   className="flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"
//                 >
//                   <span className="flex items-start gap-4">
//                     <span className="mt-1 font-['Manrope'] text-[10px] font-extrabold tracking-[0.15em] text-[#528221]">
//                       {String(index + 1).padStart(2, "0")}
//                     </span>
//                     <span className="font-['Manrope'] text-base font-bold leading-7 tracking-[-0.02em] text-[#0F172B] sm:text-lg">
//                       {faq.question}
//                     </span>
//                   </span>

//                   <span
//                     className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
//                       isOpen
//                         ? "rotate-45 border-[#528221] bg-[#528221] text-white"
//                         : "border-[#DFE0D7] text-[#528221]"
//                     }`}
//                   >
//                     <span className="text-xl font-light leading-none">+</span>
//                   </span>
//                 </button>

//                 {isOpen && (
//                   <div className="pb-7 pl-8 sm:pl-10">
//                     <p className="max-w-[650px] font-['DM_Sans'] text-sm leading-8 text-[#66727A] sm:text-[15px]">
//                       {faq.answer}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// function MessageIcon() {
//   return <Mail size={19} />;
// }

// /* -------------------------------------------------------
//    Contact
// ------------------------------------------------------- */

// type ContactForm = {
//   name: string;
//   email: string;
//   business: string;
//   service: string;
//   budget: string;
//   message: string;
// };

// const initialContactForm: ContactForm = {
//   name: "",
//   email: "",
//   business: "",
//   service: "",
//   budget: "",
//   message: "",
// };

// function ContactSection() {
//   const [form, setForm] = useState<ContactForm>(initialContactForm);

//   const updateField = (field: keyof ContactForm, value: string) => {
//     setForm((current) => ({ ...current, [field]: value }));
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (CONTACT_EMAIL === "hello@yourdomain.com") {
//       window.alert(
//         "Before receiving enquiries, please replace CONTACT_EMAIL in App.tsx with your real business email address.",
//       );
//       return;
//     }

//     const subject = `Project enquiry from ${form.name}`;
//     const body = [
//       `Name: ${form.name}`,
//       `Email: ${form.email}`,
//       `Business / Project: ${form.business || "Not provided"}`,
//       `Interested in: ${form.service || "Not specified"}`,
//       `Indicative budget: ${form.budget || "Not specified"}`,
//       "",
//       "Project details:",
//       form.message,
//     ].join("\n");

//     const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
//       subject,
//     )}&body=${encodeURIComponent(body)}`;

//     window.location.href = mailtoUrl;
//   };

//   const inputClass =
//     "mt-2 w-full rounded-xl border border-[#E5E6DE] bg-[#FAFAF7] px-4 py-3.5 font-['DM_Sans'] text-sm text-[#0F172B] outline-none transition-all placeholder:text-[#A0A69E] focus:border-[#528221] focus:bg-white focus:ring-2 focus:ring-[#528221]/10";

//   const labelClass =
//     "font-['Manrope'] text-xs font-bold text-[#46505B]";

//   return (
//     <section
//       id="contact"
//       className="scroll-mt-24 bg-[#0F172B] py-20 text-white sm:py-24 lg:py-32"
//     >
//       <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
//         <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
//           {/* Contact introduction */}
//           <div>
//             <Eyebrow light>Let's get started</Eyebrow>

//             <h2 className="mt-6 font-['Manrope'] text-[2.8rem] font-extrabold leading-[1.08] tracking-[-0.06em] text-[#FAFAF7] sm:text-5xl lg:text-[3.8rem]">
//               Have an idea?
//               <br />
//               Let's give it
//               <br />
//               <span className="text-[#A3D953]">a shape.</span>
//             </h2>

//             <p className="mt-7 max-w-[470px] font-['DM_Sans'] text-base leading-8 text-white/60">
//               Tell us a little about what you are building, what you need, or
//               what you would like to improve. We'll start with a conversation
//               and explore the right direction.
//             </p>

//             <div className="mt-10 border-t border-white/15 pt-7">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#A3D953]">
//                   <Mail size={19} />
//                 </div>
//                 <div>
//                   <span className="block font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
//                     Email
//                   </span>
//                   <span className="mt-1 block font-['DM_Sans'] text-sm text-white/80">
//                     Use the enquiry form to start a conversation.
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
//               <div className="flex items-center gap-2">
//                 <Sparkles size={16} className="text-[#A3D953]" />
//                 <span className="font-['Manrope'] text-xs font-bold text-white">
//                   A useful starting point
//                 </span>
//               </div>
//               <p className="mt-3 font-['DM_Sans'] text-sm leading-7 text-white/55">
//                 You don't need a complete brief. A simple description of your
//                 idea, audience, and current challenge is enough to begin.
//               </p>
//             </div>
//           </div>

//           {/* Contact form */}
//           <div className="rounded-[1.7rem] bg-[#FAFAF7] p-5 text-[#0F172B] sm:p-8 lg:p-9">
//             <div className="mb-7 flex items-center justify-between gap-4">
//               <div>
//                 <span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#528221]">
//                   Project enquiry
//                 </span>
//                 <h3 className="mt-2 font-['Manrope'] text-2xl font-extrabold tracking-[-0.04em] text-[#0F172B]">
//                   Tell us about your project.
//                 </h3>
//               </div>
//               <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-[#EAF0DF] text-[#528221] sm:flex">
//                 <Send size={20} />
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div className="grid gap-5 sm:grid-cols-2">
//                 <label className={labelClass}>
//                   Your name <span className="text-[#D66C3D]">*</span>
//                   <input
//                     required
//                     type="text"
//                     autoComplete="name"
//                     value={form.name}
//                     onChange={(event) =>
//                       updateField("name", event.target.value)
//                     }
//                     placeholder="Your name"
//                     className={inputClass}
//                   />
//                 </label>

//                 <label className={labelClass}>
//                   Email address <span className="text-[#D66C3D]">*</span>
//                   <input
//                     required
//                     type="email"
//                     autoComplete="email"
//                     value={form.email}
//                     onChange={(event) =>
//                       updateField("email", event.target.value)
//                     }
//                     placeholder="you@example.com"
//                     className={inputClass}
//                   />
//                 </label>
//               </div>

//               <label className={labelClass}>
//                 Business / project name
//                 <input
//                   type="text"
//                   value={form.business}
//                   onChange={(event) =>
//                     updateField("business", event.target.value)
//                   }
//                   placeholder="What are you building?"
//                   className={inputClass}
//                 />
//               </label>

//               <div className="grid gap-5 sm:grid-cols-2">
//                 <label className={labelClass}>
//                   What do you need?
//                   <select
//                     value={form.service}
//                     onChange={(event) =>
//                       updateField("service", event.target.value)
//                     }
//                     className={inputClass}
//                   >
//                     <option value="">Select a service</option>
//                     <option value="Brand identity">
//                       Brand identity
//                     </option>
//                     <option value="Website / digital presence">
//                       Website / digital presence
//                     </option>
//                     <option value="Creative solutions">
//                       Creative solutions
//                     </option>
//                     <option value="Multiple services">
//                       Multiple services
//                     </option>
//                     <option value="Not sure yet">
//                       Not sure yet
//                     </option>
//                   </select>
//                 </label>

//                 <label className={labelClass}>
//                   Indicative budget
//                   <select
//                     value={form.budget}
//                     onChange={(event) =>
//                       updateField("budget", event.target.value)
//                     }
//                     className={inputClass}
//                   >
//                     <option value="">Prefer not to say</option>
//                     <option value="Below ₹10,000">Below ₹10,000</option>
//                     <option value="₹10,000–₹25,000">
//                       ₹10,000–₹25,000
//                     </option>
//                     <option value="₹25,000–₹50,000">
//                       ₹25,000–₹50,000
//                     </option>
//                     <option value="₹50,000+">₹50,000+</option>
//                     <option value="Need guidance">Need guidance</option>
//                   </select>
//                 </label>
//               </div>

//               <label className={labelClass}>
//                 Tell us a little about your idea{" "}
//                 <span className="text-[#D66C3D]">*</span>
//                 <textarea
//                   required
//                   rows={5}
//                   value={form.message}
//                   onChange={(event) =>
//                     updateField("message", event.target.value)
//                   }
//                   placeholder="What are you building? Who is it for? What would you like help with?"
//                   className={`${inputClass} resize-y`}
//                 />
//               </label>

//               <div className="flex flex-col gap-4 border-t border-[#E8E8DF] pt-5 sm:flex-row sm:items-center sm:justify-between">
//                 <p className="max-w-[270px] font-['DM_Sans'] text-[11px] leading-5 text-[#89938B]">
//                   Your form details are prepared in your email application.
//                   No information is stored by this page.
//                 </p>

//                 <button
//                   type="submit"
//                   className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#0F172B] px-6 py-3 font-['Manrope'] text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#528221] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-4"
//                 >
//                   Prepare enquiry
//                   <ArrowUpRight
//                     size={17}
//                     className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//                   />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* -------------------------------------------------------
//    Footer
// ------------------------------------------------------- */

// function Footer() {
//   return (
//     <footer className="bg-[#0A1020] text-white">
//       <div className="mx-auto w-full max-w-[1600px] px-5 pb-8 pt-12 sm:px-8 lg:px-14 xl:px-20">
//         <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1fr_auto] md:items-start">
//           <div className="max-w-md">
//             <a href="#top" aria-label="BrandBanao home" className="inline-flex">
//               <img
//                 src={logo}
//                 alt="BrandBanao"
//                 className="h-12 w-auto rounded-sm object-contain"
//               />
//             </a>
//             <p className="mt-5 max-w-sm font-['DM_Sans'] text-sm leading-7 text-white/50">
//               Building thoughtful brands and digital experiences for
//               businesses, creators, professionals, and ideas taking shape.
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
//             <div>
//               <span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#A3D953]">
//                 Explore
//               </span>
//               <div className="mt-4 flex flex-col gap-3">
//                 {[
//                   ["Who we help", "#who-we-help"],
//                   ["Services", "#services"],
//                   ["Our work", "#our-work"],
//                 ].map(([label, href]) => (
//                   <a
//                     key={href}
//                     href={href}
//                     className="font-['DM_Sans'] text-sm text-white/55 transition-colors hover:text-white"
//                   >
//                     {label}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#A3D953]">
//                 BrandBanao
//               </span>
//               <div className="mt-4 flex flex-col gap-3">
//                 {[
//                   ["About", "#about-us"],
//                   ["Why us", "#why-us"],
//                   ["FAQs", "#faqs"],
//                 ].map(([label, href]) => (
//                   <a
//                     key={href}
//                     href={href}
//                     className="font-['DM_Sans'] text-sm text-white/55 transition-colors hover:text-white"
//                   >
//                     {label}
//                   </a>
//                 ))}
//               </div>
//             </div>

//             <div className="col-span-2 sm:col-span-1">
//               <span className="font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#A3D953]">
//                 Start something
//               </span>
//               <div className="mt-4 flex flex-col gap-3">
//                 <a
//                   href="#contact"
//                   className="font-['DM_Sans'] text-sm text-white/55 transition-colors hover:text-white"
//                 >
//                   Contact
//                 </a>
//                 <a
//                   href="#top"
//                   className="inline-flex items-center gap-2 font-['DM_Sans'] text-sm text-white/55 transition-colors hover:text-white"
//                 >
//                   Back to top <ArrowUpRight size={14} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between">
//           <p className="font-['DM_Sans'] text-xs text-white/35">
//             © {new Date().getFullYear()} BrandBanao. All rights reserved.
//           </p>
//           <p className="font-['Caveat'] text-lg font-semibold text-[#A3D953]">
//             Everyone has a brand. Let's build yours.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// /* -------------------------------------------------------
//    Main page
// ------------------------------------------------------- */

// export default function App() {
//   return (
//     <div className="min-h-screen bg-[#FAFAF7] font-['DM_Sans'] text-[#0F172B] antialiased selection:bg-[#A3D953]/40 selection:text-[#0F172B]">
//       <Navbar />

//       <main>
//         <HeroSection />
//         <WhoWeHelp />
//         <ServicesSection />
//         <WorkSection />
//         <AboutSection />
//         <WhyUsSection />
//         <FAQSection />
//         <ContactSection />
//       </main>

//       <Footer />
//     </div>
//   );
// }

// // import Navbar from './components/Navbar';
// // import FooterCTA from './components/FooterCTA';
// // import './App.css'
// // import Testimonials from './components/Testimonials';
// // import GuideWalkthrough from './components/GuideWalkthrough';
// // import HeroSection from './components/HeroSection';
// // import ContactSection from './components/ContactSection';
// // import FAQSection from './components/FAQSection';
// // import OurWork from './components/OurWork';
// // import WhyUs from './components/WhyUs';
// // import AboutSection from './components/AboutSection';
// // import ServicesSection from './components/ServicesSection';
// // import WhoWeHelp from './components/WhoWeHelp';

// // function App() {

// //   return (
// //     <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-[#A3D953]/30 selection:text-[#528221]">
// //       <Navbar />
// //       <HeroSection />
// //       <WhoWeHelp />
// //       <ServicesSection />
// //       <OurWork />
// //       <AboutSection />
// //       <WhyUs />
// //       <FAQSection />
// //       <ContactSection />
// //       <FooterCTA />
// //     </div>
// //   )
// // }

// // export default App
