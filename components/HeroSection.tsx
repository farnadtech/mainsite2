'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { TECH_STACK } from '@/lib/farnad-data';
import { EASE_OUT_EXPO } from '@/components/MotionPrimitives';

interface HeroSectionProps {
  onOpenConsultation: (service?: string) => void;
}

const HERO_BACKGROUND_IMAGE =
  '/assets/aistudio/Neon_Eco-Tech_Future_Platform_8a25a85c.png';

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#eaf8dd] pt-[92px] sm:pt-[104px] lg:pt-[114px]"
    >
      {/* Full-Bleed Hero Background Artwork */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src={HERO_BACKGROUND_IMAGE}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          priority
          className="object-cover object-[66%_72%] sm:object-[68%_65%] lg:object-center"
          referrerPolicy="no-referrer"
        />

        {/* Subtle luminous readability veil behind copy on left / upper half on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f3fced]/95 via-[#f3fced]/80 via-48% to-transparent lg:bg-gradient-to-r lg:from-[#f3fced]/78 lg:via-[#f3fced]/28 lg:to-transparent" />

        {/* Bottom seamless fade into trusted bar & page canvas */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f3fced] via-[#f3fced]/65 to-transparent" />
      </div>

      {/* Hero Text & CTAs */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-8 lg:pt-14 pb-[215px] sm:pb-[265px] lg:pb-16">
        <div className="max-w-[540px] mx-auto lg:mx-0 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, ease: EASE_OUT_EXPO }}
            className="text-[31px] sm:text-[40px] lg:text-[42px] xl:text-[48px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#112407] drop-shadow-[0_2px_14px_rgba(255,255,255,0.85)]"
          >
            Comprehensive Digital
            <br />
            Solutions for the Future
            <br />
            of <span className="text-[#49AD0A]">Your Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="mt-4 text-[14.5px] sm:text-[15.5px] leading-[1.68] text-[#1f3b0d] max-w-[500px] mx-auto lg:mx-0 font-medium drop-shadow-[0_1px_8px_rgba(255,255,255,0.75)]"
          >
            Farnad Tech is your strategic partner in designing, developing, and scaling
            intelligent online businesses — from custom websites to smart automation and
            AI-powered solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.16, ease: EASE_OUT_EXPO }}
            className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-3.5"
          >
            <button
              type="button"
              onClick={scrollToServices}
              className="farnad-btn-green text-white text-[13.5px] sm:text-[14px] font-semibold px-5 xl:px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Explore Service Ecosystem</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenConsultation()}
              className="bg-white/95 hover:bg-white text-[#112407] border border-[#9bd873] hover:border-[#49AD0A] text-[13.5px] sm:text-[14px] font-semibold px-5 xl:px-6 py-3 rounded-full shadow-[0_6px_18px_rgba(73,173,10,0.12)] inline-flex items-center gap-2 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 text-[#49AD0A]" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating Trust Strip Pill */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.52, delay: 0.22, ease: EASE_OUT_EXPO }}
        className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 pt-1"
      >
        <div className="bg-white/92 backdrop-blur-md rounded-3xl lg:rounded-full border border-[#c6eaa9] shadow-[0_12px_34px_rgba(73,173,10,0.1)] px-5 sm:px-7 xl:px-8 py-3.5 sm:py-4 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6 xl:gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-2xl bg-[#e8f8dd] border border-[#ade189] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#49AD0A]" />
            </div>
            <p className="text-[13.5px] xl:text-[14.5px] font-bold text-[#112407] leading-snug text-center sm:text-left">
              Trusted by Leading Businesses
              <br className="hidden sm:inline" /> Worldwide
            </p>
          </div>

          <div className="hidden lg:block w-px h-9 bg-[#cdeab7] shrink-0" aria-hidden="true" />

          <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-5 xl:gap-6 flex-1 justify-between w-full lg:w-auto">
            <span className="text-[12.5px] xl:text-[13px] font-semibold text-[#355422] whitespace-nowrap">
              Built on Modern, Reliable Technologies
            </span>

            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 sm:gap-6 lg:gap-5 xl:gap-8">
              {TECH_STACK.map((tech) => (
                <div
                  key={tech.name}
                  title={tech.name}
                  className="w-8 h-8 xl:w-9 xl:h-9 flex items-center justify-center shrink-0 transition-transform duration-150 hover:scale-110"
                >
                  <Image
                    src={tech.image}
                    alt={tech.name}
                    width={36}
                    height={36}
                    loading="eager"
                    className="w-7 h-7 xl:w-8 xl:h-8 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
