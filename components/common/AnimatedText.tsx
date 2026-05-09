'use client';

import { motion } from 'framer-motion';
import { stagger, fadeUp, viewportOnce } from '@/lib/animations';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

export default function AnimatedText({ text, className, as: Tag = 'span', delay = 0 }: AnimatedTextProps) {
  const reduced = useReducedMotion();

  if (reduced) return <Tag className={className}>{text}</Tag>;

  const words = text.split(' ');

  return (
    <motion.span
      variants={{ ...stagger, visible: { ...stagger.visible, transition: { staggerChildren: 0.07, delayChildren: delay } } }}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={fadeUp} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
