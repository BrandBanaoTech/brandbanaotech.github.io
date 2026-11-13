
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MessageCircle,
  Palette,
  MonitorSmartphone,
  Lightbulb,
  Layers3,
  Clock3,
} from "lucide-react";

const CONTACT_EMAIL = "hello@yourdomain.com";

const serviceOptions = [
  "Brand identity & strategy",
  "Website & digital presence",
  "Creative design & marketing",
  "Multiple services",
  "AI & workflow solutions",
  "Something else",
  "Not sure yet",
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
  "Not decided yet",
];

const steps = [
  {
    number: "01",
    title: "Tell us about your idea",
    description: "Share your business, goals and what you need help with.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Explore the possibilities",
    description: "We discuss the requirements, scope and suitable approach.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Plan the next step",
    description: "Review the proposed deliverables, timeline and pricing.",
    icon: Check,
  },
];

const inputClass = `
  min-h-[49px] w-full appearance-none
  border border-[#0F172B]/15
  bg-[#FAFAF7] px-4
  font-['DM_Sans'] text-[13px] text-[#0F172B]
  outline-none transition-all duration-200
  placeholder:text-[#9AA39D]
  hover:border-[#0F172B]/30
  focus:border-[#528221]
  focus:ring-2 focus:ring-[#528221]/10
`;

const labelClass =
  "mb-2 block font-['DM_Sans'] text-[12px] font-bold text-[#26344C]";

