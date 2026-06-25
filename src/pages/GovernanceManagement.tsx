import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, Briefcase, GraduationCap } from 'lucide-react';
import { siteContent } from '../constants/siteContent';
import { collegeDetails } from '../constants/collegeDetails';
import Breadcrumbs from '../components/Breadcrumbs';

export default function GovernanceManagement() {
  const { leadership, governance } = siteContent.about;

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
              Governance & Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The leadership structure of Hillside University of Science and Technology, dedicated to academic excellence and strategic growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board of Regents Section */}
      <section id="leadership" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hust-blue/5 rounded-full text-hust-blue font-bold text-sm mb-6">
              <Shield className="h-4 w-4" />
              <span>Highest Governing Body</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">
              {leadership?.title}
            </h2>
            <h3 className="text-xl md:text-2xl font-display font-bold text-hust-accent mb-6">
              {leadership?.subtitle}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {leadership?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {leadership?.members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hust-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-sm font-medium">Board Member</p>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-xl font-bold text-hust-blue mb-2 group-hover:text-hust-accent transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-hust-gold font-bold text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Officers Section */}
      <section id="governance" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hust-gold/10 rounded-full text-hust-blue font-bold text-sm mb-6">
              <Briefcase className="h-4 w-4" />
              <span>Executive Management</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">
              {governance?.title}
            </h2>
            <h3 className="text-xl md:text-2xl font-display font-bold text-hust-accent mb-6">
              {governance?.subtitle}
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              {governance?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {governance?.members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hust-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <Link 
                      to={`/faculty/${member.profileId}`}
                      className="text-white text-xs font-bold flex items-center hover:text-hust-gold transition-colors"
                    >
                      View Profile <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-sm font-bold text-hust-blue mb-1 group-hover:text-hust-accent transition-colors leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-hust-gold font-bold text-[10px] uppercase tracking-wider">
                    {member.role}
                  </p>
                  <Link 
                    to={`/faculty/${member.profileId}`}
                    className="mt-2 inline-flex items-center text-[10px] font-bold text-hust-blue hover:text-hust-accent transition-colors"
                  >
                    View Profile <ArrowRight className="ml-1 h-2.5 w-2.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Leadership (Provosts) Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hust-accent/10 rounded-full text-hust-blue font-bold text-sm mb-6">
              <GraduationCap className="h-4 w-4" />
              <span>Academic Leadership</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">
              Provosts of Colleges
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Our colleges are led by distinguished academics and professionals dedicated to excellence in their respective fields.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(collegeDetails).filter(c => c.id !== 'governance').map((college, i) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={college.provost.image}
                    alt={college.provost.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hust-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <Link 
                      to={`/colleges/${college.id}`}
                      className="text-white text-sm font-bold flex items-center hover:text-hust-gold transition-colors"
                    >
                      Visit College <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-hust-blue mb-1 group-hover:text-hust-accent transition-colors leading-tight">
                    {college.provost.name}
                  </h4>
                  <p className="text-hust-gold font-bold text-[10px] uppercase tracking-wider mb-2">
                    Provost, {college.title}
                  </p>
                  <Link 
                    to={`/colleges/${college.id}`}
                    className="mt-2 inline-flex items-center text-xs font-bold text-hust-blue hover:text-hust-accent transition-colors"
                  >
                    View College <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governing Council Link Section */}
      <section className="py-20 bg-hust-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">The Governing Council</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            The Governing Council provides general policy and strategic direction in the running of the institution.
          </p>
          <Link 
            to="/governing-council" 
            className="inline-flex items-center px-8 py-4 bg-hust-gold text-hust-blue rounded-full font-bold hover:bg-white transition-all"
          >
            View Governing Council <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
