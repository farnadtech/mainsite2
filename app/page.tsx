'use client';

import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import EcosystemSection from '@/components/EcosystemSection';
import AboutStatsSection from '@/components/AboutStatsSection';
import ProjectsSection from '@/components/ProjectsSection';
import PricingSection from '@/components/PricingSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import BottomCtaAndFooter from '@/components/BottomCtaAndFooter';
import {
  AboutModal,
  ArticleModal,
  ConsultationModal,
  ProjectModal,
  ServiceDetailModal,
} from '@/components/Modals';
import {
  BlogArticle,
  ECOSYSTEM_SERVICES,
  ProjectItem,
  ServiceItem,
} from '@/lib/farnad-data';

export default function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [showAllArticles, setShowAllArticles] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const openConsultation = (serviceName?: string) => {
    setConsultationService(serviceName || '');
    setConsultationOpen(true);
  };

  const selectServiceById = (serviceId: string) => {
    const found = ECOSYSTEM_SERVICES.find((s) => s.id === serviceId);
    if (found) setSelectedService(found);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="farnad-canvas min-h-screen flex flex-col overflow-x-clip">
        <Navbar onOpenConsultation={openConsultation} onSelectService={selectServiceById} />

      <main className="flex-1">
        <HeroSection onOpenConsultation={openConsultation} />
        <EcosystemSection onSelectService={setSelectedService} />
        <AboutStatsSection onOpenAboutModal={() => setAboutModalOpen(true)} />
        <ProjectsSection onSelectProject={setSelectedProject} />
        <PricingSection onOrderService={openConsultation} />
        <WorkProcessSection />
        <TestimonialsSection />
        <FAQSection onOpenConsultation={openConsultation} />
        <BlogSection
          onSelectArticle={(article) => {
            setShowAllArticles(false);
            setSelectedArticle(article);
          }}
          onViewAllArticles={() => {
            setSelectedArticle(null);
            setShowAllArticles(true);
          }}
        />
      </main>

      <BottomCtaAndFooter
        onOpenConsultation={openConsultation}
        onSelectServiceById={selectServiceById}
      />

      {/* Interactive Modals */}
      {consultationOpen && (
        <ConsultationModal
          key={consultationService || 'default'}
          initialService={consultationService}
          onClose={() => setConsultationOpen(false)}
        />
      )}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={openConsultation}
      />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={openConsultation}
      />
      <ArticleModal
        article={selectedArticle}
        showAll={showAllArticles}
        onSelectArticle={(a) => setSelectedArticle(a)}
        onClose={() => {
          setSelectedArticle(null);
          setShowAllArticles(false);
        }}
      />
      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenConsultation={() => openConsultation()}
      />
      </div>
    </MotionConfig>
  );
}
