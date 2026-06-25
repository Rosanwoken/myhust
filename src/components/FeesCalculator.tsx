import { useState } from 'react';
import { Calculator, Info, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { siteContent } from '../constants/siteContent';

export default function FeesCalculator() {
  const feesData = siteContent.admissions.fees.fullSchedule;
  const [selectedProgramIndex, setSelectedProgramIndex] = useState(0);
  const [isNewStudent, setIsNewStudent] = useState(true);

  // Helper to parse currency string to number
  const parseCurrency = (str: string) => {
    return parseFloat(str.replace(/,/g, ''));
  };

  // Helper to format number to currency string
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const returningTotalRow = feesData.rows.find(row => row.isTotal && !row.isNewStudent);
  const acceptanceRow = feesData.rows.find(row => row.isAcceptance);
  
  const baseTotalFeeStr = returningTotalRow?.values[selectedProgramIndex] || "0";
  const baseTotalFee = parseCurrency(baseTotalFeeStr);
  
  const acceptanceFeeStr = acceptanceRow?.values[selectedProgramIndex] || "0";
  const acceptanceFee = parseCurrency(acceptanceFeeStr);

  const schedule = [
    ...(isNewStudent ? [{
      label: "Acceptance Fee (Paid Separately)",
      percentage: 0,
      desc: "One-time non-refundable fee paid upon admission to secure your spot.",
      amount: acceptanceFee,
      isAcceptance: true
    }] : []),
    {
      label: "Before 1st Semester Resumption",
      percentage: 30,
      desc: "Initial installment of session fees required before resumption.",
      amount: baseTotalFee * 0.3,
      cumulative: 30
    },
    {
      label: "Before 1st Semester Examination",
      percentage: 30,
      desc: "Balance of the first semester fees.",
      amount: baseTotalFee * 0.3,
      cumulative: 60
    },
    {
      label: "Before 2nd Semester Resumption",
      percentage: 20,
      desc: "First installment for the second semester.",
      amount: baseTotalFee * 0.2,
      cumulative: 80
    },
    {
      label: "Before 2nd Semester Examination",
      percentage: 20,
      desc: "Final payment to complete the academic session fees.",
      amount: baseTotalFee * 0.2,
      cumulative: 100
    }
  ];

  return (
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="p-6 md:p-12 bg-hust-blue text-white">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-2 md:p-3 bg-white/10 rounded-xl md:rounded-2xl">
            <Calculator className="h-6 w-6 md:h-8 md:w-8 text-hust-gold" />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-display font-bold">Fees Payment Calculator</h2>
            <p className="text-xs md:text-base text-gray-300">Calculate your installment payments for the 2025/2026 session.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <label className="block text-sm font-bold uppercase tracking-widest text-hust-gold">
              Select Your Programme Category
            </label>
            <select
              value={selectedProgramIndex}
              onChange={(e) => setSelectedProgramIndex(parseInt(e.target.value))}
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-hust-gold transition-all appearance-none cursor-pointer"
            >
              {feesData.headers.slice(1).map((header, i) => (
                <option key={i} value={i} className="text-hust-blue">
                  {header}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-bold uppercase tracking-widest text-hust-gold">
              Student Type
            </label>
            <div className="flex bg-white/10 p-1 rounded-2xl border border-white/20">
              <button
                onClick={() => setIsNewStudent(true)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${isNewStudent ? 'bg-hust-gold text-hust-blue shadow-lg' : 'text-white hover:bg-white/5'}`}
              >
                New Student
              </button>
              <button
                onClick={() => setIsNewStudent(false)}
                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${!isNewStudent ? 'bg-hust-gold text-hust-blue shadow-lg' : 'text-white hover:bg-white/5'}`}
              >
                Returning Student
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100">
              <h3 className="text-[10px] md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
                {isNewStudent ? "Total (Session + Acceptance)" : "Total Session Fee"}
              </h3>
              <div className="text-2xl md:text-4xl font-display font-bold text-hust-blue">
                {formatCurrency(isNewStudent ? baseTotalFee + acceptanceFee : baseTotalFee)}
              </div>
              {isNewStudent && (
                <div className="mt-2 text-sm text-gray-500">
                  Base Session Fee: {formatCurrency(baseTotalFee)}
                </div>
              )}
              <div className="mt-4 p-4 bg-hust-gold/10 rounded-2xl flex items-start space-x-3">
                <Info className="h-5 w-5 text-hust-blue shrink-0 mt-0.5" />
                <p className="text-xs text-hust-blue leading-relaxed">
                  {isNewStudent 
                    ? "The installment breakdown below applies only to the session fees. The acceptance fee is paid separately upon admission."
                    : "This total includes tuition, accommodation, and all other mandatory university charges for the full academic year."}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-hust-blue flex items-center">
                <CheckCircle2 className="h-5 w-5 mr-2 text-green-500" />
                Payment Policy Highlights
              </h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-600 flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-hust-accent mt-1.5 mr-3 shrink-0"></div>
                  60% must be paid before 1st Semester Exams
                </li>
                <li className="text-sm text-gray-600 flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-hust-accent mt-1.5 mr-3 shrink-0"></div>
                  80% must be paid before 2nd Semester Resumption
                </li>
                <li className="text-sm text-gray-600 flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-hust-accent mt-1.5 mr-3 shrink-0"></div>
                  100% must be paid before 2nd Semester Exams
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-hust-blue mb-8">Installment Breakdown</h3>
            <div className="space-y-6">
              {schedule.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-8 border-l-2 border-gray-100 pb-6 last:pb-0"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-hust-gold border-4 border-white shadow-sm"></div>
                  <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border transition-colors ${item.isAcceptance ? 'bg-hust-accent/5 border-hust-accent/20' : 'bg-gray-50 border-gray-100 hover:border-hust-accent'}`}>
                    <div className="max-w-md">
                      <div className="flex items-center space-x-3 mb-1">
                        <h4 className="font-bold text-hust-blue">{item.label}</h4>
                        {!item.isAcceptance && (
                          <span className="px-2 py-0.5 bg-hust-blue text-white text-[10px] font-bold rounded-full">
                            {item.percentage}%
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-xl font-bold ${item.isAcceptance ? 'text-hust-blue' : 'text-hust-accent'}`}>{formatCurrency(item.amount)}</div>
                      {!item.isAcceptance && (
                        <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                          Cumulative: {item.cumulative}%
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 md:mt-12 p-6 md:p-8 bg-hust-blue/5 rounded-2xl md:rounded-3xl border border-hust-blue/10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 md:p-3 bg-white rounded-xl md:rounded-2xl shadow-sm">
                  <Calculator className="h-5 w-5 md:h-6 md:w-6 text-hust-blue" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-bold text-hust-blue">Need a custom plan?</h4>
                  <p className="text-xs md:text-sm text-gray-600">Contact the bursary office for special arrangements.</p>
                </div>
              </div>
              <button className="w-full md:w-auto px-8 py-3 bg-hust-blue text-white rounded-xl font-bold hover:bg-hust-accent transition-all flex items-center justify-center">
                Contact Bursary <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
