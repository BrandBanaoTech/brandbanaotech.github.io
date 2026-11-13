
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Eye,
  Layers3,
  Lightbulb,
} from "lucide-react";

const principles = [
  {
    number: "01",
    icon: Compass,
    title: "Understand before creating.",
    description:
      "We start with your business, your audience and what you want to achieve. The aim is to make design decisions that solve the right problem.",
    accent: "text-[#A3D953]",
  },
  {
    number: "02",
    icon: Eye,
    title: "Clarity over noise.",
    description:
      "A strong brand should be easy to understand. We focus on clear messaging, intuitive experiences and visual choices that have a purpose.",
    accent: "text-[#F07843]",
  },
  {
    number: "03",
    icon: Layers3,
    title: "One connected experience.",
    description:
      "Your identity, content and digital presence should work together. We consider how every touchpoint contributes to the bigger picture.",
    accent: "text-[#A3D953]",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Technology with intention.",
    description:
      "We explore practical tools and emerging technology, including AI where it genuinely adds value. Useful outcomes matter more than unnecessary complexity.",
    accent: "text-[#F07843]",
  },
];

function PrincipleCard({
  number,
  icon: Icon,
  title,
  description,
  accent,
}: (typeof principles)[number]) {
  return (
    <article className="group relative flex min-h-[265px] flex-col overflow-hidden rounded-[22px] border border-white/[0.11] bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#A3D953]/40 hover:bg-white/[0.065] sm:p-7">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.10] bg-white/[0.045]">
          <Icon
            size={21}
            strokeWidth={1.7}
            className={accent}
            aria-hidden="true"
          />
        </div>

        <span className="font-['Manrope'] text-xs font-semibold tracking-[0.16em] text-white/35">
          {number}
        </span>
      </div>

      <div className="mt-9">
        <h3 className="max-w-[280px] font-['Manrope'] text-[19px] font-bold leading-[1.3] tracking-[-0.035em] text-white sm:text-[21px]">
          {title}
        </h3>

        <p className="mt-3 max-w-[340px] font-['DM_Sans'] text-[14px] leading-[1.8] text-[#B6BEC6]">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-[#A3D953]/70 transition-transform duration-300 group-hover:scale-x-100" />
    </article>
  );
}

export default function WhyUs() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="relative isolate overflow-hidden bg-[#0F172B] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* Atmospheric background details */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 h-[520px] w-[520px] rounded-full bg-[#528221]/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -left-40 h-[480px] w-[480px] rounded-full bg-[#F07843]/[0.07] blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Section introduction */}
        <div className="mb-14 flex items-center gap-4 sm:mb-16">
          <span className="h-[2px] w-8 bg-[#A3D953]" />
          <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.22em] text-[#C7D4B7]">
            Why BrandBanao
          </span>
          <span className="font-['DM_Sans'] text-xs text-white/35">
            / A different way of thinking
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          {/* Left: editorial statement */}
          <div className="lg:col-span-5">
            <h2
              id="why-us-heading"
              className="max-w-[620px] font-['Manrope'] text-[clamp(2.65rem,5.1vw,4.6rem)] font-extrabold leading-[1.06] tracking-[-0.065em] text-white"
            >
              Good work starts with{" "}
              <span className="relative inline-block text-[#A3D953]">
                good thinking.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 260 13"
                  className="absolute -bottom-2 left-0 h-3 w-full"
                  fill="none"
                >
                  <path
                    d="M3 9C65 2 182 1 257 7"
                    stroke="#F07843"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="mt-7 max-w-[470px] font-['DM_Sans'] text-[16px] leading-[1.85] text-[#BEC6CD] sm:text-[17px]">
              Building a brand is about more than making things look good.
              It takes clear thinking, thoughtful design and the right
              technology working together to create something meaningful.
            </p>

            {/* Decision-making principle */}
            <div className="mt-12 max-w-[470px] border-l-2 border-[#A3D953]/70 pl-6 sm:mt-14">
              <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.2em] text-[#A3D953]">
                Our guiding question
              </span>

              <p className="mt-3 font-['Manrope'] text-[19px] font-semibold leading-[1.55] tracking-[-0.025em] text-white sm:text-[21px]">
                Does this make your brand clearer, your experience better or
                your next step easier?
              </p>
            </div>

            <a
              href="#contact"
              className="mt-11 inline-flex items-center gap-3 font-['Manrope'] text-[14px] font-bold text-[#D5E9BB] transition-colors duration-200 hover:text-[#A3D953]"
            >
              Let's build something meaningful
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-all duration-200 group-hover:border-[#A3D953]">
                <ArrowUpRight size={16} />
              </span>
            </a>
          </div>

          {/* Right: four working principles */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {principles.map((principle) => (
              <PrincipleCard key={principle.number} {...principle} />
            ))}
          </div>
        </div>

        {/* Closing brand statement */}
        <div className="mt-20 border-t border-white/[0.13] pt-7 sm:mt-24 sm:flex sm:items-center sm:justify-between">
          <p className="font-['Manrope'] text-[15px] font-semibold tracking-[-0.02em] text-white/85">
            Thoughtful by design. Practical in every detail.
          </p>

          <div className="mt-3 flex items-center gap-2 font-['DM_Sans'] text-xs text-white/45 sm:mt-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A3D953]" />
            <span>Made with purpose, not just for appearance.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
