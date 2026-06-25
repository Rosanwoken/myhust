import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, User, Quote, ShieldCheck, Award, Briefcase, Target, Star } from 'lucide-react';
import { centreDetails } from '../constants/centreDetails';
import FormattedBio from '../components/FormattedBio';
import Breadcrumbs from '../components/Breadcrumbs';

export default function CentreDetail() {
  const { id } = useParams<{ id: string }>();
  const centre = id ? centreDetails[id] : null;

  if (!centre) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-display font-bold text-hust-blue mb-6">Centre Not Found</h1>
        <Link to="/" className="text-hust-accent font-bold flex items-center justify-center hover:underline">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-36">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={centre.image}
            alt={centre.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-hust-blue/70 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">{centre.title}</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
              Advancing knowledge and excellence at HUST
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Director & Objectives */}
            <div className="lg:col-span-2 space-y-20">
              {/* Director Welcome Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img 
                      src={centre.director.image} 
                      alt={centre.director.name}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-hust-blue/90 backdrop-blur-sm p-4 rounded-2xl text-white">
                      <p className="text-xs font-bold text-hust-gold uppercase tracking-wider mb-1">Director</p>
                      <p className="font-display font-bold text-sm">{centre.director.name}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-10 md:p-12 relative">
                    <Quote className="absolute top-8 right-8 h-16 w-16 text-hust-blue/5" />
                    <h3 className="text-2xl font-display font-bold text-hust-blue mb-6">Director's Welcome</h3>
                    <div className="relative">
                      <div className="absolute -left-6 top-0 bottom-0 w-1 bg-hust-gold/30 rounded-full"></div>
                      <FormattedBio 
                        text={centre.director.welcomeMessage} 
                        className="text-gray-600 italic mb-8 pl-6"
                        paragraphClassName="leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Objectives Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-hust-blue mb-8 border-b border-gray-100 pb-4 flex items-center">
                  <Target className="mr-4 h-8 w-8 text-hust-accent" /> Our Objectives
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {centre.objectives.map((objective, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-white rounded-2xl border border-hust-blue/10 flex items-start space-x-4 shadow-sm hover:border-hust-accent transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-hust-accent/10 flex items-center justify-center shrink-0">
                        <ShieldCheck className="h-4 w-4 text-hust-accent" />
                      </div>
                      <span className="font-medium text-hust-blue text-sm leading-snug">{objective}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Special Programs Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-hust-blue mb-8 border-b border-gray-100 pb-4 flex items-center">
                  <Star className="mr-4 h-8 w-8 text-hust-gold" /> Special Programs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {centre.specialPrograms.map((program, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="p-6 bg-hust-blue/5 rounded-2xl border border-hust-blue/10 flex items-center space-x-4 group hover:bg-hust-blue hover:text-white transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-hust-gold shrink-0 transition-colors">
                        <Briefcase className="h-5 w-5 text-hust-blue group-hover:text-hust-blue" />
                      </div>
                      <span className="font-bold text-sm">{program}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-12">
              <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-hust-blue mb-6">Contact the Centre</h3>
                <p className="text-sm text-gray-600 mb-8">
                  For inquiries about research collaborations, professional training, or any of our programs, please reach out to us.
                </p>
                <Link
                  to="/contact"
                  className="w-full py-4 bg-hust-blue text-white rounded-xl font-bold hover:bg-hust-accent transition-all flex items-center justify-center group"
                >
                  Get in Touch <ArrowLeft className="ml-2 h-5 w-5 rotate-180 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
