import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { siteContent } from '../constants/siteContent';

const FooterLogo = () => (
  <div className="flex items-center group">
    <div className="relative h-24 transition-transform duration-300">
      <img 
        src="https://hust.edu.ng/wp-content/uploads/2026/04/HUST_footer_Logo.png" 
        alt="HUST Logo" 
        className="h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-hust-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission & Contact */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Link to="/">
                <FooterLogo />
              </Link>
              <p className="text-gray-200 text-sm leading-relaxed">
                Empowering minds and shaping futures through world-class science and technology education in Okemesi-Ekiti, Nigeria.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-hust-gold">CONTACT US</h3>
              <ul className="space-y-4 text-sm text-gray-200">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-hust-gold shrink-0" />
                  <span className="hover:text-hust-gold transition-colors cursor-default">
                    Okemesi-Ekiti, Ekiti State, Nigeria
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-hust-gold shrink-0" />
                  <a href="tel:+2348137388316" className="hover:text-hust-gold transition-colors">
                    (+234) 8137388316
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-hust-gold shrink-0" />
                  <a href="mailto:info@hust.edu.ng" className="hover:text-hust-gold transition-colors">
                    info@hust.edu.ng
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex space-x-3">
              <a href="https://www.facebook.com/people/Hillside-University-of-Science-and-Technology-Okemesi-Ekiti-HUST/100093139260751/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/10 rounded-full hover:bg-hust-gold hover:text-hust-blue transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-hust-gold hover:text-hust-blue transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-hust-gold hover:text-hust-blue transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2.5 bg-white/10 rounded-full hover:bg-hust-gold hover:text-hust-blue transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-200">
              <li><Link to="/about" className="hover:text-hust-gold transition-colors">About HUST</Link></li>
              <li><Link to="/governance-management" className="hover:text-hust-gold transition-colors">Leadership</Link></li>
              <li><Link to="/about#anthem" className="hover:text-hust-gold transition-colors">University Anthem</Link></li>
              <li><Link to="/founder-message" className="hover:text-hust-gold transition-colors">From the Desk of the Founder</Link></li>
              <li><Link to="/colleges" className="hover:text-hust-gold transition-colors">Colleges & Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-hust-gold transition-colors">Admissions</Link></li>
              <li><Link to="/fees" className="hover:text-hust-gold transition-colors">Tuition and Fees Calculator</Link></li>
              <li><Link to="/student-portal" className="hover:text-hust-gold transition-colors">Student Portal</Link></li>
              <li><Link to="/staff-faculty" className="hover:text-hust-gold transition-colors">Staff & Faculty</Link></li>
              <li><Link to="/campus-life" className="hover:text-hust-gold transition-colors">Campus Life</Link></li>
              <li><Link to="/research" className="hover:text-hust-gold transition-colors">Research & Publication</Link></li>
              <li><Link to="/contact" className="hover:text-hust-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Top Programmes */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Our Top Programmes</h3>
            <ul className="space-y-3 text-[11px] text-gray-200">
              <li><Link to="/programmes/mbbs" className="hover:text-hust-gold transition-colors">MBBS. Medicine & Surgery</Link></li>
              <li><Link to="/programmes/bnsc" className="hover:text-hust-gold transition-colors">BNSc. Nursing Science</Link></li>
              <li><Link to="/programmes/bmls" className="hover:text-hust-gold transition-colors">B.MLS. Medical Laboratory Science</Link></li>
              <li><Link to="/programmes/accounting" className="hover:text-hust-gold transition-colors">B.Sc. Accounting</Link></li>
              <li><Link to="/programmes/economics" className="hover:text-hust-gold transition-colors">B.Sc. Economics</Link></li>
              <li><Link to="/programmes/mass-comm" className="hover:text-hust-gold transition-colors">B.Sc. Mass Communication</Link></li>
              <li><Link to="/programmes/computer-science" className="hover:text-hust-gold transition-colors">B.Sc. Computer Science</Link></li>
              <li><Link to="/programmes/cyber-security" className="hover:text-hust-gold transition-colors">B.Sc. Cyber Security</Link></li>
              <li><Link to="/programmes/aerospace-eng" className="hover:text-hust-gold transition-colors">B.Eng. Aerospace Engineering</Link></li>
              <li><Link to="/programmes/mechanical-eng" className="hover:text-hust-gold transition-colors">B.Eng. Mechanical Engineering</Link></li>
              <li><Link to="/programmes/mechatronics-eng" className="hover:text-hust-gold transition-colors">B.Eng. Mechatronics Engineering</Link></li>
              <li><Link to="/programmes/electrical-eng" className="hover:text-hust-gold transition-colors">B.Eng. Electrical Engineering and Electronics</Link></li>
              <li><Link to="/programmes/software-engineering" className="hover:text-hust-gold transition-colors">B.Sc. Software Engineering</Link></li>
              <li><Link to="/programmes/civil-engineering" className="hover:text-hust-gold transition-colors">B.Eng. Civil and Construction Engineering</Link></li>
            </ul>
          </div>

          {/* Right Side: Facebook Widget */}
          <div className="w-full lg:flex lg:flex-col lg:items-end">
            <div className="w-full max-w-[240px]">
              <h3 className="text-lg font-bold mb-6 border-b border-white/20 pb-2">Facebook Feed</h3>
              <div className="rounded-xl overflow-hidden bg-white h-[340px] flex justify-center shadow-lg">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F100093139260751&tabs=timeline&width=240&height=340&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Widget"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {siteContent.universityName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
