'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cycleIndex, TESTIMONIALS } from '@/lib/farnad-data';
import { EASE_OUT_EXPO, VIEWPORT_ONCE } from '@/components/MotionPrimitives';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="relative py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[290px_1fr_110px] items-center gap-7 lg:gap-8">
          {/* Left Header Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="text-center lg:text-left"
          >
            <span className="inline-block farnad-pill-badge text-[12.5px] font-semibold px-4 py-1.5 rounded-full">
              Client Testimonial
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[32px] font-extrabold tracking-tight text-[#112407] leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-2.5 text-[14.5px] leading-[1.55] text-[#355422]">
              The trust and satisfaction of our clients is our greatest achievement.
            </p>
          </motion.div>

          {/* Center Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.54, delay: 0.08, ease: EASE_OUT_EXPO }}
            className="relative bg-white/95 rounded-[28px] border border-[#bfe6a5] shadow-[0_14px_40px_rgba(73,173,10,0.09)] px-6 sm:px-9 py-7 overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24, ease: EASE_OUT_EXPO }}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="flex-1 relative">
                  <Quote
                    className="w-8 h-8 text-[#96dc68] fill-[#96dc68] mb-2 -ml-1"
                    aria-hidden="true"
                  />
                  <blockquote className="text-[14.5px] sm:text-[15.5px] leading-[1.6] text-[#172e0a] font-medium">
                    {current.quote}
                  </blockquote>

                  <div className="mt-4">
                    <div className="text-[15px] font-extrabold text-[#112407]">{current.author}</div>
                    <div className="text-[13px] font-medium text-[#3f612b]">{current.role}</div>
                  </div>
                </div>

                <div className="relative w-[124px] h-[124px] sm:w-[136px] sm:h-[136px] rounded-full overflow-hidden ring-4 ring-[#c3e9a8] shadow-md shrink-0 bg-[#e8f8dd]">
                  <Image
                    src={current.avatar}
                    alt={current.author}
                    fill
                    sizes="136px"
                    loading="eager"
                    className="object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Arrow & Dot Controls */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.5, delay: 0.14, ease: EASE_OUT_EXPO }}
            className="flex flex-col items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => cycleIndex(prev, -1, TESTIMONIALS.length))
                }
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#e8f8dd] border border-[#bfe6a5] hover:border-[#49AD0A] shadow-[0_4px_14px_rgba(73,173,10,0.09)] flex items-center justify-center text-[#17300a] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setActiveIndex((prev) => cycleIndex(prev, 1, TESTIMONIALS.length))
                }
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full bg-white hover:bg-[#e8f8dd] border border-[#bfe6a5] hover:border-[#49AD0A] shadow-[0_4px_14px_rgba(73,173,10,0.09)] flex items-center justify-center text-[#17300a] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Show testimonial from ${item.author}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeIndex ? 'w-3.5 bg-[#49AD0A]' : 'w-2 bg-[#bae39e]'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
