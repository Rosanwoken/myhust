import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { siteContent } from '../constants/siteContent';

export default function Contact() {
  const contactPage = siteContent.contactPage;

  return (
    <div className="pt-36">
      {/* Page Header */}
      <section className="bg-hust-blue py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hust-accent/10 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {contactPage.header.title}
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            {contactPage.header.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-hust-blue mb-6">{contactPage.intro.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {contactPage.intro.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-hust-blue/5 text-hust-accent rounded-xl">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-hust-blue">General Info</h4>
                    <p className="text-sm text-gray-500">{siteContent.contact.phone}</p>
                    <p className="text-sm text-gray-500">{siteContent.contact.mediaEmail}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-hust-blue/5 text-hust-accent rounded-xl">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-hust-blue">Admissions</h4>
                    <p className="text-sm text-gray-500">{siteContent.contact.admissionsPhone}</p>
                    <p className="text-sm text-gray-500">{siteContent.contact.admissionsEmail}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-hust-blue/5 text-hust-accent rounded-xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-hust-blue">Main Campus</h4>
                      <a 
                        href={siteContent.contact.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-hust-accent transition-colors block"
                      >
                        {siteContent.contact.address}
                      </a>
                    </div>
                    <div>
                      <h4 className="font-bold text-hust-blue">{siteContent.contact.ibadanCampus.name}</h4>
                      <p className="text-sm text-gray-500">
                        {siteContent.contact.ibadanCampus.address}
                      </p>
                      <a 
                        href={`tel:${siteContent.contact.ibadanCampus.phone.replace(/\D/g, '')}`}
                        className="text-sm text-hust-accent font-bold hover:underline"
                      >
                        Tel: {siteContent.contact.ibadanCampus.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-hust-blue/5 text-hust-accent rounded-xl">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-hust-blue">Working Hours</h4>
                    <p className="text-sm text-gray-500">{siteContent.contact.workingDays}</p>
                    <p className="text-sm text-gray-500">{siteContent.contact.workingHours}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <MessageSquare className="h-6 w-6 text-hust-accent" />
                  <h4 className="text-xl font-bold text-hust-blue">Live Chat</h4>
                </div>
                <p className="text-sm text-gray-600 mb-6">
                  Need immediate assistance? Our support team is available for live chat during working hours.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={`https://wa.me/${siteContent.contact.whatsapp1.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-hust-blue text-white rounded-xl font-bold hover:bg-hust-accent transition-all flex items-center"
                  >
                    General Inquiry
                  </a>
                  <a 
                    href={`https://wa.me/${siteContent.contact.whatsapp2.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white border-2 border-hust-blue text-hust-blue rounded-xl font-bold hover:bg-hust-blue/5 transition-all flex items-center"
                  >
                    Admissions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-hust-blue mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hust-accent focus:ring-2 focus:ring-hust-accent/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hust-accent focus:ring-2 focus:ring-hust-accent/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hust-accent focus:ring-2 focus:ring-hust-accent/20 outline-none transition-all">
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Academics</option>
                    <option>Partnership</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-hust-accent focus:ring-2 focus:ring-hust-accent/20 outline-none transition-all"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-hust-blue text-white rounded-xl font-bold hover:bg-hust-accent transition-all flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200 relative group overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: 'url("https://hust.edu.ng/wp-content/uploads/2024/11/hillside-university-of-science-and-technology.webp")' }}
        >
          <div className="absolute inset-0 bg-hust-blue/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-center bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-md mx-4 border border-white/20"
          >
            <div className="w-16 h-16 bg-hust-blue text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-hust-blue mb-2">Find Us on Google Maps</h3>
            <p className="text-gray-600 mb-8 text-sm">
              Visit our campus in Okemesi-Ekiti. Click below for directions and real-time navigation.
            </p>
            <a 
              href={siteContent.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-hust-blue text-white rounded-xl font-bold hover:bg-hust-accent transition-all shadow-lg hover:shadow-xl"
            >
              Get Directions
              <Send className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
