import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search as SearchIcon, Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Search from './Search';
import { siteContent } from '../constants/siteContent';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'About HUST', 
    path: '/about',
    mega: true,
    columns: [
      {
        title: 'Discover HUST',
        links: [
          { name: 'About HUST', path: '/about#about-hust' },
          { name: 'Founder\'s Message', path: '/founder-message' },
          { name: 'Student Life', path: '/campus-life' },
          { name: 'Contact Us', path: '/contact' },
        ]
      },
      {
        title: 'Governance',
        links: [
          { name: 'Board of Regents', path: '/governance-management#leadership' },
          { name: 'Governing Council', path: '/governing-council' },
          { name: 'Principal Officers', path: '/governance-management#governance' },
        ]
      }
    ]
  },
  { 
    name: 'Academics', 
    path: '/academics',
    mega: true,
    columns: [
      {
        title: 'Our Colleges',
        links: [
          { name: 'Medicine & Health', path: '/colleges/medicine' },
          { name: 'Engineering & Computing', path: '/colleges/engineering' },
          { name: 'Agriculture & Life Sciences', path: '/colleges/agriculture' },
          { name: 'Business, Law & Education', path: '/colleges/business' },
        ]
      },
      {
        title: 'Academic Resources',
        links: [
          { name: 'Programmes', path: '/academics' },
          { name: 'Academic Calendar', path: '/academic-calendar' },
          { name: 'Centre for Innovation (CRI)', path: '/centres/cri' },
          { name: 'Intelligence Studies (CISS)', path: '/centres/ciss' },
        ]
      }
    ]
  },
  { 
    name: 'Admissions', 
    path: '/admissions',
    subLinks: [
      { name: 'Admission Process', path: '/admissions' },
      { name: 'Apply Now', path: siteContent.contact.portalUrl, isExternal: true },
    ]
  },
  { name: 'Tuition', path: '/fees' },
  { name: 'Research', path: '/research' },
  { name: 'Blog', path: '/blog' },
];

