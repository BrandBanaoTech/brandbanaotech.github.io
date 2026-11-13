
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Fingerprint,
  Globe2,
  Layers3,
  Palette,
  PenTool,
  Sparkles,
  SwatchBook,
} from "lucide-react";

const services = [
  {
    id: "brand-identity",
    number: "01",
    eyebrow: "LOOK DISTINCTIVE",
    title: "Brand Identity\n& Creative",
    description:
      "Build a recognisable identity that reflects who you are, what you stand for and how you want to be remembered.",
    icon: Fingerprint,
    accent: "#A3D953",
    background: "bg-[#EDF3E5]",
    textColor: "text-[#528221]",
    deliverables: [
      "Logo and visual identity design",
      "Colour palette and typography",
      "Mini brand guidelines",
      "Business cards and stationery",
      "Brochures, flyers and catalogues",
    ],
    visual: "identity",
    link: "#contact",
  },
  {
    id: "websites-digital",
    number: "02",
    eyebrow: "BUILD YOUR PRESENCE",
    title: "Websites &\nDigital Presence",
    description:
      "Give people a clear, professional place to discover your work, understand what you offer and get in touch.",
    icon: Globe2,
    accent: "#F07843",
    background: "bg-[#F7EDE7]",
    textColor: "text-[#C45D34]",
    deliverables: [
      "Business and service websites",
      "Landing pages and campaign pages",
      "Personal and creator portfolios",
      "Digital catalogues and galleries",
      "Contact and enquiry setup",
    ],
    visual: "website",
    link: "#contact",
  },
  {
    id: "creative-solutions",
    number: "03",
    eyebrow: "BRING IDEAS TO LIFE",
    title: "Creative &\nDigital Solutions",
    description:
      "Create the visual content, communication assets and useful digital experiences that support your next step.",
    icon: Layers3,
    accent: "#528221",
    background: "bg-[#E9EFE7]",
    textColor: "text-[#528221]",
    deliverables: [
      "Social media design kits",
      "Creator media kits and profile assets",
      "Presentations and pitch decks",
      "Posters, invitations and event creatives",
      "Practical digital tools and integrations",
    ],
    visual: "creative",
    link: "#contact",
  },
];

