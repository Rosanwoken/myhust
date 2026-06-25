import { motion } from 'motion/react';
import { BookOpen, GraduationCap, Users, Globe, Award, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../constants/siteContent';
import FAQAccordion from '../components/FAQAccordion';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Academics() {
  const academicFeatures = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "World-Class Curriculum",
      desc: "Our programs are designed to meet international standards and industry needs."
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Expert Faculty",
      desc: "Learn from distinguished professors and researchers at the forefront of their fields."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Small Class Sizes",
      desc: "Personalized attention and mentorship to ensure every student succeeds."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Perspective",
      desc: "International partnerships and exchange programs for a broader horizon."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Research Excellence",
      desc: "State-of-the-art labs and funding for groundbreaking research projects."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation Hub",
      desc: "Fostering creativity and entrepreneurial spirit through hands-on learning."
    }
  ];

  return (
    <div className="pt-36">
      {/* Hero Section */}
      <section className="bg-hust-blue py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hust-accent/10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-bold mb-8"
            >
              Academic <span className="text-hust-gold">Excellence</span>
            </motion.h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
              At Hillside University of Science and Technology, we provide a transformative educational experience that prepares students to lead and innovate in a rapidly changing world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admissions" className="px-8 py-4 bg-hust-gold text-hust-blue rounded-full font-bold hover:bg-white transition-all shadow-lg">
                Apply for Admission
              </Link>
              <Link to="/colleges" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
                Explore Colleges
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Academics at HUST */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">Why Study at HUST?</h2>
            <div className="w-24 h-1.5 bg-hust-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-hust-blue/5 text-hust-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hust-blue group-hover:text-white transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-hust-blue mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colleges Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">Our Colleges</h2>
              <p className="text-gray-600 text-lg">
                HUST is organized into specialized colleges, each dedicated to excellence in its respective field of study.
              </p>
            </div>
            <Link to="/colleges" className="text-hust-accent font-bold hover:underline flex items-center">
              View All Programs <BookOpen className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteContent.colleges.map((college) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl shadow-xl aspect-[16/10]"
              >
                <img 
                  src={college.image} 
                  alt={college.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hust-blue via-hust-blue/40 to-transparent opacity-90"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-3">{college.title}</h3>
                  <p className="text-gray-200 text-sm mb-6 line-clamp-2">{college.desc}</p>
                  <Link 
                    to={`/colleges/${college.id}`}
                    className="inline-flex items-center text-hust-gold font-bold hover:text-white transition-colors"
                  >
                    Explore Programs <BookOpen className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">Academic FAQs</h2>
            <p className="text-gray-600">Common questions about our academic programs, standards, and student support.</p>
          </div>

          <FAQAccordion items={siteContent.academics?.faqs || []} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hust-blue rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-hust-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of students who are building their future at Hillside University. Applications are currently open for the new academic session.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href={siteContent.contact.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-hust-gold text-hust-blue rounded-full font-bold hover:bg-white transition-all shadow-xl"
                >
                  Apply Now
                </a>
                <Link to="/contact" className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all">
                  Talk to an Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
