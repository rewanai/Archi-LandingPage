import React from 'react';
import { motion } from 'motion/react';
import { Share2, Wand2, Target } from 'lucide-react';
import { useLanguage } from '../i18n';

export function Features() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full max-w-[1400px] 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-24 sm:py-32 overflow-hidden bg-[#f5f3ee]">
      {/* Faint Dot Grid Background on the left side to match the hero vibe */}
      <div 
         className="absolute top-0 left-0 w-1/3 h-full z-0 opacity-40 pointer-events-none hidden md:block"
         style={{
           backgroundImage: 'radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 0)',
           backgroundSize: '36px 36px',
           maskImage: 'linear-gradient(to right, black, transparent)',
           WebkitMaskImage: 'linear-gradient(to right, black, transparent)'
         }} 
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Section Headers */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.5 }}
           transition={{ duration: 0.8 }}
           className="flex flex-col items-center mb-16 sm:mb-24"
        >
           {/* Horizontal divider with text */}
           <div className="flex items-center justify-center w-full mb-10 sm:mb-12">
             <div className="flex-1 h-[1px] bg-slate-200"></div>
             <span className="px-6 text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-slate-400 uppercase">
                {t('features.divider')}
             </span>
             <div className="flex-1 h-[1px] bg-slate-200"></div>
           </div>

           <h2 className="text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] font-[300] text-[#111111] leading-[1.1] tracking-tight text-center mb-6">
             {t('features.heading')}
           </h2>
           
           <p className="text-slate-500 text-[15px] sm:text-[16px] leading-[1.8] max-w-2xl text-center font-medium">
             {t('features.desc')}
           </p>
        </motion.div>

        {/* Feature Cards Grid (Staggered Animation) */}
        <motion.div 
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           className="grid grid-cols-1 md:grid-cols-3 border-y border-slate-200"
        >
           {/* Feature 1 */}
           <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-8 lg:p-12 border-b md:border-b-0 border-slate-200 bg-transparent">
              <div className="w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Share2 className="w-7 h-7 text-slate-700 stroke-[1.5]" />
              </div>
              <h3 className="text-[17px] font-semibold text-slate-900 mb-4">{t('features.f1.title')}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed max-w-[280px]">
                {t('features.f1.desc')}
              </p>
           </motion.div>

           {/* Feature 2 */}
           <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-8 lg:p-12 border-b md:border-b-0 md:border-x border-slate-200 bg-transparent">
              <div className="w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Wand2 className="w-7 h-7 text-slate-700 stroke-[1.5]" />
              </div>
              <h3 className="text-[17px] font-semibold text-slate-900 mb-4">{t('features.f2.title')}</h3>
              <p className="text-[14px] text-slate-500 leading-relaxed max-w-[280px]">
                {t('features.f2.desc')}
              </p>
           </motion.div>

           {/* Feature 3 */}
           <motion.div variants={itemVariants} className="flex flex-col items-center text-center p-8 lg:p-12 pt-10 md:pt-12 bg-transparent">
              <div className="w-12 h-12 flex items-center justify-center rounded-full mb-6 relative">
                <Target className="w-7 h-7 text-slate-700 stroke-[1.5]" />
              </div>
              <h3 className="text-[17px] font-semibold text-slate-900 mb-4 flex items-center justify-center">
                {t('features.f3.title')}
                <span className="bg-[#111] text-white text-[9px] font-bold tracking-widest px-2 py-0.5 rounded-full ml-3 translate-y-[0px]">NEW</span>
              </h3>
              <p className="text-[14px] text-slate-500 leading-relaxed max-w-[280px]">
                {t('features.f3.desc')}
              </p>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
