import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Clock, Search, ChevronRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../constants/blogData';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-hust-blue py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hust-accent/10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">News & Insights</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore the latest campus news, research breakthroughs, and expert perspectives from the Hillside University community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Feed */}
            <div className="lg:w-2/3 space-y-12">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-md transition-shadow"
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5 relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 min-h-[250px]"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-hust-accent text-white text-xs font-bold rounded-full shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                            <span className="flex items-center"><Calendar className="mr-1.5 h-3.5 w-3.5" /> {post.date}</span>
                            <span className="flex items-center"><Clock className="mr-1.5 h-3.5 w-3.5" /> {post.readTime}</span>
                          </div>
                          <h2 className="text-2xl font-display font-bold text-hust-blue mb-4 group-hover:text-hust-accent transition-colors leading-tight">
                            {post.title}
                          </h2>
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-hust-blue/10 flex items-center justify-center text-hust-blue font-bold text-xs">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="text-xs font-bold text-hust-blue">{post.author}</span>
                          </div>
                          <Link 
                            to={`/blog/${post.id}`} 
                            className="text-hust-accent font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform"
                          >
                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))
              ) : (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                  <h3 className="text-xl font-bold text-hust-blue mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or category filters.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-8">
              {/* Search */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-hust-blue mb-6 flex items-center">
                  <Search className="mr-2 h-5 w-5 text-hust-accent" /> Search Articles
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-hust-accent focus:border-transparent transition-all outline-none text-sm"
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-hust-blue mb-6 flex items-center">
                  <Tag className="mr-2 h-5 w-5 text-hust-accent" /> Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedCategory === cat 
                          ? 'bg-hust-blue text-white shadow-md' 
                          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-hust-blue p-8 rounded-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Stay Informed</h3>
                <p className="text-sm text-gray-300 mb-6 relative z-10">
                  Subscribe to our newsletter to receive the latest updates directly in your inbox.
                </p>
                <form 
                  action="mailto:media@hust.edu.ng" 
                  method="post" 
                  encType="text/plain"
                  className="space-y-3 relative z-10"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:ring-2 focus:ring-hust-gold outline-none text-sm placeholder:text-gray-400"
                  />
                  <button 
                    type="submit"
                    className="w-full py-3 bg-hust-gold text-hust-blue rounded-xl font-bold text-sm hover:bg-white transition-colors"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>

              {/* Featured Posts */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-hust-blue mb-6">Popular Articles</h3>
                <div className="space-y-6">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} to={`/blog/${post.id}`} className="flex items-start space-x-4 group">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-hust-blue group-hover:text-hust-accent transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">{post.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