const Logo = ({ scrolled }: { scrolled: boolean }) => (
  <div className="flex items-center space-x-3 group">
    <motion.div 
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="relative h-10 sm:h-14 transition-all duration-500"
    >
      <img 
        src="https://hust.edu.ng/wp-content/uploads/2026/04/HUST_Main_Logo.png" 
        alt="HUST Logo" 
        className={`h-full object-contain transition-all duration-500 ${scrolled ? 'drop-shadow-sm' : 'drop-shadow-md'}`}
        referrerPolicy="no-referrer"
      />
    </motion.div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isSearchOpen]);

  return (
    <>
      <header className="fixed top-0 w-full z-50 transition-all duration-300 shadow-sm">
        {/* Prestige Top Bar */}
        <div className="hidden sm:block bg-[#0A0D14] text-gray-300 py-1.5 border-b border-white/5 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-bold tracking-[0.15em] uppercase">
            <div className="flex items-center space-x-8">
              <a href={`tel:${siteContent.contact.phone.replace(/\D/g, '')}`} className="flex items-center hover:text-white transition-all duration-300 group">
                <Phone className="h-3 w-3 mr-2 text-hust-gold/70 group-hover:text-hust-gold transition-colors" /> 
                {siteContent.contact.phone}
              </a>
              <a href={`mailto:${siteContent.contact.email}`} className="flex items-center hover:text-white transition-all duration-300 group">
                <Mail className="h-3 w-3 mr-2 text-hust-gold/70 group-hover:text-hust-gold transition-colors" /> 
                {siteContent.contact.email}
              </a>
            </div>
            <div className="flex items-center space-x-8">
              <span className="hidden lg:flex items-center">
                <Globe className="h-3 w-3 mr-2 text-hust-gold/70" />
                Okemesi-Ekiti, Nigeria
              </span>
              <span className="text-hust-gold italic tracking-normal">Learning & Living</span>
            </div>
          </div>
        </div>

        <nav className={`transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg py-1' : 'bg-white py-3 border-b border-gray-100'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link to="/" className="relative z-10">
                <Logo scrolled={scrolled} />
              </Link>
 
             {/* Desktop Menu */}
             <div className="hidden lg:flex items-center space-x-1">
               {navLinks.map((link) => (
                 <div 
                   key={link.name} 
                   className="relative group px-0.5"
                   onMouseEnter={() => (link.subLinks || link.columns) && setActiveDropdown(link.name)}
                   onMouseLeave={() => {
                     setActiveDropdown(null);
                     setActiveSubDropdown(null);
                   }}
                 >
                   <Link
                     to={link.path}
                     className={`flex items-center text-[14px] font-bold tracking-tight transition-all px-4 py-2.5 rounded-xl hover:bg-hust-blue/5 ${
                       location.pathname === link.path 
                         ? 'text-hust-blue bg-hust-blue/5' 
                         : 'text-gray-600 hover:text-hust-blue'
                     }`}
                   >
                     {link.name}
                     {link.subLinks && (
                       <ChevronDown className={`ml-1.5 h-4 w-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180 text-hust-accent' : 'text-gray-300'}`} />
                     )}
                   </Link>
 
                   {(link.subLinks || link.columns) && (
                     <AnimatePresence>
                       {activeDropdown === link.name && (
                         <motion.div
                           initial={{ opacity: 0, y: 15, scale: 0.95 }}
                           animate={{ opacity: 1, y: 0, scale: 1 }}
                           exit={{ opacity: 0, y: 15, scale: 0.95 }}
                           transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                           className={`absolute top-full -left-4 ${link.mega ? 'w-[520px]' : 'w-72'} mt-2 bg-white rounded-3xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50 p-2`}
                         >
                           <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-hust-blue via-hust-accent to-hust-gold opacity-80" />
                           {link.mega ? (
                             <div className="grid grid-cols-2 gap-4 p-4 text-left">
                               {link.columns?.map((col: any, idx: number) => (
                                 <div key={idx} className="space-y-4">
                                   <h5 className="px-4 text-[10px] font-black uppercase tracking-widest text-gray-400">{col.title}</h5>
                                   <div className="space-y-1">
                                     {col.links.map((sub: any) => (
                                       <Link
                                         key={sub.name}
                                         to={sub.path}
                                         className="flex items-center px-4 py-3 text-[13px] font-bold text-gray-600 hover:bg-hust-blue/5 hover:text-hust-blue rounded-2xl transition-all group/item"
                                       >
                                         <span className="w-1.5 h-1.5 rounded-full bg-hust-accent mr-3 opacity-0 group-hover/item:opacity-100 transition-all scale-0 group-hover/item:scale-100" />
                                         {sub.name}
                                       </Link>
                                     ))}
                                   </div>
                                 </div>
                               ))}
                             </div>
                           ) : (
                             <div className="p-2 space-y-1 text-left">
                               {link.subLinks?.map((sub: any) => (
                                 <div key={sub.name} className="px-1">
                                    {sub.isExternal ? (
                                      <a
                                        href={sub.path} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-between px-4 py-3 text-[13px] font-bold text-gray-600 hover:bg-hust-blue/5 hover:text-hust-blue rounded-2xl transition-all group/item"
                                      >
                                        {sub.name} <ExternalLink className="h-3 w-3 opacity-30 group-hover/item:opacity-100" />
                                      </a>
                                    ) : (
                                      <Link
                                        to={sub.path}
                                        className="flex items-center px-4 py-3 text-[13px] font-bold text-gray-600 hover:bg-hust-blue/5 hover:text-hust-blue rounded-2xl transition-all group/item"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-hust-accent mr-3 opacity-0 group-hover/item:opacity-100 transition-all scale-0 group-hover/item:scale-100" />
                                        {sub.name}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                             </div>
                           )}
                         </motion.div>
                       )}
                     </AnimatePresence>
                   )}
                 </div>
               ))}
               
               <div className="pl-4 flex items-center space-x-3">
                 <button
                    onClick={() => setIsSearchOpen(true)}
                    className="hidden xl:flex items-center space-x-3 px-5 py-2.5 bg-gray-50/50 backdrop-blur-sm border border-gray-100 rounded-full text-gray-400 hover:bg-white hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group"
                  >
                    <SearchIcon className="h-4 w-4 group-hover:text-hust-blue transition-colors" />
                    <span className="text-[13px] font-medium pr-12">Search...</span>
                    <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 rounded border border-gray-200 bg-white text-[10px] font-bold text-gray-300 group-hover:text-gray-400">/</kbd>
                  </button>

                 <button
                   onClick={() => setIsSearchOpen(true)}
                   className="xl:hidden p-2.5 rounded-full transition-all hover:bg-hust-blue/5 text-hust-blue hover:scale-110 active:scale-95"
                 >
                   <SearchIcon className="h-5 w-5" />
                 </button>
 
                 <a
                   href={siteContent.contact.portalUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="relative group overflow-hidden px-8 py-3.5 rounded-full text-[12px] font-black uppercase tracking-widest text-white shadow-xl shadow-hust-blue/20 hover:shadow-hust-accent/30 transition-all active:scale-95"
                 >
                   <div className="absolute inset-0 bg-hust-blue group-hover:bg-hust-accent transition-colors duration-500" />
                   <span className="relative z-10 flex items-center">
                     Apply Now
                     <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="ml-2">
                       <ExternalLink className="h-3 w-3" />
                     </motion.div>
                   </span>
                 </a>
               </div>
             </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-hust-blue hover:text-hust-accent focus:outline-none"
              >
                <SearchIcon className="h-6 w-6" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-hust-blue hover:text-hust-accent focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-0 lg:hidden bg-white z-40 pt-24"
            >
              <div className="h-full overflow-y-auto px-6 py-8 pb-32">
                <div className="space-y-6 text-left">
                  {navLinks.map((link: any) => (
                    <div key={link.name} className="space-y-4">
                      {link.subLinks || link.columns ? (
                        <div className="space-y-4">
                          <h4 className="text-[28px] font-black text-hust-blue tracking-tighter">{link.name}</h4>
                          <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-gray-100">
                            {link.columns ? (
                              link.columns.flatMap((c: any) => c.links).map((sub: any) => (
                                <Link key={sub.name} to={sub.path} className="text-lg font-bold text-gray-500 hover:text-hust-accent transition-colors">{sub.name}</Link>
                              ))
                            ) : (
                                link.subLinks?.map((sub: any) => (
                                  <Link key={sub.name} to={sub.path} className="text-lg font-bold text-gray-500 hover:text-hust-accent transition-colors">{sub.name}</Link>
                                ))
                            )}
                          </div>
                        </div>
                      ) : (
                        <Link to={link.path} className="block text-[28px] font-black text-hust-blue tracking-tighter">{link.name}</Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                   <a
                    href={siteContent.contact.portalUrl} target="_blank" rel="noopener noreferrer"
                      className="block w-full py-5 rounded-2xl bg-hust-blue text-white text-center font-black uppercase tracking-widest shadow-2xl shadow-hust-blue/30 active:scale-95 transition-all"
                    >
                    Join HUST Today
                   </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>

      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
