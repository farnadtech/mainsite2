'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Menu, Rocket, X } from 'lucide-react';
import { ECOSYSTEM_SERVICES } from '@/lib/farnad-data';

interface NavbarProps {
  onOpenConsultation?: (service?: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export default function Navbar({ onOpenConsultation, onSelectService }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === '/';
  const isAbout = pathname === '/about';
  const isContact = pathname === '/contact';

  const handleNavClick = (sectionId: string, route: string) => {
    setMobileOpen(false);
    setServicesOpen(false);

    if (route === '/about') {
      router.push('/about');
      return;
    }
    if (route === '/contact') {
      router.push('/contact');
      return;
    }

    if (isHome) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      router.push(`/${sectionId === 'top' ? '' : `#${sectionId}`}`);
    }
  };

  const handleSelectService = (svcId: string) => {
    setServicesOpen(false);
    setMobileOpen(false);
    router.push(`/services/${svcId}`);
  };

  const handleCtaClick = () => {
    setMobileOpen(false);
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      router.push('/contact');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full pt-3 sm:pt-4 px-3 sm:px-6 lg:px-8 -mb-[80px] sm:-mb-[86px] pointer-events-none">
      <div className="pointer-events-auto max-w-[1320px] mx-auto bg-white/92 backdrop-blur-md rounded-full border border-white/90 shadow-[0_10px_32px_rgba(32,77,4,0.09)] px-4 sm:px-6 lg:px-7 h-[64px] sm:h-[68px] flex items-center justify-between gap-4">
        {/* Brand Wordmark */}
        <Link
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              handleNavClick('top', '/');
            }
          }}
          className="flex items-center gap-2.5 shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#49AD0A] rounded-full pr-1"
        >
          <Image
            src="/images/hd/farnad-ft-logo.png"
            alt="Farnad Tech emblem"
            width={44}
            height={36}
            style={{ width: 'auto' }}
            className="h-8 sm:h-9 object-contain"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col leading-none">
            <span className="text-[17px] sm:text-[19px] font-extrabold tracking-tight text-[#112407] whitespace-nowrap">
              FARNAD
            </span>
            <span className="text-[9px] sm:text-[9.5px] font-bold tracking-[0.22em] text-[#49AD0A] flex items-center gap-1 mt-0.5 whitespace-nowrap">
              <span className="inline-block w-2.5 sm:w-3 h-[1.5px] bg-[#49AD0A]" aria-hidden="true" />
              TECH
              <span className="inline-block w-2.5 sm:w-3 h-[1.5px] bg-[#49AD0A]" aria-hidden="true" />
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14.5px] font-medium text-[#1b360b]"
          aria-label="Main navigation"
        >
          <button
            type="button"
            onClick={() => handleNavClick('top', '/')}
            className={`py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 cursor-pointer ${
              isHome
                ? 'text-[#398a06] border-[#49AD0A] font-bold'
                : 'border-transparent hover:text-[#398a06]'
            }`}
          >
            Home
          </button>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => {
                if (!isHome) {
                  router.push('/#services');
                } else {
                  setServicesOpen((prev) => !prev);
                  handleNavClick('services', '/');
                }
              }}
              aria-expanded={servicesOpen}
              className="py-1.5 inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 border-b-2 border-transparent hover:text-[#398a06] cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-150 ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full pt-3 w-72 z-50">
                <div className="bg-white rounded-2xl border border-[#bfe6a5] shadow-[0_18px_40px_rgba(73,173,10,0.14)] p-2">
                  {ECOSYSTEM_SERVICES.map((svc) => (
                    <button
                      key={svc.id}
                      type="button"
                      onClick={() => handleSelectService(svc.id)}
                      className="w-full text-left px-3.5 py-2.5 rounded-xl hover:bg-[#e8f8dd] transition-colors flex flex-col gap-0.5 cursor-pointer"
                    >
                      <span className="text-[13.5px] font-semibold text-[#112407]">
                        {svc.title}
                      </span>
                      <span className="text-[11.5px] text-[#3f612b] line-clamp-1">
                        {svc.startingPrice}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('projects', '/')}
            className="py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 border-transparent hover:text-[#398a06] cursor-pointer"
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('blog', '/')}
            className="py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 border-transparent hover:text-[#398a06] cursor-pointer"
          >
            Blog
          </button>

          <Link
            href="/about"
            className={`py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              isAbout
                ? 'text-[#398a06] border-[#49AD0A] font-bold'
                : 'border-transparent hover:text-[#398a06]'
            }`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            className={`py-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
              isContact
                ? 'text-[#398a06] border-[#49AD0A] font-bold'
                : 'border-transparent hover:text-[#398a06]'
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Primary CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleCtaClick}
            className="hidden sm:inline-flex items-center gap-2 farnad-btn-green text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Get a Free Consultation</span>
            <Rocket className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden p-2 rounded-full border border-[#bfe6a5] text-[#17300a] hover:bg-[#e8f8dd] transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto lg:hidden max-w-[1320px] mx-auto mt-2.5 bg-white/95 backdrop-blur-md rounded-2xl border border-[#bfe6a5] px-4 py-4 space-y-2 shadow-[0_18px_40px_rgba(73,173,10,0.14)]">
          <div className="flex flex-col space-y-1 text-[15px] font-medium text-[#1b360b]">
            <button
              type="button"
              onClick={() => handleNavClick('top', '/')}
              className={`text-left px-3 py-2.5 rounded-xl hover:bg-[#e8f8dd] ${
                isHome ? 'text-[#398a06] font-semibold bg-[#e8f8dd]/60' : ''
              }`}
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('services', '/')}
              className="text-left px-3 py-2.5 rounded-xl hover:bg-[#e8f8dd]"
            >
              Services
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('projects', '/')}
              className="text-left px-3 py-2.5 rounded-xl hover:bg-[#e8f8dd]"
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('blog', '/')}
              className="text-left px-3 py-2.5 rounded-xl hover:bg-[#e8f8dd]"
            >
              Blog
            </button>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className={`text-left px-3 py-2.5 rounded-xl hover:bg-[#e8f8dd] block ${
                isAbout ? 'text-[#398a06] font-semibold bg-[#e8f8dd]/60' : ''
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className={`text-left px-3 py-2.5 rounded-xl hover:bg-[#e8f8dd] block ${
                isContact ? 'text-[#398a06] font-semibold bg-[#e8f8dd]/60' : ''
              }`}
            >
              Contact Us
            </Link>
          </div>
          <button
            type="button"
            onClick={handleCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 farnad-btn-green text-white text-sm font-semibold px-5 py-3 rounded-full cursor-pointer"
          >
            <span>Get a Free Consultation</span>
            <Rocket className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
