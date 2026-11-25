'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Smile, Trophy, Users } from 'lucide-react';
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from '@/components/MotionPrimitives';

interface AboutStatsSectionProps {
  onOpenAboutModal?: () => void;
}

const TROPHY_12_IMAGE =
  '/assets/aistudio/ChatGPT_Image_Nov_25__2026__11_28_32_AM-1_e141bfb7.png';
const BUILDING_IMAGE =
  '/assets/aistudio/ChatGPT_Image_Nov_25__2026__11_28_34_AM-2_c4f0c7f5.png';

export default function AboutStatsSection({ onOpenAboutModal }: AboutStatsSectionProps) {
  return (
    <section
      id="about"
      className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden bg-[radial-gradient(ellipse_90%_72%_at_50%_46%,rgba(255,255,255,0.72)_0%,rgba(232,248,221,0.42)_54%,transparent_86%)]"
    >
      {/* Subtle silk green wave backdrop */}
      <div
        className="pointer-events-none absolute inset-0 farnad-wave-ribbon opacity-85"
        aria-hidden="true"
      />

      {/* Main 3-Column About Showcase */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.24fr_0.9fr] items-center gap-6 lg:gap-4 xl:gap-6">
          {/* Left: 3D "12 Years of Experience" Monument */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.56, ease: EASE_OUT_EXPO }}
            className="relative flex items-center justify-center"
          >
            {/* Glowing circular light ripples beneath pedestal */}
            <div
              className="pointer-events-none absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 w-[290px] sm:w-[350px] lg:w-[355px] h-[72px] rounded-[50%] border border-[#65cf1e]/40 bg-[radial-gradient(ellipse_at_center,rgba(73,173,10,0.22)_0%,transparent_72%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 w-[340px] sm:w-[410px] lg:w-[415px] h-[94px] rounded-[50%] border border-[#8ce052]/30"
              aria-hidden="true"
            />

            {/* Strict aspect-square container locks English plaque directly over pedestal plate */}
            <div className="relative w-[275px] sm:w-[325px] lg:w-[325px] xl:w-[365px] aspect-square mx-auto drop-shadow-[0_18px_28px_rgba(73,173,10,0.16)]">
              <Image
                src={TROPHY_12_IMAGE}
                alt="12 Years of Experience"
                fill
                sizes="(max-width: 640px) 275px, (max-width: 1024px) 325px, 365px"
                loading="eager"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
              {/* Clean English plaque aligned strictly over the pedestal front plate */}
              <div className="absolute top-[65.5%] left-1/2 -translate-x-1/2 w-[45%] h-[11.5%] rounded-[14px] bg-gradient-to-b from-[#f9fff5] via-[#ebf9e1] to-[#dbf3ca] border border-[#9fdb75] shadow-[0_4px_16px_rgba(73,173,10,0.26),inset_0_1px_1px_rgba(255,255,255,0.95)] flex items-center justify-center px-2">
                <span className="text-[11px] sm:text-[12.5px] lg:text-[12.5px] xl:text-[13.5px] font-extrabold tracking-tight text-[#173604] whitespace-nowrap">
                  Years of Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Center: About Copy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.52, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="text-center lg:text-left px-1 sm:px-4 lg:px-2 max-w-[540px] mx-auto"
          >
            <span className="inline-block farnad-pill-badge text-[12.5px] sm:text-[13px] font-bold px-4.5 py-1.5 rounded-full">
              About Farnad Tech
            </span>

            <h2 className="mt-3 text-[28px] sm:text-[33px] lg:text-[30px] xl:text-[35px] font-extrabold leading-[1.15] tracking-tight text-[#112407] text-balance">
              12 Years of Experience, Innovation, and Trust
            </h2>

            <p className="mt-3 text-[14.5px] sm:text-[15px] leading-[1.62] text-[#355422]">
              With over 12 years of specialized experience in web, mobile, and digital solutions,
              we&apos;ve helped hundreds of businesses grow, innovate, and achieve lasting results in
              the digital world.
            </p>

            <div className="mt-5 flex justify-center lg:justify-start">
              <Link
                href="/about"
                className="bg-white/95 hover:bg-white text-[#112407] border border-[#9bd873] hover:border-[#49AD0A] text-[13.5px] sm:text-[14px] font-bold px-6 py-2.5 rounded-full shadow-[0_8px_20px_rgba(73,173,10,0.12)] inline-flex items-center gap-2 transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#49AD0A]" />
              </Link>
            </div>
          </motion.div>

          {/* Right: 3D Farnad Tech Glass Headquarters Building */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.56, delay: 0.12, ease: EASE_OUT_EXPO }}
            className="relative flex items-center justify-center"
          >
            {/* Glowing floor ripples beneath building platform */}
            <div
              className="pointer-events-none absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 w-[260px] sm:w-[320px] lg:w-[310px] h-[64px] rounded-[50%] border border-[#65cf1e]/40 bg-[radial-gradient(ellipse_at_center,rgba(73,173,10,0.22)_0%,transparent_72%)]"
              aria-hidden="true"
            />
            <div className="relative w-[245px] sm:w-[300px] lg:w-[295px] xl:w-[335px] aspect-square mx-auto drop-shadow-[0_18px_28px_rgba(73,173,10,0.15)]">
              <Image
                src={BUILDING_IMAGE}
                alt="Farnad Tech headquarters building"
                fill
                sizes="(max-width: 640px) 245px, (max-width: 1024px) 300px, 335px"
                loading="eager"
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal KPI & Stats Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.52, delay: 0.14, ease: EASE_OUT_EXPO }}
        className="relative z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-4"
      >
        <div className="bg-white/94 backdrop-blur-md rounded-[26px] lg:rounded-[34px] border border-[#bfe6a5] shadow-[0_14px_38px_rgba(73,173,10,0.11)] overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_250px]">
          {/* Stat 1 */}
          <div className="flex items-center justify-center lg:justify-start gap-3.5 px-6 py-4.5 sm:py-5 border-b sm:border-r border-[#daf2ca]">
            <Trophy className="w-8 h-8 text-[#49AD0A] shrink-0 stroke-[1.8]" />
            <div>
              <div className="text-[24px] xl:text-[26px] font-extrabold text-[#112407] leading-none tabular-nums">
                +350
              </div>
              <div className="text-[12.5px] font-medium text-[#3f612b] mt-1">
                Completed Projects
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center justify-center lg:justify-start gap-3.5 px-6 py-4.5 sm:py-5 border-b lg:border-r border-[#daf2ca]">
            <Smile className="w-8 h-8 text-[#49AD0A] shrink-0 stroke-[1.8]" />
            <div>
              <div className="text-[24px] xl:text-[26px] font-extrabold text-[#112407] leading-none tabular-nums">
                +96%
              </div>
              <div className="text-[12.5px] font-medium text-[#3f612b] mt-1">
                Client Satisfaction
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center justify-center lg:justify-start gap-3.5 px-6 py-4.5 sm:py-5 border-b sm:border-b-0 sm:border-r border-[#daf2ca]">
            <Calendar className="w-8 h-8 text-[#49AD0A] shrink-0 stroke-[1.8]" />
            <div>
              <div className="text-[24px] xl:text-[26px] font-extrabold text-[#112407] leading-none tabular-nums">
                +12
              </div>
              <div className="text-[12.5px] font-medium text-[#3f612b] mt-1">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center justify-center lg:justify-start gap-3.5 px-6 py-4.5 sm:py-5 border-b sm:border-b-0 border-[#daf2ca]">
            <Users className="w-8 h-8 text-[#49AD0A] shrink-0 stroke-[1.8]" />
            <div>
              <div className="text-[24px] xl:text-[26px] font-extrabold text-[#112407] leading-none tabular-nums">
                +20
              </div>
              <div className="text-[12.5px] font-medium text-[#3f612b] mt-1">
                Specialists &amp; Experts
              </div>
            </div>
          </div>

          {/* Rightmost Sweeping Curved #49AD0A CTA Cap */}
          <Link
            href="/about"
            className="sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-[#62cd1c] via-[#49AD0A] to-[#266102] hover:from-[#70dc26] hover:via-[#53bf0d] hover:to-[#2f7504] text-white px-6 py-4.5 sm:py-5 lg:rounded-tl-[48px] lg:rounded-bl-[14px] shadow-[inset_0_1px_1px_rgba(216,250,192,0.45)] flex items-center justify-center gap-2.5 text-center lg:text-left font-bold text-[15px] leading-tight transition-all cursor-pointer"
          >
            <span>
              Our Achievements
              <br className="hidden lg:inline" /> at a Glance
            </span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
