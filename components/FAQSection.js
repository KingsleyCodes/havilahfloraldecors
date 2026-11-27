'use client';

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What types of events does Havilah Florals Decor handle?",
    answer:
      "We specialise in wedding decor and styling, alongside selected milestone celebrations and floral design or installation commissions.",
  },
  {
    question: "Do I need to have a complete design idea before contacting you?",
    answer:
      "Not at all. You can come with a Pinterest board, preferred colours, a few ideas, or simply a feeling you want your celebration to have. Our creative direction helps turn those starting points into a cohesive design.",
  },
  {
    question: "How much does wedding decor cost?",
    answer:
      "Every wedding is different. The investment depends on the venue, scale of the celebration, design direction, materials, and services required. We develop a proposal around your needs so you can review the proposed scope and investment before booking.",
  },
  {
    question: "Do you have fixed decor packages?",
    answer:
      "Our approach is to develop proposals around each celebration rather than assume one standard package will suit every couple. The scope is shaped by your priorities, venue, design direction, and requirements.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend enquiring as early as possible, especially for popular wedding dates. Availability depends on the date and scale of your event, so please contact us to discuss your plans. We take on only one client per date.",
  },
  {
    question: "Do you work outside Abuja?",
    answer:
      "We are based in Abuja. If your event is outside Abuja, please share the location and event details in your inquiry so we can assess the logistics and feasibility.",
  },
  {
    question: "What happens after I make an inquiry?",
    answer:
      "We’ll review your event details and guide you through the next steps, including a consultation where appropriate. From there, we’ll establish your brief and discuss the proposed design, scope, and investment.",
  },
  {
    question: "What if I already have a wedding planner or other vendors?",
    answer:
      "We can discuss how our decor and styling service fits into your existing arrangements and how to coordinate the relevant design and execution requirements with your planner or other vendors.",
  },
  {
    question: "When is my booking confirmed?",
    answer:
      "Your booking is confirmed once the agreed booking requirements, including the required payment and documentation, have been completed. The specific terms will be communicated during the booking process.",
  },
  {
    question: "Can I get a decor price without going through a consultation?",
    answer:
      "At Havilah Florals Decor, we create tailored wedding decor experiences rather than offer one-size-fits-all pricing. Our recommendations and proposals are developed around your event brief, design preferences, venue, and overall requirements. If you’re simply looking for a price without a conversation about your needs and vision, our approach may not be the right fit. We believe thoughtful design begins with understanding, and that is an important part of the experience we offer.",
  },
  {
    question: "Can I make an inquiry if I haven’t secured my venue yet?",
    answer:
      "Absolutely. You can begin by telling us about your wedding plans, preferred date, estimated guest count, and the kind of experience you hope to create. Your venue plays an important role in the design process because it influences what is possible and how best to approach the decor.",
  },
  {
    question: "Is your consultation paid?",
    answer:
      "Yes. Our consultations are paid; however, the fee is not an additional cost on top of your decor investment. Once you book Havilah Florals Decor for your event, the consultation fee will be deducted from your total decor investment. This allows us to give your celebration the time, attention, and creative consideration it deserves from the very beginning.",
  },
  {
    question:
      "What happens if I pay for a consultation and decide Havilah Florals Decor isn’t the right fit for me?",
    answer:
      "We understand that choosing the right decor team is an important decision, and the consultation gives both of us an opportunity to explore your vision, discuss expectations, and determine whether we are a good fit. The fee covers the time, expertise, and creative input dedicated to your celebration, so it is non-refundable whether or not you proceed. If you book us, the fee will be deducted from your total decor investment; if you do not, it remains payment for the consultation service already provided.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionId = useId();

  return (
    <section
      aria-labelledby={`${sectionId}-heading`}
      className="bg-white px-4 py-20 text-[#1A1A1A] sm:px-6 sm:py-24 md:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-[1240px]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#5F327B]/40" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F327B]">
                Helpful details
              </p>
            </div>

            <h2
              id={`${sectionId}-heading`}
              className="font-serif text-4xl font-normal leading-[1.08] sm:text-5xl"
            >
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base font-light leading-relaxed text-[#5C555B]">
              Before beginning the process, you may have questions about how we
              work, what our services involve, and what to expect. Here are some
              helpful starting points.
            </p>
          </motion.div>

          <div className="border-t border-[#D9D0D6]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const triggerId = `${sectionId}-trigger-${index}`;
              const panelId = `${sectionId}-panel-${index}`;

              return (
                <div key={faq.question} className="border-b border-[#D9D0D6]">
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5F327B] focus-visible:ring-offset-4 sm:py-7"
                    >
                      <span className="font-serif text-xl leading-snug transition-colors duration-300 group-hover:text-[#5F327B] sm:text-[1.35rem]">
                        {faq.question}
                      </span>
                      <motion.span
                        aria-hidden="true"
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#5F327B]/35 text-[#5F327B]"
                      >
                        <Plus size={17} strokeWidth={1.6} />
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.32, ease: [0.4, 0, 0.2, 1] },
                          opacity: { duration: 0.22, ease: "easeOut" },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 pr-10 text-base font-light leading-relaxed text-[#5C555B] sm:pr-16">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
