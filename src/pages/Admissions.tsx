import { motion } from 'motion/react';
import { ClipboardList, CheckCircle2, Calendar, FileText, ArrowRight, HelpCircle, Globe, UserPlus, Mail, LogIn, CreditCard, FileEdit, Send, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../constants/siteContent';
import { topProgrammes } from '../constants/programmeDetails';
import FAQAccordion from '../components/FAQAccordion';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Admissions() {
  const admissions = siteContent.admissions;
  const steps = [
    {
      icon: <Globe className="h-8 w-8" />,
      ...admissions.process.steps[0]
    },
    {
      icon: <UserPlus className="h-8 w-8" />,
      ...admissions.process.steps[1]
    },
    {
      icon: <Mail className="h-8 w-8" />,
      ...admissions.process.steps[2]
    },
    {
      icon: <LogIn className="h-8 w-8" />,
      ...admissions.process.steps[3]
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      ...admissions.process.steps[4]
    },
    {
      icon: <FileEdit className="h-8 w-8" />,
      ...admissions.process.steps[5]
    },
    {
      icon: <Send className="h-8 w-8" />,
      ...admissions.process.steps[6]
    },
  ];

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
            {admissions.header.title}
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {admissions.header.subtitle}
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">{admissions.process.title}</h2>
            <p className="text-gray-600">{admissions.process.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 bg-gray-50 rounded-3xl border border-gray-100"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-hust-gold text-hust-blue rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {i + 1}
                </div>
                <div className="mb-6 p-4 bg-hust-blue/5 text-hust-accent inline-block rounded-2xl">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-hust-blue mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="max-w-3xl mx-auto mb-12 p-6 bg-hust-blue/5 rounded-3xl border border-hust-blue/10">
              <p className="text-gray-600 text-sm leading-relaxed">
                <span className="font-bold text-hust-blue">Note:</span> After the form has been submitted, you can print a copy of your form. 
                You can always log in to the application portal to view <span className="font-bold uppercase">Application Status</span> and <span className="font-bold uppercase">Application Info</span>.
              </p>
            </div>
            <a
              href={siteContent.contact.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-4 bg-hust-blue text-white rounded-full font-bold text-lg hover:bg-hust-accent transition-all shadow-xl group"
            >
              Start Your Application Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Requirements & Fees */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side: Requirements (2/3 width) */}
            <div className="lg:col-span-2 space-y-16">
              {/* Requirements */}
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-8">{admissions.requirements.title}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {admissions.requirements.list.map((req, i) => (
                    <li key={i} className="flex items-start space-x-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                      <div className="mt-1 p-1 bg-green-100 text-green-600 rounded-full shrink-0">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-gray-600 text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-hust-accent/5 p-8 rounded-3xl border border-hust-accent/10">
                  <h3 className="text-xl font-bold text-hust-blue mb-4">Program-Specific Requirements</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Each college and department has specific UTME and Direct Entry requirements. Explore our colleges to find the detailed criteria for your chosen programme.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link to="/colleges/medicine" className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-hust-accent hover:shadow-md transition-all group">
                      <span className="text-sm font-bold text-hust-blue">Tristate College of Medicine & Health Sciences(TCMHS)</span>
                      <ArrowRight className="h-4 w-4 text-hust-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/colleges/engineering" className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-hust-accent hover:shadow-md transition-all group">
                      <span className="text-sm font-bold text-hust-blue">College of Engineering & Computing Sciences (CECS)</span>
                      <ArrowRight className="h-4 w-4 text-hust-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/colleges/agriculture" className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-hust-accent hover:shadow-md transition-all group">
                      <span className="text-sm font-bold text-hust-blue">College of Agriculture, Life & Environmental Sciences (CALES)</span>
                      <ArrowRight className="h-4 w-4 text-hust-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link to="/colleges/business" className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 hover:border-hust-accent hover:shadow-md transition-all group">
                      <span className="text-sm font-bold text-hust-blue">College of Business, Law & Educational Sciences (CBLES)</span>
                      <ArrowRight className="h-4 w-4 text-hust-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Fee Schedule CTA */}
              <div className="bg-hust-blue rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="p-8 md:p-12 text-white relative">
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-hust-accent/10 -skew-x-12 translate-x-1/2"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-display font-bold mb-4">School Fees & Payment</h2>
                    <p className="text-gray-300 max-w-2xl mb-8">
                      View the detailed fee schedule for the 2025/2026 academic session and use our installment calculator to plan your payments.
                    </p>
                    <Link 
                      to="/fees"
                      className="inline-flex items-center px-8 py-4 bg-hust-gold text-hust-blue rounded-xl font-bold hover:bg-white transition-all shadow-lg"
                    >
                      View Fee Schedule & Calculator <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Sidebar (1/3 width) */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="p-2 bg-hust-gold/20 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-hust-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-hust-blue">Our Top Programmes</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {topProgrammes.map((prog) => (
                      <Link
                        key={prog.id}
                        to={`/programmes/${prog.id}`}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-hust-accent hover:bg-white hover:shadow-md transition-all group"
                      >
                        <span className="text-sm font-bold text-hust-blue group-hover:text-hust-accent transition-colors">
                          {prog.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-hust-accent group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <Link
                      to="/colleges"
                      className="flex items-center justify-center w-full py-3 bg-hust-blue/5 text-hust-blue rounded-xl font-bold text-sm hover:bg-hust-blue hover:text-white transition-all"
                    >
                      View All Programmes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our admissions process, requirements, and fees.</p>
          </div>

          <FAQAccordion items={admissions.faqs} />
        </div>
      </section>
    </div>
  );
}
