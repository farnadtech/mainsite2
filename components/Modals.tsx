'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, CheckCircle2, Send, Sparkles, X } from 'lucide-react';
import {
  BLOG_ARTICLES,
  BlogArticle,
  ECOSYSTEM_SERVICES,
  ProjectItem,
  ServiceItem,
  validateConsultationForm,
} from '@/lib/farnad-data';

interface ConsultationModalProps {
  initialService: string;
  onClose: () => void;
}

export function ConsultationModal({
  initialService,
  onClose,
}: ConsultationModalProps) {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [service, setService] = useState(initialService || ECOSYSTEM_SERVICES[0].title);
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateConsultationForm({ fullName, contact, service, notes });
    if (!res.valid) {
      setErrors(res.errors as Record<string, string>);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#bfe6a5] shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close consultation dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f1f8f3] hover:bg-[#e1f3e5] flex items-center justify-center text-[#1a3423] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#e8f8dd] text-[#49AD0A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 id="consultation-modal-title" className="mt-4 text-2xl font-extrabold text-[#111e16]">
              Consultation Request Received
            </h3>
            <p className="mt-2 text-sm text-[#43584b] max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-[#111e16]">{fullName}</span>. Our
              specialists will contact you at{' '}
              <span className="font-semibold text-[#111e16]">{contact}</span> regarding{' '}
              <span className="font-semibold text-[#398a06]">{service}</span>.
            </p>
            <button
              type="button"
              onClick={() => {
                setFullName('');
                setContact('');
                setNotes('');
                onClose();
              }}
              className="mt-6 farnad-btn-green text-white text-sm font-semibold px-6 py-2.5 rounded-full cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <span className="inline-block farnad-pill-badge text-xs font-semibold px-3 py-1 rounded-full">
              Free Strategy Call
            </span>
            <h3 id="consultation-modal-title" className="mt-2 text-2xl font-extrabold text-[#111e16]">
              Get a Free Consultation
            </h3>
            <p className="mt-1 text-sm text-[#43584b]">
              Tell us about your goals and we&apos;ll prepare a tailored technical roadmap.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
              <div>
                <label htmlFor="consult-name" className="block text-xs font-bold text-[#1d3425] mb-1">
                  Full Name
                </label>
                <input
                  id="consult-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g., Dr. Mehdi Karimi"
                  className="w-full rounded-xl border border-[#cce0d3] px-3.5 py-2.5 text-sm text-[#111e16] focus:outline-none focus:ring-2 focus:ring-[#49AD0A]"
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="consult-contact" className="block text-xs font-bold text-[#1d3425] mb-1">
                  Email or Phone Number
                </label>
                <input
                  id="consult-contact"
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="name@company.com or +98 21 4456 7890"
                  className="w-full rounded-xl border border-[#cce0d3] px-3.5 py-2.5 text-sm text-[#111e16] focus:outline-none focus:ring-2 focus:ring-[#49AD0A]"
                />
                {errors.contact && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{errors.contact}</p>
                )}
              </div>

              <div>
                <label htmlFor="consult-service" className="block text-xs font-bold text-[#1d3425] mb-1">
                  Service Interest
                </label>
                <select
                  id="consult-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
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
                  <option value="Full Digital Ecosystem Package">Full Digital Ecosystem Package</option>
                </select>
              </div>

              <div>
                <label htmlFor="consult-notes" className="block text-xs font-bold text-[#1d3425] mb-1">
                  Project Brief (Optional)
                </label>
                <textarea
                  id="consult-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Share your timeline, goals, or existing website..."
                  className="w-full rounded-xl border border-[#cce0d3] px-3.5 py-2.5 text-sm text-[#111e16] focus:outline-none focus:ring-2 focus:ring-[#49AD0A]"
                />
              </div>

              <button
                type="submit"
                className="w-full farnad-btn-green text-white text-sm font-semibold py-3 px-5 rounded-full inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Submit Consultation Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export function ServiceDetailModal({
  service,
  onClose,
  onBookService,
}: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#bfe6a5] shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close service details"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f1f8f3] hover:bg-[#e1f3e5] flex items-center justify-center text-[#1a3423] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-2xl bg-[#f3fced] border border-[#cdeab7] shrink-0 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-contain p-1"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-xs font-bold text-[#398a06]">{service.startingPrice}</span>
            <h3 id="service-modal-title" className="text-xl font-extrabold text-[#111e16]">
              {service.title}
            </h3>
            {service.subtitle && <p className="text-xs text-[#4b6254]">{service.subtitle}</p>}
          </div>
        </div>

        <p className="mt-4 text-sm text-[#394d40] leading-relaxed">{service.description}.</p>

        <ul className="mt-4 space-y-2.5">
          {service.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-[#1a3222]">
              <CheckCircle2 className="w-4 h-4 text-[#49AD0A] shrink-0 mt-0.5" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#dcebe0]">
          <Link
            href={`/services/${service.id}`}
            onClick={onClose}
            className="text-xs font-bold text-[#398a06] hover:text-[#286304] underline underline-offset-4 inline-flex items-center gap-1"
          >
            <span>View Full Dedicated Page</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-[#c8dfd0] text-sm font-semibold text-[#1a3222] hover:bg-[#f2f9f4] cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="farnad-btn-green text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Request This Service</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (name: string) => void;
}

export function ProjectModal({ project, onClose, onRequestSimilar }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-[#bfe6a5] shadow-2xl overflow-hidden">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow flex items-center justify-center text-[#1a3423] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative h-56 w-full bg-[#e8f8dd]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-6 sm:p-7">
          <div className="text-xs font-semibold text-[#398a06]">
            {project.category} · {project.metrics}
          </div>
          <h3 id="project-modal-title" className="mt-1 text-2xl font-extrabold text-[#111e16]">
            {project.name}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-[#394d40]">{project.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.deliverables.map((d) => (
              <span
                key={d}
                className="text-xs font-medium text-[#286304] bg-[#e8f8dd] border border-[#cdeab7] px-3 py-1 rounded-lg"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-[#c8dfd0] text-sm font-semibold text-[#1a3222] cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestSimilar(`Project Inquiry similar to ${project.name}`);
              }}
              className="farnad-btn-green text-white text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer"
            >
              Start a Similar Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ArticleModalProps {
  article: BlogArticle | null;
  showAll: boolean;
  onSelectArticle: (article: BlogArticle) => void;
  onClose: () => void;
}

export function ArticleModal({
  article,
  showAll,
  onSelectArticle,
  onClose,
}: ArticleModalProps) {
  if (!article && !showAll) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
    >
      <div className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl bg-white border border-[#bfe6a5] shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close articles dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f1f8f3] hover:bg-[#e1f3e5] flex items-center justify-center text-[#1a3423] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {article ? (
          <div>
            <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-[#184504]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#4a6153]">
              <span className="text-[#398a06] font-semibold">{article.category}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>

            <h3 id="article-modal-title" className="mt-2 text-2xl font-extrabold text-[#111e16]">
              {article.title}
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#32463a]">
              {article.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h3 id="article-modal-title" className="text-2xl font-extrabold text-[#111e16]">
              All Articles &amp; Insights
            </h3>
            <div className="mt-5 space-y-4">
              {BLOG_ARTICLES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectArticle(item)}
                  className="w-full text-left p-4 rounded-2xl border border-[#dcebe1] hover:border-[#49AD0A] hover:bg-[#f3fced] flex flex-col sm:flex-row gap-4 transition-colors cursor-pointer"
                >
                  <div className="relative w-full sm:w-36 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-[#4a6153]">
                      {item.category} · {item.date} · {item.readTime}
                    </div>
                    <h4 className="mt-1 text-base font-bold text-[#111e16]">{item.title}</h4>
                    <p className="mt-1 text-xs text-[#44594c] line-clamp-2">{item.excerpt}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export function AboutModal({ isOpen, onClose, onOpenConsultation }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-white border border-[#bfe6a5] shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close about dialog"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f1f8f3] hover:bg-[#e1f3e5] flex items-center justify-center text-[#1a3423] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="inline-flex items-center gap-1.5 farnad-pill-badge text-xs font-semibold px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Farnad Tech at a Glance</span>
        </div>

        <h3 id="about-modal-title" className="mt-3 text-2xl font-extrabold text-[#111e16]">
          12 Years of Digital Engineering Excellence
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#394d40]">
          Founded in Tehran and serving ambitious businesses worldwide, Farnad Tech unites product
          strategists, UI/UX designers, full-stack engineers, SEO architects, and AI specialists
          under one roof.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-center">
          <div className="rounded-2xl bg-[#f3fced] border border-[#cdeab7] p-3.5">
            <div className="text-xl font-extrabold text-[#398a06] tabular-nums">+350</div>
            <div className="text-xs text-[#3f612b]">Delivered Platforms</div>
          </div>
          <div className="rounded-2xl bg-[#f3fced] border border-[#cdeab7] p-3.5">
            <div className="text-xl font-extrabold text-[#398a06] tabular-nums">+96%</div>
            <div className="text-xs text-[#3f612b]">Long-Term Retention</div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-full border border-[#c8dfd0] text-sm font-semibold text-[#1a3222] cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="farnad-btn-green text-white text-sm font-semibold px-5 py-2.5 rounded-full cursor-pointer"
          >
            Talk With Our Team
          </button>
        </div>
      </div>
    </div>
  );
}
