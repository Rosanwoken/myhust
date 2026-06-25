import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight, Download, ChevronRight } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const academicCalendar = {
  session: "2025/2026",
  semesters: [
    {
      name: "First Semester",
      events: [
        { date: "Oct 14, 2024", event: "Resumption for Fresh Students", category: "Resumption" },
        { date: "Oct 21, 2024", event: "Resumption for Returning Students", category: "Resumption" },
        { date: "Oct 28, 2024", event: "Lectures Begin", category: "Academic" },
        { date: "Dec 20, 2024", event: "Christmas/New Year Break", category: "Holiday" },
        { date: "Jan 6, 2025", event: "Lectures Resume", category: "Academic" },
        { date: "Feb 14, 2025", event: "Lectures End", category: "Academic" },
        { date: "Feb 17 - 21, 2025", event: "Revision Week", category: "Academic" },
        { date: "Feb 24 - Mar 14, 2025", event: "First Semester Examinations", category: "Examination" },
      ]
    },
    {
      name: "Second Semester",
      events: [
        { date: "Mar 31, 2025", event: "Resumption for All Students", category: "Resumption" },
        { date: "Apr 7, 2025", event: "Lectures Begin", category: "Academic" },
        { date: "Jun 27, 2025", event: "Lectures End", category: "Academic" },
        { date: "Jun 30 - Jul 4, 2025", event: "Revision Week", category: "Academic" },
        { date: "Jul 7 - 25, 2025", event: "Second Semester Examinations", category: "Examination" },
        { date: "Jul 28, 2025", event: "Long Vacation Begins", category: "Holiday" },
      ]
    }
  ]
};

const CategoryBadge = ({ category }: { category: string }) => {
  const colors: Record<string, string> = {
    Resumption: "bg-blue-100 text-blue-700",
    Academic: "bg-green-100 text-green-700",
    Holiday: "bg-orange-100 text-orange-700",
    Examination: "bg-red-100 text-red-700",
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${colors[category] || "bg-gray-100 text-gray-700"}`}>
      {category}
    </span>
  );
};

export default function AcademicCalendar() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-hust-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-hust-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-hust-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              Academic <span className="text-hust-gold">Calendar</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Stay informed about important dates, semester schedules, and university events for the {academicCalendar.session} academic session.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-hust-gold text-hust-blue rounded-xl font-bold hover:bg-white transition-all shadow-lg">
                <Download className="mr-2 h-5 w-5" /> Download PDF Calendar
              </button>
              <button className="inline-flex items-center px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all">
                <Calendar className="mr-2 h-5 w-5" /> Add to Google Calendar
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendar Content */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white p-6 rounded-3xl shadow-lg mb-8">
          <Breadcrumbs />
        </div>
        <div className="space-y-12">
          {academicCalendar.semesters.map((semester, semIdx) => (
            <motion.div
              key={semester.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: semIdx * 0.2 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-gray-100 pb-8">
                  <div>
                    <span className="text-hust-accent font-bold tracking-widest uppercase text-sm mb-2 block">Semester Schedule</span>
                    <h2 className="text-4xl font-display font-bold text-hust-blue">{semester.name}</h2>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center text-gray-500 font-medium">
                    <Clock className="h-5 w-5 mr-2 text-hust-gold" />
                    {academicCalendar.session} Session
                  </div>
                </div>

                <div className="grid gap-6">
                  {semester.events.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 10 }}
                      className="flex flex-col md:flex-row md:items-center p-6 rounded-2xl bg-gray-50 border border-transparent hover:border-hust-accent/20 hover:bg-white hover:shadow-md transition-all group"
                    >
                      <div className="md:w-48 mb-2 md:mb-0">
                        <div className="flex items-center text-hust-blue font-bold">
                          <Calendar className="h-4 w-4 mr-2 text-hust-accent" />
                          {item.date}
                        </div>
                      </div>
                      
                      <div className="flex-grow flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-hust-blue transition-colors">
                          {item.event}
                        </h3>
                        <div className="flex items-center space-x-4">
                          <CategoryBadge category={item.category} />
                          <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-hust-accent transition-colors hidden md:block" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-hust-blue/5 rounded-3xl border border-hust-blue/10 text-center"
        >
          <p className="text-gray-600 italic">
            * Please note that these dates are subject to change by the University Management. Students are advised to check the portal regularly for updates.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-hust-gold rounded-3xl p-8 md:p-16 text-hust-blue flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Ready to start your journey?</h2>
            <p className="text-hust-blue/80 text-lg">
              Applications for the {academicCalendar.session} session are currently ongoing. Join Nigeria's fastest growing private university.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="px-8 py-4 bg-hust-blue text-white rounded-xl font-bold hover:bg-hust-accent transition-all shadow-lg text-center">
              Apply Now
            </button>
            <button className="px-8 py-4 bg-white text-hust-blue rounded-xl font-bold hover:bg-gray-50 transition-all shadow-md text-center">
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
