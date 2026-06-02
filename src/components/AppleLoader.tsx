import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../i18n';

export function AppleLoader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1300);
    const t2 = setTimeout(() => setStep(2), 2600);
    const t3 = setTimeout(() => setStep(3), 3900);
    const t4 = setTimeout(() => onComplete(), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const messages = [
    t('loader.line1'),
    t('loader.line2'),
    t('loader.line3'),
    t('loader.brand')
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col items-center justify-center text-white"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
      }}
    >
      {/* Apple-style background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="relative overflow-hidden px-6 text-center max-w-lg">
        <AnimatePresence mode="wait">
          {step < 4 && (
            <motion.h1
              key={step}
              initial={{ opacity: 0, y: 15, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(12px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`text-[2.25rem] sm:text-[3.25rem] md:text-[3.75rem] font-light tracking-tight leading-snug ${
                step === 3 
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] font-medium' 
                  : 'text-white'
              }`}
              style={{ fontFamily: isRTL ? "'Tajawal', sans-serif" : "'Instrument Serif', serif" }}
            >
              {messages[step]}
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
