'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import {
  ArrowUp,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Youtube,
} from 'lucide-react';
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from '@/components/MotionPrimitives';

interface BottomCtaAndFooterProps {
  onOpenConsultation?: (service?: string) => void;
  onSelectServiceById?: (id: string) => void;
  hideCta?: boolean;
}

export default function BottomCtaAndFooter({
  onOpenConsultation,
  onSelectServiceById,
  hideCta = false,
}: BottomCtaAndFooterProps) {
  const [lang, setLang] = useState<'EN' | 'FA'>('EN');
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleOpenConsultation = (svc?: string) => {
    if (onOpenConsultation) {
      onOpenConsultation(svc);
    } else {
      window.location.href = '/contact';
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newsletterEmail.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
    if (!trimmed || !isEmail) {
      setNewsletterError('Please enter a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Pre-Footer Next Level CTA Section */}
      {!hideCta && (
        <section
          id="contact"
          className="relative overflow-hidden pt-12 pb-[230px] sm:pt-16 sm:pb-[280px] lg:min-h-[540px] xl:min-h-[600px] lg:py-24 lg:flex lg:items-center"
        >
          {/* Full-Bleed Green Glass Coding Platform Background & Artwork */}
          <div
            className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.45)_6%,black_16%,black_100%)]"
            aria-hidden="true"
          >
            <Image
              src="/assets/aistudio/Futuristic_Green_Glass_Coding_Platform__1__d32c60c4.png"
              alt=""
              fill
              sizes="100vw"
              loading="eager"
              className="object-cover object-[24%_90%] sm:object-[22%_82%] lg:object-[16%_42%] xl:object-[center_45%]"
              referrerPolicy="no-referrer"
            />

            {/* Readability veil: upper area on mobile/tablet, right column on desktop */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#f3fced]/88 via-[#f3fced]/60 via-44% to-transparent lg:bg-gradient-to-l lg:from-[#f3fced]/70 lg:via-[#f3fced]/22 lg:via-48% lg:to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center gap-8">
              {/* Spacer keeping left laptop podium artwork clear on desktop */}
              <div className="hidden lg:block" aria-hidden="true" />

              {/* Right CTA Headline & Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.52, delay: 0.08, ease: EASE_OUT_EXPO }}
                className="text-center lg:text-left max-w-[600px] mx-auto lg:mx-0 lg:ml-auto"
              >
                <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-extrabold tracking-tight text-[#112407] leading-tight text-balance drop-shadow-[0_2px_12px_rgba(255,255,255,0.85)]">
                  Ready to Take Your Business to the Next Level?
                </h2>
                <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-[1.65] text-[#284716] font-medium max-w-[560px] mx-auto lg:mx-0 drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)]">
                  Get in touch with the Farnad Tech team today and start your digital transformation
                  with tailored, professional solutions.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                  <Link
                    href="/contact"
                    className="bg-white/95 hover:bg-white text-[#112407] border border-[#9bd873] hover:border-[#49AD0A] text-[14px] font-semibold px-6 py-3 rounded-full shadow-[0_6px_18px_rgba(73,173,10,0.12)] inline-flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 text-[#49AD0A]" />
                    <span>Contact Us</span>
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleOpenConsultation()}
                    className="farnad-btn-green text-white text-[14px] font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get a Free Consultation</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Refined, Ultra-Stylish Dark Leaf-Forest Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
        className="relative bg-gradient-to-b from-[#112b03] via-[#091a02] to-[#040e01] text-white pt-14 pb-8 overflow-hidden"
      >
        {/* Luminous Top Energy Conduit & Ambient Glow */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#49AD0A] to-transparent opacity-80"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[120px] bg-[radial-gradient(ellipse_at_top,rgba(73,173,10,0.2)_0%,transparent_72%)]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1. Integrated VIP Engineering Dispatch & Newsletter Card */}
          <div className="mb-12 rounded-[24px] bg-gradient-to-r from-white/[0.06] via-white/[0.04] to-white/[0.02] backdrop-blur-md border border-white/10 p-6 sm:p-7 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-6">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7be334]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Farnad Tech Engineering Dispatch</span>
                </div>
                <h3 className="mt-1.5 text-[20px] sm:text-[22px] font-extrabold text-white">
                  Join Forward-Thinking Tech Leaders &amp; Founders
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-white/70 max-w-lg">
                  Quarterly technical briefs on practical AI agent pipelines, sub-second web architecture, and automated trading algorithms. Zero spam.
                </p>
              </div>

              <div>
                {newsletterSubscribed ? (
                  <div className="rounded-full bg-[#183d06] border border-[#49AD0A]/50 py-3 px-5 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-[#8be848]">
                    <CheckCircle2 className="w-4 h-4 text-[#49AD0A]" />
                    <span>Subscribed successfully! Thank you for joining our dispatch.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-1.5" noValidate>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        value={newsletterEmail}
                        onChange={(e) => {
                          setNewsletterEmail(e.target.value);
                          if (newsletterError) setNewsletterError('');
                        }}
                        placeholder="Enter your corporate email..."
                        className="flex-1 rounded-full bg-white/10 border border-white/15 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/45 focus:outline-none focus:border-[#49AD0A] focus:ring-1 focus:ring-[#49AD0A] transition-all"
                      />
                      <button
                        type="submit"
                        className="farnad-btn-green text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center justify-center gap-2 cursor-pointer transition-all shrink-0 shadow-md"
                      >
                        <span>Subscribe</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    {newsletterError && (
                      <p className="text-xs text-[#ff8e8e] pl-3">{newsletterError}</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* 2. Main 5-Column Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1.1fr_0.9fr_1.15fr_0.8fr] gap-8 xl:gap-10 pb-12 border-b border-white/10">
            {/* Column 1: Brand & Studio Identity */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/images/hd/farnad-ft-logo.png"
                  alt="Farnad Tech emblem"
                  width={44}
                  height={36}
                  style={{ width: 'auto' }}
                  loading="eager"
                  className="h-8 object-contain brightness-125 drop-shadow-[0_0_12px_rgba(73,173,10,0.65)]"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-[19px] font-extrabold tracking-tight text-white">
                    FARNAD
                  </span>
                  <span className="text-[9.5px] font-bold tracking-[0.22em] text-[#7be334] flex items-center gap-1 mt-0.5">
                    <span className="inline-block w-3 h-[1.5px] bg-[#7be334]" aria-hidden="true" />
                    TECH
                    <span className="inline-block w-3 h-[1.5px] bg-[#7be334]" aria-hidden="true" />
                  </span>
                </div>
              </div>

              <p className="text-[13px] leading-[1.65] text-white/70 max-w-[280px]">
                Strategic engineering studio building high-velocity digital ecosystems, enterprise web platforms, mobile solutions, and practical AI systems.
              </p>

              {/* Trust Badges */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-[12px] text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#7be334] shrink-0" />
                  <span>100% Client Code &amp; IP Ownership</span>
                </div>
                <div className="flex items-center gap-2 text-[12px] text-white/80">
                  <ShieldCheck className="w-4 h-4 text-[#7be334] shrink-0" />
                  <span>12 Months Dedicated Support Included</span>
                </div>
              </div>
            </div>

            {/* Column 2: Solutions & Services */}
            <div>
              <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49AD0A]" aria-hidden="true" />
                <span>Solutions</span>
              </h4>
              <ul className="space-y-2.5 text-[13px] text-white/75">
                {[
                  { label: 'Website Design & Dev', id: 'website-design' },
                  { label: 'Mobile App Development', id: 'mobile-app' },
                  { label: 'SEO & Search Strategy', id: 'seo' },
                  { label: 'Telegram Bots & Mini Apps', id: 'telegram-bot' },
                  { label: 'Trading & Expert Bots', id: 'trading-bots' },
                  { label: 'AI Models & Automation', id: 'ai-model' },
                ].map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/services/${item.id}`}
                      className="group inline-flex items-center gap-1.5 hover:text-[#8be848] transition-colors text-left"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#7be334] group-hover:translate-x-0.5 transition-all shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company & Quick Links */}
            <div>
              <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49AD0A]" aria-hidden="true" />
                <span>Company</span>
              </h4>
              <ul className="space-y-2.5 text-[13px] text-white/75">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'About Us', href: '/about' },
                  { label: 'Client Projects', href: '/#projects' },
                  { label: 'Work Process', href: '/#process' },
                  { label: 'FAQs', href: '/#faq' },
                  { label: 'Blog & Insights', href: '/#blog' },
                  { label: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 hover:text-[#8be848] transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#7be334] group-hover:translate-x-0.5 transition-all shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Studio Info */}
            <div>
              <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49AD0A]" aria-hidden="true" />
                <span>Headquarters</span>
              </h4>
              <ul className="space-y-3 text-[13px] text-white/80">
                <li>
                  <a
                    href="tel:+982144567890"
                    className="inline-flex items-center gap-2.5 hover:text-[#8be848] transition-colors tabular-nums"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#7be334]">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span>+98 21 4456 7890</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@farnadtech.com"
                    className="inline-flex items-center gap-2.5 hover:text-[#8be848] transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#7be334]">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span>info@farnadtech.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#7be334] mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>No. 43, Bahar St., Tehran, Iran</span>
                </li>
              </ul>

              <div className="mt-4 pt-2">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#7be334] hover:text-[#9df55a] inline-flex items-center gap-1 group"
                >
                  <span>Book In-Person / Zoom Meeting</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Column 5: Connect & Availability */}
            <div>
              <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#49AD0A]" aria-hidden="true" />
                <span>Connect</span>
              </h4>
              <div className="flex flex-wrap items-center gap-2.5">
                {[
                  { label: 'Telegram', icon: Send, href: 'https://t.me/farnadtech' },
                  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
                  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
                  { label: 'YouTube', icon: Youtube, href: 'https://youtube.com' },
                ].map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow Farnad Tech on ${label}`}
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#49AD0A] text-white flex items-center justify-center transition-all hover:scale-105 cursor-pointer shadow-sm"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="mt-5 p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[11.5px] text-white/75 space-y-1">
                <div className="flex items-center gap-1.5 text-[#7be334] font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#49AD0A] animate-pulse" />
                  <span>Team Availability</span>
                </div>
                <p className="leading-snug">
                  Senior engineering team currently accepting Q1 / Q2 engagements.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Bottom Bar: Language Switcher, Copyright & Back-to-Top */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-white/65">
            {/* Language Switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen((prev) => !prev)}
                aria-expanded={langMenuOpen}
                aria-label="Select language"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-[12px] font-medium hover:border-[#7be334] transition-colors cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-[#7be334]" />
                <span>{lang === 'EN' ? 'English (EN)' : 'فارسی (FA)'}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {langMenuOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-32 bg-[#122e03] border border-[#3a8708] rounded-xl p-1 shadow-xl z-20">
                  {(['EN', 'FA'] as const).map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setLang(opt);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${
                        lang === opt ? 'bg-[#49AD0A] text-white' : 'text-white/80 hover:bg-white/10'
                      }`}
                    >
                      {opt === 'EN' ? 'English (EN)' : 'فارسی (FA)'}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Copyright */}
            <p className="text-center sm:text-right">
              © {new Date().getFullYear()} Farnad Tech. All rights reserved.{' '}
              <span className="mx-2 text-white/30">|</span> Precision Software &amp; Digital Ecosystems.
            </p>

            {/* Smooth Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#49AD0A] border border-white/15 text-white flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-sm group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </motion.footer>
    </>
  );
}