function IdentityPreview() {
  return (
    <div className="relative flex h-[205px] items-center justify-center overflow-hidden rounded-[19px] bg-[#E6EDDC] p-5">
      <div className="absolute -right-9 -top-16 h-48 w-48 rounded-full bg-[#A3D953]/40" />
      <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full border border-[#528221]/20" />

      <div className="relative grid w-full max-w-[330px] grid-cols-[1fr_0.8fr] gap-3">
        <div className="flex min-h-[145px] flex-col justify-between rounded-2xl bg-[#0F172B] p-4">
          <span className="font-['Manrope'] text-[9px] font-bold uppercase tracking-[0.2em] text-[#A3D953]">
            Brand direction
          </span>
          <div>
            <p className="font-['Manrope'] text-[29px] font-extrabold tracking-[-0.08em] text-white">
              Your<span className="text-[#A3D953]">.</span>
            </p>
            <p className="mt-1 font-['DM_Sans'] text-[10px] text-white/55">
              A visual language of your own.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-1 items-center justify-center rounded-2xl bg-white">
            <SwatchBook size={32} strokeWidth={1.4} className="text-[#528221]" />
          </div>
          <div className="flex gap-1.5">
            <span className="h-7 flex-1 rounded-lg bg-[#528221]" />
            <span className="h-7 flex-1 rounded-lg bg-[#A3D953]" />
            <span className="h-7 flex-1 rounded-lg bg-[#F07843]" />
            <span className="h-7 flex-1 rounded-lg bg-[#0F172B]" />
          </div>
        </div>
      </div>

      <span className="absolute bottom-3 left-4 font-['DM_Sans'] text-[9px] font-semibold uppercase tracking-[0.15em] text-[#528221]/65">
        Identity / Visual direction
      </span>
    </div>
  );
}

function WebsitePreview() {
  return (
    <div className="relative flex h-[205px] items-center justify-center overflow-hidden rounded-[19px] bg-[#F1E7DF] p-5">
      <div className="absolute -right-14 -top-20 h-52 w-52 rounded-full bg-[#F07843]/15" />

      <div className="relative w-full max-w-[335px] rounded-xl border border-[#0F172B]/10 bg-white p-3 shadow-[0_16px_35px_rgba(15,23,43,0.12)]">
        <div className="flex items-center gap-1.5 border-b border-[#E9E9E4] pb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F07843]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#A3D953]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#0F172B]/20" />
          <div className="ml-3 h-2 w-24 rounded-full bg-[#E9E9E4]" />
        </div>

        <div className="grid grid-cols-[1fr_0.8fr] gap-3 px-2 py-4">
          <div className="flex flex-col justify-center">
            <span className="font-['Manrope'] text-[8px] font-bold uppercase tracking-[0.14em] text-[#528221]">
              Your online space
            </span>
            <div className="mt-2 h-3 w-full rounded-sm bg-[#0F172B]" />
            <div className="mt-1.5 h-3 w-[75%] rounded-sm bg-[#0F172B]" />
            <div className="mt-3 h-2 w-full rounded-sm bg-[#D9DED6]" />
            <div className="mt-1 h-2 w-[85%] rounded-sm bg-[#D9DED6]" />
            <div className="mt-3 h-6 w-20 rounded-full bg-[#528221]" />
          </div>
          <div className="relative min-h-[105px] overflow-hidden rounded-lg bg-[#E8EBDD]">
            <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#A3D953]/80" />
            <div className="absolute bottom-0 left-0 h-16 w-24 rounded-tr-[45px] bg-[#528221]" />
            <div className="absolute bottom-0 right-0 h-11 w-12 rounded-tl-full bg-[#F07843]/70" />
          </div>
        </div>
      </div>

      <span className="absolute bottom-3 left-4 font-['DM_Sans'] text-[9px] font-semibold uppercase tracking-[0.15em] text-[#A85B3B]/75">
        Web / Digital experience
      </span>
    </div>
  );
}

function CreativePreview() {
  return (
    <div className="relative flex h-[205px] items-center justify-center overflow-hidden rounded-[19px] bg-[#E8EDE7] p-5">
      <div className="absolute -bottom-24 -right-10 h-52 w-52 rounded-full bg-[#A3D953]/35" />

      <div className="relative grid w-full max-w-[330px] grid-cols-3 gap-2">
        <div className="col-span-2 flex min-h-[112px] flex-col justify-between rounded-xl bg-[#0F172B] p-3">
          <Sparkles size={17} className="text-[#A3D953]" />
          <div>
            <p className="font-['Manrope'] text-[17px] font-extrabold leading-tight tracking-[-0.05em] text-white">
              Make it
              <br />
              memorable.
            </p>
            <div className="mt-2 h-1 w-10 rounded-full bg-[#F07843]" />
          </div>
        </div>

        <div className="flex min-h-[112px] items-center justify-center rounded-xl bg-[#F07843]">
          <PenTool size={30} strokeWidth={1.5} className="text-white" />
        </div>

        <div className="flex h-[56px] items-center justify-center rounded-xl bg-white">
          <Palette size={22} className="text-[#528221]" />
        </div>
        <div className="col-span-2 flex h-[56px] items-center justify-between rounded-xl bg-[#A3D953] px-4">
          <span className="font-['Manrope'] text-[10px] font-extrabold text-[#0F172B]">
            Ideas in action
          </span>
          <ArrowUpRight size={17} className="text-[#0F172B]" />
        </div>
      </div>

      <span className="absolute bottom-3 left-4 font-['DM_Sans'] text-[9px] font-semibold uppercase tracking-[0.15em] text-[#528221]/65">
        Creative / Communication
      </span>
    </div>
  );
}

function ServiceVisual({ type }: { type: string }) {
  if (type === "identity") return <IdentityPreview />;
  if (type === "website") return <WebsitePreview />;
  return <CreativePreview />;
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#F1F0E9] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">

        {/* Section introduction */}
        <div className="mb-14 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[760px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-[#528221]" />
              <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.22em] text-[#528221]">
                What we do
              </span>
              <span className="font-['DM_Sans'] text-xs text-[#89938B]">
                / Our services
              </span>
            </div>

            <h2
              id="services-heading"
              className="font-['Manrope'] text-[clamp(2.65rem,5.2vw,4.8rem)] font-extrabold leading-[1.06] tracking-[-0.065em] text-[#0F172B]"
            >
              Everything starts
              <br />
              with an idea.
              <span className="text-[#528221]"> Let's shape it.</span>
            </h2>
          </div>

          <div className="max-w-[410px] lg:pb-2">
            <p className="font-['DM_Sans'] text-[15px] leading-[1.9] text-[#66727A]">
              Whether you need a brand identity, a website or creative
              support, find the right starting point for what you're
              building.
            </p>
            <p className="mt-3 font-['DM_Sans'] text-[12px] leading-[1.8] text-[#89938B]">
              Thoughtful solutions for businesses, creators, professionals
              and ideas of every kind.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                id={service.id}
                className="group flex scroll-mt-28 flex-col overflow-hidden rounded-[25px] border border-[#E1E3DB] bg-[#FAFAF7] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C8D4BB] hover:shadow-[0_22px_50px_rgba(15,23,43,0.07)] sm:p-5"
              >
                {/* Preview artwork */}
                <ServiceVisual type={service.visual} />

                {/* Card content */}
                <div className="flex flex-1 flex-col px-1 pb-2 pt-7 sm:px-2 sm:pt-8">
                  <div className="flex items-center justify-between">
                    <span className="font-['Manrope'] text-[10px] font-bold tracking-[0.17em] text-[#89938B]">
                      {service.number} / {service.eyebrow}
                    </span>
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      style={{ color: service.accent }}
                    />
                  </div>

                  <h3 className="mt-5 whitespace-pre-line font-['Manrope'] text-[27px] font-extrabold leading-[1.13] tracking-[-0.055em] text-[#0F172B] sm:text-[30px]">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[75px] font-['DM_Sans'] text-[13px] leading-[1.85] text-[#77817F]">
                    {service.description}
                  </p>

                  <div className="my-6 h-px bg-[#E7E8E0]" />

                  <p className="mb-4 font-['Manrope'] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0F172B]">
                    What we can create
                  </p>

                  <ul className="flex flex-col gap-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-['DM_Sans'] text-[12px] leading-[1.65] text-[#66727A]"
                      >
                        <span
                          className="mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full"
                          style={{
                            backgroundColor: `${service.accent}20`,
                            color: service.textColor === "text-[#528221]"
                              ? "#528221"
                              : service.accent,
                          }}
                        >
                          <Check size={11} strokeWidth={2.5} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <a
                      href={service.link}
                      className="group/link flex min-h-[48px] items-center justify-between border-t border-[#E7E8E0] pt-4 font-['Manrope'] text-[12px] font-extrabold text-[#0F172B] transition-colors hover:text-[#528221]"
                    >
                      <span>Discuss this service</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DDE1D7] transition-all duration-300 group-hover/link:border-[#A3D953] group-hover/link:bg-[#A3D953]">
                        <ArrowUpRight size={16} />
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Custom project CTA */}
        <div className="relative mt-8 flex flex-col gap-6 overflow-hidden rounded-[24px] bg-[#0F172B] px-6 py-8 sm:px-9 lg:flex-row lg:items-center lg:justify-between lg:px-11 lg:py-9">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-28 h-64 w-64 rounded-full border border-white/[0.09]"
          />
          <div
            aria-hidden="true"
            className="absolute -right-5 -top-16 h-44 w-44 rounded-full border border-white/[0.08]"
          />

          <div className="relative">
            <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.19em] text-[#A3D953]">
              Have something different in mind?
            </span>
            <h3 className="mt-3 max-w-[650px] font-['Manrope'] text-[23px] font-extrabold leading-tight tracking-[-0.045em] text-white sm:text-[28px]">
              Not sure what you need? Let's figure it out together.
            </h3>
            <p className="mt-3 max-w-[560px] font-['DM_Sans'] text-[13px] leading-[1.8] text-white/55">
              Tell us what you're trying to build. We'll help identify a
              suitable starting point and scope.
            </p>
          </div>

          <a
            href="#contact"
            className="relative inline-flex min-h-[50px] shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#A3D953] px-6 font-['Manrope'] text-[12px] font-extrabold text-[#0F172B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white lg:self-center"
          >
            Start a project
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* Footer note */}
        <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-['DM_Sans'] text-[11px] text-[#89938B]">
            Every project is scoped around your needs, goals and budget.
          </p>
          <a
            href="#our-work"
            className="inline-flex items-center gap-2 font-['Manrope'] text-[11px] font-bold text-[#528221] transition-colors hover:text-[#F07843]"
          >
            See how ideas take shape
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
