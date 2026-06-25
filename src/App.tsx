/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import PageLoader from './components/PageLoader';
import Home from './pages/Home';
import About from './pages/About';
import Colleges from './pages/Colleges';
import CollegeDetail from './pages/CollegeDetail';
import FacultyProfile from './pages/FacultyProfile';
import Admissions from './pages/Admissions';
import Fees from './pages/Fees';
import Academics from './pages/Academics';
import CampusLife from './pages/CampusLife';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Research from './pages/Research';
import AcademicCalendar from './pages/AcademicCalendar';
import BlogPostDetail from './pages/BlogPostDetail';
import FounderMessage from './pages/FounderMessage';
import StudentPortal from './pages/StudentPortal';
import StaffFaculty from './pages/StaffFaculty';
import GoverningCouncil from './pages/GoverningCouncil';
import GovernanceManagement from './pages/GovernanceManagement';
import CentreDetail from './pages/CentreDetail';
import ProgrammeDetail from './pages/ProgrammeDetail';
import { initAnalytics, trackPageView } from './lib/analytics';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-hust-accent z-[100] origin-left"
      style={{ scaleX }}
    />
  );
}

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-4 bg-hust-blue text-white rounded-full shadow-2xl hover:bg-hust-accent transition-colors group"
        >
          <svg
            className="w-6 h-6 transition-transform group-hover:-translate-y-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initAnalytics();
    
    // Simulate initial loading or wait for window load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-hust-accent selection:text-white">
      <AnimatePresence>
        {isLoading && <PageLoader />}
      </AnimatePresence>
      
      <ScrollProgress />
      <AnalyticsTracker />
      <ScrollToTop />
      <BackToTop />
      <ChatWidget />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/founder-message" element={<FounderMessage />} />
              <Route path="/colleges" element={<Colleges />} />
              <Route path="/colleges/:id" element={<CollegeDetail />} />
              <Route path="/programmes/:id" element={<ProgrammeDetail />} />
              <Route path="/centres/:id" element={<CentreDetail />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/academic-calendar" element={<AcademicCalendar />} />
              <Route path="/faculty/:id" element={<FacultyProfile />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/research" element={<Research />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/student-portal" element={<StudentPortal />} />
              <Route path="/staff-faculty" element={<StaffFaculty />} />
              <Route path="/governing-council" element={<GoverningCouncil />} />
              <Route path="/governance-management" element={<GovernanceManagement />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
