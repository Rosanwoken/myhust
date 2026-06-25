import { motion } from 'motion/react';
import { LogIn, User, Lock, GraduationCap, BookOpen, Calendar, Bell, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudentPortal() {
  return (
    <div className="pt-36 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="mb-8">
              <h1 className="text-3xl font-display font-bold text-hust-blue mb-2">Student Portal</h1>
              <p className="text-gray-500">Welcome back! Please enter your credentials to access your academic dashboard.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-hust-blue mb-2 flex items-center">
                  <User className="mr-2 h-4 w-4 text-hust-accent" /> Student ID / Matric Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. HUST/2024/001"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-hust-accent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-hust-blue mb-2 flex items-center">
                  <Lock className="mr-2 h-4 w-4 text-hust-accent" /> Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-hust-accent outline-none transition-all"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-600 cursor-pointer">
                  <input type="checkbox" className="mr-2 rounded border-gray-300 text-hust-accent focus:ring-hust-accent" />
                  Remember me
                </label>
                <button className="text-hust-accent font-bold hover:underline">Forgot password?</button>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-hust-blue text-white rounded-xl font-bold hover:bg-hust-accent transition-all flex items-center justify-center shadow-lg shadow-hust-blue/20"
              >
                <LogIn className="mr-2 h-5 w-5" /> Sign In to Portal
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500">
                New student? <Link to="/admissions" className="text-hust-accent font-bold hover:underline">Complete your registration</Link>
              </p>
            </div>
          </motion.div>

          {/* Right: Portal Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-hust-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-hust-accent" />
                </div>
                <h3 className="font-bold text-hust-blue mb-2">Course Registration</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Register for your semester courses and manage your academic workload.</p>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-hust-gold/10 rounded-2xl flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-hust-gold" />
                </div>
                <h3 className="font-bold text-hust-blue mb-2">Results & Transcripts</h3>
                <p className="text-xs text-gray-500 leading-relaxed">View your semester results and download official academic transcripts.</p>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-hust-blue/5 rounded-2xl flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-hust-blue" />
                </div>
                <h3 className="font-bold text-hust-blue mb-2">Academic Calendar</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Stay updated with important dates, exams, and university events.</p>
              </div>

              <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center mb-4">
                  <Bell className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="font-bold text-hust-blue mb-2">Announcements</h3>
                <p className="text-xs text-gray-500 leading-relaxed">Receive real-time notifications from your department and the university.</p>
              </div>
            </div>

            <div className="bg-hust-blue p-8 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-xl font-bold mb-4 relative z-10">Need Technical Support?</h3>
              <p className="text-sm text-gray-300 mb-6 relative z-10">
                If you're having trouble accessing your portal, please contact the IT support desk.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-hust-gold text-hust-blue rounded-xl font-bold text-sm hover:bg-white transition-colors"
              >
                Get Help <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
