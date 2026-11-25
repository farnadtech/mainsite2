'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { BLOG_ARTICLES, BlogArticle } from '@/lib/farnad-data';
import { EASE_OUT_EXPO, SectionReveal, VIEWPORT_ONCE } from '@/components/MotionPrimitives';

interface BlogSectionProps {
  onSelectArticle: (article: BlogArticle) => void;
  onViewAllArticles: () => void;
}

export default function BlogSection({ onSelectArticle, onViewAllArticles }: BlogSectionProps) {
  return (
    <section id="blog" className="relative py-12 lg:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header */}
        <SectionReveal className="text-center max-w-[700px] mx-auto">
          <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
            Latest from Our Blog
          </span>
          <h2 className="mt-3 text-[30px] sm:text-[36px] lg:text-[40px] font-extrabold tracking-tight text-[#112407] text-balance">
            Our Latest Articles and Insights
          </h2>
          <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-[#355422]">
            Practical articles, tutorials, and insights on web, mobile, SEO, and digital business
            growth.
          </p>
        </SectionReveal>

        {/* Left Action + 3 Article Cards Row */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[190px_1fr] items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.48, delay: 0.06, ease: EASE_OUT_EXPO }}
            className="flex justify-center lg:justify-start"
          >
            <button
              type="button"
              onClick={onViewAllArticles}
              className="bg-white/95 hover:bg-white text-[#112407] border border-[#9bd873] hover:border-[#49AD0A] text-[13.5px] font-semibold px-5 py-2.5 rounded-full shadow-sm inline-flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 text-[#49AD0A]" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BLOG_ARTICLES.map((article, idx) => (
              <motion.button
                key={article.id}
                type="button"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT_ONCE}
                transition={{ duration: 0.5, delay: 0.08 + idx * 0.08, ease: EASE_OUT_EXPO }}
                onClick={() => onSelectArticle(article)}
                className="group bg-white/95 hover:bg-white rounded-[20px] border border-[#bfe6a5] shadow-[0_10px_28px_rgba(73,173,10,0.07)] hover:shadow-[0_14px_34px_rgba(73,173,10,0.14)] hover:border-[#49AD0A] overflow-hidden text-left transition-all duration-200 flex flex-col cursor-pointer"
              >
                <div className="relative h-[126px] w-full overflow-hidden bg-[#184504]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="eager"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <h3 className="text-[15.5px] font-extrabold text-[#112407] leading-snug group-hover:text-[#3c9107] transition-colors">
                    {article.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-1.5 text-[12.5px] font-medium text-[#3f612b]">
                    <Calendar className="w-3.5 h-3.5 text-[#49AD0A]" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
