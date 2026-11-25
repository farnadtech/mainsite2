'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRICING_PLANS } from '@/lib/farnad-data';
import { EASE_OUT_EXPO, SectionReveal, VIEWPORT_ONCE } from '@/components/MotionPrimitives';

interface PricingSectionProps {
  onOrderService: (serviceName: string) => void;
}

export default function PricingSection({ onOrderService }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative py-12 lg:py-16">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal className="text-center max-w-[680px] mx-auto">
          <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
            Our Pricing Plans
          </span>
          <h2 className="mt-3 text-[30px] sm:text-[36px] lg:text-[40px] font-extrabold tracking-tight text-[#112407] text-balance">
            Flexible and Transparent Packages
          </h2>
          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
            Choose the plan that best fits your business needs and build your digital presence with
            confidence.
          </p>
        </SectionReveal>

        {/* 3-Column Pricing Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            if (plan.featured) {
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 24, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.54, delay: 0.08 + idx * 0.09, ease: EASE_OUT_EXPO }}
                  className="farnad-featured-card rounded-[26px] p-7 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden lg:-my-2"
                >
                  {/* Top glowing radial accent */}
                  <div
                    className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full bg-[#8be848]/30 blur-2xl"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-center min-h-[42px] text-center">
                      <h3 className="text-[17.5px] sm:text-[18.5px] font-bold leading-snug text-white text-center">
                        {plan.title}
                      </h3>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <span className="inline-block px-6 py-1.5 rounded-full bg-gradient-to-r from-[#6bd424] to-[#49AD0A] text-white text-[18px] font-extrabold shadow-[0_6px_20px_rgba(73,173,10,0.42)] tabular-nums">
                        {plan.price}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3.5 text-[14px]">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-[18px] h-[18px] text-[#9cf060] shrink-0 mt-0.5" />
                          <span className="text-white/95 leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 mt-8">
                    <button
                      type="button"
                      onClick={() => onOrderService(plan.serviceId)}
                      className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#d8f7be] via-[#f2fce9] to-[#bcefa0] hover:from-[#e6fad6] hover:to-[#cef5b8] text-[#173a03] font-bold text-[14.5px] inline-flex items-center justify-center gap-2 shadow-[0_8px_22px_rgba(0,0,0,0.22)] transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span>{plan.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.52, delay: 0.06 + idx * 0.09, ease: EASE_OUT_EXPO }}
                className="farnad-glass-card rounded-[26px] border border-[#bfe6a5] p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-center min-h-[42px] text-center">
                    <h3 className="text-[17.5px] sm:text-[18.5px] font-bold leading-snug text-[#112407] text-center">
                      {plan.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <span className="inline-block px-6 py-1.5 rounded-full bg-gradient-to-r from-[#dcf6c8] to-[#c2ee9f] text-[#1f4f03] text-[18px] font-extrabold tabular-nums">
                      {plan.price}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3.5 text-[14px]">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-[18px] h-[18px] text-[#49AD0A] shrink-0 mt-0.5" />
                        <span className="text-[#2b4a1a] leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => onOrderService(plan.serviceId)}
                    className="w-full py-3 px-5 rounded-full bg-white hover:bg-[#e8f8dd] text-[#112407] border border-[#9bd873] hover:border-[#49AD0A] font-bold text-[14.5px] inline-flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 text-[#49AD0A]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
