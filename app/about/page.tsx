'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, MotionConfig } from 'motion/react';
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Code2,
  Compass,
  HeartHandshake,
  Layers,
  Phone,
  Rocket,
  Shield,
  Smile,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import BottomCtaAndFooter from '@/components/BottomCtaAndFooter';
import { ConsultationModal } from '@/components/Modals';
import { EASE_OUT_EXPO, SectionReveal, VIEWPORT_ONCE } from '@/components/MotionPrimitives';
import {
  COMPANY_MILESTONES,
  COMPANY_VALUES,
  TEAM_MEMBERS,
  TECH_STACK,
  TESTIMONIALS,
} from '@/lib/farnad-data';

const TROPHY_12_IMAGE =
  '/assets/aistudio/ChatGPT_Image_Nov_25__2026__11_28_32_AM-1_e141bfb7.png';
const BUILDING_IMAGE =
  '/assets/aistudio/ChatGPT_Image_Nov_25__2026__11_28_34_AM-2_c4f0c7f5.png';

export default function AboutPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(COMPANY_MILESTONES.length - 1);

  const renderValueIcon = (type: 'shield' | 'zap' | 'code' | 'target') => {
    const cls = 'w-5 h-5 text-white stroke-[2.2]';
    switch (type) {
      case 'code':
        return <Code2 className={cls} />;
      case 'shield':
        return <Shield className={cls} />;
      case 'target':
        return <Target className={cls} />;
      case 'zap':
        return <Zap className={cls} />;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="farnad-canvas min-h-screen flex flex-col overflow-x-clip">
        <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

        <main className="flex-1 pt-24 sm:pt-28">
          {/* Breadcrumb Bar */}
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#3f612b]">
              <Link href="/" className="hover:text-[#49AD0A] transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#112407] font-semibold">About Us</span>
            </nav>
          </div>

          {/* 1. Hero Section: 12 Years Monument & HQ Glass Showcase */}
          <section className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-8">
                {/* Left Column: Headline, Narrative & Primary Actions */}
                <SectionReveal className="text-center lg:text-left">
                  <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                    Our 12-Year Story
                  </span>

                  <h1 className="mt-3.5 text-[34px] sm:text-[44px] lg:text-[48px] font-extrabold tracking-tight text-[#112407] leading-[1.12] text-balance">
                    Engineering Modern Platforms With Precision, Passion, and Integrity
                  </h1>

                  <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.65] text-[#355422] max-w-xl mx-auto lg:mx-0">
                    Founded in 2013, Farnad Tech is a premier digital engineering studio. We combine
                    rigorous system architecture, human-centric design, and reliable automation to
                    turn bold ideas into scalable, high-converting digital realities.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                    <button
                      type="button"
                      onClick={() => setConsultationOpen(true)}
                      className="farnad-btn-green text-white text-[14px] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shadow-[0_10px_24px_rgba(73,173,10,0.32)]"
                    >
                      <span>Book a Free Discovery Call</span>
                      <Rocket className="w-4 h-4" />
                    </button>

                    <Link
                      href="/#projects"
                      className="bg-white/95 hover:bg-white text-[#112407] border border-[#9bd873] hover:border-[#49AD0A] text-[14px] font-semibold px-6 py-3 rounded-full shadow-[0_6px_18px_rgba(73,173,10,0.12)] inline-flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span>Explore Case Studies</span>
                      <ChevronRight className="w-4 h-4 text-[#49AD0A]" />
                    </Link>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-8 pt-6 border-t border-[#d4ebd0] grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <div className="flex items-center gap-2.5 text-[13.5px] text-[#224410] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#49AD0A] shrink-0" />
                      <span>100% Client Source Code Ownership</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[13.5px] text-[#224410] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#49AD0A] shrink-0" />
                      <span>12 Months Comprehensive Support</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[13.5px] text-[#224410] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#49AD0A] shrink-0" />
                      <span>Sub-Second Performance &amp; Clean Code</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-[13.5px] text-[#224410] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#49AD0A] shrink-0" />
                      <span>Direct Access to Senior Engineers</span>
                    </div>
                  </div>
                </SectionReveal>

                {/* Right Column: Dynamic Duo Artwork Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                  className="relative flex items-center justify-center"
                >
                  {/* Glowing Stage Platform Backdrop */}
                  <div
                    className="pointer-events-none absolute -inset-4 sm:-inset-6 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(73,173,10,0.2)_0%,rgba(142,232,72,0.08)_50%,transparent_75%)] blur-2xl"
                    aria-hidden="true"
                  />

                  <div className="relative w-full max-w-[500px] grid grid-cols-2 gap-3 sm:gap-4 p-3 rounded-[32px] bg-white/70 backdrop-blur-md border border-[#cdeab7] shadow-[0_18px_45px_rgba(73,173,10,0.14)]">
                    {/* Visual 1: 12-Year Monument */}
                    <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-gradient-to-b from-[#eefae6] to-[#ddf6cf] flex items-center justify-center p-3">
                      <Image
                        src={TROPHY_12_IMAGE}
                        alt="12 Years of Excellence Monument"
                        fill
                        className="object-contain p-2"
                        priority
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-xl bg-white/92 backdrop-blur-sm border border-[#a8e280] py-1 px-2 text-center shadow-sm">
                        <span className="text-[11.5px] font-extrabold text-[#112407] tabular-nums">
                          12+ Years Experience
                        </span>
                      </div>
                    </div>

                    {/* Visual 2: Headquarters Glass Tower */}
                    <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden bg-gradient-to-b from-[#eefae6] to-[#ddf6cf] flex items-center justify-center p-3">
                      <Image
                        src={BUILDING_IMAGE}
                        alt="Farnad Tech Headquarters Glass Architecture"
                        fill
                        className="object-contain p-2"
                        priority
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-xl bg-white/92 backdrop-blur-sm border border-[#a8e280] py-1 px-2 text-center shadow-sm">
                        <span className="text-[11.5px] font-extrabold text-[#112407]">
                          Tehran Headquarters
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 2. Key Metrics Bar */}
          <section className="relative py-8 bg-white/80 border-y border-[#d3ebd0] backdrop-blur-sm">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1.5 text-[28px] sm:text-[34px] font-extrabold text-[#112407] tabular-nums">
                    <Trophy className="w-6 h-6 text-[#49AD0A]" />
                    <span>+350</span>
                  </div>
                  <p className="mt-1 text-[12.5px] font-semibold text-[#385c22]">
                    Completed Platforms
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-1.5 text-[28px] sm:text-[34px] font-extrabold text-[#112407] tabular-nums">
                    <Smile className="w-6 h-6 text-[#49AD0A]" />
                    <span>+96%</span>
                  </div>
                  <p className="mt-1 text-[12.5px] font-semibold text-[#385c22]">
                    Client Satisfaction Rate
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-1.5 text-[28px] sm:text-[34px] font-extrabold text-[#112407] tabular-nums">
                    <Calendar className="w-6 h-6 text-[#49AD0A]" />
                    <span>+12</span>
                  </div>
                  <p className="mt-1 text-[12.5px] font-semibold text-[#385c22]">
                    Years Continuous Delivery
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-center gap-1.5 text-[28px] sm:text-[34px] font-extrabold text-[#112407] tabular-nums">
                    <Users className="w-6 h-6 text-[#49AD0A]" />
                    <span>+20</span>
                  </div>
                  <p className="mt-1 text-[12.5px] font-semibold text-[#385c22]">
                    Engineers &amp; Specialists
                  </p>
                </div>

                <div className="col-span-2 lg:col-span-1">
                  <div className="flex items-center justify-center gap-1.5 text-[28px] sm:text-[34px] font-extrabold text-[#49AD0A] tabular-nums">
                    <Award className="w-6 h-6 text-[#49AD0A]" />
                    <span>100%</span>
                  </div>
                  <p className="mt-1 text-[12.5px] font-semibold text-[#385c22]">
                    Code &amp; IP Rights to You
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Mission & Vision Bento Cards */}
          <section className="relative py-14 sm:py-16">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center max-w-[700px] mx-auto">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Our Purpose
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-tight text-[#112407]">
                  Driven by Mission, Guided by Vision
                </h2>
                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
                  We believe that great software is measured by the commercial growth and operational
                  peace of mind it delivers to our clients.
                </p>
              </SectionReveal>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Mission Card */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                  className="farnad-glass-card rounded-[28px] border border-[#bfe6a5] p-7 sm:p-9 relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6ad422] via-[#49AD0A] to-[#2e7305] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(73,173,10,0.34)] ring-4 ring-[#e8f8dd]">
                    <Target className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <h3 className="mt-6 text-[22px] sm:text-[24px] font-extrabold text-[#112407]">
                    Our Mission
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7] text-[#355422]">
                    To deliver enterprise-grade digital systems—from conversion-focused storefronts and
                    native mobile apps to algorithmic bots and smart AI workflows—without bloated
                    retainers or code lock-in. We build software that performs reliably under real-world
                    pressure.
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#d8f0ce] flex items-center gap-2 text-xs font-semibold text-[#285015]">
                    <Sparkles className="w-4 h-4 text-[#49AD0A]" />
                    <span>Focus on Measurable Business Impact</span>
                  </div>
                </motion.div>

                {/* Vision Card */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT_EXPO }}
                  className="farnad-glass-card rounded-[28px] border border-[#bfe6a5] p-7 sm:p-9 relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6ad422] via-[#49AD0A] to-[#2e7305] text-white flex items-center justify-center shadow-[0_8px_20px_rgba(73,173,10,0.34)] ring-4 ring-[#e8f8dd]">
                    <Compass className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <h3 className="mt-6 text-[22px] sm:text-[24px] font-extrabold text-[#112407]">
                    Our Vision
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7] text-[#355422]">
                    To be the leading digital engineering ally in the region, bridging the gap between
                    cutting-edge technology (Generative AI, Telegram Mini Apps, high-frequency trading)
                    and tangible commercial expansion for businesses of every scale.
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#d8f0ce] flex items-center gap-2 text-xs font-semibold text-[#285015]">
                    <HeartHandshake className="w-4 h-4 text-[#49AD0A]" />
                    <span>Long-Term Strategic Technical Partnership</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 4. Core Values Grid */}
          <section className="relative py-14 sm:py-16 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(232,248,221,0.5)_0%,transparent_75%)]">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center max-w-[700px] mx-auto">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Principles &amp; Culture
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-tight text-[#112407]">
                  The Standards That Define Every Line of Code
                </h2>
                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
                  We treat your product as our own flagship repository.
                </p>
              </SectionReveal>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {COMPANY_VALUES.map((val, idx) => (
                  <motion.div
                    key={val.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                    className="farnad-glass-card rounded-[24px] border border-[#bfe6a5] hover:border-[#49AD0A] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(73,173,10,0.14)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#6ad422] via-[#49AD0A] to-[#2e7305] flex items-center justify-center shadow-md ring-4 ring-[#e8f8dd]">
                          {renderValueIcon(val.iconType)}
                        </div>
                        <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-[#e8f8dd] text-[#2c6b05] border border-[#a8e280]/60">
                          {val.badge}
                        </span>
                      </div>

                      <h3 className="mt-5 text-[17px] font-extrabold text-[#112407] leading-snug">
                        {val.title}
                      </h3>
                      <p className="mt-2.5 text-[13px] leading-[1.65] text-[#355422]">
                        {val.description}
                      </p>
                    </div>

                    <div className="mt-5 h-1 w-10 rounded-full bg-gradient-to-r from-[#6ad422] to-[#49AD0A]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. 12-Year Evolution Timeline */}
          <section className="relative py-14 sm:py-16">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center max-w-[700px] mx-auto">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Milestones
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-tight text-[#112407]">
                  Our Journey Across 12 Transformative Years
                </h2>
                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
                  From a small engineering collective in Tehran to a multi-domain digital powerhouse.
                </p>
              </SectionReveal>

              <div className="mt-11">
                {/* Milestone Stepper Tabs */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto pb-4">
                  {COMPANY_MILESTONES.map((m, idx) => {
                    const isSelected = activeMilestoneIndex === idx;
                    return (
                      <button
                        key={m.year}
                        type="button"
                        onClick={() => setActiveMilestoneIndex(idx)}
                        className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                          isSelected
                            ? 'bg-[#49AD0A] text-white shadow-[0_6px_18px_rgba(73,173,10,0.36)] ring-4 ring-[#d8f4c2]'
                            : 'bg-white/90 text-[#355422] border border-[#bfe6a5] hover:border-[#49AD0A]'
                        }`}
                      >
                        {m.year}
                      </button>
                    );
                  })}
                </div>

                {/* Active Milestone Card */}
                {(() => {
                  const current = COMPANY_MILESTONES[activeMilestoneIndex];
                  return (
                    <motion.div
                      key={current.year}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                      className="mt-6 max-w-3xl mx-auto farnad-glass-card rounded-[28px] border border-[#49AD0A]/50 p-6 sm:p-9 shadow-[0_16px_40px_rgba(73,173,10,0.12)] text-center sm:text-left flex flex-col sm:flex-row items-center gap-6"
                    >
                      <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#6ad422] via-[#49AD0A] to-[#266103] text-white flex flex-col items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(73,173,10,0.34)] ring-4 ring-[#e8f8dd]">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                          Year
                        </span>
                        <span className="text-[20px] font-extrabold tabular-nums leading-none">
                          {current.year.split('–')[0]}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="inline-block text-[11px] font-bold text-[#2c6b05] bg-[#e8f8dd] px-3 py-1 rounded-full border border-[#a8e280]/60">
                          {current.highlight}
                        </div>
                        <h3 className="mt-2 text-[20px] sm:text-[22px] font-extrabold text-[#112407]">
                          {current.title}
                        </h3>
                        <p className="mt-2 text-[14px] leading-[1.65] text-[#355422]">
                          {current.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            </div>
          </section>

          {/* 6. Leadership & Engineering Team */}
          <section className="relative py-14 sm:py-16 bg-white/70 border-t border-[#d8ebd2]">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center max-w-[700px] mx-auto">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Meet the Architects
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-tight text-[#112407]">
                  The Minds Behind Farnad Tech
                </h2>
                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
                  Senior strategists, engineers, and UX architects with deep hands-on expertise.
                </p>
              </SectionReveal>

              <div className="mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TEAM_MEMBERS.map((member, idx) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.45, delay: idx * 0.07, ease: EASE_OUT_EXPO }}
                    className="farnad-glass-card rounded-[26px] border border-[#bfe6a5] hover:border-[#49AD0A] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(73,173,10,0.13)]"
                  >
                    <div>
                      <div className="flex items-center gap-3.5">
                        <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-[#e8f8dd] border-2 border-[#8de54f] shrink-0">
                          <Image
                            src={member.avatar}
                            alt={member.name}
                            fill
                            className="object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <h3 className="text-[17px] font-extrabold text-[#112407] leading-tight">
                            {member.name}
                          </h3>
                          <p className="text-[12.5px] font-semibold text-[#49AD0A] mt-0.5">
                            {member.role}
                          </p>
                          <span className="text-[11px] text-[#476a33]">
                            {member.experience} Experience
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3.5 border-t border-[#d8eed0]">
                        <span className="text-[11.5px] font-semibold text-[#274c15] block">
                          Specialty: {member.specialty}
                        </span>
                        <p className="mt-2 text-[13px] leading-[1.62] text-[#355422]">
                          {member.bio}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#d8eed0] flex items-center justify-between text-xs text-[#398a06] font-semibold">
                      <span>Farnad Tech Core Team</span>
                      <CheckCircle2 className="w-4 h-4 text-[#49AD0A]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Technology Stack Standards */}
          <section className="relative py-14 sm:py-16">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center max-w-[700px] mx-auto">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Technical Foundation
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-tight text-[#112407]">
                  Technologies We Master &amp; Trust
                </h2>
                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
                  Chosen for industry scalability, strict typing, and high reliability.
                </p>
              </SectionReveal>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {TECH_STACK.map((tech) => (
                  <div
                    key={tech.name}
                    className="farnad-glass-card rounded-2xl border border-[#bfe6a5] p-4 flex flex-col items-center justify-center gap-2.5 text-center transition-all hover:border-[#49AD0A] hover:-translate-y-1"
                  >
                    <div className="relative w-10 h-10">
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[13px] font-bold text-[#112407]">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Architectural Pillars */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="rounded-2xl bg-white/90 border border-[#bfe6a5] p-5">
                  <div className="flex items-center gap-2.5 text-[#112407] font-bold text-[15px]">
                    <Layers className="w-4 h-4 text-[#49AD0A]" />
                    <span>Micro-Service &amp; Next.js SSR</span>
                  </div>
                  <p className="mt-2 text-[12.5px] text-[#355422] leading-relaxed">
                    Dynamic rendering paired with edge caching for lightning-fast Core Web Vitals and high SEO rankability.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/90 border border-[#bfe6a5] p-5">
                  <div className="flex items-center gap-2.5 text-[#112407] font-bold text-[15px]">
                    <Shield className="w-4 h-4 text-[#49AD0A]" />
                    <span>Hardened Security &amp; ISO Protocols</span>
                  </div>
                  <p className="mt-2 text-[12.5px] text-[#355422] leading-relaxed">
                    CSRF protection, sanitized parameter binding, encrypted credential vaults, and zero sensitive data leakage.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/90 border border-[#bfe6a5] p-5">
                  <div className="flex items-center gap-2.5 text-[#112407] font-bold text-[15px]">
                    <Zap className="w-4 h-4 text-[#49AD0A]" />
                    <span>Automated CI/CD &amp; Docker</span>
                  </div>
                  <p className="mt-2 text-[12.5px] text-[#355422] leading-relaxed">
                    Automated linting, unit test suites, containerized deployments, and zero-downtime rollouts.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Client Testimonial Endorsement */}
          <section className="relative py-14 sm:py-16 bg-[#eefae7]/70 border-t border-[#d8ebd2]">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                Client Trust
              </span>
              <blockquote className="mt-5 text-[18px] sm:text-[22px] font-medium leading-[1.6] text-[#112407] text-balance">
                {TESTIMONIALS[0].quote}
              </blockquote>
              <div className="mt-5 flex items-center justify-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#8de54f]">
                  <Image
                    src={TESTIMONIALS[0].avatar}
                    alt={TESTIMONIALS[0].author}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold text-[#112407]">{TESTIMONIALS[0].author}</div>
                  <div className="text-xs text-[#398a06]">{TESTIMONIALS[0].role}</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <BottomCtaAndFooter onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Modal */}
        {consultationOpen && (
          <ConsultationModal
            initialService="Full Digital Ecosystem Package"
            onClose={() => setConsultationOpen(false)}
          />
        )}
      </div>
    </MotionConfig>
  );
}
