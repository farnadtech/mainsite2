'use client';

import React, { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, MotionConfig } from 'motion/react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Code2,
  Layers,
  Phone,
  Rocket,
  Shield,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import BottomCtaAndFooter from '@/components/BottomCtaAndFooter';
import { ConsultationModal } from '@/components/Modals';
import { EASE_OUT_EXPO, SectionReveal, VIEWPORT_ONCE } from '@/components/MotionPrimitives';
import {
  CLIENT_PROJECTS,
  ECOSYSTEM_SERVICES,
  getServiceExtendedData,
} from '@/lib/farnad-data';

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export default function ServicePage({ params }: ServicePageProps) {
  const { id } = use(params);
  const service = getServiceExtendedData(id);

  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>(
    service.packages[1]?.name || service.packages[0]?.name || service.title
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const renderFeatureIcon = (type: string) => {
    const cls = 'w-5 h-5 text-white stroke-[2.2]';
    switch (type) {
      case 'zap':
        return <Zap className={cls} />;
      case 'shield':
        return <Shield className={cls} />;
      case 'layers':
        return <Layers className={cls} />;
      case 'target':
        return <Target className={cls} />;
      case 'code':
        return <Code2 className={cls} />;
      case 'sparkles':
      default:
        return <Sparkles className={cls} />;
    }
  };

  const relevantProjects = CLIENT_PROJECTS.slice(0, 3);

  const handleOrderPackage = (packageName: string) => {
    setSelectedPackage(`${service.title} (${packageName})`);
    setConsultationOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="farnad-canvas min-h-screen flex flex-col overflow-x-clip">
        <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

        <main className="flex-1 pt-24 sm:pt-28">
          {/* Breadcrumb Navigation */}
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#3f612b]">
              <Link href="/" className="hover:text-[#49AD0A] transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/#services" className="hover:text-[#49AD0A] transition-colors">
                Services
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#112407] font-semibold">{service.title}</span>
            </nav>
          </div>

          {/* 1. Hero Section */}
          <section className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-10 lg:gap-8">
                {/* Left Column: Title & Proposition */}
                <SectionReveal className="text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                    <Sparkles className="w-3.5 h-3.5 text-[#49AD0A]" />
                    <span>{service.badge}</span>
                  </div>

                  <h1 className="mt-4 text-[34px] sm:text-[44px] lg:text-[48px] font-extrabold tracking-tight text-[#112407] leading-[1.12] text-balance">
                    {service.headline}
                  </h1>

                  <p className="mt-4 text-[15px] sm:text-[16.5px] leading-[1.65] text-[#355422] max-w-xl mx-auto lg:mx-0">
                    {service.subheadline}
                  </p>

                  <div className="mt-6 flex items-center justify-center lg:justify-start gap-3">
                    <span className="text-xs font-bold text-[#2c6b05] bg-[#e8f8dd] px-3.5 py-1.5 rounded-full border border-[#a8e280]/60">
                      {service.startingPrice}
                    </span>
                    <span className="text-xs text-[#3f612b] font-medium">
                      12 Months Support Included
                    </span>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedPackage(service.title);
                        setConsultationOpen(true);
                      }}
                      className="farnad-btn-green text-white text-[14px] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer shadow-[0_10px_24px_rgba(73,173,10,0.32)]"
                    >
                      <span>Order This Service</span>
                      <Rocket className="w-4 h-4" />
                    </button>

                    <a
                      href="#packages"
                      className="bg-white/95 hover:bg-white text-[#112407] border border-[#9bd873] hover:border-[#49AD0A] text-[14px] font-semibold px-6 py-3 rounded-full shadow-[0_6px_18px_rgba(73,173,10,0.12)] inline-flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span>View Pricing Packages</span>
                      <ChevronDown className="w-4 h-4 text-[#49AD0A]" />
                    </a>
                  </div>

                  {/* Trust Strip */}
                  <div className="mt-8 pt-6 border-t border-[#d4ebd0] grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    <div className="flex items-center gap-2 text-xs text-[#224410] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#49AD0A] shrink-0" />
                      <span>Sub-Second Response Times (&lt;0.7s)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#224410] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#49AD0A] shrink-0" />
                      <span>100% Full Source Code Handover</span>
                    </div>
                  </div>
                </SectionReveal>

                {/* Right Column: Hero Visual Showcase */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
                  className="relative flex items-center justify-center"
                >
                  <div
                    className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(circle,rgba(73,173,10,0.24)_0%,rgba(142,232,72,0.1)_50%,transparent_75%)] blur-2xl"
                    aria-hidden="true"
                  />

                  <div className="relative w-full max-w-[460px] aspect-square rounded-[36px] bg-gradient-to-b from-white/95 via-white/80 to-[#ecf9e5] border border-[#cdeab7] shadow-[0_20px_50px_rgba(73,173,10,0.15)] p-6 flex flex-col items-center justify-center overflow-hidden">
                    <div className="relative w-full h-[75%] transition-transform duration-300 hover:scale-105">
                      <Image
                        src={service.heroImage}
                        alt={service.title}
                        fill
                        className="object-contain drop-shadow-[0_16px_28px_rgba(73,173,10,0.28)]"
                        priority
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Floating Info Capsule */}
                    <div className="mt-3 w-full bg-white/95 backdrop-blur-sm rounded-2xl border border-[#a8e280] py-2.5 px-4 flex items-center justify-between text-xs shadow-sm">
                      <div className="flex items-center gap-2 font-bold text-[#112407]">
                        <span className="w-2 h-2 rounded-full bg-[#49AD0A]" />
                        <span>Farnad Tech Engineering Standard</span>
                      </div>
                      <span className="font-extrabold text-[#49AD0A]">100% Dedicated</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 2. Overview Narrative */}
          <section className="relative py-12 bg-white/80 border-y border-[#d3ebd0] backdrop-blur-sm">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-xs font-bold text-[#398a06] tracking-wider uppercase">
                Architecture &amp; Strategy
              </span>
              <h2 className="mt-2 text-[26px] sm:text-[32px] font-extrabold text-[#112407]">
                Why Partner With Farnad Tech for {service.title}?
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-[#355422]">
                {service.overview}
              </p>
            </div>
          </section>

          {/* 3. Core Features & Deliverables Grid */}
          <section className="relative py-16">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center max-w-[700px] mx-auto">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Deliverables &amp; Specs
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-tight text-[#112407]">
                  What Every Platform Includes
                </h2>
                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
                  Rigorous engineering foundations built to convert visitors and scale seamlessly.
                </p>
              </SectionReveal>

              <div className="mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.features.map((feat, idx) => (
                  <motion.div
                    key={feat.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.45, delay: idx * 0.07, ease: EASE_OUT_EXPO }}
                    className="farnad-glass-card rounded-[26px] border border-[#bfe6a5] hover:border-[#49AD0A] p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(73,173,10,0.14)]"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6ad422] via-[#49AD0A] to-[#2e7305] flex items-center justify-center shadow-md ring-4 ring-[#e8f8dd]">
                        {renderFeatureIcon(feat.iconType)}
                      </div>
                      <h3 className="mt-5 text-[17px] font-extrabold text-[#112407] leading-snug">
                        {feat.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-[1.62] text-[#355422]">
                        {feat.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#d8eed0] flex items-center gap-1.5 text-xs text-[#398a06] font-semibold">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      <span>Included in Standard Delivery</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. 5-Phase Implementation Process */}
          <section className="relative py-16 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(232,248,221,0.5)_0%,transparent_75%)] border-t border-[#d8ebd2]">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center max-w-[700px] mx-auto">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Step-by-Step Delivery
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-tight text-[#112407]">
                  The Development Roadmap
                </h2>
                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
                  A transparent, milestone-based methodology keeping you in full control.
                </p>
              </SectionReveal>

              <div className="mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                {service.process.map((p, idx) => (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEWPORT_ONCE}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: EASE_OUT_EXPO }}
                    className="farnad-glass-card rounded-[24px] border border-[#bfe6a5] p-5 sm:p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[26px] font-extrabold text-[#49AD0A]/40 tabular-nums">
                          {p.step}
                        </span>
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#e8f8dd] text-[#2c6b05]">
                          {p.duration}
                        </span>
                      </div>

                      <h3 className="mt-4 text-[16px] font-extrabold text-[#112407] leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[12.5px] leading-[1.6] text-[#355422]">
                        {p.description}
                      </p>
                    </div>

                    <div className="mt-4 h-1 w-8 rounded-full bg-gradient-to-r from-[#6ad422] to-[#49AD0A]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Packages & Pricing Tiers */}
          <section id="packages" className="relative py-16 scroll-mt-24">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center max-w-[700px] mx-auto">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Transparent Investment
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-tight text-[#112407]">
                  Tailored Packages for Every Stage
                </h2>
                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
                  Fixed-scope milestones with zero hidden costs.
                </p>
              </SectionReveal>

              <div className="mt-11 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {service.packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`rounded-[30px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                      pkg.popular
                        ? 'farnad-featured-card text-white shadow-[0_22px_45px_rgba(73,173,10,0.32)] scale-[1.02]'
                        : 'farnad-glass-card border border-[#bfe6a5] text-[#112407] shadow-lg'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ffffff] text-[#2c6b05] text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md border border-[#9fd874]">
                        Most Requested
                      </div>
                    )}

                    <div>
                      <h3
                        className={`text-[20px] font-extrabold ${
                          pkg.popular ? 'text-white' : 'text-[#112407]'
                        }`}
                      >
                        {pkg.name}
                      </h3>
                      <p
                        className={`mt-2 text-[13px] leading-relaxed ${
                          pkg.popular ? 'text-white/85' : 'text-[#355422]'
                        }`}
                      >
                        {pkg.description}
                      </p>

                      <div className="mt-5 pb-5 border-b border-black/10">
                        <span
                          className={`text-[32px] sm:text-[36px] font-extrabold tabular-nums ${
                            pkg.popular ? 'text-white' : 'text-[#112407]'
                          }`}
                        >
                          {pkg.price}
                        </span>
                        <span
                          className={`text-xs ml-1 font-semibold ${
                            pkg.popular ? 'text-white/75' : 'text-[#476e2d]'
                          }`}
                        >
                          / fixed milestone
                        </span>
                      </div>

                      <ul className="mt-6 space-y-3 text-xs sm:text-[13px]">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 stroke-[2.5] ${
                                pkg.popular ? 'text-[#a2f768]' : 'text-[#49AD0A]'
                              }`}
                            />
                            <span className={pkg.popular ? 'text-white/95' : 'text-[#223d13]'}>
                              {f}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-4">
                      <button
                        type="button"
                        onClick={() => handleOrderPackage(pkg.name)}
                        className={`w-full py-3.5 px-5 rounded-full font-bold text-sm text-center transition-all cursor-pointer ${
                          pkg.popular
                            ? 'bg-white hover:bg-[#f3fced] text-[#1c4903] shadow-md'
                            : 'farnad-btn-green text-white shadow-md'
                        }`}
                      >
                        Select {pkg.name}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. Relevant Case Studies */}
          <section className="relative py-16 bg-white/70 border-t border-[#d8ebd2]">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center max-w-[700px] mx-auto">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Proven Results
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[36px] font-extrabold tracking-tight text-[#112407]">
                  Platforms Engineered by Our Team
                </h2>
                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
                  Explore live client platforms delivered with this exact methodology.
                </p>
              </SectionReveal>

              <div className="mt-11 grid grid-cols-1 md:grid-cols-3 gap-6">
                {relevantProjects.map((p) => (
                  <div
                    key={p.id}
                    className="farnad-glass-card rounded-[26px] border border-[#bfe6a5] overflow-hidden group hover:border-[#49AD0A] transition-all"
                  >
                    <div className="relative aspect-[16/10] bg-[#eefae6] overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-bold text-[#49AD0A]">{p.category}</span>
                      <h3 className="mt-1 text-[17px] font-extrabold text-[#112407]">{p.name}</h3>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-[#355422] line-clamp-2">
                        {p.summary}
                      </p>
                      <div className="mt-4 pt-3 border-t border-[#d8eed0] text-[11.5px] font-semibold text-[#2b5118]">
                        {p.metrics}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Dedicated Service FAQs */}
          <section className="relative py-16">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Answers to Questions
                </span>
                <h2 className="mt-3 text-[28px] sm:text-[34px] font-extrabold tracking-tight text-[#112407]">
                  Frequently Asked Questions
                </h2>
                <p className="mt-2 text-[14px] text-[#355422]">
                  Got questions before starting your project?
                </p>
              </SectionReveal>

              <div className="mt-8 space-y-3">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={faq.q}
                      className="farnad-glass-card rounded-2xl border border-[#bfe6a5] overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                      >
                        <span className="text-[15px] font-bold text-[#112407]">{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#49AD0A] shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-4.5 pt-1 text-[13.5px] leading-relaxed text-[#355422] border-t border-[#d8f0ce]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>

        <BottomCtaAndFooter onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Consultation Modal */}
        {consultationOpen && (
          <ConsultationModal
            initialService={selectedPackage}
            onClose={() => setConsultationOpen(false)}
          />
        )}
      </div>
    </MotionConfig>
  );
}
