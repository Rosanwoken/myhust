import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, BookOpen, Users, Globe, Award, ShieldCheck, Zap, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../constants/siteContent';
import { blogPosts } from '../constants/blogData';

const slides = siteContent.home.hero.slides;
const stats = siteContent.home.stats;
const featuresData = siteContent.home.features;
const partners = siteContent.home.partners;

const features = [
  { icon: <Zap className="h-8 w-8 text-hust-accent" />, ...featuresData[0] },
  { icon: <ShieldCheck className="h-8 w-8 text-hust-accent" />, ...featuresData[1] },
  { icon: <Users className="h-8 w-8 text-hust-accent" />, ...featuresData[2] },
  { icon: <BookOpen className="h-8 w-8 text-hust-accent" />, ...featuresData[3] },
  { icon: <Globe className="h-8 w-8 text-hust-accent" />, ...featuresData[4] },
  { icon: <Award className="h-8 w-8 text-hust-accent" />, ...featuresData[5] },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Slider */}
      <section className="relative h-[100dvh] sm:h-screen flex items-center justify-center text-white overflow-hidden pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={slides[currentSlide].image}
              alt="HUST Campus"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-hust-blue/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hust-blue/90"></div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-hust-gold text-hust-blue text-xs font-bold uppercase tracking-widest">
                {slides[currentSlide].tag}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight">
                {slides[currentSlide].title === "Building Tomorrow’s Leaders Today!" ? (
                  <>
                    Building Tomorrow’s <br />
                    <span className="text-hust-gold">Leaders Today!</span>
                  </>
                ) : (
                  slides[currentSlide].title
                )}
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 mb-8 md:mb-10 max-w-3xl mx-auto font-light px-4">
                {slides[currentSlide].desc}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-6 sm:px-0">
                <a
                  href={siteContent.contact.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-hust-gold text-hust-blue rounded-full font-bold text-base sm:text-lg hover:bg-white transition-all flex items-center justify-center group"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/admissions"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all"
                >
                  Admission Process
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-10 z-20 pointer-events-none">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-hust-gold hover:text-hust-blue transition-all pointer-events-auto"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-hust-gold hover:text-hust-blue transition-all pointer-events-auto"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === i ? 'bg-hust-gold w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-hust-blue mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VC Welcome Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-hust-gold/10 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={siteContent.home.welcomeSection.image}
                  alt={siteContent.home.welcomeSection.name}
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-hust-blue p-8 pt-20">
                  <h3 className="text-2xl font-bold text-white mb-1">{siteContent.home.welcomeSection.name}</h3>
                  <p className="text-hust-gold font-bold text-sm uppercase tracking-widest">{siteContent.home.welcomeSection.role}</p>
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
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-hust-blue/5 rounded-full text-hust-blue font-bold text-sm">
                <Quote className="h-4 w-4 text-hust-accent" />
                <span>President's Welcome</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue">
                {siteContent.home.welcomeSection.title}
              </h2>
              <div className="space-y-6">
                {siteContent.home.welcomeSection.message.map((paragraph: string, i: number) => (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed italic">
                    "{paragraph}"
                  </p>
                ))}
              </div>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center text-hust-accent font-bold hover:underline"
                >
                  Learn more about our vision <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">{siteContent.home.whyChooseHust.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {siteContent.home.whyChooseHust.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm transition-all border border-gray-100"
              >
                <div className="mb-6 p-3 bg-hust-blue/5 inline-block rounded-xl group-hover:bg-hust-accent/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-hust-blue">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colleges Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">{siteContent.home.collegesSection.title}</h2>
              <p className="text-gray-600">
                {siteContent.home.collegesSection.desc}
              </p>
            </div>
            <Link to="/colleges" className="text-hust-accent font-bold flex items-center hover:underline">
              View all programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.colleges.slice(0, 4).map((college: any, i: number) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <img
                  src={college.image}
                  alt={college.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hust-blue via-hust-blue/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{college.title}</h3>
                  <p className="text-sm text-gray-300 mb-4 line-clamp-2">
                    {college.programs.map((p: any) => p.name).join(', ')}
                  </p>
                  <Link to={`/colleges/${college.id}`} className="inline-flex items-center text-hust-gold font-bold text-sm">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Centres Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">Academic Centres</h2>
              <p className="text-gray-600">
                Specialized hubs dedicated to research, innovation, and strategic studies, fostering excellence beyond traditional boundaries.
              </p>
            </div>
            <Link to="/academics" className="text-hust-accent font-bold flex items-center hover:underline">
              Explore Academic Resources <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl aspect-video md:aspect-auto md:h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                alt="Centre for Research & Innovation"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hust-blue via-hust-blue/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Centre for Research & Innovation (CRI)</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">Driving technological advancement and interdisciplinary research excellence.</p>
                <Link to="/centres/cri" className="inline-flex items-center text-hust-gold font-bold text-sm">
                  Visit Centre <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl aspect-video md:aspect-auto md:h-[300px]"
            >
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
                alt="Centre for Intelligence & Securities Studies"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hust-blue via-hust-blue/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Centre for Intelligence & Securities Studies (CISS)</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">Providing strategic insights and advanced training in security and intelligence.</p>
                <Link to="/centres/ciss" className="inline-flex items-center text-hust-gold font-bold text-sm">
                  Visit Centre <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Degree Programmes & Admission Requirements Intro */}
      <section className="py-24 bg-hust-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-hust-accent/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  {siteContent.home.programmesRequirementsSection.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  {siteContent.home.programmesRequirementsSection.desc}
                </p>
                <Link
                  to="/admissions"
                  className="inline-flex items-center px-8 py-4 bg-hust-gold text-hust-blue rounded-full font-bold text-lg hover:bg-white transition-all group"
                >
                  {siteContent.home.programmesRequirementsSection.cta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/5 text-center">
                    <div className="text-3xl font-bold text-hust-gold mb-1">4-6</div>
                    <div className="text-xs text-gray-300 uppercase tracking-widest">Years Duration</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/5 text-center">
                    <div className="text-3xl font-bold text-hust-gold mb-1">25+</div>
                    <div className="text-xs text-gray-300 uppercase tracking-widest">Programmes</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/5 text-center">
                    <div className="text-3xl font-bold text-hust-gold mb-1">UTME</div>
                    <div className="text-xs text-gray-300 uppercase tracking-widest">Entry Path</div>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/5 text-center">
                    <div className="text-3xl font-bold text-hust-gold mb-1">DE</div>
                    <div className="text-xs text-gray-300 uppercase tracking-widest">Direct Entry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">{siteContent.home.newsSection.title}</h2>
              <p className="text-gray-600">
                {siteContent.home.newsSection.desc}
              </p>
            </div>
            <Link to="/blog" className="text-hust-accent font-bold flex items-center hover:underline">
              View all insights <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((news, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-hust-blue/5 text-hust-blue text-xs font-bold rounded-full">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-hust-blue mb-4 line-clamp-2 group-hover:text-hust-accent transition-colors">
                    {news.title}
                  </h3>
                  <Link to={`/blog/${news.id}`} className="text-sm font-bold text-hust-blue flex items-center group-hover:translate-x-1 transition-transform">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees Calculator CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hust-blue rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            <div className="p-12 md:p-20 text-white relative">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-hust-accent/10 -skew-x-12 translate-x-1/2"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Plan Your Education</h2>
                <p className="text-xl text-gray-300 max-w-2xl mb-10">
                  View the detailed fee schedule for the 2025/2026 academic session and use our interactive installment calculator to plan your payments.
                </p>
                <Link 
                  to="/fees"
                  className="inline-flex items-center px-10 py-5 bg-hust-gold text-hust-blue rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl"
                >
                  View Fee Schedule & Calculator <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-hust-blue mb-4">{siteContent.home.testimonialsSection.title}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {siteContent.home.testimonialsSection.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.home.testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative flex flex-col"
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-hust-blue/5" />
                <div className="flex items-center space-x-3 mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-xl object-cover shrink-0" />
                  <div className="min-w-0">
                    <h4 className="font-bold text-hust-blue text-sm truncate">{testimonial.name}</h4>
                    <p className="text-[10px] text-hust-accent font-medium truncate">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed text-xs">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-hust-blue mb-2">{siteContent.home.partnersSection.title}</h2>
          <p className="text-gray-500 text-sm">{siteContent.home.partnersSection.desc}</p>
        </div>
        
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...partners, ...partners].map((partner, i) => (
              <a 
                key={i} 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-4 sm:mx-8 flex flex-col items-center justify-center min-w-[120px] sm:min-w-[150px] group cursor-pointer"
              >
                <div className="h-20 w-40 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={`https://www.google.com/s2/favicons?domain=${partner.url}&sz=128`} 
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="text-hust-blue font-bold text-[10px] text-center hidden">{partner.name}</span>
                </div>
                <span className="mt-2 text-hust-blue font-bold text-[10px] text-center whitespace-normal max-w-[120px] opacity-70 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
          
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap py-4">
            {[...partners, ...partners].map((partner, i) => (
              <a 
                key={i} 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mx-4 sm:mx-8 flex flex-col items-center justify-center min-w-[120px] sm:min-w-[150px] group cursor-pointer"
              >
                <div className="h-20 w-40 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center p-4 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={`https://www.google.com/s2/favicons?domain=${partner.url}&sz=128`} 
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="text-hust-blue font-bold text-[10px] text-center hidden">{partner.name}</span>
                </div>
                <span className="mt-2 text-hust-blue font-bold text-[10px] text-center whitespace-normal max-w-[120px] opacity-70 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hust-blue rounded-3xl p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-hust-accent/5 -skew-x-12 translate-x-1/4"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{siteContent.home.communitySection.title}</h2>
                <p className="text-xl text-gray-300 mb-8">
                  {siteContent.home.communitySection.desc}
                </p>
                <div className="flex items-center space-x-4 text-sm text-hust-gold">
                  <ShieldCheck className="h-5 w-5" />
                  <span>We respect your privacy. Unsubscribe at any time.</span>
                </div>
              </div>
              <form 
                action="mailto:media@hust.edu.ng" 
                method="post" 
                encType="text/plain"
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-hust-gold outline-none text-lg placeholder:text-gray-400"
                />
                <button 
                  type="submit"
                  className="px-10 py-4 bg-hust-gold text-hust-blue rounded-2xl font-bold text-lg hover:bg-white transition-all shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hust-blue relative overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-24 -right-24 w-96 h-96 bg-hust-accent/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 50, 0],
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-hust-gold/5 rounded-full blur-3xl"
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hust-accent/10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            {siteContent.home.ctaSection.title}
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {siteContent.home.ctaSection.desc}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={siteContent.contact.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-hust-gold text-hust-blue rounded-full font-bold text-lg hover:bg-white transition-all text-center"
            >
              Apply Online
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-hust-blue transition-all text-center"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
