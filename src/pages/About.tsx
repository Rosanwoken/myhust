import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Target, Eye, Shield, Award, Users, BookOpen, Zap, Globe, Heart, MapPin, ArrowRight } from 'lucide-react';
import { siteContent } from '../constants/siteContent';

const aboutContent = siteContent.about;

export default function About() {
  return (
    <div className="pt-36">
      {/* Page Header */}
      <section className="bg-hust-blue py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hust-accent/10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            {aboutContent.header.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-hust-gold font-bold tracking-[0.2em] uppercase mb-8"
          >
            Motto: {siteContent.motto}
          </motion.p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {aboutContent.header.subtitle}
          </p>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-black text-hust-blue mb-1">2023</div>
              <div className="text-[10px] font-black text-hust-accent uppercase tracking-widest">Year Founded</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-hust-blue mb-1">4</div>
              <div className="text-[10px] font-black text-hust-accent uppercase tracking-widest">Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-hust-blue mb-1">25+</div>
              <div className="text-[10px] font-black text-hust-accent uppercase tracking-widest">Programmes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-hust-blue mb-1">100%</div>
              <div className="text-[10px] font-black text-hust-accent uppercase tracking-widest">Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* About HUST Section */}
      <section id="about-hust" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-hust-blue/5 rounded-3xl -rotate-3"></div>
                <img
                  src="https://hust.edu.ng/wp-content/uploads/2024/11/main-hust-chancellor.jpg"
                  alt="HUST Chancellor"
                  className="rounded-3xl shadow-2xl relative z-10 border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-hust-gold p-6 rounded-3xl shadow-xl z-20 hidden md:block">
                  <div className="text-hust-blue font-black text-2xl">The Pro-Chancellor</div>
                  <div className="text-hust-blue/70 text-xs font-bold uppercase tracking-widest">Founder</div>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue">{aboutContent.history.title}</h2>
              {aboutContent.history.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                {[
                  { icon: <Zap className="h-5 w-5" />, title: "24/7 Electricity", desc: "Alternative Power sources" },
                  { icon: <Zap className="h-5 w-5" />, title: "Regular Water", desc: "Consistent clean supply" },
                  { icon: <Shield className="h-5 w-5" />, title: "Secure Campus", desc: "Safe & beautiful environment" },
                  { icon: <Users className="h-5 w-5" />, title: "Expert Faculty", desc: "High-level educators" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-hust-accent/20 hover:bg-white hover:shadow-lg transition-all group">
                    <div className="p-3 bg-hust-blue/5 text-hust-blue rounded-xl group-hover:bg-hust-blue group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-hust-blue text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in the development of Hillside University.</p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-hust-blue/10 -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {[
                { year: "2023", title: "NUC Approval", desc: "Official recognition and license granted by the National Universities Commission." },
                { year: "2023", title: "First Intake", desc: "Welcomed our pioneer students into various undergraduate programmes." },
                { year: "2024", title: "Infrastructure Expansion", desc: "Completion of state-of-the-art laboratories and residential halls." },
                { year: "2025", title: "Research Excellence", desc: "Launch of the Centre for Research & Innovation (CRI)." },
              ].map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-hust-blue rounded-full border-4 border-white shadow-lg mb-4 md:mb-0">
                    <div className="w-2 h-2 bg-hust-gold rounded-full"></div>
                  </div>
                  <div className={`md:w-1/2 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <span className="text-hust-accent font-black text-xl mb-2 block">{milestone.year}</span>
                    <h3 className="text-lg font-bold text-hust-blue mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-12 rounded-3xl border border-gray-100"
            >
              <div className="p-4 bg-hust-blue/5 inline-block rounded-2xl mb-6">
                <Eye className="h-10 w-10 text-hust-accent" />
              </div>
              <h2 className="text-3xl font-display font-bold text-hust-blue mb-6">{aboutContent.vision.title}</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {aboutContent.vision.text}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-hust-blue p-12 rounded-3xl text-white"
            >
              <div className="p-4 bg-white/10 inline-block rounded-2xl mb-6">
                <Target className="h-10 w-10 text-hust-gold" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">{aboutContent.mission.title}</h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                {aboutContent.mission.text}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anthem & Core Values Section */}
      <section id="anthem-values" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* University Anthem */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-hust-blue mb-4">{aboutContent.anthem.title}</h2>
                <p className="text-gray-600">
                  {aboutContent.anthem.desc}
                </p>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-4 bg-hust-gold/10 rounded-3xl blur-2xl group-hover:bg-hust-gold/20 transition-all duration-500"></div>
                <div className="relative bg-hust-blue rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="aspect-video w-full">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster={aboutContent.anthem.posterUrl}
                    >
                      <source src={aboutContent.anthem.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-hust-blue mb-4">Our Core Values</h2>
                <p className="text-gray-600">The principles that guide every decision and action at HUST.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutContent.coreValues.map((value, i) => {
                  const icons = [
                    <Zap className="h-6 w-6" />,
                    <Award className="h-6 w-6" />,
                    <Globe className="h-6 w-6" />,
                    <Shield className="h-6 w-6" />,
                    <Users className="h-6 w-6" />,
                    <Heart className="h-6 w-6" />,
                    <BookOpen className="h-6 w-6" />,
                    <MapPin className="h-6 w-6" />,
                  ];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center space-x-4 p-4 bg-white rounded-2xl shadow-sm border border-transparent hover:border-hust-accent/20 transition-all group"
                    >
                      <div className="p-3 bg-hust-blue/5 text-hust-accent rounded-xl group-hover:bg-hust-blue group-hover:text-white transition-all">
                        {icons[i]}
                      </div>
                      <div>
                        <h3 className="font-bold text-hust-blue text-sm">{value.title}</h3>
                        <p className="text-gray-500 text-xs">{value.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* University Objectives */}
      <section id="strategic" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">University Objectives</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our strategic goals focused on innovation, student empowerment, and global technological advancement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.objectives?.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-hust-blue hover:text-white transition-all group"
              >
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-hust-gold transition-colors">{obj.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors leading-relaxed">
                  {obj.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Leadership Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">
              {aboutContent.governance.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              {aboutContent.governance.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {aboutContent.governance.members.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500"
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
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/governance-management"
              className="inline-flex items-center px-8 py-4 bg-hust-blue text-white rounded-full font-bold hover:bg-hust-accent transition-all shadow-lg group"
            >
              View Full Governance & Management
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
