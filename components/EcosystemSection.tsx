'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ECOSYSTEM_SERVICES, ServiceItem } from '@/lib/farnad-data';
import { EASE_OUT_EXPO, SectionReveal, VIEWPORT_ONCE } from '@/components/MotionPrimitives';

interface EcosystemSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

const CENTER_ORB_IMAGE =
  '/assets/aistudio/ChatGPT_Image_Nov_25__2026__10_33_24_AM-1_4f9ec0d9.png';

export default function EcosystemSection({ onSelectService }: EcosystemSectionProps) {
  const leftServices = ECOSYSTEM_SERVICES.filter((s) => s.side === 'left');
  const rightServices = ECOSYSTEM_SERVICES.filter((s) => s.side === 'right');

  return (
    <section
      id="services"
      className="relative py-14 lg:py-20 overflow-hidden bg-[radial-gradient(ellipse_88%_72%_at_50%_54%,rgba(255,255,255,0.88)_0%,rgba(232,248,221,0.52)_56%,transparent_88%)]"
    >
      {/* Subtle silk green wave backdrop */}
      <div
        className="pointer-events-none absolute inset-0 farnad-wave-ribbon opacity-90"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-[900px] mx-auto">
          <span className="inline-block farnad-pill-badge text-[12.5px] sm:text-[13px] font-bold px-5 py-1.5 rounded-full">
            Farnad Tech Service Ecosystem
          </span>
          <h2 className="mt-3 text-[30px] sm:text-[38px] lg:text-[44px] font-extrabold tracking-tight text-[#112407] text-balance leading-[1.15]">
            A Complete Digital Ecosystem
          </h2>
          <p className="mt-2.5 text-[14.5px] sm:text-[15.5px] leading-relaxed text-[#355422]">
            From online presence to intelligent automation and sustainable growth, everything is
            right alongside your business.
          </p>
        </SectionReveal>

        {/* Desktop Orbital Ecosystem Stage */}
        <div className="hidden lg:block relative max-w-[1180px] mx-auto mt-10 xl:mt-12 min-h-[480px] xl:min-h-[540px]">
          {/* Concentric floor light ripples beneath central pedestal */}
          <div
            className="pointer-events-none absolute left-1/2 bottom-2 -translate-x-1/2 w-[520px] xl:w-[660px] h-[155px] xl:h-[185px] rounded-[50%] border border-[#64cf1e]/50 bg-[radial-gradient(ellipse_at_center,rgba(73,173,10,0.24)_0%,rgba(128,224,64,0.09)_55%,transparent_76%)]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 bottom-6 -translate-x-1/2 w-[400px] xl:w-[500px] h-[112px] xl:h-[135px] rounded-[50%] border border-[#49AD0A]/50"
            aria-hidden="true"
          />

          {/* Glowing curved energy beams & junction dots connecting center pedestal to all 6 nodes */}
          <svg
            viewBox="0 0 1200 520"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 w-full h-full z-10"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ecoBeamLeft" x1="100%" y1="50%" x2="0%" y2="50%">
                <stop offset="0%" stopColor="#49AD0A" stopOpacity="0.96" />
                <stop offset="55%" stopColor="#8be848" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#65cf1e" stopOpacity="0.58" />
              </linearGradient>
              <linearGradient id="ecoBeamRight" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#49AD0A" stopOpacity="0.96" />
                <stop offset="55%" stopColor="#8be848" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#65cf1e" stopOpacity="0.58" />
              </linearGradient>
              <filter id="ecoGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left 3 curved beams extending cleanly behind each pedestal */}
            <path
              d="M 505 258 Q 435 175 340 105"
              fill="none"
              stroke="url(#ecoBeamLeft)"
              strokeWidth="2.4"
              filter="url(#ecoGlow)"
            />
            <path
              d="M 480 305 Q 370 268 235 272"
              fill="none"
              stroke="url(#ecoBeamLeft)"
              strokeWidth="2.4"
              filter="url(#ecoGlow)"
            />
            <path
              d="M 515 355 Q 435 396 340 434"
              fill="none"
              stroke="url(#ecoBeamLeft)"
              strokeWidth="2.4"
              filter="url(#ecoGlow)"
            />

            {/* Right 3 curved beams extending cleanly behind each pedestal */}
            <path
              d="M 695 258 Q 765 175 860 105"
              fill="none"
              stroke="url(#ecoBeamRight)"
              strokeWidth="2.4"
              filter="url(#ecoGlow)"
            />
            <path
              d="M 720 305 Q 830 268 965 272"
              fill="none"
              stroke="url(#ecoBeamRight)"
              strokeWidth="2.4"
              filter="url(#ecoGlow)"
            />
            <path
              d="M 685 355 Q 765 396 860 434"
              fill="none"
              stroke="url(#ecoBeamRight)"
              strokeWidth="2.4"
              filter="url(#ecoGlow)"
            />

            {/* Exact Bezier t=0.5 luminous energy node dots along each curve */}
            {[
              [429, 178],
              [364, 278],
              [431, 395],
              [771, 178],
              [836, 278],
              [769, 395],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="7.5" fill="#7be334" opacity="0.55" />
                <circle cx={cx} cy={cy} r="3.6" fill="#ffffff" />
              </g>
            ))}
          </svg>

          {/* Central Glowing FT Orb + Layered Illuminated Pedestal Base */}
          <div className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 w-[265px] h-[305px] xl:w-[335px] xl:h-[380px] flex flex-col items-center justify-center z-20 pointer-events-none">
            {/* Soft aura behind sphere */}
            <div
              className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(73,173,10,0.28)_0%,rgba(73,173,10,0.08)_55%,transparent_76%)]"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.58, delay: 0.08, ease: EASE_OUT_EXPO }}
              className="relative w-[240px] h-[240px] xl:w-[310px] xl:h-[310px] z-20"
            >
              <Image
                src={CENTER_ORB_IMAGE}
                alt="Farnad Tech Digital Ecosystem Core"
                fill
                sizes="(max-width: 1280px) 240px, 310px"
                loading="eager"
                className="object-contain drop-shadow-[0_18px_32px_rgba(73,173,10,0.3)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Illuminated White & Brand-Green Layered 3D Pedestal Disc nested snugly under center orb */}
            <div
              className="relative -mt-14 xl:-mt-[72px] w-[250px] xl:w-[315px] h-[58px] xl:h-[70px] z-10 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 bottom-0 h-[38px] xl:h-[46px] rounded-[50%] bg-gradient-to-b from-[#ffffff] via-[#e4f6d7] to-[#bce79c] border-b-[5px] border-[#49AD0A] shadow-[0_14px_34px_rgba(73,173,10,0.45)]" />
              <div className="absolute inset-x-3 bottom-2.5 h-[29px] xl:h-[35px] rounded-[50%] bg-gradient-to-b from-[#fafff6] to-[#d9f5c5] border border-[#6cd426] shadow-[0_0_24px_rgba(73,173,10,0.62)]" />
              <div className="absolute inset-x-9 bottom-4 h-[15px] xl:h-[19px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(128,228,60,0.85)_0%,rgba(255,255,255,0.92)_65%,transparent_100%)]" />
            </div>
          </div>

          {/* 3 Left Nodes + 3 Right Nodes arranged in exact elliptical reference layout */}
          <div className="relative z-30 grid grid-cols-2 lg:gap-x-[230px] xl:gap-x-[300px] gap-y-4 py-1">
            {/* Left Column */}
            <div className="flex flex-col justify-between gap-4 xl:gap-5">
              {leftServices.map((svc, idx) => {
                const indentClass =
                  idx === 0
                    ? 'lg:pl-10 lg:pr-0 xl:pl-16 xl:pr-0'
                    : idx === 1
                      ? 'lg:pl-0 lg:pr-10 xl:pl-0 xl:pr-16'
                      : 'lg:pl-10 lg:pr-0 xl:pl-16 xl:pr-0';
                return (
                  <motion.button
                    key={svc.id}
                    type="button"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.48, delay: 0.08 + idx * 0.08, ease: EASE_OUT_EXPO }}
                    onClick={() => onSelectService(svc)}
                    className={`group flex items-center justify-end gap-3.5 xl:gap-4 text-right ${indentClass} cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49AD0A] rounded-2xl`}
                  >
                    <div className="max-w-[185px] xl:max-w-[225px]">
                      <h3 className="text-[15.5px] xl:text-[17.5px] font-extrabold text-[#112407] leading-snug group-hover:text-[#398a06] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="mt-1 text-[12px] xl:text-[13px] leading-[1.45] text-[#355422]">
                        {svc.description}
                      </p>
                    </div>
                    <div className="relative w-[132px] h-[132px] xl:w-[162px] xl:h-[162px] shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:-translate-y-1">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 1280px) 132px, 162px"
                        loading="eager"
                        className="object-contain drop-shadow-[0_14px_22px_rgba(73,173,10,0.2)]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between gap-4 xl:gap-5">
              {rightServices.map((svc, idx) => {
                const indentClass =
                  idx === 0
                    ? 'lg:pr-10 lg:pl-0 xl:pr-16 xl:pl-0'
                    : idx === 1
                      ? 'lg:pr-0 lg:pl-10 xl:pr-0 xl:pl-16'
                      : 'lg:pr-10 lg:pl-0 xl:pr-16 xl:pl-0';
                return (
                  <motion.button
                    key={svc.id}
                    type="button"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.48, delay: 0.08 + idx * 0.08, ease: EASE_OUT_EXPO }}
                    onClick={() => onSelectService(svc)}
                    className={`group flex items-center justify-start gap-3.5 xl:gap-4 text-left ${indentClass} cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49AD0A] rounded-2xl`}
                  >
                    <div className="relative w-[132px] h-[132px] xl:w-[162px] xl:h-[162px] shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:-translate-y-1">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 1280px) 132px, 162px"
                        loading="eager"
                        className="object-contain drop-shadow-[0_14px_22px_rgba(73,173,10,0.2)]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="max-w-[195px] xl:max-w-[235px]">
                      <h3 className="text-[15.5px] xl:text-[17.5px] font-extrabold text-[#112407] leading-snug group-hover:text-[#398a06] transition-colors">
                        {svc.title}
                      </h3>
                      <p className="mt-1 text-[12px] xl:text-[13px] leading-[1.45] text-[#355422]">
                        {svc.description}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tablet & Mobile Clean Responsive Stage */}
        <div className="lg:hidden mt-8 space-y-7">
          {/* Centered Hub Orb + Illuminated Pedestal */}
          <div className="relative w-[220px] sm:w-[260px] mx-auto flex flex-col items-center">
            <div
              className="pointer-events-none absolute inset-2 rounded-full bg-[radial-gradient(circle,rgba(73,173,10,0.26)_0%,rgba(73,173,10,0.08)_55%,transparent_75%)]"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
              className="relative w-[195px] h-[195px] sm:w-[230px] sm:h-[230px] z-20"
            >
              <Image
                src={CENTER_ORB_IMAGE}
                alt="Farnad Tech Digital Ecosystem Core"
                fill
                sizes="(max-width: 640px) 195px, 230px"
                loading="eager"
                className="object-contain drop-shadow-[0_16px_26px_rgba(73,173,10,0.26)]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div
              className="relative -mt-8 w-[185px] sm:w-[215px] h-[44px] sm:h-[50px] z-10 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="absolute inset-x-0 bottom-0 h-[28px] sm:h-[32px] rounded-[50%] bg-gradient-to-b from-[#ffffff] via-[#e4f6d7] to-[#bce79c] border-b-[4px] border-[#49AD0A] shadow-[0_12px_26px_rgba(73,173,10,0.42)]" />
              <div className="absolute inset-x-3 bottom-2 h-[20px] sm:h-[24px] rounded-[50%] bg-gradient-to-b from-[#fafff6] to-[#d9f5c5] border border-[#6cd426] shadow-[0_0_18px_rgba(73,173,10,0.55)]" />
            </div>
          </div>

          {/* Responsive Cards (1-col Mobile, 2-col Tablet) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {ECOSYSTEM_SERVICES.map((svc, idx) => (
              <motion.button
                key={svc.id}
                type="button"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.42, delay: idx * 0.05, ease: EASE_OUT_EXPO }}
                onClick={() => onSelectService(svc)}
                className="group bg-white/85 backdrop-blur-md rounded-[22px] border border-[#bfe6a5] shadow-[0_8px_24px_rgba(73,173,10,0.08)] p-4 sm:p-5 flex items-center gap-4 text-left hover:border-[#49AD0A] hover:bg-white transition-all cursor-pointer"
              >
                <div className="relative w-[96px] h-[96px] sm:w-[112px] sm:h-[112px] shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    loading="eager"
                    className="object-contain drop-shadow-[0_10px_16px_rgba(73,173,10,0.18)]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15.5px] font-extrabold text-[#112407] leading-snug group-hover:text-[#398a06] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-[#355422] leading-snug">
                    {svc.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
