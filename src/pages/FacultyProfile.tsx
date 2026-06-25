import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Mail, GraduationCap, Award, BookOpen, Microscope, ExternalLink, Twitter, Linkedin, Globe, Quote } from 'lucide-react';
import { collegeDetails } from '../constants/collegeDetails';
import FormattedBio from '../components/FormattedBio';

export default function FacultyProfile() {
  const { id } = useParams<{ id: string }>();
  
  // Find the faculty member across all colleges
  let facultyMember = null;
  let collegeTitle = '';
  
  for (const college of Object.values(collegeDetails)) {
    const found = college.faculty.find(f => f.id === id);
    if (found) {
      facultyMember = found;
      collegeTitle = college.title;
      break;
    }
  }

  if (!facultyMember) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-display font-bold text-hust-blue mb-6">Faculty Member Not Found</h1>
        <Link to="/colleges" className="text-hust-accent font-bold flex items-center justify-center hover:underline">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Colleges
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="md:flex">
            {/* Left: Image & Quick Info */}
            <div className="md:w-1/3 bg-hust-blue p-12 text-white text-center">
              <img
                src={facultyMember.image}
                alt={facultyMember.name}
                className="w-48 h-48 rounded-3xl object-cover mx-auto mb-8 border-4 border-white/20 shadow-lg"
              />
              <h1 className="text-2xl font-display font-bold mb-2">{facultyMember.name}</h1>
              <p className="text-hust-gold font-medium mb-6">{facultyMember.role}</p>
              
              <div className="space-y-4 text-sm text-gray-300 mb-10">
                <p className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4" /> {facultyMember.id}@hust.edu.ng
                </p>
                <p className="flex items-center justify-center">
                  <GraduationCap className="mr-2 h-4 w-4" /> {collegeTitle}
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center space-x-4 mb-10">
                {facultyMember.socialMedia.twitter && (
                  <a href={facultyMember.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-hust-gold hover:text-hust-blue transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {facultyMember.socialMedia.linkedin && (
                  <a href={facultyMember.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-hust-gold hover:text-hust-blue transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {facultyMember.socialMedia.googleScholar && (
                  <a href={facultyMember.socialMedia.googleScholar} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-hust-gold hover:text-hust-blue transition-colors">
                    <Globe className="h-5 w-5" />
                  </a>
                )}
              </div>
              
              <div className="pt-10 border-t border-white/10">
                <a 
                  href={`mailto:${facultyMember.id}@hust.edu.ng`}
                  className="block w-full py-4 bg-hust-accent text-white rounded-2xl font-bold hover:bg-hust-gold hover:text-hust-blue transition-all text-center"
                >
                  Contact Faculty
                </a>
              </div>
            </div>

            {/* Right: Detailed Bio & Achievements */}
            <div className="md:w-2/3 p-12 md:p-16">
              <Link to={-1 as any} className="inline-flex items-center text-hust-accent font-bold mb-8 hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Link>
              
              <div className="space-y-12">
                <section>
                  <h2 className="text-2xl font-display font-bold text-hust-blue mb-6 flex items-center">
                    <UserIcon className="mr-3 h-6 w-6 text-hust-accent" /> Biography
                  </h2>
                  <div className="relative group">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-hust-gold via-hust-accent to-hust-blue rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <FormattedBio 
                      text={facultyMember.bio} 
                      className="text-gray-700 text-lg italic pl-8"
                      paragraphClassName="leading-relaxed relative z-10"
                    />
                    <Quote className="absolute -right-4 -bottom-4 h-16 w-16 text-hust-blue/5 -z-10" />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 p-8 bg-gradient-to-br from-hust-blue/5 to-transparent rounded-2xl border border-hust-blue/10 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-hust-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                      {facultyMember.name} has been a cornerstone of the {collegeTitle} at Hillside University of Science and Technology. With a career spanning decades in both industry and academia, they bring a wealth of practical knowledge and theoretical depth to their students. Their commitment to excellence in teaching and pioneering research has earned them numerous accolades within the academic community.
                    </p>
                  </motion.div>
                </section>

                {/* Research Interests Section */}
                <section>
                  <h2 className="text-2xl font-display font-bold text-hust-blue mb-6 flex items-center">
                    <Microscope className="mr-3 h-6 w-6 text-hust-accent" /> Research Interests
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {facultyMember.researchInterests.map((interest, i) => (
                      <span key={i} className="px-4 py-2 bg-hust-blue/5 text-hust-blue rounded-xl text-sm font-bold border border-hust-blue/10">
                        {interest}
                      </span>
                    ))}
                  </div>
                </section>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {facultyMember.awards && facultyMember.awards.length > 0 && (
                    <section className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-bold text-hust-blue mb-4 flex items-center">
                        <Award className="mr-2 h-5 w-5 text-hust-gold" /> Key Awards
                      </h3>
                      <ul className="space-y-3 text-sm text-gray-600">
                        {facultyMember.awards.map((award, i) => (
                          <li key={i}>• {award}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {facultyMember.keyPublications && facultyMember.keyPublications.length > 0 && (
                    <section className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                      <h3 className="text-xl font-bold text-hust-blue mb-4 flex items-center">
                        <BookOpen className="mr-2 h-5 w-5 text-hust-gold" /> Key Publications
                      </h3>
                      <div className="space-y-4">
                        <ul className="space-y-3 text-sm text-gray-600 mb-6">
                          {facultyMember.keyPublications.map((pub, i) => (
                            <li key={i}>• {pub}</li>
                          ))}
                        </ul>
                        {facultyMember.publicationsLink && facultyMember.publicationsLink !== '#' && (
                          <a 
                            href={facultyMember.publicationsLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-bold text-hust-accent hover:underline"
                          >
                            View Full Publications <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Helper component for icon
function UserIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
