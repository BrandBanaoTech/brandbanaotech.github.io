
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Plus,
  Minus,
  MessageCircle,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const faqs = [
  {
    number: "01",
    question: "I'm just starting a business. Can you help?",
    answer:
      "Absolutely. You don't need an established brand or a complete project brief to get started. Tell us about your idea, who you want to reach and what you're hoping to build. We'll help identify the most useful first steps.",
  },
  {
    number: "02",
    question: "Can I request just one service?",
    answer:
      "Yes. You can approach BrandBanao for an individual branding project, a website, a landing page or a specific creative requirement. You don't have to purchase a complete package or bundle multiple services.",
  },
  {
    number: "03",
    question: "What kind of businesses do you work with?",
    answer:
      "We work with founders, startups, local and service businesses, creators, independent professionals and growing organisations. The focus is on understanding your particular needs and finding an appropriate solution.",
  },
  {
    number: "04",
    question: "How much does a project cost?",
    answer:
      "Pricing depends on the project scope, complexity, required functionality and deliverables. After understanding your requirements, we'll outline the proposed work, pricing and timeline before you make a commitment. Any third-party costs, such as domains, hosting or paid tools, are discussed separately.",
  },
  {
    number: "05",
    question: "How long will my project take?",
    answer:
      "Timelines vary depending on the type of project, its complexity, the availability of content and feedback cycles. We'll discuss a realistic schedule and agree on milestones before work begins.",
  },
  {
    number: "06",
    question: "What do I need to provide to get started?",
    answer:
      "A description of your business, your goals and the service you're interested in is a good starting point. Existing logos, brand assets, website links, content or visual references can also be helpful, but a fully developed brief isn't necessary.",
  },
  {
    number: "07",
    question: "Can you improve an existing brand or website?",
    answer:
      "Yes. We can work with your existing identity and digital presence, identify areas that could be improved and discuss a suitable refresh, redesign or set of targeted enhancements.",
  },
  {
    number: "08",
    question: "Do you provide revisions and support after delivery?",
    answer:
      "The agreed revision rounds, deliverables and handover details will be documented in your project proposal. Ongoing maintenance, updates and additional support can also be discussed and scoped separately.",
  },
  {
    number: "09",
    question: "Can you help with AI and business automation?",
    answer:
      "We can discuss opportunities to improve a business workflow through automation or AI. The right approach depends on the actual problem: sometimes a straightforward integration is more useful than an AI system. We'll assess the requirements before suggesting a solution.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  const toggleFAQ = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faqs"
      aria-labelledby="faq-heading"
      className="relative scroll-mt-24 overflow-hidden bg-[#F1F0E9] text-[#0F172B]"
    >
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full border border-[#528221]/10"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28 xl:px-20">

        {/* Main two-column composition */}
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16 xl:gap-24">

          {/* LEFT: Introduction */}
          <div className="flex flex-col">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#528221]" />
              <p className="font-['DM_Sans'] text-[10px] font-bold uppercase tracking-[0.18em] text-[#528221]">
                GOOD TO KNOW
              </p>
            </div>

            {/* Heading */}
            <h2
              id="faq-heading"
              className="max-w-[510px] font-['Manrope'] text-[clamp(2.7rem,5vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.075em] text-[#0F172B]"
            >
              A few things
              <br />
              you might ask
              <span className="font-serif font-normal italic text-[#528221]">
                .
              </span>
            </h2>

            <p className="mt-6 max-w-[405px] font-['DM_Sans'] text-[14px] leading-[1.9] text-[#66727A] sm:text-[15px]">
              Starting a project often comes with questions. Here are some
              helpful details about working with BrandBanao, from the first
              conversation to the final delivery.
            </p>

            {/* Contact prompt */}
            <div className="mt-10 flex items-start gap-4 border-t border-[#0F172B]/15 pt-6">
              <span className="grid h-11 w-11 shrink-0 place-items-center bg-[#E4ECD5] text-[#528221]">
                <MessageCircle size={20} strokeWidth={1.7} />
              </span>

              <div>
                <h3 className="font-['Manrope'] text-[14px] font-bold text-[#0F172B]">
                  Still have a question?
                </h3>

                <p className="mt-1 max-w-[290px] font-['DM_Sans'] text-[12px] leading-[1.8] text-[#66727A]">
                  Tell us what you're planning. We're happy to discuss your
                  requirements.
                </p>

                <a
                  href="#contact"
                  className="group mt-4 inline-flex items-center gap-2 font-['DM_Sans'] text-[12px] font-bold text-[#528221] transition-colors hover:text-[#0F172B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221]"
                >
                  Get in touch

                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Small closing detail */}
            <div className="mt-10 hidden items-center gap-3 lg:flex">
              <span className="h-[3px] w-7 bg-[#A3D953]" />
              <span className="font-['DM_Sans'] text-[9px] font-bold uppercase tracking-[0.15em] text-[#89938B]">
                Strategy · Identity · Digital
              </span>
            </div>
          </div>

          {/* RIGHT: FAQ accordion */}
          <div className="border-t border-[#0F172B]/20">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              const panelId = `faq-answer-${index}`;
              const buttonId = `faq-question-${index}`;

              return (
                <div
                  key={faq.number}
                  className="border-b border-[#0F172B]/20"
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleFAQ(index)}
                    className="group flex min-h-[76px] w-full items-center gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#528221] sm:min-h-[82px] sm:gap-5"
                  >
                    {/* Question number */}
                    <span
                      className={`w-7 shrink-0 font-['DM_Sans'] text-[10px] font-bold tracking-[0.1em] transition-colors ${
                        isOpen ? "text-[#528221]" : "text-[#89938B]"
                      }`}
                    >
                      {faq.number}
                    </span>

                    {/* Question */}
                    <span
                      className={`min-w-0 flex-1 font-['Manrope'] text-[13px] font-bold leading-[1.55] tracking-[-0.015em] transition-colors sm:text-[15px] ${
                        isOpen
                          ? "text-[#528221]"
                          : "text-[#0F172B] group-hover:text-[#528221]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* Expand / collapse */}
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-200 ${
                        isOpen
                          ? "border-[#528221] bg-[#528221] text-white"
                          : "border-[#0F172B]/15 bg-transparent text-[#0F172B] group-hover:border-[#528221] group-hover:text-[#528221]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={15} />
                      ) : (
                        <Plus size={15} />
                      )}
                    </span>
                  </button>

                  {/* Animated answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={
                          reduceMotion
                            ? false
                            : { height: 0, opacity: 0 }
                        }
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.24,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-11 pr-8 sm:pl-12 sm:pr-12">
                          <p className="max-w-[630px] font-['DM_Sans'] text-[13px] leading-[1.95] text-[#66727A] sm:text-[14px]">
                            {faq.answer}
                          </p>

                          {index === 3 && (
                            <a
                              href="#contact"
                              className="mt-4 inline-flex items-center gap-2 font-['DM_Sans'] text-[11px] font-bold text-[#528221] hover:text-[#0F172B]"
                            >
                              Discuss your project
                              <ArrowRight size={13} />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom invitation */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-[#0F172B]/15 pt-7 sm:flex-row sm:items-center lg:mt-16">
          <p className="max-w-[480px] font-['DM_Sans'] text-[12px] leading-[1.8] text-[#66727A]">
            Have a project in mind? You don't need every detail figured out.
            Let's start with a conversation.
          </p>

          <a
            href="#contact"
            className="group inline-flex min-h-[49px] items-center justify-center gap-4 self-start rounded-full bg-[#0F172B] py-1.5 pl-5 pr-1.5 font-['DM_Sans'] text-[12px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#26344C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#528221] focus-visible:ring-offset-2 sm:self-auto"
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
