
import {
  ArrowRight,
  Clapperboard,
  Lightbulb,
  Store,
  UserRound,
  UsersRound,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Audience = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
};

const audiences: Audience[] = [
  {
    number: "01",
    title: "Businesses & Local Brands",
    description:
      "For businesses that want to stand out, build trust, and present their products or services more professionally.",
    tags: ["Small businesses", "Local brands", "New ventures"],
    icon: Store,
    iconBg: "bg-[#EAF0DF]",
    iconColor: "text-[#528221]",
  },
  {
    number: "02",
    title: "Creators & Content Professionals",
    description:
      "For creators and independent professionals building an audience, sharing their expertise, or growing their presence.",
    tags: ["Content creators", "Consultants", "Freelancers"],
    icon: Clapperboard,
    iconBg: "bg-[#FBE9E1]",
    iconColor: "text-[#D66C3D]",
  },
  {
    number: "03",
    title: "Individuals & Personal Brands",
    description:
      "For people who want their skills, experience, work, or personal story to be presented with clarity and character.",
    tags: ["Professionals", "Portfolios", "Personal projects"],
    icon: UserRound,
    iconBg: "bg-[#E9ECF4]",
    iconColor: "text-[#465B83]",
  },
  {
    number: "04",
    title: "Ideas & Passion Projects",
    description:
      "For early-stage ideas, side projects, and new initiatives that need a thoughtful identity and a strong place to begin.",
    tags: ["Side projects", "Start-up ideas", "Passion projects"],
    icon: Lightbulb,
    iconBg: "bg-[#F6EFD8]",
    iconColor: "text-[#A77A22]",
  },
  {
    number: "05",
    title: "Communities & Organisations",
    description:
      "For groups bringing people together around a shared purpose, event, community, or initiative.",
    tags: ["Communities", "Clubs", "Organisations"],
    icon: UsersRound,
    iconBg: "bg-[#E6EFEB]",
    iconColor: "text-[#417565]",
  },
];

export default function WhoWeHelp() {
  return (
    <section
      id="who-we-help"
      aria-labelledby="who-we-help-title"
      className="relative overflow-hidden bg-[#F1F0E9] py-20 sm:py-24 lg:py-32"
    >
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#528221]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-32 h-56 w-56 rounded-full border border-[#528221]/10"
      />

      <div className="relative mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-14 xl:px-20">
        {/* Section heading */}
        <div className="mb-10 flex items-center gap-3 sm:mb-14">
          <span className="h-[2px] w-8 bg-[#528221]" />
          <span className="font-['Manrope'] text-[11px] font-bold uppercase tracking-[0.2em] text-[#528221] sm:text-xs">
            Who We Help
          </span>
        </div>

        <div className="grid items-stretch gap-7 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 xl:gap-14">
          {/* Left: Brand statement */}
          <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[1.75rem] bg-[#0F172B] p-7 text-white sm:p-10 lg:sticky lg:top-24 lg:min-h-[670px] lg:rounded-[2rem] lg:p-12">
            {/* Decorative elements */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.07]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/[0.07]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#528221]/20 blur-3xl"
            />

            <div className="relative z-10">
              <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2">
                <Sparkles size={13} className="text-[#A3D953]" />
                <span className="font-['Manrope'] text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
                  People first. Ideas always.
                </span>
              </div>

              <h2
                id="who-we-help-title"
                className="max-w-[560px] font-['Manrope'] text-[2.65rem] font-extrabold leading-[1.13] tracking-[-0.055em] text-[#FAFAF7] sm:text-5xl xl:text-[3.65rem]"
              >
                Good ideas come in{" "}
                <span className="relative inline-block text-[#A3D953]">
                  every size.
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 260 14"
                    className="absolute -bottom-2 left-0 w-full"
                    fill="none"
                  >
                    <path
                      d="M3 10C65 2 178 1 256 7"
                      stroke="#F07843"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="mt-7 max-w-[440px] font-['DM_Sans'] text-base leading-8 text-white/65 sm:text-[17px]">
                From a neighbourhood business to a new idea taking shape,
                we work with people who want to express what they do,
                connect with others, and build something meaningful.
              </p>
            </div>

            <div className="relative z-10 mt-14 border-t border-white/15 pt-7 sm:mt-16">
              <p className="max-w-[400px] font-['Manrope'] text-xl font-semibold leading-relaxed tracking-[-0.025em] text-white sm:text-2xl">
                You don't need to be established to deserve a brand that
                feels{" "}
                <span className="text-[#A3D953]">thoughtfully yours.</span>
              </p>

              <a
                href="#contact"
                className="group mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#A3D953] px-6 py-3 font-['Manrope'] text-sm font-bold text-[#0F172B] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#B5E76C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A3D953] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0F172B]"
              >
                Tell us what you're building
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Decorative corner mark */}
            <div
              aria-hidden="true"
              className="absolute bottom-9 right-9 hidden h-16 w-16 rotate-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] lg:flex"
            >
              <Sparkles size={27} className="text-[#A3D953]/70" />
            </div>
          </div>

          {/* Right: Audience profiles */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <article
                  key={audience.number}
                  className="group relative rounded-[1.35rem] border border-[#E3E2D9] bg-[#FAFAF7] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B9C99E] hover:shadow-[0_14px_35px_rgba(15,23,43,0.055)] sm:p-6 lg:p-7"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.95rem] ${audience.iconBg} sm:h-14 sm:w-14`}
                    >
                      <Icon
                        size={23}
                        strokeWidth={1.7}
                        className={audience.iconColor}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-['Manrope'] text-[10px] font-bold tracking-[0.16em] text-[#89938B]">
                          {audience.number}
                        </span>

                        <span className="h-px w-5 bg-[#D9DAD1]" />
                        
                        <span className="font-['Manrope'] text-[10px] font-semibold uppercase tracking-[0.13em] text-[#89938B]">
                          {audience.number === "01"
                            ? "For growing businesses"
                            : audience.number === "02"
                              ? "For independent voices"
                              : audience.number === "03"
                                ? "For individual expression"
                                : audience.number === "04"
                                  ? "For ideas taking shape"
                                  : "For shared purposes"}
                        </span>
                      </div>

                      <h3 className="font-['Manrope'] text-lg font-bold leading-snug tracking-[-0.035em] text-[#0F172B] transition-colors duration-300 group-hover:text-[#528221] sm:text-xl">
                        {audience.title}
                      </h3>

                      <p className="mt-2 max-w-[580px] font-['DM_Sans'] text-sm leading-[1.75] text-[#66727A] sm:text-[15px]">
                        {audience.description}
                      </p>

                      {/* Audience descriptors */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {audience.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[#E8E8DF] bg-white px-3 py-1.5 font-['DM_Sans'] text-[11px] font-medium text-[#66727A] sm:text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[#DCDCD2] pt-7 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-8">
          <p className="font-['DM_Sans'] text-sm leading-relaxed text-[#66727A] sm:text-[15px]">
            Have something different in mind? We'd still love to hear about it.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 font-['Manrope'] text-sm font-bold text-[#528221] transition-colors hover:text-[#0F172B]"
          >
            Let's talk about your idea
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
