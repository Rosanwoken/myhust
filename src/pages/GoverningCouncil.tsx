import { motion } from 'motion/react';
import { Users, Shield, Award } from 'lucide-react';
import { siteContent } from '../constants/siteContent';
import Breadcrumbs from '../components/Breadcrumbs';

export default function GoverningCouncil() {
  const { governingCouncil } = siteContent.about;

  return (
    <div className="pt-32 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-hust-blue py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-hust-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-hust-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              {governingCouncil.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {governingCouncil.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src={governingCouncil.chairman.image} 
                  alt={governingCouncil.chairman.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-hust-gold p-8 rounded-3xl shadow-xl hidden md:block">
                <Award className="h-12 w-12 text-hust-blue" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hust-blue/5 rounded-full text-hust-blue font-bold text-sm mb-6">
                <Shield className="h-4 w-4" />
                <span>Leadership</span>
              </div>
              <h2 className="text-4xl font-display font-bold text-hust-blue mb-4">
                {governingCouncil.chairman.name}
              </h2>
              <p className="text-xl text-hust-accent font-bold mb-8">
                {governingCouncil.chairman.role}
              </p>
              <div className="prose prose-lg text-gray-600">
                <p>
                  The Chairman of the Governing Council provides visionary leadership and strategic oversight, 
                  ensuring the University remains committed to its mission of excellence in science and technology education.
                </p>
                <p>
                  Under his guidance, the Council works to establish policies that foster innovation, 
                  academic rigor, and sustainable growth for Hillside University of Science and Technology.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Council Members List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-hust-blue mb-4">Council Members</h2>
            <div className="w-24 h-1.5 bg-hust-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {governingCouncil.members.map((member: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center space-x-4"
              >
                <div className="h-16 w-16 rounded-full bg-hust-blue/5 flex items-center justify-center shrink-0 overflow-hidden border-2 border-hust-blue/10">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <Users className="h-8 w-8 text-hust-blue" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-hust-blue leading-tight">{member.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hust-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Learn More About HUST</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Discover our commitment to academic excellence and innovation in science and technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/about" 
              className="px-8 py-4 bg-hust-gold text-hust-blue rounded-full font-bold hover:bg-white transition-all"
            >
              About the University
            </a>
            <a 
              href="/academics" 
              className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-bold hover:bg-white hover:text-hust-blue transition-all"
            >
              Academic Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
