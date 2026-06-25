import { motion } from 'motion/react';

export default function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-hust-blue"
    >
      <div className="relative flex flex-col items-center">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border-4 border-hust-gold/20 border-t-hust-gold rounded-full"
        />
        
        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute top-4 left-4 w-16 h-16 border-4 border-white/10 border-t-white rounded-full"
        />

        {/* Logo/Text Placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <h2 className="text-white font-display font-bold text-2xl tracking-widest">HUST</h2>
          <div className="h-1 w-12 bg-hust-gold mx-auto mt-2 rounded-full" />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-4 text-gray-400 text-xs uppercase tracking-[0.3em] font-medium"
        >
          Learning and Living
        </motion.p>
      </div>
    </motion.div>
  );
}
