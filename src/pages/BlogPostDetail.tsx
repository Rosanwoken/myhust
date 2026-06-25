import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { blogPosts } from '../constants/blogData';
import Markdown from 'react-markdown';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BlogPostDetail() {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts.find(p => p.id === id) : null;

  if (!post) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-4xl font-display font-bold text-hust-blue mb-6">Article Not Found</h1>
        <Link to="/blog" className="text-hust-accent font-bold flex items-center justify-center hover:underline">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-36 min-h-screen bg-white">
      {/* Article Header */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-hust-blue/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog" className="inline-flex items-center text-hust-gold font-bold mb-6 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-hust-accent text-white text-xs font-bold rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-200 flex items-center"><Calendar className="mr-1.5 h-3.5 w-3.5" /> {post.date}</span>
              <span className="text-xs text-gray-200 flex items-center"><Clock className="mr-1.5 h-3.5 w-3.5" /> {post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-hust-gold text-hust-blue flex items-center justify-center font-bold">
                {post.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white">{post.author}</p>
                <p className="text-xs text-gray-300">Faculty Member</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Social Share Sidebar */}
            <aside className="lg:w-16 flex lg:flex-col items-center justify-center lg:justify-start space-x-6 lg:space-x-0 lg:space-y-6 mb-12 lg:mb-0">
              <div className="text-gray-400 text-xs font-bold uppercase tracking-widest lg:-rotate-90 lg:mb-12">Share</div>
              <button className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-hust-blue hover:bg-hust-blue/5 transition-all">
                <Facebook className="h-5 w-5" />
              </button>
              <button className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-hust-accent hover:bg-hust-accent/5 transition-all">
                <Twitter className="h-5 w-5" />
              </button>
              <button className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-hust-blue hover:bg-hust-blue/5 transition-all">
                <Linkedin className="h-5 w-5" />
              </button>
              <button className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-hust-gold hover:bg-hust-gold/5 transition-all">
                <Share2 className="h-5 w-5" />
              </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="markdown-body prose prose-lg prose-hust max-w-none">
                <Markdown>{post.content}</Markdown>
              </div>

              {/* Author Bio Footer */}
              <div className="mt-20 p-10 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-24 h-24 rounded-3xl bg-hust-blue text-white flex items-center justify-center text-3xl font-display font-bold shrink-0">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-hust-blue mb-2">About {post.author}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.author} is a distinguished member of the Hillside University faculty, specializing in {post.category.toLowerCase()}. Their research and insights contribute significantly to the academic community and the university's mission of innovation.
                  </p>
                  <div className="flex space-x-4">
                    <button className="text-sm font-bold text-hust-accent flex items-center hover:underline">
                      View Profile <ArrowRight className="ml-1.5 h-4 w-4" />
                    </button>
                    <button className="text-sm font-bold text-hust-blue flex items-center hover:underline">
                      Contact <MessageSquare className="ml-1.5 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Related Posts */}
              <div className="mt-24">
                <h2 className="text-2xl font-display font-bold text-hust-blue mb-10">You Might Also Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((related) => (
                    <Link key={related.id} to={`/blog/${related.id}`} className="group">
                      <div className="aspect-video rounded-2xl overflow-hidden mb-4">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-hust-blue group-hover:text-hust-accent transition-colors leading-tight">
                        {related.title}
                      </h3>
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
