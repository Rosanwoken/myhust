import { motion } from 'motion/react';
import { Mail, Linkedin, GraduationCap, Users, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { staffData } from '../constants/staffData';

export default function StaffFaculty() {
  const [filter, setFilter] = useState<'All' | 'Faculty' | 'Administrative' | 'Management'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStaff = staffData.filter(member => {
    const matchesFilter = filter === 'All' || member.category === filter;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-hust-blue py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hust-gold/10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our Staff & Faculty
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Meet the dedicated educators, researchers, and administrators who drive excellence at Hillside University.
          </motion.p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white border-b border-gray-100 sticky top-24 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {['All', 'Management', 'Faculty', 'Administrative'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                    filter === cat 
                      ? 'bg-hust-blue text-white shadow-lg' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, role, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-hust-accent outline-none transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStaff.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStaff.map((member, idx) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                >
                  <div className="relative h-64 overflow-hidden">
                    {member.hasProfile ? (
                      <Link to={`/faculty/${member.id}`}>
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </Link>
                    ) : (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-hust-blue shadow-sm">
                      {member.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      {member.hasProfile ? (
                        <Link to={`/faculty/${member.id}`} className="hover:text-hust-accent transition-colors">
                          <h3 className="text-xl font-bold text-hust-blue mb-1 group-hover:text-hust-accent transition-colors">{member.name}</h3>
                        </Link>
                      ) : (
                        <h3 className="text-xl font-bold text-hust-blue mb-1">{member.name}</h3>
                      )}
                      <p className="text-hust-accent font-bold text-sm">{member.role}</p>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-xs text-gray-500">
                        <GraduationCap className="h-4 w-4 mr-2 text-hust-gold" />
                        {member.college}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Users className="h-4 w-4 mr-2 text-hust-gold" />
                        {member.department}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-6">
                      {member.bio}
                    </p>
                    <div className="flex items-center space-x-4 pt-6 border-t border-gray-50">
                      <a 
                        href={`mailto:${member.email}`}
                        className="p-2 bg-gray-50 text-gray-400 hover:text-hust-blue hover:bg-hust-blue/5 rounded-lg transition-all"
                        title="Send Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                      <a 
                        href="#"
                        className="p-2 bg-gray-50 text-gray-400 hover:text-hust-blue hover:bg-hust-blue/5 rounded-lg transition-all"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-hust-blue mb-2">No staff members found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hust-blue rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <h2 className="text-3xl font-bold mb-6 relative z-10">Join Our Academic Community</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              We are always looking for passionate educators and professionals to join our mission of shaping the future of science and technology.
            </p>
            <button className="px-8 py-4 bg-hust-gold text-hust-blue rounded-xl font-bold hover:bg-white transition-all relative z-10 shadow-xl shadow-black/20">
              View Career Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
