import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function FounderMessage() {
  return (
    <div className="pt-40 pb-24">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://hust.edu.ng/wp-content/uploads/2024/11/hillside-university-of-science-and-technology.webp"
            alt="HUST Campus"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-hust-blue/80 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6"
          >
            From the Desk of the Founder
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 100 }}
            className="h-1.5 bg-hust-gold mx-auto rounded-full"
          />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Founder Image & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-hust-gold/20 rounded-2xl blur-2xl group-hover:bg-hust-gold/30 transition-all duration-500"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://hust.edu.ng/wp-content/uploads/2024/11/Mr.-Laoye-Jaiyeola.png"
                  alt="Mr. Laoye Jaiyeola - Founder"
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-8 pb-4 text-center">
                  <h2 className="text-2xl font-display font-bold text-hust-blue">Mr. Laoye Jaiyeola</h2>
                  <p className="text-hust-gold font-semibold mt-1">Founder, Hillside University of Science and Technology</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="relative">
              <Quote className="absolute -top-10 -left-10 h-20 w-20 text-hust-gold/10 rotate-12" />
              <h3 className="text-3xl font-display font-bold text-hust-blue mb-8 leading-tight">
                "Our vision is to build a premier institution that bridges the gap between academic excellence and practical innovation."
              </h3>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Welcome to Hillside University of Science and Technology (HUST). Our journey began with a simple yet profound vision: to create an educational environment where the brightest minds are empowered to solve the most pressing challenges of our time through science, technology, and innovation.
              </p>
              
              <p>
                In an ever-evolving global landscape, the role of specialized education cannot be overstated. At HUST, we are committed to providing our students with more than just a degree. We provide a transformative experience that fosters critical thinking, entrepreneurial spirit, and a deep sense of social responsibility.
              </p>

              <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-hust-gold italic">
                "We believe that every student has the potential to be a leader and a change-maker. Our role is to provide the platform, the resources, and the guidance to help them realize that potential."
              </div>

              <p>
                Our curriculum is designed to be industry-relevant, ensuring that our graduates are not only employable but are also creators of value and opportunities. We have invested heavily in state-of-the-art laboratories, research facilities, and a world-class faculty to ensure that our students are at the forefront of technological advancement.
              </p>

              <p>
                As we continue to grow and expand our horizons, our core values of excellence, integrity, and innovation remain the bedrock of everything we do. We invite you to be a part of this exciting journey as we shape the future of education in Nigeria and beyond.
              </p>

              <div className="pt-8 border-t border-gray-100">
                <p className="font-bold text-hust-blue mb-1">Warm regards,</p>
                <p className="text-xl font-display font-bold text-hust-blue">Mr. Laoye Jaiyeola</p>
                <p className="text-gray-500">Founder, HUST</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
