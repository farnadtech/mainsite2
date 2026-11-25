'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/farnad-data';
import { EASE_OUT_EXPO, SectionReveal, VIEWPORT_ONCE } from '@/components/MotionPrimitives';

interface FAQSectionProps {
  onOpenConsultation: (service?: string) => void;
}

const FAQ_BG_IMAGE = '/assets/aistudio/Futuristic_Neon_FAQ_Chamber_27f50960.png';

export default function FAQSection({ onOpenConsultation }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Full-Bleed Futuristic Neon FAQ Chamber with Seamless Top & Bottom Dissolve */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.28)_10%,rgba(0,0,0,0.75)_20%,black_32%,black_70%,rgba(0,0,0,0.68)_84%,rgba(0,0,0,0.24)_93%,transparent_100%)]"
        aria-hidden="true"
      >
        <Image
          src={FAQ_BG_IMAGE}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />

        {/* Soft luminous center wash preserving readability while keeping side ? panels visible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_58%_at_50%_48%,rgba(247,253,243,0.72)_0%,rgba(243,252,237,0.28)_58%,transparent_84%)]" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <SectionReveal className="text-center max-w-[680px] mx-auto">
          <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
            Frequently Asked Questions
          </span>
          <h2
            id="faq-heading"
            className="mt-3 text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight text-[#112407] text-balance drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)]"
          >
            Everything You Need to Know Before We Start
          </h2>
          <p className="mt-2.5 text-[14.5px] sm:text-[15.5px] leading-[1.6] text-[#284716] font-medium drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)]">
            Clear answers about timelines, ownership, SEO strategy, automation, and post-launch
            support with Farnad Tech.
          </p>
        </SectionReveal>

        {/* Centered Accordion Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.52, delay: 0.08, ease: EASE_OUT_EXPO }}
          className="mt-9 sm:mt-11 max-w-[740px] mx-auto space-y-3.5"
        >
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const triggerId = `faq-trigger-${item.id}`;
            const numLabel = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                className={`rounded-[22px] border backdrop-blur-md transition-all duration-200 ${
                  isOpen
                    ? 'bg-white/96 border-[#49AD0A] shadow-[0_16px_38px_rgba(73,173,10,0.14)]'
                    : 'bg-white/88 border-[#bfe6a5] shadow-[0_8px_24px_rgba(45,108,6,0.06)] hover:bg-white/95 hover:border-[#85d152]'
                }`}
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-4 sm:py-5 text-left cursor-pointer rounded-[22px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49AD0A] focus-visible:ring-offset-2"
                  >
                    <span className="flex items-start sm:items-center gap-3.5 min-w-0">
                      <span
                        className={`text-[13px] font-extrabold tabular-nums shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                          isOpen ? 'text-[#49AD0A]' : 'text-[#3f6b20]'
                        }`}
                      >
                        {numLabel}.
                      </span>
                      <span className="text-[15px] sm:text-[16.5px] font-bold text-[#112407] leading-snug">
                        {item.question}
                      </span>
                    </span>

                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#49AD0A] border-[#49AD0A] text-white shadow-[0_4px_12px_rgba(73,173,10,0.3)]'
                          : 'bg-[#f3fced] border-[#c4e8aa] text-[#286304]'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18, ease: EASE_OUT_EXPO }}
                      className="px-5 sm:px-7 pb-5 pt-0.5"
                    >
                      <div className="border-t border-[#e0f3d2] pt-3.5 pl-0 sm:pl-8 text-[14px] sm:text-[15px] leading-[1.68] text-[#2c4a19]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* Centered Subtle Consultation Prompt above Pedestal */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.45, delay: 0.14, ease: EASE_OUT_EXPO }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center"
        >
          <span className="text-[14px] font-semibold text-[#1f3b0d] drop-shadow-[0_1px_6px_rgba(255,255,255,0.9)]">
            Have a specific project requirement?
          </span>
          <button
            type="button"
            onClick={() => onOpenConsultation('Project Scope & FAQ Inquiry')}
            className="bg-white/95 hover:bg-white text-[#112407] border border-[#9bd873] hover:border-[#49AD0A] text-[13.5px] font-semibold px-5 py-2.5 rounded-full shadow-[0_6px_18px_rgba(73,173,10,0.12)] inline-flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Ask Our Specialists</span>
            <ArrowRight className="w-4 h-4 text-[#49AD0A]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
