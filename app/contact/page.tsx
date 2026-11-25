'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, MotionConfig } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
  Shield,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import BottomCtaAndFooter from '@/components/BottomCtaAndFooter';
import { SectionReveal } from '@/components/MotionPrimitives';
import {
  ContactFormInput,
  ECOSYSTEM_SERVICES,
  validateContactPageForm,
} from '@/lib/farnad-data';

const BUDGET_OPTIONS = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000+',
  'Flexible / Open',
];

const TIMELINE_OPTIONS = [
  'Immediate (1-2 weeks)',
  'Within 1 Month',
  '2 – 3 Months',
  'Flexible / Planning Phase',
];

const CONTACT_PRE_SALES_FAQS = [
  {
    q: 'Do you sign Non-Disclosure Agreements (NDAs) before discussing our project?',
    a: 'Yes, absolutely. We routinely sign standard bilateral NDAs before discovery calls to ensure your trade secrets, proprietary algorithms, and brand ideas remain 100% confidential.',
  },
  {
    q: 'How fast can we expect an initial project proposal and cost breakdown?',
    a: 'After our initial 30-minute discovery call, our senior engineering leads prepare a structured technical proposal with milestone deliverables, timeline estimates, and transparent fixed pricing within 48 hours.',
  },
  {
    q: 'Can Farnad Tech collaborate with our existing in-house development team?',
    a: 'Yes. We frequently augment existing teams—whether handling frontend UI/UX in Next.js, building dedicated backend microservices, or implementing custom AI / algorithmic trading pipelines.',
  },
  {
    q: 'What are your payment terms and contract milestones?',
    a: 'We work on milestone-based contracts (typically initial deposit upon architecture sign-off, interim progress demo review, and final settlement upon staging deployment and code transfer).',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormInput>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: ECOSYSTEM_SERVICES[0].title,
    budget: BUDGET_OPTIONS[1],
    timeline: TIMELINE_OPTIONS[1],
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateContactPageForm(formData);
    if (!res.valid) {
      setErrors(res.errors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      const generatedId = `FT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedId);
    }, 450);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: ECOSYSTEM_SERVICES[0].title,
      budget: BUDGET_OPTIONS[1],
      timeline: TIMELINE_OPTIONS[1],
      message: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="farnad-canvas min-h-screen flex flex-col overflow-x-clip">
        <Navbar />

        <main className="flex-1 pt-24 sm:pt-28">
          {/* Breadcrumb Navigation */}
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#3f612b]">
              <Link href="/" className="hover:text-[#49AD0A] transition-colors">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#112407] font-semibold">Contact Us</span>
            </nav>
          </div>

          {/* 1. Hero Section */}
          <section className="relative pt-6 pb-10 lg:pt-10 lg:pb-12 text-center max-w-[850px] mx-auto px-4 sm:px-6">
            <SectionReveal>
              <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                Get in Touch · Free Consultation
              </span>
              <h1 className="mt-3.5 text-[34px] sm:text-[44px] lg:text-[48px] font-extrabold tracking-tight text-[#112407] leading-[1.12] text-balance">
                Let&apos;s Architect Your Next Digital Breakthrough
              </h1>
              <p className="mt-4 text-[15px] sm:text-[16.5px] leading-[1.65] text-[#355422] max-w-2xl mx-auto">
                Have a project in mind, need technical advice, or want to scale an existing system?
                Speak directly with Farnad Tech&apos;s senior engineering team.
              </p>

              {/* Direct Channel Badges Strip */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-[13px] font-medium text-[#112407]">
                <a
                  href="tel:+982144567890"
                  className="bg-white/90 hover:bg-white border border-[#bfe6a5] hover:border-[#49AD0A] px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 transition-all shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#49AD0A]" />
                  <span>+98 21 4456 7890</span>
                </a>
                <a
                  href="mailto:info@farnadtech.com"
                  className="bg-white/90 hover:bg-white border border-[#bfe6a5] hover:border-[#49AD0A] px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 transition-all shadow-sm"
                >
                  <Mail className="w-3.5 h-3.5 text-[#49AD0A]" />
                  <span>info@farnadtech.com</span>
                </a>
                <div className="bg-white/90 border border-[#bfe6a5] px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm text-[#355422]">
                  <Clock className="w-3.5 h-3.5 text-[#49AD0A]" />
                  <span>Average Response Time: &lt; 2 Hours</span>
                </div>
              </div>
            </SectionReveal>
          </section>

          {/* 2. Main 2-Column Contact Hub */}
          <section className="relative py-8 sm:py-12">
            <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
                {/* Left Column: Glass RFP & Consultation Form */}
                <div className="farnad-glass-card rounded-[32px] border border-[#bfe6a5] p-6 sm:p-9 shadow-[0_18px_45px_rgba(73,173,10,0.12)]">
                  {submitted ? (
                    <div className="py-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6ad422] to-[#49AD0A] text-white flex items-center justify-center mx-auto shadow-[0_8px_20px_rgba(73,173,10,0.36)] ring-4 ring-[#e8f8dd]">
                        <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                      </div>

                      <span className="mt-4 inline-block text-xs font-bold text-[#2c6b05] bg-[#e8f8dd] px-3 py-1 rounded-full border border-[#a8e280]/60">
                        Inquiry Confirmed · Reference #{ticketId}
                      </span>

                      <h2 className="mt-3 text-[26px] sm:text-[30px] font-extrabold text-[#112407]">
                        Thank You, {formData.fullName}!
                      </h2>

                      <p className="mt-3 text-[14.5px] leading-relaxed text-[#355422] max-w-md mx-auto">
                        We have received your project brief regarding{' '}
                        <strong className="text-[#112407] font-semibold">{formData.service}</strong>.
                        One of our senior architects will review your requirements and reach out to you at{' '}
                        <strong className="text-[#112407] font-semibold">{formData.email}</strong> or{' '}
                        <strong className="text-[#112407] font-semibold">{formData.phone}</strong>.
                      </p>

                      {/* 3-Step Onboarding Roadmap */}
                      <div className="mt-8 text-left rounded-2xl bg-white/95 border border-[#cdeab7] p-5 max-w-md mx-auto space-y-3.5">
                        <div className="text-xs font-bold text-[#274e14] uppercase tracking-wider">
                          Next Steps with Farnad Tech:
                        </div>
                        <div className="flex items-start gap-3 text-xs text-[#355422]">
                          <span className="w-5 h-5 rounded-full bg-[#49AD0A] text-white flex items-center justify-center font-bold shrink-0">
                            1
                          </span>
                          <span>
                            <strong>Discovery Review:</strong> Our team evaluates technical feasibility and architecture choices.
                          </span>
                        </div>
                        <div className="flex items-start gap-3 text-xs text-[#355422]">
                          <span className="w-5 h-5 rounded-full bg-[#49AD0A] text-white flex items-center justify-center font-bold shrink-0">
                            2
                          </span>
                          <span>
                            <strong>30-Min Strategy Call:</strong> We discuss timeline, milestones, and tech stack options.
                          </span>
                        </div>
                        <div className="flex items-start gap-3 text-xs text-[#355422]">
                          <span className="w-5 h-5 rounded-full bg-[#49AD0A] text-white flex items-center justify-center font-bold shrink-0">
                            3
                          </span>
                          <span>
                            <strong>Tailored Proposal:</strong> Fixed-price scope of work delivered within 48 hours.
                          </span>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-center gap-3">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="bg-white hover:bg-[#f3fced] border border-[#9bd873] text-[#112407] text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 cursor-pointer transition-all"
                        >
                          <RotateCcw className="w-4 h-4 text-[#49AD0A]" />
                          <span>Submit Another Request</span>
                        </button>
                        <Link
                          href="/"
                          className="farnad-btn-green text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full inline-flex items-center gap-2 cursor-pointer"
                        >
                          <span>Back to Homepage</span>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-[#398a06] tracking-wider uppercase">
                            Project Inquiry
                          </span>
                          <h2 className="text-[22px] sm:text-[26px] font-extrabold text-[#112407] mt-1">
                            Start Your Free Project Consultation
                          </h2>
                        </div>
                        <div className="hidden sm:flex w-10 h-10 rounded-2xl bg-[#e8f8dd] text-[#49AD0A] items-center justify-center">
                          <FileText className="w-5 h-5" />
                        </div>
                      </div>

                      <p className="mt-2 text-[13.5px] leading-relaxed text-[#355422]">
                        Fill out the details below. Our technical leads review all inquiries within 2 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                        {/* Name & Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-fullName" className="block text-xs font-bold text-[#1d3425] mb-1">
                              Full Name <span className="text-[#49AD0A]">*</span>
                            </label>
                            <input
                              id="contact-fullName"
                              type="text"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="e.g. Dr. Mehdi Karimi"
                              className="w-full rounded-xl border border-[#cce0d3] px-3.5 py-2.5 text-sm text-[#111e16] bg-white focus:outline-none focus:ring-2 focus:ring-[#49AD0A]"
                            />
                            {errors.fullName && (
                              <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="contact-company" className="block text-xs font-bold text-[#1d3425] mb-1">
                              Company / Organization (Optional)
                            </label>
                            <input
                              id="contact-company"
                              type="text"
                              value={formData.company || ''}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="e.g. I.D.G or Harajino"
                              className="w-full rounded-xl border border-[#cce0d3] px-3.5 py-2.5 text-sm text-[#111e16] bg-white focus:outline-none focus:ring-2 focus:ring-[#49AD0A]"
                            />
                          </div>
                        </div>

                        {/* Email & Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="contact-email" className="block text-xs font-bold text-[#1d3425] mb-1">
                              Email Address <span className="text-[#49AD0A]">*</span>
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="name@company.com"
                              className="w-full rounded-xl border border-[#cce0d3] px-3.5 py-2.5 text-sm text-[#111e16] bg-white focus:outline-none focus:ring-2 focus:ring-[#49AD0A]"
                            />
                            {errors.email && (
                              <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>
                            )}
                          </div>

                          <div>
                            <label htmlFor="contact-phone" className="block text-xs font-bold text-[#1d3425] mb-1">
                              Phone / WhatsApp <span className="text-[#49AD0A]">*</span>
                            </label>
                            <input
                              id="contact-phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+98 21 4456 7890"
                              className="w-full rounded-xl border border-[#cce0d3] px-3.5 py-2.5 text-sm text-[#111e16] bg-white focus:outline-none focus:ring-2 focus:ring-[#49AD0A]"
                            />
                            {errors.phone && (
                              <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>
                            )}
                          </div>
                        </div>

                        {/* Service Required */}
                        <div>
                          <label htmlFor="contact-service" className="block text-xs font-bold text-[#1d3425] mb-1">
                            Service Category <span className="text-[#49AD0A]">*</span>
                          </label>
                          <select
                            id="contact-service"
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full rounded-xl border border-[#cce0d3] px-3.5 py-2.5 text-sm text-[#111e16] bg-white focus:outline-none focus:ring-2 focus:ring-[#49AD0A]"
                          >
                            {ECOSYSTEM_SERVICES.map((svc) => (
                              <option key={svc.id} value={svc.title}>
                                {svc.title} ({svc.startingPrice})
                              </option>
                            ))}
                            <option value="SEO (Search Engine Optimization)">
                              SEO (Search Engine Optimization) (From $290 / month)
                            </option>
                            <option value="Full Digital Ecosystem Package">
                              Full Digital Ecosystem Package (Web + Mobile + Bot)
                            </option>
                            <option value="Custom Software Architecture Consultation">
                              Custom Software Architecture Consultation
                            </option>
                          </select>
                          {errors.service && (
                            <p className="mt-1 text-xs text-red-600 font-medium">{errors.service}</p>
                          )}
                        </div>

                        {/* Estimated Budget & Timeline Selectors */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-[#1d3425] mb-1.5">
                              Estimated Budget
                            </label>
                            <div className="grid grid-cols-2 gap-1.5">
                              {BUDGET_OPTIONS.map((b) => (
                                <button
                                  key={b}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, budget: b })}
                                  className={`px-2.5 py-2 rounded-lg text-xs font-medium text-center transition-all cursor-pointer ${
                                    formData.budget === b
                                      ? 'bg-[#49AD0A] text-white shadow-sm font-semibold'
                                      : 'bg-white border border-[#cce0d3] text-[#355422] hover:bg-[#e8f8dd]'
                                  }`}
                                >
                                  {b}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-[#1d3425] mb-1.5">
                              Target Launch Timeline
                            </label>
                            <div className="space-y-1.5">
                              {TIMELINE_OPTIONS.map((t) => (
                                <button
                                  key={t}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, timeline: t })}
                                  className={`w-full px-3 py-1.5 rounded-lg text-xs font-medium text-left transition-all cursor-pointer ${
                                    formData.timeline === t
                                      ? 'bg-[#49AD0A] text-white shadow-sm font-semibold'
                                      : 'bg-white border border-[#cce0d3] text-[#355422] hover:bg-[#e8f8dd]'
                                  }`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Message / Brief */}
                        <div>
                          <label htmlFor="contact-message" className="block text-xs font-bold text-[#1d3425] mb-1">
                            Project Description &amp; Goals <span className="text-[#49AD0A]">*</span>
                          </label>
                          <textarea
                            id="contact-message"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your project, target audience, timeline, or links to existing systems..."
                            className="w-full rounded-xl border border-[#cce0d3] px-3.5 py-2.5 text-sm text-[#111e16] bg-white focus:outline-none focus:ring-2 focus:ring-[#49AD0A]"
                          />
                          {errors.message && (
                            <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full farnad-btn-green text-white text-[14px] font-semibold py-3.5 px-6 rounded-full inline-flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-75 shadow-[0_8px_20px_rgba(73,173,10,0.32)]"
                          >
                            {isSubmitting ? (
                              <span>Sending Request...</span>
                            ) : (
                              <>
                                <span>Submit Project Inquiry</span>
                                <Send className="w-4 h-4" />
                              </>
                            )}
                          </button>
                        </div>

                        <p className="text-[11.5px] text-[#4d6b38] text-center">
                          🔒 We respect your privacy. All inquiries are held strictly confidential. Bilateral NDAs available upon request.
                        </p>
                      </form>
                    </>
                  )}
                </div>

                {/* Right Column: Direct Channels, Visiting Hours & Map Hub */}
                <div className="space-y-6">
                  {/* Direct Contact Cards */}
                  <div className="farnad-glass-card rounded-[28px] border border-[#bfe6a5] p-6 space-y-4">
                    <h3 className="text-[17px] font-extrabold text-[#112407] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#49AD0A]" />
                      <span>Direct Engineering Channels</span>
                    </h3>

                    {/* Phone */}
                    <a
                      href="tel:+982144567890"
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-[#cdeab7] hover:border-[#49AD0A] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6ad422] to-[#49AD0A] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-xs text-[#49AD0A] font-bold block">Telephone</span>
                        <span className="text-[14px] font-extrabold text-[#112407] tabular-nums">
                          +98 21 4456 7890
                        </span>
                        <span className="text-[11px] text-[#4d6b38] block mt-0.5">
                          Sat – Wed: 09:00 – 18:00
                        </span>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:info@farnadtech.com"
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-[#cdeab7] hover:border-[#49AD0A] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6ad422] to-[#49AD0A] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-xs text-[#49AD0A] font-bold block">Inquiries &amp; RFPs</span>
                        <span className="text-[14px] font-extrabold text-[#112407]">
                          info@farnadtech.com
                        </span>
                        <span className="text-[11px] text-[#4d6b38] block mt-0.5">
                          Direct inbox of lead architects
                        </span>
                      </div>
                    </a>

                    {/* Telegram Direct */}
                    <a
                      href="https://t.me/farnadtech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3.5 p-3 rounded-2xl bg-white border border-[#cdeab7] hover:border-[#49AD0A] transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6ad422] to-[#49AD0A] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                        <MessageCircle className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <span className="text-xs text-[#49AD0A] font-bold block">Telegram Support</span>
                        <span className="text-[14px] font-extrabold text-[#112407]">
                          @farnadtech
                        </span>
                        <span className="text-[11px] text-[#4d6b38] block mt-0.5">
                          Instant chat for rapid questions
                        </span>
                      </div>
                    </a>
                  </div>

                  {/* Office Location & Map Mockup Card */}
                  <div className="farnad-glass-card rounded-[28px] border border-[#bfe6a5] p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-[17px] font-extrabold text-[#112407] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#49AD0A]" />
                        <span>Tehran Headquarters</span>
                      </h3>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#e8f8dd] text-[#2c6b05]">
                        Visiting by Appointment
                      </span>
                    </div>

                    <p className="text-[13px] leading-relaxed text-[#355422]">
                      No. 43, Bahar Street, Tehran, Iran
                      <br />
                      Postal Code: 15739-14562
                    </p>

                    {/* Stylized Tehran Map Canvas Box */}
                    <div className="relative h-44 rounded-2xl overflow-hidden border border-[#bfe6a5] bg-[#e6f7df] flex items-center justify-center group">
                      {/* Map grid lines aesthetic */}
                      <div
                        className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#bfe6a5_1px,transparent_1px),linear-gradient(to_bottom,#bfe6a5_1px,transparent_1px)] bg-[size:24px_24px]"
                        aria-hidden="true"
                      />
                      {/* Radial green aura */}
                      <div
                        className="absolute w-32 h-32 rounded-full bg-[#49AD0A]/20 blur-xl"
                        aria-hidden="true"
                      />

                      {/* Tehran Pin */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#6ad422] to-[#49AD0A] text-white flex items-center justify-center shadow-lg ring-4 ring-white animate-bounce">
                          <MapPin className="w-6 h-6 stroke-[2.2]" />
                        </div>
                        <div className="mt-2 bg-white/95 backdrop-blur-sm border border-[#a8e280] px-3 py-1 rounded-full text-[11px] font-extrabold text-[#112407] shadow-sm">
                          Farnad Tech Studio (Tehran)
                        </div>
                      </div>

                      <a
                        href="https://maps.google.com/?q=Tehran,Bahar+Street"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-2.5 right-2.5 bg-white/90 hover:bg-white text-[#112407] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#a8e280] shadow-sm inline-flex items-center gap-1.5 transition-all"
                      >
                        <span>Open Map</span>
                        <ExternalLink className="w-3 h-3 text-[#49AD0A]" />
                      </a>
                    </div>

                    {/* Visiting Hours */}
                    <div className="pt-2 text-xs text-[#355422] space-y-1">
                      <div className="flex justify-between">
                        <span className="font-medium">Saturday – Wednesday:</span>
                        <span className="font-bold text-[#112407]">09:00 – 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Thursday:</span>
                        <span className="font-bold text-[#112407]">09:00 – 14:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Friday:</span>
                        <span className="text-[#398a06] font-semibold">Support SLA Only</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust Pillars */}
                  <div className="rounded-2xl bg-white/80 border border-[#bfe6a5] p-5 space-y-2.5 text-xs text-[#2b4c18]">
                    <div className="flex items-center gap-2 font-bold text-[#112407]">
                      <Shield className="w-4 h-4 text-[#49AD0A]" />
                      <span>Farnad Tech Client Guarantee</span>
                    </div>
                    <ul className="space-y-1.5 pl-6 list-disc text-[12px] text-[#355422]">
                      <li>100% intellectual property &amp; source code transfer upon completion</li>
                      <li>Transparent milestone-based contracts with no hidden fees</li>
                      <li>12 months post-launch technical warranty &amp; security maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Pre-Sales FAQ Accordion */}
          <section className="relative py-14 bg-white/70 border-t border-[#d8ebd2]">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
              <SectionReveal className="text-center">
                <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
                  Common Inquiries
                </span>
                <h2 className="mt-3 text-[28px] sm:text-[34px] font-extrabold tracking-tight text-[#112407]">
                  Frequently Asked Pre-Sales Questions
                </h2>
                <p className="mt-2 text-[14px] text-[#355422]">
                  Everything you need to know about kicking off a project with Farnad Tech.
                </p>
              </SectionReveal>

              <div className="mt-8 space-y-3">
                {CONTACT_PRE_SALES_FAQS.map((faq, idx) => {
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

        <BottomCtaAndFooter hideCta={true} />
      </div>
    </MotionConfig>
  );
}
