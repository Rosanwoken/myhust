import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, GraduationCap, BookOpen, CreditCard, ChevronDown, ChevronUp, Award } from 'lucide-react';
import { topProgrammes } from '../constants/programmeDetails';
import { siteContent } from '../constants/siteContent';
import FeesCalculator from '../components/FeesCalculator';

export default function ProgrammeDetail() {
  const { id } = useParams<{ id: string }>();
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const programme = topProgrammes.find((p) => p.id === id);

  if (!programme) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white pb-20 pt-20 lg:pt-36">
      {/* Header Section */}
      <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={programme.image}
            alt={programme.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-hust-blue/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 backdrop-blur-md text-hust-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border border-white/20">
              {programme.college}
            </span>
            <h1 className="text-2xl md:text-7xl font-display font-bold text-white mb-4 md:mb-6 drop-shadow-lg px-4">
              {programme.title}
            </h1>
            <div className="w-24 h-1.5 bg-hust-gold mx-auto rounded-full shadow-lg"></div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16 md:mb-24">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-bold text-hust-blue">
                Programme Overview
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {programme.description}
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-hust-blue flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-hust-accent" />
                Admission Options
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-4 group">
                  <div className="flex items-center text-hust-blue font-bold text-lg">
                    <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mr-3 group-hover:bg-green-100 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    100 Level Admissions
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {programme.admissionOptions.utme}
                  </p>
                </div>

                <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow space-y-4 group">
                  <div className="flex items-center text-hust-blue font-bold text-lg">
                    <div className="w-10 h-10 rounded-xl bg-hust-accent/5 flex items-center justify-center mr-3 group-hover:bg-hust-accent/10 transition-colors">
                      <Award className="h-6 w-6 text-hust-accent" />
                    </div>
                    Direct Entry Admissions
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {programme.admissionOptions.directEntry}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href={siteContent.contact.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 md:px-10 md:py-4 bg-hust-gold text-hust-blue rounded-full font-bold text-sm md:text-lg hover:bg-hust-blue hover:text-white transition-all group shadow-xl shadow-hust-gold/20"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Image & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] group z-10">
              <img
                src={programme.image}
                alt={programme.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Programme Features Card */}
            {programme.features && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="absolute -left-12 -top-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[240px] z-20 hidden xl:block"
              >
                <h4 className="text-xs font-bold text-hust-accent uppercase tracking-widest mb-4 flex items-center">
                  <Award className="mr-2 h-4 w-4" /> Key Highlights
                </h4>
                <ul className="space-y-3">
                  {programme.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-[11px] text-gray-600 font-medium">
                      <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Floating Tuition Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative lg:absolute lg:-right-12 lg:bottom-12 mt-6 lg:mt-0 bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 w-full lg:max-w-[280px] z-20"
            >
              <div className="flex items-center space-x-3 mb-2 md:mb-3">
                <div className="p-1.5 md:p-2 bg-green-50 rounded-lg">
                  <CreditCard className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
                </div>
                <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">Tuition Per Session</span>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-hust-blue">{programme.tuition.perSession}</div>
              <p className="text-[10px] md:text-xs text-gray-500 mt-1 md:mt-2">Total (Session + Acceptance)</p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-hust-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-hust-blue/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>

        {/* Fees Calculator Section */}
        <div className="mt-16 md:mt-32">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-5xl font-display font-bold text-hust-blue mb-4">Payment Calculator</h2>
            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 md:mb-8">
              Use our interactive calculator to see a detailed breakdown of your installment payments for this programme.
            </p>
            
            <button
              onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
              className="inline-flex items-center px-8 py-3 bg-hust-blue text-white rounded-xl font-bold hover:bg-hust-accent transition-all group"
            >
              {isCalculatorOpen ? (
                <>
                  Hide Calculator <ChevronUp className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  Show Calculator <ChevronDown className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>

          <AnimatePresence>
            {isCalculatorOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <FeesCalculator />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
