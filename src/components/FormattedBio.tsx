import React from 'react';
import { motion } from 'motion/react';

interface FormattedBioProps {
  text: string;
  className?: string;
  paragraphClassName?: string;
}

/**
 * A component that takes a string and renders it as paragraphs with motion animations.
 * It handles both single and double newlines.
 */
export default function FormattedBio({ text, className = "", paragraphClassName = "" }: FormattedBioProps) {
  if (!text) return null;

  // Split by double newlines or single newlines that look like paragraph breaks
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim() !== "");

  return (
    <div className={`space-y-4 ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <motion.p 
          key={index} 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className={`leading-relaxed ${paragraphClassName}`}
        >
          {paragraph.trim()}
        </motion.p>
      ))}
    </div>
  );
}
