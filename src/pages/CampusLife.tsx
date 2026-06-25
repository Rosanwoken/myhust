import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, Coffee, Dumbbell, Music, Users, ShieldCheck, HeartPulse, 
  Sparkles, Camera, MapPin, ExternalLink, X, Clock, Calendar, 
  ChevronRight, PlayCircle
} from 'lucide-react';
import { siteContent } from '../constants/siteContent';

export default function CampusLife() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const campusLife = siteContent.campusLife;

  const activityIcons = [
    <Home className="h-6 w-6" />,
    <Coffee className="h-6 w-6" />,
    <Dumbbell className="h-6 w-6" />,
    <Music className="h-6 w-6" />,
    <Users className="h-6 w-6" />,
    <ShieldCheck className="h-6 w-6" />,
    <HeartPulse className="h-6 w-6" />,
    <Sparkles className="h-6 w-6" />,
  ];

  const activities = campusLife.activities.map((activity, i) => ({
    ...activity,
    icon: activityIcons[i] || <Sparkles className="h-6 w-6" />
  }));

  const timelineIcons: Record<string, React.ReactNode> = {
    "Morning Jog & Fitness": <Dumbbell className="h-5 w-5" />,
    "Breakfast at Cafeteria": <Coffee className="h-5 w-5" />,
    "Lectures & Lab Sessions": <Sparkles className="h-5 w-5" />,
    "Lunch & Social Hour": <Users className="h-5 w-5" />,
    "Club Meetings & Sports": <Music className="h-5 w-5" />,
    "Dinner & Study Groups": <Home className="h-5 w-5" />,
  };

  const timeline = campusLife.dayInLife.timeline.map(item => ({
    ...item,
    icon: timelineIcons[item.activity] || <Clock className="h-5 w-5" />
  }));

  const categories = ['All', 'Academic', 'Social', 'Facilities'];

  const filteredGallery = activeCategory === 'All' 
    ? campusLife.gallery.items 
    : campusLife.gallery.items.filter(item => item.category === activeCategory);

  return (
    <div className="pt-36 bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={campusLife.hero.image} 
            alt="Campus Background" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-hust-blue/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-hust-gold/20 text-hust-gold rounded-full text-sm font-bold tracking-widest uppercase mb-6 border border-hust-gold/30">
              The HUST Experience
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-8 leading-tight">
              {campusLife.hero.title.split(' ').map((word, i) => 
                word === 'Innovation' ? <span key={i} className="text-hust-gold italic">{word}</span> : word + ' '
              )}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed mb-12">
              {campusLife.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-hust-gold text-hust-blue rounded-full font-bold hover:bg-white transition-all shadow-xl flex items-center gap-2">
                Explore Facilities <ChevronRight className="h-5 w-5" />
              </button>
              <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                <PlayCircle className="h-5 w-5" /> Watch Campus Tour
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 right-0 z-10 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-white/80 text-sm font-medium">
            <div className="flex items-center gap-2"><Users className="h-4 w-4 text-hust-gold" /> 20+ Student Clubs</div>
            <div className="flex items-center gap-2"><Home className="h-4 w-4 text-hust-gold" /> 100% On-Campus Housing</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-hust-gold" /> 24/7 Safe Environment</div>
            <div className="flex items-center gap-2"><HeartPulse className="h-4 w-4 text-hust-gold" /> Modern Health Center</div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Feature */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 bg-hust-blue rounded-3xl p-12 text-white relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h2 className="text-4xl font-display font-bold mb-6">{campusLife.activities[0].title}</h2>
                <p className="text-gray-300 mb-8 max-w-md">{campusLife.activities[0].desc}</p>
                <button className="flex items-center gap-2 text-hust-gold font-bold hover:gap-4 transition-all">
                  View Accommodations <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-hust-accent/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
              <img 
                src={campusLife.activities[0].image || "https://hust.edu.ng/wp-content/uploads/2024/11/hust-facilities-2-1.jpeg"} 
                alt="Hostel" 
                className="absolute bottom-0 right-0 w-1/2 h-1/2 object-cover rounded-tl-3xl opacity-40 group-hover:opacity-60 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Small Features */}
            {activities.slice(1, 5).map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-gray-100 group"
              >
                <div className={`mb-6 p-3 inline-block rounded-2xl ${activity.color}`}>
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-hust-blue mb-3">{activity.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{activity.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Day in the Life */}
      <section className="py-32 bg-hust-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-hust-gold font-bold tracking-widest uppercase text-sm mb-4 block">Daily Routine</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">{campusLife.dayInLife.title}</h2>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                {campusLife.dayInLife.desc}
              </p>
              
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="text-hust-gold font-mono text-sm w-20">{item.time}</div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-hust-gold group-hover:text-hust-blue transition-all">
                      {item.icon}
                    </div>
                    <div className="text-white font-medium text-lg">{item.activity}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={campusLife.dayInLife.image} 
                  alt="Student Life" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-hust-gold p-8 rounded-[2rem] shadow-2xl max-w-[250px]">
                <Sparkles className="h-8 w-8 text-hust-blue mb-4" />
                <p className="text-hust-blue font-bold text-lg leading-tight">Vibrant social life and lifelong friendships.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-hust-blue mb-6">{campusLife.gallery.title}</h2>
              <p className="text-gray-600 text-lg">{campusLife.gallery.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full font-bold transition-all text-sm ${
                    activeCategory === cat 
                      ? 'bg-hust-blue text-white shadow-xl scale-105' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((item, i) => (
                <motion.div
                  key={item.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer shadow-lg"
                  onClick={() => setSelectedImage(item.url)}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hust-blue/80 via-hust-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <Camera className="text-hust-gold h-8 w-8 mb-4" />
                    <h4 className="text-white font-bold text-xl mb-1">{item.title}</h4>
                    <span className="text-hust-gold text-xs uppercase tracking-widest font-bold">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-hust-blue/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-hust-gold transition-colors p-2 bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery Preview"
              className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl border-4 border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Student Testimonial - Refined */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute -top-10 -left-10 text-hust-gold/20 font-serif text-[20rem] leading-none select-none">"</div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-12 md:p-24 text-center shadow-2xl relative z-10 border border-gray-100"
            >
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <img
                    src={siteContent.home.testimonials[0].image}
                    alt={siteContent.home.testimonials[0].name}
                    className="w-32 h-32 rounded-full border-8 border-gray-50 shadow-2xl object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-hust-gold p-2 rounded-full shadow-lg">
                    <Sparkles className="h-5 w-5 text-hust-blue" />
                  </div>
                </div>
              </div>
              <p className="text-2xl md:text-4xl font-display italic mb-10 leading-snug text-hust-blue">
                "{siteContent.home.testimonials[0].text}"
              </p>
              <div className="w-16 h-1 bg-hust-gold mx-auto mb-6"></div>
              <h4 className="text-2xl font-bold text-hust-blue">{siteContent.home.testimonials[0].name}</h4>
              <p className="text-hust-accent font-medium tracking-widest uppercase text-sm">{siteContent.home.testimonials[0].role}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visit Us - Modern Layout */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-hust-blue rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[600px]">
            <div className="p-16 lg:p-24 lg:w-1/2 text-white">
              <span className="text-hust-gold font-bold tracking-widest uppercase text-sm mb-4 block">Plan Your Visit</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">{campusLife.visitUs.title}</h2>
              <p className="text-gray-300 mb-12 text-lg leading-relaxed">
                {campusLife.visitUs.desc}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-hust-gold">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Main Campus</h4>
                    <p className="text-gray-400 text-sm leading-tight">{siteContent.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-hust-gold">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Ibadan Campus</h4>
                    <p className="text-gray-400 text-sm leading-tight">{siteContent.contact.ibadanCampus.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-hust-gold">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Tour Hours</h4>
                    <p className="text-gray-400 text-sm leading-tight">{siteContent.contact.workingDays}: {siteContent.contact.workingHours}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-10 py-4 bg-hust-gold text-hust-blue rounded-full font-bold hover:bg-white transition-all shadow-lg">
                  Book a Campus Tour
                </button>
                <button className="px-10 py-4 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                  Virtual Tour <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative group">
              <img 
                src={campusLife.visitUs.image} 
                alt="Campus Map" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl text-center max-w-xs transform group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="h-12 w-12 text-hust-blue mx-auto mb-4" />
                  <h4 className="text-hust-blue font-bold text-xl mb-2">Interactive Map</h4>
                  <p className="text-gray-500 text-sm">Explore our campus buildings and facilities in detail.</p>
                  <button className="mt-4 text-hust-accent font-bold text-sm hover:underline">Open Map</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
