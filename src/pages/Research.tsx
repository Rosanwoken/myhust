import { motion } from 'motion/react';
import { Microscope, BookOpen, GraduationCap, ArrowRight, ExternalLink, Search, Filter } from 'lucide-react';
import { collegeDetails } from '../constants/collegeDetails';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Research() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('all');

  const colleges = Object.values(collegeDetails).filter(c => c.id !== 'governance');
  
  const allResearch = colleges.flatMap(college => 
    college.faculty.map(faculty => ({
      ...faculty,
      collegeTitle: college.title,
      collegeId: college.id
    }))
  ).filter(item => item.keyPublications && item.keyPublications.length > 0);

  const filteredResearch = allResearch.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.researchInterests.some(ri => ri.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          item.keyPublications?.some(kp => kp.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCollege = selectedCollege === 'all' || item.collegeId === selectedCollege;
    return matchesSearch && matchesCollege;
  });

  return (
    <div className="pt-36 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-hust-blue text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-hust-accent via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-hust-accent/20 text-hust-gold border border-hust-gold/30 mb-8">
              <Microscope className="h-4 w-4 mr-2" />
              <span className="text-xs font-bold tracking-widest uppercase">Innovation & Discovery</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Research & Publication</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Showcasing the groundbreaking research and scholarly contributions of our distinguished faculty across all colleges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 border-b border-gray-100 sticky top-20 z-30 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search research, faculty, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:border-hust-accent focus:ring-2 focus:ring-hust-accent/20 outline-none transition-all"
              />
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
              <Filter className="h-5 w-5 text-hust-blue shrink-0" />
              <button
                onClick={() => setSelectedCollege('all')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  selectedCollege === 'all' 
                    ? 'bg-hust-blue text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All Colleges
              </button>
              {colleges.map(college => (
                <button
                  key={college.id}
                  onClick={() => setSelectedCollege(college.id)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCollege === college.id 
                      ? 'bg-hust-blue text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {college.id === 'medicine' ? 'Medicine' : 
                   college.id === 'engineering' ? 'Engineering' :
                   college.id === 'agriculture' ? 'Agriculture' : 'Business'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResearch.length > 0 ? (
            <div className="space-y-16">
              {colleges.map(college => {
                const collegeResearch = filteredResearch.filter(r => r.collegeId === college.id);
                if (collegeResearch.length === 0) return null;

                return (
                  <div key={college.id} className="space-y-8">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-1 bg-hust-accent rounded-full"></div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-hust-blue">
                        {college.title}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {collegeResearch.map((faculty, idx) => (
                        <motion.div
                          key={faculty.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                          <div className="p-8">
                            <div className="flex items-start justify-between mb-6">
                              <div className="flex items-center space-x-4">
                                <img 
                                  src={faculty.image} 
                                  alt={faculty.name}
                                  className="w-16 h-16 rounded-2xl object-cover border-2 border-hust-blue/10"
                                />
                                <div>
                                  <h3 className="text-xl font-bold text-hust-blue group-hover:text-hust-accent transition-colors">
                                    {faculty.name}
                                  </h3>
                                  <p className="text-sm text-gray-500 font-medium">{faculty.role}</p>
                                </div>
                              </div>
                              <Link 
                                to={`/faculty/${faculty.id}`}
                                className="p-2 rounded-full bg-gray-50 text-hust-blue hover:bg-hust-blue hover:text-white transition-all"
                              >
                                <ArrowRight className="h-5 w-5" />
                              </Link>
                            </div>

                            <div className="space-y-6">
                              <div>
                                <h4 className="text-xs font-bold text-hust-accent uppercase tracking-widest mb-3 flex items-center">
                                  <Microscope className="h-3 w-3 mr-2" /> Research Interests
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {faculty.researchInterests.map((interest, i) => (
                                    <span key={i} className="px-3 py-1 bg-hust-blue/5 text-hust-blue text-[10px] font-bold rounded-full border border-hust-blue/10">
                                      {interest}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-xs font-bold text-hust-gold uppercase tracking-widest mb-3 flex items-center">
                                  <BookOpen className="h-3 w-3 mr-2" /> Key Publications
                                </h4>
                                <ul className="space-y-3">
                                  {faculty.keyPublications?.map((pub, i) => (
                                    <li key={i} className="flex items-start space-x-3 text-sm text-gray-600 leading-relaxed">
                                      <div className="w-1.5 h-1.5 rounded-full bg-hust-accent mt-1.5 shrink-0"></div>
                                      <span>{pub}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {faculty.publicationsLink && faculty.publicationsLink !== '#' && (
                                <div className="pt-4 flex flex-wrap gap-4">
                                  <a 
                                    href={faculty.publicationsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-bold text-hust-blue hover:text-hust-accent transition-colors"
                                  >
                                    Google Scholar <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                                  </a>
                                  {faculty.socialMedia.researchGate && (
                                    <a 
                                      href={faculty.socialMedia.researchGate}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-sm font-bold text-hust-blue hover:text-hust-accent transition-colors"
                                    >
                                      ResearchGate <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                                    </a>
                                  )}
                                  {faculty.socialMedia.scopus && (
                                    <a 
                                      href={faculty.socialMedia.scopus}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-sm font-bold text-hust-blue hover:text-hust-accent transition-colors"
                                    >
                                      Scopus <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                                    </a>
                                  )}
                                  {faculty.socialMedia.orcid && (
                                    <a 
                                      href={faculty.socialMedia.orcid}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-sm font-bold text-hust-blue hover:text-hust-accent transition-colors"
                                    >
                                      ORCID <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-hust-blue mb-2">No research found</h3>
              <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
              <button 
                onClick={() => { setSearchQuery(''); setSelectedCollege('all'); }}
                className="mt-6 text-hust-accent font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hust-blue rounded-3xl p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-hust-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <GraduationCap className="h-16 w-16 text-hust-gold mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Join Our Research Community</h2>
              <p className="text-xl text-gray-300 mb-10 font-light">
                Are you a researcher or prospective student interested in collaborating with our world-class faculty?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/contact"
                  className="px-10 py-4 bg-hust-accent text-white rounded-2xl font-bold hover:bg-hust-gold transition-all shadow-lg hover:shadow-xl"
                >
                  Contact Research Office
                </Link>
                <Link 
                  to="/admissions"
                  className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all"
                >
                  Graduate Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
