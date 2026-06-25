import { motion, AnimatePresence } from 'motion/react';
import { Stethoscope, Cpu, BarChart3, Microscope, Zap, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../constants/siteContent';
import React, { useState } from 'react';

const collegeIcons: Record<string, React.ReactNode> = {
  medicine: <Stethoscope className="h-10 w-10" />,
  engineering: <Cpu className="h-10 w-10" />,
  agriculture: <Microscope className="h-10 w-10" />,
  business: <BarChart3 className="h-10 w-10" />,
};

const colleges = siteContent.colleges.map(c => ({
  ...c,
  icon: collegeIcons[c.id] || <Zap className="h-10 w-10" />
}));

function CollegePrograms({ programs }: { programs: { name: string; id: string }[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-hust-accent/30 transition-all group"
      >
        <span className="font-bold text-hust-blue text-sm uppercase tracking-widest">
          {isExpanded ? 'Hide Programs' : 'View Programs'}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="p-1 bg-gray-50 rounded-lg group-hover:bg-hust-blue group-hover:text-white transition-colors"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ul className="grid grid-cols-1 gap-2 p-4 mt-2 bg-white/50 rounded-2xl border border-dashed border-gray-200">
              {programs.map((prog, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="text-sm text-gray-500 flex items-center group/item"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-hust-accent mr-3"></div>
                  <Link 
                    to={`/programmes/${prog.id}`}
                    className="hover:text-hust-accent transition-colors flex items-center"
                  >
                    {prog.name}
                    <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover/item:opacity-100 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Colleges() {
  const collegesPage = siteContent.collegesPage;

  return (
    <div className="pt-36">
      {/* Page Header */}
      <section className="bg-hust-blue py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hust-accent/10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {collegesPage.header.title}
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {collegesPage.header.subtitle}
          </p>
        </div>
      </section>

      {/* Colleges Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {colleges.map((college, i) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className={`md:w-1/3 p-8 flex items-center justify-center text-white ${college.color}`}>
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">{college.icon}</div>
                      <h3 className="text-xl font-bold leading-tight">{college.title}</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8 flex flex-col">
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-grow">{college.desc}</p>
                    
                    <CollegePrograms programs={college.programs} />

                    <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                      <Link
                        to={`/colleges/${college.id}`}
                        className="text-hust-blue font-bold text-sm hover:text-hust-accent transition-colors flex items-center"
                      >
                        Explore College
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <a
                        href={siteContent.contact.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-hust-accent font-bold text-sm hover:text-hust-blue transition-colors flex items-center"
                      >
                        Apply Now
                        <Zap className="ml-2 h-4 w-4 fill-current" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remedial Program CTA */}
      <section className="py-20 bg-hust-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-hust-blue mb-6">{collegesPage.remedialCta.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            {collegesPage.remedialCta.desc}
          </p>
          <Link
            to="/admissions"
            className="px-8 py-4 bg-hust-blue text-white rounded-full font-bold hover:bg-hust-accent transition-all"
          >
            Explore Remedial Programme
          </Link>
        </div>
      </section>
    </div>
  );
}
