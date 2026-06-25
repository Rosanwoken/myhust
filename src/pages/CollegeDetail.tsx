import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, User, BookOpen, Microscope, GraduationCap, ChevronRight, Quote, ShieldCheck, Award, Briefcase } from 'lucide-react';
import { collegeDetails } from '../constants/collegeDetails';
import { siteContent } from '../constants/siteContent';
import FormattedBio from '../components/FormattedBio';
import Breadcrumbs from '../components/Breadcrumbs';

function DepartmentDescription({ description }: { description: string }) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-bold text-hust-accent uppercase tracking-widest flex items-center">
        <BookOpen className="mr-2 h-4 w-4" /> About the Department
      </h4>
      <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
        {description}
      </p>
    </div>
  );
}

function DepartmentCareers({ careers }: { careers: string[] }) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-bold text-hust-gold uppercase tracking-widest flex items-center">
        <Briefcase className="mr-2 h-4 w-4" /> Career Paths
      </h4>
      <div className="grid grid-cols-1 gap-2">
        {careers.map((career, idx) => (
          <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-100">
            <div className="w-1.5 h-1.5 rounded-full bg-hust-gold shrink-0"></div>
            <span>{career}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CollegeDetail() {
  const { id } = useParams<{ id: string }>();
  const college = id ? collegeDetails[id] : null;

  if (!college) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-display font-bold text-hust-blue mb-6">College Not Found</h1>
        <Link to="/colleges" className="text-hust-accent font-bold flex items-center justify-center hover:underline">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Colleges
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-36">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={college.image}
            alt={college.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-hust-blue/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/colleges" className="inline-flex items-center text-hust-gold font-bold mb-6 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> All Colleges
            </Link>
            <h1 className="text-3xl md:text-6xl font-display font-bold mb-4 px-4">{college.title}</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light px-4">
              Led by Provost {college.provost.name}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column: Description, Provost & Research */}
            <div className="lg:col-span-2 space-y-12 md:space-y-20">
              {/* Provost Welcome Section */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative">
                    <img 
                      src={college.provost.image} 
                      alt={college.provost.name}
                      className="w-full h-full object-cover min-h-[250px] md:min-h-[300px]"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-hust-blue/90 backdrop-blur-sm p-3 md:p-4 rounded-xl md:rounded-2xl text-white">
                      <p className="text-[10px] font-bold text-hust-gold uppercase tracking-wider mb-1">Provost</p>
                      <p className="font-display font-bold text-xs md:text-sm">{college.provost.name}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6 md:p-12 relative">
                    <Quote className="absolute top-4 right-4 md:top-8 md:right-8 h-12 w-12 md:h-16 md:w-16 text-hust-blue/5" />
                    <h3 className="text-xl md:text-2xl font-display font-bold text-hust-blue mb-4 md:mb-6">Provost's Welcome</h3>
                    <div className="relative">
                      <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 bg-hust-gold/30 rounded-full"></div>
                      <FormattedBio 
                        text={college.provost.welcomeAddress} 
                        className="text-sm md:text-gray-600 italic mb-6 md:mb-8 pl-4 md:pl-6"
                        paragraphClassName="leading-relaxed"
                      />
                    </div>
                    <div className="pt-6 md:pt-8 border-t border-gray-200">
                      <h4 className="text-xs md:text-sm font-bold text-hust-blue uppercase tracking-widest mb-3 md:mb-4 flex items-center">
                        <Award className="mr-2 h-4 w-4 text-hust-accent" /> Provost Citation
                      </h4>
                      <FormattedBio 
                        text={college.provost.citation} 
                        className="text-[13px] md:text-sm text-gray-500"
                        paragraphClassName="leading-relaxed"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* About Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-hust-blue mb-6 border-b border-gray-100 pb-4">
                  About the College
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {college.description}
                </p>
              </div>

              {/* Departments Section */}
              {college.departments && college.departments.length > 0 && (
                <div>
                  <h2 className="text-3xl font-display font-bold text-hust-blue mb-8 border-b border-gray-100 pb-4 flex items-center">
                    <Award className="mr-4 h-8 w-8 text-hust-accent" /> Academic Departments
                  </h2>
                  <div className="space-y-8">
                    {college.departments.map((dept, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                      >
                        <div className="bg-hust-blue/5 p-6 border-b border-gray-100">
                          <h3 className="text-xl font-bold text-hust-blue">{dept.name}</h3>
                        </div>
                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                          <DepartmentDescription description={dept.description} />
                          <DepartmentCareers careers={dept.careers} />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Programmes & Requirements Section */}
              {college.programmes && college.programmes.length > 0 && (
                <div>
                  <h2 className="text-3xl font-display font-bold text-hust-blue mb-8 border-b border-gray-100 pb-4 flex items-center">
                    <GraduationCap className="mr-4 h-8 w-8 text-hust-accent" /> Degree Programmes & Admission Requirements
                  </h2>
                  <div className="space-y-6">
                    {college.programmes.map((prog, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="bg-hust-blue p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <h3 className="text-xl font-bold">{prog.name}</h3>
                            {prog.id && (
                              <Link 
                                to={`/programmes/${prog.id}`}
                                className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all group/link"
                                title="View Details"
                              >
                                <ArrowRight className="h-4 w-4 text-hust-gold group-hover/link:translate-x-1 transition-transform" />
                              </Link>
                            )}
                          </div>
                          <span className="px-4 py-1 bg-white/20 rounded-full text-xs font-bold backdrop-blur-sm border border-white/10">
                            Duration: {prog.duration}
                          </span>
                        </div>
                        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h4 className="text-sm font-bold text-hust-accent uppercase tracking-widest flex items-center">
                              <ShieldCheck className="mr-2 h-4 w-4" /> UTME Requirements
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
                              {prog.requirements.utme}
                            </p>
                          </div>
                          <div className="space-y-4">
                            <h4 className="text-sm font-bold text-hust-gold uppercase tracking-widest flex items-center">
                              <Award className="mr-2 h-4 w-4" /> Direct Entry
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-2xl border border-gray-100">
                              {prog.requirements.directEntry}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quality Promises Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-hust-blue mb-8 border-b border-gray-100 pb-4 flex items-center">
                  <ShieldCheck className="mr-4 h-8 w-8 text-hust-accent" /> Quality Delivery Promises
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {college.qualityPromises.map((promise, i) => (
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
                      <span className="font-medium text-hust-blue text-sm leading-snug">{promise}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities Section */}
              <div>
                <h2 className="text-3xl font-display font-bold text-hust-blue mb-8 border-b border-gray-100 pb-4 flex items-center">
                  <Briefcase className="mr-4 h-8 w-8 text-hust-accent" /> Career Opportunities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {college.careerOpportunities.map((career, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="p-4 bg-hust-blue/5 rounded-xl border border-hust-blue/10 flex items-center space-x-3 group hover:bg-hust-blue hover:text-white transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-hust-accent group-hover:bg-hust-gold shrink-0"></div>
                      <span className="font-bold text-sm">{career}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Research Areas */}
              <div>
                <h2 className="text-3xl font-display font-bold text-hust-blue mb-8 border-b border-gray-100 pb-4 flex items-center">
                  <Microscope className="mr-4 h-8 w-8 text-hust-accent" /> Research Areas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {college.researchAreas.map((area, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center space-x-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-hust-accent shrink-0"></div>
                      <span className="font-bold text-hust-blue">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Courses */}
              <div>
                <h2 className="text-3xl font-display font-bold text-hust-blue mb-8 border-b border-gray-100 pb-4 flex items-center">
                  <BookOpen className="mr-4 h-8 w-8 text-hust-accent" /> Featured Courses
                </h2>
                <div className="space-y-6">
                  {college.courses.map((course, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-hust-blue/5 text-hust-blue text-xs font-bold rounded-full">
                          {course.code}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-hust-blue mb-3">{course.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-32 h-fit">
              {/* Admissions & Leadership */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-hust-blue mb-6">Admissions</h3>
                <p className="text-sm text-gray-600 mb-8">
                  Interested in joining the {college.title}? Applications for the next session are currently being processed.
                </p>
                <a
                  href={siteContent.contact.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-hust-accent text-white rounded-xl font-bold hover:bg-hust-blue transition-all flex items-center justify-center group mb-4 shadow-lg shadow-hust-accent/20"
                >
                  Apply Now <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/governance-management"
                  className="w-full py-4 bg-white border-2 border-hust-blue/10 text-hust-blue rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center group"
                >
                  University Leadership <ShieldCheck className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* Other Colleges */}
              <div className="bg-hust-blue p-8 rounded-2xl text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <GraduationCap className="mr-2 h-5 w-5 text-hust-gold" /> Other Colleges
                </h3>
                <div className="space-y-3">
                  {Object.values(collegeDetails)
                    .filter(c => c.id !== id && c.id !== 'governance')
                    .map(otherCollege => (
                      <Link
                        key={otherCollege.id}
                        to={`/colleges/${otherCollege.id}`}
                        className="block p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/10 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold">{otherCollege.title}</span>
                          <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-hust-blue mb-6">Quick Links</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Academic Calendar', path: '/academic-calendar' },
                    { name: 'Tuition and Fees Calculator', path: '/fees' },
                    { name: 'Leadership', path: '/governance-management' },
                    { name: 'Research & Innovation', path: '/research' },
                    { name: 'Campus Life', path: '/campus-life' }
                  ].map((link, i) => (
                    <Link
                      key={i}
                      to={link.path}
                      className="flex items-center justify-between text-sm font-bold text-gray-600 hover:text-hust-accent transition-colors group"
                    >
                      {link.name}
                      <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
