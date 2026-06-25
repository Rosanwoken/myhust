import { motion } from 'motion/react';
import { ClipboardList, ArrowRight, HelpCircle, ShieldCheck, CreditCard, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteContent } from '../constants/siteContent';
import FeesCalculator from '../components/FeesCalculator';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Fees() {
  const admissions = siteContent.admissions;
  const fees = admissions.fees;

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
            School Fees & Payment
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Transparent fee structure and flexible payment options for the 2025/2026 academic session.
          </p>
        </div>
      </section>

      {/* Fees Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="mb-6 p-4 bg-hust-blue/5 text-hust-accent inline-block rounded-2xl">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-hust-blue mb-3">Flexible Payments</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Students can pay in installments throughout the academic session as per the university's payment schedule.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="mb-6 p-4 bg-hust-blue/5 text-hust-accent inline-block rounded-2xl">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-hust-blue mb-3">Secure Transactions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                All payments are processed through secure university-approved channels and bank portals.
              </p>
            </div>
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="mb-6 p-4 bg-hust-blue/5 text-hust-accent inline-block rounded-2xl">
                <Receipt className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-hust-blue mb-3">Clear Breakdown</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every fee component is clearly listed, from tuition to accommodation and laboratory resources.
              </p>
            </div>
          </div>

          <div className="space-y-24">
            {/* Fee Calculator Widget */}
            <FeesCalculator />

            {/* Fee Schedule Table */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12 border-b border-gray-100 bg-hust-blue text-white">
                <h2 className="text-3xl font-display font-bold mb-4">{fees.title}</h2>
                <p className="text-gray-300 max-w-3xl">
                  {fees.desc}
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1200px]">
                  <thead>
                    <tr className="bg-gray-50">
                      {fees.fullSchedule.headers.map((header, i) => (
                        <th 
                          key={i} 
                          className={`p-6 text-xs font-bold uppercase tracking-wider text-hust-blue border-b border-gray-200 ${i === 0 ? 'sticky left-0 bg-gray-50 z-10' : ''}`}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {fees.fullSchedule.rows.map((row: any, i: number) => (
                      <tr 
                        key={i} 
                        className={`hover:bg-gray-50/50 transition-colors 
                          ${row.isTotal ? 'bg-hust-blue/5 font-bold' : ''} 
                          ${row.isSemester ? 'bg-hust-gold/5 italic' : ''}
                          ${row.isAcceptance ? 'bg-hust-accent/10 border-l-4 border-hust-accent' : ''}
                          ${row.isNewStudent ? 'bg-hust-accent/20 text-hust-accent' : ''}
                        `}
                      >
                        <td className={`p-6 text-sm font-bold border-r border-gray-100 
                          ${row.isTotal || row.isSemester || row.isAcceptance ? 'bg-inherit' : 'bg-white'} 
                          ${row.isTotal ? 'text-hust-blue' : 'text-gray-700'}
                          sticky left-0 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)]
                        `}>
                          {row.label}
                        </td>
                        {row.values.map((val: string, j: number) => (
                          <td key={j} className={`p-6 text-sm font-mono ${row.isNewStudent ? 'font-bold' : 'text-gray-600'}`}>
                            ₦{val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-8 md:p-12 bg-gray-50">
                <h4 className="text-lg font-bold text-hust-blue mb-6 flex items-center">
                  <ClipboardList className="h-5 w-5 mr-2 text-hust-gold" />
                  Payment Notes & Guidelines
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fees.fullSchedule.notes.map((note, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-hust-accent shrink-0"></div>
                      <p className="text-sm text-gray-600 leading-relaxed">{note}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-hust-blue text-white rounded-xl font-bold hover:bg-hust-accent transition-all flex items-center shadow-lg">
                    Download Full PDF Schedule <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <Link 
                    to="/contact"
                    className="px-8 py-4 bg-white border-2 border-hust-blue text-hust-blue rounded-xl font-bold hover:bg-hust-blue hover:text-white transition-all flex items-center"
                  >
                    Contact Bursary Office
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-hust-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="p-4 bg-white/10 rounded-2xl">
              <HelpCircle className="h-10 w-10 text-hust-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Need help with payments?</h3>
              <p className="text-gray-300">Our bursary team is available to assist you with any payment-related inquiries.</p>
            </div>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-hust-gold text-hust-blue rounded-full font-bold hover:bg-white transition-all"
          >
            Contact Bursary
          </Link>
        </div>
      </section>
    </div>
  );
}
