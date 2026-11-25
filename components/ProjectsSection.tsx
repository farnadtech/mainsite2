'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import {
  CLIENT_PROJECTS,
  cycleIndex,
  getContinuousRollerOffset,
  ProjectItem,
} from '@/lib/farnad-data';
import { SectionReveal } from '@/components/MotionPrimitives';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const PROJECTS_BG_IMAGE =
  '/assets/aistudio/Futuristic_Green_City_Pedestal_Stage_9499a319.png';

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const total = CLIENT_PROJECTS.length;
  // Index 3 = "Harajio Script" centered initially
  const [activeIndex, setActiveIndex] = useState(3);

  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const badgeRefs = useRef<(SVGSVGElement | null)[]>([]);

  // Continuous roller state (supports infinite wrapping in either direction)
  const posRef = useRef<number>(3);
  const targetPosRef = useRef<number | null>(null);
  const isHoveredRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartPosRef = useRef<number>(3);
  const dragDistanceRef = useRef<number>(0);
  const lastDragXRef = useRef<number>(0);
  const lastDragTimeRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const interactionPausedRef = useRef<boolean>(false);
  const pauseTimerRef = useRef<number | null>(null);
  const snapTimerRef = useRef<number | null>(null);
  const activeIdxRef = useRef<number>(3);

  const scheduleResumeAutoRoll = useCallback((ms: number) => {
    interactionPausedRef.current = true;
    if (pauseTimerRef.current !== null) {
      window.clearTimeout(pauseTimerRef.current);
    }
    pauseTimerRef.current = window.setTimeout(() => {
      interactionPausedRef.current = false;
    }, ms);
  }, []);

  const applyRollerTransforms = useCallback(
    (pos: number) => {
      const vw = typeof window !== 'undefined' ? window.innerWidth : 1440;
      const isXl = vw >= 1280;
      const isLg = vw >= 1024 && vw < 1280;
      const isMd = vw >= 640 && vw < 1024;

      const d1 = isXl ? 236 : isLg ? 192 : isMd ? 220 : 235;
      const d2 = isXl ? 166 : isLg ? 136 : isMd ? 160 : 210;

      for (let idx = 0; idx < total; idx++) {
        const cardEl = cardRefs.current[idx];
        if (!cardEl) continue;

        const rel = getContinuousRollerOffset(idx, pos, total);
        const absRel = Math.abs(rel);
        const sign = rel < 0 ? -1 : 1;

        const x =
          sign *
          (Math.min(absRel, 1) * d1 + Math.max(0, absRel - 1) * d2);

        const centerBlend = Math.max(0, 1 - absRel / 0.58);
        const baseScale = isLg
          ? 0.56 + 0.44 * Math.pow(Math.max(0, 1 - absRel / 3.4), 0.85)
          : 0.52 + 0.48 * Math.pow(Math.max(0, 1 - absRel / 3.3), 0.82);
        const scale = baseScale + centerBlend * 0.06;

        // Fade seamlessly near the wrap-around seam (+/-3.5) so cards never jump visually
        const edgeFadeStart = vw < 640 ? 1.55 : 2.75;
        const edgeFadeEnd = vw < 640 ? 2.15 : 3.22;
        const opacity =
          absRel > edgeFadeStart
            ? Math.max(0, (edgeFadeEnd - absRel) / (edgeFadeEnd - edgeFadeStart))
            : 1;

        const yLift = -centerBlend * 8 + Math.min(absRel, 3) * 3;
        const zIndex = 40 - Math.round(absRel * 10);

        cardEl.style.transform = `translate3d(${x.toFixed(1)}px, ${yLift.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`;
        cardEl.style.opacity = opacity.toFixed(3);
        cardEl.style.zIndex = String(zIndex);
        cardEl.style.pointerEvents = opacity < 0.15 ? 'none' : 'auto';

        const glowEl = glowRefs.current[idx];
        if (glowEl) {
          glowEl.style.opacity = centerBlend.toFixed(3);
        }

        const badgeEl = badgeRefs.current[idx];
        if (badgeEl) {
          badgeEl.style.opacity = centerBlend.toFixed(3);
        }
      }

      const nearest = cycleIndex(Math.round(pos), 0, total);
      if (nearest !== activeIdxRef.current) {
        activeIdxRef.current = nearest;
        setActiveIndex(nearest);
      }
    },
    [total]
  );

  // Main 60fps continuous infinite roller animation loop
  useEffect(() => {
    applyRollerTransforms(posRef.current);

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let rafId = 0;
    let prevTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min(0.05, Math.max(0.001, (now - prevTime) / 1000));
      prevTime = now;

      if (!isDraggingRef.current) {
        if (targetPosRef.current !== null) {
          const diff = targetPosRef.current - posRef.current;
          if (Math.abs(diff) < 0.002) {
            posRef.current = targetPosRef.current;
            targetPosRef.current = null;
          } else {
            posRef.current += diff * Math.min(1, dt * 8.5);
          }
        } else if (
          !prefersReduced &&
          !isHoveredRef.current &&
          !interactionPausedRef.current
        ) {
          // Smooth infinite drum roll (~4.2s per card)
          posRef.current += dt * 0.24;
        }
      }

      applyRollerTransforms(posRef.current);
      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    const handleResize = () => applyRollerTransforms(posRef.current);
    window.addEventListener('resize', handleResize);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      if (snapTimerRef.current !== null) {
        window.clearTimeout(snapTimerRef.current);
      }
      if (pauseTimerRef.current !== null) {
        window.clearTimeout(pauseTimerRef.current);
      }
    };
  }, [applyRollerTransforms]);

  // Support horizontal trackpad / shift+wheel scrolling smoothly on the roller stage
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
      if (!isHorizontal) return;

      e.preventDefault();
      const rawDelta = Math.abs(e.deltaX) >= Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      targetPosRef.current = null;
      posRef.current += rawDelta / 220;
      scheduleResumeAutoRoll(2600);
      applyRollerTransforms(posRef.current);

      if (snapTimerRef.current !== null) {
        window.clearTimeout(snapTimerRef.current);
      }
      snapTimerRef.current = window.setTimeout(() => {
        targetPosRef.current = Math.round(posRef.current);
      }, 140);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [applyRollerTransforms, scheduleResumeAutoRoll]);

  const handleRollBy = (delta: number) => {
    const base =
      targetPosRef.current !== null
        ? Math.round(targetPosRef.current)
        : Math.round(posRef.current);
    targetPosRef.current = base + delta;
    scheduleResumeAutoRoll(3400);
  };

  const handleRollToIndex = (idx: number) => {
    const currentRounded = Math.round(posRef.current);
    const shortestDiff = getContinuousRollerOffset(idx, currentRounded, total);
    targetPosRef.current = currentRounded + shortestDiff;
    scheduleResumeAutoRoll(3400);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    isDraggingRef.current = true;
    targetPosRef.current = null;
    dragStartXRef.current = e.clientX;
    dragStartPosRef.current = posRef.current;
    dragDistanceRef.current = 0;
    lastDragXRef.current = e.clientX;
    lastDragTimeRef.current = e.timeStamp;
    velocityRef.current = 0;
    scheduleResumeAutoRoll(3600);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - dragStartXRef.current;
    dragDistanceRef.current = Math.max(dragDistanceRef.current, Math.abs(dx));

    const elapsed = Math.max(8, e.timeStamp - lastDragTimeRef.current);
    velocityRef.current = ((lastDragXRef.current - e.clientX) / elapsed) * 16;
    lastDragXRef.current = e.clientX;
    lastDragTimeRef.current = e.timeStamp;

    posRef.current = dragStartPosRef.current - dx / 210;
    applyRollerTransforms(posRef.current);
  };

  const handleEndDrag = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    scheduleResumeAutoRoll(3200);
    const inertiaOffset = Math.max(-1.2, Math.min(1.2, velocityRef.current / 28));
    targetPosRef.current = Math.round(posRef.current + inertiaOffset);
  };

  return (
    <section
      id="projects"
      className="relative pt-14 pb-16 lg:pt-20 lg:pb-24 overflow-hidden"
    >
      {/* Full-Bleed Futuristic Pedestal Stage with Seamless Top/Bottom Dissolve into Canvas */}
      <div
        className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.45)_13%,black_29%,black_78%,rgba(0,0,0,0.42)_92%,transparent_100%)]"
        aria-hidden="true"
      >
        <Image
          src={PROJECTS_BG_IMAGE}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Gentle sky mist behind header text without creating any top color seam */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_40%_at_50%_18%,rgba(243,252,237,0.62)_0%,transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionReveal className="text-center max-w-[680px] mx-auto">
          <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
            Featured Projects
          </span>
          <h2 className="mt-3 text-[30px] sm:text-[36px] lg:text-[40px] font-extrabold tracking-tight text-[#112407] text-balance drop-shadow-[0_2px_10px_rgba(255,255,255,0.85)]">
            A Selection of Our Client Projects
          </h2>
          <p className="mt-2 text-[14.5px] sm:text-[15.5px] font-medium text-[#2b4a1a] drop-shadow-[0_1px_6px_rgba(255,255,255,0.8)]">
            A look at some of our successful web, mobile, and digital ecosystem projects.
          </p>
        </SectionReveal>

        {/* Infinite Scrollable Perspective Roller Stage */}
        <div
          ref={stageRef}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
            handleEndDrag();
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handleEndDrag}
          onPointerCancel={handleEndDrag}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client projects infinite roller"
          className="relative mt-8 lg:mt-10 h-[288px] sm:h-[296px] lg:h-[296px] select-none touch-pan-y cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {CLIENT_PROJECTS.map((project, idx) => (
              <button
                key={project.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                type="button"
                onClick={() => {
                  if (dragDistanceRef.current >= 8) return;
                  const rel = getContinuousRollerOffset(idx, posRef.current, total);
                  if (Math.abs(rel) < 0.35) {
                    onSelectProject(project);
                  } else {
                    handleRollToIndex(idx);
                  }
                }}
                aria-label={`${project.name} - ${project.category}`}
                className="group absolute left-1/2 top-1/2 -ml-[124px] sm:-ml-[129px] lg:-ml-[108px] xl:-ml-[132px] -mt-[118px] w-[248px] sm:w-[258px] lg:w-[216px] xl:w-[264px] rounded-[22px] text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49AD0A] will-change-transform"
              >
                {/* Base card surface */}
                <div className="relative rounded-[22px] p-[5px] bg-white/95 border border-[#bfe6a5] shadow-[0_12px_28px_rgba(73,173,10,0.12)]">
                  {/* Glowing #49AD0A border overlay fading in smoothly as card enters center */}
                  <div
                    ref={(el) => {
                      glowRefs.current[idx] = el;
                    }}
                    className="pointer-events-none absolute inset-0 rounded-[22px] p-[5px] bg-gradient-to-b from-[#7be334] via-[#49AD0A] to-[#2c6e04] shadow-[0_18px_42px_rgba(73,173,10,0.42)] opacity-0"
                    aria-hidden="true"
                  >
                    <div className="w-full h-full rounded-[17px] bg-white" />
                  </div>

                  {/* Card Inner Content */}
                  <div className="relative z-10 bg-white rounded-[17px] overflow-hidden">
                    <div className="relative h-[138px] sm:h-[144px] lg:h-[126px] xl:h-[146px] w-full bg-[#e8f8dd]">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="280px"
                        loading="eager"
                        draggable={false}
                        className="object-cover object-center pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="px-3.5 py-3 text-center bg-white">
                      <div className="text-[14.5px] xl:text-[15.5px] font-extrabold text-[#112407] flex items-center justify-center gap-1.5 truncate">
                        <span className="truncate">{project.name}</span>
                        <ExternalLink
                          ref={(el) => {
                            badgeRefs.current[idx] = el;
                          }}
                          className="w-3.5 h-3.5 text-[#49AD0A] shrink-0 opacity-0 transition-opacity"
                        />
                      </div>
                      <div className="text-[12px] font-medium text-[#3f612b] mt-0.5 truncate">
                        {project.category}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Sleek Roller Controls: Prev / Dots / Next */}
        <div className="mt-2 flex items-center justify-center gap-3.5 relative z-20">
          <button
            type="button"
            onClick={() => handleRollBy(-1)}
            aria-label="Previous project"
            className="w-9 h-9 rounded-full bg-white/95 hover:bg-[#e8f8dd] border border-[#9bd873] hover:border-[#49AD0A] shadow-[0_6px_16px_rgba(73,173,10,0.14)] flex items-center justify-center text-[#17300a] transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 bg-white/85 backdrop-blur-sm border border-[#c6eaa9] rounded-full px-3 py-1.5 shadow-sm">
            {CLIENT_PROJECTS.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                aria-label={`Select ${p.name}`}
                onClick={() => handleRollToIndex(idx)}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  idx === activeIndex ? 'w-5 bg-[#49AD0A]' : 'w-2 bg-[#bae39e] hover:bg-[#77cf3c]'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleRollBy(1)}
            aria-label="Next project"
            className="w-9 h-9 rounded-full bg-white/95 hover:bg-[#e8f8dd] border border-[#9bd873] hover:border-[#49AD0A] shadow-[0_6px_16px_rgba(73,173,10,0.14)] flex items-center justify-center text-[#17300a] transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