export default function ContactSection() {
  const [formError, setFormError] = useState("");
  const [formNotice, setFormNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    setFormNotice("");

    // Prevent accidental use of the placeholder email.
    if (
      !CONTACT_EMAIL ||
      CONTACT_EMAIL === "brandbanaohq@gmail.com" ||
      !CONTACT_EMAIL.includes("@")
    ) {
      setFormError(
        "Please configure your enquiry email address before enabling this form."
      );
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const website = String(data.get("website") || "").trim();
    const service = String(data.get("service") || "").trim();
    const budget = String(data.get("budget") || "").trim();
    const details = String(data.get("details") || "").trim();

    const subject = encodeURIComponent(
      `New BrandBanao enquiry from ${name}`
    );

    const body = encodeURIComponent(
      [
        "NEW PROJECT ENQUIRY — BRANDBANAO",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Business / Brand: ${business || "Not provided"}`,
        `Website / Social link: ${website || "Not provided"}`,
        `Service required: ${service}`,
        `Estimated budget: ${budget || "Not decided"}`,
        "",
        "PROJECT DETAILS",
        details,
      ].join("\n")
    );

    // Opens the visitor's default email application.
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setFormNotice(
      "Your email application should open with the enquiry prepared. Send the email there to complete your enquiry."
    );
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#FAFAF7] text-[#0F172B]"
    >
      {/* Top brand accent */}
      <div className="h-[3px] w-full bg-[#A3D953]" />

      <div className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">

        {/* Section introduction */}
        <div className="mb-12 max-w-[700px]">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#528221]" />
            <p className="font-['DM_Sans'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#528221]">
              LET'S MAKE SOMETHING MEANINGFUL
            </p>
          </div>

          <h2
            id="contact-heading"
            className="font-['Manrope'] text-[clamp(2.7rem,5.2vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.075em] text-[#0F172B]"
          >
            Every great idea
            <br />
            starts with a{" "}
            <span className="font-serif font-normal italic text-[#528221]">
              conversation.
            </span>
          </h2>

          <p className="mt-5 max-w-[550px] font-['DM_Sans'] text-[14px] leading-[1.9] text-[#66727A] sm:text-[15px]">
            Tell us what you're building, what you have in mind or what you'd
            like to improve. Let's explore how we can bring your idea to life.
          </p>
        </div>

        {/* Main contact composition */}
        <div className="grid items-stretch gap-0 lg:grid-cols-[0.82fr_1.18fr]">

          {/* LEFT: Brand message and process */}
          <div className="relative isolate overflow-hidden bg-[#0F172B] px-6 py-9 text-white sm:px-9 sm:py-11 lg:px-10 lg:py-12 xl:px-12">

            {/* Subtle background decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-32 -top-32 h-[330px] w-[330px] rounded-full border-[1px] border-white/[0.08]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-[210px] w-[210px] rounded-full bg-[#528221]/20 blur-3xl"
            />

            <div className="relative z-10">

              {/* Small label */}
              <div className="mb-9 inline-flex items-center gap-2.5 border border-white/15 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#A3D953]" />
                <span className="font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.15em] text-white/75">
                  A GOOD PLACE TO BEGIN
                </span>
              </div>

              <h3 className="max-w-[410px] font-['Manrope'] text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.06em] text-white">
                Let's turn your
                <br />
                next idea into
                <br />
                <span className="font-serif font-normal italic text-[#A3D953]">
                  something real.
                </span>
              </h3>

              <p className="mt-6 max-w-[370px] font-['DM_Sans'] text-[13px] leading-[1.9] text-white/65">
                Whether you're starting a business, refreshing your identity
                or planning a digital experience, we're interested in hearing
                what you're working on.
              </p>

              {/* What happens next */}
              <div className="mt-12">
                <p className="mb-7 font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.16em] text-white/45">
                  WHAT HAPPENS NEXT
                </p>

                <div className="space-y-7">
                  {steps.map((step) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.number}
                        className="flex items-start gap-4"
                      >
                        <div className="grid h-10 w-10 shrink-0 place-items-center border border-white/15 bg-white/[0.04] text-[#A3D953]">
                          <Icon size={18} strokeWidth={1.7} />
                        </div>

                        <div className="min-w-0 pt-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-['DM_Sans'] text-[9px] font-bold tracking-[0.12em] text-[#A3D953]">
                              {step.number}
                            </span>

                            <h4 className="font-['Manrope'] text-[13px] font-bold text-white">
                              {step.title}
                            </h4>
                          </div>

                          <p className="mt-1.5 max-w-[320px] font-['DM_Sans'] text-[11px] leading-[1.8] text-white/55">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Closing detail */}
              <div className="mt-12 border-t border-white/15 pt-6">
                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center bg-[#A3D953] text-[#0F172B]">
                    <Mail size={17} />
                  </span>

                  <div>
                    <p className="font-['Manrope'] text-[12px] font-bold text-white">
                      A simple introduction is enough.
                    </p>
                    <p className="mt-1 font-['DM_Sans'] text-[11px] leading-[1.7] text-white/55">
                      You don't need a complete brief to start the conversation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom-right accent */}
            <div
              aria-hidden="true"
              className="absolute -bottom-20 -right-16 h-44 w-44 rounded-full border-[28px] border-[#528221]/35"
            />
          </div>

          {/* RIGHT: Contact form */}
          <div className="border border-[#0F172B]/10 bg-white px-5 py-8 sm:px-9 sm:py-10 lg:px-10 lg:py-12 xl:px-12">

            {/* Form heading */}
            <div className="mb-8 flex items-start justify-between gap-4 border-b border-[#0F172B]/10 pb-6">
              <div>
                <p className="mb-2 font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.16em] text-[#528221]">
                  PROJECT ENQUIRY
                </p>

                <h3 className="font-['Manrope'] text-[23px] font-extrabold tracking-[-0.045em] text-[#0F172B] sm:text-[26px]">
                  Tell us about your project.
                </h3>

                <p className="mt-2 font-['DM_Sans'] text-[12px] leading-[1.8] text-[#89938B]">
                  Share a few details so we can understand what you need.
                </p>
              </div>

              <span className="hidden h-10 w-10 shrink-0 items-center justify-center bg-[#EDF3E3] font-['Manrope'] text-[11px] font-extrabold text-[#528221] sm:flex">
                BB
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name and email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>
                    Your name <span className="text-[#528221]">*</span>
                  </span>

                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Email address <span className="text-[#528221]">*</span>
                  </span>

                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </label>
              </div>

              {/* Business and URL */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>
                    Business / brand name
                  </span>

                  <input
                    name="business"
                    type="text"
                    autoComplete="organization"
                    placeholder="Your business name"
                    className={inputClass}
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Website or social link
                  </span>

                  <input
                    name="website"
                    type="text"
                    placeholder="https:// or Instagram link"
                    className={inputClass}
                  />
                </label>
              </div>

              {/* Service and budget */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>
                    What do you need? <span className="text-[#528221]">*</span>
                  </span>

                  <select
                    name="service"
                    required
                    defaultValue=""
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>

                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className={labelClass}>
                    Estimated budget
                  </span>

                  <select
                    name="budget"
                    defaultValue=""
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a range (optional)
                    </option>

                    {budgetOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Project description */}
              <label className="block">
                <span className={labelClass}>
                  Tell us about your project{" "}
                  <span className="text-[#528221]">*</span>
                </span>

                <textarea
                  required
                  name="details"
                  rows={5}
                  minLength={20}
                  placeholder="What are you building? What do you need help with? What would you like to achieve?"
                  className="
                    w-full resize-y border border-[#0F172B]/15
                    bg-[#FAFAF7] px-4 py-3
                    font-['DM_Sans'] text-[13px] leading-[1.8]
                    text-[#0F172B] outline-none transition-all duration-200
                    placeholder:text-[#9AA39D]
                    hover:border-[#0F172B]/30
                    focus:border-[#528221]
                    focus:ring-2 focus:ring-[#528221]/10
                  "
                />

                <span className="mt-1.5 block text-right font-['DM_Sans'] text-[10px] text-[#A0AAA5]">
                  Minimum 20 characters
                </span>
              </label>

              {/* Error */}
              {formError && (
                <p
                  role="alert"
                  className="border border-red-200 bg-red-50 px-4 py-3 font-['DM_Sans'] text-[12px] leading-relaxed text-red-700"
                >
                  {formError}
                </p>
              )}

              {/* Email handoff notice */}
              {formNotice && (
                <p
                  role="status"
                  aria-live="polite"
                  className="border border-[#528221]/20 bg-[#EDF3E3] px-4 py-3 font-['DM_Sans'] text-[12px] leading-relaxed text-[#416B1D]"
                >
                  {formNotice}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="
                  group flex min-h-[54px] w-full items-center
                  justify-between bg-[#0F172B] px-5
                  font-['DM_Sans'] text-[13px] font-bold text-white
                  transition-all duration-200
                  hover:bg-[#26344C]
                  focus:outline-none focus-visible:ring-2
                  focus-visible:ring-[#528221] focus-visible:ring-offset-2
                "
              >
                <span>Send project enquiry</span>

                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#A3D953] text-[#0F172B] transition-transform group-hover:translate-x-0.5">
                  <ArrowUpRight size={18} />
                </span>
              </button>

              {/* Privacy / form explanation */}
              <p className="font-['DM_Sans'] text-[10px] leading-[1.8] text-[#89938B]">
                Your enquiry will be prepared in your default email
                application. You will need to send that email to complete
                your enquiry. This form does not store or transmit your
                information to a server.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom supporting line */}
        <div className="mt-8 flex flex-col justify-between gap-3 border-t border-[#0F172B]/10 pt-5 sm:flex-row sm:items-center">
          <p className="font-['DM_Sans'] text-[11px] leading-relaxed text-[#89938B]">
            Have a question before starting? You can begin with a simple enquiry.
          </p>

          <a
            href="#faqs"
            className="group inline-flex items-center gap-2 self-start font-['DM_Sans'] text-[11px] font-bold text-[#528221] transition-colors hover:text-[#0F172B] sm:self-auto"
          >
            Read frequently asked questions
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
