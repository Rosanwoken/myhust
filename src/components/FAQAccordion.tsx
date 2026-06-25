import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className={`bg-gray-50 rounded-2xl border transition-all duration-300 ${
            openIndex === index ? 'border-hust-accent/30 shadow-md' : 'border-gray-100 hover:border-hust-accent/30'
          }`}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 text-left flex items-center justify-between group outline-none"
            aria-expanded={openIndex === index}
          >
            <h3 className={`text-lg font-bold transition-colors flex items-start ${
              openIndex === index ? 'text-hust-accent' : 'text-hust-blue group-hover:text-hust-accent'
            }`}>
              <span className="text-hust-accent mr-3 font-mono shrink-0">Q.</span>
              <span>{item.question}</span>
            </h3>
            <div className={`shrink-0 ml-4 p-1 rounded-full transition-colors ${
              openIndex === index ? 'bg-hust-accent/10 text-hust-accent' : 'bg-gray-200/50 text-gray-400 group-hover:text-hust-accent'
            }`}>
              <ChevronDown 
                className={`h-5 w-5 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="pl-7 border-l-2 border-hust-gold/30">
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
