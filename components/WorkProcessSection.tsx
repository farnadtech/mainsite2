'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import {
  Check,
  ChevronRight,
  Code2,
  FileCheck2,
  MessageSquareMore,
  Search,
} from 'lucide-react';
import { WORK_PROCESS_STEPS } from '@/lib/farnad-data';
import { SectionReveal } from '@/components/MotionPrimitives';

function MobileSegmentLine({
  progress,
  index,
  maxIndex,
}: {
  progress: MotionValue<number>;
  index: number;
  maxIndex: number;
}) {
  const start = index / maxIndex;
  const end = (index + 1) / maxIndex;
  const segmentScaleY = useTransform(progress, [start, end], [0, 1], { clamp: true });

  return (
    <div
      aria-hidden="true"
      className="sm:hidden pointer-events-none absolute left-[16.5px] top-[42px] -bottom-[58px] w-[3px] rounded-full bg-[#dcefd0] overflow-hidden z-0"
    >
      <motion.div
        style={{ scaleY: segmentScaleY }}
        className="h-full w-full origin-top rounded-full bg-gradient-to-b from-[#6ad422] via-[#49AD0A] to-[#2e7305]"
      />
    </div>
  );
}

export default function WorkProcessSection() {
  const workflowRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [pinnedStep, setPinnedStep] = useState<number | null>(null);
  const [scrollStepIndex, setScrollStepIndex] = useState<number>(WORK_PROCESS_STEPS.length - 1);

  const totalSteps = WORK_PROCESS_STEPS.length;
  const maxIndex = totalSteps - 1;
  const focusedStep = hoveredStep ?? pinnedStep;

  const { scrollYProgress } = useScroll({
    target: workflowRef,
    offset: ['start 92%', 'start 35%'],
  });

  const targetProgress = useMotionValue(0);
  const springProgress = useSpring(targetProgress, {
    stiffness: 170,
    damping: 26,
    mass: 0.75,
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (focusedStep === null) {
      targetProgress.set(latest);
    }
  });

  useMotionValueEvent(springProgress, 'change', (latest) => {
    const computedStep = Math.min(maxIndex, Math.max(0, Math.round(latest * maxIndex)));
    setScrollStepIndex((prev) => (prev === computedStep ? prev : computedStep));
  });

  useEffect(() => {
    if (focusedStep !== null) {
      targetProgress.set(focusedStep / maxIndex);
    } else {
      targetProgress.set(scrollYProgress.get());
    }
  }, [focusedStep, maxIndex, scrollYProgress, targetProgress]);

  const activeCutoffIndex = focusedStep ?? scrollStepIndex;

  const handleToggleStep = (idx: number) => {
    setPinnedStep((prev) => (prev === idx ? null : idx));
  };

  const renderIcon = (type: 'search' | 'check' | 'code' | 'clipboard' | 'message') => {
    const cls = 'w-5 h-5 text-white stroke-[2.2]';
    switch (type) {
      case 'search':
        return <Search className={cls} />;
      case 'check':
        return <Check className={cls} />;
      case 'code':
        return <Code2 className={cls} />;
      case 'clipboard':
        return <FileCheck2 className={cls} />;
      case 'message':
        return <MessageSquareMore className={cls} />;
    }
  };

  return (
    <section id="process" className="relative py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionReveal className="text-center max-w-[700px] mx-auto">
          <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
            Our Work Process
          </span>
          <h2 className="mt-3 text-[30px] sm:text-[36px] lg:text-[40px] font-extrabold tracking-tight text-[#112407] text-balance">
            A Clear Path to a Successful Result
          </h2>
          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
            A simple, transparent, and professional process to turn your idea into a real,
            high-quality product.
          </p>
        </SectionReveal>

        {/* Connected 5-Step Journey */}
        <div
          ref={workflowRef}
          onMouseLeave={() => setHoveredStep(null)}
          className="relative mt-10 lg:mt-12"
        >
          {/* Desktop (lg+): Dynamic Horizontal Milestone Progress Rail */}
          <div className="hidden lg:block relative mb-4" aria-label="Project journey progress">
            {/* Continuous Track Spanning Center of Step 01 to Center of Step 05 */}
            <div
              className="pointer-events-none absolute top-[20px] left-[calc(10%-8px)] right-[calc(10%-8px)] h-[4px] rounded-full bg-[#dcefd0] border border-[#cde7bc]/70 overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                style={{ scaleX: springProgress }}
                className="relative h-full w-full origin-left rounded-full bg-gradient-to-r from-[#8be848] via-[#49AD0A] to-[#2e7305] shadow-[0_0_12px_rgba(73,173,10,0.45)] overflow-hidden"
              >
                {!shouldReduceMotion && (
                  <motion.div
                    aria-hidden="true"
                    animate={{ x: ['-100%', '220%'] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
                    className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/65 to-transparent"
                  />
                )}
              </motion.div>
            </div>

            {/* 5 Column-Aligned Interactive Milestone Nodes */}
            <div className="grid grid-cols-5 gap-5 relative z-10">
              {WORK_PROCESS_STEPS.map((step, idx) => {
                const stepNum = String(idx + 1).padStart(2, '0');
                const isReached = idx <= activeCutoffIndex;
                const isHighlighted =
                  focusedStep === idx || (focusedStep === null && idx === activeCutoffIndex);

                return (
                  <div key={step.id} className="flex flex-col items-center">
                    <button
                      type="button"
                      onMouseEnter={() => setHoveredStep(idx)}
                      onFocus={() => setHoveredStep(idx)}
                      onBlur={() => setHoveredStep(null)}
                      onClick={() => handleToggleStep(idx)}
                      aria-label={`Step ${stepNum}: ${step.title}`}
                      aria-pressed={pinnedStep === idx}
                      className={`relative w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-extrabold tabular-nums transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49AD0A] focus-visible:ring-offset-2 cursor-pointer ${
                        isReached
                          ? 'bg-gradient-to-br from-[#49AD0A] via-[#388807] to-[#266103] text-white shadow-[0_6px_16px_rgba(73,173,10,0.34)]'
                          : 'bg-white text-[#355422] border-2 border-[#bfe6a5] hover:border-[#49AD0A]'
                      } ${isHighlighted ? 'ring-4 ring-[#d4f4bf] scale-110' : 'hover:scale-105'}`}
                    >
                      {stepNum}
                    </button>
                    {/* Vertical Stem Anchoring Milestone Node to Card Below */}
                    <div
                      className={`mt-1.5 w-[2px] h-4 rounded-full transition-colors duration-200 ${
                        isReached
                          ? 'bg-gradient-to-b from-[#49AD0A] to-[#bfe6a5]'
                          : 'bg-[#d5edc5]'
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tablet (sm..lg): Compact Dynamic Horizontal Milestone Stepper */}
          <div className="hidden sm:block lg:hidden relative mb-6 px-2">
            <div
              className="pointer-events-none absolute top-[18px] left-[calc(10%-4px)] right-[calc(10%-4px)] h-[4px] rounded-full bg-[#dcefd0] overflow-hidden"
              aria-hidden="true"
            >
              <motion.div
                style={{ scaleX: springProgress }}
                className="h-full w-full origin-left rounded-full bg-gradient-to-r from-[#8be848] via-[#49AD0A] to-[#2e7305]"
              />
            </div>

            <div className="grid grid-cols-5 gap-2 relative z-10">
              {WORK_PROCESS_STEPS.map((step, idx) => {
                const stepNum = String(idx + 1).padStart(2, '0');
                const isReached = idx <= activeCutoffIndex;
                const isHighlighted =
                  focusedStep === idx || (focusedStep === null && idx === activeCutoffIndex);

                return (
                  <div key={step.id} className="flex flex-col items-center text-center">
                    <button
                      type="button"
                      onClick={() => handleToggleStep(idx)}
                      aria-label={`Step ${stepNum}: ${step.title}`}
                      aria-pressed={pinnedStep === idx}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-extrabold tabular-nums transition-all duration-200 cursor-pointer ${
                        isReached
                          ? 'bg-gradient-to-br from-[#49AD0A] via-[#388807] to-[#266103] text-white shadow-[0_4px_12px_rgba(73,173,10,0.3)]'
                          : 'bg-white text-[#355422] border-2 border-[#bfe6a5]'
                      } ${isHighlighted ? 'ring-4 ring-[#d4f4bf] scale-110' : ''}`}
                    >
                      {stepNum}
                    </button>
                    <span className="mt-1.5 text-[11px] font-semibold text-[#355422] line-clamp-1">
                      {step.title.split('&')[0].trim()}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5 Step Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10 items-stretch">
            {WORK_PROCESS_STEPS.map((step, idx) => {
              const stepNum = String(idx + 1).padStart(2, '0');
              const isLast = idx === totalSteps - 1;
              const isReached = idx <= activeCutoffIndex;
              const isFocusedCard = focusedStep === idx;
              const isDimmedBySelection = focusedStep !== null && idx > focusedStep;
              const isConnectorLit = idx < activeCutoffIndex;

              return (
                <div
                  key={step.id}
                  className={`relative flex items-stretch pl-12 sm:pl-0 ${
                    isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  {/* Mobile (< sm): Exact Center-to-Center Vertical Progress Connector */}
                  {!isLast && (
                    <MobileSegmentLine
                      progress={springProgress}
                      index={idx}
                      maxIndex={maxIndex}
                    />
                  )}

                  {/* Mobile Milestone Node + Horizontal Branch on Left Vertical Rail */}
                  <div className="sm:hidden absolute left-0 top-6 flex items-center z-20">
                    <button
                      type="button"
                      onClick={() => handleToggleStep(idx)}
                      aria-label={`Step ${stepNum}: ${step.title}`}
                      aria-pressed={pinnedStep === idx}
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-extrabold tabular-nums transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#49AD0A] ${
                        isReached
                          ? 'bg-gradient-to-br from-[#49AD0A] via-[#388807] to-[#266103] text-white shadow-[0_4px_12px_rgba(73,173,10,0.3)]'
                          : 'bg-white text-[#355422] border-2 border-[#bfe6a5]'
                      } ${isFocusedCard ? 'ring-4 ring-[#d4f4bf] scale-105' : ''}`}
                    >
                      {stepNum}
                    </button>
                    <span
                      aria-hidden="true"
                      className={`w-3 h-[2px] transition-colors duration-200 ${
                        isReached ? 'bg-[#49AD0A]' : 'bg-[#cde7bc]'
                      }`}
                    />
                  </div>

                  {/* Step Glass Card */}
                  <article
                    onMouseEnter={() => setHoveredStep(idx)}
                    onClick={() => handleToggleStep(idx)}
                    className={`group w-full farnad-glass-card rounded-[24px] border p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer relative z-10 ${
                      isFocusedCard
                        ? 'border-[#49AD0A] -translate-y-1 shadow-[0_18px_38px_rgba(73,173,10,0.18)]'
                        : isReached
                        ? 'border-[#9ed977] hover:border-[#49AD0A] hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(73,173,10,0.16)]'
                        : 'border-[#bfe6a5] hover:border-[#49AD0A] hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(73,173,10,0.14)]'
                    } ${isDimmedBySelection ? 'opacity-75 hover:opacity-100' : 'opacity-100'}`}
                  >
                    <div>
                      {/* Top Row: Luminous Icon Orb + Editorial Step Index */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="relative flex items-center justify-center">
                          <div
                            className={`pointer-events-none absolute -inset-1.5 rounded-2xl bg-[#49AD0A]/20 blur-md transition-opacity duration-200 ${
                              isFocusedCard
                                ? 'opacity-100'
                                : 'opacity-60 group-hover:opacity-100'
                            }`}
                            aria-hidden="true"
                          />
                          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6ad422] via-[#49AD0A] to-[#2e7305] shadow-[0_8px_20px_rgba(73,173,10,0.34)] ring-4 ring-[#e8f8dd] flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                            {renderIcon(step.iconType)}
                          </div>
                        </div>

                        <span
                          className={`text-[24px] font-extrabold tracking-tight tabular-nums transition-colors duration-200 select-none ${
                            isFocusedCard
                              ? 'text-[#49AD0A]'
                              : isReached
                              ? 'text-[#49AD0A]/65 group-hover:text-[#49AD0A]'
                              : 'text-[#49AD0A]/30 group-hover:text-[#49AD0A]/65'
                          }`}
                        >
                          {stepNum}
                        </span>
                      </div>

                      <h3 className="mt-5 text-[16px] font-extrabold text-[#112407] leading-snug">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-[1.6] text-[#355422]">
                        {step.description}
                      </p>
                    </div>

                    {/* GPU-Composited Bottom Progress Accent */}
                    <div
                      className={`mt-5 h-1 w-10 rounded-full origin-left bg-gradient-to-r from-[#6ad422] to-[#49AD0A] transition-transform duration-200 ${
                        isFocusedCard ? 'scale-x-150' : 'scale-x-100 group-hover:scale-x-150'
                      }`}
                      aria-hidden="true"
                    />
                  </article>

                  {/* Desktop (lg+): Directional Luminous Bridge Chevron Between Cards */}
                  {!isLast && (
                    <div
                      className="hidden lg:flex pointer-events-none absolute top-[44px] -right-[24px] z-20 items-center justify-center"
                      aria-hidden="true"
                    >
                      <div
                        className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isConnectorLit
                            ? 'bg-[#eafae0] border-[#49AD0A]/65 text-[#2c6b05] shadow-[0_4px_12px_rgba(73,173,10,0.22)] scale-105'
                            : 'bg-white/95 border-[#cde7bc] text-[#6d8f56]'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
