'use client';

import React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const VIEWPORT_ONCE = { once: true, amount: 0.12 } as const;

interface SectionRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}

export function SectionReveal({
  children,
  delay = 0,
  y = 20,
  className,
  ...rest
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.52, delay, ease: EASE_OUT_EXPO }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
